import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MODULES = [
  { icon: "💰", title: "Revenue Acceleration", desc: "Pricing strategy, offer restructuring, upsell/downsell framework, and revenue model optimization for your specific business." },
  { icon: "📣", title: "Marketing Strategy", desc: "Content strategy, social media presence, posting cadence, hashtag strategy, and local vs. digital marketing mix." },
  { icon: "📬", title: "Outreach Campaigns", desc: "Cold outreach scripts, DM sequences, email campaigns, follow-up systems, and response rate optimization." },
  { icon: "💲", title: "Pricing Strategy", desc: "How to price your offer, create packages, position value, and increase average transaction value without losing customers." },
  { icon: "🎯", title: "Customer Acquisition", desc: "Define your ideal customer, build a prospect list, create a repeatable acquisition system, and fill your pipeline." },
  { icon: "🏦", title: "Funding Readiness", desc: "Get your business fundable — revenue documentation, credit preparation, lender relationships, and funding application strategy." },
  { icon: "🗣️", title: "Sales Scripts", desc: "Word-for-word sales conversations — phone scripts, in-person pitches, objection handling, and closing language." },
  { icon: "📅", title: "30/60/90-Day Execution Plan", desc: "Specific weekly goals, KPIs, action items, and milestones laid out in a realistic timeline built for your stage of business." },
];

const PLAN_DAYS = [
  {
    period: "Days 1–30",
    label: "Foundation & First Revenue",
    color: "#D4A017",
    items: [
      "Finalize offer and pricing structure",
      "Build outreach list of 100+ prospects",
      "Send 20 messages per day",
      "Set up Google Business Profile",
      "Launch first paid campaign ($10/day test)",
      "Collect 3 testimonials from early customers",
    ],
  },
  {
    period: "Days 31–60",
    label: "Traction & Systems",
    color: "#00C9B1",
    items: [
      "Convert outreach to 5+ paying clients",
      "Build referral system",
      "Create first content calendar",
      "Establish weekly revenue tracking",
      "Open vendor credit accounts",
      "Begin business credit building",
    ],
  },
  {
    period: "Days 61–90",
    label: "Scale & Funding Prep",
    color: "#1E88E5",
    items: [
      "Double outreach or launch paid ads",
      "Hire or contract first help",
      "Document SOPs for repeatable service",
      "Apply for first business credit card",
      "Prepare funding package",
      "Hit 30-day revenue goal and set 6-month target",
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
          <div className="h-[700px] w-[700px] rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, #00C9B1 0%, transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5" style={{ borderColor: "rgba(0,201,177,0.3)", background: "rgba(0,201,177,0.08)" }}>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00C9B1" }}>Accelerator Mode — Growth & Monetization</span>
          </div>
          <h1 className="font-display text-5xl font-black leading-tight tracking-tight text-white md:text-6xl">
            You Have a Business.<br />
            <span style={{ color: "#D4A017" }}>Now Let's Scale It.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Accelerator mode is for businesses that are past the foundation stage and ready to drive real revenue — outreach campaigns, pricing optimization, marketing strategy, funding readiness, and a 90-day execution plan with specific daily actions.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/starter" className="btn-gold rounded-xl px-8 py-3.5 text-base font-black text-[#080C14]">
              Start Your Roadmap
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-base font-semibold text-slate-300 transition hover:border-[#00C9B1] hover:text-white">
              Unlock Full Accelerator with Elite
            </Link>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="mb-3 text-center text-3xl font-black text-white">Accelerator Modules</h2>
        <p className="mb-12 text-center text-slate-400">Eight focus areas that cover every dimension of business growth — from marketing to funding.</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m) => (
            <div key={m.title} className="rounded-2xl border border-[#1A2235] p-6 transition hover:border-[#00C9B1]/30" style={{ background: "#0F1520" }}>
              <div className="mb-4 text-3xl">{m.icon}</div>
              <h3 className="mb-2 font-bold text-white">{m.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 30/60/90 PLAN */}
      <section className="mx-auto max-w-5xl px-5 pb-20">
        <h2 className="mb-3 text-center text-3xl font-black text-white">Your 90-Day Execution Plan</h2>
        <p className="mb-12 text-center text-slate-400">Not theory. Specific actions, specific milestones, specific weekly targets — built for your stage of business.</p>
        <div className="grid gap-6 lg:grid-cols-3">
          {PLAN_DAYS.map((phase) => (
            <div key={phase.period} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <div className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: phase.color }}>{phase.period}</div>
              <h3 className="mb-5 text-lg font-black text-white">{phase.label}</h3>
              <div className="space-y-3">
                {phase.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: phase.color }} />
                    <span className="text-sm text-slate-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SAMPLE OUTPUT */}
      <section className="mx-auto max-w-3xl px-5 pb-20">
        <div className="rounded-2xl border p-8" style={{ borderColor: "rgba(212,160,23,0.2)", background: "rgba(212,160,23,0.03)" }}>
          <div className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Example Accelerator Output</div>
          <h3 className="mb-2 font-bold text-white">Pressure Washing Business — Day 1 Action Plan</h3>
          <p className="mb-4 text-sm text-slate-400">Instead of "post on social media and market your business," here's what Accelerator actually outputs:</p>
          <div className="space-y-2 text-sm text-slate-300">
            {[
              "Create 3 offer packages: Basic Clean ($99), Standard Clean ($179), Deep Clean + Sealing ($299)",
              "Build a list of 50 residential prospects using Google Maps + Nextdoor",
              "Message 20 prospects per day for 7 days using the provided DM script",
              "Set up Google Business Profile today — it's free and drives inbound",
              "Post 3 before/after photos per week on Facebook and Instagram",
              "Collect 3 testimonials from neighbors or early clients within 14 days",
              "Test a $10/day Facebook ad only after validating demand organically first",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="shrink-0 font-black" style={{ color: "#D4A017" }}>{i + 1}.</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-5 pb-28 text-center">
        <div className="rounded-2xl border px-8 py-12" style={{ borderColor: "rgba(0,201,177,0.3)", background: "rgba(0,201,177,0.04)" }}>
          <h2 className="mb-4 text-3xl font-black text-white">Ready to Accelerate?</h2>
          <p className="mb-8 text-slate-400">Start with a free roadmap or upgrade to unlock the full Accelerator experience with Elite.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="btn-gold rounded-xl px-8 py-3.5 font-black text-[#080C14]">
              Start Free Roadmap
            </Link>
            <Link to="/waitlist?tier=elite" className="rounded-xl border px-8 py-3.5 font-semibold transition" style={{ borderColor: "rgba(0,201,177,0.4)", color: "#00C9B1" }}>
              Unlock Elite Accelerator →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
