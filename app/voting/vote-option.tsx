"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ImageCMS } from "@/types/cms";
import Image from "next/image";

interface Candidate {
  id: string;
  name: string;
  image: ImageCMS;
  ig: string;
}

interface VoteOptionProps {
  candidate: Candidate;
}

const VoteOption = ({ candidate, ...props }: VoteOptionProps) => {
  return (
    <AlertDialog>
      {/* Trigger */}
      <AlertDialogTrigger asChild>
        <button
          {...props}
          className="flex w-[320px] flex-col items-center gap-4 rounded-md lg:gap-6"
        >
          {/* Photo */}
          <div className="flex aspect-square w-full items-center justify-center rounded-md bg-white bg-opacity-5 shadow-[2px_4px_25px_0px_rgba(255,255,255,0.1)]">
            <Image
              width={candidate.image.width}
              height={candidate.image.height}
              alt={candidate.image.alt}
              src={candidate.image.url}
              className="w-3/5 object-contain object-center"
            />
          </div>

          <div>
            {/* Name */}
            <p className="text-center font-anderson text-lg text-white lg:text-xl">
              {candidate.name}
            </p>

            {/* Instagram Username */}
            <p className="text-center font-anderson text-base text-white lg:text-lg">
              {candidate.ig}
            </p>
          </div>
        </button>
      </AlertDialogTrigger>

      {/* Content */}
      <AlertDialogContent className="border-none bg-[#1C1C1C] font-anderson text-ted-white">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure to vote {candidate.name}?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-ted-white">
            You can only vote once and you can&apos;t change your vote once you
            submit.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="sm:w-[100px]">Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => {}} className="sm:w-[100px]">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default VoteOption;
