"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00ffff22,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#0066ff22,transparent_60%)]" />

      {/* Floating Grid */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Container */}
      <div className="relative z-10 flex w-full max-w-5xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-2xl shadow-2xl">

        {/* Left Panel */}
        <div className="hidden w-1/2 items-center justify-center bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-10 md:flex">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-cyan-300">
              BizLink AI
            </h1>

            <p className="mt-4 text-gray-400">
              AI-powered business ecosystem for the future
            </p>

            <div className="mt-8 text-sm text-cyan-200/70">
              Connect • Automate • Grow
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full p-10 md:w-1/2">

          {/* Toggle */}
          <div className="mb-6 flex gap-4">
            <button
              onClick={() => setMode("login")}
              className={`px-4 py-2 rounded-full text-sm transition ${
                mode === "login"
                  ? "bg-cyan-500 text-black"
                  : "text-gray-400"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => setMode("register")}
              className={`px-4 py-2 rounded-full text-sm transition ${
                mode === "register"
                  ? "bg-cyan-500 text-black"
                  : "text-gray-400"
              }`}
            >
              Register
            </button>
          </div>

          {/* Forms */}
          <AnimatePresence mode="wait">

            {mode === "login" ? (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-cyan-300">
                  Welcome Back
                </h2>

                <input
                  placeholder="Username"
                  className="w-full rounded-xl border border-cyan-500/20 bg-black/40 p-3 outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_#00ffff55]"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-xl border border-cyan-500/20 bg-black/40 p-3 outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_#00ffff55]"
                />

                <button className="w-full rounded-xl bg-cyan-500 py-3 font-bold text-black hover:scale-[1.03] hover:shadow-[0_0_20px_#00ffff] transition">
                  Login
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="register"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-cyan-300">
                  Create Account
                </h2>

                <input
                  placeholder="Username"
                  className="w-full rounded-xl border border-cyan-500/20 bg-black/40 p-3 outline-none focus:border-cyan-400"
                />

                <input
                  placeholder="Email"
                  className="w-full rounded-xl border border-cyan-500/20 bg-black/40 p-3 outline-none focus:border-cyan-400"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-xl border border-cyan-500/20 bg-black/40 p-3 outline-none focus:border-cyan-400"
                />

                <button className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 font-bold text-black hover:scale-[1.03] hover:shadow-[0_0_25px_#00ffff] transition">
                  Register
                </button>
              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </div>
    </main>
  );
}