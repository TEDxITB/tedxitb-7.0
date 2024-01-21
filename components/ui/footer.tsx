import { ScrollImage } from "./footer-carousel";
import { Separator } from "@/components/ui/separator";
import { documentationQuery, documentationTags, getCMSData } from "@/lib/cms";
import { type DocumentationQueryResult } from "@/types/cms";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function Footer() {
  // Fetch data
  const documentationQueryResult = await getCMSData<DocumentationQueryResult>(
    documentationQuery,
    documentationTags
  );
  const {
    documentation: { carousel },
  } = documentationQueryResult;

  return (
    <footer className="relative font-anderson">
      <div className="absolute inset-0">
        <Image
          className="object-cover"
          src="/components/bg-footer.jpg"
          fill
          alt="background"
        />
      </div>

      <div className="relative z-10 flex flex-col gap-8 p-8 text-ted-white md:hidden">
        <Image
          src="/logo/tedxitb-logo-white-cropped.png"
          className="h-auto w-[200px]"
          width={1119}
          height={223}
          alt="TEDxITB Logo"
        />
        <ul className="flex flex-col gap-1">
          <li>
            <Link href="/" className="underline">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/main-event" className="underline">
              MAIN EVENT
            </Link>
          </li>
          <li>
            <Link href="/magazine" className="underline">
              MAGAZINE
            </Link>
          </li>
          <li>
            <Link href="/magazine" className="underline">
              QUIZ
            </Link>
          </li>
          <li>
            <Link href="/sponsorship" className="underline">
              SPONSORSHIP
            </Link>
          </li>
        </ul>
        <div className="flex h-56 w-52 flex-col gap-2">
          <p className="underline">DOCUMENTATION</p>
          <ScrollImage images={carousel} />
        </div>
        <div className="flex flex-col gap-1">
          <p className="underline">LEGAL</p>
          <Link
            href="/terms-service"
            aria-label="Read more about terms of service"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy-policy"
            aria-label="Read more about privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link href="/sitemap.xml" aria-label="Read more about sitemap">
            Sitemap
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="underline">FOLLOW US</p>
          <div className="flex gap-4">
            <Link
              href="https://www.tiktok.com/@tedxitb"
              aria-label="Know more about TEDxITB through TikTok"
            >
              <Image
                src="/icon/tiktok-fill.svg"
                className="h-10 w-10"
                width={32}
                height={32}
                alt="Tiktok"
              />
            </Link>
            <Link
              href="https://twitter.com/TEDxITB2023"
              aria-label="Keep up with TEDxITB news through Twitter"
            >
              <Image
                src="/icon/twitter-fill.svg"
                className="h-10 w-10"
                width={32}
                height={32}
                alt="Twitter"
              />
            </Link>
            <Link
              href="mailto:contact.tedxitb@gmail.com"
              aria-label="Contact TEDxITB through email"
            >
              <Mail className="h-10 w-10" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/tedxitb/"
              aria-label="Learn more about TEDxITB through LinkedIn"
            >
              <Image
                src="/icon/linkedin-fill.svg"
                className="h-10 w-10"
                width={32}
                height={32}
                alt="Linkedin"
              />
            </Link>
            <Link
              href="https://www.instagram.com/tedxitb/"
              aria-label="Find more about TEDxITB through Instagram"
            >
              <Image
                src="/icon/instagram-fill.svg"
                className="h-10 w-10"
                width={32}
                height={32}
                alt="Instagram"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 hidden gap-4 p-8 text-ted-white md:flex md:flex-col">
        <div className="mb-16 flex p-4 md:gap-8 lg:gap-24 lg:p-16 xl:gap-48">
          <div className="flex flex-col gap-6">
            <Image
              src="/logo/tedxitb-logo-white-cropped.png"
              className="h-auto w-[300px]"
              width={1119}
              height={223}
              alt="TEDxITB Logo"
            />
            <div className="flex gap-2">
              <Link
                href="https://www.tiktok.com/@tedxitb"
                aria-label="Know more about TEDxITB through TikTok"
              >
                <Image
                  src="/icon/tiktok-fill.svg"
                  className="h-11 w-11"
                  width={32}
                  height={32}
                  alt="Tiktok"
                />
              </Link>
              <Link
                href="https://twitter.com/TEDxITB2023"
                aria-label="Keep up with TEDxITB news through Twitter"
              >
                <Image
                  src="/icon/twitter-fill.svg"
                  className="h-11 w-11"
                  width={32}
                  height={32}
                  alt="Twitter"
                />
              </Link>
              <Link
                href="mailto:contact.tedxitb@gmail.com"
                aria-label="Contact TEDxITB through email"
              >
                <Mail className="h-11 w-11" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/tedxitb/"
                aria-label="Learn more about TEDxITB through LinkedIn"
              >
                <Image
                  src="/icon/linkedin-fill.svg"
                  className="h-11 w-11"
                  width={32}
                  height={32}
                  alt="Linkedin"
                />
              </Link>
              <Link
                href="https://www.instagram.com/tedxitb/"
                aria-label="Find more about TEDxITB through Instagram"
              >
                <Image
                  src="/icon/instagram-fill.svg"
                  className="h-11 w-11"
                  width={32}
                  height={32}
                  alt="Instagram"
                />
              </Link>
            </div>
          </div>
          <ul className="flex flex-col gap-4">
            <li className="underline-offset-2 hover:underline">
              <Link href="/">HOME</Link>
            </li>
            <li className="underline-offset-2 hover:underline">
              <Link href="/main-event">MAIN EVENT</Link>
            </li>
            <li className="underline-offset-2 hover:underline">
              <Link href="/magazine">MAGAZINE</Link>
            </li>
            <li className="underline-offset-2 hover:underline">
              <Link href="/main-event">QUIZ</Link>
            </li>
            <li className="underline-offset-2 hover:underline">
              <Link href="/sponsorship">SPONSORSHIP</Link>
            </li>
          </ul>
          <div className="flex h-48 flex-col gap-4 sm:w-40 md:w-52 xl:w-auto">
            <p>Documentation</p>
            <ScrollImage images={carousel} />
          </div>
        </div>
        <div className="flex justify-between gap-8 p-4 lg:p-16">
          <p>@ 2023 TEDxITB 7.0. All rights reserved.</p>
          <ul className="flex gap-8">
            <li className="underline-offset-2 hover:underline">
              <Link
                href="/terms-service"
                aria-label="Read more about terms of service"
              >
                Terms of Service
              </Link>
            </li>
            <li className="underline-offset-2 hover:underline">
              <Link
                href="/privacy-policy"
                aria-label="Read more about privacy-policy"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="underline-offset-2 hover:underline">
              <Link href="/sitemap.xml" aria-label="Read more about sitemap">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
        <Separator />
        <p className="text-center">
          Design and Developed by TEDxITB 7.0 Website Team
        </p>
      </div>
    </footer>
  );
}

export default Footer;
