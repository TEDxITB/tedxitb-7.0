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
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function ConfirmationButtons() {
  const router = useRouter();

  async function handleSubmit(val: string) {
    const idToastLoading = toast.loading("Submitting...", {
      description: "Please wait while we submit your confirmation",
      duration: Infinity,
    });

    const formData = new FormData();
    formData.append("attendance", String(val === "attendance"));

    const res = await fetch("/api/confirmation", {
      method: "PUT",
      body: formData,
    });

    toast.dismiss(idToastLoading);

    if (res.ok) {
      toast.success("Success!", {
        description: "Your confirmation has been submitted",
      });
      router.refresh();
    } else {
      toast.error("Error!", {
        description: "An error has occured while submitting your confirmation",
      });
    }
  }

  return (
    <div className="grid grid-rows-2 sm:grid-cols-2 sm:gap-8 sm:self-start">
      <AlertDialog>
        <AlertDialogTrigger className="mt-4 flex self-start">
          <Button
            variant={"secondary"}
            size={"lg"}
            className="grow lg:px-10 lg:py-6 lg:text-lg"
          >
            Confirm Absence
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="border-none bg-[#1C1C1C] font-anderson text-ted-white">
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure to confirm ABSENCE?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-ted-white">
              If you find yourself able to attend the event after confirming
              your absence, please contact us.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-ted-red sm:w-[100px]">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleSubmit("absence")}
              className="sm:w-[100px]"
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger className="mt-4 flex self-start">
          <Button size={"lg"} className="grow lg:px-10 lg:py-6 lg:text-lg">
            Confirm Attendance
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="border-none bg-[#1C1C1C] font-anderson text-ted-white">
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure to confirm ATTENDANCE?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-ted-white">
              If you find yourself unable to attend the event after confirming
              your attendance, please contact us.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-ted-red sm:w-[100px]">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleSubmit("attendance")}
              className="sm:w-[100px]"
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default ConfirmationButtons;
