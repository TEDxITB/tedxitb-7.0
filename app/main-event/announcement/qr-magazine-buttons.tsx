"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
    <div className="grid grid-rows-2 sm:grid-cols-2 sm:gap-8 sm:self-start">
      <Dialog>
        <DialogTrigger className="mt-4 flex self-start">
          <Button
            variant={"primary"}
            size={"lg"}
            className="grow sm:px-10 lg:py-6 lg:text-lg"
            aria-label="Magazine"
          >
            Magazine
          </Button>
        </DialogTrigger>
        <DialogContent className="border-none bg-[#1C1C1C] font-anderson text-ted-white">
          <DialogTitle>Are you sure to confirm ABSENCE?</DialogTitle>
          <DialogDescription className="text-ted-white">
            If you find yourself able to attend the event after confirming your
            absence, please contact us.
          </DialogDescription>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger className="mt-4 flex self-start">
          <Button size={"lg"} className="grow sm:px-10 lg:py-6 lg:text-lg" aria-label="Ticket">
            Ticket
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
              aria-label="Click to Download Ticket"
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
