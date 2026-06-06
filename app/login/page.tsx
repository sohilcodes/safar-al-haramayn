"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/admin");
  }

  return (
    <main className="flex items-center justify-center h-screen">

      <div className="w-full max-w-md border p-6 rounded-xl">

        <h1 className="text-2xl font-bold mb-6">
          Admin Login
        </h1>

        <input
          placeholder="Email"
          className="border p-3 w-full mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          className="border p-3 w-full mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-green-700 text-white w-full py-3"
        >
          Login
        </button>

      </div>

    </main>
  );
}
