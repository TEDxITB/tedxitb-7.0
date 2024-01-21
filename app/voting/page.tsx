import VoteOption from "./vote-option";
import SmoothScrollButton from "@/components/ui/smooth-scroll-button";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { ImageCMS } from "@/types/cms";
import { ArrowDownCircle } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Voting | TEDxITB 7.0",
  openGraph: {
    ...openGraphTemplate,
    title: "Voting | TEDxITB 7.0",
  },
  twitter: {
    ...twitterTemplate,
    title: "Voting | TEDxITB 7.0",
  },
};

interface Candidate {
  id: string;
  name: string;
  image: ImageCMS;
  ig: string;
}

const candidates: Candidate[] = [
  {
    id: "1",
    name: "This Full Name 1",
    image: {
      id: "1",
      url: "/main-event/example-1.jpg",
      width: 1200,
      height: 765,
      alt: "This Full Name 1",
    },
    ig: "@username1",
  },
  {
    id: "2",
    name: "This Full Name 2",
    image: {
      id: "2",
      url: "/main-event/example-2.jpg",
      width: 1200,
      height: 765,
      alt: "This Full Name 2",
    },
    ig: "@username2",
  },
  {
    id: "3",
    name: "This Full Name 3",
    image: {
      id: "3",
      url: "/main-event/example-3.jpg",
      width: 1200,
      height: 765,
      alt: "This Full Name 3",
    },
    ig: "@username3",
  },
  {
    id: "4",
    name: "This Full Name 4",
    image: {
      id: "4",
      url: "/main-event/example-4.jpg",
      width: 1200,
      height: 765,
      alt: "This Full Name 4",
    },
    ig: "@username4",
  },
  {
    id: "5",
    name: "This Full Name 5",
    image: {
      id: "5",
      url: "/main-event/example-1.jpg",
      width: 1200,
      height: 765,
      alt: "This Full Name 5",
    },
    ig: "@username5",
  },
];

const HomePage = () => {
  return (
    <main className="flex h-fit w-screen flex-col items-center justify-center bg-[#1E1E1E]">
      {/* Hero */}
      <section className="relative z-10 flex min-h-[calc(100vh-6rem)] w-screen items-center justify-center">
        {/* Bg Hero */}
        <Image
          alt="bg-hero"
          src="/voting/hero.jpg"
          fill
          sizes="100vw"
          className="absolute object-cover object-center opacity-50"
        />

        <div className="flex w-[70%] flex-col items-center justify-center gap-6 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-center gap-2 text-ted-white lg:gap-4 ">
            <h1
              data-aos="zoom-in-up"
              className="text-center font-anderson text-5xl font-bold tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-8xl"
            >
              VOTING
            </h1>
            <h2
              data-aos="zoom-in-up"
              data-aos-delay="150"
              className="text-center font-garamond text-3xl font-medium tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl"
            >
              <span className="mr-2 font-graziela text-5xl lg:text-8xl">S</span>
              <span>TUDENT </span>
              <span>SPEAKER </span>
              <span className="mr-2 font-graziela text-5xl lg:text-8xl">A</span>
              <span>UDITION </span>
            </h2>
          </div>
          <SmoothScrollButton
            targetId="voting"
            data-aos="zoom-in-up"
            data-aos-delay="250"
          >
            Vote Now <ArrowDownCircle className="ml-2 h-5 w-5" />
          </SmoothScrollButton>
        </div>
      </section>

      {/* Logo Meaning */}
      <section id="voting" className="relative h-fit w-full overflow-hidden">
        {/* Top Left Gradient Decoration */}
        <Image
          src="/decoration/blur1.png"
          alt="Blur Decoration"
          width={1440}
          height={1097}
          className="absolute -left-24 -top-8 w-72 lg:-left-48 lg:-top-48 lg:w-[700px]"
        />

        {/* Bottom Right Gradient Decoration */}
        <Image
          src="/decoration/blur1.png"
          alt="Blur Decoration"
          width={1440}
          height={1097}
          className="absolute -bottom-8 -right-24 w-72 lg:-bottom-52 lg:-right-40 lg:w-[700px]"
        />

        {/* Left Logo */}
        <div className="absolute left-[-65px] top-[650px] flex flex-row items-center lg:left-[-248px] lg:top-[600px]">
          {/* Left Rhombus Logo */}
          <Image
            src="/decoration/rhombus-gradient.svg"
            width={100}
            height={100}
            alt="Rhombus Gradient Decoration"
            className="w-[130px] lg:w-[495px]"
          />

          {/* Left Half Logo */}
          <Image
            src="/logo/x-logo-red-left-cropped.png"
            width={510}
            height={427}
            alt="TEDxITB 7.0 Half Logo"
            className="h-[95px] w-auto opacity-25 lg:h-[400px]"
          />
        </div>

        <div className="z-10 flex w-full items-center justify-center px-[35px] py-[75px] sm:px-[50px] md:py-[200px]">
          <div className="flex w-full flex-col items-center justify-center gap-12 lg:gap-16">
            {/* Title */}
            <h3
              data-aos="zoom-in-up"
              className="text-center font-anderson text-3xl font-bold text-white drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-5xl"
            >
              STUDENT SPEAKER CANDIDATES
            </h3>

            {/* Boxes */}
            <div className="flex w-full max-w-6xl flex-row flex-wrap items-center justify-center gap-16">
              {candidates.map((candidate) => {
                return (
                  <VoteOption
                    key={candidate.id}
                    data-aos="zoom-in-up"
                    candidate={candidate}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
