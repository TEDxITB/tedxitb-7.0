import ConfirmationButtons from "./confirmation-buttons";
import QRMagazineButtons from "./qr-magazine-buttons";
import { Button } from "@/components/ui/button";
import {
  getUserConfirmation,
  getUserTicket,
  isUserAllowedFeedback,
} from "@/lib/query";
import { confirmationDate, feedbackStartDate } from "@/lib/special-date";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";

async function Accepted(props: { session: Session }) {
  const dateNow = new Date().getTime();

  const confirmation = await getUserConfirmation(props.session.id);

  const isConfirmationButtonsShown =
    dateNow < confirmationDate && confirmation === null;

  const ticketId = await getUserTicket(props.session.id);
  const isQRMagazineShown = ticketId !== null;

  const checkAllow = await isUserAllowedFeedback(props.session.id);
  const isFeedbackShown = checkAllow && dateNow > feedbackStartDate;

  return (
    <main className="flex flex-col items-center text-ted-white">
      <section className="relative h-[1100px] w-full font-anderson lg:h-[1200px] xl:h-[900px]">
        <Image
          src="/main-event/impact-originator.png"
          alt="Impact Originator"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute left-1/2 top-1/2 z-20 flex h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 rounded-lg bg-[#1F1F1F] bg-opacity-40 shadow-2xl shadow-[##1F1F1F] md:h-[90%] md:w-[90%] lg:h-4/5 lg:w-4/5 lg:gap-12">
          <div className="relative my-auto flex flex-col gap-8 px-8 md:max-w-none lg:px-16">
            <p className="text-3xl lg:text-5xl">Dear {props.session.name},</p>
            <p className="leading-7 tracking-wide lg:text-xl">
              As we anticipate a high level of interest and limited seating
              availability, we kindly request your confirmation to attend the
              event until Saturday, February 24th 2024. Your timely notification
              will allow us to accommodate others who are eager to participate.
              We appreciate your understanding and cooperation that this
              inspiring experience can be shared by as many enthusiastic
              individuals as possible. TEDxITB 7.0 will be held in:
            </p>
            <div className="flex flex-col-reverse justify-between gap-8 lg:flex-row lg:flex-wrap-reverse">
              <div className="flex flex-col gap-2">
                <p className="text-sm lg:text-xl">
                  Date: Saturday, March 9th 2024
                </p>
                <p className="text-sm lg:text-xl">
                  Location: The House Convention Hall, Paskal 23
                </p>
                <p className="text-sm lg:text-xl">Time: 15:00 - 20:30 WIB</p>
                <p className="text-sm lg:text-xl">
                  Contact Person: @mulan19aja (Line ID)
                </p>
                {isConfirmationButtonsShown ? (
                  <ConfirmationButtons />
                ) : (
                  <p className="grow text-sm lg:text-xl">
                    Confirmation Status:{" "}
                    {confirmation ? "Attendance" : "Absence"}
                  </p>
                )}

                {isQRMagazineShown && <QRMagazineButtons ticketId={ticketId} />}

                {isFeedbackShown && (
                  <div className="flex flex-col gap-4 py-8">
                    <Button
                      variant={"outline"}
                      className="self-start border-ted-white"
                    >
                      <Link href={"/main-event/feedback"}>Send Feedback</Link>
                    </Button>
                    <p>We&apos;ll gratefully welcome your feedback</p>
                  </div>
                )}
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7985193189184!2d107.59057777499645!3d-6.914676593084865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e78e0372cfc7%3A0x54f02d7a7d90f635!2sThe%20House%20Convention%20Hall!5e0!3m2!1sen!2sid!4v1704370854993!5m2!1sen!2sid"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="hidden h-[200px] rounded-lg sm:block sm:w-[350px]"
              ></iframe>
            </div>
          </div>
        </div>

        <Image
          src="/logo/x-logo-white-full-uncropped.png"
          width={175}
          height={190}
          alt="TEDxITB 7.0 Logo"
          className="absolute left-1/2 top-3/4 w-[100px] -translate-x-1/2 opacity-20"
        />
      </section>

      <section
        id="magazine"
        className="h-full w-[95%] py-8 md:w-[90%] lg:w-4/5"
      >
        <div className="relative min-h-[300px] w-full rounded-lg md:min-h-[400px] lg:min-h-[565px]">
          <Image
            src="/main-event/bg-magazine.png"
            alt="Magazine"
            fill
            className="absolute rounded-lg bg-ted-white object-cover brightness-[0.25]"
            priority
          />

          <div className="z-10 flex w-full flex-col items-center justify-between gap-16 p-8 sm:flex-row lg:p-16">
            <div className="z-10 flex max-w-3xl flex-col gap-8">
              <h2 className="font-garamond text-3xl font-medium tracking-wider drop-shadow-[2px_4px_25px_rgba(255,255,255,0.9)] lg:text-6xl">
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
              <p className="font-anderson leading-7 tracking-wide lg:text-xl">
                The TEDx Magazine, with its creative design and exclusive
                content, delivers profound insights from diverse speakers,
                inspiring readers to explore the revolutionary ideas shared on
                the TEDx stage.
              </p>
            </div>

            <Image
              className="z-10 h-full w-[200px] self-center rounded-lg md:w-[250px] xl:w-[350px]"
              src={"/magazine/hero-1.jpg"}
              width={500}
              height={500}
              alt="Magazine"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Accepted;
