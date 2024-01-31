import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import type { StructuredText as StructuredTextType } from "datocms-structured-text-utils";
import Image from "next/image";
import { StructuredText } from "react-datocms/structured-text";

function TopicModal(props: {
  title: string;
  speaker: string;
  image: { url: string; alt: string; width: number; height: number };
  description: StructuredTextType;
}) {
  return (
    <Dialog>
      <DialogTrigger className="sm:self-end">
        <Button className="w-full md:px-8">See Details</Button>
      </DialogTrigger>
      <DialogContent className="h-fit bg-[#1C1C1C] font-anderson text-white">
        <article className="space-y-6">
          <Image
            src={props.image.url}
            alt={props.image.alt}
            width={props.image.width}
            height={props.image.height}
            className="mt-6 w-full rounded-lg object-cover object-center sm:aspect-[5/3]"
          />
          <h2 className="text-2xl font-bold">{props.title}</h2>
          <div className="font-light">
            <StructuredText data={props.description} />
          </div>
        </article>
      </DialogContent>
    </Dialog>
  );
}

export default TopicModal;
