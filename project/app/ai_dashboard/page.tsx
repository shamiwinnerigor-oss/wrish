"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AIDashboard() {

  const [greeting, setGreeting] = useState("");
  const [pricing, setPricing] = useState("");
  const [delivery, setDelivery] = useState("");
  const [support, setSupport] = useState("");
  const [jobs, setJobs] = useState("");

  // LOAD MEMORY
  useEffect(() => {
    loadMemory();
  }, []);

  async function loadMemory() {
    const { data } = await supabase
      .from("business_memory")
      .select("*");

    if (data) {
      data.forEach((item) => {
        if (item.key === "greeting") setGreeting(item.value);
        if (item.key === "pricing") setPricing(item.value);
        if (item.key === "delivery") setDelivery(item.value);
        if (item.key === "support") setSupport(item.value);
        if (item.key === "jobs") setJobs(item.value);
      });
    }
  }

  // SAVE MEMORY
  async function saveMemory(key: string, value: string) {

    const { data: existing } = await supabase
      .from("business_memory")
      .select("*")
      .eq("key", key)
      .single();

    if (existing) {
      await supabase
        .from("business_memory")
        .update({ value })
        .eq("key", key);
    } else {
      await supabase
        .from("business_memory")
        .insert({
          key,
          value,
          business_id: "default-business",
        });
    }

    alert(`${key} updated successfully`);
  }

  return (
    <main className="min-h-screen bg-black p-8 text-white">

      <div className="mx-auto max-w-3xl">

        <h1 className="mb-8 text-4xl font-bold text-yellow-500">
          AI Business Dashboard
        </h1>

        <div className="space-y-6">

          {/* Greeting */}
          <div className="rounded-3xl border border-yellow-500/10 bg-zinc-950 p-6">
            <h2 className="mb-3 text-xl font-semibold">Greeting Message</h2>

            <textarea
              value={greeting}
              onChange={(e) => setGreeting(e.target.value)}
              className="min-h-[100px] w-full rounded-2xl bg-black p-4 outline-none"
            />

            <button
              onClick={() => saveMemory("greeting", greeting)}
              className="mt-4 rounded-2xl bg-yellow-500 px-6 py-3 text-black"
            >
              Save Greeting
            </button>
          </div>

          {/* Pricing */}
          <div className="rounded-3xl border border-yellow-500/10 bg-zinc-950 p-6">
            <h2 className="mb-3 text-xl font-semibold">Pricing Info</h2>

            <textarea
              value={pricing}
              onChange={(e) => setPricing(e.target.value)}
              className="min-h-[100px] w-full rounded-2xl bg-black p-4 outline-none"
            />

            <button
              onClick={() => saveMemory("pricing", pricing)}
              className="mt-4 rounded-2xl bg-yellow-500 px-6 py-3 text-black"
            >
              Save Pricing
            </button>
          </div>

          {/* Delivery */}
          <div className="rounded-3xl border border-yellow-500/10 bg-zinc-950 p-6">
            <h2 className="mb-3 text-xl font-semibold">Delivery Info</h2>

            <textarea
              value={delivery}
              onChange={(e) => setDelivery(e.target.value)}
              className="min-h-[100px] w-full rounded-2xl bg-black p-4 outline-none"
            />

            <button
              onClick={() => saveMemory("delivery", delivery)}
              className="mt-4 rounded-2xl bg-yellow-500 px-6 py-3 text-black"
            >
              Save Delivery
            </button>
          </div>

          {/* Support */}
          <div className="rounded-3xl border border-yellow-500/10 bg-zinc-950 p-6">
            <h2 className="mb-3 text-xl font-semibold">Support Info</h2>

            <textarea
              value={support}
              onChange={(e) => setSupport(e.target.value)}
              className="min-h-[100px] w-full rounded-2xl bg-black p-4 outline-none"
            />

            <button
              onClick={() => saveMemory("support", support)}
              className="mt-4 rounded-2xl bg-yellow-500 px-6 py-3 text-black"
            >
              Save Support
            </button>
          </div>

          {/* Jobs */}
          <div className="rounded-3xl border border-yellow-500/10 bg-zinc-950 p-6">
            <h2 className="mb-3 text-xl font-semibold">Jobs Info</h2>

            <textarea
              value={jobs}
              onChange={(e) => setJobs(e.target.value)}
              className="min-h-[100px] w-full rounded-2xl bg-black p-4 outline-none"
            />

            <button
              onClick={() => saveMemory("jobs", jobs)}
              className="mt-4 rounded-2xl bg-yellow-500 px-6 py-3 text-black"
            >
              Save Jobs
            </button>
          </div>

        </div>

      </div>
    </main>
  );
}