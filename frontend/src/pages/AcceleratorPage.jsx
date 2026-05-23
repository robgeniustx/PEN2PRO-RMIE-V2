import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ACCELERATOR_MODULES = [
  { icon: "💰", title: "Revenue Acceleration", body: "Identify your fastest path to revenue. Analyze your offer, pricing, and conversion rate to find the money that is already available to you." },
  { icon: "📣", title: "Marketing Strategy", body: "Platform-specific marketing plans — organic, paid, and partnership. Content calendars, posting cadence, and audience targeting by business type." },
  { icon: "📬", title: "Outreach Campaigns", body: "Pre-built outreach sequences for cold DMs, cold calls, and email. 50-prospect target lists, follow-up scripts, and objection handling guides." },
  { icon: "💵", title: "Pricing Strategy", body: "Stop undercharging. RMIE analyzes your market, competition, and value proposition to recommend pricing that is competitive and profitable." },
  { icon: "🎯", title: "Customer Acquisition", body: "Identify where your ideal customer lives — online and offline — and how to get in front of them without a massive ad budget." },
  { icon: "🏦", title: "Funding Readiness", body: "Evaluate your current credit profile, business structure, and documentation to see if you are fundable — and what to fix if you are not." },
  { icon: "📝", title: "Sales Scripts", body: "Word-for-word scripts for cold calls, DMs, discovery calls, closing conversations, and follow-ups. Built for your specific offer and target customer." },
  { icon: "📅", title: "30/60/90-Day Execution Plan", body: "A sprint-based execution roadmap that breaks your growth into 90-day blocks with weekly milestones and daily actions." },
];

const SPRINT_PLAN = [
  {
    phase: "Days 1–30",
    color: "#2d9cff",
    title: "Launch & Validate",
    items: [
      "Finalize your offer and pricing",
      "Set up LLC, EIN, and business bank",
      "Build your basic online presence",
      "Contact your first 50 prospects",
      "Close your first 3–5 customers",
      "Collect 3 testimonials or case studies",
    ],
  },
  {
    phase: "Days 31–60",
    color: "#FF8A00",
    title: "Grow & Systemize",
    items: [
      "Build a referral or repeat-business system",
      "Set up CRM to track leads and follow-ups",
      "Launch a consistent content strategy",
      "Increase outreach volume by 2x",
      "Apply for business credit or funding if ready",
      "Hit your first revenue milestone",
    ],
  },
  {
    phase: "Days 61–90",
    color: "#d4af37",
    title: "Scale & Accelerate",
    items: [
      "Hire your first contractor or team member",
      "Automate your follow-up and booking",
      "Launch a paid acquisition test ($10/day)",
      "Build strategic partnerships or referral deals",
      "Hit consistent monthly revenue",
      "Plan your next 90-day sprint",
    ],
  },
];

const WHO_ACCELERATOR_IS_FOR = [
  "You have a working business but growth has stalled",
  "You are making some money but not consistently",
  "You are ready to add marketing, outreach, and automation",
  "You need a real 90-day plan — not just motivation",
  "You want to apply for funding but are not sure if you are ready",
  "You are scaling from side hustle to full-time business",
];

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-24 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,138,0,0.1),transparent_70%)]" />
        <div className="relative mx-auto max-w-3xl">
          <span className="mb-4 inline-block rounded-full border border-[#FF8A00]/40 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#FF8A00]">
            Accelerator Mode
          </span>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            Stop Grinding.<br />Start Accelerating.
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Accelerator mode is built for founders who are past the starting line. You have an idea or a business — now you need marketing, outreach, funding readiness, and a 90-day sprint plan to break through to real, consistent revenue.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl bg-[#FF8A00] px-8 py-3.5 text-sm font-black text-[#081226] shadow-[0_0_35px_rgba(255,138,0,0.4)] transition hover:scale-[1.02]">
              Start Your Accelerator Blueprint
            </Link>
            <Link to="/pro" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-bold text-slate-200 transition hover:border-slate-400 hover:text-white">
              See Pro & Elite Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#FF8A00]/20 bg-[#0F1520] p-8">
          <h2 className="mb-6 font-display text-2xl font-black">Accelerator Is For You If…</h2>
          <div className="space-y-3">
            {WHO_ACCELERATOR_IS_FOR.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-0.5 text-[#FF8A00]">→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="border-y border-[#1A2D50] bg-[#0B1222] px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-center text-xs font-black uppercase tracking-[0.3em] text-[#FF8A00]">What's Inside</p>
          <h2 className="mb-12 text-center font-display text-3xl font-black md:text-4xl">8 Accelerator Modules</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ACCELERATOR_MODULES.map((m) => (
              <div key={m.title} className="rounded-2xl border border-[#FF8A00]/15 bg-[#0F1520] p-6 transition hover:-translate-y-1">
                <div className="mb-3 text-2xl">{m.icon}</div>
                <h3 className="mb-2 font-bold text-white">{m.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30/60/90 Sprint Plan */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-center text-xs font-black uppercase tracking-[0.3em] text-[#FF8A00]">Execution Framework</p>
          <h2 className="mb-10 text-center font-display text-3xl font-black md:text-4xl">Your 90-Day Sprint Plan</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {SPRINT_PLAN.map((phase) => (
              <div key={phase.phase} className="rounded-2xl border bg-[#0F1520] p-6" style={{ borderColor: `${phase.color}30` }}>
                <span className="mb-2 inline-block rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#0A0F1E]" style={{ backgroundColor: phase.color }}>
                  {phase.phase}
                </span>
                <h3 className="mb-4 text-lg font-black" style={{ color: phase.color }}>{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: phase.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1A2D50] bg-[#0B1222] px-5 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">Ready to Accelerate?</h2>
          <p className="mb-7 text-slate-300">Start your free RMIE blueprint and get your personalized accelerator roadmap. Upgrade to Pro or Elite for the full strategy, AI refinement, and execution support.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl bg-[#FF8A00] px-8 py-3 text-sm font-black text-[#081226] transition hover:scale-[1.02]">
              Start Free Blueprint
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#1A2D50] px-8 py-3 text-sm font-bold text-slate-200 transition hover:border-slate-400">
              See Elite Plan →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
