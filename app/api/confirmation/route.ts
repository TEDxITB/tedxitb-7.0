import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";
import { confirmationSchema } from "@/lib/zod";
import { google } from "googleapis";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const credentials = {
  client_email: process.env.GOOGLE_CLIENT_EMAIL as string,
  private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n") as string,
};

export const PUT = async (req: NextRequest) => {
  try {
    // Validate user session
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized", message: "No Access" },
        { status: 401 }
      );
    }

    // Validate Date For confirmation
    const startRange = new Date("2024-02-20T10:00:00-07:00");
    const endRange = new Date("2024-02-24T23:59:59-07:00");
    const currentTime = new Date();

    if (currentTime < startRange) {
      return NextResponse.json(
        {
          error: "Bad Request",
          message: "Attendance confirmation is not open yet",
        },
        { status: 400 }
      );
    }
    if (currentTime > endRange) {
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
    const attendance = Boolean(reqFormData.get("attendance"));
    const zodParseResult = confirmationSchema.safeParse({ attendance });

    if (!zodParseResult.success) {
      return NextResponse.json(
        { error: "Bad Request", message: zodParseResult.error },
        { status: 400 }
      );
    }

    //For confirmation
    await prisma.confirmation.update({
      where: {
        userId: session.id,
      },
      data: {
        attendance: attendance,
      },
    });

    //For Ticketing
    if (attendance === true) {
      await prisma.ticket.create({
        data: {
          userId: session.id,
        },
      });
    }

    // Connect to Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.CONFIRMATION_SHEET_ID as string;
    const range = "A1:C1";

    const user = await prisma.registration.findUnique({
      where: {
        userId: session.id,
      },
    });

    const values = [[user?.name, session.email, attendance]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    return NextResponse.json(
      { message: "Confirmation updated" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error", message: "Something went wrong" },
      { status: 500 }
    );
  }
};
