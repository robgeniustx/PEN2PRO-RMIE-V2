import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const METRICS = [
  { label: "Posts Created", value: 12, color: "#FF8A00" },
  { label: "Platforms Planned", value: 5, color: "#1E88E5" },
  { label: "Content Ready", value: 9, color: "#00C9B1" },
  { label: "Scripts Generated", value: 4, color: "#D4A017" },
];

const PLATFORMS = [
  { name: "Instagram", posts: 4, status: "active" },
  { name: "Facebook", posts: 3, status: "active" },
  { name: "TikTok", posts: 2, status: "active" },
  { name: "LinkedIn", posts: 2, status: "active" },
  { name: "Twitter/X", posts: 1, status: "planned" },
];

export default function SocialAnalyticsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-3 py-1 text-xs font-semibold text-[#FF8A00] mb-3">
            SOCIAL ANALYTICS
          </div>
          <h1 className="font-display text-3xl font-black text-white">Social Media Analytics</h1>
          <p className="mt-2 text-slate-400 text-sm">Track content performance, engagement, and platform coverage.</p>
        </div>

        {/* Metric Cards */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} className="rounded-2xl border border-[#1A2D50] p-5 text-center" style={{ background: "#0F1520" }}>
              <p className="text-xs text-slate-500 mb-2">{m.label}</p>
              <p className="font-display text-3xl font-black" style={{ color: m.color }}>{m.value}</p>
            </div>
          ))}
        </div>

        {/* Platform Breakdown */}
        <div className="mb-8 rounded-2xl border border-[#1A2D50] overflow-hidden" style={{ background: "#0F1520" }}>
          <div className="px-6 py-4 border-b border-[#1A2D50]">
            <h2 className="font-display text-lg font-bold text-white">Platform Coverage</h2>
          </div>
          <div className="divide-y divide-[#1A2D50]">
            {PLATFORMS.map((p) => (
              <div key={p.name} className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className={`h-2 w-2 rounded-full ${p.status === "active" ? "bg-[#00C9B1]" : "bg-[#1A2D50]"}`} />
                  <p className="text-sm font-medium text-white">{p.name}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-400">{p.posts} posts</span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    p.status === "active" ? "border border-[#00C9B1]/30 bg-[#00C9B1]/10 text-[#00C9B1]" : "border border-[#1A2D50] text-slate-500"
                  }`}>
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Notice */}
        <div className="mb-8 rounded-xl border border-[#1A2D50] bg-[#080C14] px-4 py-4 text-sm text-slate-500">
          Live engagement analytics (likes, reach, impressions) will be available after platform API integration is configured. Connect your accounts in Settings.
        </div>

        <div className="text-center">
          <Link to="/social" className="btn-gold px-8 py-3 text-sm font-bold">
            Go to Social Engine
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
