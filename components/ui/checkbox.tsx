"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

interface checkboxProps {
  isDisabled: boolean;
  label: string;
}

export function CheckboxWithText(props : checkboxProps) {

  const isDisabled = props.isDisabled;

  return (
    <div
      className={`flex items-center space-x-2 ${
        isDisabled
          ? "text-[#A5A1A1] hover:cursor-not-allowed"
          : "text-ted-black"
      }`}
    >
      <Checkbox
        id="terms1"
        disabled={isDisabled}
      />
      <div className="grid gap-1.5 leading-none">
        <p className="font-montserrat text-sm leading-none">{props.label}</p>
      </div>
    </div>
  );
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
& React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-ted-black border-opacity-50 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:border-[#A5A1A1] data-[state=checked]:border-none data-[state=checked]:bg-[#E8FE4D] data-[state=checked]:text-ted-black",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <CheckIcon className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
