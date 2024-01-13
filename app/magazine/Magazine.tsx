"use client"

import { CatalogueSection } from "./CatalogueSection";
import { MagazineViewer } from "./MagazineViewer";

export const MagazineComponent = () => {
    const [magazineSection, setMagazine] = MagazineViewer();
    const catalogueSection = CatalogueSection(setMagazine);
    return <>
        {catalogueSection}
        {magazineSection}
    </>
};
