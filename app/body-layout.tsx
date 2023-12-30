"use client";

import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import { Montserrat } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "400", "800"],
  variable: "--font-inter",
});

const BodyLayout = ({ children }: { children: React.ReactNode }) => {
  // Navbar State
  const [isNavBarActive, setIsNavBarActive] = useState(false);

  // Reset navbar everytime path changes
  const pathname = usePathname();
  useEffect(() => {
    setIsNavBarActive(false);
  }, [pathname]);

  return (
    <body
      className={`flex min-h-screen flex-col overflow-x-hidden bg-ted-black ${
        montserrat.className
      } ${anderson.variable} ${inter.className} ${laGraziela.variable} ${
        garamond.className
      } ${isNavBarActive && "overflow-hidden"} `}
    >
      <SessionProvider>
        <NavBar
          isNavBarActive={isNavBarActive}
          setIsNavBarActive={setIsNavBarActive}
        />
        {children}
        <Footer />
        <Toaster />
      </SessionProvider>
    </body>
  );
};

export default BodyLayout;
