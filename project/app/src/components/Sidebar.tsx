"use client";

import { currentUser } from "@/app/src/components/lib/user";
import {
  Home,
  MessageCircle,
  Briefcase,
  Bot,
  User,
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: MessageCircle, label: "Chats" },
  { icon: Briefcase, label: "Jobs" },
  { icon: Bot, label: "AI" },
  { icon: User, label: "Profile" },
];

export default function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="group fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 rounded-3xl border border-yellow-500/20 bg-black/60 p-3 backdrop-blur-xl transition-all duration-300 hover:w-52 md:flex md:w-20 md:flex-col md:gap-4">

        {navItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              className="flex items-center gap-4 rounded-2xl p-4 text-gray-400 transition hover:bg-yellow-500 hover:text-black"
            >
              <Icon className="h-6 w-6 min-w-[24px]" />

              <span className="hidden whitespace-nowrap group-hover:block">
                {item.label}
              </span>
            </button>
          );
        })}
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-4 left-1/2 z-50 flex w-[90%] -translate-x-1/2 items-center justify-around rounded-3xl border border-yellow-500/20 bg-black/70 p-3 backdrop-blur-xl md:hidden">

        {navItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              className="rounded-2xl p-3 text-gray-400 transition hover:bg-yellow-500 hover:text-black"
            >
              <Icon className="h-6 w-6" />
            </button>
          );
        })}
      </nav>
    </>
  );
}