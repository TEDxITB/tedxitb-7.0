import { Button } from "@/components/ui/button";
import Countdown from "@/components/ui/countdown";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import { redirect } from "next/navigation";

async function page() {
  const session = await getServerSession(authOptions);

  const dateNow = new Date().getTime();
  const announcementDate = new Date("February 19, 2024 17:00:00").getTime();
  // const announcementDate = new Date("January 1, 2024 17:00:00").getTime();

  // Status lolos atau ga
  const status = false;

  // Kalo belum login, redirect ke halaman login
  if (!session) {
    redirect("/auth/sign-in");
  }

  // Sebelum tanggal pengumuman, tampilkan countdown
  if (dateNow < announcementDate) {
    return <AnnouncementCountdown announcementDate={announcementDate} />;
  }

  // Kalo sessionnya gaada nama, tampilkan halaman belum terdaftar
  if (!session.name) {
    return <NotRegistered />;
  }

  // Kalo status lolos, tampilkan halaman lolos
  if (status) {
    return <Accepted />;
  }

  return <Rejected />;
}

export default page;

function AnnouncementCountdown(props: { announcementDate: number }) {
  return (
    <div className="font-anderson text-ted-white">
      <div className="relative h-[calc(100vh-104px)] w-full">
        <Image
          src="/impact-originator.png"
          alt="Impact Originator"
          fill
          className="object-cover"
        />

        <div className="absolute left-1/2 top-1/2 z-20 flex h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 rounded-lg bg-[#1F1F1F] bg-opacity-40 text-center shadow-2xl shadow-[##1F1F1F] md:h-[90%] md:w-[90%] lg:h-4/5 lg:w-4/5 lg:gap-12">
          <div className="relative top-[20%] md:top-1/4 flex max-w-[314px] flex-col items-center gap-8 md:max-w-none">
            <p className="text-2xl lg:text-4xl">
              Wait for the Participant Announcement at
            </p>
            <p className="text-4xl font-bold italic lg:text-6xl">
              2 February 2024
            </p>
            <Countdown date={new Date(props.announcementDate)} />
          </div>
        </div>

        <Image
          src="/tedxitb-7-logo-white-full.png"
          width={175}
          height={190}
          alt="Background Star"
          className="absolute top-3/4 left-1/2 w-[100px] opacity-20 -translate-x-1/2"
        />

        <Image
          src="/star.png"
          width={262}
          height={255}
          alt="Background Star"
          className="absolute opacity-5 top-[420px] left-[100px] w-[200px] lg:w-[262px] lg:h-[255px] lg:left-[250px] lg:top-[330px]"
        />

        <Image
          src="/white-springy.png"
          width={256}
          height={256}
          alt="Background Star"
          className="absolute hidden lg:block opacity-5 top-[570px] left-[60px] w-[200px] lg:w-[256px] lg:h[256px] lg:left-[175px] lg:top-[425px]"
        />

        <Image
          src="/star.png"
          width={262}
          height={255}
          alt="Background Star"
          className="absolute opacity-5 bottom-[420px] right-[100px] w-[200px] lg:right-[250px] lg:w-[262px] lg:h-[255px] lg:bottom-[330px]"
        />

        <Image
          src="/white-springy.png"
          width={256}
          height={256}
          alt="Background Star"
          className="absolute hidden lg:block opacity-5 lg:right-[175px] lg:w-[256px] lg:h[256px] lg:bottom-[400px]"
        />
      </div>
    </div>
  );
}

function NotRegistered() {
  return (
    <div className="text-ted-white font-anderson">
      <div className="relative h-[calc(100vh-104px)] w-full">
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
              period for this year has come to a close. We understand that
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
          alt="Background Star"
          className="absolute top-3/4 left-1/2 w-[100px] opacity-20 -translate-x-1/2"
        />

        <Image
          src="/star.png"
          width={262}
          height={255}
          alt="Background Star"
          className="absolute opacity-5 top-[420px] left-[100px] w-[200px] lg:w-[262px] lg:h-[255px] lg:left-[250px] lg:top-[330px]"
        />

        <Image
          src="/white-springy.png"
          width={256}
          height={256}
          alt="Background Star"
          className="absolute hidden lg:block opacity-5 top-[570px] left-[60px] w-[200px] lg:w-[256px] lg:h[256px] lg:left-[175px] lg:top-[425px]"
        />

        <Image
          src="/star.png"
          width={262}
          height={255}
          alt="Background Star"
          className="absolute opacity-5 bottom-[420px] right-[100px] w-[200px] lg:right-[250px] lg:w-[262px] lg:h-[255px] lg:bottom-[330px]"
        />

        <Image
          src="/white-springy.png"
          width={256}
          height={256}
          alt="Background Star"
          className="absolute hidden lg:block opacity-5 lg:right-[175px] lg:w-[256px] lg:h[256px] lg:bottom-[400px]"
        />
      </div>
    </div>
  );
}

