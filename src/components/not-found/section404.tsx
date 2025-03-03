"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Section404() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-black to-blue-900 p-6 text-center text-white">
      <h1 className="text-8xl font-extrabold text-yellow-500 drop-shadow-lg">
        404
      </h1>
      <p className="mt-4 text-xl font-semibold">You missed your shot!</p>
      <p className="text-lg opacity-80">This page is out of bounds.</p>
      <Image
        src="/logo.png"
        alt="NBA Logo"
        width={100}
        height={100}
        className="mt-6 w-48 opacity-90"
      />
      <Button
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-lg text-white hover:bg-blue-500"
        onClick={() => redirect("/")}
      >
        Return to Home Court
      </Button>
    </div>
  );
}
