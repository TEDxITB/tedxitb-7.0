"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";

export function Toaster() {
  const { toasts } = useToast();

  const variantIcons: Record<string, string> = {
    error: "/ErrorIcon.svg",
    success: "/SuccessIcon.svg",
    profile: "/ProfileIcon.svg",
    warning: "/WarningIcon.svg",
    loading: "/LoadingIcon.svg",
  };

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        variant,
        icon,
        ...props
      }) {
        const variantStyles: Record<string, string> = {
          error: "bg-[#E63E32] w-3 text-foreground",
          success: "bg-[#2BB673] w-3 text-foreground",
          profile: "bg-[#FCBF0E] w-3 text-foreground",
          warning: "bg-[#2E86E8] w-3 text-foreground",
          loading: "bg-[#4C4C4C] w-3 text-foreground",
        };

        const variantStyle = variant ? variantStyles[variant] || "" : "";
        const typeVariant = variant as string;
        const shouldShowIcon = icon == true;
        const iconClass =
          shouldShowIcon && variant === "loading" && "animate-spin ";

        return (
          <Toast key={id} {...props}>
            <div className={variantStyle} />
            <div className="mx-5 my-6 flex flex-row items-center gap-4">
              {shouldShowIcon && (
                <Image
                  src={variantIcons[typeVariant] || variantIcons.default}
                  alt={typeVariant}
                  className={`${iconClass}`}
                  width={36}
                  height={36}
                />
              )}
              <div className="flex flex-col gap-1">
                {title && <ToastTitle className="font-anderson">{title}</ToastTitle>}
                {description && (
                  <ToastDescription className="font-anderson">{description}</ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
