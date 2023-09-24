import Image from "next/image";
import Link from "next/link";
import WordCloud from "./coming-soon-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TEDxITB 7.0",
  description:
    "TEDx is an international community that organizes TED-style events anywhere and everywhere, celebrating locally-driven ideasand elevating them to a global stage. TEDx events are producedindependently of TED conferences, each event curates speakers ontheir own, but based on TED's format and rules.",
  generator: "Next.js",
  applicationName: "TEDxITB 7.0",
  keywords: [
    "TEDxITB 7.0",
    "ITB Bandung",
    "Ideas worth spreading",
    "Innovation and technology",
    "TEDx",
    "Institut Teknologi Bandung",
    "Empowering ideas",
    "TEDx event",
  ],
  colorScheme: "dark",
  themeColor: "#FF2B06",
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
  openGraph: {
    title: "TEDxITB 7.0",
    description:
      "TEDx is an international community that organizes TED-style events anywhere and everywhere, celebrating locally-driven ideasand elevating them to a global stage. TEDx events are producedindependently of TED conferences, each event curates speakers ontheir own, but based on TED's format and rules.",
    url: "https://tedxitb.id",
    siteName: "TEDxITB 7.0",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEDxITB 7.0",
    description:
      "TEDx is an international community that organizes TED-style events anywhere and everywhere, celebrating locally-driven ideasand elevating them to a global stage. TEDx events are producedindependently of TED conferences, each event curates speakers ontheir own, but based on TED's format and rules.",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2">
      <div className="items-start text-center">
        <Image
          className="lg:w-[620px]"
          alt="Ted X Logo"
          src="/tedxitb-logo-white.png"
          width={390}
          height={195}
        />
        <h1 className="mx-auto mt-[-30px] w-fit bg-gradient-to-r from-ted-red to-ted-white bg-clip-text font-bold text-ted-white text-transparent lg:mt-[-50px] lg:text-4xl">
          7.0 Is Coming Soon!
        </h1>
      </div>

      <br className="my-12" />

      <WordCloud />

      <div className="mb-8 mt-auto flex flex-col gap-4 text-center lg:gap-10">
        <h3 className="font-bold lg:text-4xl">Our Contact</h3>
        <ul className="flex items-center gap-5 sm:gap-12">
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
    </main>
  );
}
