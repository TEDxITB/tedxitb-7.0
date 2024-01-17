import Image from "next/image";

const results = {
  creative: {
    title: "The Creative",
    desc: "The Creative personality type is likely characterized by a strong inclination towards imagination, originality, and artistic expression. Creatives often enjoy exploring new ideas, thinking outside the box, and engaging in various forms of artistic and creative endeavors.",
    bg: "/quiz/creative.jpg",
    video: "https://www.youtube.com/embed/D2FSRiJdqho?si=efxBbiAl_tlqOr4b",
  },
  social: {
    title: "The Social",
    desc: "The Social personality type may be associated with individuals who are sociable, outgoing, and enjoy social interactions. They might be skilled at building and maintaining relationships, and they may thrive in group settings and social activities.",
    bg: "/quiz/social.jpg",
    video: "https://www.youtube.com/embed/Kr7lP1z8UCw?si=bUpbBsaO_V2CW4Ec",
  },
  scientist: {
    title: "The Scientist",
    desc: "The Scientist personality type could be described as analytical, logical, and detail-oriented. People with this personality might have a strong interest in understanding and explaining the world through systematic observation and analysis.",
    bg: "/quiz/scientist.jpg",
    video: "https://www.youtube.com/embed/i-UAhK-vfQw?si=I8mbu68wzILel-Yi",
  },
  director: {
    title: "The Director",
    desc: "This personality type might be characterized as someone who is assertive, goal-oriented, and takes charge in various situations. Directors are often seen as leaders and decision-makers, and they tend to be driven and focused on achieving their objectives.",
    bg: "/quiz/director.jpg",
    video: "https://www.youtube.com/embed/2YM7rc29uW8?si=Xc9FFngg0vuAmFMI",
  },
};

const ResultBlock = ({
  resType,
}: {
  resType: "creative" | "scientist" | "director" | "social";
}) => {
  const res = results[resType];

  const Title = () => {
    if (resType === "creative") {
      return (
        <h1 className="text-center font-garamond text-4xl font-medium tracking-wider text-white drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl">
          <span className="mr-2 font-graziela text-6xl lg:text-8xl">T</span>
          <span>HE </span>
          <span className="mr-2 font-graziela text-6xl lg:text-8xl">C</span>
          <span>REATIVE</span>
        </h1>
      );
    } else if (resType === "scientist") {
      return (
        <h1 className="text-center font-garamond text-4xl font-medium tracking-wider text-white drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl">
          <span className="mr-2 font-graziela text-6xl lg:text-8xl">T</span>
          <span>HE </span>
          <span className="mr-2 font-graziela text-6xl lg:text-8xl">S</span>
          <span>CIENTIST</span>
        </h1>
      );
    } else if (resType === "director") {
      return (
        <h1 className="text-center font-garamond text-4xl font-medium tracking-wider text-white drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl">
          <span className="mr-2 font-graziela text-6xl lg:text-8xl">T</span>
          <span>HE </span>
          <span className="mr-2 font-graziela text-6xl lg:text-8xl">D</span>
          <span>IRECTOR</span>
        </h1>
      );
    } else if (resType === "social") {
      return (
        <h1 className="text-center font-garamond text-4xl font-medium tracking-wider text-white drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl">
          <span className="mr-2 font-graziela text-6xl lg:text-8xl">T</span>
          <span>HE </span>
          <span className="mr-2 font-graziela text-6xl lg:text-8xl">S</span>
          <span>OCIAL</span>
        </h1>
      );
    }
  };
  return (
    <div className="relative flex h-fit w-screen items-center justify-center px-4 pb-20 pt-36">
      <Image
        src={res.bg}
        alt="Result Background Image"
        fill
        className="absolute z-[-10] object-cover object-center"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 z-[10] md:hidden">
        <Image
          src="/quiz/bg2.jpg"
          alt="Background Image"
          fill
          className="absolute object-cover object-center"
        />
      </div>
      <div className="z-[20] flex h-fit w-full flex-col items-center justify-center gap-3 rounded-sm bg-none p-7 text-white md:w-[65%] md:bg-black/70">
        <div className="flex w-full flex-col items-center justify-center gap-2 text-center">
          <p className="font-anderson text-[12px] md:text-[22px]">
            your result:{" "}
          </p>
          <Title />
          <p className="font-anderson text-[12px] md:text-[16px]">{res.desc}</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-3 text-center">
          <div className="relative h-0 w-full pb-[56.25%] lg:h-[315px] lg:w-[560px] lg:pb-0">
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src={res.video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            ></iframe>
          </div>
          <p className="font-anderson text-[10px] md:text-[16px]">
            Find out more by watching this video!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultBlock;
