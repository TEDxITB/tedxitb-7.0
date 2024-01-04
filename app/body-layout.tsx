"use client";

import NavBar from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import {
  PHProvider,
  PostHogIdentifyOrReset,
  PostHogPageview,
} from "@/lib/posthog-client";

const BodyLayout = ({ children }: { children: React.ReactNode }) => {
  // Navbar State
  const [isNavBarActive, setIsNavBarActive] = useState(false);

  // Reset navbar everytime path changes
  const pathname = usePathname();
  useEffect(() => {
    setIsNavBarActive(false);
  }, [pathname]);

  return (
    <SessionProvider>
      <PHProvider>
        <Suspense>
          <PostHogPageview />
          <PostHogIdentifyOrReset />
        </Suspense>
        <body
          className={`flex min-h-screen flex-col overflow-x-hidden bg-ted-black ${
            isNavBarActive && "overflow-hidden"
          } `}
        >
          <NavBar
            isNavBarActive={isNavBarActive}
            setIsNavBarActive={setIsNavBarActive}
          />
          {children}
          <Toaster />
        </body>
      </PHProvider>
    </SessionProvider>
  );
};

export default BodyLayout;
