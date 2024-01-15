"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeadingSection = () => {
  const scrollToTarget = () => {
    const navbar = document.getElementById("navbar") as HTMLElement;
    const target = document.getElementById("carousel") as HTMLElement;

    if (!navbar || !target) return;

    window.scrollTo({
      top: target.offsetTop - navbar.offsetHeight + 56, // setengah margin
      behavior: "smooth",
    });
  };

  return (
    <div className="relative flex min-h-[calc(100vh-96px)] w-full items-center justify-center px-5 py-12">
      {/* Backround Image */}
      <Image
        src="/documentation-hero.png"
        className="z-10 w-full object-cover object-center"
        alt="Documentation Hero Backround Image"
        sizes="100vw"
        fill
      />

      {/* Text and button in the middle of the picture */}
      <div className=" z-20 flex h-full w-full flex-col items-center justify-center gap-6 text-white lg:gap-8">
        <h1 className="text-center text-4xl lg:text-7xl">
          <span className="font-graziela">E</span>
          <span className="font-garamond italic">xplore our shared </span>
          <span className="font-graziela">H</span>
          <span className="font-garamond italic">istory </span>
        </h1>
        <Button
          size="lg"
          className="flex-none px-8 text-base"
          onClick={scrollToTarget}
        >
          See More
        </Button>
      </div>
    </div>
  );
};

export default HeadingSection;
