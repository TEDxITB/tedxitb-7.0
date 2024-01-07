import RegisterPage from "./register-page";
import Countdown from "@/components/ui/countdown";
import Image from "next/image";
import { redirect } from "next/navigation";

function Page() {
  const dateNow = new Date().getTime();
  const regisDate = new Date("February 2, 2024 17:00:00").getTime();
  // const regisDate = new Date("January 1, 2024 17:00:00").getTime();
  const announcementDate = new Date("February 19, 2024 17:00:00").getTime();

  if (dateNow > announcementDate) {
    redirect("/main-event/announcement");
  }

  if (dateNow < regisDate) {
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
            <div className="relative top-1/4 flex max-w-[314px] flex-col items-center gap-8 md:max-w-none">
              <p className="text-2xl lg:text-4xl">
                The registration form will be open starting
              </p>
              <p className="text-4xl font-bold italic lg:text-6xl">
                2 February 2024
              </p>
              <Countdown date={new Date(regisDate)} />
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

  return <RegisterPage />;
}

export default Page;
