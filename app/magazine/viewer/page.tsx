"use client"

import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Orientation, PageFlip } from "page-flip";
import { useEffect, useRef, useState } from "react";
import Book from "react-pageflip";
import { Communication } from '../shared';

const Page = () => {
  const parentRef = useRef<Window>(null)
  const pageRef = useRef<number>(0)
  const pageFlipRef = useRef<{ pageFlip: () => PageFlip }>()
  const pageContainerRef = useRef<HTMLImageElement>(null)

  const [ready, setReady] = useState(false)
  const [slug, setSlug] = useState("Hello, world!")
  const [inputPage, setInputPage] = useState("0")
  const [pageHeight, setPageHeight] = useState(300)
  const [pageWidth, setPageWidth] = useState(300)

  const resize = () => {
    const width = (window.innerWidth - 200)
    const height = (window.innerHeight - 150)
    if (width < 0 || height < 0) return

    document.body.style.overflow = "hidden"
    if (width < height * 1.41) {
      setPageWidth(width / 2)
      setPageHeight(width / 1.41)
    } else {
      setPageHeight(height)
      setPageWidth((height * 1.41) / 2)
    }

    requestIdleCallback(() => {
      if (!pageFlipRef.current) return
      const pageFlip = pageFlipRef.current.pageFlip();
      pageFlip.updateOrientation("landscape" as Orientation);
      setReady(true)
    })

    const parent = parentRef.current
    const cover = pageContainerRef.current
    if (!parent || !cover || parent == window) return

    parent.postMessage(JSON.stringify({
      info: "boundUpdate",
      bounding: cover.getBoundingClientRect()
    } satisfies Communication))
  }

  useEffect(() => resize(), [pageHeight, pageWidth])
  useEffect(() => {
    const parent = window.parent
    // @ts-ignore
    parentRef.current = parent

    window.addEventListener("message", ({ data }) => {
      const msg = JSON.parse(data) as Communication
      if (msg.info == "slugUpdate") {
        const pageFlip = pageFlipRef.current?.pageFlip();
        pageFlip?.turnToPage(0)
        setSlug(msg.title)
      }
    })

    console.log(pageContainerRef)
    resize()
    window.addEventListener("resize", resize)
    updateInputDisplay()
    return () => window.removeEventListener("resize", resize)
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
      ready ? "opacity-100" : "opacity-0"
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

              const pageFlip = pageFlipRef.current?.pageFlip()
              if (page % 2 == 1) page--;
              pageFlip?.turnToPage(page)
            }}
          />
          <p className='pt-1'>&nbsp;/&nbsp;{100}</p>
        </div>
        <div className='flex flex-1'>
          <button onClick={closeWindow} className='text-white ml-auto'>
            <X />
          </button>
        </div>
      </div>
      <div className='flex flex-row'>
        <button onClick={() => {
          pageFlipRef.current?.pageFlip().flipPrev()
        }} className='text-white h-full w-10 flex justify-center items-center'>
          <ChevronLeft />
        </button>
        <div ref={pageContainerRef} className="flex flex-row justify-center items-center" style={{ width: 2 * pageWidth + "px", height: pageHeight + "px" }}>
          {/*
                    // @ts-ignore */}
          <Book
            height={pageHeight}
            width={pageWidth}
            size={"stretch"}
            ref={pageFlipRef}
            onFlip={({ data }) => {
              pageRef.current = data
              if (inputPage.includes("-")) updateInputDisplay()
            }}
          >
            <div className='bg-black'></div>
            <img ref={() => { console.log("mounted") }} className='w-full h-full border-2 border-black' src="/magazine-a4-cover.png" />
            {
              (new Array(10)).fill(null).map((_, i) => {
                return <div key={i} className="text-white border-2 border-black bg-blue-950 p-5" style={{ width: pageWidth + 'px', height: pageHeight + 'px' }}>
                  <p>Book {slug}</p>
                  <img src={`https://picsum.photos/id/${12 || Math.floor(Math.random() * 100) + 1}/200`} />
                  <p>Page {i + 2}</p>
                </div>
              })
            }
            <div className='bg-black'></div>
          </Book>
        </div>
        <button onClick={() => {
          pageFlipRef.current?.pageFlip().flipNext()
        }} className='text-white h-full w-10 flex justify-center items-center'>
          <ChevronRight />
        </button>
      </div>
    </div>
  </div>
}

export default Page