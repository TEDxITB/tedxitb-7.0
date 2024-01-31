import MainEventCountdown from "../main-event-countdown";
import VotingStatePage from "./voting";
import { authOptions } from "@/lib/auth-options";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { isUserVoted } from "@/lib/query";
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

  const isVoted = await isUserVoted(session.id);

  if (Date.now() < startVotingDate) {
    // Return countdown
    return (
      <MainEventCountdown
        title="Anticipate student speaker voting on"
        date={startVotingDate}
      />
    );
  } else if (Date.now() < endVotingDate) {
    // If user has voted
    if (isVoted) {
      // Return countdown to announcement
      return (
        <MainEventCountdown
          title="Wait for Student Speaker Announcement on"
          date={endVotingDate}
        />
      );
    }

    // Else if user hasn't voted
    // Return voting page
    return <VotingStatePage />;
  } else {
    // Redirect to main-event
    redirect("/main-event");
  }
};

export default VotingPage;
