import { authOptions } from "@/lib/auth-options";
import { appendGoogleSheets } from "@/lib/google-sheets";
import PostHogClient from "@/lib/posthog-server";
import { prisma } from "@/lib/prisma";
import {
  startComingSoonAnnouncementDate,
  startRegisDate,
} from "@/lib/special-date";
import { regisSchema } from "@/lib/zod";
import { getServerSession } from "next-auth";
import { type NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  // Validate user session
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized", message: "No Accsess" },
      { status: 401 }
    );
  }

  // Validate Date For registration
  const currentTime = Date.now();

  if (currentTime < startRegisDate) {
    return NextResponse.json(
      { error: "Bad Request", message: "Registration is not open yet" },
      { status: 400 }
    );
  }
  if (currentTime > startComingSoonAnnouncementDate) {
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
    linkedin,
    instagram,
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

  // Create registration table
  const createRegistrationQuery = prisma.registration.create({
    data: {
      name: name as string,
      phone: phone as string,
      age: age as number,
      address: address as string,
      job: job as string,
      instance: instance as string,
      faculty: faculty as string,
      linkedin: linkedin as string,
      instagram: instagram as string,
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

  // Update user table
  const updateUserQuery = prisma.user.update({
    where: {
      id: session.id,
    },
    data: {
      name: name as string,
    },
  });

  // Execute both queries in parallel and get regisration id
  const [registrationResult, _] = await Promise.all([
    createRegistrationQuery,
    updateUserQuery,
  ]);

  // Posthog
  const posthogClient = PostHogClient();
  posthogClient.capture({
    distinctId: session.id,
    event: "user registered main event",
  });

  // Update google sheets
  const sheetId = process.env.GOOGLE_SHEETS_ID as string;
  const sheetRange = "registration!A:U";
  const sheetValueInputOption = "RAW";
  const values = [
    [
      registrationResult.id,
      session.id,
      name,
      session.email,
      phone,
      age,
      address,
      job,
      instance,
      faculty,
      linkedin,
      instagram,
      allergy,
      q1,
      q2,
      profile,
      q3,
      q4,
      scale,
      q5,
      q6,
    ].map((value) => String(value)),
  ];
  await appendGoogleSheets(sheetId, sheetRange, sheetValueInputOption, values);

  return NextResponse.json(
    { message: "Registration submitted successfully" },
    { status: 201 }
  );
};
