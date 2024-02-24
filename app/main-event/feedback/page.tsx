import FeedbackPage from "./feedback-page";
import { authOptions } from "@/lib/auth-options";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import {
  getUserTicket,
  isUserFeedbacked,
  isUserPassed,
  isUserRegistered,
} from "@/lib/query";
import { feedbackStartDate } from "@/lib/special-date";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Feedback | TEDxITB 7.0",
  openGraph: {
    ...openGraphTemplate,
    title: "Feedback | TEDxITB 7.0",
  },
  twitter: {
    ...twitterTemplate,
    title: "Feedback | TEDxITB 7.0",
  },
};

async function Page() {
  const session = await getServerSession(authOptions);
  const dateNow = new Date().getTime();

  if (!session) {
    redirect("/auth/sign-in");
  }

  const [isRegistered, status, ticketId, isFeedbacked] = await Promise.all([
    isUserRegistered(session.id),
    isUserPassed(session.id),
    getUserTicket(session.id),
    isUserFeedbacked(session.id),
  ]);
  const isUserHaveTicket = ticketId !== null;

  if (!isRegistered) {
    redirect("/main-event/announcement");
  }

  if (!status) {
    redirect("/main-event/announcement");
  }

  if (isFeedbacked) {
    redirect("/main-event/announcement");
  }

  if (!isUserHaveTicket || dateNow < feedbackStartDate) {
    redirect("/main-event/announcement");
  }

  return <FeedbackPage />;
}

export default Page;
