"use client";

import { Button } from "@/components/ui/button";
import Pagination from "@/components/ui/pagination";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { promise } from "zod";

const HeroSection = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center relative">
      <Image
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-30"
        src={"/magazine-hero-background.png"}
        alt="Background"
        width={1080}
        height={720}
      />

      <Image
        className="absolute bottom-0 left-[66%] w-1/6 -translate-x-1/2"
        src={"/magazine-hero-2.png"}
        width={500}
        height={500}
        alt="test"
      />

      <div className="flex flex-row z-10 w-3/4">
        <div className="flex flex-col justify-center">
          <p className="font-anderson mb-4">Magazine</p>
          <p className="font-graziela text-6xl mb-8">
            <span className="font-graziela">R</span>
            ead for &#160;
            <span className="font-graziela">L</span>
            atest insi
            <span className="font-graziela">g</span>
            hts
          </p>
          <div>
            <a href="#cover">
              <Button className="rounded-full">See More</Button>
            </a>
          </div>
        </div>
        <Image
          className="ml-auto w-1/3"
          src={"/magazine-hero-1.png"}
          width={500}
          height={500}
          alt="test"
        />
      </div>
    </section>
  );
};

interface Magazine {
  title: string,
  cover: string
}

type MagazineSetter = (magazine: Magazine, origin: HTMLImageElement) => void

const styleElement = (el: HTMLElement, style: Partial<HTMLElement["style"]>) => {
  Object.entries(style).forEach(([k, v]) => el.style[k as any] = v as any)
}

const createWaiter = () => {
  let resolver: (value: void) => void;
  const promise = new Promise<void>((resolve) => {
    resolver = resolve
  })
  return [
    promise,
    //@ts-ignore
    resolver
  ] as const
}

const waitListener = function <T extends EventTarget>(listener: T, type: string) {
  const [promise, resolver] = createWaiter()

  listener.addEventListener(type, () => {
    resolver()
  })
  return promise
}

const waitFrame = () => {
  const [promise, resolver] = createWaiter()

  requestAnimationFrame(() => {
    resolver()
  })
  return promise
}

const MagazineSection = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [forceLandscape, setForceLandscape] = useState(false)
  const showing = useRef(false)

  const closeMagazine = () => {
    (async function () {
      const iframe = iframeRef.current
      if (!iframe) return
      styleElement(iframe, {
        opacity: "1",
        transitionProperty: "opacity",
        transitionDuration: "1s"
      })

      await waitFrame()
      styleElement(iframe, { opacity: "0" })

      await waitListener(iframe, "transitionend")
      styleElement(iframe, {
        opacity: "",
        transitionProperty: "",
        transitionDuration: ""
      })
      iframe.style.visibility = "hidden"
      iframe.style.pointerEvents = "none"
      document.body.style.overflow = ""
      showing.current = false
    })();
  }

  const magazineSetter: MagazineSetter = (newMagazine, origin) => {
    (async function () {
      const iframe = iframeRef.current
      if (!iframe) return
      const closeListener = ({ data }: MessageEvent) => {
        if (data == "close") {
          closeMagazine()
          window.removeEventListener("message", closeListener)
        }
      }
      window.addEventListener("message", closeListener)

      const { top, left, width, height } = origin.getBoundingClientRect()
      const vWidth = window.innerWidth
      const vHeight = window.innerHeight

      const div = document.createElement("div")
      styleElement(div, {
        top: top + "px",
        left: left + "px",
        width: ((width * 100) / vWidth) + "vw",
        height: ((height * 100) / vHeight) + "vh",
        zIndex: "100",
        position: "fixed",
        backgroundColor: "black",
        padding: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transitionProperty: "width, height, top, left",
        transitionDuration: "1s"
      })
      iframe.insertAdjacentElement("afterend", div)

      const img = document.createElement("img")
      img.src = origin.src
      div.appendChild(img)
      styleElement(img, {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        opacity: "1",
        transitionProperty: "opacity",
        transitionDuration: "0.9s"
      })

      await waitFrame()
      styleElement(div, {
        top: "0px",
        left: "0px",
        width: "100vw",
        height: "100vh"
      })
      styleElement(img, {
        opacity: "0"
      })

      await waitListener(div, "transitionend")

      iframe.contentWindow?.postMessage(newMagazine.title)

      iframe.style.visibility = "visible"
      iframe.style.pointerEvents = "auto"
      document.body.style.overflow = "hidden"

      await waitFrame()
      styleElement(div, {
        opacity: "0",
        transitionProperty: "opacity",
        transitionDuration: "0.1"
      })

      await waitListener(div, "transitionend")
      div.remove()
    })();
  }

  useEffect(() => {
    const reorient = () => {
      const width = (window.innerWidth - 100)
      const height = (window.innerHeight - 50)

      if (width < height * 1.41) setForceLandscape(true)
      else setForceLandscape(false)
    }
    reorient()

    window.addEventListener("resize", reorient)
    return () => {
      window.removeEventListener("resize", reorient)
    }
  }, [])

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    iframe.style.width = forceLandscape ? "100vh" : "100vw"
    iframe.style.height = forceLandscape ? "100vw" : "100vh"
    iframe.style.transform = "translate(-50%, -50%)" + (forceLandscape ? "rotate(90deg)" : "")
  }, [forceLandscape, iframeRef])

  return [
    <iframe key={0} ref={iframeRef} src="/magazine/viewer" className={"fixed pointer-events-none invisible top-1/2 left-1/2 z-[100]"} />,
    magazineSetter
  ] as const
}

const CoverSection = (magazine: Magazine, setMagazine: MagazineSetter) => {
  const coverRef = useRef<HTMLImageElement>(null)

  return <li className="flex flex-col gap-2 cursor-pointer" key={magazine.title} onClick={() => setMagazine(magazine, coverRef.current as any)}>
    <Image ref={coverRef} src={magazine.cover} alt="cover" width={300} height={300} />
    <p className="text-center">Lorem ipsum dolor sit amet</p>
  </li>
}

const CatalogueSection = (setMagazine: MagazineSetter) => {
  const [page, setPage] = useState(2);

  return <section id="cover" className="bg-black w-screen p-20 [&>*]:bg-transparent flex flex-col gap-5 items-center z-10">
    <ul className="grid gap-5 grid-cols-4 grid-rows-3 max-w-7xl">
      {(new Array(12)).fill(0).map((_, i) => CoverSection({
        title: i.toString(),
        cover: "/magazine-a4-cover.png"
      }, setMagazine))}
    </ul>
    <Pagination
      currentPage={page}
      setPage={setPage}
      totalPages={9}
      variant="primary"
      control="icon"
    />
  </section>
}

const MagazineDisplay = () => {
  const [magazineSection, setMagazine] = MagazineSection()
  const catalogueSection = CatalogueSection(setMagazine)
  return [catalogueSection, magazineSection]
}

const TedMagazinePage = () => {
  const setTitle = (a: string) => { console.log(a) }

  const [catalogueSection, magazineSection] = MagazineDisplay()
  return (
    <>
      {magazineSection}
      <main className={"flex flex-auto flex-col items-center justify-center text-white font-anderson relative"}>
        <HeroSection />
        {catalogueSection}
      </main>
    </>
  );
};

export default TedMagazinePage;
