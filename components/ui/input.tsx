import * as React from "react";

import { cn } from "@/lib/utils";

export interface TedInput extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, TedInput>(
  ({ className, type, error = false, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `placeholder:text-[rgba(170, 170, 170, 0.80)] ${
            error
              ? "border-ted-red focus-visible:border-gray-500"
              : "border-gray-500"
          } flex h-10 w-full rounded-md border border-solid bg-background px-3 py-2 text-sm outline-[#80808] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ted-red focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-[#EEE]`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
