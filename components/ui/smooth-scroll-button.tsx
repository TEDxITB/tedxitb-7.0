"use client";

import { Button } from "@/components/ui/button";

interface SmoothScrollButtonProps {
  targetId: string;
  children: React.ReactNode;
}

const SmoothScrollButton = ({
  targetId,
  children,
  ...props
}: SmoothScrollButtonProps) => {
  const scrollToTarget = () => {
    const navbar = document.getElementById("navbar") as HTMLElement;
    const target = document.getElementById(targetId) as HTMLElement;

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
      {...props}
    >
      {children}
    </Button>
  );
};

export default SmoothScrollButton;
