"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type BreadcrumbsProps = {
  homeElement: ReactNode;
  activeClasses?: string;
  variant?: "default" | "highlighted";
};

const RightArrowIcon = () => (
  <Image src="/right-arrow.svg" alt="Right Arrow" width={24} height={24} />
);

const Breadcrumbs = ({ homeElement, variant }: BreadcrumbsProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div className="flex items-center justify-center">
      <ul className="inline-flex gap-5 text-2xl">
        <li className="p-2">
          <Link href={"/"}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && <RightArrowIcon />}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses = "p-2";
          let itemLink = link.charAt(0).toUpperCase() + link.slice(1);

          if (paths === href) {
            if (variant == "default") {
              itemClasses += " text-[#FF335B]";
            } else if (variant == "highlighted") {
              itemClasses += " bg-[#FF335B] rounded-3xl text-white";
            }
          }

          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && <RightArrowIcon />}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
