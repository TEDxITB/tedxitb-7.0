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
      className="flex cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden"
      onClick={() => setMagazine(magazine, coverRef.current as any)}
    >
      <Image
        className="object-contain object-center max-w-full max-h-[calc(100%-2rem)]"
        ref={coverRef}
        src={magazine.magazine[0].url}
        alt="cover"
        width={1000}
        height={1000}
      />
      <p className="text-center">{magazine.title}</p>
    </li>
  );
};

export const CatalogueSection = (
  { allMonthlyMagazines }: MagazineQueryResult,
  setMagazine: MagazineSetter
) => {
  const [page, setPage] = useState(1);
  const [showingPage, setShowingPageState] = useState(page);
  const containerRef = useRef<HTMLUListElement>(null);

  const [col, setCol] = useState(0);
  const [row, setRow] = useState(0);
  const count = row * col;

  const setShowingPage = (page: number) => {
    const container = containerRef.current;
    if (!container) return;

    container.style.transitionDuration = "0s";
    container.classList.remove("translate-x-1/2");
    container.classList.remove("-translate-x-1/2");

    setTimeout(() => {
      container.style.transitionDuration = "";
      setShowingPageState(page);
    }, 100);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cbEnd = () => {
      if (showingPage != page) setShowingPage(page);
      container.removeEventListener("transitionend", cbEnd);
    };
    container.addEventListener("transitionend", cbEnd);
  }, [page, showingPage]);

  if (showingPage != page && containerRef.current) {
    const container = containerRef.current;
    requestAnimationFrame(() => {
      if (container.getAnimations().length == 0 && showingPage != page) {
        setShowingPage(page);
      }
    });
  }

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      const { width, height } = container.getBoundingClientRect();
      const ratio = width / height

      if (ratio < 3) {
        setCol(Math.floor(width / 300) || 1);
        setRow(Math.floor(height / 500) || 1);
      } else {
        setCol(Math.floor(ratio) || 1);
        setRow(1)
      }
      setPage(1);
    });

    resizeObserver.observe(container);
  }, []);

  return (
    <section
      id="catalogue"
      className="relative z-10 flex w-screen flex-col items-center gap-2 overflow-hidden bg-[#1E1E1E] px-10 py-7 font-anderson text-white"
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

      <ul
        ref={containerRef}
        className={cn(
          "grid h-full w-full max-w-7xl gap-4 overflow-hidden transition-all duration-300",
          showingPage != page
            ? "scale-90 opacity-0 " +
            (showingPage < page ? "-translate-x-1/2" : "translate-x-1/2")
            : "opacity-100"
        )}
        style={{
          gridTemplateColumns: `repeat(${col}, 1fr)`,
          gridTemplateRows: `repeat(${row}, 1fr)`,
        }}
      >
        {allMonthlyMagazines
          .slice((showingPage - 1) * count, showingPage * count)
          .map((magazine) => (
            <CoverSection
              key={magazine.id}
              setMagazine={setMagazine}
              magazine={magazine}
            />
          ))}
      </ul>

      <div className="mt-auto [&>*]:bg-transparent">
        {count != 0 ? (
          <Pagination
            currentPage={page}
            setPage={setPage}
            totalPages={Math.ceil(allMonthlyMagazines.length / count)}
            variant="primary"
            control="icon"
            loop={true}
          />
        ) : null}
      </div>
    </section>
  );
};
