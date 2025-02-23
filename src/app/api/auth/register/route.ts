import {} from "@/components/regist-form";
import { prisma } from "@/lib/prisma";
import { formRegister } from "@/validation/formregister";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

// interface RegisterRequestBody {
//   username: string;
//   email: string;
//   password: string;
// }

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, username, password } = await formRegister.parse(body);

    const user = await prisma.user.create({
      data: {
        email,
        username,
        password,
      },
    });

    return NextResponse.json(
      { message: `User ${user.username} created successfully`, status: 201 },
      { status: 201 },
    );
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { error: err.issues, status: 400 },
        { status: 400 },
      );
    } else if (err instanceof PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        return NextResponse.json(
          { error: "User sudah ada", status: 400 },
          { status: 400 },
        );
      }
    } else {
      return NextResponse.json({ error: err, status: 500 }, { status: 500 });
    }
  }
}
