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
import { Button } from "@/components/ui/button";
import CustomLink from "@/components/ui/links";
import { ImageCMS, StudentSpeakerCandidate } from "@/types/cms";
import { Instagram, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface VoteOptionProps {
  candidate: StudentSpeakerCandidate;
}

const VoteOption = ({ candidate, ...props }: VoteOptionProps) => {
  // https://www.instagram.com/dewo.tm/
  const igUsername = candidate.instagramUrl
    .replace("https://www.instagram.com/", "")
    .replace("/", "");

  return (
    <AlertDialog>
      {/* Trigger */}
      <AlertDialogTrigger asChild>
        <button
          {...props}
          className="flex w-[320px] flex-col items-center gap-4 rounded-md lg:gap-6"
        >
          {/* Photo */}
          <div className="flex w-full flex-col items-center justify-center gap-5 rounded-md bg-white bg-opacity-[8%] p-6 shadow-[2px_4px_25px_0px_rgba(255,255,255,0.1)]">
            <Image
              width={candidate.image.width}
              height={candidate.image.height}
              alt={candidate.image.alt}
              src={candidate.image.url}
              className="aspect-square rounded-md object-cover object-center"
            />
            <div className="flex w-full flex-col gap-3">
              {/* Name */}
              <p className="text-center font-anderson text-lg  tracking-wide text-white lg:text-xl">
                {candidate.name}
              </p>

              <div className="flex flex-row justify-center gap-6">
                {/* Instagram */}
                <Link
                  href={candidate.instagramUrl}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button
                    variant="link"
                    className="h-auto p-0 text-base text-slate-300 hover:text-primary lg:text-lg"
                  >
                    <Instagram className="mr-2" />
                    Instagram
                  </Button>
                </Link>

                {/* Audition Video */}
                <Link
                  href={candidate.videoUrl}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button
                    variant="link"
                    className="h-auto p-0 text-base text-slate-300 hover:text-primary lg:text-lg"
                  >
                    <Video className="mr-2" />
                    Audition
                  </Button>
                </Link>
              </div>

              {/* Vote Button */}
              <Button className="w-full">Vote</Button>
            </div>
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
