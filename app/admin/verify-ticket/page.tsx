import Scanner from "./scanner";
import UnathorizedSection from "./unauthorized";
import { authOptions } from "@/lib/auth-options";
import { AUTHORIZED_VERIFY_EMAIL } from "@/lib/authorized-verify-email";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Verify Ticket | TEDxITB 7.0",
  openGraph: {
    ...openGraphTemplate,
    title: "Verify Ticket | TEDxITB 7.0",
  },
  twitter: {
    ...twitterTemplate,
    title: "Verify Ticket | TEDxITB 7.0",
  },
};

const VerifyTicketPage = async () => {
  const session = await getServerSession(authOptions);

  // No session
  if (!session) {
    redirect("/auth/sign-in");
  }

  // Unauthorized email
  if (!AUTHORIZED_VERIFY_EMAIL.includes(session.email)) {
    return <UnathorizedSection />;
  }

  return (
    <main className="flex h-full min-h-[calc(100vh-96px)] items-center justify-center bg-[#1C1C1C] px-5 py-12 sm:p-16 lg:p-24">
      <Scanner />
    </main>
  );
};

export default VerifyTicketPage;
