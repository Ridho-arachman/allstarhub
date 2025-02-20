"use client"; // Wajib karena pakai hooks client-side

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // Jangan redirect otomatis
    });
    if (result?.error) {
      console.log("Login failed:", result.error);
    } else {
      window.location.href = "/"; // Redirect manual ke homepage
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Sign in with Credentials</button>
      </form>
      <button onClick={() => signIn("github", { callbackUrl: "/" })}>
        Sign in with Google
      </button>
    </div>
  );
}
