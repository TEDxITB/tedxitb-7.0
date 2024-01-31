import VoteOption from "./vote-option";
import { getCMSData, studentSpeakerQuery, studentSpeakerTags } from "@/lib/cms";
import { StudentSpeakerQueryResult } from "@/types/cms";
import Image from "next/image";

const VotingStatePage = async () => {
  const { allStudentSpeakerCandidates } =
    await getCMSData<StudentSpeakerQueryResult>(
      studentSpeakerQuery,
      studentSpeakerTags
    );

  return (
    <main className="flex h-fit w-screen flex-col items-center justify-center bg-[#1E1E1E]">
      <section
        id="voting"
        className="relative h-fit w-full overflow-hidden px-6 py-16 sm:p-16 lg:p-24"
      >
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

        <div className="z-10 flex w-full items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center gap-12 lg:gap-16">
            {/* Title */}
            <h3
              data-aos="zoom-in-up"
              className="text-center font-anderson text-3xl font-bold tracking-wider text-white drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-5xl"
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
