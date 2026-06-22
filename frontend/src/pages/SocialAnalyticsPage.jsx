import { Link } from "react-router-dom";

const MOCK_STATS = [
  { label: "Posts Created", value: "12", trend: "+3 this week", color: "#2d9cff" },
  { label: "Platforms Planned", value: "5", trend: "IG, FB, TikTok, LinkedIn, X", color: "#FF8A00" },
  { label: "Scripts Generated", value: "4", trend: "Video + caption scripts", color: "#d4af37" },
  { label: "Content Ready", value: "9", trend: "Approved & scheduled", color: "#00C9B1" },
];

const MOCK_TOP_POSTS = [
  { platform: "Instagram", type: "Reel", caption: "Why most people never start a business (and what it really costs you)...", engagement: "High" },
  { platform: "LinkedIn", type: "Article", caption: "From 0 to business owner in 30 days: the exact steps I took...", engagement: "Medium" },
  { platform: "TikTok", type: "Video", caption: "Stop waiting for perfect. Here's how I launched with $0...", engagement: "High" },
];

const PLATFORM_ICONS = {
  Instagram: "📸",
  LinkedIn: "💼",
  TikTok: "🎵",
  Facebook: "👥",
  X: "🐦",
};

const ENGAGEMENT_COLOR = {
  High: "#00C9B1",
  Medium: "#2d9cff",
  Low: "#64748B",
};

export default function SocialAnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="mb-8">
          <Link to="/dashboard" className="mb-4 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
            ← Dashboard
          </Link>
          <p className="text-xs font-bold uppercase tracking-widest text-[#2d9cff]">Social Planner</p>
          <h1 className="mt-1 font-display text-2xl font-black">Social Analytics</h1>
          <p className="mt-1 text-sm text-slate-400">Track your content plan performance across all platforms.</p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {MOCK_STATS.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</p>
              <p className="font-display text-3xl font-black" style={{ color: stat.color }}>{stat.value}</p>
              <p className="mt-1 text-xs text-slate-500">{stat.trend}</p>
            </div>
          ))}
        </div>

        {/* Platform Breakdown */}
        <div className="mb-6 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
          <h2 className="mb-5 font-bold text-white">Platform Breakdown</h2>
          <div className="space-y-3">
            {[
              { name: "Instagram", posts: 4, pct: 33 },
              { name: "LinkedIn", posts: 3, pct: 25 },
              { name: "TikTok", posts: 3, pct: 25 },
              { name: "Facebook", posts: 2, pct: 17 },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-3">
                <span className="w-5 text-center">{PLATFORM_ICONS[p.name] || "📱"}</span>
                <span className="w-24 text-sm text-slate-300">{p.name}</span>
                <div className="flex-1 overflow-hidden rounded-full bg-[#1A2235] h-2">
                  <div className="h-full rounded-full bg-[#2d9cff]" style={{ width: `${p.pct}%` }} />
                </div>
                <span className="w-14 text-right text-xs text-slate-500">{p.posts} posts</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Posts */}
        <div className="mb-6 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
          <h2 className="mb-5 font-bold text-white">Top Performing Content</h2>
          <div className="space-y-3">
            {MOCK_TOP_POSTS.map((post, i) => (
              <div key={i} className="rounded-xl border border-[#1A2235] bg-[#080C14] p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                    {PLATFORM_ICONS[post.platform]} {post.platform} · {post.type}
                  </span>
                  <span
                    className="rounded-full px-2 py-0.5 text-[10px] font-bold"
                    style={{ background: ENGAGEMENT_COLOR[post.engagement] + "20", color: ENGAGEMENT_COLOR[post.engagement] }}
                  >
                    {post.engagement} Engagement
                  </span>
                </div>
                <p className="text-sm text-slate-300">{post.caption}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Upgrade CTA */}
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5 text-center">
          <p className="mb-1 text-sm font-bold text-slate-300">Connect real social accounts for live analytics</p>
          <p className="mb-4 text-xs text-slate-500">Elite plan includes live social media analytics, post scheduling, and audience tracking across all platforms.</p>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
            <Link to="/elite" className="rounded-xl px-5 py-2 text-sm font-bold text-[#081226] transition hover:scale-[1.02]" style={{ background: "#d4af37" }}>
              Upgrade to Elite
            </Link>
            <Link to="/dashboard/social" className="rounded-xl border border-[#1A2D50] px-5 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Create Content →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
