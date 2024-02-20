"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "inline-flex font-anderson items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-ted-red text-primary-foreground hover:bg-ted-red/90",
        secondary: "bg-ted-white text-ted-black hover:bg-ted-white/90",
        outline:
          "bg-transparfent border border-solid border-ted-red hover:bg-white/20",
        ghost: "bg-transparent hover:bg-white/20",
        link: "text-ted-red hover:underline underline-offset-4",
      },
      size: {
        "default-rounded": "rounded-full h-10 px-4 py-2",
        "sm-rounded": "rounded-full h-9 px-3",
        "lg-rounded": "rounded-full h-11 px-6",
        "icon-rounded": "rounded-full h-10 w-10",
        default: "h-10 rounded-md px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 px-6",
        icon: "aspect-square h-10 w-10 rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface SmoothScrollButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  targetId: string;
  offset: number;
  children: React.ReactNode;
}

// interface SmoothScrollButtonProps {
//   targetId: string;
//   offset: number;
//   children: React.ReactNode;
// }

const SmoothScrollButton = React.forwardRef<
  HTMLButtonElement,
  SmoothScrollButtonProps
>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      targetId,
      offset,
      children,
      ...props
    },
    ref
  ) => {
    const scrollToTarget = () => {
      const navbar = document.getElementById("navbar") as HTMLElement;
      const target = document.getElementById(targetId) as HTMLElement;

      if (!navbar || !target) return;

      window.scrollTo({
        top: target.offsetTop - navbar.offsetHeight + offset, // setengah margin
        behavior: "smooth",
      });
    };

    return (
      <Button
        className={cn(buttonVariants({ variant, size, className }))}
        onClick={scrollToTarget}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

SmoothScrollButton.displayName = "SmoothScrollButton";

export default SmoothScrollButton;
