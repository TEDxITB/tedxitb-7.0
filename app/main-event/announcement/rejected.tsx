import Image from "next/image";

function Rejected(props: { name?: string }) {
  return (
    <div className="text-ted-white font-anderson">
      <div className="relative h-[700px] w-full">
        <Image
          src="/impact-originator.png"
          alt="Impact Originator"
          fill
          className="object-cover"
        />

        <div className="absolute left-1/2 top-1/2 z-20 flex h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 rounded-lg bg-[#1F1F1F] bg-opacity-40 shadow-2xl shadow-[##1F1F1F] md:h-[90%] md:w-[90%] lg:h-4/5 lg:w-4/5 lg:gap-12">
          <div className="relative my-auto flex flex-col gap-8 md:max-w-none px-8 lg:px-16">
            <p className="text-3xl lg:text-5xl">Dear {props.name},</p>
            <p className="lg:text-xl tracking-wide leading-7">
              Thank you for your participation in the participant selection for
              TEDxITB 7.0. We want to express our appreciation for your
              enthusiasm and effort. While you weren&apos;t selected to move
              forward to the next phase at this time, we encourage you to
              continue pursuing your passion. We hope you won&apos;t be
              discouraged by this outcome. Keep honing your skills, as
              opportunities may arise in the future.
            </p>
            <div className="text-sm lg:text-xl tracking-wide leading-7">
              <p>Sincerely,</p>
              <p>TEDxITB 7.0 Organizer</p>
            </div>
          </div>
        </div>

        <Image
          src="/tedxitb-7-logo-white-full.png"
          width={175}
          height={190}
          alt="TEDxITB 7.0 Logo"
          className="absolute top-3/4 left-1/2 w-[100px] opacity-20 -translate-x-1/2"
        />
      </div>
    </div>
  );
}

export default Rejected;
