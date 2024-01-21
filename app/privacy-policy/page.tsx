import { Button } from "@/components/ui/button";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Guess Astro",
  openGraph: {
    ...openGraphTemplate,
    title: "Privacy Policy | Guess Astro",
  },
  twitter: {
    ...twitterTemplate,
    title: "Privacy Policy | Guess Astro",
  },
};

const PrivacyPolicyPage = () => {
  return (
    <main className="relative flex flex-auto justify-center overflow-hidden bg-[#1E1E1E] p-6 py-12 font-anderson text-white sm:p-12 lg:p-24">
      {/* Content */}
      <section
        data-cy="privacy-policy-section"
        className="flex max-w-4xl flex-col gap-5 lg:gap-10"
      >
        <div className="flex flex-col gap-2 lg:gap-6">
          <h1 className="text-center text-3xl font-bold tracking-wider lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-justify text-base lg:text-lg">
            Welcome to TEDxITB 7.0 Website! We are committed to protecting your
            privacy and ensuring the security of your personal information. This
            Privacy Policy outlines how we collect, use, and safeguard the
            information you provide to us while using our services. By accessing
            and using our website, you consent to the practices described in
            this Privacy Policy.
          </p>
        </div>

        <div className="flex flex-col gap-2 lg:gap-4">
          <h2 className="text-xl font-bold tracking-wider lg:text-3xl">
            Information We Collect
          </h2>
          <p className="text-justify text-base lg:text-lg">
            We collect several information to run this web application. We only
            collect your email address and name for authentication purpose. We
            may also collect data on your interaction with the website to gain
            insights on how to improve our website. If you decided to register
            to our main event, we collect personal information and some TED
            related questions for registration purpose.
          </p>
        </div>

        <div className="flex flex-col gap-2 lg:gap-4">
          <h2 className="text-xl font-bold tracking-wider lg:text-3xl">
            How We Use Your Information
          </h2>
          <p className="text-justify text-base lg:text-lg">
            We collect user information to manage user account in our
            application. We collect interaction data to gain insights on how to
            improve our user experience. We collect registration data to manage
            and decide main event participant.
          </p>
        </div>

        <div className="flex flex-col gap-2 lg:gap-4">
          <h2 className="text-xl font-bold tracking-wider lg:text-3xl">
            Data Security
          </h2>
          <p className="text-justify text-base lg:text-lg">
            We are committed to ensuring the security of your personal
            information. We implement reasonable technical and organizational
            measures to protect your data from unauthorized access, disclosure,
            alteration, and destruction.
          </p>
        </div>

        <div className="flex flex-col gap-2 lg:gap-4">
          <h2 className="text-xl font-bold tracking-wider lg:text-3xl">
            Expose To Third Parties
          </h2>
          <p className="text-justify text-base lg:text-lg">
            We will not share, sell, or rent your personal information/data to
            any third parties.
          </p>
        </div>

        <div className="flex flex-col gap-2 lg:gap-4">
          <h2 className="text-xl font-bold tracking-wider lg:text-3xl">
            Updates to Privacy Policy
          </h2>
          <p className="text-justify text-base lg:text-lg">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for legal and regulatory reasons. Please
            check this page periodically for any updates.
          </p>
        </div>

        <div className="flex flex-col gap-2 lg:gap-4">
          <h2 className="text-xl font-bold tracking-wider lg:text-3xl">
            Contact
          </h2>
          <p className="text-justify text-base lg:text-lg">
            If you have any questions, concerns, or requests related to this
            Privacy Policy or how we handle your data, please contact us at {}
            <Link
              href="mailto:website.tedxitb@gmail.com"
              target="_blank"
              aria-label="Contact TEDxITB through email"
            >
              <Button variant="link" className="h-fit p-0 text-base lg:text-lg">
                this email.
              </Button>
            </Link>
          </p>
        </div>
      </section>

      {/* Decoration */}
      {/* Bottom Right Gradient Decoration */}
      <Image
        src="/decoration/blur1.png"
        alt="Blur Decoration"
        width={1440}
        height={1097}
        className="absolute -bottom-8 -right-24 w-72 lg:-bottom-52 lg:-right-40 lg:w-[700px]"
      />

      {/* Right Logo */}
      <div className="absolute right-[-65px] top-[500px] flex flex-row items-center md:top-[350px] lg:right-[-248px]">
        {/* Right Full Logo */}
        <Image
          src="/logo/x-logo-red-full-cropped.png"
          width={1200}
          height={765}
          alt="TEDxITB 7.0 Full Logo"
          className="h-[95px] w-auto opacity-25 lg:h-[400px]"
        />

        {/* Right Rhombus */}
        <Image
          src="/decoration/rhombus-gradient.svg"
          width={100}
          height={100}
          alt="Rhombus Gradient Decoration"
          className="w-[130px] lg:w-[495px]"
        />
      </div>

      {/* Top Left Gradient Decoration */}
      <Image
        src="/decoration/blur1.png"
        alt="Blur Decoration"
        width={1440}
        height={1097}
        className="absolute -left-24 -top-8 w-72 lg:-left-48 lg:-top-48 lg:w-[700px]"
      />
    </main>
  );
};

export default PrivacyPolicyPage;
