import BodyLayout from "./body-layout";
import "./globals.css";
import Footer from "@/components/ui/footer";
import type { Viewport, Metadata } from "next";
import localFont from "next/font/local";

const anderson = localFont({
  src: "./fonts/anderson.otf",
  display: "swap",
  variable: "--font-anderson",
});

const laGraziela = localFont({
  src: "./fonts/lagraziela.otf",
  display: "swap",
  variable: "--font-graziela",
});

const garamond = localFont({
  src: "./fonts/garamond.ttf",
  display: "swap",
  variable: "--font-garamond",
});

// Shared viewport config
export const viewport: Viewport = {
  themeColor: "black",
  colorScheme: "dark",
};

// Shared metadata config
export const metadata: Metadata = {
  description:
    "TEDx is an international community that organizes TED-style events anywhere and everywhere, celebrating locally-driven ideasand elevating them to a global stage. TEDx events are producedindependently of TED conferences, each event curates speakers ontheir own, but based on TED's format and rules.",
  generator: "Next.js",
  applicationName: "TEDxITB 7.0 Website",
  keywords: [
    "TEDxITB 7.0",
    "ITB Bandung",
    "Ideas worth spreading",
    "Innovation and technology",
    "TEDx",
    "Institut Teknologi Bandung",
    "Empowering ideas",
    "TEDx event",
  ],
  category: "education",
  metadataBase: new URL("https://tedxitb.id"),
  manifest: "https://tedxitb.id/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anderson.variable} ${laGraziela.variable} ${garamond.className}`}
    >
      <BodyLayout>
        {children}
        <Footer />
      </BodyLayout>
    </html>
  );
}
