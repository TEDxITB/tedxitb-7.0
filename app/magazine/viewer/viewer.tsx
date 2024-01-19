"use client";

import { Communication, Magazine, createWaiter } from "../shared";
import { cn } from "@/lib/utils";
import { MagazineQueryResult } from "@/types/cms";
import { ChevronLeft, ChevronRight, Loader2, X } from "lucide-react";
import Image from "next/image";
import { PageFlip } from "page-flip";
import { useEffect, useRef, useState } from "react";

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

export const Viewer = ({ data }: { data: Record<string, Magazine> }) => {
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
        setMagazine(data[msg.id]);
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
    <div className="fixed z-[100] h-screen w-screen bg-black">
      <div
        className={cn(
          "fixed flex h-full w-full items-center justify-center text-7xl text-white",
          magazine ? "hidden" : ""
        )}
      >
        Magazine Not Found
      </div>
      <div
        className={cn(
          "flex h-screen w-screen flex-col items-center justify-center gap-3 transition-opacity duration-500",
          magazine && magazine.magazine.length > 0 ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="flex flex-row" style={{ width: pageWidth * 2 + "px" }}>
          <div className="flex-1"></div>
          <div className=" flex flex-row font-anderson text-xs text-white lg:text-lg">
            <p className="pt-1">Pages:&nbsp;</p>
            <input
              className="w-14 rounded-lg bg-white pt-1 text-center text-black"
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
              }}
            />
            <p className="pt-1">
              &nbsp;/&nbsp;{magazine?.magazine.length || 0}
            </p>
          </div>
          <div className="flex flex-1">
            <button onClick={closeWindow} className="ml-auto text-white">
              <X />
            </button>
          </div>
        </div>
        <div className="flex flex-row">
          <button
            onClick={() => {
              pageFlipRef.current?.flipPrev();
            }}
            className="flex h-full w-10 items-center justify-center text-white"
          >
            <ChevronLeft />
          </button>

          {/* Page Renderer, BEWARE: Only rendered ONCE every magazine update, so react state won't work here */}
          <div ref={pageRendererRef} className="hidden">
            <div className="bg-black"></div>
            {(magazine?.magazine || []).map((page, i) => (
              <div
                key={i}
                className="relative h-full w-full overflow-hidden border-2 border-black bg-white"
              >
                <Image
                  src={page.url}
                  width={1000}
                  height={1000}
                  className="peer relative z-20 h-full w-full"
                  alt={page.alt}
                />
                <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-black peer-[data-loaded]:hidden">
                  <Loader2 size={50} className="animate-spin" />
                </div>
              </div>
            ))}
            {magazine?.magazine && magazine?.magazine.length % 2 == 0 ? (
              <div className="bg-black"></div>
            ) : null}
          </div>

          <div
            className="relative flex flex-row items-center justify-center"
            style={{ width: 2 * pageWidth + "px", height: pageHeight + "px" }}
          >
            <div ref={bookContainerRef} className="h-full w-full"></div>
          </div>

          <button
            onClick={() => {
              pageFlipRef.current?.flipNext();
            }}
            className="flex h-full w-10 items-center justify-center text-white"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};
