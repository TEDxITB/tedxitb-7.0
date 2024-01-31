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
import { StudentSpeakerCandidate } from "@/types/cms";
import { Instagram, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface VoteOptionProps {
  candidate: StudentSpeakerCandidate;
}

const VoteOption = ({ candidate, ...props }: VoteOptionProps) => {
  const router = useRouter();

  async function handleSubmit() {
    const idToastLoading = toast.loading("Submitting...", {
      description: "Please wait while we submit your vote",
      duration: Infinity,
    });

    const formData = new FormData();
    formData.append("candidateId", candidate.id);

    const res = await fetch("/api/vote", {
      method: "POST",
      body: formData,
    });

    toast.dismiss(idToastLoading);

    if (res.ok) {
      toast.success("Success!", {
        description: "Your vote has been submitted",
      });
      router.replace("/main-event/voting", { scroll: true });
      router.refresh();
    } else {
      toast.error("Error!", {
        description: "An error has occured while submitting your confirmation",
      });
    }
  }

  return (
    <AlertDialog>
      <article
        {...props}
        className="flex w-[320px] flex-col justify-between gap-6 rounded-md bg-white bg-opacity-[8%] p-6 shadow-[2px_4px_25px_0px_rgba(255,255,255,0.1)]"
      >
        {/* Image & Texts */}
        <div className="flex flex-col gap-6">
          {/* Photo */}
          <Image
            width={candidate.image.width}
            height={candidate.image.height}
            alt={candidate.image.alt}
            src={candidate.image.url}
            className="aspect-square rounded-md object-cover object-center"
          />

          {/* Texts */}
          <div className="flex flex-col gap-3">
            {/* Name */}
            <p className="text-center font-anderson text-lg font-semibold tracking-wide text-white lg:text-xl">
              {candidate.name}
            </p>

            <div className="flex flex-row justify-center gap-6">
              {/* Instagram */}
              <Link href={candidate.instagramUrl} target="_blank">
                <Button
                  variant="link"
                  className="h-auto p-0 text-base text-slate-300 hover:text-primary lg:text-lg"
                >
                  <Instagram className="mr-2" />
                  Instagram
                </Button>
              </Link>

              {/* Audition Video */}
              <Link href={candidate.videoUrl} target="_blank">
                <Button
                  variant="link"
                  className="h-auto p-0 text-base text-slate-300 hover:text-primary lg:text-lg"
                >
                  <Video className="mr-2" />
                  Audition
                </Button>
              </Link>
            </div>

            <p className="text-center font-anderson text-base text-white lg:text-lg">
              {candidate.topic}
            </p>
          </div>
        </div>

        {/* Trigger Vote Button */}
        <AlertDialogTrigger asChild>
          <Button className="w-full">VOTE</Button>
        </AlertDialogTrigger>
      </article>

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
          <AlertDialogAction onClick={handleSubmit} className="sm:w-[100px]">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default VoteOption;
