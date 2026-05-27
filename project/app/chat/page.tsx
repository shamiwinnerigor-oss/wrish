"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../src/components/Sidebar";
import { supabase } from "@/lib/supabase";
import { generateAIResponse } from "../ai/memoryAI";
import { Bot, Send, User } from "lucide-react";

export default function ChatPage() {
  const router = useRouter();

  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  /* ---------------- AUTH CHECK ---------------- */
  async function checkUser() {
    const { data } = await supabase.auth.getSession();

    if (!data.session) {
      router.push("/login");
      return;
    }

    setLoading(false);
    fetchMessages();
  }

  /* ---------------- LOAD OLD MESSAGES ---------------- */
  async function fetchMessages() {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: true });

    if (!error && data) {
      setMessages(data);
    }
  }

  /* ---------------- REALTIME CHAT ---------------- */
  useEffect(() => {
    checkUser();

    // realtime listener
    const channel = supabase
      .channel("realtime-messages")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          setMessages((prev) => {
            // avoid duplicates
            const exists = prev.find(
              (msg) => msg.id === payload.new.id
            );

            if (exists) return prev;

            return [...prev, payload.new];
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  /* ---------------- SEND MESSAGE ---------------- */
  async function sendMessage() {
    if (!input.trim()) return;

    const { data: userData } = await supabase.auth.getUser();

    const userId = userData?.user?.id;
    const userMessage = input;

    setInput("");

    // save USER message
    await supabase.from("messages").insert({
      text: userMessage,
      sender: "user",
      user_id: userId,
    });

    // AI response delay
    setTimeout(async () => {
      const aiReply = await generateAIResponse(userMessage);

      await supabase.from("messages").insert({
        text: aiReply,
        sender: "ai",
        user_id: userId,
      });
    }, 800);
  }

  /* ---------------- LOADING SCREEN ---------------- */
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-yellow-500">
        Loading chat...
      </div>
    );
  }

  /* ---------------- UI ---------------- */
  return (
    <main className="flex min-h-screen bg-black text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* MAIN CHAT AREA */}
      <div className="flex w-full md:ml-24">

        {/* LEFT CHAT LIST */}
        <aside className="hidden w-80 border-r border-yellow-500/10 bg-zinc-950 md:block">

          <div className="p-6">
            <h2 className="text-2xl font-bold text-yellow-500">
              Chats
            </h2>
          </div>

          <div className="space-y-2 px-4">

            <div className="rounded-2xl bg-yellow-500/10 p-4">
              <h3 className="font-semibold">
                Kigali Fashion Hub
              </h3>

              <p className="text-sm text-gray-400">
                AI assistant active
              </p>
            </div>

          </div>
        </aside>

        {/* CHAT SECTION */}
        <section className="flex flex-1 flex-col">

          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-yellow-500/10 p-5">

            <div>
              <h2 className="text-xl font-bold">
                BizLink AI Chat
              </h2>

              <p className="text-sm text-yellow-500">
                Real-time AI business assistant
              </p>
            </div>

            <div className="rounded-full border border-yellow-500/20 px-4 py-2 text-sm text-yellow-500">
              Live
            </div>

          </div>

          {/* MESSAGES */}
          <div className="flex-1 space-y-5 overflow-y-auto p-6">

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-md rounded-3xl px-5 py-4 ${
                    msg.sender === "user"
                      ? "bg-yellow-500 text-black"
                      : "border border-yellow-500/10 bg-zinc-900"
                  }`}
                >

                  {/* LABEL */}
                  <div className="mb-2 flex items-center gap-2 text-sm">

                    {msg.sender === "user" ? (
                      <>
                        <User size={16} />
                        <span>You</span>
                      </>
                    ) : (
                      <>
                        <Bot size={16} />
                        <span>AI Assistant</span>
                      </>
                    )}

                  </div>

                  <p>{msg.text}</p>

                </div>

              </div>
            ))}

          </div>

          {/* INPUT */}
          <div className="border-t border-yellow-500/10 p-4">

            <div className="flex items-center gap-4 rounded-2xl border border-yellow-500/10 bg-zinc-900 p-3">

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 bg-transparent outline-none"
              />

              <button
                onClick={sendMessage}
                className="rounded-xl bg-yellow-500 p-3 text-black transition hover:scale-105"
              >
                <Send size={18} />
              </button>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}