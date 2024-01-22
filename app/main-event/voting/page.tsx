import VotingCountdown from "./countdown";
import VotingStatePage from "./voting";
import { authOptions } from "@/lib/auth-options";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { endVotingDate, startVotingDate } from "@/lib/special-date";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Voting | TEDxITB 7.0",
  openGraph: {
    ...openGraphTemplate,
    title: "Voting | TEDxITB 7.0",
  },
  twitter: {
    ...twitterTemplate,
    title: "Voting | TEDxITB 7.0",
  },
};

const VotingPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth/sign-in");
  }

  if (Date.now() < startVotingDate) {
    // Return countdown
    return <VotingCountdown announcementDate={startVotingDate} />;
  } else if (Date.now() < endVotingDate) {
    // Return voting page
    return <VotingStatePage />;
  } else {
    // Redirect to main-event
    redirect("/main-event");
  }
};

export default VotingPage;
