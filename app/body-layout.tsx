"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/ui/footer";
import { SessionProvider } from "next-auth/react";

const BodyLayout = ({ children }: { children: React.ReactNode }) => {
  // Navbar State
  const [isNavBarActive, setIsNavBarActive] = useState(false);

  // Reset navbar everytime path changes
  const pathname = usePathname();
  useEffect(() => {
    setIsNavBarActive(false);
  }, [pathname]);

  return (
    <div
      className={`flex min-h-screen flex-col  ${
        isNavBarActive && "overflow-hidden"
      }`}
    >
      <SessionProvider>
        <NavBar
          isNavBarActive={isNavBarActive}
          setIsNavBarActive={setIsNavBarActive}
        />
        {children}
        <Footer />
      </SessionProvider>
    </div>
  );
};

export default BodyLayout;
