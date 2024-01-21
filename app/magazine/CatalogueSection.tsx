"use client";

import { MagazineSetter } from "./page";
import { Magazine } from "./shared";
import Pagination from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { MagazineQueryResult } from "@/types/cms";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CoverSection = ({
  magazine,
  setMagazine,
}: {
  magazine: Magazine;
  setMagazine: MagazineSetter;
}) => {
  const coverRef = useRef<HTMLImageElement>(null);

  return (
    <li
      role="button"
      className="flex cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden lg:gap-4"
      onClick={() => setMagazine(magazine, coverRef.current as any)}
    >
      <Image
        className="max-h-[calc(100%-2rem)] max-w-full object-contain object-center"
        ref={coverRef}
        src={magazine.magazine[0].url}
        alt="cover"
        width={1000}
        height={1000}
      />
      <p className="text-center text-base lg:text-xl">{magazine.title}</p>
    </li>
  );
};

export const CatalogueSection = (
  { allMonthlyMagazines }: MagazineQueryResult,
  setMagazine: MagazineSetter
) => {
  const [page, setPage] = useState(1);
  const [showingPage, setShowingPageState] = useState(page);
  const listRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [col, setCol] = useState(0);
  const [row, setRow] = useState(0);
  const gridArea = row * col;

  const magazineCount = allMonthlyMagazines.length;
  const maxPage = Math.ceil(magazineCount / gridArea);
  const needBound = maxPage == 1;
  const neededArea = needBound
    ? magazineCount % gridArea || gridArea
    : gridArea;
  const neededRow = needBound ? Math.ceil(neededArea / col) : row;
  const neededCol = needBound && neededRow == 1 ? neededArea : col;

  const setShowingPage = (page: number) => {
    const list = listRef.current;
    if (!list) return;

    list.style.transitionDuration = "0s";
    list.classList.remove("translate-x-1/2");
    list.classList.remove("-translate-x-1/2");

    setTimeout(() => {
      list.style.transitionDuration = "";
      setShowingPageState(page);
    }, 100);
  };

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const cbEnd = () => {
      if (showingPage != page) setShowingPage(page);
      list.removeEventListener("transitionend", cbEnd);
    };
    list.addEventListener("transitionend", cbEnd);
  }, [page, showingPage]);

  if (showingPage != page && listRef.current) {
    const list = listRef.current;
    requestAnimationFrame(() => {
      if (list.getAnimations().length == 0 && showingPage != page) {
        setShowingPage(page);
      }
    });
  }

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      const { width, height } = container.getBoundingClientRect();
      const ratio = width / height;

      if (ratio < 3) {
        setCol(Math.floor(width / 300) || 1);
        setRow(Math.floor(height / 500) || 1);
      } else {
        setCol(Math.floor(ratio) || 1);
        setRow(1);
      }
      setPage(1);
    });

    resizeObserver.observe(container);
  }, []);

  return (
    <section
      ref={containerRef}
      id="catalogue"
      className="relative z-10 flex h-[calc(100vh-6rem)] min-h-[600px] w-screen flex-col items-center gap-2 overflow-hidden bg-[#1E1E1E] px-10 py-7 font-anderson text-white"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
        <Image
          className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"
          src={"/decoration/blur1.png"}
          alt="Background"
          width={1080}
          height={720}
        />

        <Image
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3/4"
          src={"/decoration/blur2.png"}
          alt="Background"
          width={1080}
          height={720}
        />

        <Image
          className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
          src={"/decoration/blur3.png"}
          alt="Background"
          width={1080}
          height={720}
        />
      </div>

      <div
        data-aos="zoom-in-up"
        className="flex w-full flex-grow flex-col items-center justify-center overflow-hidden lg:gap-8"
      >
        <ul
          ref={listRef}
          className={cn(
            "grid h-full w-full max-w-7xl gap-4 overflow-hidden transition-all duration-300",
            showingPage != page
              ? "scale-90 opacity-0 " +
                  (showingPage < page ? "-translate-x-1/2" : "translate-x-1/2")
              : "opacity-100"
          )}
          style={{
            gridTemplateColumns: `repeat(${neededCol}, 1fr)`,
            gridTemplateRows: `repeat(${neededRow}, 1fr)`,
            maxWidth: neededCol * 350 + "px",
            maxHeight: neededRow * 550 + "px",
          }}
        >
          {allMonthlyMagazines
            .slice((showingPage - 1) * neededArea, showingPage * neededArea)
            .map((magazine) => (
              <CoverSection
                key={magazine.id}
                setMagazine={setMagazine}
                magazine={magazine}
              />
            ))}
        </ul>

        <div className="[&>*]:bg-transparent">
          {maxPage != 1 && gridArea != 0 ? (
            <Pagination
              currentPage={page}
              setPage={setPage}
              totalPages={maxPage}
              variant="primary"
              control="icon"
              loop={true}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};
