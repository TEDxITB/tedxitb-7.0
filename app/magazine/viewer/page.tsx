"use client"

import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Loader, X } from 'lucide-react';
import { Orientation, PageFlip } from "page-flip";
import { useEffect, useRef, useState } from "react";
import Book from "react-pageflip";
import { Communication, Magazine, getMagazine, getMagazines } from '../shared';
import Image from 'next/image';
import "../style.css"

const recalculatePageDimension = function (): { width: number, height: number } {
  const width = (window.innerWidth - 200)
  const height = (window.innerHeight - 150)
  if (width < 0 || height < 0) return { width: 1, height: 1 }

  document.body.style.overflow = "hidden"
  if (width < height * 1.41) {
    return { width: width / 2, height: width / 1.41 }
  } else {
    return { width: height * 1.41 / 2, height: height }
  }
}

const Page = () => {
  const parentRef = useRef<Window>(null)
  const pageRef = useRef<number>(0)
  const pageFlipRef = useRef<PageFlip>()
  const bookContainerRef = useRef<HTMLDivElement>(null)
  const pageRendererRef = useRef<HTMLDivElement>(null)
  const pageRenderedRef = useRef<HTMLElement[]>([])

  const [inputPage, setInputPage] = useState("0")
  const [magazine, setMagazineState] = useState<Magazine>()

  const [pageWidth, setPageWidth] = useState(0)
  const [pageHeight, setPageHeight] = useState(0)

  const rebuildPageFlip = () => {
    const bookContainer = bookContainerRef.current
    const pageRenderer = pageRendererRef.current
    if (!magazine || !bookContainer || !pageRenderer) return
    bookContainer.innerHTML = ""
    const pageFlip = new PageFlip(bookContainer, {
      width: pageWidth,
      height: pageHeight,
      size: "stretch" as any,
      startPage: 0
    })

    const childs = Array.from(pageRenderer.children) as HTMLElement[]
    pageRenderedRef.current = childs

    pageFlip.loadFromHTML(childs)
    pageFlip.on("flip", ({ data }) => {
      pageRef.current = data as number
      updateInputDisplay()
    })
    pageFlip.turnToPage(0)
    pageFlipRef.current = pageFlip
  }

  const resize = () => {
    const { width, height } = recalculatePageDimension()
    setPageWidth(width)
    setPageHeight(height)

    const parent = parentRef.current
    const container = bookContainerRef.current
    if (!parent || !container || parent == window) return

    parent.postMessage(JSON.stringify({
      info: "boundUpdate",
      bounding: container.getBoundingClientRect()
    } satisfies Communication))
  }

  useEffect(() => rebuildPageFlip(), [magazine])
  useEffect(() => resize(), [pageHeight, pageWidth])

  const setMagazine = (data: Magazine) => {
    pageRenderedRef.current.forEach(el => {
      pageRendererRef.current?.appendChild(el)
    })
    setMagazineState(data)
  }

  useEffect(() => {
    const parent = window.parent
    // @ts-ignore
    parentRef.current = parent

    window.addEventListener("message", ({ data }) => {
      const msg = JSON.parse(data) as Communication
      if (msg.info == "slugUpdate") {
        getMagazine(msg.slug).then((data) => {
          setMagazine(data)
        })
      }
    })

    const slug = new URLSearchParams(window.location.search).get("slug")
    if (slug) {
      window.postMessage(JSON.stringify({
        info: "slugUpdate",
        slug
      } satisfies Communication))
    }

    resize()
    updateInputDisplay()
    window.addEventListener("resize", resize)
    requestAnimationFrame(() => {
      if (window != parent) parent.postMessage(JSON.stringify({
        info: "ready"
      } satisfies Communication))
    })
  }, [])

  const updateInputDisplay = () => {
    const page = pageRef.current
    setInputPage(`${page}-${page + 1}`)
  }

  const closeWindow = () => {
    const parent = parentRef.current
    if (!parent) return

    if (parent == window) {
      window.location.href = "/magazine"
    } else {
      parent.postMessage(JSON.stringify({
        info: "close"
      } satisfies Communication))
    }
  }

  return <div className='bg-black fixed w-screen h-screen z-[100]'>
    <div className={cn(
      "transition-opacity duration-500 w-screen h-screen flex flex-col justify-center items-center gap-3",
      magazine && magazine.content.length > 0 ? "opacity-100" : "opacity-0"
    )}>
      <div className='flex flex-row' style={{ width: pageWidth * 2 + "px" }}>
        <div className='flex-1'></div>
        <div className=' text-white flex flex-row font-anderson text-lg'>
          <p className='pt-1'>Pages:&nbsp;</p>
          <input
            className='bg-white text-black w-14 text-center rounded-lg pt-1'
            value={inputPage}
            pattern="[0-9]"
            type='text'
            onFocus={() => setInputPage("")}
            onBlur={() => updateInputDisplay()}
            onChange={(e) => {
              const raw = Array.from(e.target.value).filter(c => '0' <= c && c <= '9').join("")
              setInputPage(raw)

              let page = parseInt(raw)
              if (page < 0 || 10 < page) {
                if (page < 0) page = 0
                if (10 < page) page = 10
                setInputPage(page.toString())
              }

              if (page % 2 == 1) page--;
              pageFlipRef.current?.turnToPage(page)
            }}
          />
          <p className='pt-1'>&nbsp;/&nbsp;{magazine?.content.length || 0}</p>
        </div>
        <div className='flex flex-1'>
          <button onClick={closeWindow} className='text-white ml-auto'>
            <X />
          </button>
        </div>
      </div>
      <div className='flex flex-row'>
        <button onClick={() => {
          pageFlipRef.current?.flipPrev()
        }} className='text-white h-full w-10 flex justify-center items-center'>
          <ChevronLeft />
        </button>

        {/* Page Renderer, BEWARE: Only rendered ONCE every magazine update, so react state won't work here */}
        <div ref={pageRendererRef} className='hidden'>
          <div className='bg-black'></div>
          {
            (magazine?.content || []).map((src, i) => <div key={i} className='bg-black border-2 border-black overflow-hidden relative'>
              <Image onLoad={(e) => { e.currentTarget.nextElementSibling?.remove() }} src={src} width={1000} height={1000} className='peer relative w-full h-full z-20' alt='' />
              <div className='z-10 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-[data-loaded]:hidden'>
                <Loader size={50} className='animate-spin' />
              </div>
            </div>)
          }
          {
            (magazine?.content && magazine?.content.length % 2 == 0) ?
              <div className='bg-black'></div> : null
          }
        </div>

        <div className="flex flex-row justify-center items-center relative" style={{ width: 2 * pageWidth + "px", height: pageHeight + "px" }}>
          <div ref={bookContainerRef} className='w-full h-full'></div>
        </div>

        <button onClick={() => {
          pageFlipRef.current?.flipNext()
        }} className='text-white h-full w-10 flex justify-center items-center'>
          <ChevronRight />
        </button>
      </div>
    </div>
  </div>
}

export default Page