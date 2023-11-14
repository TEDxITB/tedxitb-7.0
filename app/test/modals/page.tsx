import Modals from "@/components/ui/modals";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const page = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-y-4 bg-ted-white">
      <Dialog>
        <DialogTrigger className="rounded-lg border border-black px-4 py-2">
          Open
        </DialogTrigger>
        <DialogContent
          backgroundimage= ""
          className={`flex h-[320px] w-[600px] items-center justify-center rounded-[15px] border border-ted-black border-opacity-25`}
        >
          <DialogHeader>
            <DialogTitle className="text-ted-red font-anderson text-[48px]">Modal Title</DialogTitle>
            <DialogDescription className="text-white font-anderson text-[24px]">Lorem ipsum dolot sit amet</DialogDescription>
            <DialogDescription className="text-white font-anderson text-[20px]">Dummy sub description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default page;
