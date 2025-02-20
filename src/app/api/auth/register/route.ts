import { createUser } from "@/db/user";
import { hashPassword } from "@/lib/password";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// Tipe untuk body request
interface RegisterRequestBody {
  username: string;
  email: string;
  password: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, email, password } = body as RegisterRequestBody;

    // Validasi input
    if (!email || !password || !username) {
      return NextResponse.json(
        {
          message: "Bad request",
          error: "Pastikan semua field terisi",
        },
        { status: 400 },
      );
    }

    if (
      email.trim() === "" ||
      password.trim() === "" ||
      username.trim() === ""
    ) {
      return NextResponse.json(
        {
          message: "Bad request",
          error: "Jangan mengisi dengan spasi semua",
        },
        { status: 400 },
      );
    }

    // Hash password (tambahkan await jika hashPassword asinkronus)
    const hashedPassword = await hashPassword({ password }); // Asumsi asinkronus
    await createUser({ email, password: hashedPassword, username });

    return NextResponse.json(
      {
        message: "success",
        data: { username },
      },
      { status: 201 },
    );
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return NextResponse.json(
          {
            message: "Bad request",
            error:
              "Username atau email sudah terdaftar. Silakan coba yang lain.",
          },
          { status: 400 },
        );
      }
    }
    // Penanganan error default
    return NextResponse.json(
      {
        message: "Internal server error",
        error:
          error instanceof Error ? error.message : "Terjadi kesalahan server",
      },
      { status: 500 },
    );
  }
}
