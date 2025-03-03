import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const CtaSection = () => {
  return (
    <section className="mx-10 mt-20 grid items-center gap-5 md:mx-20 md:grid-cols-2">
      <div className="space-y-5">
        <h1 className="text-4xl font-bold">Join AllStarHub Today!</h1>
        <p>
          Sign up now to access exclusive stats, updates, and insights for your
          <br /> favorite teams and players!
        </p>
        <Button variant="default" className="text-white">
          Sign-Up
        </Button>
      </div>
      <Image
        src={"/hero1.webp"}
        alt="hero"
        width={400}
        height={500}
        className="h-96 w-full rounded-2xl object-cover object-top"
        loading="lazy"
      />
    </section>
  );
};

export default CtaSection;
