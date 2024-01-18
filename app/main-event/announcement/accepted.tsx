import ConfirmationButtons from "./confirmation-buttons";
import QRMagazineButtons from "./qr-magazine-buttons";
import { getUserConfirmation, getUserTicket } from "@/lib/query";
import { confirmationDate } from "@/lib/special-date";
import { Session } from "next-auth";
import Image from "next/image";

async function Accepted(props: { session: Session }) {
  const dateNow = new Date().getTime();

  const confirmation = await getUserConfirmation(props.session.id);

  const isConfirmationButtonsShown =
    dateNow < confirmationDate && confirmation === null;

  const ticketId = await getUserTicket(props.session.id);
  const isQRMagazineShown = ticketId !== null;

  return (
    <div className="font-anderson text-ted-white">
      <div className="relative h-[1200px] w-full">
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
                  Date: Saturday, March 2nd 2024
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
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7985193189184!2d107.59057777499645!3d-6.914676593084865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e78e0372cfc7%3A0x54f02d7a7d90f635!2sThe%20House%20Convention%20Hall!5e0!3m2!1sen!2sid!4v1704370854993!5m2!1sen!2sid"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="hidden h-[200px] rounded-lg sm:block sm:w-[400px]"
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
      </div>
    </div>
  );
}

export default Accepted;
