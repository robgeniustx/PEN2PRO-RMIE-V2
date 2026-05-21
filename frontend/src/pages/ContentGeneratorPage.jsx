import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT_TYPES = [
  { id: "post", label: "Social Post", icon: "📱" },
  { id: "email", label: "Email Sequence", icon: "📧" },
  { id: "script", label: "Video Script", icon: "🎥" },
  { id: "bio", label: "Business Bio", icon: "👤" },
  { id: "offer", label: "Offer Description", icon: "💰" },
  { id: "dm", label: "Cold DM", icon: "💬" },
];

const SAMPLE_OUTPUTS = {
  post: `Your pressure washing business can generate $3,000–$5,000 in your first 30 days if you follow the right steps.\n\nStep 1: Start with 5 neighbors.\nStep 2: Charge $99 intro rate.\nStep 3: Get 3 Google reviews before running any ads.\n\nDoes this resonate? Drop a comment below.`,
  email: `Subject: Your business idea is one roadmap away\n\nHey [Name],\n\nI noticed you've been thinking about starting a business. Let me make this simple:\n\nYou don't need $10,000 to start.\nYou don't need a perfect plan.\nYou need your first 3 clients.\n\nPEN2PRO gives you the roadmap to get there.\n\n→ [Build Your Free Roadmap]\n\nRobert Green\nFounder, PEN2PRO`,
  script: `Hook (0–3s): "If you started a business today, here's exactly what to do in the first 7 days..."\n\nBody (3–45s): Walk through Day 1 (LLC), Day 2 (EIN), Day 3 (Bank account), Day 4 (Google Business Profile), Day 5 (Domain), Day 6 (Equipment), Day 7 (First 20 outreach messages).\n\nCTA (45–60s): "Comment 'ROADMAP' and I'll DM you the full free plan."`,
  bio: `[Business Name] helps [target customer] solve [main problem] without [pain point]. Founded by [founder], we've helped [X] clients achieve [result]. Our approach: [unique method]. Ready to build your business? Start free at pen2pro.com.`,
  offer: `Starter Clean — $149\nDriveway only, up to 800 sq ft. In and out in under 2 hours. Satisfaction guaranteed or we come back free.\n\nFull Home Package — $349\nDriveway + siding + walkways. Before/after photos included. Most popular.\n\nPremium Exterior — $549\nFull home + deck + fence + gutters. Commercial-grade equipment. 5-star result every time.`,
  dm: `Hey [Name] 👋\n\nI just launched a [service] business in [city]. Offering $99 intro rate for the first 5 jobs this week.\n\nWould you be interested in getting [result] done this week?\n\nEasy yes or no — no pressure either way.`,
};

export default function ContentGeneratorPage() {
  const [selected, setSelected] = useState("post");
  const [topic, setTopic] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);

  function generate() {
    if (!topic.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setGenerated(SAMPLE_OUTPUTS[selected] || "Content will be generated based on your business profile.");
      setLoading(false);
    }, 1200);
  }

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-3 py-1 text-xs font-semibold text-[#1E88E5] mb-3">
            CONTENT ENGINE
          </div>
          <h1 className="font-display text-3xl font-black text-white">Content Generator</h1>
          <p className="mt-2 text-slate-400 text-sm">Generate posts, emails, scripts, bios, and outreach messages — ready to copy and use.</p>
        </div>

        {/* Content Type Selector */}
        <div className="mb-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {CONTENT_TYPES.map((t) => (
            <button
              key={t.id}
              onClick={() => { setSelected(t.id); setGenerated(""); }}
              className={`rounded-xl border p-3 text-center text-sm transition-all ${
                selected === t.id
                  ? "border-[#FF8A00] bg-[#FF8A00]/10 text-[#FF8A00]"
                  : "border-[#1A2D50] text-slate-400 hover:border-[#FF8A00]/40"
              }`}
              style={{ background: selected === t.id ? undefined : "#0F1520" }}
            >
              <div className="text-xl mb-1">{t.icon}</div>
              <div className="text-xs font-medium">{t.label}</div>
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="mb-6 rounded-2xl border border-[#1A2D50] p-6" style={{ background: "#0F1520" }}>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            What is your business or topic?
          </label>
          <textarea
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. Pressure washing business targeting homeowners in Houston..."
            rows={3}
            className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none resize-none"
          />
          <button
            onClick={generate}
            disabled={loading || !topic.trim()}
            className="mt-4 btn-gold px-6 py-2.5 text-sm font-bold disabled:opacity-50"
          >
            {loading ? "Generating..." : `Generate ${CONTENT_TYPES.find(t => t.id === selected)?.label}`}
          </button>
        </div>

        {/* Output */}
        {generated && (
          <div className="rounded-2xl border border-[#1A2D50] p-6" style={{ background: "#0F1520" }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-base font-bold text-white">Generated Content</h3>
              <button
                onClick={() => navigator.clipboard?.writeText(generated)}
                className="text-xs font-semibold text-[#D4A017] hover:text-white transition-colors"
              >
                Copy →
              </button>
            </div>
            <pre className="text-sm text-slate-300 whitespace-pre-wrap leading-relaxed font-sans">{generated}</pre>
          </div>
        )}

        {/* Upgrade */}
        <div className="mt-10 rounded-2xl border border-[#D4A017]/30 bg-[#D4A017]/5 p-6 text-center">
          <p className="text-sm font-bold text-[#D4A017] mb-1">Pro & Elite: Unlimited Content Generation</p>
          <p className="text-xs text-slate-400 mb-4">Unlock AI-powered content tuned to your specific business, industry, and target customer.</p>
          <Link to="/waitlist?tier=pro" className="btn-gold px-6 py-2.5 text-sm font-bold">
            Upgrade to Pro
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
