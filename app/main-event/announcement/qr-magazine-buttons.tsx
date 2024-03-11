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
import { BookOpenText, QrCode } from "lucide-react";
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
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
      <SmoothScrollButton
        targetId="magazine"
        offset={-20}
        size={"lg"}
        variant={"secondary"}
        className="w-full"
      >
        <BookOpenText className="mr-2 h-5 w-5" /> See Magazine
      </SmoothScrollButton>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size={"lg"}
            className="bg-[#FEB20E] px-10 w-full text-ted-black hover:bg-[#e5a00d]"
          >
            <QrCode className="mr-2 h-5 w-5" />
            QR Code
          </Button>
        </DialogTrigger>
        <DialogContent className="border-none bg-[#1C1C1C] p-8 font-anderson text-ted-white">
          <DialogTitle className="font-anderson text-xl font-bold lg:text-3xl">
            Your Ticket
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-8">
            <QRCode
              size={300}
              value={ticketId}
              viewBox={`0 0 256 256`}
              id="QRCode"
              className="h-auto w-full max-w-[300px] self-center rounded-md border-8 border-ted-red"
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
