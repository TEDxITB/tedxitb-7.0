import VoteOption from "./vote-option";
import SmoothScrollButton from "@/components/ui/smooth-scroll-button";
import { getCMSData, studentSpeakerQuery, studentSpeakerTags } from "@/lib/cms";
import { StudentSpeakerQueryResult } from "@/types/cms";
import { ArrowDownCircle } from "lucide-react";
import Image from "next/image";

const VotingStatePage = async () => {
  const { allStudentSpeakerCandidates } =
    await getCMSData<StudentSpeakerQueryResult>(
      studentSpeakerQuery,
      studentSpeakerTags
    );

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
              {allStudentSpeakerCandidates.map((candidate) => {
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

export default VotingStatePage;
