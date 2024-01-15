import Image from "next/image";

function NotRegistered() {
  return (
    <div className="text-ted-white font-anderson">
      <div className="relative h-[750px] w-full">
        <Image
          src="/impact-originator.png"
          alt="Impact Originator"
          fill
          className="object-cover"
        />

        <div className="absolute left-1/2 top-1/2 z-20 flex h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 rounded-lg bg-[#1F1F1F] bg-opacity-40 shadow-2xl shadow-[##1F1F1F] md:h-[90%] md:w-[90%] lg:h-4/5 lg:w-4/5 lg:gap-12">
          <div className="relative my-auto flex flex-col gap-8 md:max-w-none px-8 lg:px-16">
            <p className="text-3xl lg:text-5xl">Dear Originators,</p>
            <p className="lg:text-xl tracking-wide leading-7">
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

export default NotRegistered;
