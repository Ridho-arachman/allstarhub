import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
// import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub,
    Google,
    // Credentials({
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "Email", type: "email", required: true },
    //     password: { label: "Password", type: "password", required: true },
    //   },
    //   authorize: async (credentials) => {
    //     if (!credentials?.email || !credentials?.password) {
    //       throw new Error("Email dan password harus diisi.");
    //     }

    //     const user = await getUserByEmail(credentials.email);
    //     if (!user) {
    //       throw new Error("User tidak ditemukan");
    //     }

    //     const isValidPassword = await bcrypt.compare(
    //       credentials.password,
    //       user.password,
    //     );

    //     if (!isValidPassword) {
    //       throw new Error("Password salah");
    //     }

    //     if (!user) {
    //       throw new Error("Email atau password salah.");
    //     }

    //     return user;
    //   },
    // }),
  ],
  pages: {
    signIn: "/login",
  },
});
