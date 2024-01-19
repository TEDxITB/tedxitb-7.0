import { HeroSection } from "./HeroSection";
import { MagazineComponent } from "./Magazine";
import { Magazine } from "./shared";
import "./style.css";
import { getCMSData, magazineQuery, magazineTags } from "@/lib/cms";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { MagazineQueryResult } from "@/types/cms";
import { Metadata } from "next";

export type MagazineSetter = (
  magazine: Magazine,
  origin: HTMLImageElement
) => void;

export const metadata: Metadata = {
  title: "Magazine | TEDxITB 7.0",
  openGraph: {
    ...openGraphTemplate,
    title: "Magazine | TEDxITB 7.0",
  },
  twitter: {
    ...twitterTemplate,
    title: "Magazine | TEDxITB 7.0",
  },
};

const TedMagazinePage = async () => {
  const data = await getCMSData<MagazineQueryResult>(
    magazineQuery,
    magazineTags
  );

  return (
    <main>
      <HeroSection />
      <MagazineComponent magazines={data} />
    </main>
  );
};

export default TedMagazinePage;
