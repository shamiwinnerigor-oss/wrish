"use client";

import Sidebar from "../src/components/Sidebar";
import { Bot, BrainCircuit, Save, ToggleRight } from "lucide-react";

export default function AIPage() {
  return (
    <main className="flex min-h-screen bg-black text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <section className="w-full md:ml-24 p-6">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold text-yellow-500">
              Business AI
            </h1>

            <p className="mt-2 text-gray-400">
              Train and manage your AI business assistant
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-2xl bg-yellow-500 px-5 py-3 font-semibold text-black transition hover:scale-105">
            <Save size={18} />
            Save AI
          </button>
        </div>

        {/* Grid */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* Main Training */}
          <div className="lg:col-span-2 space-y-6">

            {/* Business Description */}
            <div className="rounded-3xl border border-yellow-500/10 bg-zinc-950 p-6">

              <div className="mb-4 flex items-center gap-3">
                <BrainCircuit className="text-yellow-500" />
                <h2 className="text-xl font-semibold">
                  Business Knowledge
                </h2>
              </div>

              <textarea
                placeholder="Describe your business, products, services, pricing, policies..."
                className="h-48 w-full rounded-2xl border border-yellow-500/10 bg-black p-4 outline-none focus:border-yellow-500"
              />
            </div>

            {/* FAQ Training */}
            <div className="rounded-3xl border border-yellow-500/10 bg-zinc-950 p-6">

              <div className="mb-4 flex items-center gap-3">
                <Bot className="text-yellow-500" />
                <h2 className="text-xl font-semibold">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">

                <input
                  placeholder="Question"
                  className="w-full rounded-2xl border border-yellow-500/10 bg-black p-4 outline-none"
                />

                <textarea
                  placeholder="AI Answer"
                  className="w-full rounded-2xl border border-yellow-500/10 bg-black p-4 outline-none"
                />

              </div>
            </div>

          </div>

          {/* Right Side */}
          <div className="space-y-6">

            {/* AI Status */}
            <div className="rounded-3xl border border-yellow-500/10 bg-zinc-950 p-6">

              <h2 className="mb-4 text-xl font-semibold text-yellow-500">
                AI Status
              </h2>

              <div className="space-y-4">

                <div className="flex items-center justify-between rounded-2xl bg-black p-4">
                  <span>AI Assistant</span>

                  <ToggleRight
                    className="text-green-500"
                    size={36}
                  />
                </div>

                <div className="rounded-2xl bg-black p-4">
                  <p className="text-sm text-gray-400">
                    Confidence Level
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-yellow-500">
                    87%
                  </h3>
                </div>

              </div>
            </div>

            {/* AI Suggestions */}
            <div className="rounded-3xl border border-yellow-500/10 bg-zinc-950 p-6">

              <h2 className="mb-4 text-xl font-semibold text-yellow-500">
                AI Suggestions
              </h2>

              <div className="space-y-4 text-sm text-gray-300">

                <div className="rounded-2xl bg-black p-4">
                  Customers frequently ask about delivery times.
                </div>

                <div className="rounded-2xl bg-black p-4">
                  Add pricing details to improve AI accuracy.
                </div>

                <div className="rounded-2xl bg-black p-4">
                  Your AI response quality improved this week.
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}