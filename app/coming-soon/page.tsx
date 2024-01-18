import WordCloud from "./coming-soon-client";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coming Soon | TEDxITB 7.0",
  openGraph: {
    ...openGraphTemplate,
    title: "Coming Soon | TEDxITB 7.0",
  },
  twitter: {
    ...twitterTemplate,
    title: "Coming Soon | TEDxITB 7.0",
  },
};

export default function Home() {
  return (
    <main className="relative flex flex-auto flex-col items-center overflow-hidden px-6 py-20 text-white sm:p-12 lg:p-24">
      <div className="mb-24 flex flex-col items-center gap-4 text-center lg:gap-8">
        <h1
          data-aos="zoom-in-up"
          className="text-center font-anderson text-5xl font-bold tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-8xl"
        >
          <span className="text-ted-red">TEDx</span>
          ITB 7.0
        </h1>
        <h2
          data-aos="zoom-in-up"
          data-aos-delay="150"
          className="text-center font-garamond text-3xl font-medium tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl"
        >
          <span className="mr-2 font-graziela text-5xl lg:text-8xl">C</span>
          <span>OMING </span>
          <span className="mr-2 font-graziela text-5xl lg:text-8xl">S</span>
          <span>OON</span>
          <span className="mr-2 font-graziela text-5xl lg:text-8xl">!</span>
        </h2>
      </div>

      <WordCloud data-aos="zoom-in-up" data-aos-delay="250" />

      <div
        data-aos="zoom-in-up"
        data-aos-delay="350"
        className="mb-8 mt-auto flex flex-col gap-4 text-center font-anderson text-ted-white lg:gap-10"
      >
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
                  src="/icon/instagram-outline.svg"
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
                  src="/icon/email-outline.svg"
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
                  src="/icon/tiktok-outline.svg"
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
        src="/coming-soon/bg.png"
        alt="Background Image"
        width={1920}
        height={1080}
        priority
      />
    </main>
  );
}
