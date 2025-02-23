import Link from "next/link";
import Image from "next/image";
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <>
      <Link href="/" className="flex items-center justify-center">
        <Image src={"/logo.png"} alt="logo" width={100} height={100} />
      </Link>
      <LoginForm />
    </>
  );
}
