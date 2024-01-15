import Countdown from "@/components/ui/countdown";
import Image from "next/image";

function RegisCountdown(props: { regisDate: number }) {
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
          <div className="relative top-[10%] flex max-w-[314px] flex-col items-center gap-8 md:top-1/4 md:max-w-none">
            <p className="text-2xl lg:text-4xl">
              The registration form will be open starting
            </p>
            <p className="text-4xl font-bold italic lg:text-6xl">
              3 February 2024
            </p>
            <Countdown date={new Date(props.regisDate)} />
          </div>
        </div>

        <Image
          src="/tedxitb-7-logo-white-full.png"
          width={175}
          height={190}
          alt="TEDxITB 7.0 Logo"
          className="absolute left-1/2 top-3/4 w-[100px] -translate-x-1/2 opacity-20"
        />
      </div>
    </div>
  );
}

export default RegisCountdown;
