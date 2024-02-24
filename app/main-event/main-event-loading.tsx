import { Loader2 } from "lucide-react";
import Image from "next/image";

function MainEventLoading() {
  return (
    <main className="flex flex-col px-5 py-16 font-anderson text-ted-white sm:p-16 lg:gap-40 lg:p-24">
      <section className="relative flex min-h-[calc(100vh-104px)] w-full items-center justify-center py-12">
        <Image
          src="/main-event/impact-originator.png"
          alt="Impact Originator"
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-20 flex h-full w-full max-w-7xl flex-col items-center rounded-lg bg-[#1F1F1F] bg-opacity-40 py-12 text-center shadow-[2px_4px_25px_0px_rgba(255,255,255,0.1)]">
          <div className="relative flex flex-col gap-8 px-6 py-12 md:max-w-none lg:p-24">
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
