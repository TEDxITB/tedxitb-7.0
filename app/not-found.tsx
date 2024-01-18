import { Button } from "@/components/ui/button";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Error 404 | TEDxITB 7.0",
  openGraph: {
    ...openGraphTemplate,
    title: "Error 404 | TEDxITB 7.0",
  },
  twitter: {
    ...twitterTemplate,
    title: "Error 404 | TEDxITB 7.0",
  },
};

export default function NotFoundPage() {
  return (
    <main className="flex h-full min-h-[calc(100vh-96px)] items-center justify-center overflow-hidden bg-[#1E1E1E] px-6 py-12 sm:p-16 lg:p-24">
      {/* Container */}
      <section className="z-10 flex flex-col items-center gap-6 md:flex-row-reverse lg:gap-12 xl:gap-16 2xl:gap-20">
        {/* Error Decoration */}
        <Image
          className="w-full sm:max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-xl"
          src="/error/404.png"
          alt="Error Decoration"
          width={1746}
          height={1211}
        />

        {/* Content */}
        <div className="relative flex w-full max-w-2xl flex-col items-center gap-6 text-white md:items-start lg:gap-9">
          {/* Background Decoration*/}
          <Image
            className="absolute -left-16 -top-12 z-0 w-80 max-w-none md:w-96 lg:-left-28 lg:-top-20 lg:w-[600px] xl:-left-36 xl:-top-28 xl:w-[800px]"
            src="/decoration/blur1.png"
            alt="Blur Decoration 1"
            width={1440}
            height={1096}
          />

          <div className="z-10 flex flex-col gap-3 lg:gap-6">
            {/* Big Texts */}
            <div>
              <h1 className="font-anderson text-5xl font-bold tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-8xl">
                ERROR 404
              </h1>
              <h2 className="font-garamond text-3xl font-medium tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl">
                <span className="mr-2 font-graziela text-5xl lg:text-8xl">
                  N
                </span>
                <span>OT </span>
                <span className="mr-2 font-graziela text-5xl lg:text-8xl">
                  F
                </span>
                <span>OUND</span>
              </h2>
            </div>

            {/* Description */}
            <p className="font-anderson text-base xl:text-2xl">
              It appears the requested page is presently unavailable. Should you
              wish to initiate a new inquiry, kindly revisit our homepage or
              scrutinize the URL for accuracy.
            </p>
          </div>

          {/* Home Button */}
          <Link href="/" className="z-10"  aria-label="Linked to home">
            <Button
              size="lg"
              className="px-8 font-anderson text-base tracking-wide lg:rounded-lg lg:px-10 lg:py-6 lg:text-lg"
            >
              Home Page
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
