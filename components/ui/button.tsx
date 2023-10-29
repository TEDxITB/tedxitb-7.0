import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        var1: "bg-[#FF2B06] text-primary-foreground",
        var2:
          "bg-[#FFE0DA] text-[#FF2B06]",
        var3:
          "bg-[#FFF] border border-solid border-[#FF2B06]",
        var4: "bg-[#FFF]",
      },
      size: {
        type1: "h-[65px] w-[125px] rounded-[50px] shadow-xl",
        type2: "h-[65px] w-[160px] rounded-[50px] shadow-xl",
        type3: "h-[65px] w-[65px] rounded-full shadow-xl",
        type4: "h-[65px] w-[125px] rounded-[10px]",
        type5: "h-[65px] w-[160px] rounded-[10px]",
        type6: "h-[65px] w-[65px] rounded-[10px]"
      },
    },
    defaultVariants: {
      variant: "var1",
      size: "type1",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
