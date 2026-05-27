"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Sidebar from "../src/components/Sidebar";
import { Send } from "lucide-react";

export default function FeedPage() {

  const [posts, setPosts] = useState<any[]>([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchPosts();

    // REALTIME POSTS
    const channel = supabase
      .channel("posts-feed")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "posts",
        },
        (payload) => {
          setPosts((prev) => [payload.new, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // LOAD POSTS
  async function fetchPosts() {
    const { data } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setPosts(data);
    }
  }

  // CREATE POST
  async function createPost() {

    if (!content.trim()) return;

    const { data: userData } = await supabase.auth.getUser();

    await supabase.from("posts").insert({
      content,
      business_name: "BizLink Business",
      user_id: userData?.user?.id,
    });

    setContent("");
  }

  return (
    <main className="flex min-h-screen bg-black text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* FEED */}
      <div className="mx-auto w-full max-w-3xl p-6">

        {/* CREATE POST */}
        <div className="mb-8 rounded-3xl border border-yellow-500/10 bg-zinc-950 p-6">

          <h2 className="mb-4 text-2xl font-bold text-yellow-500">
            Create Business Post
          </h2>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share business updates..."
            className="min-h-[120px] w-full rounded-2xl bg-black p-4 outline-none"
          />

          <button
            onClick={createPost}
            className="mt-4 flex items-center gap-2 rounded-2xl bg-yellow-500 px-6 py-3 text-black transition hover:scale-105"
          >
            <Send size={18} />
            Post
          </button>

        </div>

        {/* POSTS */}
        <div className="space-y-6">

          {posts.map((post) => (

            <div
              key={post.id}
              className="rounded-3xl border border-yellow-500/10 bg-zinc-950 p-6"
            >

              <div className="mb-4 flex items-center justify-between">

                <div>
                  <h3 className="font-bold text-yellow-500">
                    {post.business_name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Business Account
                  </p>
                </div>

              </div>

              <p className="text-lg leading-relaxed">
                {post.content}
              </p>

            </div>

          ))}

        </div>

      </div>
    </main>
  );
}