import ClientPageTedQuiz from "./client-page";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz | TEDxITB 7.0",
  openGraph: {
    ...openGraphTemplate,
    title: "Quiz | TEDxITB 7.0",
  },
  twitter: {
    ...twitterTemplate,
    title: "Quiz | TEDxITB 7.0",
  },
};

const TedQuizPage = () => {
  return (
    <main className="flex flex-auto items-center justify-center">
      <ClientPageTedQuiz />
    </main>
  );
};

export default TedQuizPage;
