import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { generateSocialEngine } from "../api/socialApi";
import { mockSocialEngine } from "../data/mockSocialCalendar";

const PLATFORMS = [
  { id: "instagram", label: "Instagram", icon: "📸" },
  { id: "facebook", label: "Facebook", icon: "👥" },
  { id: "tiktok", label: "TikTok", icon: "🎵" },
  { id: "linkedin", label: "LinkedIn", icon: "💼" },
  { id: "twitter", label: "X / Twitter", icon: "🐦" },
];

export default function SocialPage() {
  const [params] = useSearchParams();
  const tier = params.get("tier") || "free";
  const isPro = ["pro", "elite", "founders"].includes(tier);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("instagram");
  const [goal, setGoal] = useState("leads");

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const payload = {
        tier,
        business_name: "My Business",
        offer: "Professional services",
        ideal_customer: "Small business owners",
        platform_focus: [selectedPlatform],
        calendar_length: "7_day",
        goal,
      };
      const result = await generateSocialEngine(payload);
      setData(result || mockSocialEngine);
    } catch {
      setData(mockSocialEngine);
    } finally {
      setLoading(false);
    }
  };

  if (!isPro) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080C14] px-4 text-white">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0F1520] text-4xl border border-[#1A2D50]">
            📱
          </div>
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#2d9cff]">Pro Feature</p>
          <h1 className="mb-3 font-display text-2xl font-black">Social Content Planner</h1>
          <p className="mb-8 text-slate-400 leading-relaxed">
            Social content planning — 30-day calendars, platform-specific scripts, and multi-channel strategy — is available on Pro and Elite plans.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              to="/pro"
              className="rounded-xl bg-[#2d9cff] px-6 py-3 text-sm font-black text-[#081226] shadow-[0_0_25px_rgba(45,156,255,0.3)] transition hover:scale-[1.02]"
            >
              Upgrade to Pro — $249/mo
            </Link>
            <Link
              to="/elite"
              className="rounded-xl bg-[#d4af37] px-6 py-3 text-sm font-black text-[#081226] transition hover:scale-[1.02]"
            >
              Upgrade to Elite — $499/mo
            </Link>
            <Link
              to="/dashboard"
              className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#2d9cff]">Social Planner</p>
          <h1 className="font-display text-2xl font-black text-white">Content Calendar Engine</h1>
          <p className="mt-1 text-sm text-slate-400">Generate a 7-day social content plan tailored to your platform and goal.</p>
        </div>

        {/* Controls */}
        <div className="mb-6 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400">Platform</label>
              <div className="flex flex-wrap gap-2">
                {PLATFORMS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPlatform(p.id)}
                    className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                      selectedPlatform === p.id
                        ? "border-[#2d9cff] bg-[#2d9cff]/10 text-[#2d9cff]"
                        : "border-[#1A2D50] text-slate-400 hover:border-slate-500 hover:text-slate-300"
                    }`}
                  >
                    {p.icon} {p.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400">Goal</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-3 py-2 text-sm text-white focus:border-[#2d9cff] focus:outline-none"
              >
                <option value="leads">Generate Leads</option>
                <option value="sales">Drive Sales</option>
                <option value="awareness">Build Awareness</option>
                <option value="engagement">Grow Engagement</option>
                <option value="authority">Build Authority</option>
              </select>
            </div>
          </div>
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="mt-5 rounded-xl bg-[#2d9cff] px-6 py-2.5 text-sm font-black text-[#081226] shadow-[0_0_20px_rgba(45,156,255,0.3)] transition hover:scale-[1.02] disabled:opacity-60"
          >
            {loading ? "Generating..." : "Generate 7-Day Content Plan"}
          </button>
        </div>

        {/* Results */}
        {data ? (
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#2d9cff]">Your Content Plan</p>
            <pre className="overflow-x-auto rounded-xl bg-[#080C14] p-4 text-xs text-slate-300 leading-relaxed">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#1A2D50] p-12 text-center">
            <div className="mb-3 text-4xl">📅</div>
            <p className="text-slate-400">Select your platform and goal, then generate your content plan.</p>
          </div>
        )}

        <div className="mt-6 flex gap-3">
          <Link to="/dashboard" className="rounded-xl border border-[#1A2D50] px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            ← Dashboard
          </Link>
          <Link to="/dashboard/social-posts" className="rounded-xl border border-[#1A2D50] px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            View Posts →
          </Link>
        </div>
      </div>
    </div>
  );
}
