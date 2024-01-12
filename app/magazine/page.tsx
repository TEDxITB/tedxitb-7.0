"use client";

import { Button } from "@/components/ui/button";
import Pagination from "@/components/ui/pagination";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Communication, getMagazines } from "./shared";
import { Magazine } from "./shared";
import "./style.css"
import { createWaiter, styleElement, waitFrame, waitListener } from "./shared";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="w-screen text-white flex justify-center items-center relative">
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

type MagazineSetter = (magazine: Magazine, origin: HTMLImageElement) => void

const MagazineViewerSection = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const iframeSync = useRef(createWaiter())
  const targetCoverRef = useRef<DOMRect>()
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
      document.documentElement.style.overflow = ""
      showing.current = false
    })();
  }

  const openMagazine: MagazineSetter = (newMagazine, origin) => {
    (async function () {
      const iframe = iframeRef.current
      if (!iframe) return

      await iframeSync.current.waiter

      const { top, left, width, height } = origin.getBoundingClientRect()
      const vWidth = window.innerWidth
      const vHeight = window.innerHeight
      const targetCover = targetCoverRef.current

      const div = document.createElement("div")
      styleElement(div, {
        top: "0px",
        left: "0px",
        width: "100vw",
        height: "100vh",
        zIndex: "100",
        position: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0)",
        padding: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transitionProperty: "background",
        transitionDuration: "1s"
      })
      iframe.insertAdjacentElement("afterend", div)

      const img = document.createElement("img")
      img.src = origin.src
      div.appendChild(img)

      if (targetCover) {
        styleElement(img, {
          width: width + "px",
          height: height + "px",
          position: "fixed",
          top: top + "px",
          left: left + "px",
          transitionProperty: "width, height, top, left, transform",
          transitionDuration: "1s",
          pointerEvents: "none"
        })
      } else {
        styleElement(img, {
          width: "100%",
          height: "100%",
          objectFit: "contain",
          opacity: "1",
          transitionProperty: "opacity",
          transitionDuration: "0.9s"
        })
      }

      await waitFrame()
      styleElement(div, {
        backgroundColor: "rgba(0, 0, 0, 1)",
      })

      if (targetCover) {
        const { top, left, width, height } = targetCover
        if (forceLandscape) {
          styleElement(img, {
            top: (left + (width / 2)) + "px",
            left: (vWidth - (top)) + "px",
            width: (width / 2) + "px",
            height: height + "px",
            transformOrigin: "top left",
            transform: "rotate(90deg)"
          })
        } else {
          styleElement(img, {
            width: (width / 2) + "px",
            height: height + "px",
            top: top + "px",
            left: left + (width / 2) + "px",
          })
        }
      } else {
        styleElement(img, {
          opacity: "0"
        })
      }

      await waitListener(div, "transitionend")

      iframe.contentWindow?.postMessage(JSON.stringify({
        info: "slugUpdate",
        slug: newMagazine.slug
      } satisfies Communication))

      iframe.style.visibility = "visible"
      iframe.style.pointerEvents = "auto"
      document.documentElement.style.overflow = "hidden"

      await waitFrame()
      styleElement(div, {
        opacity: "0",
        transitionProperty: "opacity",
        transitionDuration: "0.3s"
      })

      await waitListener(div, "transitionend")
      div.remove()
    })();
  }

  useEffect(() => {
    const messageListener = ({ data }: MessageEvent) => {
      const msg = JSON.parse(data) as Communication
      if (msg.info == "boundUpdate") {
        targetCoverRef.current = msg.bounding
      } else if (msg.info == "close") {
        closeMagazine()
      } else if (msg.info == "ready") {
        iframeSync.current.resolve()
      }
    }
    window.addEventListener("message", messageListener)

    const reorient = () => {
      const width = (window.innerWidth - 100)
      const height = (window.innerHeight - 50)

      if (width < height * 1.41) setForceLandscape(true)
      else setForceLandscape(false)
    }
    window.addEventListener("resize", reorient)
    reorient()

    return () => {
      window.removeEventListener("message", messageListener)
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
    openMagazine
  ] as const
}

const CoverSection = ({ magazine, setMagazine }: {
  magazine: Magazine,
  setMagazine: MagazineSetter
}) => {
  const coverRef = useRef<HTMLImageElement>(null)

  return <li className="flex flex-col gap-2 cursor-pointer" onClick={() => setMagazine(magazine, coverRef.current as any)}>
    <Image ref={coverRef} src={magazine.content[0]} alt="cover" width={300} height={300} />
    <p className="text-center">Lorem ipsum dolor sit amet</p>
  </li>
}

const CatalogueSection = (setMagazine: MagazineSetter) => {
  const [data, setData] = useState<Magazine[]>([]);
  const [page, setPage] = useState(1);
  const [showingPage, setShowingPageState] = useState(page)
  const ref = useRef<HTMLDivElement>(null)

  const setShowingPage = (page: number) => {
    const container = ref.current
    if (!container) return

    container.style.transitionDuration = "0s"
    container.classList.remove("translate-x-1/2")
    container.classList.remove("-translate-x-1/2")
    requestIdleCallback(() => {
      container.style.transitionDuration = ""
      setShowingPageState(page)
    })
  }

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const cbEnd = () => {
      if (showingPage != page) setShowingPage(page)
      container.removeEventListener("transitionend", cbEnd)
    }
    container.addEventListener("transitionend", cbEnd)
  }, [page, showingPage])

  useEffect(() => {
    getMagazines().then((m) => setData(m))

  }, [])

  if (showingPage != page && ref.current) {
    const container = ref.current
    requestAnimationFrame(() => {
      if (container.getAnimations().length == 0 && showingPage != page) {
        setShowingPage(page)
      }
    })
  }

  return <section id="cover" className="bg-black text-white font-anderson overflow-hidden w-screen p-7 flex flex-col gap-5 items-center z-10">
    <div
      ref={ref}
      className={cn(
        "transition-all duration-300",
        showingPage != page ? ("opacity-0 scale-90 " + (showingPage < page ? "-translate-x-1/2" : "translate-x-1/2")) : "opacity-100"
      )}
    >
      <ul className="grid gap-5 grid-cols-4 grid-rows-1 max-w-7xl">
        {(data).slice((showingPage - 1) * 3, showingPage * 3).map(magazine =>
          <CoverSection key={magazine.title} {...{ magazine, setMagazine }} />
        )}
      </ul>
    </div>

    <div className="mt-auto [&>*]:bg-transparent">
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={Math.ceil(data.length / 12)}
        variant="primary"
        control="icon"
      />
    </div>
  </section>
}

const MagazineComponent = () => {
  const [magazineSection, setMagazine] = MagazineViewerSection()
  const catalogueSection = CatalogueSection(setMagazine)
  return [catalogueSection, magazineSection]
}

const TedMagazinePage = () => {
  const [catalogueSection, magazineSection] = MagazineComponent()
  return (
    <>
      {magazineSection}
      <HeroSection />
      {catalogueSection}
      <main className={"flex flex-auto flex-col items-center justify-center text-white font-anderson relative"}>
      </main>
    </>
  );
};

export default TedMagazinePage;
