"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

type BreadcrumbsProps = {
  variant?: "default" | "highlighted";
};

const Breadcrumbs = ({ variant }: BreadcrumbsProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <ul className="flex flex-wrap items-center gap-3 text-base lg:text-lg">
      <li className="p-2">
        <Link href={"/"}>Home</Link>
      </li>

      {pathNames.length > 0 && <ChevronRight />}

      {pathNames.map((link, index) => {
        let href = `/${pathNames.slice(0, index + 1).join("/")}`;
        let itemClasses = "p-2";
        let itemLink = link.charAt(0).toUpperCase() + link.slice(1);

        if (paths === href) {
          if (variant == "default") {
            itemClasses += " text-[#FF335B]";
          } else if (variant == "highlighted") {
            itemClasses += " bg-[#FF335B] rounded-3xl text-white px-4";
          }
        }

        return (
          <React.Fragment key={index}>
            <li className={itemClasses}>
              <Link href={href}>{itemLink}</Link>
            </li>
            {pathNames.length !== index + 1 && <ChevronRight />}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
