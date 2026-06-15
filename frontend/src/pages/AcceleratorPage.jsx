import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ACCEL_MODULES = [
  {
    icon: "💰",
    title: "Revenue Acceleration",
    body: "Identify your fastest path to revenue. Define your first offer, price it correctly, and map the path to your first client within 30 days.",
  },
  {
    icon: "📣",
    title: "Marketing Strategy",
    body: "Platform-specific strategy for your niche — organic content, paid ad readiness, partnership opportunities, and audience targeting.",
  },
  {
    icon: "📞",
    title: "Outreach Campaigns",
    body: "Done-for-you cold outreach scripts, follow-up sequences, and a structured 50-prospect targeting plan for week one.",
  },
  {
    icon: "💵",
    title: "Pricing Strategy",
    body: "Value-based pricing model, offer tier design, upsell paths, and competitor pricing analysis specific to your market.",
  },
  {
    icon: "🎯",
    title: "Customer Acquisition",
    body: "Lead generation strategy, referral programs, conversion funnel design, and client onboarding flow for your business model.",
  },
  {
    icon: "🏦",
    title: "Funding Readiness",
    body: "Fundability checklist, business credit roadmap, lender prep sequence, and grant opportunity identification for your stage.",
  },
  {
    icon: "🗣️",
    title: "Sales Scripts",
    body: "Discovery call framework, objection handling guide, closing script templates, and follow-up sequence — ready to deploy.",
  },
  {
    icon: "📅",
    title: "30/60/90-Day Execution Plan",
    body: "Exact weekly milestones, KPIs, and daily action items for your first three months of business growth.",
  },
];

const PHASES = [
  {
    period: "30 Days",
    color: "#FF8A00",
    title: "Foundation & First Client",
    items: [
      "Define offer, pricing tiers, and client promise",
      "Build outreach list (50 targeted prospects)",
      "Send 20 outreach messages per day for 7 days",
      "Set up Google Business Profile",
      "Collect first 3 testimonials",
    ],
  },
  {
    period: "60 Days",
    color: "#D4A017",
    title: "Momentum & Marketing",
    items: [
      "Launch organic content strategy (3x/week)",
      "Build referral program with existing clients",
      "Start building your email list",
      "Test $10/day ad (after first 5 clients)",
      "Close first 5–10 paying clients",
    ],
  },
  {
    period: "90 Days",
    color: "#1E88E5",
    title: "Scale & Funding Readiness",
    items: [
      "Optimize pricing and package structures",
      "Launch 2nd revenue stream or upsell",
      "Open business bank account (if not done)",
      "Start business credit file with net-30 vendors",
      "Apply for first business credit account",
    ],
  },
];

