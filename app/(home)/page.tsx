import Carousel from "./caraousel";
import { Button } from "@/components/ui/button";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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

const HomePage = () => {
  return (
    <div className="flex h-fit w-screen flex-col items-center justify-center bg-[#1E1E1E]">
      {/* Hero */}
      <section className="relative z-10 flex min-h-[calc(100vh-6rem)] w-screen items-center justify-center">
        <Image
          alt="bg-hero"
          src="/home/hero.png"
          fill
          sizes="100vw"
          className="absolute object-cover object-center"
        />
        <div className="flex w-[70%] flex-col items-center justify-center gap-6 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-center gap-2 text-ted-white lg:gap-4 ">
            <h1
              data-aos="zoom-in-up"
              className="text-center font-anderson text-5xl font-bold tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-8xl"
            >
              TEDxITB 7.0
            </h1>
            <h2
              data-aos="zoom-in-up"
              data-aos-delay="150"
              className="text-center font-garamond text-3xl font-medium tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl"
            >
              <span className="mr-2 font-graziela text-5xl lg:text-8xl">T</span>
              <span>HE </span>
              <span>IMPACT </span>
              <span className="mr-2 font-graziela text-5xl lg:text-8xl">O</span>
              <span>RIGINATOR </span>
              <span>HUB</span>
            </h2>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-delay="250"
            className="z-10 flex w-full items-center justify-center"
          >
            <Link href="/main-event">
              <Button
                size="lg"
                className="px-8 font-anderson text-base tracking-wide lg:rounded-lg lg:px-10 lg:py-6 lg:text-lg"
              >
                Explore Main Event
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="relative flex overflow-hidden">
        {/* Desktop */}
        <Image
          width={1440}
          height={1096}
          src="/decoration/blur1.png"
          alt="Blur Decoration 1"
          className="absolute -left-[400px] top-20 min-h-[850px] min-w-[824px] sm:top-6 xl:-top-32"
        />

        <div className="z-10 flex w-full items-center justify-center px-[35px] pb-[75px] pt-[150px] sm:px-[50px] md:py-[200px]">
          <div className="flex w-full flex-col items-center justify-center gap-12 md:w-[80%] lg:w-[70%] lg:gap-16 ">
            {/* About TED */}
            <section
              data-aos="fade-right"
              className="flex w-full flex-col items-center justify-center gap-[35px] rounded-lg bg-white bg-opacity-[0.05] p-[30px] font-anderson text-ted-white shadow-[2px_4px_25px_0px_rgba(255,255,255,0.1)]"
            >
              <h4 className="w-full text-left text-3xl font-bold lg:text-5xl">
                About TED
              </h4>
              <p className="w-full text-left text-base lg:text-2xl">
                TED is a nonprofit devoted to spreading ideas, usually in the
                form of short, powerful talks (18 minutes or less) with a
                mission to spread ideas. We welcome people from every discipline
                and culture who seek a deeper understanding of the world.
              </p>
            </section>

            {/* About TEDx */}
            <section
              data-aos="fade-left"
              className="flex w-full flex-col items-center justify-center gap-[35px] rounded-lg bg-white bg-opacity-[0.05] p-[30px] font-anderson text-ted-white shadow-[2px_4px_25px_0px_rgba(255,255,255,0.1)] "
            >
              <h4 className="w-full text-left text-3xl font-bold lg:text-5xl">
                About TEDx
              </h4>
              <p className="w-full text-left text-base lg:text-2xl">
                TEDx is an international community that organizes TED-style
                events anywhere and everywhere, celebrating locally-driven ideas
                and elevating them to a global stage. TEDx events are produced
                independently of TED conferences, each event curates speakers on
                their own, but based on {"TED's"} format and rules.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* 7.0 */}
      <section className="relative h-fit w-full overflow-hidden">
        <Image
          src="/decoration/blur2.png"
          alt="bg-decor2"
          width={1784}
          height={1183}
          className="absolute right-[-500px] top-64 min-h-[800px] min-w-[700px] sm:top-24 md:right-[-600px] lg:right-[-800px] lg:top-0"
        />

        <div className="z-10 flex w-full items-center justify-center px-[35px] py-[75px] sm:px-[50px] md:py-[200px]">
          <div className="relative flex w-full flex-col items-center justify-center gap-12 md:w-[80%] lg:w-[70%]">
            <div className="flex w-full flex-col items-start justify-start gap-3 text-white">
              <h2
                data-aos="fade-right"
                className="bg-gradient-to-r from-[#FEB20E] to-transparent to-50% font-anderson text-5xl font-bold italic tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-8xl"
              >
                TEDxITB 7.0
              </h2>

              <h3
                data-aos="fade-right"
                className="font-garamond text-3xl font-medium tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl"
              >
                <span className="mr-2 font-graziela text-5xl lg:text-8xl">
                  T
                </span>
                <span>HE </span>
                <span>IMPACT </span>
                <span className="mr-2 font-graziela text-5xl lg:text-8xl">
                  O
                </span>
                <span>RIGINATOR </span>
                <span>HUB</span>
              </h3>
            </div>
            <div
              data-aos="fade-right"
              className="flex w-full flex-col items-center justify-center gap-7 font-anderson"
            >
              <p className="w-full text-left text-base text-white lg:text-2xl">
                More than just a talk event where people seat-listen-leave.
              </p>

              <p className="w-full text-left text-base text-white lg:text-2xl">
                We shape community and serve as an Impact Originators Hub for
                the local originators to recognize, connect, and mutually
                inspire each other, leading to a broader impact for the society.
              </p>

              <p className="w-full text-left text-base text-white lg:text-2xl">
                Young people are the originators of significant ideas and those
                who bring about positive influences to the society. However, the
                platforms where this ideas born might be challenging for them to
                access or even difficult to find.
              </p>

              <p className="w-full text-left text-base text-white lg:text-2xl ">
                This 7.0 series of TEDxITB aims not just to be a half-day event
                consisting great talks from various speakers and great
                performances. It aims to be more than that, it will serve as an
                IMPACT ORIGINATOR HUB throughout the event for the local
                originators to recognize, connect, and mutually inspire each
                other, leading to greater and broader impact to the society.
              </p>

              <p className="w-full text-left text-base text-white lg:text-2xl">
                TEDxITB 7.0 creates an impactful hub for the local youth as it
                becomes the most classy, prestigious, exclusive yet inclusive in
                ITB.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Meaning */}
      <section className="relative h-fit w-full overflow-hidden">
        <div className="absolute z-0 flex h-full w-full flex-col items-center justify-around md:justify-center">
          <div className="relative hidden h-[300px] w-full md:block md:h-[800px]">
            <Image
              src="/decoration/blur3.png"
              alt="bg-decor3"
              fill
              sizes="500px"
              className="absolute object-contain object-center"
            />
          </div>
        </div>

        <div className="z-10 flex w-full items-center justify-center px-[35px] py-[75px] sm:px-[50px] md:py-[200px]">
          <div className="flex w-full flex-col items-center justify-center gap-12 md:w-[80%] lg:w-[70%]">
            <div className="flex w-full items-center justify-center text-center">
              <h3
                data-aos="zoom-in-up"
                className="font-anderson text-3xl font-bold text-white drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-5xl"
              >
                Behind Our Logo
              </h3>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-12 md:gap-7 lg:flex-row">
              <div className="flex w-full flex-col items-start justify-center gap-12 md:flex-row md:gap-7">
                <div
                  data-aos="zoom-in-up"
                  className="flex min-h-[380px] w-full flex-col items-center justify-start gap-6 rounded-md md:min-h-[450px] md:gap-7"
                >
                  <div className="flex aspect-square w-full items-center justify-center rounded-md bg-white bg-opacity-5 shadow-[2px_4px_25px_0px_rgba(255,255,255,0.1)]">
                    <Image
                      width={1200}
                      height={765}
                      alt="TEDxITB 7.0 Logo"
                      src="/logo/x-logo-red-full-cropped.png"
                      className="w-3/5 object-contain object-center"
                    />
                  </div>
                  <p className="w-full text-center font-anderson text-lg text-white lg:text-xl">
                    TEDxITB 7.0: The Impact Orginator Hub
                  </p>
                </div>
                <div
                  data-aos="zoom-in-up"
                  className="flex min-h-[380px] w-full flex-col items-center justify-start gap-6 rounded-md md:min-h-[450px] md:gap-7"
                >
                  <div className="flex aspect-square w-full items-center justify-center rounded-md bg-white bg-opacity-5 shadow-[2px_4px_25px_0px_rgba(255,255,255,0.1)]">
                    <Image
                      width={594}
                      height={479}
                      alt="TEDxITB 7.0 Logo '7' Part"
                      src="/logo/x-logo-red-top-right-cropped.png"
                      className="w-3/5 object-contain object-center"
                    />
                  </div>
                  <p className="w-full text-center font-anderson text-lg text-white lg:text-xl">
                    7 as TEDxITB 7.0
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col items-start justify-center gap-12 md:flex-row md:gap-7">
                <div
                  data-aos="zoom-in-up"
                  className="flex min-h-[380px] w-full flex-col items-center justify-start gap-6 rounded-md md:min-h-[450px] md:gap-7"
                >
                  <div className="flex aspect-square w-full items-center justify-center rounded-md bg-white bg-opacity-5 shadow-[2px_4px_25px_0px_rgba(255,255,255,0.1)]">
                    <Image
                      width={1200}
                      height={765}
                      alt="TEDxITB 7.0 Logo Highlighted"
                      src="/logo/x-logo-red-full-highlighted-cropped.png"
                      className="w-3/5 object-contain object-center"
                    />
                  </div>
                  <p className="w-full text-center font-anderson text-lg text-white lg:text-xl">
                    Symbolize {'"connect"'} as this years TEDxITB focusing on
                    being a hub for people to connect
                  </p>
                </div>
                <div
                  data-aos="zoom-in-up"
                  className="flex min-h-[380px] w-full flex-col items-center justify-start gap-6 rounded-md md:min-h-[450px] md:gap-7"
                >
                  <div className="flex aspect-square w-full items-center justify-center rounded-md bg-white bg-opacity-5 shadow-[2px_4px_25px_0px_rgba(255,255,255,0.1)]">
                    <Image
                      width={510}
                      height={427}
                      alt="TEDxITB 7.0 Half Logo"
                      src="/logo/x-logo-red-left-cropped.png"
                      className="w-3/5 object-contain object-center"
                    />
                  </div>
                  <p className="w-full text-center font-anderson text-lg text-white lg:text-xl">
                    Symbolize TEDx as an event that encourage people to connect
                    with others
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <div className="relative w-full overflow-hidden">
        <div className="z-5 absolute flex h-full w-full items-center justify-center md:items-start md:pt-[90px]">
          <div className="relative h-[400px] w-[400px] md:h-[850px] md:w-[870px]">
            <Image
              src="/decoration/blur4.png"
              alt="bg-decor4"
              fill
              sizes="500px"
              className="absolute object-contain object-center"
            />
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          className="z-10 h-fit w-full py-[150px] md:py-[200px]"
        >
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
