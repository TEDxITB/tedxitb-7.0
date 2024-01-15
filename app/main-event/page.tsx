import TopicCard from "./topic-card";
import { Button } from "@/components/ui/button";
import { getCMSData, mainEventTopicQuery, mainEventTopicTags } from "@/lib/cms";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { startComingSoonAnnouncementDate } from "@/lib/special-date";
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
          />
          <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 text-center lg:gap-12">
            <div className="flex w-full flex-col items-center justify-center gap-4 text-ted-white ">
              <h1 className="text-center font-anderson text-5xl font-bold tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-8xl">
                MAIN EVENT
              </h1>
              <h2 className="text-center font-garamond text-3xl font-medium tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl">
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
            <Link href={redirect}>
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

      <section className="relative bg-[#1C1C1C] text-ted-white">
        <h2 className="stroke-ted-white pt-16 text-center font-anderson text-4xl font-bold drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl">
          OUR TOPIC
        </h2>
        <div className="flex flex-col items-center gap-8 p-16">
          {allMainEventTopics.map((topic) => (
            <TopicCard
              title={topic.title}
              speaker={topic.speaker}
              image={topic.image}
              description={topic.description}
              key={topic.title}
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
      </section>

      <section className="font-anderson text-ted-white shadow-inner">
        <div className="relative h-[550px] w-full bg-gradient-to-r from-[#7D0A0A] to-[#EAD196]">
          <Image
            src="/main-event/networking-originator-lounge.png"
            alt="Networking Originator Lounge"
            fill
            className="object-cover pt-[1px]"
          />
          <div className="absolute left-1/2 top-1/2 flex min-w-[300px] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 text-center lg:gap-12">
            <h2 className="text-3xl font-bold drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl">
              Networking Originator Lounge
            </h2>
            <p className="font-thin leading-7 tracking-wide lg:text-lg">
              The Originators Lounge is your dedicated space to relax, mingle,
              and engage in meaningful conversations with fellow attendees.
              Here, you can be a part of the transformative energy that TEDxITB
              represents. Whether you&apos;re seeking to discuss the inspiring
              talks you&apos;ve just witnessed or looking to meet potential
              collaborators for your own ideas, the Originators Lounge is the
              place to be.
            </p>
          </div>
          <div className="absolute bottom-0 h-8 w-full bg-gradient-to-t from-ted-black to-transparent"></div>
        </div>
      </section>

      <section className="font-anderson text-ted-white">
        <div className="relative h-[1000px] w-full">
          <Image
            src="/main-event/impact-originator.png"
            alt="Impact Originator"
            fill
            className="object-cover"
          />

          <div className="absolute left-1/2 top-1/2 flex min-w-[320px] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 flex-col gap-8 lg:left-0 lg:top-0 lg:mx-24 lg:mt-20 lg:-translate-x-0 lg:-translate-y-0 lg:gap-12">
            <div className="flex flex-col font-bold italic drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)]">
              <h2 className="text-2xl lg:text-5xl">READY TO BE PART OF</h2>
              <h2 className="bg-gradient-to-r from-ted-red to-transparent text-3xl lg:text-6xl">
                IMPACT ORIGINATOR?
              </h2>
            </div>
            <p className="text-xl lg:text-3xl">Saturday, March 2nd 2024</p>
            <p className="text-3xl italic text-[#FDB10E] lg:text-5xl">
              15.00 - 20.30
            </p>
            <div className="flex gap-2 align-middle">
              <MapPin className="h-4 w-4 lg:h-8 lg:w-8" />
              <p className="lg:text-2xl">
                The House Convention Hall, Paskal 23
              </p>
            </div>
            <div>
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
            </div>
            <Link href={redirect}>
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

          <Image
            src="/decoration/mesh.png"
            width={500}
            height={500}
            alt="Background Star"
            className="absolute -right-4 w-[250px] lg:right-4 lg:w-[500px]"
          />

          <div className="absolute top-0 h-8 w-full bg-gradient-to-b from-ted-black to-transparent"></div>
        </div>
      </section>
    </main>
  );
}

export default page;
