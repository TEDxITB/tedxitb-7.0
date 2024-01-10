import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";

function TopicModal(props: {
  title: string;
  speaker: string;
  image: { url: string; alt: string; width: number; height: number };
  description: string;
}) {
  return (
    <Dialog>
      <DialogTrigger className="self-end">
        <Button className="md:px-8">See Details</Button>
      </DialogTrigger>
      <DialogContent className="h-fit bg-[#1C1C1C] font-anderson text-white">
        <div className="space-y-6">
          <Image
            src={props.image.url}
            alt={props.image.alt}
            width={props.image.width}
            height={props.image.height}
            className="mt-6 rounded-lg"
          />
          <h2 className="text-2xl font-bold">{props.title}</h2>
          <p className="font-light">{props.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default TopicModal;
