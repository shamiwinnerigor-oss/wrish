"use client";

import Sidebar from "../src/components/Sidebar";
import { Briefcase, MapPin, DollarSign } from "lucide-react";

const jobs = [
  {
    company: "Kigali Fashion Hub",
    role: "Social Media Manager",
    location: "Kigali, Rwanda",
    salary: "$400/month",
  },
  {
    company: "Smart Electronics",
    role: "Sales Assistant",
    location: "Kigali, Rwanda",
    salary: "$300/month",
  },
  {
    company: "BizLink AI",
    role: "Customer Support Agent",
    location: "Remote",
    salary: "$500/month",
  },
];

export default function JobsPage() {
  return (
    <main className="flex min-h-screen bg-black text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <section className="w-full md:ml-24 p-6">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-4xl font-bold text-yellow-500">
              Jobs
            </h1>

            <p className="mt-2 text-gray-400">
              Discover opportunities from growing businesses
            </p>
          </div>

          {/* Post Job Button */}
          <button className="rounded-2xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:scale-105">
            Post Job
          </button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full rounded-2xl border border-yellow-500/10 bg-zinc-950 p-4 outline-none focus:border-yellow-500"
          />
        </div>

        {/* Jobs Grid */}
        <div className="grid gap-6 lg:grid-cols-2">

          {jobs.map((job, index) => (
            <div
              key={index}
              className="rounded-3xl border border-yellow-500/10 bg-zinc-950 p-6 transition hover:border-yellow-500/30 hover:shadow-[0_0_20px_#ffd70022]"
            >

              {/* Company */}
              <div className="mb-4 flex items-center gap-3">

                <div className="rounded-2xl bg-yellow-500/10 p-3">
                  <Briefcase className="text-yellow-500" />
                </div>

                <div>
                  <h2 className="text-xl font-semibold">
                    {job.company}
                  </h2>

                  <p className="text-gray-400">
                    {job.role}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-3 text-sm text-gray-300">

                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {job.location}
                </div>

                <div className="flex items-center gap-2">
                  <DollarSign size={16} />
                  {job.salary}
                </div>

              </div>

              {/* Actions */}
              <div className="mt-6 flex gap-4">

                <button className="flex-1 rounded-2xl bg-yellow-500 py-3 font-semibold text-black transition hover:scale-[1.02]">
                  Apply
                </button>

                <button className="rounded-2xl border border-yellow-500/20 px-5 py-3 text-yellow-500 transition hover:bg-yellow-500/10">
                  Save
                </button>

              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}