// Import necessary modules
"use client"
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";

export function Toaster() {
  const { toasts } = useToast();

  const variantIcons: Record<string, string> = {
    'error-icon': "/ErrorIcon.svg",
    'success-icon': "/SuccessIcon.svg",
    'profile-icon' : "/ProfileIcon.svg",
    'warning-icon' : "/WarningIcon.svg",
    'loading-icon' : "/LoadingIcon.svg",
  };

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, variant, ...props }) {
        
        const variantStyles: Record<string, string> = {
          'error': "bg-[#FF335B] w-5 text-foreground",
          'error-icon': "bg-[#FF335B] w-5 text-foreground",
          'success': "bg-[#49D662] w-5 text-foreground",
          'success-icon': "bg-[#49D662] w-5 text-foreground",
          'profile': "bg-[#FCBF0E] w-5 text-foreground",
          'profile-icon': "bg-[#FCBF0E] w-5 text-foreground",
          'warning': "bg-[#2E86E8] w-5 text-foreground",
          'warning-icon': "bg-[#2E86E8] w-5 text-foreground",
          'loading': "bg-black w-5 text-foreground",
          'loading-icon': "bg-black w-5 text-foreground",
        };

        const variantStyle = variant ? variantStyles[variant] || "" : "";

        const typeVariant = variant as string;

        const shouldShowIcon = variant && variantIcons[typeVariant] !== undefined;

        return (
          <Toast key={id} {...props}>
            <div className={variantStyle}>
            </div>
            <div className="gap-5 flex flex-row my-5">
              {shouldShowIcon && <Image src={variantIcons[typeVariant] || variantIcons.default} alt={typeVariant} className="mx-5 w-16" width={32} height={32} />}
              <div className={`${shouldShowIcon ? '' : 'ml-10'}`}>
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && <ToastDescription>{description}</ToastDescription>}
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
