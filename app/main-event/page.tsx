import TopicCard from "./topic-card";
import { Button } from "@/components/ui/button";
import { getCMSData, mainEventTopicQuery, mainEventTopicTags } from "@/lib/cms";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import {
  endVotingDate,
  startComingSoonAnnouncementDate,
} from "@/lib/special-date";
import { MainEventTopicQueryResult } from "@/types/cms";
import { MapPin } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Main Event | TEDxITB 7.0",
  openGraph: {
    ...openGraphTemplate,
    title: "Main Event | TEDxITB 7.0",
  },
  twitter: {
    ...twitterTemplate,
    title: "Main Event | TEDxITB 7.0",
  },
};

async function page() {
  const dateNow = new Date().getTime();

  let redirect = "/main-event/register";
  if (dateNow > startComingSoonAnnouncementDate) {
    redirect = "/main-event/announcement";
  }

  const { allMainEventTopics } = await getCMSData<MainEventTopicQueryResult>(
    mainEventTopicQuery,
    mainEventTopicTags
  );

  return (
    <main className="overflow-hidden">
      <section className="text-ted-white">
        <div className="relative min-h-[calc(100vh-98px)] w-screen py-5">
          <Image
            src="/main-event/hero.png"
            fill
            alt="hero"
            className="z-10 object-cover"
            priority
          />
          <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6 text-center lg:gap-12">
            <div className="flex w-full flex-col items-center justify-center gap-2 text-ted-white lg:gap-4 ">
              <h1
                className="duration-500 delay-50 animate-in fade-in-0 slide-in-from-bottom-32 fill-mode-both text-center font-anderson text-5xl font-bold tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-8xl"
              >
                MAIN EVENT
              </h1>
              <h2
                className="duration-500 delay-150 animate-in fade-in-0 slide-in-from-bottom-32 fill-mode-both text-center font-garamond text-3xl font-medium tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl"
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
              </h2>
            </div>
            <Link
              className="duration-500 delay-250 animate-in fade-in-0 slide-in-from-bottom-32 fill-mode-both"
              href={redirect}
            >
              {dateNow > startComingSoonAnnouncementDate ? (
                <Button
                  size={"lg"}
                  className="px-8 font-anderson text-base tracking-wide lg:rounded-lg lg:px-10 lg:py-6 lg:text-lg"
                >
                  Announcement
                </Button>
              ) : (
                <Button
                  size={"lg"}
                  className="px-8 font-anderson text-base tracking-wide lg:rounded-lg lg:px-10 lg:py-6 lg:text-lg"
                >
                  Register Now
                </Button>
              )}
            </Link>
          </div>
        </div>
      </section>

      {/* Topic */}
      {/* <section className="relative flex flex-col gap-16 bg-[#1C1C1C] px-8 py-16 text-ted-white sm:p-16 lg:px-24 lg:py-48">
        <h2
          data-aos="zoom-in-up"
          className="stroke-ted-white text-center font-anderson text-4xl font-bold drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl"
        >
          OUR TOPIC
        </h2>
        <div className="z-30 grid auto-rows-fr justify-center gap-12 sm:flex sm:flex-col sm:items-center sm:justify-normal sm:gap-8">
          {allMainEventTopics.map((topic, index) => (
            <TopicCard
              key={topic.id}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              title={topic.title}
              speaker={topic.speaker}
              image={topic.image}
              description={topic.description}
            />
          ))}
        </div>

        <Image
          src="/decoration/blur1.png"
          width={262}
          height={255}
          alt="Background Blur"
          className="absolute -left-1/2 -top-32 w-[1000px] sm:-left-64 sm:-top-64"
        />

        <Image
          src="/decoration/blur2.png"
          width={262}
          height={255}
          alt="Background Blur"
          className="absolute -bottom-40 -right-1/2 w-[1000px] sm:-bottom-56 sm:-right-96"
        />
      </section> */}

      {/* Networking Originator Lounge */}
      <section className="relative flex items-center justify-center text-ted-white">
        <Image
          src="/main-event/networking-originator-lounge.png"
          alt="Networking Originator Lounge"
          fill
          sizes="100vw"
          className="absolute inset-0 object-cover object-center"
        />

        <div className="flex min-w-[300px] max-w-7xl flex-col items-center gap-8 px-6 py-24 text-center font-anderson sm:p-16 lg:gap-12 lg:px-24 lg:py-48">
          <h2
            data-aos="zoom-in-up"
            className="text-4xl font-bold tracking-wide drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl"
          >
            NETWORKING ORIGINATOR LOUNGE
          </h2>
          <p data-aos="zoom-in-up" className="text-base lg:text-2xl">
            The Originators Lounge is your dedicated space to relax, mingle, and
            engage in meaningful conversations with fellow attendees. Here, you
            can be a part of the transformative energy that TEDxITB represents.
            Whether you&apos;re seeking to discuss the inspiring talks
            you&apos;ve just witnessed or looking to meet potential
            collaborators for your own ideas, the Originators Lounge is the
            place to be.
          </p>
        </div>
      </section>

      {/* Student Speaker Audition */}
      {/* Only render section before voting closes */}
      {Date.now() <= endVotingDate && (
        <section className="relative flex items-center justify-center overflow-hidden bg-black px-6 py-24 text-ted-white sm:p-16 lg:px-24 lg:py-48">
          <div className="z-20 flex max-w-5xl flex-col items-center gap-6 lg:gap-12">
            <div className="flex flex-col items-center gap-4 lg:gap-8">
              <h2
                data-aos="zoom-in-up"
                className="text-center font-anderson text-4xl font-bold tracking-wide drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl"
              >
                STUDENT SPEAKER AUDITION
              </h2>
              <p
                data-aos="zoom-in-up"
                className="text-center font-anderson text-base lg:text-2xl"
              >
                Student Speaker is an event held by TEDXITB 7.0. Aligned with
                TED&apos;s slogan which is Ideas Worth Spreading, this event
                provides opportunity for ITB undergraduate students to create
                new sparks in the society by voicing their aspirations as a
                speaker in TEDxITB 7.0 Main Event.
              </p>
            </div>
            <Link data-aos="zoom-in-up" href="/main-event/voting">
              <Button
                size="lg"
                className="px-8 font-anderson text-base tracking-wide lg:rounded-lg lg:px-10 lg:py-6 lg:text-lg"
              >
                Vote Now
              </Button>
            </Link>
          </div>

          {/* Backgorund Image */}
          <Image
            alt="bg-hero"
            src="/main-event/bg-voting.jpg"
            sizes="100vw"
            fill
            className="absolute inset-0 z-0 object-cover object-center opacity-40"
          />

          {/* Decoration Top Left */}
          <Image
            src="/decoration/blur1.png"
            width={262}
            height={255}
            alt="Background Blur"
            className="absolute -left-1/2 -top-32 z-10 w-[1000px] sm:-left-96 sm:-top-64"
          />

          {/* Decoration Bottom Left */}
          <Image
            src="/decoration/blur2.png"
            width={262}
            height={255}
            alt="Background Blur"
            className="absolute -bottom-40 -right-1/2 z-10 w-[1000px] sm:-bottom-56 sm:right-[-500px]"
          />
        </section>
      )}

      {/* Ready to be part of */}
      <section className="font-anderson text-ted-white">
        <div className="relative min-h-fit w-screen">
          <Image
            src="/main-event/impact-originator.png"
            alt="Impact Originator"
            fill
            className="object-cover"
          />

          <Image
            src="/decoration/mesh.png"
            width={500}
            height={500}
            alt="Background Star"
            className="absolute -right-4 w-[250px] lg:right-4 lg:w-[500px]"
          />

          <div className="absolute top-0 h-8 w-full bg-gradient-to-b from-ted-black to-transparent"></div>

          <div className="left-0 top-0 flex min-w-[320px] max-w-fit -translate-x-0 -translate-y-0 flex-col gap-8 p-8 sm:p-24 md:left-0 md:top-0 md:-translate-x-0 md:-translate-y-0 md:gap-12">
            <div className="flex flex-col font-bold italic drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)]">
              <h2 data-aos="fade-right" className="text-2xl lg:text-5xl">
                READY TO BE PART OF
              </h2>
              <h2
                data-aos="fade-right"
                className="bg-gradient-to-r from-ted-red to-transparent text-3xl lg:text-6xl"
              >
                IMPACT ORIGINATOR?
              </h2>
            </div>
            <p data-aos="fade-right" className="text-xl lg:text-3xl">
              Saturday, March 9th 2024
            </p>
            <p
              data-aos="fade-right"
              className="text-3xl italic text-[#FDB10E] lg:text-5xl"
            >
              15.00 WIB - TBA
            </p>
            <div data-aos="fade-right" className="flex gap-2 align-middle">
              <MapPin className="h-4 w-4 lg:h-8 lg:w-8" />
              {/* <p className="lg:text-2xl">The House Paskal 23, Bandung</p> */}
              <p className="lg:text-2xl">To Be Announced</p>
            </div>
            {/* <div data-aos="fade-right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7985193189184!2d107.59057777499645!3d-6.914676593084865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e78e0372cfc7%3A0x54f02d7a7d90f635!2sThe%20House%20Convention%20Hall!5e0!3m2!1sen!2sid!4v1704370854993!5m2!1sen!2sid"
                width="250"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg lg:h-[250px] lg:w-[450px]"
              ></iframe>
            </div> */}
            <Link data-aos="fade-right" href={redirect}>
              {dateNow > startComingSoonAnnouncementDate ? (
                <Button
                  size={"lg"}
                  className="my-2 lg:my-6 lg:px-12 lg:py-6 lg:text-xl"
                >
                  Announcement
                </Button>
              ) : (
                <Button
                  size={"lg"}
                  className="my-2 lg:my-6 lg:px-12 lg:py-6 lg:text-xl"
                >
                  Register Now
                </Button>
              )}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
