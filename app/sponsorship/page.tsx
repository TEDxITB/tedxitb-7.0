import BecomeSponsorButtonModal from "./become-sponsor";
import { getCMSData, sponsorshipQuery, sponsorshipTags } from "@/lib/cms";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { type SponsorshipQueryResult } from "@/types/cms";
import { type Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sponsorship | TEDxITB 7.0",
  openGraph: {
    ...openGraphTemplate,
    title: "Sponsorship | TEDxITB 7.0",
  },
  twitter: {
    ...twitterTemplate,
    title: "Sponsorship | TEDxITB 7.0",
  },
};

export default async function Sponsorship() {
  // Fetch data from DatoCMS
  const sponsorshipQueryResult = await getCMSData<SponsorshipQueryResult>(
    sponsorshipQuery,
    sponsorshipTags
  );
  const {
    sponsorship: {
      xlSponsor,
      lSponsor,
      mSponsor,
      sSponsor,
      mMediaPartner,
      lMediaPartner,
      xlMediaPartner,
    },
  } = sponsorshipQueryResult;

  return (
    <main className="flex-auto">
      {/* Hero Section */}
      <section className="relative h-full min-h-[calc(100vh-6rem)] w-full">
        {/* Background Image */}
        <Image
          src="/sponsorship/bg.jpg"
          alt="background"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover object-center"
          priority
        />

        {/* Content */}
        <div className="absolute flex h-full w-full flex-col items-start justify-center gap-8 p-6 font-garamond text-white sm:p-16 lg:gap-12 lg:p-28 2xl:p-36">
          <h1
            data-aos="fade-right"
            className="tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)]"
          >
            <span className="font-garamond text-2xl font-medium lg:text-5xl">
              <span className="mr-2 font-graziela text-4xl lg:text-7xl">S</span>
              <span>PECIAL </span>
              <span>THANKS </span>
              <span>TO</span>
            </span>
            <br />
            <span className="font-anderson text-5xl font-bold lg:text-8xl">
              OUR SPONSORS
            </span>
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="250"
            className="font-anderson text-base tracking-wide lg:text-2xl"
          >
            Our success would not be possible without the continued support of
            these incredible partners.
          </p>
        </div>
      </section>

      {/* Below Hero Section */}
      <div className="relative flex w-full flex-col items-center gap-24 overflow-hidden bg-[#1C1C1C] px-4 py-28 sm:py-32 lg:gap-32 lg:py-52">
        {/* Sponsors Div Group */}
        <div className="z-20 flex w-full max-w-[287px] flex-col gap-12 sm:max-w-[620px] lg:max-w-[990px] lg:gap-16">
          {/* Title */}
          <h2
            data-aos="zoom-in-up"
            className="stroke-ted-white text-center font-anderson text-4xl font-bold text-ted-white drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl"
          >
            SPONSORS
          </h2>

          {/* First Class */}
          <section className="flex w-full flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            {xlSponsor.map((data) => {
              return (
                <div
                  key={data.id}
                  data-aos="zoom-in-up"
                  className="flex h-[125px] w-[135px] items-center justify-center overflow-hidden rounded-md bg-white p-2 shadow-[2px_4px_25px_0px_rgba(255,255,255,0.25)] sm:h-[155px] sm:w-[190px] sm:p-4 lg:h-[250px] lg:w-[300px] lg:p-6"
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
            {lSponsor.map((data) => {
              return (
                <div
                  key={data.id}
                  data-aos="zoom-in-up"
                  className="flex h-[125px] w-[135px] items-center justify-center overflow-hidden rounded-md bg-white p-2 shadow-[2px_4px_25px_0px_rgba(255,255,255,0.25)] sm:h-[125px] sm:w-[140px] sm:p-4 lg:h-[200px] lg:w-[225px]"
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
            {mSponsor.map((data) => {
              return (
                <div
                  key={data.id}
                  data-aos="zoom-in-up"
                  className="flex h-[75px] w-[85px] items-center justify-center overflow-hidden rounded-md bg-white p-2 shadow-[2px_4px_25px_0px_rgba(255,255,255,0.25)] sm:h-[95px] sm:w-[110px] sm:p-4 lg:h-[150px] lg:w-[175px]"
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
            {sSponsor.map((data) => {
              return (
                <div
                  key={data.id}
                  data-aos="zoom-in-up"
                  className="flex h-[75px] w-[85px] items-center justify-center overflow-hidden rounded-md bg-white p-2 shadow-[2px_4px_25px_0px_rgba(255,255,255,0.25)] lg:h-[115px] lg:w-[140px] lg:p-4"
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

        {/* Media Partner Div Group */}
        <div className="z-20 flex w-full max-w-[287px] flex-col gap-12 sm:max-w-[620px] lg:max-w-[990px] lg:gap-16">
          {/* Title */}
          <h2
            data-aos="zoom-in-up"
            className="stroke-ted-white text-center font-anderson text-4xl font-bold text-ted-white drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl"
          >
            MEDIA PARTNER
          </h2>

          {/* First Class */}
          <section className="flex w-full flex-row flex-wrap items-center justify-center gap-4 sm:gap-5 lg:gap-6">
            {xlMediaPartner.map((data) => {
              return (
                <div
                  key={data.id}
                  data-aos="zoom-in-up"
                  className="flex h-[125px] w-[135px] items-center justify-center overflow-hidden rounded-md bg-white p-2 shadow-[2px_4px_25px_0px_rgba(255,255,255,0.25)] sm:h-[125px] sm:w-[140px] sm:p-4 lg:h-[200px] lg:w-[225px]"
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
          <section className="flex w-full flex-row flex-wrap items-center justify-center gap-4 lg:gap-6">
            {lMediaPartner.map((data) => {
              return (
                <div
                  key={data.id}
                  data-aos="zoom-in-up"
                  className="flex h-[75px] w-[85px] items-center justify-center overflow-hidden rounded-md bg-white p-2 shadow-[2px_4px_25px_0px_rgba(255,255,255,0.25)] sm:h-[95px] sm:w-[110px] sm:p-4 lg:h-[150px] lg:w-[175px]"
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
            {mMediaPartner.map((data) => {
              return (
                <div
                  key={data.id}
                  data-aos="zoom-in-up"
                  className="flex h-[75px] w-[85px] items-center justify-center overflow-hidden rounded-md bg-white p-2 shadow-[2px_4px_25px_0px_rgba(255,255,255,0.25)] lg:h-[115px] lg:w-[140px] lg:p-4"
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
        <section
          data-aos="zoom-in-up"
          className="z-20 flex w-full max-w-[650px] flex-col items-center justify-center gap-6 text-center font-anderson"
        >
          <p className="font-anderson text-lg text-white lg:text-3xl">
            TEDxITB is made possibble thanks to the grate companies and
            community support
          </p>
          <BecomeSponsorButtonModal />
        </section>

        {/* Background Decorations */}
        {/* Top Left Blur */}
        <Image
          src="/decoration/blur1.png"
          width={1440}
          height={1096}
          alt="Background Blur 1"
          className="absolute -left-40 -top-24 w-96 lg:left-[-700px] lg:top-[-400px] lg:w-[1400px]"
        />

        {/* Bottom Left Blur */}
        <Image
          src="/decoration/blur1.png"
          width={1440}
          height={1096}
          alt="Background Blur 1"
          className="absolute -bottom-24 -left-40 w-96 lg:bottom-[-500px] lg:left-[-700px] lg:w-[1400px]"
        />

        {/* Middle Right Star */}
        <Image
          src="/decoration/blur2.png"
          width={1734}
          height={1183}
          alt="Background Blur 2"
          className="absolute -right-52 top-[650px] w-96 lg:right-[-850px] lg:top-[850px] lg:w-[1500px]"
        />

        {/* Right Logo */}
        <div className="absolute right-[-65px] top-[400px] flex flex-row items-center lg:right-[-248px] lg:top-[350px]">
          {/* Right Full Logo */}
          <Image
            src="/logo/x-logo-red-full-cropped.png"
            width={1200}
            height={765}
            alt="TEDxITB 7.0 Full Logo"
            className="h-[95px] w-auto opacity-25 lg:h-[400px]"
          />

          {/* Right Rhombus */}
          <Image
            src="/decoration/rhombus-gradient.svg"
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
            src="/decoration/rhombus-gradient.svg"
            width={100}
            height={100}
            alt="Rhombus Gradient Decoration"
            className="w-[130px] lg:w-[495px]"
          />

          {/* Left Half Logo */}
          <Image
            src="/logo/x-logo-red-left-cropped.png"
            width={510}
            height={427}
            alt="TEDxITB 7.0 Half Logo"
            className="h-[95px] w-auto opacity-25 lg:h-[400px]"
          />
        </div>

        {/* Bottom Right TEDxITB 7.0 Logo Triangle */}
        <Image
          src="/decoration/triangles-tedx-logo.png"
          width={745}
          height={494}
          alt="Triangles Decoration"
          className="absolute bottom-0 right-0 z-10 w-[200px] sm:w-[300px] lg:w-[500px]"
        />
      </div>
    </main>
  );
}
