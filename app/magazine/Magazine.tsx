"use client";

import { CatalogueSection } from "./CatalogueSection";
import { MagazineViewer } from "./MagazineViewer";
import { MagazineQueryResult } from "@/types/cms";

export const MagazineComponent = ({
  magazines,
}: {
  magazines: MagazineQueryResult;
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
