import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
// import { signIn } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
// import { Button } from "@/components/ui/button";
import SignButton from "@/components/SignButton";

export default function LoginPage() {
  return (
    <>
      <Link href="/" className="flex items-center justify-center">
        <Image src={"/logo.png"} alt="logo" width={100} height={100} />
      </Link>
      <Card className="mx-auto mt-2 max-w-md p-6 shadow-2xl">
        <CardHeader>
          <h2 className="text-center text-3xl font-bold">Login</h2>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <SignButton />
          <hr className="w-full border-black" />
          <div className="grid grid-cols-2 gap-2"></div>
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-500">
          <p className="text-base font-medium">
            Belum punya akun?{" "}
            <Link
              href="/register"
              className="ml-1 text-blue-500 hover:underline"
            >
              Daftar
            </Link>
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
