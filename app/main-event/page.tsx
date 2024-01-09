import TopicCard from "./topic-card";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const dummies = [
  {
    title: "Unlocking the Hidden Potential of Laughter: The Science of Humor",
    speaker: "Dr. Lily Chucklebottom",
    image: {
      url: "/hero-main-event.png",
      alt: "hero",
      width: 500,
      height: 500,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam euismod, aliquam nisl vitae, ultricies nisl.",
  },
  {
    title: "Unlocking the Hidden Potential of Laughter: The Science of Humor",
    speaker: "Dr. Lily Chucklebottom",
    image: {
      url: "/hero-main-event.png",
      alt: "hero",
      width: 500,
      height: 500,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam euismod, aliquam nisl vitae, ultricies nisl.",
  },
  {
    title: "Unlocking the Hidden Potential of Laughter: The Science of Humor",
    speaker: "Dr. Lily Chucklebottom",
    image: {
      url: "/hero-main-event.png",
      alt: "hero",
      width: 500,
      height: 500,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam euismod, aliquam nisl vitae, ultricies nisl.",
  },
];

function page() {
  const dateNow = new Date().getTime();
  const announcementDate = new Date("February 19, 2024 17:00:00").getTime();

  let redirect = "/main-event/register";
  if (dateNow > announcementDate) {
    redirect = "/main-event/announcement";
  }

  return (
    <>
      <section className="hidden px-7 font-anderson text-ted-white lg:block xl:px-14">
        <Breadcrumbs variant="default" />
      </section>

      <section className="text-ted-white">
        <div className="relative h-[calc(100vh-104px)] w-screen lg:h-[calc(100vh-144px)]">
          <Image
            src="/hero-main-event.png"
            fill
            alt="hero"
            className="z-10 object-cover"
          />
          <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 text-center lg:gap-12">
            <h1 className="text-5xl shadow-ted-white text-shadow-xl lg:text-8xl lg:text-shadow-2xl">
              TEDxITB 7.0
            </h1>
            <h2 className="text-3xl shadow-ted-white text-shadow-xl lg:text-6xl lg:text-shadow-2xl">
              The Impact Originator Hub
            </h2>
            <Link href={redirect}>
              <Button className="my-2 font-garamond lg:my-6 lg:px-20 lg:py-6 lg:text-lg">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative bg-[#1C1C1C] text-ted-white">
        <h2 className="my-16 stroke-ted-white text-center font-anderson text-4xl font-bold shadow-ted-white text-shadow-xl lg:text-6xl lg:text-shadow-2xl">
          OUR TOPIC
        </h2>
        <div className="my-16 flex flex-col items-center gap-8">
          {dummies.map((dummy) => (
            <TopicCard
              title={dummy.title}
              speaker={dummy.speaker}
              image={dummy.image}
              description={dummy.description}
              key={dummy.title}
            />
          ))}
        </div>

        <Image
          src="/star.png"
          width={262}
          height={255}
          alt="Background Star"
          className="absolute -left-32 -top-44 w-96 opacity-5 lg:left-[-225px] lg:top-[-340px] lg:w-[700px]"
        />

        <Image
          src="/star.png"
          width={262}
          height={255}
          alt="Background Star"
          className="absolute -bottom-36 -right-32 w-96 opacity-5 lg:bottom-[-350px] lg:right-[-225px] lg:w-[700px]"
        />
      </section>

      <section className="font-anderson text-ted-white shadow-inner">
        <div className="relative h-[550px] w-full bg-gradient-to-r from-[#7D0A0A] to-[#EAD196]">
          <Image
            src="/networking-originator-lounge.png"
            alt="Networking Originator Lounge"
            fill
            className="object-cover pt-[1px]"
          />
          <div className="absolute left-1/2 top-1/2 flex min-w-[300px] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 text-center lg:gap-12">
            <h2 className="text-3xl font-bold lg:text-6xl">
              Networking Originator Lounge
            </h2>
            <p className="leading-7 tracking-wide">
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
            src="/impact-originator.png"
            alt="Impact Originator"
            fill
            className="object-cover"
          />

          <div className="absolute left-1/2 top-1/2 flex min-w-[320px] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 flex-col gap-8 lg:left-0 lg:top-0 lg:mx-24 lg:mt-20 lg:-translate-x-0 lg:-translate-y-0 lg:gap-12">
            <div className="flex flex-col font-bold italic">
              <h2 className="text-2xl lg:text-5xl">READY TO BE PART OF</h2>
              <h2 className="bg-gradient-to-r from-ted-red to-transparent text-3xl lg:text-6xl">
                IMPACT ORIGINATOR?
              </h2>
            </div>
            <p className="text-xl lg:text-3xl">Saturday, March 2nd 2024</p>
            <p className="text-3xl italic text-[#FDB10E] lg:text-5xl">
              09.00 - 21.00
            </p>
            <div className="flex gap-2 align-middle">
              <Image
                src="/location-icon.svg"
                alt="Location"
                width={16}
                height={16}
                className="h-4 w-4 lg:h-8 lg:w-8"
              />
              <p className="lg:text-2xl">Institut Teknologi Bandung</p>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.2518531125716!2d107.60755364362834!3d-6.89082209577557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65767c9b183%3A0x2478e3dcdce37961!2sBandung%20Institute%20of%20Technology!5e0!3m2!1sen!2sid!4v1704359771229!5m2!1sen!2sid"
                width="250"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg lg:h-[250px] lg:w-[450px]"
              ></iframe>
            </div>
            <Link href={redirect}>
              <Button className="self-start lg:px-16 lg:py-6 lg:text-lg">
                Register Now
              </Button>
            </Link>
          </div>

          <Image
            src="/mesh.png"
            width={500}
            height={500}
            alt="Background Star"
            className="absolute -right-4 w-[250px] lg:w-[500px] lg:right-4"
          />

          <div className="absolute top-0 h-8 w-full bg-gradient-to-b from-ted-black to-transparent"></div>
        </div>
      </section>
    </>
  );
}

export default page;