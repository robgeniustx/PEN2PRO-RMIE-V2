import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ACCELERATOR_MODULES = [
  {
    icon: "💰",
    title: "Revenue Acceleration",
    desc: "AI-built revenue model for your specific business — pricing, packaging, upsell structure, and income targets for Month 1, 3, and 12.",
  },
  {
    icon: "📢",
    title: "Marketing Strategy",
    desc: "Custom marketing plan: platforms to focus on, content types that convert, audience targeting, and a 30-day content calendar.",
  },
  {
    icon: "📬",
    title: "Outreach Campaigns",
    desc: "10 ready-to-send outreach messages, DM scripts, cold email templates, and a daily prospecting system — built for your industry.",
  },
  {
    icon: "🏷️",
    title: "Pricing Strategy",
    desc: "Stop undercharging. Get a pricing framework based on your market, offer type, and target customer — with the psychology to back it up.",
  },
  {
    icon: "🎯",
    title: "Customer Acquisition",
    desc: "Where to find your first 10, 50, and 100 customers. Referral systems, local tactics, online strategies, and repeat buyer frameworks.",
  },
  {
    icon: "🏦",
    title: "Funding Readiness",
    desc: "Know your funding score before you apply. Get a step-by-step readiness checklist — credit, documents, bank history, and entity structure.",
  },
  {
    icon: "💬",
    title: "Sales Scripts",
    desc: "Word-for-word scripts for discovery calls, in-person pitches, follow-up conversations, and objection handling — ready to use today.",
  },
  {
    icon: "📅",
    title: "30/60/90-Day Execution Plan",
    desc: "A specific daily action plan that maps out every milestone from launch to first $10K — with weekly accountability checkpoints.",
  },
];

