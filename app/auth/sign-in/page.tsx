import SignInForm from "./sign-in-form";
import { type Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sign In | TEDxITB 7.0",
};

const SignInPage = async () => {
  return (
    <main className="relative flex h-full min-h-[calc(100vh-96px)] items-center justify-center overflow-hidden p-5 py-12 sm:p-12 lg:p-24">
      <Image
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="/bg-tedx-sign-in.jpg"
        alt="Background Image"
        fill={true}
        sizes="100vw"
      />

      <div className="relative flex h-[540px] w-[320px] items-center justify-center rounded-lg bg-[#1C1C1C] text-white md:w-[560px] xl:ml-[600px] 2xl:ml-[900px]">
        <div className="relative mx-4">
          <h1 className="mb-4 text-center font-anderson text-3xl font-bold uppercase tracking-wider">
            SIGN IN
          </h1>

          <SignInForm />

          <Image
            className="pointer-events-none absolute -top-20 -ml-6 w-32 md:-ml-12 xl:-ml-10"
            src="/star icon 5.png"
            alt="star icon"
            width={60}
            height={60}
          />
          <Image
            className="pointer-events-none absolute right-4 top-2 w-12"
            src="/star icon 7.png"
            alt="star icon"
            width={60}
            height={60}
          />
          <Image
            className="pointer-events-none absolute -right-4 top-32 w-16 md:-right-10 xl:-ml-8"
            src="/star icon 6.png"
            alt="star icon"
            width={60}
            height={60}
          />
          <Image
            className="pointer-events-none absolute bottom-12 -ml-10 w-32"
            src="/logo per 1.png"
            alt="star icon"
            width={60}
            height={60}
          />
          <Image
            className="pointer-events-none absolute -bottom-16 -right-8 w-72"
            src="/logo per 2.png"
            alt="star icon"
            width={60}
            height={60}
          />
          <Image
            className="pointer-events-none absolute -right-2 -top-16 w-12 md:w-16 xl:w-20"
            src="/ellipse.svg"
            alt="star icon"
            width={60}
            height={60}
          />
          <Image
            className="pointer-events-none absolute -right-20 -top-32 w-20 md:-right-28 md:w-24 xl:-right-32 xl:w-28"
            src="/ellipse.svg"
            alt="star icon"
            width={60}
            height={60}
          />
          <Image
            className="pointer-events-none absolute -bottom-32 -left-16 w-20 rotate-180 md:-left-24 md:w-24 xl:-left-32 xl:w-28"
            src="/ellipse.svg"
            alt="star icon"
            width={60}
            height={60}
          />
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
