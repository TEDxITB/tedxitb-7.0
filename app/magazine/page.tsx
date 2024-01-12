"use client";

import { Magazine } from "./shared";
import "./style.css"
import { HeroSection } from "./HeroSection";
import { MagazineViewer } from "./MagazineViewer";
import { CatalogueSection } from "./CatalogueSection";

export type MagazineSetter = (magazine: Magazine, origin: HTMLImageElement) => void

const MagazineComponent = () => {
  const [magazineSection, setMagazine] = MagazineViewer()
  const catalogueSection = CatalogueSection(setMagazine)
  return [catalogueSection, magazineSection]
}

const TedMagazinePage = () => {
  const [catalogueSection, magazineSection] = MagazineComponent()
  return (
    <>
      {magazineSection}
      <HeroSection />
      {catalogueSection}
      <main className={"flex flex-auto flex-col items-center justify-center text-white font-anderson relative"}>
      </main>
    </>
  );
};

export default TedMagazinePage;
