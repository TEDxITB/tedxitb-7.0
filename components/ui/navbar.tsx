"use client";

import { Button } from "./button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dispatch, SetStateAction } from "react";

const navLink: {
  name: string;
  path: string;
}[] = [
  {
    name: "Main Event",
    path: "/main-event",
  },
  {
    name: "Magazine",
    path: "/magazine",
  },
  {
    name: "Quiz",
    path: "/quiz",
  },
  {
    name: "Sponsorship",
    path: "/sponsorship",
  },
  {
    name: "Documentation",
    path: "/documentation",
  },
];

export default function NavBar({
  isNavBarActive,
  setIsNavBarActive,
}: {
  isNavBarActive: boolean;
  setIsNavBarActive: Dispatch<SetStateAction<boolean>>;
}) {
  const currentPath = usePathname();
  const { data: session } = useSession();

  return (
    <nav
      className="sticky left-0 right-0 top-0 z-[50] flex w-full flex-col border-b-2 border-slate-800 bg-black font-anderson text-white"
      id="navbar"
    >
      <div className="flex h-24 flex-row items-center justify-between px-7 xl:px-14">
        <div className="relative flex lg:align-middle">
          <Link href={"/"}>
            <Image
              className="static h-9 w-auto object-contain xl:h-10"
              src={"/logo/x-logo-red-full-cropped.png"}
              alt="Logo"
              width={200}
              height={100}
            />
          </Link>
        </div>
        <Button
          aria-label="menu"
          variant="ghost"
          size="icon"
          className="bg-transparent hover:bg-transparent lg:hidden"
          onClick={() => setIsNavBarActive(true)}
        >
          <Menu className="h-full w-full" />
        </Button>
        <div
          className={cn(
            "absolute left-0 top-0 h-screen w-screen overflow-hidden",
            isNavBarActive ? "bg-black/50" : "pointer-events-none",
            "lg:static lg:ml-auto lg:h-auto lg:w-auto"
          )}
          onClick={() => setIsNavBarActive(false)}
        >
          <div
            className={cn(
              "pointer-events-auto absolute right-0 top-0 flex h-full min-w-[215px] translate-x-full flex-col gap-5 transition-transform",
              isNavBarActive ? "translate-x-0" : "",
              "transition-transform",
              "lg:relative lg:min-w-0 lg:translate-x-0 lg:gap-0"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute -z-50 h-full w-full overflow-hidden border-l-2 border-slate-800 lg:hidden">
              {/* <Image
                className="absolute"
                src="/components/bubble-navbar.png"
                width={200}
                height={100}
                alt="Bubble"
              /> */}
              <Image
                fill
                alt="bg"
                sizes="400px"
                src="/components/bg-navbar.png"
              />
              <div className="absolute -z-10 h-full w-full bg-black" />
            </div>

            <Button
              aria-label="menu-close"
              variant="ghost"
              size="icon"
              className="ml-auto mr-4 mt-7 bg-transparent hover:bg-transparent lg:hidden"
              onClick={() => setIsNavBarActive(false)}
            >
              <X className="h-full w-full" />
            </Button>

            <ul className="m-8 flex flex-col gap-6 lg:m-0 lg:flex-row lg:items-center lg:gap-8 xl:gap-12 xl:text-lg">
              {navLink.map(({ name, path: url }) => {
                return (
                  <li key={name}>
                    <Link
                      href={url}
                      className={`${
                        currentPath == url
                          ? "font-bold text-ted-red"
                          : "font-medium text-ted-white"
                      }`}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
              <li>
                {session ? (
                  <Button
                    size={"lg"}
                    className="px-7 text-base"
                    onClick={() => signOut({ callbackUrl: "/?phState=reset" })}
                  >
                    Sign Out
                  </Button>
                ) : (
                  <Link className="w-fit self-center" href="/auth/sign-in">
                    <Button size={"lg"} className="px-8 text-base">
                      Sign In
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
            <Link className="mb-8 mt-auto self-center lg:hidden" href={"/"}>
              <Image
                className="static h-auto w-[150px] object-contain"
                src="/logo/tedxitb-logo-white-cropped.png"
                alt="Logo"
                width={1119}
                height={223}
              />
            </Link>
          </div>
        </div>
      </div>
      {/* <span className="h-2 w-full bg-white bg-gradient-to-b from-ted-red to-black"></span> */}
    </nav>
  );
}
