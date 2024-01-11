import Accepted from "./accepted";
import AnnouncementCountdown from "./announcement-countdown";
import NotRegistered from "./not-registered";
import Rejected from "./rejected";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

async function page() {
  const session = await getServerSession(authOptions);

  const dateNow = new Date().getTime();
  // const announcementDate = new Date("February 19, 2024 17:00:00").getTime();
  const announcementDate = new Date("January 1, 2024 17:00:00").getTime();
  const confirmationDate = new Date("February 23, 2024 17:00:00").getTime();

  // Status lolos atau ga
  const status = true;

  // Kalo belum login, redirect ke halaman login
  if (!session) {
    redirect("/auth/sign-in");
  }

  // Sebelum tanggal pengumuman, tampilkan countdown
  if (dateNow < announcementDate) {
    return <AnnouncementCountdown announcementDate={announcementDate} />;
  }

  // Kalo sessionnya gaada nama, tampilkan halaman belum terdaftar
  if (!session.name) {
    return <NotRegistered />;
  }

  // Kalo status lolos, tampilkan halaman lolos
  if (status) {
    return <Accepted name={session.name} />;
  }

  return <Rejected name={session.name} />;
}

export default page;
