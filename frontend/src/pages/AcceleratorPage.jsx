import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ACCELERATOR_PILLARS = [
  {
    icon: "💰",
    title: "Revenue Acceleration",
    desc: "Identify your highest-leverage revenue streams, raise your prices strategically, and build recurring income into your model.",
  },
  {
    icon: "📣",
    title: "Marketing Strategy",
    desc: "Content calendar, paid ad readiness, email marketing system, Google Business optimization, and social proof frameworks.",
  },
  {
    icon: "🎯",
    title: "Outreach Campaigns",
    desc: "Cold DM sequences, email scripts, phone call frameworks, and follow-up systems — built for your specific offer and market.",
  },
  {
    icon: "💲",
    title: "Pricing Strategy",
    desc: "Test your pricing, build tiered offers, anchor your premium package, and stop leaving money on the table.",
  },
  {
    icon: "👥",
    title: "Customer Acquisition",
    desc: "50 targeted prospect identification, daily outreach quotas, referral systems, and conversion rate optimization tactics.",
  },
  {
    icon: "📊",
    title: "Funding Readiness",
    desc: "Business credit timeline, personal credit prep, lender documentation checklist, and revenue tracking for fundability.",
  },
  {
    icon: "📜",
    title: "Sales Scripts Library",
    desc: "Tested scripts for cold calls, DMs, email follow-ups, proposal conversations, and objection handling — customized for your business.",
  },
  {
    icon: "🗓️",
    title: "30/60/90-Day Execution Plan",
    desc: "Month-by-month milestones, revenue targets, marketing benchmarks, and growth checkpoints — all built around your business.",
  },
];

const PLAN_PHASES = [
  {
    phase: "30 Days",
    color: "#1E88E5",
    title: "Validate and Monetize",
    goals: [
      "Land your first 3–5 paying clients",
      "Test and confirm your pricing",
      "Collect 5 testimonials",
      "Daily outreach system live",
      "Revenue target: $1,500–$3,000",
    ],
  },
  {
    phase: "60 Days",
    color: "#00C9B1",
    title: "Systemize and Scale",
    goals: [
      "Build a repeatable client system",
      "Launch your first paid marketing",
      "Add referral program",
      "Hire first support or helper",
      "Revenue target: $3,000–$8,000",
    ],
  },
  {
    phase: "90 Days",
    color: "#D4A017",
    title: "Accelerate to Consistent Revenue",
    goals: [
      "Hit first $10K revenue month",
      "Apply for business funding",
      "Build recurring client base",
      "Automate follow-up and retention",
      "Revenue target: $8,000–$15,000",
    ],
  },
];

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="h-[700px] w-[700px] rounded-full opacity-[0.07]"
            style={{ background: "radial-gradient(circle, #00C9B1 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ borderColor: "rgba(0,201,177,0.3)", background: "rgba(0,201,177,0.08)", color: "#00C9B1" }}
          >
            🚀 PEN2PRO Accelerator
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight text-white md:text-6xl">
            From First Client to<br />
            <span style={{ background: "linear-gradient(90deg, #00C9B1, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Consistent Revenue.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            The Accelerator is PEN2PRO's advanced growth and monetization engine — built for businesses
            that are already off the ground and ready to scale their revenue, marketing, and operations.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=elite"
              className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #00C9B1, #D4A017)" }}
            >
              Unlock Accelerator Access →
            </Link>
            <Link
              to="/starter"
              className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-teal-400 hover:text-teal-400"
            >
              Start Free Roadmap First
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">Accelerator tools included with Pro, Elite, and Founders plans</p>
        </div>
      </section>

      {/* 8 PILLARS */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-400">Accelerator Pillars</p>
            <h2 className="font-display text-4xl font-black text-white">Eight growth engines in one platform</h2>
            <p className="mt-3 text-slate-500">Most tools give you one or two of these. The Accelerator gives you all eight — integrated.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ACCELERATOR_PILLARS.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-[#1A2235] bg-[#080C14] p-6 transition-all hover:border-teal-500/30"
              >
                <div className="mb-3 text-3xl">{p.icon}</div>
                <h3 className="mb-2 text-base font-bold text-white">{p.title}</h3>
                <p className="text-sm leading-6 text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30/60/90 PLAN */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Execution Timeline</p>
            <h2 className="font-display text-4xl font-black text-white">Your 90-day revenue acceleration plan</h2>
            <p className="mt-3 text-slate-500">Real milestones. Real revenue targets. Not motivational fluff.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {PLAN_PHASES.map((phase) => (
              <div
                key={phase.phase}
                className="rounded-2xl border bg-[#0F1520] p-6"
                style={{ borderColor: `${phase.color}40` }}
              >
                <div
                  className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-black uppercase tracking-widest"
                  style={{ borderColor: `${phase.color}50`, color: phase.color, background: `${phase.color}10` }}
                >
                  {phase.phase}
                </div>
                <h3 className="mb-4 text-lg font-black text-white">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-0.5 font-bold" style={{ color: phase.color }}>→</span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES ACCELERATOR DIFFERENT */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-400">The Difference</p>
            <h2 className="font-display text-4xl font-black text-white">Generic advice vs. Accelerator output</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-red-400">Generic Business Advice</p>
              <ul className="space-y-3 text-sm text-slate-500">
                {[
                  '"Post on social media to get clients."',
                  '"Focus on your target market."',
                  '"Build a marketing plan."',
                  '"Price competitively."',
                  '"Network and grow your business."',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-6">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-teal-400">PEN2PRO Accelerator Output</p>
              <ul className="space-y-3 text-sm text-slate-300">
                {[
                  "Message 20 local prospects per day for 14 days using this exact DM script.",
                  "Create 3 offer tiers at $149, $349, and $549. Lead with $149 to get fast wins.",
                  "Run a $10/day Facebook ad ONLY after you have 5 testimonials from real clients.",
                  "Apply for a Uline net-30 account on Day 21 to start building business credit.",
                  "Target 50 homeowners in zip codes 77001–77005 using Nextdoor in your first 30 days.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-teal-400">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-400">Stop guessing. Start accelerating.</p>
          <h2 className="font-display text-4xl font-black text-white md:text-5xl">
            Your revenue ceiling<br />
            <span className="gradient-text">just got raised.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-500">
            Accelerator tools are included in Pro, Elite, and Founders plans. Start with a free roadmap, then upgrade to unlock the full growth engine.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=elite"
              className="rounded-2xl px-10 py-4 text-base font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #00C9B1, #D4A017)" }}
            >
              Unlock Accelerator Access →
            </Link>
            <Link
              to="/pro"
              className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-yellow-500 hover:text-yellow-400"
            >
              Explore Pro Plan
            </Link>
          </div>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/founders" className="text-sm font-semibold text-yellow-500 hover:opacity-80 transition">
              Explore Founders Lifetime →
            </Link>
            <span className="hidden text-slate-600 sm:block">·</span>
            <Link to="/starter" className="text-sm text-slate-500 hover:text-white transition">
              Start free first
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
