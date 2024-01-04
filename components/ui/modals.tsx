import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";

interface ModalsProps {
  variant: "type-1" | "type-2" | "type-3" | "type-4";
  modalTitle: string;
  modalDescription: string;
  modalSubDescription: string;
}

const backgroundImages = {
  "type-1": "/modalBackgroundType1.png",
  "type-2": "/modalBackgroundType2.png",
  "type-3": "/modalBackgroundType3.png",
  "type-4": "/modalBackgroundType4.png",
};

const Modals: React.FC<ModalsProps> = ({
  variant,
  modalTitle,
  modalDescription,
  modalSubDescription,
}) => {
  return (
    <Dialog>
      <DialogTrigger className="rounded-lg border border-black px-4 py-2">
        Open
      </DialogTrigger>
      <DialogContent
        className={`flex h-[320px] w-[600px] items-center justify-center rounded-[15px] border border-ted-black border-opacity-25`}
      >
        <Image
          src={`${backgroundImages[variant]}`}
          alt={"backgroundImage"}
          className={`absolute min-w-full ${
            variant == "type-1" ? "top-0 rounded-t-lg" : "z-[-1] rounded-lg"
          }`}
          width={400}
          height={400}
        ></Image>
        <DialogHeader>
          <DialogTitle
            className={`${
              variant === "type-1" ? "text-ted-red" : "text-ted-white"
            } font-anderson text-[48px] font-[700] leading-[59px]`}
          >
            {modalTitle}
          </DialogTitle>
          <DialogDescription
            className={`${
              variant === "type-1" ? "text-ted-black" : "text-ted-white"
            } font-anderson text-[24px] font-[400] leading-[30px]`}
          >
            {modalDescription}
          </DialogDescription>
          <label
            className={`text-center font-anderson text-[16px] font-[400] leading-[20px] text-[#CACACA]`}
          >
            {modalSubDescription}
          </label>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modals;
