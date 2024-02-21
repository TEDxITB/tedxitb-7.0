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
  const paragraph = props.data.mainEventMagazine.paragraph;
  const magazine: Magazine = {
    id: "",
    ...props.data.mainEventMagazine,
  };

  return (
    <section
      id="magazine"
      className="h-full w-[95%] py-8 md:w-[90%] lg:w-4/5 lg:pb-32"
    >
      {MagazineIFrame}
      <div className="relative min-h-[300px] w-full rounded-lg md:min-h-[400px] lg:min-h-[565px]">
        <Image
          src="/main-event/bg-magazine.png"
          alt="Magazine"
          fill
          className="absolute rounded-lg bg-ted-white object-cover brightness-[0.25]"
          priority
        />

        <div className="z-10 flex w-full flex-col items-center justify-between gap-16 p-8 sm:flex-row lg:p-16">
          <div className="z-10 flex max-w-3xl flex-col gap-8">
            <h2 className="font-garamond text-3xl font-medium tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl">
              <span className="mr-2 font-graziela text-5xl lg:text-8xl">T</span>
              <span>HE </span>
              <span>IMPACT </span>
              <span className="mr-2 font-graziela text-5xl lg:text-8xl">O</span>
              <span>RIGINATOR </span>
              <span>HUB</span>
            </h2>
            <p className="font-anderson leading-7 tracking-wide lg:text-xl">
              {paragraph}
            </p>
          </div>

          <button
            onClick={() =>
              setMagazine(magazine, coverRef.current as HTMLImageElement)
            }
            className="z-10 flex h-full w-full flex-col"
          >
            <Image
              ref={coverRef}
              className="z-10 h-full w-[200px] self-center rounded-lg md:w-[250px] xl:w-[350px]"
              src={magazine.magazine[0].url}
              width={500}
              height={500}
              alt="Magazine"
            />
            <p className="m-auto">Click to Open</p>
          </button>
        </div>
      </div>
    </section>
  );
}
