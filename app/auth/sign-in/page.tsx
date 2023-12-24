import SignInForm from "./sign-in-form";
import Image from "next/image";

const SignInPage = async () => {
  return (
    <main className="relative flex h-screen justify-center overflow-hidden">
      <Image
        className="absolute h-full w-full object-cover object-center"
        src="/bg-tedx.png"
        alt="Background Image"
        width={360}
        height={100}
      />

      <div className="relative mt-16 flex h-[540px] w-[320px] items-center justify-center rounded-lg bg-[#1C1C1C] text-white md:w-[560px] xl:ml-[600px] 2xl:ml-[900px] 2xl:mt-10">
        <div className="relative mx-4">
          <h1 className="mb-4 text-center font-anderson text-3xl font-bold">
            SIGN IN
          </h1>
          <div>
            <SignInForm />
          </div>
          <Image
            className="absolute -top-20 -ml-6 w-32 md:-ml-12 xl:-ml-10"
            src="/star icon 5.png"
            alt="star icon"
            width={60}
            height={60}
          />
          <Image
            className="absolute right-4 top-2 w-12"
            src="/star icon 7.png"
            alt="star icon"
            width={60}
            height={60}
          />
          <Image
            className="absolute -right-4 top-32 w-16 md:-right-10 xl:-ml-8"
            src="/star icon 6.png"
            alt="star icon"
            width={60}
            height={60}
          />
          <Image
            className="absolute bottom-12 -ml-10 w-32"
            src="/logo per 1.png"
            alt="star icon"
            width={60}
            height={60}
          />
          <Image
            className="absolute -bottom-16 -right-8 w-72"
            src="/logo per 2.png"
            alt="star icon"
            width={60}
            height={60}
          />
          <Image
            className="absolute -right-2 -top-16 w-12 md:w-16 xl:w-20"
            src="/ellipse.svg"
            alt="star icon"
            width={60}
            height={60}
          />
          <Image
            className="absolute -right-20 -top-32 w-20 md:-right-28 md:w-24 xl:-right-32 xl:w-28"
            src="/ellipse.svg"
            alt="star icon"
            width={60}
            height={60}
          />
          <Image
            className="absolute -bottom-32 -left-16 w-20 rotate-180 md:-left-24 md:w-24 xl:-left-32 xl:w-28"
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
