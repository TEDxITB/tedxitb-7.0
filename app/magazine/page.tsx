"use client";

import { CatalogueSection } from "./CatalogueSection";
import { HeroSection } from "./HeroSection";
import { MagazineViewer } from "./MagazineViewer";
import { Magazine } from "./shared";
import "./style.css";

export type MagazineSetter = (
  magazine: Magazine,
  origin: HTMLImageElement
) => void;

const MagazineComponent = () => {
  const [magazineSection, setMagazine] = MagazineViewer();
  const catalogueSection = CatalogueSection(setMagazine);
  return [catalogueSection, magazineSection];
};

const TedMagazinePage = () => {
  const [catalogueSection, magazineSection] = MagazineComponent();
  return (
    <main className="contents">
      {magazineSection}
      <HeroSection />
      {catalogueSection}
      <main
        className={
          "flex flex-auto flex-col items-center justify-center text-white font-anderson relative"
        }
      ></main>
    </main>
  );
};

export default TedMagazinePage;
