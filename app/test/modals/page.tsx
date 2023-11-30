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
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-y-4 bg-red-400">
      <p>TESS BLURR</p>

      {/* Dialog 1 */}
      <Dialog>
        <DialogTrigger className="rounded-lg border border-black px-4 py-2">
          Open 1
        </DialogTrigger>
        <DialogContent
          className={`flex h-[320px] items-center justify-center rounded-[15px] border border-ted-black border-opacity-25`}
        >
          <DialogHeader>
            <DialogTitle className="font-anderson text-[48px] text-ted-red">
              Modal Title
            </DialogTitle>
            <DialogDescription className="font-anderson text-[24px] text-black">
              Lorem ipsum dolot sit amet
            </DialogDescription>
            <DialogDescription className="font-anderson text-[20px] text-black">
              Dummy sub description
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Dialog 2 */}
      <Dialog>
        <DialogTrigger className="rounded-lg border border-black px-4 py-2">
          Open 2
        </DialogTrigger>
        <DialogContent
          backgroundimage="/modalBackgroundType1.png"
          className={`flex h-[320px] items-center justify-center rounded-[15px] border border-ted-black border-opacity-25`}
        >
          <DialogHeader>
            <DialogTitle className="font-anderson text-[48px] text-ted-red">
              Modal Title
            </DialogTitle>
            <DialogDescription className="font-anderson text-[24px] text-black">
              Lorem ipsum dolot sit amet
            </DialogDescription>
            <DialogDescription className="font-anderson text-[20px] text-black">
              Dummy sub description
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Dialog 3 */}
      <Dialog>
        <DialogTrigger className="rounded-lg border border-black px-4 py-2">
          Open 3
        </DialogTrigger>
        <DialogContent
          backgroundimage="/modalBackgroundType2.png"
          className={`flex h-[320px] items-center justify-center rounded-[15px] border border-ted-black border-opacity-25`}
        >
          <DialogHeader>
            <DialogTitle className="font-anderson text-[48px] text-ted-red">
              Modal Title
            </DialogTitle>
            <DialogDescription className="font-anderson text-[24px] text-white">
              Lorem ipsum dolot sit amet
            </DialogDescription>
            <DialogDescription className="font-anderson text-[20px] text-white">
              Dummy sub description
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Dialog 4 */}
      <Dialog>
        <DialogTrigger className="rounded-lg border border-black px-4 py-2">
          Open 4
        </DialogTrigger>
        <DialogContent
          backgroundimage="/modalBackgroundType3.png"
          className={`flex h-[320px] items-center justify-center rounded-[15px] border border-ted-black border-opacity-25`}
        >
          <DialogHeader>
            <DialogTitle className="font-anderson text-[48px] text-ted-red">
              Modal Title
            </DialogTitle>
            <DialogDescription className="font-anderson text-[24px] text-white">
              Lorem ipsum dolot sit amet
            </DialogDescription>
            <DialogDescription className="font-anderson text-[20px] text-white">
              Dummy sub description
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Dialog 5 */}
      <Dialog>
        <DialogTrigger className="rounded-lg border border-black px-4 py-2">
          Open 5
        </DialogTrigger>
        <DialogContent
          backgroundimage="/modalBackgroundType4.png"
          className={`flex h-[320px] items-center justify-center rounded-[15px] border border-ted-black border-opacity-25`}
        >
          <DialogHeader>
            <DialogTitle className="font-anderson text-[48px] text-ted-red">
              Modal Title
            </DialogTitle>
            <DialogDescription className="font-anderson text-[24px] text-white">
              Lorem ipsum dolot sit amet
            </DialogDescription>
            <DialogDescription className="font-anderson text-[20px] text-white">
              Dummy sub description
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default page;
