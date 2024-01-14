import HeadingSection from "./heading-section";
import PhotosCarousel from "./photos-carousel";
import { Button } from "@/components/ui/button";
import { getCMSData, documentationQuery, documentationTags } from "@/lib/cms";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { DocumentationQueryResult } from "@/types/cms";
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
      {/*Header: Full screen photo with title*/}
      <section className="">
        <HeadingSection />
      </section>

      {/* Photos documentation using carousel */}
      <section
        className="flex flex-col items-center justify-center py-16 lg:py-28 relative overflow-hidden"
        id="carousel"
      >
        {/* Top Right Gradient Decoration */}
        <Image
          src="/bg-decor-blur-1.svg"
          alt="Blur Decoration"
          width={1440}
          height={1097}
          className="absolute -right-24 -bottom-8 w-72 opacity-20 lg:-right-40 lg:-bottom-52 lg:w-[700px]"
        />

        {/* Right Logo */}
        <div className="absolute right-[-65px] top-[300px] flex flex-row items-center md:top-[200px] lg:right-[-248px]">
          {/* Right Full Logo */}
          <Image
            src="/tedxitb-7-logo-red-full.png"
            width={1200}
            height={765}
            alt="TEDxITB 7.0 Full Logo"
            className="h-[95px] w-auto opacity-25 lg:h-[400px]"
          />

          {/* Right Rhombus */}
          <Image
            src="/rhombus-gradient.svg"
            width={100}
            height={100}
            alt="Rhombus Gradient Decoration"
            className="w-[130px] lg:w-[495px]"
          />
        </div>

        {/* Top Left Gradient Decoration */}
        <Image
          src="/bg-decor-blur-1.svg"
          alt="Blur Decoration"
          width={1440}
          height={1097}
          className="absolute -left-24 -top-8 w-72 opacity-20 lg:-left-48 lg:-top-48 lg:w-[700px]"
        />

        {/* Main part */}
        <div className="w-full h-full z-20">
          <PhotosCarousel images={carousel} />
        </div>
      </section>
    </main>
  );
};

export default DocumentationPage;
