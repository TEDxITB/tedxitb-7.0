import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative flex h-full min-h-[calc(100vh-96px)] items-center justify-center px-6 py-12 text-white sm:p-16 lg:p-24">
      {/* Background Image */}
      <Image
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-30"
        src={"/magazine/hero-background.jpg"}
        alt="Hero Background"
        width={1080}
        height={720}
        priority
      />

      <div className="z-10 flex w-fit flex-col gap-12 sm:flex-row lg:gap-24">
        {/* Texts */}
        <div className="flex flex-col justify-center gap-6 lg:gap-12">
          <div className="flex flex-col gap-2 lg:gap-4">
            <h1 className="animate-in-faderight-h1 font-anderson text-5xl font-bold tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] sm:uppercase lg:text-8xl">
              MAGAZINE
            </h1>
            <h2 className="animate-in-faderight-h2 font-garamond text-3xl font-medium tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl">
              <span className="mr-2 font-graziela text-5xl lg:text-8xl">R</span>
              <span>EAD </span>
              <span>FOR </span>
              <span className="mr-2 font-graziela text-5xl lg:text-8xl">L</span>
              <span>ATEST </span>
              <span>INSIGHTS</span>
            </h2>
          </div>

          <a href="#catalogue" className="animate-in-faderight-link w-fit">
            <Button size="lg" className="flex-none px-8 text-base">
              See More <ArrowDownCircle className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        {/* Magazine Image Prview */}
        <Image
          className="animate-in-fadeleft-image w-[250px] self-end lg:w-[450px]"
          src={"/magazine/hero-1.jpg"}
          width={500}
          height={500}
          alt="test"
        />
      </div>
    </section>
  );
};
