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
    if (!email || !password) {
      alert("Fill all fields");
      return;
    }

    setLoading(true);

    const { error } = await signIn(email, password);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/chat");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-4">
      {/* TOP GRADIENT */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-sky-200 to-transparent" />

      {/* DECORATION BLOBS */}
      <div className="absolute top-0 right-0 w-52 h-52 rounded-full bg-blue-500 blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-0 w-52 h-52 rounded-full bg-blue-500 blur-3xl opacity-40" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-center justify-center">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-[420px] h-[500px] rounded-[50px] border border-white/20 bg-gradient-to-b from-blue-400/70 via-blue-700/40 to-black backdrop-blur-md p-10 flex flex-col justify-center shadow-2xl">
          <h1
            className="text-7xl text-white mb-10"
            style={{ fontFamily: "cursive" }}
          >
            WRISH
          </h1>

          <p className="text-white text-2xl font-mono leading-relaxed uppercase">
            Welcome Back To The Future
            <br />
            Of Business Communication
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative w-full lg:w-[500px] h-[500px] rounded-[30px] overflow-hidden shadow-2xl">
          {/* BACKGROUND IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

          {/* LOGIN FORM */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-10">
            <h2
              className="text-5xl text-white mb-10"
              style={{ fontFamily: "cursive" }}
            >
              Login
            </h2>

            {/* EMAIL */}
            <div className="w-full mb-6">
              <label className="block text-white text-sm mb-2 uppercase">
                Email
              </label>

              <input
                type="email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 rounded-xl bg-white/40 border border-white/20 px-4 text-white outline-none backdrop-blur-md"
              />
            </div>

            {/* PASSWORD */}
            <div className="w-full mb-4">
              <label className="block text-white text-sm mb-2 uppercase">
                Password
              </label>

              <input
                type="password"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 rounded-xl bg-white/40 border border-white/20 px-4 text-white outline-none backdrop-blur-md"
              />
            </div>

            <p className="text-white text-xs mb-6 uppercase">
              Don’t Have Account
            </p>

            {/* BUTTONS */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleLogin}
                disabled={loading}
                className="px-10 py-2 rounded-xl bg-gradient-to-b from-sky-300 to-blue-700 text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                {loading ? "Loading..." : "LOGIN"}
              </button>

              <span className="text-white font-bold">OR</span>

              <button
                onClick={() => router.push("/register")}
                className="px-10 py-2 rounded-xl bg-gradient-to-b from-sky-300 to-blue-700 text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}