export default function AcceleratorPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 right-0 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.18) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute bottom-0 -left-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute top-1/3 left-1/2 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,138,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,138,0,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Navbar />

      {/* ── HERO ── */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            🚀 PEN2PRO Accelerator Mode
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-5xl">
            Compress Years Into Months.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #FF8A00, #D4A017)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Revenue. Faster.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Accelerator Mode is for builders who have an idea or early business and want to scale revenue, build their pipeline, launch real marketing, and become funding-ready — all in a structured 90-day sprint.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/starter"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold"
            >
              Start Accelerator — Free Preview
            </Link>
            <Link
              to="/waitlist?tier=elite"
              className="rounded-xl border border-[#FF8A00]/30 px-8 py-3.5 text-sm font-semibold text-[#FF8A00] hover:text-white transition-colors"
            >
              Unlock Full Accelerator →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 90-DAY SPRINT ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            The 90-Day Accelerator Sprint
          </div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            From Zero to Revenue in 3 Months
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-slate-400">
            Three clear phases. Each with specific milestones, daily actions, and measurable outcomes.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {PHASES.map((phase) => (
              <div
                key={phase.period}
                className="rounded-2xl bg-[#0F1520] p-6"
                style={{ border: `1px solid ${phase.color}30` }}
              >
                <div
                  className="mb-3 inline-block rounded-lg px-3 py-1 text-xs font-black"
                  style={{ background: `${phase.color}20`, color: phase.color }}
                >
                  {phase.period}
                </div>
                <h3 className="mb-4 font-bold text-white text-lg">{phase.title}</h3>
                <ul className="space-y-2.5">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                      <span style={{ color: phase.color }} className="mt-0.5 shrink-0 font-bold">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            Accelerator Modules
          </div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Eight Revenue-Acceleration Engines
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-slate-400">
            Each module gives you a specific, actionable output — not theory, not inspiration, but exact moves to make.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {ACCEL_MODULES.map((m) => (
              <div
                key={m.title}
                className="flex gap-4 rounded-2xl bg-[#0F1520] p-6"
                style={{ border: "1px solid rgba(255,138,0,0.15)" }}
              >
                <div className="mt-1 shrink-0 text-2xl">{m.icon}</div>
                <div>
                  <h3 className="mb-1.5 font-bold text-white">{m.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREE vs ACCELERATOR ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            Free vs Full Accelerator
          </div>
          <h2 className="mb-12 text-center font-display text-2xl font-black">
            Start Free. Scale When Ready.
          </h2>
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] overflow-hidden">
            {[
              { feature: "Business Blueprint", free: "Basic preview", full: "Full 90-day roadmap" },
              { feature: "Outreach Scripts", free: "Starter template", full: "Full campaign scripts" },
              { feature: "Sales Scripts", free: "None", full: "Complete script library" },
              { feature: "Pricing Strategy", free: "Basic guidance", full: "Deep market analysis" },
              { feature: "Funding Readiness", free: "Overview", full: "Full fundability roadmap" },
              { feature: "30/60/90 Plan", free: "30-day preview", full: "Full 90-day sprint" },
              { feature: "Marketing Strategy", free: "None", full: "Platform-specific plan" },
              { feature: "Customer Acquisition", free: "None", full: "Full acquisition funnel" },
            ].map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 gap-4 px-6 py-4 text-sm ${i % 2 === 0 ? "bg-[#0F1520]" : "bg-[#080C14]"}`}
              >
                <span className="font-medium text-slate-300">{row.feature}</span>
                <span className="text-center text-slate-500">{row.free}</span>
                <span className="text-center font-semibold text-[#FF8A00]">{row.full}</span>
              </div>
            ))}
            <div className="grid grid-cols-3 gap-4 px-6 py-3 text-xs font-bold uppercase tracking-widest bg-[#0A0F1E] text-slate-500">
              <span>Feature</span>
              <span className="text-center">Free Roadmap</span>
              <span className="text-center text-[#FF8A00]">Full Accelerator</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            Accelerator Is For
          </div>
          <h2 className="mb-12 font-display text-3xl font-black">
            Builders Who Are Done Waiting
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: "🏁", title: "Early-Stage Builders", body: "You've launched or you're about to. You need momentum, not more planning." },
              { icon: "📈", title: "Revenue Seekers", body: "You have a business but revenue isn't consistent. Accelerator gives you the pipeline strategy to fix that." },
              { icon: "🏦", title: "Funding-Ready Builders", body: "You want to be fundable in 90 days — business credit, bank history, and lender-readiness in place." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 text-3xl">{c.icon}</div>
                <h3 className="mb-2 font-bold text-white">{c.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black">
            90 Days From Now, Everything Can Look Different
          </h2>
          <p className="mb-10 text-slate-400">
            Start with a free roadmap. Then upgrade to Accelerator when you're ready to move.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/starter"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold"
            >
              Start Free Roadmap
            </Link>
            <Link
              to="/waitlist?tier=elite"
              className="rounded-xl border border-[#FF8A00]/30 px-8 py-3.5 text-sm font-semibold text-[#FF8A00] hover:text-white transition-colors"
            >
              Join Accelerator Waitlist
            </Link>
            <Link
              to="/builder"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
            >
              ← Builder Mode
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
