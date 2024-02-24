import { authOptions } from "@/lib/auth-options";
import { appendGoogleSheets } from "@/lib/google-sheets";
import PostHogClient from "@/lib/posthog-server";
import { prisma } from "@/lib/prisma";
import { getUserTicket, isUserFeedbacked } from "@/lib/query";
import { feedbackStartDate } from "@/lib/special-date";
import { feedbackSchema } from "@/lib/zod";
import { getServerSession } from "next-auth";
import { type NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized", message: "No Accsess" },
      { status: 401 }
    );
  }
  const currentTime = Date.now();
  const wibOffset = 7 * 60 * 60 * 1000; // WIB is UTC+7
  const currentTimeWIB = new Date(currentTime + wibOffset);

  if (currentTime < feedbackStartDate) {
    return NextResponse.json(
      { error: "Bad Request", message: "Feedback is not open yet" },
      { status: 400 }
    );
  }

  // if (currentTime > feedbackEndDate) {
  //   return NextResponse.json(
  //     { error: "Bad Request", message: "Feedback is closed" },
  //     { status: 400 }
  //   );
  // }

  // Check if feedbacked
  const [check1, ticketId] = await Promise.all([
    isUserFeedbacked(session.id),
    getUserTicket(session.id),
  ]);
  const isHaveTicket = ticketId !== null;

  if (check1) {
    return NextResponse.json(
      { error: "Bad Request", message: "Feedback already made" },
      { status: 400 }
    );
  }

  // Check if user passed to main event
  if (!isHaveTicket) {
    return NextResponse.json(
      {
        error: "Bad Request",
        message: "You aren't allowed to give a feedback",
      },
      { status: 400 }
    );
  }

  const reqFormData = await req.formData();
  let q7array: string[] = [];
  const numericFields = ["q1"];

  Array.from(reqFormData.entries()).forEach(([key, value]) => {
    if (key === "q7") {
      q7array.push(value as string);
    }
  });

  // Create data object
  const data = Object.fromEntries([
    ...Array.from(reqFormData.entries()).map(([key, value]) => [
      key,
      numericFields.includes(key) ? Number(value) : value,
    ]),
    ["q7", q7array], // Include q7array as an entry
  ]);
  const zodParseResult = feedbackSchema.safeParse(data);
  if (!zodParseResult.success) {
    return NextResponse.json(
      {
        error: "Bad Request",
        message: zodParseResult.error.issues,
      },
      { status: 400 }
    );
  }
  const { q1, q2, q3, q4, q5, q6, q7 } = zodParseResult.data;

  const feedbackResult = await prisma.feedback.create({
    data: {
      userId: session.id,
      q1,
      q2,
      q3,
      q4,
      q5,
      q6,
      q7,
      feedbackAt: currentTimeWIB,
    },
  });
  const posthogClient = PostHogClient();
  posthogClient.capture({
    distinctId: session.id,
    event: "user feedbacked main event",
  });

  const sheedId = process.env.GOOGLE_SHEETS_ID as string;
  const time = currentTimeWIB.toLocaleString("en-US", {
    hour12: false,
    timeZone: "UTC", // Replace with your desired timezone
  });
  const sheetRange = "feedback!A:K";
  const sheetValueInputOption = "RAW";
  const values = [
    [
      feedbackResult.id,
      session.id,
      time,
      session.email,
      q1,
      q2,
      q3,
      q4,
      q5,
      q6,
      q7,
    ].map((value) => String(value)),
  ];
  await appendGoogleSheets(sheedId, sheetRange, sheetValueInputOption, values);

  return NextResponse.json(
    { message: "Feedback submitted successfully" },
    { status: 200 }
  );
};
