import { authOptions } from "@/lib/auth-options";
import { appendGoogleSheets } from "@/lib/google-sheets";
import { prisma } from "@/lib/prisma";
import { isUserVoted } from "@/lib/query";
import { startVotingDate, endVotingDate } from "@/lib/special-date";
import { voteSchema } from "@/lib/zod";
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

  // Validate Date For Voting
  const currentTime = Date.now();
  const wibOffset = 7 * 60 * 60 * 1000; // WIB is UTC+7
  const currentTimeWIB = new Date(currentTime + wibOffset);

  if (currentTime < startVotingDate) {
    return NextResponse.json(
      { error: "Bad Request", message: "Voting is not open yet" },
      { status: 400 }
    );
  }
  if (currentTime > endVotingDate) {
    return NextResponse.json(
      { error: "Bad Request", message: "Voting is closed" },
      { status: 400 }
    );
  }

  // Make sure user hasn't already voted
  const check = await isUserVoted(session.id);
  // If user has already voted, return an error
  if (check) {
    return NextResponse.json(
      { error: "Bad Request", message: "Vote already made" },
      { status: 400 }
    );
  }

  const reqFormData = await req.formData();
  const rawCandidateId = reqFormData.get("candidateId");
  const zodParseResult = voteSchema.safeParse(rawCandidateId);
  if (!zodParseResult.success) {
    return NextResponse.json(
      {
        error: "Bad Request",
        message: zodParseResult.error.issues,
      },
      { status: 400 }
    );
  }

  const candidateId = zodParseResult.data;
  // Create Voting table
  const createVotingQuery = prisma.vote.create({
    data: {
      createdAt: currentTimeWIB,
      userId: session.id,
      candidateId: candidateId as string,
    },
  });

  // Update Candidate table
  const updateCandidateQuery = prisma.candidate.update({
    where: {
      id: candidateId as string,
    },
    data: {
      score: {
        increment: 1,
      },
    },
  });

  // Run both queries
  const [voteResult, candidate] = await Promise.all([
    createVotingQuery,
    updateCandidateQuery,
  ]);

  const { name } = candidate;
  const time = currentTimeWIB.toLocaleString("en-US", {
    hour12: false,
    timeZone: "UTC", // Replace with your desired timezone
  });
  const sheetId = process.env.GOOGLE_SHEETS_ID as string;
  const sheetRange = "votes!A:D";
  const sheetValueInputOption = "RAW";
  const values = [[voteResult.id, session.email, name, time]];

  await appendGoogleSheets(sheetId, sheetRange, sheetValueInputOption, values);

  return NextResponse.json(
    { message: "Vote submitted successfully" },
    { status: 201 }
  );
};
