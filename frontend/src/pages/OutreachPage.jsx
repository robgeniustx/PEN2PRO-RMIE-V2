import { useState } from "react";
import { Link } from "react-router-dom";

const CHANNELS = [
  { id: "dm", label: "Direct Message", icon: "💬", best: "Local service, coaching, consulting" },
  { id: "cold_email", label: "Cold Email", icon: "📧", best: "B2B, service providers, freelancers" },
  { id: "phone", label: "Phone / Text", icon: "📱", best: "High-ticket sales, local contracts" },
  { id: "referral", label: "Referral Ask", icon: "🤝", best: "Existing customers, network connections" },
  { id: "social", label: "Social Outreach", icon: "📲", best: "Creators, coaches, community builders" },
  { id: "door", label: "In-Person / Door", icon: "🚪", best: "Local trades, pressure washing, lawn care" },
];

const SCRIPT = `Hi [First Name],

I noticed you might need help with [specific problem].

I work with [type of customer] to help them [specific result].

I would love to offer you a free [consultation / estimate / audit] — no pressure, just real value.

Would you be open to a quick 15-minute call this week?

— [Your Name], [Business Name]`;

export default function OutreachPage() {
  const [channel, setChannel] = useState("dm");
  const [copied, setCopied] = useState(false);

  function copyScript() {
    navigator.clipboard?.writeText(SCRIPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-white">Outreach Strategy</h1>
        <p className="mt-1 text-sm text-slate-400">
          Build your outreach system. Know who to contact, what to say, and how to follow up without feeling pushy.
        </p>
      </div>

      {/* Rule */}
      <div className="mb-8 rounded-2xl border border-[#1E88E5]/30 bg-[#0F1520] p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-[#1E88E5]">Outreach First Principle</p>
        <p className="mt-2 text-base font-semibold text-white">
          The fastest path to your first dollar is a direct conversation with someone who has the problem you solve.
          Outreach before ads. Relationships before funnels.
        </p>
      </div>

      {/* Channel Picker */}
      <div className="mb-8 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
        <h2 className="mb-4 text-lg font-bold text-white">Choose Your Outreach Channel</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {CHANNELS.map((c) => (
            <button
              key={c.id}
              onClick={() => setChannel(c.id)}
              className={`rounded-xl border p-3.5 text-left transition ${
                channel === c.id
                  ? "border-[#FF8A00] bg-[#1A2235]"
                  : "border-[#1A2D50] bg-[#0A0F1E] hover:border-slate-500"
              }`}
            >
              <span className="mb-1 block text-xl">{c.icon}</span>
              <p className={`text-sm font-bold ${channel === c.id ? "text-[#FF8A00]" : "text-white"}`}>{c.label}</p>
              <p className="mt-0.5 text-xs text-slate-500">{c.best}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Script Template */}
      <div className="mb-8 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">Starter Script Template</h2>
          <button
            onClick={copyScript}
            className="text-xs font-semibold text-[#1E88E5] hover:text-white transition"
          >
            {copied ? "Copied ✓" : "Copy Script"}
          </button>
        </div>
        <pre className="whitespace-pre-wrap rounded-xl bg-[#0A0F1E] p-4 text-sm leading-relaxed text-slate-300">
          {SCRIPT}
        </pre>
        <p className="mt-3 text-xs text-slate-500">
          Replace [brackets] with your actual information. Keep it short, specific, and human.
        </p>
      </div>

      {/* 7-Day Plan */}
      <div className="mb-8 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
        <h2 className="mb-4 text-lg font-bold text-white">7-Day Outreach Launch Plan</h2>
        {[
          ["Day 1–2", "Build your prospect list — 50 people who have the problem you solve."],
          ["Day 3", "Customize your script for each channel and audience segment."],
          ["Day 4–5", "Send outreach to 20 prospects per day. Track opens and replies."],
          ["Day 6", "Follow up with everyone who did not respond after 48 hours."],
          ["Day 7", "Review results, close any warm leads, and refine your script."],
        ].map(([day, action]) => (
          <div key={day} className="mb-3 flex gap-4">
            <span className="mt-0.5 shrink-0 rounded-lg bg-[#1A2235] px-2.5 py-1 text-xs font-bold text-[#FF8A00]">{day}</span>
            <p className="text-sm text-slate-300">{action}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-[#1A2D50] bg-gradient-to-br from-[#0F1520] to-[#1A2235] p-6 text-center">
        <h2 className="mb-2 text-lg font-bold text-white">Get a Full Outreach Strategy in Your Blueprint</h2>
        <p className="mb-5 text-sm text-slate-400">
          Pro and Elite members get a custom outreach plan, follow-up sequences, and sales scripts
          built directly into their PEN2PRO roadmap.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/starter" className="rounded-xl px-5 py-2.5 text-sm font-bold text-[#080C14] btn-gold">
            Start Free Roadmap
          </Link>
          <Link to="/pro" className="rounded-xl border border-[#1A2D50] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:border-[#FF8A00] transition">
            View Pro Plan
          </Link>
        </div>
      </div>
    </div>
  );
}
