import HeadingSection from "./heading-section";
import PhotosCarousel from "./photos-carousel";
import { Button } from "@/components/ui/button";
import { getCMSData, documentationQuery, documentationTags } from "@/lib/cms";
import { DocumentationQueryResult } from "@/types/cms";
import Image from "next/image";
import React from "react";

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
      <section className="flex items-center justify-center my-16 relative">
        {/* Right bottom triangle decoration */}
        <Image
          src="/side-triangle.png"
          className="z-0 absolute sm:right-0 sm:-bottom-[40%] sm:w-36 max-sm:bottom-[20%] right-0 max-sm:w-24"
          width={200}
          height={200}
          alt=""
        />

        {/* X bottom middle decoration */}
        <Image
          src="/logo-per-part-05-1.png"
          alt=""
          width={1000}
          height={1000}
          className="absolute lg:left-[10%] lg:-bottom-[135%] max-sm:bottom-[10%] max-sm:w-72 sm:w-96 lg:w-[128rem] sm:right-[10%] sm:-bottom-1/2"
        />

        {/* Star top left decoration */}
        <Image
          src="/star-icon-1.svg"
          alt=""
          width={500}
          height={500}
          className="absolute opacity-50 left-0 -top-[70%] max-lg:w-72"
        />

        {/* Main part */}
        <div className="w-full h-full ml-4">
          <PhotosCarousel images={carousel} />
        </div>
      </section>
    </main>
  );
};

export default DocumentationPage;
