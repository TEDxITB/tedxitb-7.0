"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import Footer from "@/components/ui/footer";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";

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
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "400", "800"],
  variable: "--font-inter",
})

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
      className={`flex min-h-screen flex-col bg-ted-black overflow-x-hidden ${
        montserrat.className
      } ${anderson.variable} ${inter.className} ${laGraziela.variable} ${garamond.className} ${isNavBarActive && "overflow-hidden"} `}
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