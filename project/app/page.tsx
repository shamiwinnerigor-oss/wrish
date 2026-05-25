import Sidebar from "@/app/src/components/Sidebar";
import {
  Briefcase,
  MessageSquare,
  Bot,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.15),transparent_60%)]" />

      {/* Floating Background Icons */}
      <div className="absolute inset-0 opacity-10">
        <Briefcase className="absolute top-20 left-10 h-20 w-20 text-yellow-500" />
        <Bot className="absolute right-20 top-40 h-24 w-24 text-yellow-500" />
        <MessageSquare className="absolute bottom-20 left-1/4 h-16 w-16 text-yellow-500" />
        <Users className="absolute bottom-32 right-1/3 h-20 w-20 text-yellow-500" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold text-yellow-500">
          BizLink AI
        </h1>

        <div className="flex gap-4">
          <button className="rounded-full border border-yellow-500 px-5 py-2 text-sm transition hover:bg-yellow-500 hover:text-black">
            Login
          </button>

          <button className="rounded-full bg-yellow-500 px-5 py-2 text-sm font-semibold text-black transition hover:scale-105">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">

        <div className="mb-6 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400 backdrop-blur-sm">
          AI-Powered Business Social Platform
        </div>

        <h2 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          The Future Of
          <span className="text-yellow-500">
            {" "}Business Communication
          </span>
        </h2>

        <p className="mt-8 max-w-2xl text-lg text-gray-400">
          Connect businesses, customers, and opportunities inside one intelligent AI-powered ecosystem.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105">
            Start As Business
          </button>

          <button className="rounded-full border border-yellow-500 px-8 py-4 font-semibold text-yellow-500 transition hover:bg-yellow-500 hover:text-black">
            Explore Platform
          </button>
        </div>
      </section>
    </main>
  );
}