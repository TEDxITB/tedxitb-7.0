import RegisCountdown from "./register-countdown";
import RegisterPage from "./register-page";
import { authOptions } from "@/lib/auth-options";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { isUserRegistered } from "@/lib/query";
import {
  startComingSoonAnnouncementDate,
  startRegisDate,
} from "@/lib/special-date";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Main Event Registration | TEDxITB 7.0",
  openGraph: {
    ...openGraphTemplate,
    title: "Main Event Registration | TEDxITB 7.0",
  },
  twitter: {
    ...twitterTemplate,
    title: "Main Event Registration | TEDxITB 7.0",
  },
};

async function Page() {
  const session = await getServerSession(authOptions);

  const dateNow = new Date().getTime();

  // Kalo belum login, redirect ke halaman login
  if (!session) {
    redirect("/auth/sign-in");
  }

  const isRegistered = await isUserRegistered(session.id);

  // Kalo udah lewat tanggal pendaftaran, redirect ke halaman pengumuman
  if (isRegistered || dateNow > startComingSoonAnnouncementDate) {
    redirect("/main-event/announcement");
  }

  // Kalo belum waktunya pendaftaran, tampilkan countdown
  if (dateNow < startRegisDate) {
    return <RegisCountdown regisDate={startRegisDate} />;
  }

  return <RegisterPage session={session} />;
}

export default Page;
