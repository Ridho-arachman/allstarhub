"use server";
import { prisma } from "@/lib/prisma";

export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}

export async function createUser(value: {
  email: string;
  password: string;
  username: string;
}) {
  return prisma.user.create({ data: value });
}
