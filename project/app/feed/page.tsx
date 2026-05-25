import Sidebar from "../src/components/Sidebar";

export default function FeedPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Sidebar */}
      <Sidebar />

      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-8">

        {/* Feed Section */}
        <section className="flex-1 space-y-6 md:ml-24">

          {/* Create Post */}
          <div className="rounded-3xl border border-yellow-500/20 bg-zinc-900/60 p-5 backdrop-blur-xl">
            <input
              type="text"
              placeholder="Share business updates..."
              className="w-full rounded-2xl border border-yellow-500/10 bg-black/40 px-5 py-4 outline-none focus:border-yellow-500"
            />
          </div>

          {/* Example Post */}
          <div className="rounded-3xl border border-yellow-500/20 bg-zinc-900/60 p-6 backdrop-blur-xl">

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-yellow-500" />

              <div>
                <h3 className="font-semibold">
                  Kigali Fashion Hub
                </h3>

                <p className="text-sm text-gray-400">
                  2 hours ago
                </p>
              </div>
            </div>

            <p className="mt-5 text-gray-300">
              New arrivals available this weekend. Visit our shop or message our AI assistant for pricing and availability.
            </p>

            <div className="mt-5 overflow-hidden rounded-2xl bg-zinc-800">
              <div className="flex h-64 items-center justify-center text-gray-500">
                Business Post Image
              </div>
            </div>

            <div className="mt-5 flex gap-6 text-sm text-gray-400">
              <button className="transition hover:text-yellow-500">
                Like
              </button>

              <button className="transition hover:text-yellow-500">
                Comment
              </button>

              <button className="transition hover:text-yellow-500">
                Share
              </button>
            </div>
          </div>

        </section>

        {/* Right Panel */}
        <aside className="hidden w-80 space-y-6 lg:block">

          {/* AI Card */}
          <div className="rounded-3xl border border-yellow-500/20 bg-zinc-900/60 p-6 backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-yellow-500">
              AI Business Assistant
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Businesses can automate customer communication using trainable AI assistants.
            </p>
          </div>

          {/* Trending Businesses */}
          <div className="rounded-3xl border border-yellow-500/20 bg-zinc-900/60 p-6 backdrop-blur-xl">

            <h3 className="mb-4 text-lg font-semibold text-yellow-500">
              Trending Businesses
            </h3>

            <div className="space-y-4">

              <div className="flex items-center justify-between">
                <span>Kigali Tech</span>
                <button className="text-sm text-yellow-500">
                  Follow
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span>Urban Fashion</span>
                <button className="text-sm text-yellow-500">
                  Follow
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span>Smart Electronics</span>
                <button className="text-sm text-yellow-500">
                  Follow
                </button>
              </div>

            </div>
          </div>

        </aside>

      </div>
    </main>
  );
}