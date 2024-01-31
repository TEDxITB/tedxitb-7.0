import { authOptions } from "@/lib/auth-options";
import { appendGoogleSheets } from "@/lib/google-sheets";
import PostHogClient from "@/lib/posthog-server";
import { prisma } from "@/lib/prisma";
import { confirmationDate, startAnnouncementDate } from "@/lib/special-date";
import { confirmationSchema } from "@/lib/zod";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest) => {
  // Validate user session
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized", message: "No Access" },
      { status: 401 }
    );
  }

  // Validate Date For confirmation
  const currentTime = Date.now();
  const wibOffset = 7 * 60 * 60 * 1000; // WIB is UTC+7
  const currentTimeWIB = new Date(currentTime + wibOffset);

  if (currentTime < startAnnouncementDate) {
    return NextResponse.json(
      {
        error: "Bad Request",
        message: "Attendance confirmation is not open yet",
      },
      { status: 400 }
    );
  }
  if (currentTime > confirmationDate) {
    return NextResponse.json(
      { error: "Bad Request", message: "Attendance confirmation is closed" },
      { status: 400 }
    );
  }

  const prevval = await prisma.confirmation.findUnique({
    where: {
      userId: session.id,
    },
  });
  if (!prevval) {
    return NextResponse.json(
      {
        error: "Bad Request",
        message: "Your account is not registered as an attendee",
      },
      { status: 400 }
    );
  }

  if (!(prevval.attendance === null)) {
    return NextResponse.json(
      {
        error: "Bad Request",
        message: "You already confirmed your attendance",
      },
      { status: 400 }
    );
  }

  const reqFormData = await req.formData();
  const attendance = reqFormData.get("attendance") === "true";
  const zodParseResult = confirmationSchema.safeParse({ attendance });

  if (!zodParseResult.success) {
    return NextResponse.json(
      { error: "Bad Request", message: zodParseResult.error },
      { status: 400 }
    );
  }
  // For confirmation
  const confirmation = await prisma.confirmation.update({
    where: {
      userId: session.id,
    },
    data: {
      attendance: attendance,
      confirmedAt: currentTimeWIB,
    },
  });

  // Posthog
  const posthogClient = PostHogClient();
  posthogClient.capture({
    distinctId: session.id,
    event: "user confirmation",
    properties: {
      attendance: attendance,
    },
  });

  // General sheets data
  const sheetId = process.env.GOOGLE_SHEETS_ID as string;
  const sheetValueInputOption = "RAW";
  const time = currentTimeWIB.toLocaleString("en-US", {
    hour12: false,
    timeZone: "UTC",
  });
  // Update confirmed sheets
  const confirmedSheetRange = "confirmed!A:F";
  const valuesConfirmedSheet = [
    [
      confirmation.id,
      session.id,
      time,
      session.name,
      session.email,
      attendance,
    ].map((val) => String(val)),
  ];

  // For ticketing if attendance is true
  if (attendance === true) {
    // Update database
    const ticket = await prisma.ticket.create({
      data: {
        userId: session.id,
        confirmationId: confirmation.id,
        madeAt: currentTimeWIB,
      },
    });

    // Update ticket sheets
    const ticketSheetRange = "ticket!A:F";
    const valuesTicketSheet = [
      [
        ticket.id,
        confirmation.id,
        session.id,
        time,
        session.name,
        session.email,
      ].map((val) => String(val)),
    ];
    // Update both sheets parallelly
    await Promise.all([
      appendGoogleSheets(
        sheetId,
        ticketSheetRange,
        sheetValueInputOption,
        valuesTicketSheet
      ),
      appendGoogleSheets(
        sheetId,
        confirmedSheetRange,
        sheetValueInputOption,
        valuesConfirmedSheet
      ),
    ]);
  } else {
    // Only update confirmed sheets
    await appendGoogleSheets(
      sheetId,
      confirmedSheetRange,
      sheetValueInputOption,
      valuesConfirmedSheet
    );
  }

  return NextResponse.json(
    { message: "Confirmation updated" },
    { status: 200 }
  );
};
