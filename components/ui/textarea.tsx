import * as React from "react";

import { cn } from "@/lib/utils";

export interface TedTextarea
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TedTextarea>(
  ({ className, error = false, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          `placeholder:text-[rgba(170, 170, 170, 0.80)] flex min-h-[80px] w-full rounded-md ${
            error
              ? "border-2 border-ted-red focus-visible:border-gray-500"
              : "border border-gray-500"
          }  bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-[#EEE] disabled:opacity-50 `,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
