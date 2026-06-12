import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  { icon: "🗺️", title: "Everything in Pro", desc: "All unlimited roadmaps, 90-day plans, sales scripts, credit readiness, exports, AI refinement, and progress tracking." },
  { icon: "🎯", title: "Advanced Strategist Guidance", desc: "Done-with-you style execution support. Not just a plan — real step-by-step guidance through each business milestone." },
  { icon: "📈", title: "Financial Projections", desc: "Revenue forecasting, break-even analysis, and 12-month income projections built around your idea and market." },
  { icon: "🤝", title: "Funding Partner Resources", desc: "Access to vetted lenders, SBA resource partners, CDFI contacts, and business credit building vendor lists." },
  { icon: "🏛️", title: "Company Formation Checklist", desc: "LLC, EIN, S-corp election, operating agreements, registered agent, business address — fully sequenced and explained." },
  { icon: "™️", title: "Trademark & IP Guidance", desc: "When and how to protect your brand. Basic trademark search guidance, filing readiness, and what to do first." },
  { icon: "📱", title: "Social Media & Marketing Strategy", desc: "Platform-specific marketing plans, content calendars, organic growth tactics, and paid ad readiness guidance." },
  { icon: "🏆", title: "Priority Support", desc: "Elite members get priority response times and dedicated onboarding support to get you off the ground faster." },
];

const BEST_FOR = [
  "You're serious about hitting $5K–$20K/month within 90 days",
  "You want financial projections you can show a lender or investor",
  "You need funding resources, not just a funding readiness checklist",
  "You want done-with-you strategy — not just a tool to use alone",
  "You're building a real company, not testing a side hustle idea",
  "You need trademark protection and company formation guidance",
];

export default function ElitePage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #00C9B1 0%, transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-black uppercase tracking-widest text-teal-400">PEN2PRO Elite — Best Value</span>
          </div>
          <h1 className="font-display text-5xl font-black leading-tight text-white md:text-7xl">
            Advanced Strategy.<br />
            <span style={{ background: "linear-gradient(90deg, #00C9B1, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Full Execution.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Elite is for builders who are ready to move fast, think bigger, and execute with the financial projections, funding resources, legal foundation, and done-with-you strategy support to back it up.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/pricing"
              className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14]"
              style={{ background: "#00C9B1", boxShadow: "0 0 35px rgba(0,201,177,0.35)" }}>
              Upgrade to Elite — $499/mo
            </Link>
            <Link to="/waitlist?tier=elite" className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 hover:border-teal-400 hover:text-teal-400 transition">
              Join Waitlist for June 15
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">Cancel anytime · Priority onboarding · Everything in Pro included</p>
        </div>
      </section>

      {/* PRICING CALLOUT */}
      <section className="border-y border-[#1A2235] bg-[#0F1520] px-5 py-10">
        <div className="mx-auto max-w-4xl flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">PEN2PRO Elite</p>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-5xl font-black text-white">$499</span>
              <span className="text-slate-400">/month</span>
            </div>
            <p className="mt-2 text-sm text-slate-500">Advanced strategy + done-with-you execution. Cancel anytime.</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-400 mb-3">Launching June 15, 2026</p>
            <Link to="/waitlist?tier=elite"
              className="inline-block rounded-2xl px-8 py-3.5 text-sm font-black text-[#080C14]"
              style={{ background: "#00C9B1" }}>
              Lock In Elite Pricing Now
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-400">Elite Includes</p>
            <h2 className="font-display text-4xl font-black text-white">The full arsenal</h2>
            <p className="mt-3 text-slate-500">Everything in Pro, plus advanced strategy and execution support that goes beyond the plan.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6 hover:border-teal-400/30 transition-all">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 text-sm font-bold text-white">{f.title}</h3>
                <p className="text-xs leading-6 text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-[#0F1520] px-5 py-20 border-t border-[#1A2235]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-black text-white">Elite is for you if...</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {BEST_FOR.map((text) => (
              <div key={text} className="flex items-start gap-3 rounded-xl border border-[#1A2235] bg-[#080C14] p-4">
                <span className="mt-0.5 text-teal-400 font-black shrink-0">✓</span>
                <p className="text-sm text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELITE vs PRO CALLOUT */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-teal-400/20 bg-[#0F1520] p-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-400">Why Elite Over Pro</p>
          <h3 className="mb-4 font-display text-2xl font-black text-white">
            Pro gives you the plan. Elite gives you the plan AND the support to execute it.
          </h3>
          <p className="text-slate-400 text-sm leading-7">
            Pro members get excellent roadmaps and tools. Elite members get financial projections, funding contacts, company formation guidance, done-with-you support, and priority access. If you're building something real — not just testing — Elite closes the execution gap.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link to="/waitlist?tier=elite"
              className="rounded-xl px-6 py-3 text-sm font-black text-[#080C14] text-center"
              style={{ background: "#00C9B1" }}>
              Claim Elite on Waitlist
            </Link>
            <Link to="/pro" className="rounded-xl border border-[#1A2235] px-6 py-3 text-sm font-semibold text-slate-400 hover:text-white transition text-center">
              Compare Pro First
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-24 text-center border-t border-[#1A2235]">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-4xl font-black text-white mb-4">
            Ready to go Elite?
          </h2>
          <p className="text-slate-400 mb-8">
            Join the waitlist and lock in your Elite pricing before June 15. Founding members get the best rate — locked for life.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite"
              className="rounded-2xl px-10 py-4 text-base font-black text-[#080C14]"
              style={{ background: "#00C9B1", boxShadow: "0 0 35px rgba(0,201,177,0.35)" }}>
              Join Waitlist — Elite Plan
            </Link>
            <Link to="/founders" className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-400 hover:border-yellow-500 hover:text-yellow-400 transition">
              View Founders Lifetime →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
