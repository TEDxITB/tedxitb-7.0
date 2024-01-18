import { prisma } from "@/lib/prisma";
import "server-only";

export async function isUserRegistered(userId: string) {
  const checkRegistration = await prisma.registration.findUnique({
    where: {
      userId: userId,
    },
  });

  if (checkRegistration) {
    return true;
  } else {
    return false;
  }
}

export async function isUserPassed(userId: string) {
  const checkPassed = await prisma.confirmation.findUnique({
    where: {
      userId: userId,
    },
  });

  if (checkPassed) {
    return true;
  } else {
    return false;
  }
}
export async function getUserConfirmation(userId: string) {
  const checkConfirmation = await prisma.confirmation.findUnique({
    where: {
      userId: userId,
    },
  });

  if (!checkConfirmation) {
    return null;
  } else {
    const { attendance } = checkConfirmation;
    return attendance;
  }
}

export async function getUserTicket(userId: string) {
  const checkTicket = await prisma.ticket.findUnique({
    where: {
      userId: userId,
    },
  });

  if (!checkTicket) {
    return null;
  } else {
    const { id } = checkTicket;
    return id;
  }
}
