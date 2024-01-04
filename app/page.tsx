import Image from "next/image";
import Link from "next/link";
import WordCloud from "./coming-soon-client";
import { Metadata } from "next";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "TEDxITB 7.0",
  openGraph: {
    ...openGraphTemplate,
    title: "TEDxITB 7.0",
  },
  twitter: {
    ...twitterTemplate,
    title: "TEDxITB 7.0",
  },
};

export default function Home() {
  return (
    <main className="relative flex flex-auto flex-col items-center overflow-hidden px-6 py-20 sm:p-12 lg:p-24">
      <div className="mb-24 items-start text-center">
        <Image
          className="lg:w-[550px]"
          alt="Ted X Logo"
          src="/tedxitb-logo-white.png"
          width={320}
          height={195}
        />
        <h1 className="mx-auto mt-10 w-fit bg-gradient-to-r from-ted-red to-ted-white bg-clip-text text-2xl font-bold text-transparent ease-in-out motion-safe:animate-bounce lg:mt-16 lg:text-4xl">
          7.0 Is Coming Soon!
        </h1>
      </div>

      <WordCloud />

      <div className="mb-8 mt-auto flex flex-col gap-4 text-center text-ted-white lg:gap-10">
        <h3 className="font-bold lg:text-4xl">Our Contact</h3>
        <ul className="flex flex-wrap items-center justify-center gap-5 sm:gap-12">
          <li>
            <Link
              href="https://www.instagram.com/tedxitb/"
              className="flex items-center gap-1"
            >
              <div className="flex justify-center rounded-full bg-gradient-to-b from-ted-black to-ted-red drop-shadow-lg lg:h-10 lg:w-10">
                <Image
                  className="p-2 lg:p-1"
                  alt="instagram"
                  src="/instagram.svg"
                  width={32}
                  height={32}
                />
              </div>
              <p className="hover:underline lg:text-lg">@tedxitb</p>
            </Link>
          </li>
          <li>
            <Link
              href="mailto:contact.tedxitb@gmail.com"
              className="flex items-center gap-1"
            >
              <div className="flex justify-center rounded-full bg-gradient-to-b from-ted-black to-ted-red drop-shadow-lg lg:h-10 lg:w-10">
                <Image
                  className="p-2 lg:p-1"
                  alt="email"
                  src="/email.svg"
                  width={32}
                  height={32}
                />
              </div>
              <p className="hover:underline lg:text-lg">Email</p>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.tiktok.com/@tedxitb"
              className="flex items-center gap-1"
            >
              <div className="flex justify-center rounded-full bg-gradient-to-b from-ted-black to-ted-red drop-shadow-lg lg:h-10 lg:w-10">
                <Image
                  className="p-2 lg:p-[6px]"
                  alt="tiktok"
                  src="/tiktok.svg"
                  width={32}
                  height={32}
                />
              </div>
              <p className="hover:underline lg:text-lg">@tedxitb</p>
            </Link>
          </li>
        </ul>
      </div>

      {/* Background Image */}
      <Image
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        src="/background1.png"
        alt="Background Image"
        width={1080}
        height={720}
      />

      {/* Effect in Top Right */}
      <Image
        className="absolute -right-36 -top-14 -z-10 aspect-square w-[500px] opacity-10 sm:-right-48 sm:-top-56 lg:-right-60 lg:-top-80 lg:w-[800px]"
        src="/effect1.png"
        alt="Effect 1 Image"
        width={1000}
        height={1000}
      />
    </main>
  );
}
