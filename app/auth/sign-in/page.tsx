import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  return (
    <main className="relative flex h-screen justify-center overflow-hidden">
      <Image
        className="absolute h-full w-full object-cover object-center"
        src="/bg-tedx.png"
        alt="Background Image"
        width={360}
        height={100}
      />

      <Image
        className="absolute right-12 top-10 z-10 h-36 md:right-36 md:top-4 lg:right-80 xl:right-40 2xl:right-16"
        alt="ellipse"
        src="/ellipse.svg"
        width={60}
        height={60}
      />

      <Image
        className="absolute -right-10 -top-2 z-10 h-36 overflow-hidden md:-top-12 md:right-12 lg:right-52 xl:right-16 2xl:-right-12"
        alt="ellipse"
        src="/ellipse.svg"
        width={100}
        height={100}
      />

      <Image
        className="absolute bottom-36 z-10 -ml-80 h-36 overflow-hidden md:-ml-[600px] xl:ml-16 2xl:bottom-20 2xl:ml-80"
        alt="ellipse"
        src="/ellipse.svg"
        width={100}
        height={100}
      />

      <div className="relative mt-16 flex h-[540px] w-[320px] items-center justify-center rounded-lg bg-[url('../public/bg-sign-in-1.png')] text-white md:w-[560px] xl:ml-[600px] 2xl:ml-[900px] 2xl:mt-10">
        <div className="mx-4">
          <h1 className="mb-4 text-center font-anderson text-3xl font-bold">
            SIGN IN
          </h1>

          <div>
            <p className="mb-2 font-anderson">Email</p>
            <Input className="w-72 text-black md:w-[480px]" />
          </div>

          <p className="font-inter mt-2 text-xs">
            Enter an email address to which we will send you a verification
          </p>

          <Button className="font-inter mt-16 w-72 md:w-[480px]">
            SIGN IN
          </Button>

          <div className="my-4 flex flex-row justify-center">
            <Image
              className="mt-2 h-1 w-32 md:w-56"
              src="/Divider.png"
              alt="divider"
              width={100}
              height={100}
            />
            <p className="mx-1 text-xs">OR</p>
            <Image
              className="mt-2 h-1 w-32 md:w-56"
              src="/Divider.png"
              alt="divider"
              width={100}
              height={100}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              size="sm"
              className="mb-2 bg-transparent hover:bg-ted-red/90"
            >
              <div className="flex flex-row items-center justify-center gap-2">
                <Image
                  className="p-2 md:p-1"
                  alt="discord"
                  src="/logos_discord-icon.svg"
                  width={32}
                  height={32}
                />
                <p className="font-inter">Sign In with Discord</p>
              </div>
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="bg-transparent hover:bg-ted-red/90"
            >
              <div className="flex flex-row items-center justify-center gap-2">
                <Image
                  className="p-2 md:p-1"
                  alt="google"
                  src="/devicon_google.svg"
                  width={32}
                  height={32}
                />
                <p className="font-inter">Sign In with Google</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
