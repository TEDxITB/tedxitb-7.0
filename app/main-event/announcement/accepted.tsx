import { Button } from "@/components/ui/button";
import Image from "next/image";

function Accepted(props: { name?: string }) {
  return (
    <div className="text-ted-white font-anderson">
      <div className="relative h-[850px] w-full">
        <Image
          src="/impact-originator.png"
          alt="Impact Originator"
          fill
          className="object-cover"
        />

        <div className="absolute left-1/2 top-1/2 z-20 flex h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 rounded-lg bg-[#1F1F1F] bg-opacity-40 shadow-2xl shadow-[##1F1F1F] md:h-[90%] md:w-[90%] lg:h-4/5 lg:w-4/5 lg:gap-12">
          <div className="relative my-auto flex flex-col gap-8 md:max-w-none px-8 lg:px-16">
            <p className="text-3xl lg:text-5xl">Dear {props.name},</p>
            <p className="lg:text-xl tracking-wide leading-7">
              As we anticipate a high level of interest and limited seating
              availability, we kindly request your confirmation to attend the
              event until Saturday, February 24th 2024. Your timely notification
              will allow us to accommodate others who are eager to participate.
              We appreciate your understanding and cooperation that this
              inspiring experience can be shared by as many enthusiastic
              individuals as possible. TEDxITB 7.0 will be held in:
            </p>
            <div className="flex flex-col-reverse gap-8 lg:flex-row justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-sm lg:text-xl">
                  Date: Saturday, March 2nd 2024
                </p>
                <p className="text-sm lg:text-xl">
                  Location: The House Convention Hall, Paskal 23
                </p>
                <p className="text-sm lg:text-xl grow">Time: TBA</p>
                <div className="sm:self-start grid grid-rows-2 sm:grid-cols-2 sm:gap-8">
                  <Button
                    variant={"outline"}
                    size={"lg"}
                    className="self-start mt-4 lg:px-10 lg:py-6 lg:text-lg text-ted-red"
                  >
                    Confirm Absence
                  </Button>
                  <Button
                    size={"lg"}
                    className="self-start mt-4 lg:px-10 lg:py-6 lg:text-lg"
                  >
                    Confirm Attendance
                  </Button>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7985193189184!2d107.59057777499645!3d-6.914676593084865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e78e0372cfc7%3A0x54f02d7a7d90f635!2sThe%20House%20Convention%20Hall!5e0!3m2!1sen!2sid!4v1704370854993!5m2!1sen!2sid"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="hidden sm:block sm:w-[400px] h-[200px] rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        <Image
          src="/tedxitb-7-logo-white-full.png"
          width={175}
          height={190}
          alt="TEDxITB 7.0 Logo"
          className="absolute top-3/4 left-1/2 w-[100px] opacity-20 -translate-x-1/2"
        />
      </div>
    </div>
  );
}

export default Accepted;
