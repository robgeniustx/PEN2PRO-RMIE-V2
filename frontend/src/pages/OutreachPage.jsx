import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SCRIPTS = [
  {
    type: "Cold Text / DM",
    icon: "💬",
    script: "Hey [Name] 👋 I just launched a [service] business in [city]. Offering $99 intro rate for the first 5 jobs this week. Would you be interested in getting [result] done? Easy yes or no.",
    tip: "Send to 20 contacts per day for the first 7 days. Track responses in a simple spreadsheet.",
  },
  {
    type: "Follow-Up Message",
    icon: "🔁",
    script: "Hey [Name] — just following up. Still have 2 intro spots left at $99 this week. After that it goes to $149. What's holding you back?",
    tip: "Follow up exactly 48 hours after the first message. One follow-up is enough.",
  },
  {
    type: "Phone Call Opener",
    icon: "📞",
    script: "Hey [Name], this is [Your Name]. I run a [service] company in [area] — I'm reaching out because I noticed your property could use [service]. I have openings this week. Can I give you a quick quote?",
    tip: "Call in the evening 5–7pm on weekdays. Keep it under 2 minutes.",
  },
  {
    type: "Objection: 'I Need to Think'",
    icon: "🤔",
    script: "I get it. Take 24 hours. But I only have 2 intro spots left at $99 — after that it goes to $149. What's holding you back?",
    tip: "Don't argue. Just clarify the urgency and ask one question.",
  },
  {
    type: "Close Line",
    icon: "✅",
    script: "Want me to pencil you in for [day] at [time]? I just need your address to confirm.",
    tip: "Give them a specific day and time. Decision fatigue kills deals — make it easy.",
  },
  {
    type: "Referral Ask",
    icon: "🤝",
    script: "Hey [Name], thanks for using us. If you know anyone else who needs [service], I'd really appreciate the referral. I'll give them the same intro rate and take care of them personally.",
    tip: "Ask every client after the first completed job.",
  },
];

export default function OutreachPage() {
  const [copied, setCopied] = useState(null);

  function copy(text, i) {
    navigator.clipboard?.writeText(text);
    setCopied(i);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-3 py-1 text-xs font-semibold text-[#7C3AED] mb-3">
            OUTREACH ENGINE
          </div>
          <h1 className="font-display text-3xl font-black text-white">Outreach Scripts</h1>
          <p className="mt-2 text-slate-400 text-sm max-w-xl">
            Copy-paste ready scripts for texts, DMs, phone calls, follow-ups, and closes. No fluff — just what works.
          </p>
        </div>

        {/* Target Rule */}
        <div className="mb-8 rounded-xl border border-[#7C3AED]/30 bg-[#7C3AED]/5 px-4 py-4">
          <p className="text-sm font-semibold text-white mb-1">The 20/Day Rule</p>
          <p className="text-sm text-slate-400">Message 20 targeted people per day for 7 days straight. Track who responds. Follow up on everyone. That's 140 outreach touches in your first week — enough to get your first 3–5 clients.</p>
        </div>

        {/* Scripts */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {SCRIPTS.map((s, i) => (
            <div key={i} className="rounded-2xl border border-[#1A2D50] p-5" style={{ background: "#0F1520" }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{s.icon}</span>
                <h3 className="font-display text-sm font-bold text-white">{s.type}</h3>
              </div>
              <p className="text-sm text-slate-300 italic leading-relaxed mb-4 border-l-2 border-[#7C3AED] pl-3">
                "{s.script}"
              </p>
              <p className="text-xs text-slate-500 mb-3">{s.tip}</p>
              <button
                onClick={() => copy(s.script, i)}
                className="text-xs font-semibold text-[#D4A017] hover:text-white transition-colors"
              >
                {copied === i ? "Copied!" : "Copy Script →"}
              </button>
            </div>
          ))}
        </div>

        {/* Upgrade */}
        <div className="mt-12 rounded-2xl border border-[#D4A017]/30 bg-[#D4A017]/5 p-8 text-center">
          <h2 className="font-display text-xl font-bold text-white mb-2">Unlock Full Outreach Automation</h2>
          <p className="text-slate-400 text-sm mb-6">Pro and Elite members get automated follow-up sequences, CRM-tracked outreach, and custom scripts tuned to your exact business and offer.</p>
          <Link to="/waitlist?tier=pro" className="btn-gold px-8 py-3 text-sm font-bold">
            Upgrade to Pro
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
