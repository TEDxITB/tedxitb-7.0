import { Link as IconLink } from "lucide-react";
import Link from "next/link";
import { LinkProps } from "next/link";
import * as React from "react";

type CustomLink = LinkProps & {
  children: string;
  target: "_blank" | "_self" | "_parent" | "_top";
};

const CustomLink = React.forwardRef<HTMLAnchorElement, CustomLink>(
  ({ href, children, ...props }, ref) => (
    <Link
      href={href}
      ref={ref}
      className="group flex flex-row items-center gap-x-2 text-[#0079FF] visited:text-[#551A8B] hover:text-[#0056B2] hover:underline hover:underline-offset-2 visited:hover:text-[#361059]"
      {...props}
    >
      <IconLink className="w-4" />
      <span className="cursor-pointer font-anderson text-lg">{children}</span>
    </Link>
  )
);

CustomLink.displayName = "CustomLink";

export default CustomLink;
