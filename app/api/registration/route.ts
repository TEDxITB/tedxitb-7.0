import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";
import { registrationSchema } from "@/lib/zod";
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

  // Make sure user hasn't already registered
  const checkRegistration = await prisma.registration.findUnique({
    where: {
      userId: userId.id,
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
  const numericFields = ["age", "participationscale"];

  // Convert specified fields to numbers
  const data = Object.fromEntries(
    Array.from(reqFormData.entries()).map(([key, value]) => [
      key,
      numericFields.includes(key) ? Number(value) : value,
    ])
  );
  // Validate request body
  const zodParseResult = registrationSchema.safeParse(data);

  if (!zodParseResult.success) {
    return NextResponse.json(
      {
        error: "Bad Request",
        message: zodParseResult.error.issues,
      },
      { status: 400 }
    );
  }

  // Search for user id

  const {
    name,
    email,
    phonenumber,
    age,
    job,
    affiliation,
    major,
    socialmedia,
    allergy,
    specialneeds,
    selfdescription,
    photo_url,
    motivation,
    hopes,
    participationscale,
    communityparticipation,
    potentialstory,
  } = data;

  await prisma.registration.create({
    data: {
      name: name as string,
      email: email as string,
      phonenumber: phonenumber as string,
      age: +age,
      job: job as string,
      affiliation: affiliation as string,
      major: major as string | null,
      socialmedia: socialmedia as string,
      allergy: allergy as string | null,
      specialneeds: specialneeds as string,
      selfdescription: selfdescription as string,
      photo_url: photo_url as string,
      motivation: motivation as string,
      hopes: hopes as string,
      participationscale: +participationscale,
      communityparticipation: communityparticipation as string | null,
      potentialstory: potentialstory as string | null,
      userId: userId.id,
    },
  });

  return NextResponse.json(
    { message: "Registration submitted succsessfully" },
    { status: 201 }
  );
};
