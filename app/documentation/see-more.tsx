"use client";

import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

const SeeMoreButton = () => {
  const scrollToTarget = () => {
    const navbar = document.getElementById("navbar") as HTMLElement;
    const target = document.getElementById("carousel") as HTMLElement;

    if (!navbar || !target) return;

    window.scrollTo({
      top: target.offsetTop - navbar.offsetHeight + 56, // setengah margin
      behavior: "smooth",
    });
  };

  return (
    <Button
      size="lg"
      className="flex-none px-8 text-base"
      onClick={scrollToTarget}
    >
      See More <ArrowDownCircle className="ml-2 h-5 w-5" />
    </Button>
  );
};

export default SeeMoreButton;
