"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../src/components/Sidebar";
import { supabase } from "@/lib/supabase";
import { Bot, Send, User } from "lucide-react";

const messages = [
  {
    sender: "ai",
    text: "Hello 👋 Welcome to BizLink AI. How can I help your business today?",
  },
  {
    sender: "user",
    text: "I need help responding to customer questions faster.",
  },
  {
    sender: "ai",
    text: "Great! I can assist with automating replies and training your AI assistant.",
  },
  {
    sender: "human",
    text: "Hi 👋 A human agent has joined the conversation.",
  },
];

export default function ChatPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    };

    checkUser();
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-yellow-500">
        Loading chat...
      </div>
    );
  }

  return (
    <main className="flex min-h-screen bg-black text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Layout */}
      <div className="flex w-full md:ml-24">

        {/* Conversations */}
        <aside className="hidden w-80 border-r border-yellow-500/10 bg-zinc-950 md:block">

          <div className="p-6">
            <h2 className="text-2xl font-bold text-yellow-500">
              Chats
            </h2>
          </div>

          <div className="space-y-2 px-4">

            <div className="rounded-2xl bg-yellow-500/10 p-4 transition hover:bg-yellow-500/20">
              <h3 className="font-semibold">Kigali Fashion Hub</h3>
              <p className="text-sm text-gray-400">AI assistant active</p>
            </div>

            <div className="rounded-2xl p-4 transition hover:bg-zinc-900">
              <h3 className="font-semibold">Smart Electronics</h3>
              <p className="text-sm text-gray-400">Human support joined</p>
            </div>

          </div>
        </aside>

        {/* Chat Area */}
        <section className="flex flex-1 flex-col">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-yellow-500/10 p-5">

            <div>
              <h2 className="text-xl font-bold">Kigali Fashion Hub</h2>
              <p className="text-sm text-yellow-500">AI Assistant Active</p>
            </div>

            <div className="rounded-full border border-yellow-500/20 px-4 py-2 text-sm text-yellow-500">
              Business Chat
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-6 overflow-y-auto p-6">

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-md rounded-3xl px-5 py-4 ${
                    message.sender === "user"
                      ? "bg-yellow-500 text-black"
                      : message.sender === "human"
                      ? "bg-blue-600"
                      : "bg-zinc-900 border border-yellow-500/10"
                  }`}
                >

                  <div className="mb-2 flex items-center gap-2 text-sm">

                    {message.sender === "ai" && (
                      <>
                        <Bot size={16} />
                        <span>AI Assistant</span>
                      </>
                    )}

                    {message.sender === "human" && (
                      <>
                        <User size={16} />
                        <span>Business Staff</span>
                      </>
                    )}

                  </div>

                  <p>{message.text}</p>
                </div>
              </div>
            ))}

          </div>

          {/* Input */}
          <div className="border-t border-yellow-500/10 p-4">

            <div className="flex items-center gap-4 rounded-2xl border border-yellow-500/10 bg-zinc-900 p-3">

              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-transparent outline-none"
              />

              <button className="rounded-xl bg-yellow-500 p-3 text-black transition hover:scale-105">
                <Send size={18} />
              </button>

            </div>
          </div>

        </section>
      </div>
    </main>
  );
}