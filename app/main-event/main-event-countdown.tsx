import Countdown from "@/components/ui/countdown";
import Image from "next/image";

function MainEventCountdown({ title, date }: { title: string; date: number }) {
  return (
    <div className="font-anderson text-ted-white">
      <div className="relative flex min-h-[calc(100vh-104px)] w-full items-center justify-center py-12">
        <Image
          src="/main-event/impact-originator.png"
          alt="Impact Originator"
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-20 flex w-[90%] flex-col items-center rounded-lg bg-[#1F1F1F] bg-opacity-40 py-12 text-center shadow-2xl shadow-[##1F1F1F] md:py-32 lg:w-4/5">
          <div className="relative top-[10%] flex max-w-[314px] flex-col items-center gap-8 md:top-1/4 md:max-w-none">
            <p className="text-2xl lg:text-4xl">{title}</p>
            <p className="text-4xl font-bold italic lg:text-6xl">
              {new Date(date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <Countdown date={new Date(date)} />
          </div>

          <Image
            src="/logo/x-logo-white-full-uncropped.png"
            width={175}
            height={190}
            alt="TEDxITB 7.0 Logo"
            className="absolute bottom-3 left-1/2 w-[100px] -translate-x-1/2 opacity-20"
          />
        </div>
      </div>
    </div>
  );
}

export default MainEventCountdown;
