"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const headerLink: {
  name: string;
  path: string;
}[] = [
    {
      name: "Main Event",
      path: "/test/header",
    },
    {
      name: "Magazine",
      path: "/test/header/Magazine",
    },
    {
      name: "TED Quiz",
      path: "/test/header/TEDQuiz",
    },
    {
      name: "Sponsorship",
      path: "/test/header/Spnsorship",
    },
    {
      name: "Documentation",
      path: "/test/header/Documentation",
    },
  ];

export default function Header() {
  const currentPath = usePathname();
  const [showHeader, setShowHeader] = useState(false);

  return (
    <header className="flex flex-col text-white">
      <div className="flex flex-row items-center">
        <div className="relative flex pl-5 lg:align-middle">
          <Image
            className="absolute left-20 top-0 -translate-x-1/2 -translate-y-1/2 opacity-25"
            src={"/effect1.png"}
            width={400}
            height={400}
            alt=""
          />
          <Image
            className="static object-contain"
            src={"/tedxitb-logo-white.png"}
            alt="Logo"
            width={200}
            height={100}
          />
        </div>
        <button className="lg:hidden ml-auto p-5 text-4xl"
          onClick={() => setShowHeader(true)}>≡</button>
        <div className={cn(
          "absolute top-0 left-0 overflow-hidden w-screen h-screen",
          showHeader ? "bg-black/50" : "pointer-events-none",
          "lg:static lg:w-auto lg:h-auto lg:ml-auto"
        )} onClick={() => setShowHeader(false)}>
          <div className={cn(
            "absolute top-0 right-0 translate-x-full min-w-[40%] flex flex-col gap-5 h-full transition-transform pointer-events-auto",
            showHeader ? "translate-x-0" : "",
            "transition-transform",
            "lg:relative lg:translate-x-0 lg:min-w-0"
          )} onClick={e => e.stopPropagation()}>
            <div className="absolute lg:hidden w-full h-full overflow-hidden border-l-2 border-white -z-50 rounded-l-lg">
              <Image className="absolute"
                src="/header-mobile-bubble.png" width={200} height={100} alt="Bubble" />
              <div className="absolute bg-[url(/header-mobile-bg.png)] bg-cover w-full h-full bg-left-bottom" />
              <div className="absolute bg-black w-full h-full -z-10"></div>
            </div>
            <button className="ml-auto lg:hidden p-5 text-4xl text-bol" onClick={() => setShowHeader(false)}>X</button>
            <section className="flex flex-col lg:flex-row lg:items-center gap-5 m-5">
              {headerLink.map(({ name, path: url }) => {
                return (
                  <Link
                    href={url}
                    className={`${currentPath == url ? "text-ted-red" : ""}`}
                    key={name}
                  >
                    {name}
                  </Link>
                );
              })}
              <Button>Sign In</Button>
            </section>
            <Image
              className="static object-contain mt-auto pb-5 lg:hidden"
              src={"/tedxitb-logo-white.png"}
              alt="Logo"
              width={200}
              height={100}
            />
          </div>
        </div>
      </div>
      <span className="h-2 w-full bg-white bg-gradient-to-b from-ted-red to-black"></span>
    </header >
  );
}
