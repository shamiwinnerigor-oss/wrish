"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);

    const { error } = await signIn(email, password);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    // ✅ REAL SUCCESS FLOW
    router.push("/chat");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-full max-w-md rounded-3xl border border-yellow-500/20 bg-zinc-950 p-8">

        <h1 className="mb-8 text-center text-4xl font-bold text-yellow-500">
          Login
        </h1>

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-yellow-500/10 bg-black p-4 outline-none focus:border-yellow-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl border border-yellow-500/10 bg-black p-4 outline-none focus:border-yellow-500"
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full rounded-2xl bg-yellow-500 py-4 font-semibold text-black transition hover:scale-[1.02]"
          >
            {loading ? "Logging in..." : "Sign In"}
          </button>

        </div>
      </div>
    </main>
  );
}