import 'server-only'

import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function isUserRegistered() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.id) {
      throw new Error("Invalid session");
    }

    const checkRegistration = await prisma.registration.findUnique({
      where: {
        userId: session.id,
      },
    });

    if (checkRegistration) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error checking user registration: ", error);
    return false;
  }
}

export async function isUserPassed() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.id) {
      throw new Error("Invalid session");
    }
    const checkPassed = await prisma.confirmation.findUnique({
      where: {
        userId: session.id,
      },
    });

    if (checkPassed) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error checking user status : ", error);
    return false;
  }
}
export async function getUserConfirmation() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.id) {
      throw new Error("Invalid session");
    }

    const checkConfirmation = await prisma.confirmation.findUnique({
      where: {
        userId: session.id,
      },
    });

    if (!checkConfirmation) {
      return null;
    } else {
      return checkConfirmation;
    }
  } catch (error) {
    console.error("Error getting user confirmation: ", error);
    return false;
  }
}
