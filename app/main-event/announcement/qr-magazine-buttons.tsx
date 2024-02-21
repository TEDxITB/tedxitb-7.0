"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SmoothScrollButton from "@/components/ui/smooth-scroll-button";
import QRCode from "react-qr-code";

function QRMagazineButtons({ ticketId }: { ticketId: string }) {
  const onImageCownload = () => {
    const svg = document.getElementById("QRCode");

    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <div className="grid w-full max-w-sm grid-rows-2 justify-items-center gap-8 self-center py-4 sm:w-auto sm:max-w-none sm:grid-cols-2 sm:grid-rows-none sm:self-start">
      <div className="flex w-full">
        <SmoothScrollButton
          targetId="magazine"
          offset={-20}
          size={"lg"}
          variant={"secondary"}
          className="grow sm:px-10 lg:py-6 lg:text-lg"
        >
          See Magazine
        </SmoothScrollButton>
      </div>
      <Dialog>
        <DialogTrigger className="flex w-full">
          <Button
            size={"lg"}
            className="flex grow gap-4 bg-[#FEB20E] text-ted-black hover:bg-[#e5a00d] sm:px-10 lg:py-6 lg:text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-qr-code"
            >
              <rect width="5" height="5" x="3" y="3" rx="1" />
              <rect width="5" height="5" x="16" y="3" rx="1" />
              <rect width="5" height="5" x="3" y="16" rx="1" />
              <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
              <path d="M21 21v.01" />
              <path d="M12 7v3a2 2 0 0 1-2 2H7" />
              <path d="M3 12h.01" />
              <path d="M12 3h.01" />
              <path d="M12 16v.01" />
              <path d="M16 12h1" />
              <path d="M21 12v.01" />
              <path d="M12 21v-1" />
            </svg>
            QR Code
          </Button>
        </DialogTrigger>
        <DialogContent className="border-none bg-[#1C1C1C] p-8 font-anderson text-ted-white">
          <DialogTitle className="text-xl sm:text-2xl">Your Ticket</DialogTitle>
          <DialogDescription className="flex flex-col gap-8">
            <QRCode
              size={300}
              value={ticketId}
              viewBox={`0 0 256 256`}
              id="QRCode"
              className="h-auto w-full max-w-[300px] self-center"
            />
            <Button
              size={"lg"}
              className="self-center lg:px-10 lg:py-6 lg:text-lg"
              onClick={onImageCownload}
            >
              Download Ticket
            </Button>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default QRMagazineButtons;
