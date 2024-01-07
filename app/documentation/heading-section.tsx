"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SCREEN_SIZE = ["sm", "lg"] as const;
type ScreenType = (typeof SCREEN_SIZE)[number];

const HeadingSection = () => {
  const [size, setSize] = useState<ScreenType>("sm");

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 768) {
        setSize("sm");
      } else {
        setSize("lg");
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="w-full h-full relative max-sm:aspect-square aspect-video">
      <Image
        src={`/heading-image-${size}.png`}
        className="z-10 w-full relative "
        objectFit="cover"
        fill
        alt=""
      />

      {/* Text and button in the middle of the picture */}
      <div className="absolute flex left-0 top-0 text-white w-full h-full items-center justify-center flex-col z-10">
        <em className="font-anderson max-sm:text-md text-2xl">Documentation</em>
        <p className="max-sm:text-3xl sm:text-3xl lg:text-8xl font-normal">
          <span className="font-graziela bold">E</span>
          <span className="font-garamond italic">xplore our shared </span>
          <span className="font-graziela">H</span>
          <span className="font-garamond italic">istory </span>
        </p>
        <Button>See More &gt;</Button>
      </div>
    </div>
  );
};

export default HeadingSection;
