import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { mockSocialEngine } from "../data/mockSocialCalendar";

export default function SocialPage() {
  const [params] = useSearchParams();
  const [data, setData] = useState(mockSocialEngine);
  const [tier] = useState(params.get("tier") || "free");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    setLoading(true);
    try {
      const { generateSocialEngine } = await import("../api/socialApi");
      const payload = {
        tier,
        business_name: "PEN2PRO Biz",
        offer: "Growth consulting",
        ideal_customer: "SMB owners",
        platform_focus: ["instagram"],
        calendar_length: "7_day",
        goal: "leads",
      };
      const result = await generateSocialEngine(payload);
      setData(result);
    } catch {
      // keep mock data on error
    } finally {
      setLoading(false);
    }
  }

  const platforms = ["Instagram", "Facebook", "TikTok", "LinkedIn", "Twitter/X"];
  const posts = data?.posts || [];
  const scripts = data?.scripts || [];
  const calendar = data?.calendar7 || [];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-7xl px-5 py-12">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-3 py-1 text-xs font-semibold text-[#FF8A00] mb-3">
              SOCIAL ENGINE
            </div>
            <h1 className="font-display text-3xl font-black text-white">Social Media Engine</h1>
            <p className="mt-2 text-slate-400 text-sm">
              Generate platform-ready content, scripts, and a 7-day posting calendar for your business.
            </p>
          </div>
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="btn-gold px-6 py-3 text-sm font-bold whitespace-nowrap"
          >
            {loading ? "Generating..." : "Generate Social Engine"}
          </button>
        </div>

        {/* Platform Chips */}
        <div className="mb-8 flex flex-wrap gap-2">
          {platforms.map((p) => (
            <span
              key={p}
              className="rounded-full border border-[#1A2D50] bg-[#0F1520] px-3 py-1.5 text-xs font-medium text-slate-400"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Posts */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-display text-lg font-bold text-white">Content Posts</h2>
            {posts.length === 0 ? (
              <div className="rounded-2xl border border-[#1A2D50] p-8 text-center text-slate-500 text-sm" style={{ background: "#0F1520" }}>
                Click "Generate Social Engine" to create your content.
              </div>
            ) : (
              posts.map((post, i) => (
                <div key={i} className="rounded-2xl border border-[#1A2D50] p-5" style={{ background: "#0F1520" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A00]">{post.platform || "Post"}</span>
                    <span className="text-xs text-slate-500">•</span>
                    <span className="text-xs text-slate-500">{post.type || "Content"}</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{post.caption || post.content || post.text}</p>
                  {post.hashtags && (
                    <p className="mt-3 text-xs text-[#1E88E5]">{post.hashtags}</p>
                  )}
                </div>
              ))
            )}

            {/* Scripts */}
            {scripts.length > 0 && (
              <>
                <h2 className="font-display text-lg font-bold text-white pt-2">Video Scripts</h2>
                {scripts.map((script, i) => (
                  <div key={i} className="rounded-2xl border border-[#1A2D50] p-5" style={{ background: "#0F1520" }}>
                    <p className="text-xs font-bold text-[#D4A017] uppercase tracking-wider mb-2">{script.title || `Script ${i + 1}`}</p>
                    <p className="text-sm text-slate-300 whitespace-pre-wrap">{script.script || script.content}</p>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Calendar Sidebar */}
          <div className="space-y-4">
            <h2 className="font-display text-lg font-bold text-white">7-Day Calendar</h2>
            {calendar.length === 0 ? (
              <div className="rounded-2xl border border-[#1A2D50] p-6 text-center text-slate-500 text-sm" style={{ background: "#0F1520" }}>
                Calendar will appear after generation.
              </div>
            ) : (
              calendar.map((day, i) => (
                <div key={i} className="rounded-xl border border-[#1A2D50] p-4" style={{ background: "#0F1520" }}>
                  <p className="text-xs font-bold text-[#D4A017] mb-1">Day {i + 1}</p>
                  <p className="text-sm text-slate-300">{day.task || day.content || day.post}</p>
                </div>
              ))
            )}

            {/* Upgrade CTA */}
            <div className="rounded-2xl border border-[#D4A017]/30 bg-[#D4A017]/5 p-5">
              <p className="text-sm font-bold text-[#D4A017] mb-1">Unlock Full Social Strategy</p>
              <p className="text-xs text-slate-400 mb-4">Pro and Elite members get full platform automation, ad copy, and engagement scripts.</p>
              <Link to="/waitlist?tier=pro" className="btn-gold block w-full py-2.5 text-center text-xs font-bold">
                Upgrade to Pro
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
