import Image from "next/image";

function Rejected(props: { name?: string }) {
  return (
    <main className="flex flex-col items-center gap-20 px-5 py-16 text-ted-white sm:p-16 lg:gap-40 lg:p-24">
      <section className="relative flex w-full justify-center font-anderson">
        <Image
          src="/main-event/impact-originator.png"
          alt="Impact Originator"
          fill
          className="object-cover"
        />

        <div className="z-20 flex w-full max-w-7xl flex-col items-center gap-8 rounded-lg bg-[#1F1F1F] bg-opacity-40 shadow-2xl shadow-[##1F1F1F] lg:gap-12">
          <div className="relative flex flex-col gap-8 px-6 py-12 md:max-w-none lg:p-24">
            <p className="text-3xl lg:text-5xl">Dear {props.name},</p>
            <p className="leading-7 tracking-wide lg:text-xl">
              Thank you for your participation in the participant selection for
              TEDxITB 7.0. We want to express our appreciation for your
              enthusiasm and effort. While you weren&apos;t selected to move
              forward to the next phase at this time, we encourage you to
              continue pursuing your passion. We hope you won&apos;t be
              discouraged by this outcome. Keep honing your skills, as
              opportunities may arise in the future.
            </p>
            <div className="text-sm leading-7 tracking-wide lg:text-xl">
              <p>Sincerely,</p>
              <p>TEDxITB 7.0 Organizer</p>
            </div>
          </div>
        </div>

        <Image
          src="/logo/x-logo-white-full-uncropped.png"
          width={175}
          height={190}
          alt="TEDxITB 7.0 Logo"
          className="absolute left-1/2 top-3/4 w-[100px] -translate-x-1/2 opacity-20"
        />
      </section>
    </main>
  );
}

export default Rejected;
