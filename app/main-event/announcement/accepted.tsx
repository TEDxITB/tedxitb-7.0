import ConfirmationButtons from "./confirmation-buttons";
import MagazineSection from "./magazine";
import QRMagazineButtons from "./qr-magazine-buttons";
import { Button } from "@/components/ui/button";
import {
  getCMSData,
  mainEventMagazineQuery,
  mainEventMagazineTags,
} from "@/lib/cms";
import {
  getUserConfirmation,
  getUserTicket,
  isUserFeedbacked,
} from "@/lib/query";
import { confirmationDate, feedbackStartDate } from "@/lib/special-date";
import { MainEventMagazineQueryResult } from "@/types/cms";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";

async function Accepted(props: { session: Session }) {
  const dateNow = new Date().getTime();

  const [confirmation, ticketId, isFeedbacked] = await Promise.all([
    getUserConfirmation(props.session.id),
    getUserTicket(props.session.id),
    isUserFeedbacked(props.session.id),
  ]);

  const isConfirmationButtonsShown =
    dateNow < confirmationDate && confirmation === null;

  const isHaveTicket = ticketId !== null;

  const isFeedbackShown =
    isHaveTicket && !isFeedbacked && dateNow > feedbackStartDate;

  const magazineData = await getCMSData<MainEventMagazineQueryResult>(
    mainEventMagazineQuery,
    mainEventMagazineTags
  );

  return (
    <main className="flex flex-col items-center gap-20 px-5 py-16 text-ted-white sm:p-16 lg:gap-40 lg:p-24">
      <section className="relative flex w-full justify-center font-anderson">
        <Image
          src="/main-event/impact-originator.png"
          alt="Impact Originator"
          fill
          className="object-cover"
          priority
        />

        <div className="z-20 flex w-full max-w-7xl flex-col items-center gap-8 rounded-lg bg-[#1F1F1F] bg-opacity-40 shadow-2xl shadow-[##1F1F1F] lg:gap-12">
          <div className="relative flex flex-col gap-8 px-6 py-12 md:max-w-none lg:p-24">
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
                <p className="lg:text-xl">Date: Saturday, March 9th 2024</p>
                <p className="lg:text-xl">
                  Location: Cornerstone Auditorium, Paskal 23
                </p>
                <p className="lg:text-xl">Time: 15:00 - 21:10 WIB</p>
                <p className="lg:text-xl">
                  Contact Person: @mulan19aja (Line ID)
                </p>
                {isConfirmationButtonsShown ? (
                  <ConfirmationButtons />
                ) : (
                  <p className="grow lg:text-xl">
                    Confirmation Status:{" "}
                    {confirmation ? "Attendance" : "Absence"}
                  </p>
                )}

                {isHaveTicket && <QRMagazineButtons ticketId={ticketId} />}

                {isFeedbackShown && (
                  <div className="my-8 flex flex-col gap-4">
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7952748168636!2d107.59018527593359!3d-6.915063593084478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e76cd8210f39%3A0xf0e786d25b365488!2sCornerstone%20Auditorium!5e0!3m2!1sen!2sid!4v1708423537723!5m2!1sen!2sid"
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
      {/* <MagazineSection data={magazineData} /> */}
    </main>
  );
}

export default Accepted;
