"use client";
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

const SignButton = ({
  children,
  provider,
}: {
  children: React.ReactNode;
  provider: string;
}) => {
  const onClick = () => {
    signIn(provider);
  };
  return (
    <Button variant="outline" className="w-full" onClick={onClick}>
      {children}
    </Button>
  );
};

export default SignButton;
