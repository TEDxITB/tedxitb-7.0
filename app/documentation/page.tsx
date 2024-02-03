import SmoothScrollButton from "../../components/ui/smooth-scroll-button";
import PhotosCarousel from "./photos-carousel";
import { getCMSData, documentationQuery, documentationTags } from "@/lib/cms";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { DocumentationQueryResult } from "@/types/cms";
import { ArrowDownCircle } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Documentation | TEDxITB 7.0",
  openGraph: {
    ...openGraphTemplate,
    title: "Documentation | TEDxITB 7.0",
  },
  twitter: {
    ...twitterTemplate,
    title: "Documentation | TEDxITB 7.0",
  },
};

const DocumentationPage = async () => {
  // Fetch data
  const documentationQueryResult = await getCMSData<DocumentationQueryResult>(
    documentationQuery,
    documentationTags
  );
  const {
    documentation: { carousel },
  } = documentationQueryResult;

  return (
    <main className="w-full bg-[#1C1C1C]">
      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-96px)] w-full items-center justify-center px-5 py-12">
        {/* Backround Image */}
        <Image
          src="/documentation/hero.jpg"
          className="z-10 w-full object-cover object-center"
          alt="Documentation Hero Backround Image"
          sizes="100vw"
          fill
          priority
        />

        {/* Text and button in the middle of the picture */}
        <div className=" z-20 flex h-full w-full flex-col items-center justify-center gap-6 text-white lg:gap-12">
          <div className="flex flex-col items-center gap-2 lg:gap-4">
            <h1
              className="animate-in-fadetop-h1 text-center font-anderson text-5xl font-bold tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] sm:uppercase lg:text-8xl"
            >
              Documentation
            </h1>
            <h2
              className="animate-in-fadetop-h2 text-center font-garamond text-3xl font-medium tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl"
            >
              <span className="mr-2 font-graziela text-5xl lg:text-8xl">E</span>
              <span>XPLORE </span>
              <span>OUR </span>
              <span className="mr-2 font-graziela text-5xl lg:text-8xl">S</span>
              <span>HARED </span>
              <span>HISTORY</span>
            </h2>
          </div>
          
          <div className="animate-in-fadetop-link">          <SmoothScrollButton
            targetId="carousel"
          >
            See More <ArrowDownCircle className="ml-2 h-5 w-5" />
          </SmoothScrollButton></div>

        </div>
      </section>

      {/* Photos documentation using carousel */}
      <section
        className="relative flex flex-col items-center justify-center overflow-hidden py-16 lg:py-28"
        id="carousel"
      >
        {/* Bottom Right Gradient Decoration */}
        <Image
          src="/decoration/blur1.png"
          alt="Blur Decoration"
          width={1440}
          height={1097}
          className="absolute -bottom-8 -right-24 w-72 lg:-bottom-52 lg:-right-40 lg:w-[700px]"
        />

        {/* Right Logo */}
        <div className="absolute right-[-65px] top-[300px] flex flex-row items-center md:top-[200px] lg:right-[-248px]">
          {/* Right Full Logo */}
          <Image
            src="/logo/x-logo-red-full-cropped.png"
            width={1200}
            height={765}
            alt="TEDxITB 7.0 Full Logo"
            className="h-[95px] w-auto opacity-25 lg:h-[400px]"
          />

          {/* Right Rhombus */}
          <Image
            src="/decoration/rhombus-gradient.svg"
            width={100}
            height={100}
            alt="Rhombus Gradient Decoration"
            className="w-[130px] lg:w-[495px]"
          />
        </div>

        {/* Top Left Gradient Decoration */}
        <Image
          src="/decoration/blur1.png"
          alt="Blur Decoration"
          width={1440}
          height={1097}
          className="absolute -left-24 -top-8 w-72 lg:-left-48 lg:-top-48 lg:w-[700px]"
        />

        {/* Main part */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="250"
          className="z-20 h-full w-full"
        >
          <PhotosCarousel images={carousel} />
        </div>
      </section>
    </main>
  );
};

export default DocumentationPage;
