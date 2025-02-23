import { RegisterForm } from "@/components/regist-form";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Link href="/" className="flex items-center justify-center">
        <Image src={"/logo.png"} alt="logo" width={100} height={100} />
      </Link>
      <RegisterForm />
    </>
  );
};

export default page;
