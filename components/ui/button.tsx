import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-ted-red text-primary-foreground hover:bg-ted-red/90",
        secondary: "bg-ted-opaque-red text-ted-red hover:bg-ted-opaque-red/90",
        outline:
          "bg-white border border-solid border-ted-red hover:bg-white/90",
        ghost: "bg-white hover:bg-white/90",
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
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
