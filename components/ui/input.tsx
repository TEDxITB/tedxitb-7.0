"use client";

/**
 * To do left:
 * 1. Validator(?)
 * 2. Font Inter
 * 3. Input yang terakhir buat apa jir.
 */
import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface TedxInputProps extends InputProps {
  label: string;
  required?: boolean;
  helpermessage: string;
  successmessage: string;
  errormessage: string;
  validator?: (val: string) => boolean;
}

type InputState = "Unknown" | "Success" | "Error";

const Input = React.forwardRef<HTMLInputElement, TedxInputProps>(
  (
    {
      className,
      type,
      label,
      required = false,
      helpermessage,
      successmessage,
      errormessage,
      ...props
    },
    ref
  ) => {
    const [current, setCurrent] = React.useState<InputState>("Unknown");
    const extendStyle = {
      Unknown: {
        border: "border border-[#808080]",
        message: "",
      },
      Success: {
        border: "border-2 border-green-600",
        message: "text-green-600",
      },
      Error: {
        border: "border-2 border-red-500",
        message: "text-red-500",
      },
    };

    return (
      <>
        <div>
          <label className="text-xs">
            {label} {required && <span className="text-ted-red">*</span>}
          </label>
          <input
            type={type}
            className={cn(
              `font flex h-10 w-full rounded-md bg-background px-3 py-2 text-sm text-gray-400 text-opacity-80 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-[#EEE] disabled:opacity-50 ${extendStyle[current].border}`,
              className
            )}
            ref={ref}
            {...props}
          />
          <small className={`text-xs ${extendStyle[current].message}`}>
            {current == "Unknown"
              ? helpermessage
              : current == "Success"
              ? successmessage
              : errormessage}
          </small>
        </div>
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
