import Link from "next/link";
import { Link as IconLink } from "lucide-react";

interface linkProps {
  target: string;
  href: string;
  children?: React.ReactNode;
}

const CustomLink: React.FC<linkProps> = ({
  href,
  children,
  target,
  ...props
}) => {
  return (
    <Link
      href={href}
      target={target}
      {...props}
      className="group flex flex-row items-center gap-x-2 text-[#0079FF] visited:text-[#3F1871] hover:text-[#004797] hover:underline hover:underline-offset-2"
    >
      <IconLink className="w-4" />
      <label className="cursor-pointer font-anderson text-lg">{children}</label>
    </Link>
  );
};

export default CustomLink;
