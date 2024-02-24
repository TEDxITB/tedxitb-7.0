"use client";

import { MagazineViewer } from "@/app/magazine/MagazineViewer";
import { Magazine } from "@/app/magazine/shared";
import { MainEventMagazineQueryResult } from "@/types/cms";
import Image from "next/image";
import { useRef } from "react";

export default function MagazineSection(props: {
  data: MainEventMagazineQueryResult;
}) {
  const [MagazineIFrame, setMagazine] = MagazineViewer();
  const coverRef = useRef<HTMLImageElement>(null);
  const title = props.data.mainEventMagazine.title;
  const paragraph = props.data.mainEventMagazine.paragraph;
  const magazine: Magazine = {
    id: "",
    ...props.data.mainEventMagazine,
  };

  return (
    <section id="magazine" className="w-full max-w-7xl">
      {MagazineIFrame}
      <div className="relative flex min-h-[300px] w-full justify-center rounded-lg md:min-h-[400px] lg:min-h-[565px]">
        <Image
          src="/main-event/bg-magazine.png"
          alt="Magazine"
          fill
          className="absolute rounded-lg bg-ted-white object-cover brightness-[0.25]"
          priority
        />

        <div className="z-10 flex w-full flex-col items-center justify-between gap-16 p-8 lg:p-24 xl:flex-row">
          <div className="z-10 flex max-w-3xl flex-col gap-8">
            <h2 className="font-garamond text-3xl font-medium tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl">
              {
                // Render logic garamond
                title.split(" ").map((word, idx) => {
                  const length = title.split(" ").length;
                  if (idx % 2 == 0) {
                    return (
                      <>
                        <span className="mr-2 font-graziela text-5xl uppercase lg:text-8xl">
                          {word[0]}
                        </span>
                        <span className="uppercase">{word.slice(1)}</span>
                        {length - 1 !== idx && <span> </span>}
                      </>
                    );
                  } else {
                    return (
                      <>
                        <span className="uppercase">{word}</span>
                        {length - 1 !== idx && <span> </span>}
                      </>
                    );
                  }
                })
              }
            </h2>
            <p className="font-anderson leading-7 tracking-wide lg:text-xl">
              {paragraph}
            </p>
          </div>

          <button
            onClick={() =>
              setMagazine(magazine, coverRef.current as HTMLImageElement)
            }
            className="z-10 flex aspect-[0.707] w-72 flex-none flex-col gap-3"
          >
            <Image
              ref={coverRef}
              className="z-10 h-full w-full self-center rounded-lg"
              src={magazine.magazine[0].url}
              width={500}
              height={500}
              alt="Magazine"
            />
            <p className="m-auto font-anderson text-base font-medium lg:text-lg">
              Click to Open
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}
