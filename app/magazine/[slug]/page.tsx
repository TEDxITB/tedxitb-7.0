"use client"

import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Loader, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Orientation, PageFlip } from "page-flip";
import { useEffect, useRef, useState } from "react";
import Book from "react-pageflip";

const Page = () => {
    const path = usePathname()
    const name = path.substring("/magazine/".length)

    const parentRef = useRef<Window>(null)
    const pageRef = useRef<any>()

    const [show, setShow] = useState(false)
    const [pageHeight, setPageHeight] = useState(300)
    const [pageWidth, setPageWidth] = useState(300)

    const resize = () => {
        const width = (window.innerWidth - 100)
        const height = (window.innerHeight - 50)

        if (width < height * 1.41) {
            setPageWidth(width / 2)
            setPageHeight((width / 2) * 1.41)
        } else {
            setPageWidth((height / 2) * 1.41)
            setPageHeight(height)
        }

        requestIdleCallback(() => {
            const page: PageFlip = pageRef.current.pageFlip();
            page.updateOrientation("landscape" as Orientation);
            setShow(true)
        })
    }

    useEffect(() => {
        if (!pageRef.current) return
        resize()

        window.addEventListener("resize", resize)

        return () => {
            window.removeEventListener("resize", resize)
        }
    }, [pageHeight, pageWidth])

    useEffect(() => {
        // @ts-ignore
        parentRef.current = window.parent
        console.log(window.parent)
    }, [])

    const closeWindow = () => {
        const parent = parentRef.current
        if (!parent) return

        if (parent == window) {
            window.location.href = "/magazine"
        } else {
            parent.postMessage("close")
        }
    }

    return <div className='bg-black fixed w-screen h-screen z-[100]'>
        {
            show ? null :
                <div className='absolute top-1/2 left-1/2 text-white z-10 animate-spin'>
                    <Loader />
                </div>
        }
        <div className={cn(!show ? "opacity-0" : "w-screen h-screen flex flex-col justify-center items-center")}>
            <div className='flex' style={{ width: pageWidth * 2 + "px" }}>
                <button onClick={closeWindow} className='text-white ml-auto'>
                    <X />
                </button>
            </div>
            <div className='flex flex-row'>
                <button onClick={() => {
                    (pageRef.current.pageFlip() as PageFlip).flipPrev()
                }} className='text-white h-full'>
                    <ChevronLeft />
                </button>
                <div className="flex flex-row justify-center items-center" style={{ width: 2 * pageWidth + "px", height: pageHeight + "px" }}>
                    {/*
                    // @ts-ignore */}
                    <Book
                        // className="pointer-events-none"
                        height={pageHeight}
                        width={pageWidth}
                        size={"stretch"}
                        ref={pageRef}
                    >
                        {
                            (new Array(10)).fill(null).map((_, i) => {
                                return <div key={i} className="border-black border-2 bg-blue-950 p-5" style={{ width: pageWidth + 'px', height: pageHeight + 'px' }}>
                                    {/* <img src="https://picsum.photos/200/300" /> */}
                                    <p>Page {i}</p>
                                </div>
                            })
                        }
                    </Book>
                </div>
                <button onClick={() => {
                    (pageRef.current.pageFlip() as PageFlip).flipNext()
                }} className='text-white h-full'>
                    <ChevronRight />
                </button>
            </div>
        </div>
    </div>
}

export default Page