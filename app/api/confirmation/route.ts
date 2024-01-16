import { authOptions } from "@/lib/auth-options";
import { appendGoogleSheets } from "@/lib/google-sheets";
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
    },
  });

  // General sheets data
  const sheetId = process.env.GOOGLE_SHEETS_ID as string;
  const sheetValueInputOption = "RAW";

  // Update confirmed sheets
  const confirmedSheetRange = "confirmed!A:E";
  const valuesConfirmedSheet = [
    [confirmation.id, session.id, session.name, session.email, attendance].map(
      (val) => String(val)
    ),
  ];
  await appendGoogleSheets(
    sheetId,
    confirmedSheetRange,
    sheetValueInputOption,
    valuesConfirmedSheet
  );

  // For ticketing if attendance is true
  if (attendance === true) {
    // Update database
    const ticket = await prisma.ticket.create({
      data: {
        userId: session.id,
        confirmationId: confirmation.id,
      },
    });

    // Update ticket sheets
    const ticketSheetRange = "ticket!A:E";
    const valuesTicketSheet = [
      [ticket.id, confirmation.id, session.id, session.name, session.email].map(
        (val) => String(val)
      ),
    ];
    await appendGoogleSheets(
      sheetId,
      ticketSheetRange,
      sheetValueInputOption,
      valuesTicketSheet
    );
  }

  return NextResponse.json(
    { message: "Confirmation updated" },
    { status: 200 }
  );
};
