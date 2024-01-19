"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="w-screen text-white flex justify-center items-center relative">
      <Image
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-30"
        src={"/magazine-hero-background.png"}
        alt="Background"
        width={1080}
        height={720}
      />

      <Image
        data-aos="fade-up"
        className="absolute bottom-0 left-[70%] w-[min(15%,200px)] -translate-x-1/2"
        src={"/magazine-hero-2.png"}
        width={500}
        height={500}
        alt="test"
      />

      <div className="flex flex-col lg:flex-row gap-10 sm:gap-0 z-10 w-3/4 max-w-7xl">
        <div data-aos="fade-up" className="flex flex-col justify-center">
          <p className="font-anderson mb-4">Magazine</p>
          <p className="font-graziela text-6xl mb-8">
            <span className="font-graziela">R</span>
            ead for &#160;
            <span className="font-graziela">L</span>
            atest insi
            <span className="font-graziela">g</span>
            hts
          </p>
          <div>
            <a href="#cover">
              <Button className="rounded-full">See More</Button>
            </a>
          </div>
        </div>
        <Image
          data-aos="fade-left"
          className="ml-auto w-[250px] sm:w-[350px] lg:w-[450px]"
          src={"/magazine-hero-1.png"}
          width={500}
          height={500}
          alt="test"
        />
      </div>
    </section>
  );
};
