import { HeroSection } from "./HeroSection";
import { MagazineComponent } from "./Magazine";
import { Magazine } from "./shared";
import "./style.css";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
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

const TedMagazinePage = () => {
  return (
    <main className="contents">
      <HeroSection />
      <MagazineComponent />
    </main>
  );
};

export default TedMagazinePage;
