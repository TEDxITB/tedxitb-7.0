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
          error: "bg-[#FF335B] w-3 text-foreground",
          success: "bg-[#49D662] w-3 text-foreground",
          profile: "bg-[#FCBF0E] w-3 text-foreground",
          warning: "bg-[#2E86E8] w-3 text-foreground",
          loading: "bg-black w-3 text-foreground",
        };

        const variantStyle = variant ? variantStyles[variant] || "" : "";
        const typeVariant = variant as string;
        const shouldShowIcon = icon == true;
        const iconClass = shouldShowIcon
          ? variant === "loading"
            ? "animate-spin "
            : ""
          : "";

        return (
          <Toast key={id} {...props}>
            <div className={variantStyle}></div>
            <div className="my-5 flex flex-row gap-5">
              {shouldShowIcon && (
                <Image
                  src={variantIcons[typeVariant] || variantIcons.default}
                  alt={typeVariant}
                  className={`ml-4 ${iconClass}`}
                  width={40}
                  height={40}
                />
              )}
              <div className={`${shouldShowIcon ? "" : "ml-10"}`}>
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
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
