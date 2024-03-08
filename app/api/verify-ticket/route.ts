import { authOptions } from "@/lib/auth-options";
import { AUTHORIZED_VERIFY_EMAIL } from "@/lib/authorized-verify-email";
import { appendGoogleSheets } from "@/lib/google-sheets";
import { prisma } from "@/lib/prisma";
import { ticketIdSchema } from "@/lib/zod";
import { getServerSession } from "next-auth";
import { type NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  // Authorization
  const session = await getServerSession(authOptions);
  if (!session || !AUTHORIZED_VERIFY_EMAIL.includes(session.email)) {
    return NextResponse.json(
      { error: "Unauthorized Request" },
      { status: 401 }
    );
  }

  // Get ticket ID from formData
  const formData = await req.formData();

  // Parse request
  const rawTicketId = formData.get("ticketId");
  const zodParse = ticketIdSchema.safeParse(rawTicketId);
  if (!zodParse.success) {
    return NextResponse.json(
      { error: zodParse.error.message },
      { status: 400 }
    );
  }
  const ticketId = zodParse.data;

  // Check find ticket id
  const ticket = await prisma.ticket.findUnique({
    where: { id: ticketId },
    include: { checkIn: true, user: true },
  });

  // Ticket not found
  if (!ticket) {
    return NextResponse.json(
      { error: "Invalid ticket QR Code" },
      { status: 400 }
    );
  }

  // Ticket already scanned
  if (ticket.checkIn) {
    return NextResponse.json(
      { error: "QR Code already scanned" },
      { status: 400 }
    );
  }

  // Ticket is valid & Not scanned
  const checkIn = await prisma.checkIn.create({
    data: {
      ticketId: ticketId,
      verifiedBy: session.email,
    },
  });

  // Update to google sheets
  const sheetId = process.env.GOOGLE_SHEETS_ID as string;
  const currentTime = Date.now();
  const wibOffset = 7 * 60 * 60 * 1000; // WIB is UTC+7
  const currentTimeWIB = new Date(currentTime + wibOffset);
  const time = currentTimeWIB.toLocaleString("en-US", {
    hour12: false,
    timeZone: "UTC", // Replace with your desired timezone
  });
  const sheetRange = "checkIn!A:F";
  const sheetValueInputOption = "RAW";
  const values = [
    [
      checkIn.id,
      ticket.user.name,
      ticket.user.email,
      ticket.id,
      session.email,
      time,
    ].map((value) => String(value)),
  ];
  await appendGoogleSheets(sheetId, sheetRange, sheetValueInputOption, values);

  return NextResponse.json(
    {
      message: "Success Verifying Ticket",
      userId: ticket.user.id,
      name: ticket.user.name,
      email: ticket.user.email,
      ticketId: ticket.id,
    },
    { status: 200 }
  );
};
