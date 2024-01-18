import { type Metadata } from "next";

export const openGraphTemplate: Metadata["openGraph"] = {
  description:
    "TEDx is an international community that organizes TED-style events anywhere and everywhere, celebrating locally-driven ideasand elevating them to a global stage. TEDx events are producedindependently of TED conferences, each event curates speakers ontheir own, but based on TED's format and rules.",
  url: "https://tedxitb.id/",
  siteName: "TEDxITB 7.0",
  locale: "en_US",
  type: "website",
  images: {
    url: "https://tedxitb.id/logo/link-preview.png",
    width: "1200",
    height: "630",
    alt: "TEDxITB 7.0 Logo",
  },
};

export const twitterTemplate: Metadata["twitter"] = {
  card: "summary_large_image",
  description:
    "TEDx is an international community that organizes TED-style events anywhere and everywhere, celebrating locally-driven ideasand elevating them to a global stage. TEDx events are producedindependently of TED conferences, each event curates speakers ontheir own, but based on TED's format and rules.",
  site: "@TEDxITB2023",
  siteId: "1705061790290509824",
  creator: "@TEDxITB2023",
  creatorId: "1705061790290509824",
  images: {
    url: "https://tedxitb.id/logo/link-preview.png",
    alt: "TEDxITB 7.0 Logo",
  },
};
