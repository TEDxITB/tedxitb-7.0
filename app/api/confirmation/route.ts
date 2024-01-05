import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";
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

  const userId = await prisma.user.findUnique({
    where: {
      email: session.email as string,
    },
    select: {
      id: true,
    },
  });

  // If user id can't be found, return an error (this should never happen but just to make sure)
  if (!userId) {
    return NextResponse.json(
      { error: "Internal Server Error", message: "User can't be found" },
      { status: 500 }
    );
  }

  const reqFormData = await req.formData();
  const attendance = reqFormData.get("attendance");

  if (attendance === null) {
    return NextResponse.json(
      { error: "Bad Request", message: "No attendance data provided" },
      { status: 400 }
    );
  }

  if (!(attendance == "true" || attendance === "false")) {
    return NextResponse.json(
      { error: "Bad Request", message: "Must be a boolean value" },
      { status: 400 }
    );
  }

  await prisma.confirmation.update({
    where: {
      userId: userId.id,
    },
    data: {
      attendance: Boolean(attendance),
    },
  });

  return NextResponse.json(
    { message: "Confirmation updated" },
    { status: 200 }
  );
};
