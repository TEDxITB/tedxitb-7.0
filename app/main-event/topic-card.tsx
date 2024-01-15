import TopicModal from "./topic-modal";
import type { StructuredText as StructuredTextType } from "datocms-structured-text-utils";
import Image from "next/image";

function TopicCard(props: {
  title: string;
  speaker: string;
  image: { url: string; alt: string; width: number; height: number };
  description: StructuredTextType;
}) {
  return (
    <div className="relative h-[175px] w-[325px] overflow-visible md:w-[600px] xl:w-[1000px]">
      <div className="absolute -left-1 -top-1 bottom-1 right-1 z-20 rounded-lg bg-gradient-to-r from-[#7D0A0A] to-[#EAD196] p-[1px]">
        <div className="flex h-full w-full items-center gap-4 rounded-lg bg-[#1C1C1C] px-2 py-3 md:px-3 md:py-4">
          <div className="relative h-full w-[150px]">
            <Image
              src={props.image.url}
              alt="hero"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex h-full w-full flex-col justify-between font-anderson md:hidden">
            <p className="font-bold xl:text-3xl">{props.title}</p>
            <p className="text-xs font-normal text-ted-red xl:text-base">
              {props.speaker}
            </p>
            <TopicModal
              title={props.title}
              speaker={props.speaker}
              image={props.image}
              description={props.description}
            />
          </div>
          <div className="hidden h-full w-full justify-between font-anderson md:flex">
            <div className="flex flex-col gap-6 ">
              <p className="font-bold xl:text-3xl">{props.title}</p>
              <p className="text-xs font-normal text-ted-red xl:text-base">
                {props.speaker}
              </p>
            </div>
            <TopicModal
              title={props.title}
              speaker={props.speaker}
              image={props.image}
              description={props.description}
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-1 -right-1 left-1 top-1 z-10 h-full w-full rounded-lg bg-gradient-to-r from-[#7D0A0A] to-[#EAD196]"></div>
    </div>
  );
}

export default TopicCard;
