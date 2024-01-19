"use client"

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Loader2, X } from "lucide-react";
import Image from "next/image";
import { PageFlip } from "page-flip";
import { Communication, Magazine, createWaiter } from "../shared";
import { MagazineQueryResult } from "@/types/cms";


export const recalculatePageDimension = function (): {
  width: number;
  height: number;
} {
  const width = window.innerWidth - 200;
  const height = window.innerHeight - 150;
  if (width < 0 || height < 0) return { width: 1, height: 1 };

  document.body.style.overflow = "hidden";
  if (width < height * 1.41) {
    return { width: width / 2, height: width / 1.41 };
  } else {
    return { width: (height * 1.41) / 2, height: height };
  }
};

export const Viewer = ({ data }: {
  data: Record<string, Magazine>
}) => {
  const parentRef = useRef<Window>(null as any);

  const idRef = useRef("");
  const pageFlipRef = useRef<PageFlip>(null as any);
  const bookContainerRef = useRef<HTMLDivElement>(null);
  const pageRendererRef = useRef<HTMLDivElement>(null);
  const pageRenderedRef = useRef<HTMLElement[]>([]);
  const renderSync = useRef(createWaiter());

  const [inputPage, setInputPageValue] = useState("0");
  const [magazine, setMagazineState] = useState<Magazine>();

  const [pageWidth, setPageWidth] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);

  const refreshPageFlip = () => {
    const bookContainer = bookContainerRef.current;
    const pageRenderer = pageRendererRef.current;
    if (!bookContainer || !pageRenderer) return;

    const pageFlip = new PageFlip(bookContainer, {
      width: (1000 / 2) * 1.41,
      height: 1000,
      size: "stretch" as any,
      startPage: 0,
    });

    pageFlip.on("flip", () => {
      updateInputDisplay();
    });
    pageFlipRef.current = pageFlip;

    const childs = Array.from(pageRenderer.children) as HTMLElement[];
    pageRenderedRef.current = childs;

    pageFlip.loadFromHTML(childs);
    pageFlip.turnToPage(0);
  };

  const resize = () => {
    const { width, height } = recalculatePageDimension();
    setPageWidth(width);
    setPageHeight(height);

    const parent = parentRef.current;
    const container = bookContainerRef.current;
    if (!parent || !container || parent == window) return;

    parent.postMessage(
      JSON.stringify({
        info: "boundUpdate",
        bounding: container.getBoundingClientRect(),
      } satisfies Communication)
    );
  };

  useEffect(() => resize(), [pageHeight, pageWidth]);
  useEffect(() => renderSync.current.resolve(), [magazine]);

  const setMagazine = async (data: Magazine) => {
    if (idRef.current == data.id) {
      pageFlipRef.current.turnToPage(0);
      return;
    }

    pageRenderedRef.current.forEach((el) => {
      pageRendererRef.current?.appendChild(el);
    });

    // Create new render
    setMagazineState(data);
    renderSync.current = createWaiter();
    await renderSync.current.waiter;
    idRef.current = data.id;

    refreshPageFlip();
  };

  const setupListener = () => {
    const parent = window.parent;
    parentRef.current = parent;

    window.addEventListener("message", (e) => {
      const msg = JSON.parse(e.data) as Communication;
      if (msg.info == "idUpdate") {
        setMagazine(data[msg.id])
      }
    });

    const id = new URLSearchParams(window.location.search).get("id");
    if (id) {
      window.postMessage(
        JSON.stringify({
          info: "idUpdate",
          id: id,
        } satisfies Communication)
      );
    }

    resize();
    window.addEventListener("resize", resize);
  };

  const sendData = (msg: Communication) => {
    const parent = parentRef.current;
    if (window != parent) parent.postMessage(JSON.stringify(msg));
  };

  useEffect(() => {
    setupListener();
    requestAnimationFrame(sendData.bind(null, { info: "ready" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateInputDisplay = () => {
    const page = pageFlipRef.current.getCurrentPageIndex();
    setInputPageValue(`${page}-${page + 1}`);
  };

  const closeWindow = () => {
    const parent = parentRef.current;
    if (!parent) return;
    if (parent == window) {
      window.location.href = "/magazine";
    } else {
      parent.postMessage(
        JSON.stringify({
          info: "close",
        } satisfies Communication)
      );
    }
  };

  return (
    <div className="bg-black fixed w-screen h-screen z-[100]">
      <div className={cn(
        "w-full h-full flex justify-center items-center text-7xl text-white fixed",
        magazine ? "hidden" : ""
      )}>
        Magazine Not Found
      </div>
      <div
        className={cn(
          "transition-opacity duration-500 w-screen h-screen flex flex-col justify-center items-center gap-3",
          magazine && magazine.magazine.length > 0 ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="flex flex-row" style={{ width: pageWidth * 2 + "px" }}>
          <div className="flex-1"></div>
          <div className=" text-white flex flex-row font-anderson text-lg">
            <p className="pt-1">Pages:&nbsp;</p>
            <input
              className="bg-white text-black w-14 text-center rounded-lg pt-1"
              value={inputPage}
              pattern="[0-9]"
              type="text"
              onFocus={() => setInputPageValue("")}
              onBlur={() => updateInputDisplay()}
              onChange={(e) => {
                const raw = Array.from(e.target.value)
                  .filter((c) => "0" <= c && c <= "9")
                  .join("");
                setInputPageValue(raw);

                let page = parseInt(raw);
                if (page < 0 || 10 < page) {
                  if (page < 0) page = 0;
                  if (10 < page) page = 10;
                  setInputPageValue(page.toString());
                }

                if (page % 2 == 1) page--;
                pageFlipRef.current?.turnToPage(page);
              }} />
            <p className="pt-1">&nbsp;/&nbsp;{magazine?.magazine.length || 0}</p>
          </div>
          <div className="flex flex-1">
            <button onClick={closeWindow} className="text-white ml-auto">
              <X />
            </button>
          </div>
        </div>
        <div className="flex flex-row">
          <button
            onClick={() => {
              pageFlipRef.current?.flipPrev();
            }}
            className="text-white h-full w-10 flex justify-center items-center"
          >
            <ChevronLeft />
          </button>

          {/* Page Renderer, BEWARE: Only rendered ONCE every magazine update, so react state won't work here */}
          <div ref={pageRendererRef} className="hidden">
            <div className="bg-black"></div>
            {(magazine?.magazine || []).map((page, i) => (
              <div
                key={i}
                className="bg-white border-2 w-full h-full border-black overflow-hidden relative"
              >
                <Image
                  src={page.url}
                  width={1000}
                  height={1000}
                  className="peer relative w-full h-full z-20"
                  alt={page.alt} />
                <div className="z-10 text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-[data-loaded]:hidden">
                  <Loader2 size={50} className="animate-spin" />
                </div>
              </div>
            ))}
            {magazine?.magazine && magazine?.magazine.length % 2 == 0 ? (
              <div className="bg-black"></div>
            ) : null}
          </div>

          <div
            className="flex flex-row justify-center items-center relative"
            style={{ width: 2 * pageWidth + "px", height: pageHeight + "px" }}
          >
            <div ref={bookContainerRef} className="w-full h-full"></div>
          </div>

          <button
            onClick={() => {
              pageFlipRef.current?.flipNext();
            }}
            className="text-white h-full w-10 flex justify-center items-center"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};
