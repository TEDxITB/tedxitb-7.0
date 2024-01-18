import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth-options";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { type Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Verify Request | TEDxITB 7.0",
  openGraph: {
    ...openGraphTemplate,
    title: "Verify Request | TEDxITB 7.0",
  },
  twitter: {
    ...twitterTemplate,
    title: "Verify Request | TEDxITB 7.0",
  },
};

const VerifyRequestPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }

  return (
    <main className="relative flex h-full min-h-[calc(100vh-96px)] flex-auto items-center justify-center overflow-hidden p-5 py-16 font-anderson sm:p-16 lg:p-24">
      {/* Background Image */}
      <Image
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="/auth/bg-auth-2.jpg"
        alt="Background Image"
        fill={true}
        sizes="100vw"
        priority
      />

      {/* Non Overflow Container */}
      <div className="relative h-[450px] w-[320px] md:h-[390px] md:w-[560px] xl:ml-[600px] 2xl:ml-[900px]">
        {/* Bigger Top Right Circle */}
        <div className="absolute -right-7 -top-14 z-20 aspect-square h-16 w-16 rounded-full bg-gradient-to-bl from-[#1C1C1C] to-ted-red drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] lg:-right-20 lg:-top-20 lg:h-28 lg:w-28" />

        {/* Smaller Top Right Circle */}
        <div className="absolute right-5 top-1 z-20 aspect-square h-8 w-8 rounded-full bg-gradient-to-bl from-[#1C1C1C] to-ted-red drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] lg:right-6 lg:top-6 lg:h-14 lg:w-14" />

        {/* Bottom Left Circle */}
        <div className="absolute -bottom-8 -left-8 z-20 aspect-square h-16 w-16 rounded-full bg-gradient-to-tr from-[#1C1C1C] to-ted-red drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] lg:-bottom-16 lg:-left-16 lg:h-28 lg:w-28" />

        {/* Overflow Container */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-lg bg-[#1C1C1C] text-white ">
          {/* Top Left Star*/}
          <Image
            className="pointer-events-none absolute -left-6 -top-6 w-24 opacity-5 lg:-left-28 lg:-top-20 lg:w-64"
            src="/decoration/star.png"
            alt="Star Decoration"
            width={262}
            height={255}
          />

          {/* Top Right Star */}
          <Image
            className="pointer-events-none absolute -right-12 -top-12 w-32 opacity-5 lg:right-24 lg:top-16 lg:w-14"
            src="/decoration/star.png"
            alt="Star Decoration"
            width={262}
            height={255}
          />

          {/* Middle Right Star */}
          <Image
            className="pointer-events-none absolute -right-12 top-52 w-24 opacity-5 lg:-right-16 lg:top-48 lg:w-32"
            src="/decoration/star.png"
            alt="Star Decoration"
            width={262}
            height={255}
          />

          {/* Left Middle X Logo */}
          <Image
            className="pointer-events-none absolute bottom-32 left-8 w-16 opacity-25 lg:bottom-36"
            src="/logo/x-logo-red-left-cropped.png"
            alt="TEDxITB 7.0 Logo Half Left"
            width={510}
            height={427}
          />

          {/* Right Bottom X Logo */}
          <Image
            className="pointer-events-none absolute bottom-8 right-8 w-28 opacity-25 lg:right-20 lg:w-36"
            src="/logo/x-logo-red-full-cropped.png"
            alt="TEDxITB 7.0 Logo Full"
            width={1200}
            height={765}
          />

          {/* Content */}
          <div className="relative w-full px-4 lg:px-10">
            <h1 className="mb-6 text-center text-3xl font-extrabold">
              Verify Your Email
            </h1>
            <div className="mx-6 flex flex-col items-center justify-center">
              <p className="mb-12 text-center">
                We&apos;ve sent an email to verify your email address and
                activate your account. Please check your inbox!
              </p>
              <p className="text-center">
                If you entered wrong email or wish to change existing email
                address please click below
              </p>
              <Link href="/auth/sign-in">
                <Button
                  variant="primary"
                  size="lg"
                  className="mt-4 px-8 font-bold"
                >
                  Change Email
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VerifyRequestPage;
