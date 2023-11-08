import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import Breadcrumbs from "@/components/ui/breadcrumbs";

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
        <div className="m-10 grid gap-6">
          <Breadcrumbs homeElement={"Home"} variant="default" />
          <Breadcrumbs homeElement={"Home"} variant="highlighted" />
        </div>
        {children}
      </body>

      {/* Hotjar */}
      <Script
        id="hotjar"
        dangerouslySetInnerHTML={{
          __html: `(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3323572,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
        }}
      />
    </html>
  );
}
