import { type Metadata } from "next";
import ClientPageTedQuiz from "./client-page";

export const metadata: Metadata = {
  title: "Quiz | TEDxITB 7.0",
  description:
    "TEDx is an international community that organizes TED-style events anywhere and everywhere, celebrating locally-driven ideasand elevating them to a global stage. TEDx events are producedindependently of TED conferences, each event curates speakers ontheir own, but based on TED's format and rules.",
  generator: "Next.js",
  applicationName: "TEDxITB 7.0",
  keywords: [
    "TEDxITB 7.0",
    "ITB Bandung",
    "Ideas worth spreading",
    "Innovation and technology",
    "TEDx",
    "Institut Teknologi Bandung",
    "Empowering ideas",
    "TEDx event",
  ],
  colorScheme: "dark",
  themeColor: "#FF2B06",
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
  openGraph: {
    title: "Quiz | TEDxITB 7.0",
    description:
      "TEDx is an international community that organizes TED-style events anywhere and everywhere, celebrating locally-driven ideasand elevating them to a global stage. TEDx events are producedindependently of TED conferences, each event curates speakers ontheir own, but based on TED's format and rules.",
    url: "https://tedxitb.id",
    siteName: "TEDxITB 7.0",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiz | TEDxITB 7.0",
    description:
      "TEDx is an international community that organizes TED-style events anywhere and everywhere, celebrating locally-driven ideasand elevating them to a global stage. TEDx events are producedindependently of TED conferences, each event curates speakers ontheir own, but based on TED's format and rules.",
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
