import "./globals.css";
import { Montserrat, EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import BodyLayout from "./body-layout";
import type { Viewport, Metadata } from "next";
import Footer from "@/components/ui/footer";

// Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-monsterrat",
});

const anderson = localFont({
  src: "./fonts/AndersonGrotesk.otf",
  display: "swap",
  variable: "--font-anderson",
});

const laGraziela = localFont({
  src: "./fonts/LaGraziela.otf",
  display: "swap",
  variable: "--font-graziela",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "400", "800"],
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
      className={`${montserrat.className} ${anderson.variable} ${laGraziela.variable} ${garamond.className}`}
    >
      <BodyLayout>
        {children}
        <Footer />
      </BodyLayout>
    </html>
  );
}
