import { RegisterForm } from "@/components/regist-form";
import Image from "next/image";
import Link from "next/link";
// import { motion } from "framer-motion";

const page = () => {
  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 100 }}
        transition={{ duration: 1 }}
        className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
      /> */}
      <Link href="/" className="flex items-center justify-center">
        <Image src={"/logo.png"} alt="logo" width={100} height={100} />
      </Link>
      <RegisterForm />
    </>
  );
};

export default page;