const EXECUTION_PLAN = [
  {
    period: "Days 1–30",
    label: "Launch Phase",
    color: "#FF8A00",
    actions: [
      "Form your LLC and open your business bank account",
      "Create and publish your 3-tier offer packages",
      "Set up your Google Business Profile and social handles",
      "Send your first 50 outreach messages using your AI script",
      "Close your first 2–5 paying clients",
      "Generate your first testimonials and referrals",
    ],
  },
  {
    period: "Days 31–60",
    label: "Growth Phase",
    color: "#2d9cff",
    actions: [
      "Systematize your delivery and client onboarding",
      "Build your first email list and weekly follow-up sequence",
      "Begin your credit-building foundation (net-30 vendors)",
      "Scale outreach to 100 contacts per week",
      "Document your process and create your first standard operating procedure",
      "Test your first $10/day paid ad after validating demand",
    ],
  },
  {
    period: "Days 61–90",
    label: "Scale Phase",
    color: "#00C9B1",
    actions: [
      "Review your funding readiness score — apply if ready",
      "Hire your first contractor or VA to free up your time",
      "Launch your referral program and affiliate partnerships",
      "Create your first lead magnet and automated lead funnel",
      "Set your 6-month revenue goal and build the plan to hit it",
      "Upgrade your tools, team, and systems to match your growth",
    ],
  },
];

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-20 pb-24 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="h-[700px] w-[700px] rounded-full opacity-[0.08]"
            style={{ background: "radial-gradient(circle, #FF8A00 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            PEN2PRO Accelerator
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight text-white md:text-6xl">
            From Zero to Revenue.
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              In 90 Days.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-400">
            PEN2PRO Accelerator is the advanced growth and monetization mode. Built for entrepreneurs who already have momentum and are ready to scale — with real marketing, real outreach, real pricing strategy, and a 90-day execution plan.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/starter"
              className="rounded-2xl px-8 py-4 text-base font-black"
              style={{ background: "linear-gradient(135deg, #FF8A00, #D4A017)", color: "#080C14", boxShadow: "0 0 35px rgba(255,138,0,0.4)" }}
            >
              Start Your Free Roadmap →
            </Link>
            <Link
              to="/elite"
              className="rounded-2xl border border-[#FF8A00]/30 px-8 py-4 text-base font-semibold text-[#FF8A00] transition hover:border-[#FF8A00] hover:bg-[#FF8A00]/5"
            >
              See Elite Plan
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">Full Accelerator tools available on Pro and Elite plans</p>
        </div>
      </section>

      {/* MODULES */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Accelerator Modules</p>
            <h2 className="font-display text-4xl font-black text-white">8 growth systems. All in one platform.</h2>
            <p className="mt-3 text-slate-500">Not generic advice — specific systems built for your business type, market, and stage.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ACCELERATOR_MODULES.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-[#1A2235] bg-[#080C14] p-6 hover:border-[#FF8A00]/30 hover:bg-[#0F1520] transition"
              >
                <div className="mb-3 text-3xl">{m.icon}</div>
                <h3 className="mb-2 text-base font-bold text-white">{m.title}</h3>
                <p className="text-sm leading-6 text-slate-500">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30/60/90 DAY PLAN */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-400">Execution Plan</p>
            <h2 className="font-display text-4xl font-black text-white">Your 90-day acceleration roadmap</h2>
            <p className="mt-3 text-slate-500">Specific actions. Specific milestones. No guessing what comes next.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {EXECUTION_PLAN.map((phase) => (
              <div
                key={phase.period}
                className="rounded-2xl border bg-[#0F1520] p-6"
                style={{ borderColor: phase.color + "40" }}
              >
                <div className="mb-2">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-black"
                    style={{ background: phase.color + "20", color: phase.color, border: `1px solid ${phase.color}40` }}
                  >
                    {phase.period}
                  </span>
                </div>
                <h3 className="mb-4 mt-3 text-lg font-black text-white">{phase.label}</h3>
                <ul className="space-y-2.5">
                  {phase.actions.map((action) => (
                    <li key={action} className="flex items-start gap-2.5 text-sm text-slate-400">
                      <span className="mt-0.5 shrink-0 font-bold" style={{ color: phase.color }}>→</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BAD VS GOOD OUTPUT */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Real vs Generic</p>
            <h2 className="font-display text-4xl font-black text-white">PEN2PRO doesn't give generic advice</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-bold text-red-400">
                ✗ Generic AI Advice
              </div>
              <p className="text-sm leading-7 text-slate-400 italic">
                "You should post on social media and market your business to potential customers. Consider networking and reaching out to people in your community."
              </p>
            </div>
            <div className="rounded-2xl border border-teal-400/20 bg-teal-400/5 p-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 text-xs font-bold text-teal-400">
                ✓ PEN2PRO Accelerator Output
              </div>
              <p className="text-sm leading-7 text-slate-400">
                "Create 3 offer packages at $300, $600, and $1,200. Message 20 local contractors on Facebook Groups daily for 7 days using the script below. Create a Google Business Profile with photos this week. After booking your first 3 clients, collect a testimonial and add it to your profile."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIER ACCESS */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A017]">Accelerator Access</p>
            <h2 className="font-display text-4xl font-black text-white">Which plan unlocks Accelerator?</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                tier: "Free",
                price: "$0",
                access: "Starter roadmap — 7-day plan, brand name ideas, basic model",
                cta: "Start Free",
                href: "/starter",
                style: "border-[#1A2235] text-slate-300",
                btnStyle: "border border-[#1A2235] text-slate-300 hover:border-slate-400",
              },
              {
                tier: "Pro",
                price: "$249/mo",
                access: "Full Accelerator — 90-day plan, outreach scripts, credit readiness, marketing strategy",
                cta: "Upgrade to Pro",
                href: "/pricing",
                style: "border-[#2d9cff]/40",
                btnStyle: "bg-[#2d9cff] text-[#081226]",
              },
              {
                tier: "Elite",
                price: "$499/mo",
                access: "Everything in Pro + financial projections, funding resources, done-with-you strategy, priority support",
                cta: "Upgrade to Elite",
                href: "/elite",
                style: "border-teal-400/40",
                btnStyle: "bg-gradient-to-r from-teal-400 to-[#1E88E5] text-[#080C14]",
              },
            ].map((t) => (
              <div key={t.tier} className={`rounded-2xl border bg-[#0F1520] p-6 flex flex-col ${t.style}`}>
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-500">{t.tier}</p>
                <p className="mb-3 font-display text-2xl font-black text-white">{t.price}</p>
                <p className="mb-6 flex-1 text-sm text-slate-400 leading-6">{t.access}</p>
                <Link to={t.href} className={`block rounded-xl px-4 py-3 text-center text-sm font-black transition ${t.btnStyle}`}>
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Time to accelerate</p>
          <h2 className="mb-4 font-display text-4xl font-black text-white md:text-5xl">
            Stop waiting for the right time.<br />Build the right system.
          </h2>
          <p className="mb-10 text-lg text-slate-400">
            PEN2PRO Accelerator gives you the marketing, outreach, sales, and growth tools to get from idea to income — fast. Start free or upgrade to unlock the full system.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/starter"
              className="rounded-2xl px-10 py-4 text-base font-black"
              style={{ background: "linear-gradient(135deg, #FF8A00, #D4A017)", color: "#080C14", boxShadow: "0 0 35px rgba(255,138,0,0.4)" }}
            >
              Start Your Free Roadmap →
            </Link>
            <Link
              to="/founders"
              className="rounded-2xl border border-[#D4A017]/40 px-8 py-4 text-base font-semibold text-[#D4A017] transition hover:border-[#D4A017]"
            >
              See Founders Lifetime →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
