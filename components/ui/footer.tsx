"use client";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";

const images = [
  "/tedxitb-link-preview.png",
  "/tedxitb-link-preview.png",
  "/tedxitb-link-preview.png",
  "/tedxitb-link-preview.png",
  "/tedxitb-link-preview.png",
  "/tedxitb-link-preview.png",
];

const ScrollImage = () => {
  const [page, setPage] = useState(0);
  const totalPage = Math.ceil(images.length / 4);
  const shownImages = images.slice(page * 4, page * 4 + 4);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage(() => (page + 1) % totalPage);
    }, 5000);
    return () => clearInterval(interval);
  }, [page, totalPage]);

  return (
    <>
      <AnimatePresence custom={page}>
        <div className="grid grid-cols-2 gap-3 lg:gap-5 2xl:grid-cols-4">
          {shownImages.map((image, index) => (
            <motion.div
              key={`${page}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Link href="/documentation">
                <Image
                  className="h-24 w-24 rounded-lg object-cover object-center"
                  src={image}
                  width={128}
                  height={128}
                  alt="Foto"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </>
  );
};

function Footer() {
  return (
    <footer className="relative">
      <div className="absolute inset-0">
        <Image
          className="object-cover"
          src="/background1.png"
          fill
          alt="background"
        />
      </div>

      <div className="relative z-10 flex flex-col gap-8 p-8 text-ted-white md:hidden">
        <Image
          src="/tedxitb-logo-white-cropped.png"
          width={200}
          height={200}
          alt="logo"
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
            <Link href="/sponsorship" className="underline">
              SPONSORSHIP
            </Link>
          </li>
        </ul>
        <div className="flex h-56 w-52 flex-col gap-2">
          <p className="underline">DOCUMENTATION</p>
          <ScrollImage />
        </div>
        <div className="flex flex-col gap-1">
          <p className="underline">LEGAL</p>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
          <Link href="#">Security</Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="underline">FOLLOW US</p>
          <div className="flex gap-4">
            <Link href="https://www.tiktok.com/@tedxitb">
              <Image
                src="/TikTok_new.svg"
                className="h-10 w-10"
                width={32}
                height={32}
                alt="Tiktok"
              />
            </Link>
            <Link href="https://twitter.com/TEDxITB2023">
              <Image
                src="/TwitterX.svg"
                className="h-10 w-10"
                width={32}
                height={32}
                alt="Twitter"
              />
            </Link>
            <Link href="mailto:contact.tedxitb@gmail.com">
              <Mail className="h-10 w-10" />
            </Link>
            <Link href="https://www.linkedin.com/company/tedxitb/">
              <Image
                src="/LinkedIn.svg"
                className="h-10 w-10"
                width={32}
                height={32}
                alt="Linkedin"
              />
            </Link>
            <Link href="https://www.instagram.com/tedxitb/">
              <Image
                src="/Instagram_new.svg"
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
              src="/tedxitb-logo-white-cropped.png"
              width={300}
              height={300}
              alt="logo"
            />
            <div className="flex gap-2">
              <Link href="https://www.tiktok.com/@tedxitb">
                <Image
                  src="/TikTok_new.svg"
                  className="h-11 w-11"
                  width={32}
                  height={32}
                  alt="Tiktok"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/TwitterX.svg"
                  className="h-11 w-11"
                  width={32}
                  height={32}
                  alt="Twitter"
                />
              </Link>
              <Link href="mailto:contact.tedxitb@gmail.com">
                <Mail className="h-11 w-11" />
              </Link>
              <Link href="https://www.linkedin.com/company/tedxitb/">
                <Image
                  src="/LinkedIn.svg"
                  className="h-11 w-11"
                  width={32}
                  height={32}
                  alt="Linkedin"
                />
              </Link>
              <Link href="https://www.instagram.com/tedxitb/">
                <Image
                  src="/Instagram_new.svg"
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
              <Link href="/sponsorship">SPONSORSHIP</Link>
            </li>
          </ul>
          <div className="flex h-48 flex-col gap-4 sm:w-40 md:w-52 xl:w-auto">
            <p>Documentation</p>
            <ScrollImage />
          </div>
        </div>
        <div className="flex justify-between gap-8 p-4 lg:p-16">
          <p>@ 2023 TEDxITB 7.0. All rights reserved.</p>
          <ul className="flex gap-8">
            <li className="underline-offset-2 hover:underline">
              <Link href="#">Terms of Service</Link>
            </li>
            <li className="underline-offset-2 hover:underline">
              <Link href="#">Privacy Policy</Link>
            </li>
            <li className="underline-offset-2 hover:underline">
              <Link href="/sitemap.xml">Sitemap</Link>
            </li>
            <li className="underline-offset-2 hover:underline">
              <Link href="#">Security</Link>
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
