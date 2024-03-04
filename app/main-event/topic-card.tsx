import TopicModal from "./topic-modal";
import type { StructuredText as StructuredTextType } from "datocms-structured-text-utils";
import Image from "next/image";

interface TopicCardProps {
  title: string;
  speaker: string;
  image: { url: string; alt: string; width: number; height: number };
  description: StructuredTextType;
}

function TopicCard({
  title,
  speaker,
  image,
  description,
  ...props
}: TopicCardProps) {
  return (
    <article
      {...props}
      className="relative h-full w-full overflow-visible sm:h-[175px] sm:min-h-full md:w-[600px] xl:w-[1000px]"
    >
      <div className="relative -left-1 -top-1 bottom-1 right-1 z-20 flex h-full w-full rounded-lg bg-gradient-to-r from-[#7D0A0A] to-[#EAD196] p-[1px] sm:absolute">
        <div className="flex h-full w-full flex-col items-center gap-4 rounded-lg bg-[#1C1C1C] px-2 py-3 sm:flex-row sm:px-3 sm:py-4 lg:gap-6">
          <div className="relative aspect-video max-h-[150px] w-full sm:h-full sm:w-[150px]">
            <Image
              src={image.url}
              alt="hero"
              fill
              className="absolute inset-0 h-full w-full rounded-lg object-cover"
            />
          </div>
          <div className="flex w-full grow flex-col gap-2 font-anderson md:hidden">
            <p className="text-lg font-bold xl:text-3xl">{title}</p>
            <p className="grow text-sm font-normal text-ted-red xl:text-lg">
              {speaker}
            </p>
            <TopicModal
              title={title}
              speaker={speaker}
              image={image}
              description={description}
            />
          </div>
          <div className="hidden h-full w-full justify-between font-anderson md:flex">
            <div className="flex flex-col gap-6 ">
              <p className="text-lg font-bold xl:text-3xl">{title}</p>
              <p className="text-sm font-normal text-ted-red xl:text-lg">
                {speaker}
              </p>
            </div>
            <TopicModal
              title={title}
              speaker={speaker}
              image={image}
              description={description}
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-1 -right-1 left-1 top-1 z-10 h-full w-full rounded-lg bg-gradient-to-r from-[#7D0A0A] to-[#EAD196]"></div>
    </article>
  );
}

export default TopicCard;
