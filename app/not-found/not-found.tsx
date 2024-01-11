"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <main className="relative flex h-full min-h-[calc(100vh-96px)] items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute flex flex-col items-center lg:flex-row lg:justify-between h-full w-full object-cover bg-[#1E1E1E]">
        <Image
          className="lg:order-1 blur-lg opacity-40 mb-24 lg:ml-20 lg:my-0 lg:w-2/5"
          src="/gradient-2.jpg"
          alt="gradient"
          width={400}
          height={400}
        />

        <Image
          className="blur-2xl opacity-20 w-80 lg:w-1/3 -ml-40 lg:my-20"
          src="/gradient-1.jpg"
          alt="gradient"
          width={600}
          height={600}
        />
      </div>

      {/* Container */}
      <div className="z-10 m-12 flex flex-col lg:flex-row items-center">
        <Image
          className="lg:order-1 lg:w-1/2"
          src="/astro-error.svg"
          alt="Astro Image"
          width={200}
          height={100}
        />

        <div className="text-white flex flex-col items-center lg:items-start">
          <div>
            <p className="font-anderson italic text-2xl lg:text-4xl xl:text-6xl my-10">
              Error 404
              <br />
              Not Found
            </p>
            <p className="font-anderson text-base xl:text-xl lg:mr-24 xl:mr-36">
              Oops! You&apos;ve stumbled upon a digital dead-end. Our digital
              guides are on the case to reunite you with the missing content.
              While we work our magic, feel free to explore elsewhere in our
              virtual universe or hit the back button to return.
            </p>
          </div>
          <Button className="mt-20 lg:w-60">Go Back Home</Button>
        </div>
      </div>
    </main>
  );
}
