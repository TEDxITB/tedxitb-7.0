import MainEventCountdown from "../main-event-countdown";
import Accepted from "./accepted";
import NotRegistered from "./not-registered";
import Rejected from "./rejected";
import { authOptions } from "@/lib/auth-options";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { isUserPassed, isUserRegistered } from "@/lib/query";
import {
  startAnnouncementDate,
  startComingSoonAnnouncementDate,
  startRegisDate,
} from "@/lib/special-date";
import { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Main Event Announcement | TEDxITB 7.0",
  openGraph: {
    ...openGraphTemplate,
    title: "Main Event Announcement | TEDxITB 7.0",
  },
  twitter: {
    ...twitterTemplate,
    title: "Main Event Announcement | TEDxITB 7.0",
  },
};

async function page() {
  const session = await getServerSession(authOptions);

  const dateNow = new Date().getTime();

  // Kalo belum login, redirect ke halaman login
  if (!session) {
    redirect("/auth/sign-in");
  }

  // Paralel query
  const [isRegistered, status] = await Promise.all([
    isUserRegistered(session.id),
    isUserPassed(session.id),
  ]);

  // State 1
  if (dateNow < startRegisDate) {
    redirect("/main-event/register");
  }

  // State 2
  if (!isRegistered && dateNow < startComingSoonAnnouncementDate) {
    redirect("/main-event/register");
  }

  // State 3
  // Kalo ga register, tampilkan halaman belum terdaftar
  if (!isRegistered) {
    return <NotRegistered />;
  }

  // Sebelum tanggal pengumuman, tampilkan countdown
  if (dateNow < startAnnouncementDate) {
    return (
      <MainEventCountdown
        title="Wait for the Participant Announcement on"
        date={startAnnouncementDate}
      />
    );
  }

  // State 4
  // Kalo status lolos, tampilkan halaman lolos
  if (status) {
    return <Accepted session={session} />;
  }

  return <Rejected name={session.name ?? "No Name"} />;
}

export default page;
