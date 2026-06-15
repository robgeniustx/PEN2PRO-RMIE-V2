import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ACCELERATOR_MODULES = [
  {
    icon: "💰",
    title: "Revenue Acceleration",
    body: "Analyze your current revenue model, identify the biggest gaps, and get specific tactics to increase monthly income — fast. No filler.",
    tag: "Core Module",
  },
  {
    icon: "📣",
    title: "Marketing Strategy",
    body: "Full marketing plan for your specific business, audience, and budget. Organic, paid, and referral channels with prioritized action steps.",
    tag: "Core Module",
  },
  {
    icon: "📬",
    title: "Outreach Campaigns",
    body: "Cold outreach scripts, follow-up sequences, and direct message templates for LinkedIn, SMS, email, and in-person — written for your offer.",
    tag: "Sales",
  },
  {
    icon: "🎯",
    title: "Pricing Strategy",
    body: "Stop undercharging. Get a pricing audit, value-based pricing recommendations, and a tiered offer structure that maximizes conversion and revenue.",
    tag: "Sales",
  },
  {
    icon: "🤝",
    title: "Customer Acquisition System",
    body: "A repeatable, weekly system for finding, qualifying, and closing new clients — no guessing, no wasted energy, no cold calling without strategy.",
    tag: "Growth",
  },
  {
    icon: "💳",
    title: "Funding Readiness",
    body: "Know exactly where you stand before applying for business funding. Lender preparation, credit readiness, and a step-by-step funding timeline.",
    tag: "Funding",
  },
  {
    icon: "📞",
    title: "Sales Scripts",
    body: "Discovery call scripts, objection handlers, closing scripts, and follow-up sequences written for your specific service or product.",
    tag: "Sales",
  },
  {
    icon: "📊",
    title: "30 / 60 / 90-Day Execution Plan",
    body: "A structured quarter-plan with daily actions, weekly milestones, and monthly targets — built around your specific business stage and goals.",
    tag: "Execution",
  },
];

const ACCELERATION_PHASES = [
  {
    phase: "Phase 1",
    title: "Revenue Audit & Pricing Fix",
    days: "Days 1–10",
    items: [
      "Identify your highest-margin offer",
      "Audit current pricing against market",
      "Create 3-tier offer structure",
      "Set a 30-day revenue target",
    ],
    color: "#FF8A00",
  },
  {
    phase: "Phase 2",
    title: "Outreach & Customer Acquisition",
    days: "Days 11–30",
    items: [
      "Build prospect list (50+ leads)",
      "Deploy outreach campaign",
      "Follow-up sequence activation",
      "First 3 client conversations",
    ],
    color: "#1E88E5",
  },
  {
    phase: "Phase 3",
    title: "Marketing & Visibility",
    days: "Days 31–60",
    items: [
      "Social media content system",
      "Google Business Profile setup",
      "Referral partner program",
      "First paid ad test ($10/day)",
    ],
    color: "#00C9B1",
  },
  {
    phase: "Phase 4",
    title: "Scale & Funding Readiness",
    days: "Days 61–90",
    items: [
      "Revenue tracking & reporting",
      "Business credit foundation",
      "Funding application preparation",
      "Systems for consistent income",
    ],
    color: "#d4af37",
  },
];

const WHO_ACCELERATOR_IS_FOR = [
  "You already have a business idea or side hustle — you need to grow it",
  "You're making some money but not consistently or at scale",
  "Your marketing is inconsistent and you don't have a real outreach system",
  "You know you're undercharging but don't know how to fix the pricing",
  "You want a structured 90-day plan — not generic advice",
  "You're ready to apply for funding and need the preparation steps",
];

