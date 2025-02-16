import { LoginForm } from "@/components/forms/LoginForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

const page = () => {
  return (
    <Card className="mx-auto mt-10 max-w-md p-6">
      <CardHeader>
        <h2 className="text-center text-xl font-bold">Register</h2>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter className="text-center text-sm text-gray-500">
        Belum punya akun?{" "}
        <Link href="/register" className="ml-1 text-blue-500 hover:underline">
          Daftar
        </Link>
      </CardFooter>
    </Card>
  );
};

export default page;
