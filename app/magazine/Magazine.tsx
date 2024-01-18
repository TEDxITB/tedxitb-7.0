"use client";

import { MagazineQueryResult } from "@/types/cms";
import { CatalogueSection } from "./CatalogueSection";
import { MagazineViewer } from "./MagazineViewer";

export const MagazineComponent = ({ magazines }: {
  magazines: MagazineQueryResult
}) => {
  const [magazineSection, setMagazine] = MagazineViewer();
  const catalogueSection = CatalogueSection(magazines, setMagazine);
  return (
    <>
      {catalogueSection}
      {magazineSection}
    </>
  );
};
