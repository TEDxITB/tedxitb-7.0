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
        <button
          className="ml-auto p-5 lg:hidden"
          onClick={() => setShowHeader(true)}
        >
          O
        </button>
        <div
          className={`absolute h-screen w-screen select-none bg-black opacity-60 ${
            showHeader ? "" : "hidden"
          }`}
          onClick={() => setShowHeader(false)}
        ></div>
        <div
          className={cn(
            "absolute right-0 top-0 min-w-[40%] translate-x-full",
            "flex h-full flex-col gap-5",
            showHeader ? "translate-x-0" : "",
            "transition-transform",
            "ml-auto lg:relative lg:min-w-0 lg:translate-x-0"
          )}
        >
          <div className="absolute -z-50 h-full w-full border-l-2 border-white bg-black lg:hidden"></div>
          <button
            className="ml-auto p-5 lg:hidden"
            onClick={() => setShowHeader(false)}
          >
            X
          </button>
          <section className="m-5 flex flex-col gap-5 lg:flex-row lg:items-center">
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
        </div>
      </div>
      <span className="h-2 w-full bg-white bg-gradient-to-b from-ted-red to-black"></span>
    </header>
  );
}
