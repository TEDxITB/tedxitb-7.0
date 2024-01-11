import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";
import { regisSchema } from "@/lib/zod";
import { google } from "googleapis";
import { getServerSession } from "next-auth";
import { type NextRequest, NextResponse } from "next/server";

// Set up Google Sheets API credentials
const credentials = {
  client_email: process.env.GOOGLE_CLIENT_EMAIL as string,
  private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n") as string,
};

export const POST = async (req: NextRequest) => {
  try {
    // Validate user session
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized", message: "No Accsess" },
        { status: 401 }
      );
    }

    // Validate Date For registration
    const startRange = new Date("2024-02-03T10:00:00-07:00");
    const endRange = new Date("2024-02-17T23:59:59-07:00");
    const currentTime = new Date();

    if (currentTime < startRange) {
      return NextResponse.json(
        { error: "Bad Request", message: "Registration is not open yet" },
        { status: 400 }
      );
    }
    if (currentTime > endRange) {
      return NextResponse.json(
        { error: "Bad Request", message: "Registration is closed" },
        { status: 400 }
      );
    }

    // Make sure user hasn't already registered
    const checkRegistration = await prisma.registration.findUnique({
      where: {
        userId: session.id,
      },
    });

    // If user has already registered, return an error
    if (checkRegistration) {
      return NextResponse.json(
        { error: "Bad Request", message: "Registration already made" },
        { status: 400 }
      );
    }

    const reqFormData = await req.formData();
    // Create a mapping of fields that should be converted to numbers
    const numericFields = ["age", "scale"];

    // Convert specified fields to numbers
    const data = Object.fromEntries(
      Array.from(reqFormData.entries()).map(([key, value]) => [
        key,
        numericFields.includes(key) ? Number(value) : value,
      ])
    );
    // Validate request body
    const zodParseResult = regisSchema.safeParse(data);
    if (!zodParseResult.success) {
      return NextResponse.json(
        {
          error: "Bad Request",
          message: zodParseResult.error.issues,
        },
        { status: 400 }
      );
    }

    const {
      name,
      phone,
      age,
      address,
      job,
      instance,
      faculty,
      social,
      allergy,
      q1,
      q2,
      profile,
      q3,
      q4,
      scale,
      q5,
      q6,
    } = data;

    await prisma.registration.create({
      data: {
        name: name as string,
        phone: phone as string,
        age: age as number,
        address: address as string,
        job: job as string,
        instance: instance as string,
        faculty: faculty as string,
        social: social as string,
        allergy: allergy as string,
        q1: q1 as string,
        q2: q2 as string,
        profile: profile as string,
        q3: q3 as string,
        q4: q4 as string,
        participationscale: scale as number,
        q5: q5 as string,
        q6: q6 as string,
        userId: session.id,
      },
    });

    // Connect to Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.REGISTRATION_SHEET_ID as string;
    const range = "A1:Q1";

    // Prepare the data to be written to the spreadsheet
    const values = [
      [
        name,
        phone,
        age,
        address,
        job,
        instance,
        faculty,
        social,
        allergy,
        q1,
        q2,
        profile,
        q3,
        q4,
        scale,
        q5,
        q6,
      ],
    ];

    // Write the data to the spreadsheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    return NextResponse.json(
      { message: "Registration submitted successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
};
