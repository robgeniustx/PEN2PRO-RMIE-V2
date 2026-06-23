import { useState } from "react";
import { Link } from "react-router-dom";

const CONTENT_TYPES = [
  { icon: "📝", label: "Social Media Posts", desc: "Platform-optimized posts for Instagram, Facebook, LinkedIn, X, and TikTok captions." },
  { icon: "📧", label: "Email Newsletter", desc: "Value-packed newsletters that build trust and drive conversions with your audience." },
  { icon: "🎥", label: "Video Scripts", desc: "Short-form and long-form video scripts for YouTube, TikTok, Reels, and ads." },
  { icon: "📰", label: "Blog Articles", desc: "SEO-optimized articles that attract organic traffic and establish authority." },
  { icon: "💬", label: "Testimonial Requests", desc: "Copy for requesting reviews and social proof from satisfied customers." },
  { icon: "🎙️", label: "Podcast Outlines", desc: "Episode structures, talking points, and promotional content for your podcast." },
];

export default function ContentGeneratorPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-black text-white">Content Generator</h2>
        <p className="mt-1 text-sm text-slate-500">Generate platform-ready content that matches your brand voice and business offer.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CONTENT_TYPES.map((type) => (
          <button
            key={type.label}
            onClick={() => setSelected(type.label)}
            className={`text-left rounded-2xl border p-5 transition-all hover:border-[#FF8A00]/50 ${
              selected === type.label ? "border-[#FF8A00]" : ""
            }`}
            style={{ borderColor: selected === type.label ? "#FF8A00" : "#1A2D50", background: "#0F1520" }}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="text-2xl">{type.icon}</span>
              <h3 className="text-sm font-bold text-white">{type.label}</h3>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">{type.desc}</p>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="rounded-2xl border p-6"
          style={{ borderColor: "#1A2D50", background: "#0F1520" }}
        >
          <h3 className="mb-3 text-sm font-bold text-white">{selected}</h3>
          <textarea
            className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-4 py-3 text-sm text-slate-300 placeholder:text-slate-600 focus:border-[#FF8A00] focus:outline-none resize-none"
            rows={4}
            placeholder={`Describe what this ${selected.toLowerCase()} should be about — your offer, audience, goal, and tone...`}
          />
          <div className="mt-3 flex gap-3">
            <button
              className="rounded-xl px-5 py-2.5 text-sm font-black text-[#0A0F1E] btn-gold"
              onClick={() => {}}
            >
              Generate Content
            </button>
            <span className="flex items-center text-xs text-slate-600">Requires Pro plan</span>
          </div>
        </div>
      )}

      <div
        className="rounded-2xl border p-7"
        style={{ borderColor: "rgba(255,138,0,0.25)", background: "#0D1528" }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="flex-1">
            <p className="text-base font-black text-white mb-2">Content generation requires Pro.</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Upgrade to Pro to generate unlimited content tailored to your brand voice, target
              audience, and business offers — posts, emails, scripts, articles, and more.
            </p>
          </div>
          <Link
            to="/pro"
            className="rounded-xl px-6 py-3 text-sm font-black text-[#0A0F1E] btn-gold shrink-0 text-center"
          >
            Upgrade to Pro
          </Link>
        </div>
      </div>
    </div>
  );
}