export default function AcceleratorPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">

      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -left-32 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.14) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[30%] -right-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,201,177,0.08) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 pt-24 pb-16 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/40 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            🚀 PEN2PRO Accelerator
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Growth at Full Speed.
            <br />
            <span className="gradient-text">90 Days to Real Revenue.</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            The Accelerator is built for people who are past the idea stage and ready to execute.
            Revenue acceleration, marketing strategy, outreach campaigns, pricing optimization,
            and a structured 90-day growth plan — all built for your specific business.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/starter"
              className="rounded-xl px-10 py-4 text-base font-black text-[#0A0F1E] btn-gold shadow-[0_0_35px_rgba(255,138,0,0.4)] transition hover:scale-[1.02]"
            >
              Start Your Free Roadmap
            </Link>
            <Link
              to="/pro"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Accelerator is in Pro →
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Accelerator features are unlocked with Pro ($249/mo) and Elite ($499/mo) plans.
          </p>
        </div>
      </section>

      {/* Module Grid */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Accelerator Modules</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            8 Growth Systems in One Engine
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            Not strategy advice. Not motivational content. Real systems with real outputs — built around your specific business.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {ACCELERATOR_MODULES.map((m) => (
              <div key={m.title} className="relative flex gap-4 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 transition hover:border-[#FF8A00]/30">
                <div className="text-2xl shrink-0 mt-0.5">{m.icon}</div>
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="font-bold text-white">{m.title}</h3>
                    <span className="rounded-full border border-[#1A2D50] bg-[#080C14] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                      {m.tag}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 90-Day Plan */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">The 90-Day Framework</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            90 Days. 4 Phases. Real Results.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            The Accelerator structures your 90 days into 4 clear phases — each with daily actions, weekly milestones, and a specific revenue outcome.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {ACCELERATION_PHASES.map((phase) => (
              <div key={phase.phase} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: phase.color }}>{phase.phase}</span>
                    <h3 className="mt-1 font-bold text-white text-lg">{phase.title}</h3>
                  </div>
                  <span className="rounded-lg border px-2.5 py-1 text-xs font-semibold text-slate-400" style={{ borderColor: `${phase.color}30`, background: `${phase.color}10`, color: phase.color }}>
                    {phase.days}
                  </span>
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-300">
                      <span style={{ color: phase.color }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#00C9B1]">Who Accelerator Is For</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">
            For Builders Who Are Done Going Slow
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {WHO_ACCELERATOR_IS_FOR.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-[#1A2D50] bg-[#0F1520] px-5 py-4">
                <span className="text-[#FF8A00] font-bold mt-0.5">✓</span>
                <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier CTA */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Get Accelerator Access</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">
            Accelerator Is Built Into Pro & Elite
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {/* Free */}
            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Free</p>
              <p className="mb-4 text-3xl font-black text-white">$0</p>
              <p className="mb-4 text-sm text-slate-400">Basic blueprint preview and 7-day starter plan.</p>
              <Link to="/starter" className="block w-full rounded-xl border border-[#1A2D50] py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
                Start Free
              </Link>
            </div>
            {/* Pro */}
            <div className="rounded-2xl border border-[#2d9cff]/40 bg-[#101a30] p-6 text-center shadow-[0_0_30px_rgba(45,156,255,0.15)]">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#2d9cff]">Pro</p>
              <p className="mb-1 text-3xl font-black text-white">$249<span className="text-base text-slate-400">/mo</span></p>
              <p className="mb-4 text-xs text-slate-500">Full Accelerator + roadmap, scripts, outreach, CRM</p>
              <Link to="/pro" className="block w-full rounded-xl bg-[#2d9cff] py-3 text-sm font-black text-[#081226] transition hover:scale-[1.01]">
                Upgrade to Pro
              </Link>
            </div>
            {/* Elite */}
            <div className="rounded-2xl border border-[#00C9B1]/30 bg-[#0a1f1f] p-6 text-center shadow-[0_0_30px_rgba(0,201,177,0.12)]">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#00C9B1]">Elite</p>
              <p className="mb-1 text-3xl font-black text-white">$499<span className="text-base text-slate-400">/mo</span></p>
              <p className="mb-4 text-xs text-slate-500">Full Accelerator + financial projections + funding + done-with-you</p>
              <Link to="/elite" className="block w-full rounded-xl py-3 text-sm font-black text-white transition hover:scale-[1.01]" style={{ background: "linear-gradient(135deg, #00C9B1, #1E88E5)" }}>
                Upgrade to Elite
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black">
            90 Days From Now, Everything Can Look Different.
          </h2>
          <p className="mb-8 text-slate-400 text-lg">
            The businesses that scale are the ones that execute with a system. Start yours today.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-10 py-4 text-sm font-black text-[#0A0F1E] btn-gold shadow-[0_0_30px_rgba(255,138,0,0.35)] transition hover:scale-[1.02]">
              Start Free Roadmap
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              View All Plans
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            <Link to="/builder" className="hover:text-slate-300 transition-colors">Business Builder</Link>
            {" · "}
            <Link to="/elite" className="hover:text-slate-300 transition-colors">Elite Plan</Link>
            {" · "}
            <Link to="/founders" className="hover:text-slate-300 transition-colors">Founders Lifetime</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
