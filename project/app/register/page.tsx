"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth";

export default function RegisterPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    // VALIDATION
    if (!username || !email || !password || !rePassword) {
      alert("Fill all fields");
      return;
    }

    if (password !== rePassword) {
      alert("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    // SIGN UP
    const { error } = await signUp(
      email,
      password,
      username
    );

    setLoading(false);

    // ERROR
    if (error) {
      alert(error.message);
      return;
    }

    // SUCCESS
    alert("Account created successfully");

    router.push("/");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-4 py-8">
      
      {/* TOP LIGHT */}
      <div className="absolute top-0 left-0 w-full h-44 bg-gradient-to-b from-sky-200 to-transparent" />

      {/* GLOW EFFECTS */}
      <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-blue-500 blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-blue-500 blur-3xl opacity-40" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-center justify-center">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-[420px] min-h-[500px] rounded-[50px] border border-white/20 bg-gradient-to-b from-slate-300/80 via-blue-500/60 to-sky-300/70 backdrop-blur-md p-8 lg:p-10 flex flex-col justify-center shadow-2xl">

          <h1
            className="text-5xl lg:text-7xl text-white mb-8 break-words leading-none"
            style={{ fontFamily: "cursive" }}
          >
            WRISH
          </h1>

          <p className="text-white text-lg lg:text-2xl font-mono leading-relaxed uppercase max-w-[300px]">
            Join Others In The Future
            <br />
            Of Business Communication
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative w-full lg:w-[520px] min-h-[500px] rounded-[30px] overflow-hidden border-2 border-purple-500 shadow-2xl">

          {/* BACKGROUND IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]" />

          {/* FORM */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 lg:px-12 py-10">

            <h2
              className="text-4xl lg:text-5xl text-white mb-8 text-center"
              style={{ fontFamily: "cursive" }}
            >
              Sign up
            </h2>

            {/* USERNAME */}
            <div className="w-full mb-4">
              <label className="block text-white text-sm mb-2 uppercase">
                Name / Username
              </label>

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-12 rounded-xl bg-white/40 border border-white/20 px-4 text-white placeholder-white/70 outline-none backdrop-blur-md"
              />
            </div>

            {/* EMAIL */}
            <div className="w-full mb-4">
              <label className="block text-white text-sm mb-2 uppercase">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 rounded-xl bg-white/40 border border-white/20 px-4 text-white placeholder-white/70 outline-none backdrop-blur-md"
              />
            </div>

            {/* PASSWORD */}
            <div className="w-full mb-4">
              <label className="block text-white text-sm mb-2 uppercase">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 rounded-xl bg-white/40 border border-white/20 px-4 text-white placeholder-white/70 outline-none backdrop-blur-md"
              />
            </div>

            {/* RE ENTER PASSWORD */}
            <div className="w-full mb-5">
              <label className="block text-white text-sm mb-2 uppercase leading-snug">
                Re-enter Your Password
              </label>

              <input
                type="password"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                className="w-full h-12 rounded-xl bg-white/40 border border-white/20 px-4 text-white placeholder-white/70 outline-none backdrop-blur-md"
              />
            </div>

            {/* TEXT */}
            <p className="text-white text-xs mb-6 uppercase text-center">
              Have Account
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center justify-center gap-4">

              <button
                onClick={handleRegister}
                disabled={loading}
                className="px-8 py-2 rounded-xl bg-gradient-to-b from-sky-300 to-blue-700 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
              >
                {loading ? "Creating..." : "SIGN UP"}
              </button>

              <span className="text-white font-bold text-xl">
                OR
              </span>

              <button
                onClick={() => router.push("/")}
                className="px-8 py-2 rounded-xl bg-gradient-to-b from-sky-300 to-blue-700 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
              >
                LOGIN
              </button>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}