function Accepted() {
  return (
    <div className="text-ted-white font-anderson">
      <div className="relative h-[calc(100vh-104px)] w-full">
        <Image
          src="/impact-originator.png"
          alt="Impact Originator"
          fill
          className="object-cover"
        />

        <div className="absolute left-1/2 top-1/2 z-20 flex h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 rounded-lg bg-[#1F1F1F] bg-opacity-40 shadow-2xl shadow-[##1F1F1F] md:h-[90%] md:w-[90%] lg:h-4/5 lg:w-4/5 lg:gap-12">
          <div className="relative my-auto flex flex-col gap-8 md:max-w-none px-8 lg:px-16">
            <p className="text-3xl lg:text-5xl">Dear [Name],</p>
            <p className="lg:text-xl tracking-wide leading-7">
              As we anticipate a high level of interest and limited seating
              availability, we kindly request your confirmation to attend the
              event until Saturday, February 24th 2024. Your timely notification
              will allow us to accommodate others who are eager to participate.
              We appreciate your understanding and cooperation that this
              inspiring experience can be shared by as many enthusiastic
              individuals as possible. TEDxITB 7.0 will be held in:
            </p>
            <div className="flex flex-col-reverse gap-8 lg:flex-row lg:gap-0 justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-sm lg:text-xl">
                  Date: Saturday, March 2nd 2024
                </p>
                <p className="text-sm lg:text-xl">
                  Location: The House Convention Hall, Paskal 23
                </p>
                <p className="text-sm lg:text-xl grow">Time: TBA</p>
                <Button className="self-start mt-4  lg:px-20 lg:py-6 lg:text-lg">
                  Confirm Attendance
                </Button>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7985193189184!2d107.59057777499645!3d-6.914676593084865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e78e0372cfc7%3A0x54f02d7a7d90f635!2sThe%20House%20Convention%20Hall!5e0!3m2!1sen!2sid!4v1704370854993!5m2!1sen!2sid"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="hidden sm:block sm:w-full lg:w-[400px] h-[200px] rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        <Image
          src="/tedxitb-7-logo-white-full.png"
          width={175}
          height={190}
          alt="Background Star"
          className="absolute top-3/4 left-1/2 w-[100px] opacity-20 -translate-x-1/2"
        />

        <Image
          src="/star.png"
          width={262}
          height={255}
          alt="Background Star"
          className="absolute opacity-5 top-[420px] left-[100px] w-[200px] lg:w-[262px] lg:h-[255px] lg:left-[250px] lg:top-[330px]"
        />

        <Image
          src="/white-springy.png"
          width={256}
          height={256}
          alt="Background Star"
          className="absolute hidden lg:block opacity-5 top-[570px] left-[60px] w-[200px] lg:w-[256px] lg:h[256px] lg:left-[175px] lg:top-[425px]"
        />

        <Image
          src="/star.png"
          width={262}
          height={255}
          alt="Background Star"
          className="absolute opacity-5 bottom-[420px] right-[100px] w-[200px] lg:right-[250px] lg:w-[262px] lg:h-[255px] lg:bottom-[330px]"
        />

        <Image
          src="/white-springy.png"
          width={256}
          height={256}
          alt="Background Star"
          className="absolute hidden lg:block opacity-5 lg:right-[175px] lg:w-[256px] lg:h[256px] lg:bottom-[400px]"
        />
      </div>
    </div>
  );
}

function Rejected() {
  return (
    <div className="text-ted-white font-anderson">
      <div className="relative h-[calc(100vh-104px)] w-full">
        <Image
          src="/impact-originator.png"
          alt="Impact Originator"
          fill
          className="object-cover"
        />

        <div className="absolute left-1/2 top-1/2 z-20 flex h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 rounded-lg bg-[#1F1F1F] bg-opacity-40 shadow-2xl shadow-[##1F1F1F] md:h-[90%] md:w-[90%] lg:h-4/5 lg:w-4/5 lg:gap-12">
          <div className="relative my-auto flex flex-col gap-8 md:max-w-none px-8 lg:px-16">
            <p className="text-3xl lg:text-5xl">Dear [Name],</p>
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
          alt="Background Star"
          className="absolute top-3/4 left-1/2 w-[100px] opacity-20 -translate-x-1/2"
        />

        <Image
          src="/star.png"
          width={262}
          height={255}
          alt="Background Star"
          className="absolute opacity-5 top-[420px] left-[100px] w-[200px] lg:w-[262px] lg:h-[255px] lg:left-[250px] lg:top-[330px]"
        />

        <Image
          src="/white-springy.png"
          width={256}
          height={256}
          alt="Background Star"
          className="absolute hidden lg:block opacity-5 top-[570px] left-[60px] w-[200px] lg:w-[256px] lg:h[256px] lg:left-[175px] lg:top-[425px]"
        />

        <Image
          src="/star.png"
          width={262}
          height={255}
          alt="Background Star"
          className="absolute opacity-5 bottom-[420px] right-[100px] w-[200px] lg:right-[250px] lg:w-[262px] lg:h-[255px] lg:bottom-[330px]"
        />

        <Image
          src="/white-springy.png"
          width={256}
          height={256}
          alt="Background Star"
          className="absolute hidden lg:block opacity-5 lg:right-[175px] lg:w-[256px] lg:h[256px] lg:bottom-[400px]"
        />
      </div>
    </div>
  );
}
