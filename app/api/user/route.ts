import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import * as z from "zod";

// input validation schema

const userSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = userSchema.parse(body);

    // check email exists
    const existingEmail = await prisma.user.findUnique({
      where: { email: email },
    });
    if (existingEmail) {
      return NextResponse.json(
        {
          user: null,
          message: "Email already registered",
        },
        { status: 409 }
      );
    }

    //check username exists
    const existingUsername = await prisma.user.findUnique({
      where: { username: username },
    });
    if (existingUsername) {
      return NextResponse.json(
        {
          user: null,
          message: "Username already registered",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      {
        user: rest,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
