import FeedbackPage from "./feedback-page";
import { authOptions } from "@/lib/auth-options";
import {
  isUserAllowedFeedback,
  isUserFeedbacked,
  isUserPassed,
  isUserRegistered,
} from "@/lib/query";
import { feedbackStartDate } from "@/lib/special-date";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function page() {
  const session = await getServerSession(authOptions);
  const dateNow = new Date().getTime();

  if (!session) {
    redirect("/auth/sign-in");
  }

  const isRegistered = await isUserRegistered(session.id);

  if (!isRegistered) {
    redirect("/main-event/announcement");
  }

  const status = await isUserPassed(session.id);

  if (!status) {
    redirect("/main-event/announcement");
  }

  // To Do: Add the condition to check if the user has submitted the feedback
  const checkAllow = await isUserAllowedFeedback(session.id);
  const isFeedbacked = await isUserFeedbacked(session.id);

  if (isFeedbacked) {
    redirect("/main-event/announcement");
  }

  if (!checkAllow || dateNow < feedbackStartDate) {
    redirect("/main-event/announcement");
  }

  return <FeedbackPage />;
}

export default page;
