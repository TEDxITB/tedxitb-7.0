import RegisCountdown from "./register-countdown";
import RegisterPage from "./register-page";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Page() {
  const session = await getServerSession(authOptions);

  const dateNow = new Date().getTime();
  const regisDate = new Date("February 2, 2024 17:00:00").getTime();
  // const regisDate = new Date("January 1, 2024 17:00:00").getTime();
  const announcementDate = new Date("February 17, 2024 17:00:00").getTime();

  // Kalo belum login, redirect ke halaman login
  if (!session) {
    redirect("/auth/sign-in");
  }

  // Kalo udah lewat tanggal pendaftaran, redirect ke halaman pengumuman
  if (dateNow > announcementDate) {
    redirect("/main-event/announcement");
  }

  // Kalo belum waktunya pendaftaran, tampilkan countdown
  if (dateNow < regisDate) {
    return <RegisCountdown regisDate={regisDate} />;
  }

  return <RegisterPage session={session} />;
}

export default Page;
