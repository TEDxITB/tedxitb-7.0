import { getCMSData, magazineQuery, magazineTags } from "@/lib/cms";
import { HeroSection } from "./HeroSection";
import { MagazineComponent } from "./Magazine";
import "./style.css";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { Metadata } from "next";
import { MagazineQueryResult } from "@/types/cms";
import { Magazine } from "./shared";

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
  )

  return (
    <main className="contents">
      <HeroSection />
      <MagazineComponent magazines={data} />
    </main>
  );
};

export default TedMagazinePage;
