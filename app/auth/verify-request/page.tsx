import Image from "next/image";
import { Button } from "@/components/ui/button";

const VerifyReqPage = async () => {
  return (
    <main className="relative flex h-screen justify-center overflow-hidden">
      <Image
        className="absolute h-full w-full object-cover object-center"
        src="/bg-tedx.png"
        alt="Background Image"
        width={360}
        height={100}
      />

      <div className="relative mt-16 flex h-[540px] w-[320px] items-center justify-center rounded-lg bg-[#1C1C1C] text-center font-anderson font-bold text-white md:w-[560px] xl:ml-[600px] 2xl:ml-[900px] 2xl:mt-10">
        <div className="relative mx-4">
          <h1 className="mb-6 text-4xl">Verify Your Email</h1>
          <div className="mx-6 flex flex-col items-center justify-center">
            <p className="mb-12">
              We&apos;ve sent an email to abcdlimadasar@gmail.com to verify your
              email address and activate your account
            </p>
            <p>
              If you entered wrong email or wish to change existing email
              address please click below
            </p>
            <Button
              variant="outline"
              size="default"
              className="mt-4 w-60 md:w-80 bg-transparent font-bold text-ted-red"
            >
              Change Email
            </Button>
          </div>
          <Image
            className="absolute -top-20 -ml-6 w-32 md:-ml-12 xl:-ml-4"
            src="/star icon 5(3).png"
            alt="star icon"
            width={60}
            height={60}
          />
          <Image
            className="absolute right-6 top-2 w-12"
            src="/star icon 7(1).png"
            alt="star icon"
            width={60}
            height={60}
          />
          <Image
            className="absolute -right-4 top-32 w-16 xl:-ml-8"
            src="/star icon 6(2).png"
            alt="star icon"
            width={60}
            height={60}
          />
          <Image
            className="absolute bottom-8 -ml-10 w-32"
            src="/logo per part-06 2.png"
            alt="star icon"
            width={60}
            height={60}
          />
          <Image
            className="absolute -bottom-24 md:-bottom-32 -right-8 w-72"
            src="/logo per part-05 2.png"
            alt="star icon"
            width={60}
            height={60}
          />
          <Image
            className="absolute right-12 -top-28 w-12 md:w-16 xl:w-20"
            src="/Ellipse 3(1).svg"
            alt="star icon"
            width={60}
            height={60}
          />
          <Image
            className="absolute -right-8 -top-40 w-20 md:-right-20 md:w-24 xl:w-28"
            src="/Ellipse 3(1).svg"
            alt="star icon"
            width={60}
            height={60}
          />
          <Image
            className="absolute -bottom-32 md:-bottom-40 xl:-bottom-48 -left-8 w-20 rotate-180 md:-left-24 md:w-24 xl:-left-28 xl:w-28"
            src="/Ellipse 3(1).svg"
            alt="star icon"
            width={60}
            height={60}
          />
        </div>
      </div>
    </main>
  );
};

export default VerifyReqPage;
