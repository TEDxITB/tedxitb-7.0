import Link from "next/link";
import { Link as IconLink } from "lucide-react";

interface linkProps {
  target: string;
  href: string;
  children?: React.ReactNode;
}

const Links: React.FC<linkProps> = ({ href, children, target, ...props }) => {
  return (
    <Link
      href={href}
      target={target}
      {...props}
      className="group visited:text-[#3F1871]"
    >
      <div className="flex cursor-pointer flex-row items-center gap-x-4">
        <IconLink className="text-[#0079FF] group-hover:text-[#004797]" />
        <label className="font-anderson text-[24px] text-[#0079FF] hover:cursor-pointer group-hover:text-[#004797] group-hover:underline group-hover:underline-offset-1">
          {children}
        </label>
      </div>
    </Link>
  );
};

export default Links;
