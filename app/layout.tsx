import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";

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

export const metadata: Metadata = {
  title: "TEDxITB",
  description: "Coming soon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Body */}
      <body
        className={`${montserrat.className} ${anderson.variable} bg-ted-black`}
      >
        {children}
      </body>

      {/* Hotjar */}
      <Script id="hotjar" />
    </html>
  );
}
