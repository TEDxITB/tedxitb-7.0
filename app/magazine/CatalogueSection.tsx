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
  console.log(magazine)

  return (
    <li
      className="flex flex-col items-center justify-center gap-2 cursor-pointer overflow-hidden"
      onClick={() => setMagazine(magazine, coverRef.current as any)}
    >
      <Image
        ref={coverRef}
        src={magazine.magazine[0].url}
        alt="cover"
        width={300}
        height={300}
      />
      <p className="text-center">{magazine.title}</p>
    </li>
  );
};

export const CatalogueSection = ({ allMonthlyMagazines }: MagazineQueryResult, setMagazine: MagazineSetter) => {
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

      setCol(Math.floor(width / 300) || 1);
      setRow(Math.floor(height / 500) || 1);
    });

    resizeObserver.observe(container);
  }, []);

  return (
    <section
      id="cover"
      className="bg-black text-white font-anderson overflow-hidden w-screen py-7 px-10 flex flex-col gap-2 items-center z-10 relative"
    >
      {/* <Image
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-20"
        src={"/modalBackgroundType3.png"}
        alt="Background"
        width={1080}
        height={720}
      /> */}

      {
        <ul
          ref={containerRef}
          className={cn(
            "transition-all duration-300 w-full h-full overflow-hidden grid gap-4 max-w-7xl",
            showingPage != page
              ? "opacity-0 scale-90 " +
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
                magazine={magazine} />
            ))}
        </ul>
      }

      <div className="mt-auto [&>*]:bg-transparent">
        {
          count != 0 ?
            <Pagination
              currentPage={page}
              setPage={setPage}
              totalPages={Math.ceil(allMonthlyMagazines.length / count)}
              variant="primary"
              control="icon"
              loop={true}
            /> : null
        }
      </div>
    </section>
  );
};
