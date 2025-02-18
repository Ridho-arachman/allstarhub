import { createUser } from "@/db/user";
import { hashPassword } from "@/lib/hashPassword";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { username, email, password } = await request.json();

  if (!email || !password || !username) {
    return NextResponse.json(
      {
        message: "Bad request",
        status: "400",
        body: "Pastikan semua field terisi",
      },
      { status: 400 },
    );
  }

  if (email.trim() === "" || password.trim() === "" || username.trim() === "") {
    return NextResponse.json(
      {
        message: "Bad request",
        status: "400",
        body: "Jangan Mengisi dengan spasi semua",
      },
      { status: 400 },
    );
  }

  try {
    const hashedPassword = hashPassword(password);
    await createUser({ email, password: hashedPassword, username });

    return NextResponse.json({
      status: 201,
      message: "success",
      data: { username },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Menangani error Prisma khusus seperti P2002 (constraint violation)
      if (error.code === "P2002") {
        return NextResponse.json(
          {
            message: "Bad request",
            status: "400",
            body: `Username atau email sudah terdaftar. Silakan coba yang lain.`,
          },
          { status: 400 },
        );
      }
    }
  }
}
