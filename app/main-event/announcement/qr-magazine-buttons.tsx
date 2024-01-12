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
    <div className="sm:self-start grid grid-rows-2 sm:grid-cols-2 sm:gap-8">
      <Dialog>
        <DialogTrigger className="self-start mt-4 flex">
          <Button
            variant={"primary"}
            size={"lg"}
            className="sm:px-10 lg:py-6 lg:text-lg grow"
          >
            Magazine
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-[#1C1C1C] font-anderson text-ted-white border-none">
          <DialogTitle>Are you sure to confirm ABSENCE?</DialogTitle>
          <DialogDescription className="text-ted-white">
            If you find yourself able to attend the event after confirming your
            absence, please contact us.
          </DialogDescription>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger className="self-start mt-4 flex">
          <Button size={"lg"} className="sm:px-10 lg:py-6 lg:text-lg grow">
            Ticket
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-[#1C1C1C] font-anderson text-ted-white border-none p-8">
          <DialogTitle className="text-xl sm:text-2xl">Your Ticket</DialogTitle>
          <DialogDescription className="flex flex-col gap-8">
            <QRCode
              size={300}
              value={ticketId}
              viewBox={`0 0 256 256`}
              id="QRCode"
              className="self-center h-auto max-w-[300px] w-full"
            />
            <Button
              size={"lg"}
              className="lg:px-10 lg:py-6 lg:text-lg self-center"
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
