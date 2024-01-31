import { Loader2 } from "lucide-react";
import Image from "next/image";

function MainEventLoading() {
  return (
    <main className="font-anderson text-ted-white">
      <section className="relative flex min-h-[calc(100vh-104px)] w-full items-center justify-center py-12">
        <Image
          src="/main-event/impact-originator.png"
          alt="Impact Originator"
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-20 flex w-[90%] flex-col items-center rounded-lg bg-[#1F1F1F] bg-opacity-40 py-12 text-center shadow-[2px_4px_25px_0px_rgba(255,255,255,0.1)] md:py-32 lg:w-4/5">
          <div className="relative top-[10%] flex max-w-[314px] flex-col items-center gap-4 md:top-1/4 md:max-w-none lg:gap-6">
            <h1 className="font-anderson text-3xl font-bold tracking-wider lg:text-5xl">
              Page Loading
            </h1>
            <p className="text-xl lg:text-3xl">
              Loading content, please wait...
            </p>
            <Loader2 className="h-12 w-12 animate-spin text-ted-red" />
          </div>

          <Image
            src="/logo/x-logo-white-full-uncropped.png"
            width={175}
            height={190}
            alt="TEDxITB 7.0 Logo"
            className="absolute bottom-3 left-1/2 w-[100px] -translate-x-1/2 opacity-20"
          />
        </div>
      </section>
    </main>
  );
}

export default MainEventLoading;
