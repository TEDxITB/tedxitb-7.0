"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";

const navLink: {
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

export default function NavBar() {
  const currentPath = usePathname();
  const [showHeader, setShowHeader] = useState(false);

  return (
    <nav className="flex flex-col text-white">
      <div className="flex flex-row items-center">
        <div className="relative flex pl-5 lg:align-middle">
          <Image
            priority
            className="absolute left-20 top-0 -translate-x-1/2 -translate-y-1/2 opacity-25"
            src={"/effect1.png"}
            width={400}
            height={400}
            alt=""
          />
          <Link href={"/"}>
            <Image
              className="static object-contain"
              src={"/tedxitb-logo-white.png"}
              alt="Logo"
              width={200}
              height={100}
            />
          </Link>
        </div>
        <button
          aria-label="menu"
          className="ml-auto p-5 text-4xl lg:hidden"
          onClick={() => setShowHeader(true)}
        >
          <MenuIcon />
        </button>
        <div
          className={cn(
            "absolute left-0 top-0 h-screen w-screen overflow-hidden",
            showHeader ? "bg-black/50" : "pointer-events-none",
            "lg:static lg:ml-auto lg:h-auto lg:w-auto"
          )}
          onClick={() => setShowHeader(false)}
        >
          <div
            className={cn(
              "pointer-events-auto absolute right-0 top-0 flex h-full min-w-[40%] translate-x-full flex-col gap-5 transition-transform",
              showHeader ? "translate-x-0" : "",
              "transition-transform",
              "lg:relative lg:min-w-0 lg:translate-x-0"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute -z-50 h-full w-full overflow-hidden rounded-l-lg border-l-2 border-white lg:hidden">
              <Image
                className="absolute"
                src="/header-mobile-bubble.png"
                width={200}
                height={100}
                alt="Bubble"
              />
              <Image fill alt="bg" src={"/header-mobile-bg.png"} />
              {/* <div className="absolute h-full w-full bg-[url(/header-mobile-bg.png)] bg-cover bg-left-bottom" /> */}
              <div className="absolute -z-10 h-full w-full bg-black"></div>
            </div>
            <button
              className="text-bol ml-auto p-5 text-4xl lg:hidden"
              onClick={() => setShowHeader(false)}
            >
              <XIcon aria-label="menu-close" />
            </button>
            <ul className="m-5 flex flex-col gap-5 lg:flex-row lg:items-center">
              {navLink.map(({ name, path: url }) => {
                return (
                  <li key={name}>
                    <Link
                      href={url}
                      className={`${currentPath == url ? "text-ted-red" : ""}`}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
              <Button size={"lg"}>Sign In</Button>
            </ul>
            <Link className="mt-auto" href={"/"}>
              <Image
                className="static object-contain pb-5 lg:hidden"
                src={"/tedxitb-logo-white.png"}
                alt="Logo"
                width={200}
                height={100}
              />
            </Link>
          </div>
        </div>
      </div>
      <span className="h-2 w-full bg-white bg-gradient-to-b from-ted-red to-black"></span>
    </nav>
  );
}
