import BecomeSponsorButtonModal from "./become-sponsor";
import { type Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sponsorship | TEDxITB 7.0",
};

export default function Sponsorship() {
  // Fetch data from CMS
  const testData = [
    {
      url: "/qnbdum.png",
      alt: "logo",
      width: 100,
      height: 75,
    },
    {
      url: "/qnbdum.png",
      alt: "logo",
      width: 100,
      height: 75,
    },
    {
      url: "/qnbdum.png",
      alt: "logo",
      width: 100,
      height: 75,
    },
    {
      url: "/qnbdum.png",
      alt: "logo",
      width: 100,
      height: 75,
    },
    {
      url: "/qnbdum.png",
      alt: "logo",
      width: 100,
      height: 75,
    },
    {
      url: "/qnbdum.png",
      alt: "logo",
      width: 100,
      height: 75,
    },
    {
      url: "/qnbdum.png",
      alt: "logo",
      width: 100,
      height: 75,
    },
  ];

  return (
    <main className="flex-auto">
      {/* Hero Section */}
      <section className="relative h-full min-h-[calc(100vh-6rem)] w-full">
        {/* Background Image */}
        <Image
          src="/bg-tedx-sponsorship.jpg"
          alt="background"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Content */}
        <div className="absolute flex h-full w-full flex-col items-start justify-center gap-6 p-6 font-garamond text-white sm:p-16 lg:gap-12 lg:p-28 2xl:p-36">
          <h1>
            <span className="text-xl font-medium tracking-wide lg:text-4xl">
              Special Thanks To
            </span>
            <br />
            <span className="text-4xl font-bold tracking-wider lg:text-7xl">
              OUR SPONSORS
            </span>
          </h1>
          <p className="text-lg tracking-wide lg:text-2xl">
            Our success would not be possible without the continued support of
            these incredible partners.
          </p>
        </div>
      </section>

      {/* Below Hero Section */}
      <div className="relative flex w-full flex-col items-center gap-24 overflow-hidden bg-[#1C1C1C] px-4 py-28 sm:py-32 lg:gap-32 lg:py-52">
        {/* Sponsors Div Group */}
        <div className="z-20 flex w-full max-w-[287px] flex-col gap-12 sm:max-w-[620px] lg:max-w-[990px] lg:gap-16">
          {/* First Class */}
          <section className="flex w-full flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            {testData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex h-[125px] w-[135px] items-center justify-center overflow-hidden rounded-md bg-white p-2 shadow-[2px_4px_25px_0px_rgba(255,255,255,0.25)] sm:h-[155px] sm:w-[190px] lg:h-[250px] lg:w-[300px]"
                >
                  <Image
                    src={data.url}
                    width={data.width}
                    height={data.height}
                    alt={data.alt}
                    className="h-full w-full object-contain object-center transition duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              );
            })}
          </section>

          {/* Second Class */}
          <section className="flex w-full flex-row flex-wrap items-center justify-center gap-4 sm:gap-5 lg:gap-6">
            {testData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex h-[125px] w-[135px] items-center justify-center overflow-hidden rounded-md bg-white p-2 shadow-[2px_4px_25px_0px_rgba(255,255,255,0.25)] sm:h-[125px] sm:w-[140px] lg:h-[200px] lg:w-[225px]"
                >
                  <Image
                    src={data.url}
                    width={data.width}
                    height={data.height}
                    alt={data.alt}
                    className="h-full w-full object-contain object-center transition duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              );
            })}
          </section>

          {/* Third Class */}
          <section className="flex w-full flex-row flex-wrap items-center justify-center gap-4 lg:gap-6">
            {testData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex h-[75px] w-[85px] items-center justify-center overflow-hidden rounded-md bg-white p-2 shadow-[2px_4px_25px_0px_rgba(255,255,255,0.25)] sm:h-[95px] sm:w-[110px] lg:h-[150px] lg:w-[175px]"
                >
                  <Image
                    src={data.url}
                    width={data.width}
                    height={data.height}
                    alt={data.alt}
                    className="h-full w-full object-contain object-center transition duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              );
            })}
          </section>

          {/* Fourth Class */}
          <section className="flex w-full flex-row flex-wrap items-center justify-center gap-4 lg:gap-6">
            {testData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex h-[75px] w-[85px] items-center justify-center overflow-hidden rounded-md bg-white p-2 shadow-[2px_4px_25px_0px_rgba(255,255,255,0.25)] lg:h-[115px] lg:w-[140px]"
                >
                  <Image
                    src={data.url}
                    width={data.width}
                    height={data.height}
                    alt={data.alt}
                    className="h-full w-full object-contain object-center transition duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              );
            })}
          </section>
        </div>

        {/* Become Sponsor Section */}
        <section className="z-20 flex w-full max-w-[650px] flex-col items-center justify-center gap-6 text-center font-anderson">
          <p className="font-anderson text-lg text-white lg:text-3xl">
            TEDxITB is made possibble thanks to the grate companies and
            community support
          </p>
          <BecomeSponsorButtonModal />
        </section>

        {/* Background Decorations */}
        {/* Top Left Star */}
        <Image
          src="/star.png"
          width={262}
          height={255}
          alt="Background Star"
          className="absolute -left-32 -top-32 w-64 opacity-5 lg:left-[-275px] lg:top-[-275px] lg:w-[700px]"
        />

        {/* Bottom Right Star */}
        <Image
          src="/star.png"
          width={262}
          height={255}
          alt="Background Star"
          className="absolute -bottom-8 -right-16 w-64 opacity-5 lg:bottom-[-88px] lg:right-[-175px] lg:w-[700px]"
        />

        {/* Bottom Left Star */}
        <Image
          src="/star.png"
          width={262}
          height={255}
          alt="Background Star"
          className="absolute -left-32 bottom-52 w-64 opacity-5 lg:bottom-64 lg:left-[-350px] lg:w-[700px]"
        />

        {/* Right Logo */}
        <div className="absolute right-[-65px] top-[400px] flex flex-row items-center lg:right-[-248px] lg:top-[350px]">
          {/* Right Full Logo */}
          <Image
            src="/tedxitb-7-logo-red-full.png"
            width={1200}
            height={765}
            alt="TEDxITB 7.0 Full Logo"
            className="h-[95px] w-auto opacity-25 lg:h-[400px]"
          />

          {/* Right Rhombus */}
          <Image
            src="/rhombus-gradient.svg"
            width={100}
            height={100}
            alt="Rhombus Gradient Decoration"
            className="w-[130px] lg:w-[495px]"
          />
        </div>

        {/* Left Logo */}
        <div className="absolute bottom-[650px] left-[-65px] flex flex-row items-center lg:bottom-[700px] lg:left-[-248px]">
          {/* Left Rhombus Logo */}
          <Image
            src="/rhombus-gradient.svg"
            width={100}
            height={100}
            alt="Rhombus Gradient Decoration"
            className="w-[130px] lg:w-[495px]"
          />

          {/* Left Half Logo */}
          <Image
            src="/tedxitb-7-logo-red-half-left.png"
            width={510}
            height={427}
            alt="TEDxITB 7.0 Half Logo"
            className="h-[95px] w-auto opacity-25 lg:h-[400px]"
          />
        </div>

        {/* Bottom Right TEDxITB 7.0 Logo Triangle */}
        <Image
          src="/triangles-tedx-logo.svg"
          width={200}
          height={200}
          alt="Triangles Decoration"
          className="absolute bottom-0 right-0 z-10 w-[300px] sm:w-[500px] lg:w-[700px]"
        />
      </div>
    </main>
  );
}
