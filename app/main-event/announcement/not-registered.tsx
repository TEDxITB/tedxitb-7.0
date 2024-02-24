import Image from "next/image";

function NotRegistered() {
  return (
    <main className="flex flex-col items-center gap-20 px-5 py-16 text-ted-white sm:p-16 lg:gap-40 lg:p-24">
      <section className="relative flex w-full justify-center font-anderson">
        <Image
          src="/main-event/impact-originator.png"
          alt="Impact Originator"
          fill
          className="object-cover"
          priority
        />

        <div className="z-20 flex w-full max-w-7xl flex-col items-center gap-8 rounded-lg bg-[#1F1F1F] bg-opacity-40 shadow-2xl shadow-[##1F1F1F] lg:gap-12">
          <div className="relative flex flex-col gap-8 px-6 py-12 md:max-w-none lg:p-24">
            <p className="text-3xl lg:text-5xl">Dear Originators,</p>
            <p className="leading-7 tracking-wide lg:text-xl">
              We appreciate your interest in participating in TEDxITB 7.0.
              Unfortunately, we regret to inform you that the registration
              period for this year has come to a close and and regrettably, we
              did not receive your registration. We understand that
              circumstances vary, and sometimes it&apos;s challenging to meet
              deadlines. However, we want to express our gratitude for
              considering TEDxITB, and we sincerely hope that you will be able
              to join us in the future. As we wrap up preparations for this
              year&apos;s event, we encourage you to mark your calendar and
              anticipate the next edition of TEDxITB. We are continually working
              to improve and enhance the experience, and we believe that the
              upcoming event will be even more exciting and rewarding.
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

export default NotRegistered;
