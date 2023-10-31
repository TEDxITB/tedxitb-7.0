import * as React from "react";
import Image from "next/image";
import { ImageProps } from "next/image";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-lg",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardImage = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, src, alt, ...props }, ref) => (
    <Image
      src={src}
      alt={alt}
      className={cn("h-auto w-full rounded-t-lg", className)}
      ref={ref}
      {...props}
    />
  )
);
CardImage.displayName = "CardImage";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("text-2xl font-bold", className)} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("mt-[10px] text-justify text-lg", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4", className)} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardTitle, CardDescription, CardContent, CardImage };
