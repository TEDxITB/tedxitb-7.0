"use client";

import { Button } from "@/components/ui/button";
import Pagination from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

const TedMagazinePage = () => {
  const [page, setPage] = useState(2);
  const [title, setTitle] = useState<string | null>("magazine1")
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const listener = ({ data }: MessageEvent) => {
      console.log(data)
      if (data == "close") {
        setTitle(null)
      }
    }

    window.addEventListener("message", listener)

    return () => {
      window.removeEventListener("message", listener)
    }
  }, [])

  useEffect(() => {
    if (title) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
  }, [title])

  const [orientation, setOrientation] = useState<"landscape" | "portrait">()

  useEffect(() => {
    const resize = () => {
      const width = (window.innerWidth - 100)
      const height = (window.innerHeight - 50)

      if (width < height * 1.41) {
        setOrientation("portrait")
      } else {
        setOrientation("landscape")
      }
    }
    resize()

    window.addEventListener("resize", resize)
    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <>
      <section onClick={() => setTitle(null)} className={cn(
        "fixed w-screen h-screen bg-black z-[100] duration-500 transition-opacity",
        title ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        {
          title ?
            <iframe ref={iframeRef} src={`/magazine/${title}`} className={cn(
              orientation == "portrait" ? "w-[100vh] h-[100vw] rotate-90" : "w-[100vw] h-[100vh]",
              "fixed z-[100] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            )} /> : null
        }
      </section>
      <main className={cn(title ? "" : "", "flex flex-auto flex-col items-center justify-center text-white font-anderson relative")}>
        <HeroSection />
        <section id="cover" className="bg-black w-screen p-20 [&>*]:bg-transparent flex flex-col gap-5 items-center z-10">
          <ul className="grid gap-5 grid-cols-4 grid-rows-3 max-w-7xl">
            {(new Array(12)).fill(0).map((_, i) => {
              return <li className="flex flex-col gap-2 cursor-pointer" key={i} onClick={() => setTitle(i.toString())}>
                <Image src={"/magazine-cover-placeholder.png"} alt="cover" width={300} height={300} />
                <p className="text-center">Lorem ipsum dolor sit amet</p>
              </li>
            })}
          </ul>
          <Pagination
            currentPage={page}
            setPage={setPage}
            totalPages={9}
            variant="primary"
            control="icon"
          />
        </section>
      </main>
    </>
  );
};

export default TedMagazinePage;
