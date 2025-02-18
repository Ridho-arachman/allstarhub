import { RegisterForm } from "@/components/forms/RegisterForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Link href="/" className="flex items-center justify-center">
        <Image src={"/logo.png"} alt="logo" width={100} height={100} />
      </Link>
      <Card className="mx-auto mt-2 max-w-md p-6 shadow-2xl">
        <CardHeader>
          <h2 className="text-center text-3xl font-bold">Register</h2>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-500">
          <p className="text-base font-medium">
            Sudah punya akun?{" "}
            <Link href="/login" className="ml-1 text-blue-500 hover:underline">
              Kembali
            </Link>
          </p>
        </CardFooter>
      </Card>
    </>
  );
};

export default page;
