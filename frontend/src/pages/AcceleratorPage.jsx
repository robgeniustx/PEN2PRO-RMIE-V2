import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ACCELERATOR_MODULES = [
  { icon: "💸", title: "Revenue Acceleration", desc: "Stop leaving money on the table. Identify your highest-value offer, set pricing that converts, and build recurring revenue streams into your model." },
  { icon: "📣", title: "Marketing Strategy", desc: "Platform-specific playbooks for Instagram, TikTok, Facebook, Google, email, and referral. Built for your business type and target customer." },
  { icon: "📬", title: "Outreach Campaigns", desc: "50 prospects. 5-day sequences. Proven scripts for cold DM, cold call, cold email, and warm referral outreach — tested on real businesses." },
  { icon: "💲", title: "Pricing Strategy", desc: "Value-based pricing, tiered packages, upsell paths, and competitive positioning. Stop undercharging for your services." },
  { icon: "🎯", title: "Customer Acquisition", desc: "Build a repeatable acquisition system — lead gen, follow-up, booking, and close. Turn strangers into paying customers on autopilot." },
  { icon: "🏦", title: "Funding Readiness", desc: "Credit score targets, documentation checklist, revenue requirements, lender prep, and SBA/microloan readiness — before you apply." },
  { icon: "📞", title: "Sales Scripts", desc: "Objection handlers, closing lines, follow-up scripts, and consultation frameworks written for service businesses, coaches, and creators." },
  { icon: "📅", title: "30/60/90-Day Plan", desc: "A structured execution plan with weekly milestones, daily actions, and revenue targets broken down by day 30, day 60, and day 90." },
];

const PLAN_90 = [
  {
    period: "Days 1–30",
    color: "#1E88E5",
    title: "Validate & Launch",
    actions: [
      "Finalize offer and pricing strategy",
      "Identify and contact 50 target prospects",
      "Land your first 3 paying clients",
      "Set up business entity, EIN, and bank",
      "Create Google Business Profile and basic online presence",
    ],
  },
  {
    period: "Days 31–60",
    color: "#00C9B1",
    title: "Build & Scale",
    actions: [
      "Systematize your service delivery process",
      "Build your referral network (ask every client)",
      "Launch one paid ad at $10/day to validate demand",
      "Collect 5 testimonials or reviews",
      "Introduce a second offer tier or upsell path",
    ],
  },
  {
    period: "Days 61–90",
    color: "#D4A017",
    title: "Grow & Optimize",
    actions: [
      "Hit monthly revenue target (set your number)",
      "Apply for business credit card or microloan",
      "Hire your first contractor or assistant",
      "Build automated follow-up sequence",
      "Evaluate funding readiness and plan next raise",
    ],
  },
];

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 text-center px-5">
        <div className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,138,0,0.12) 0%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Accelerator Mode</span>
          </div>
          <h1 className="font-display text-5xl font-black leading-tight text-white md:text-6xl">
            Stop Planning.<br />
            <span style={{ color: "#FF8A00" }}>Start Accelerating.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Accelerator gives you the revenue strategy, outreach campaigns, pricing structure, sales scripts, and 30/60/90-day execution plan to move from stuck to generating income — fast.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/starter"
              className="btn-gold rounded-xl px-8 py-4 text-base font-black text-[#080C14]">
              Start Free Roadmap
            </Link>
            <Link to="/waitlist?tier=elite"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 hover:border-[#FF8A00] hover:text-white transition-all">
              Join Accelerator Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="mb-4 text-center font-display text-3xl font-black text-white">Accelerator Modules</h2>
        <p className="mb-12 text-center text-slate-400">Eight systems. Every angle of business growth — revenue, marketing, outreach, pricing, acquisition, and funding.</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ACCELERATOR_MODULES.map((m) => (
            <div key={m.title}
              className="rounded-2xl border border-[#1A2D50] p-6 transition-all hover:border-[#FF8A00]/30 hover:-translate-y-1"
              style={{ background: "#0F1520" }}>
              <div className="mb-3 text-3xl">{m.icon}</div>
              <h3 className="mb-2 font-bold text-white">{m.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 30/60/90 Day Plan */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="mb-4 text-center font-display text-3xl font-black text-white">Your 30/60/90-Day Execution Plan</h2>
        <p className="mb-12 text-center text-slate-400">Not a vision board. Not theory. Actual weekly actions tied to revenue milestones.</p>
        <div className="grid gap-6 sm:grid-cols-3">
          {PLAN_90.map((phase) => (
            <div key={phase.period}
              className="rounded-2xl border p-6"
              style={{ background: "#0F1520", borderColor: `${phase.color}30` }}>
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: phase.color }}>{phase.period}</p>
              <h3 className="mt-2 mb-4 font-display text-xl font-bold text-white">{phase.title}</h3>
              <ul className="space-y-2.5">
                {phase.actions.map((action, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: phase.color }} />
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Real vs Generic */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="mb-12 text-center font-display text-3xl font-black text-white">Real Guidance vs. Generic Advice</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-red-400">❌ Generic Advice</p>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>"Post on social media and market your business."</li>
              <li>"Network and build your brand online."</li>
              <li>"Focus on your target audience."</li>
              <li>"Create good content consistently."</li>
              <li>"Apply for small business loans when you're ready."</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-green-400">✅ PEN2PRO Accelerator</p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>"Message 20 targeted prospects per day for 7 days using this exact script."</li>
              <li>"Create 3 offer packages. Price the middle tier to convert most."</li>
              <li>"Build your Google Business Profile this week, not next month."</li>
              <li>"Collect 3 testimonials before your first paid ad — or your ad money is wasted."</li>
              <li>"Your credit score needs to hit 680+ before the SBA will look at you."</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tier Access Banner */}
      <section className="mx-auto max-w-5xl px-5 py-8">
        <div className="rounded-2xl border border-[#FF8A00]/20 p-6" style={{ background: "#0F1520" }}>
          <div className="grid gap-4 sm:grid-cols-3 text-center">
            <div className="border-b pb-4 sm:border-b-0 sm:border-r border-[#1A2D50] sm:pb-0 sm:pr-4">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Free</p>
              <p className="mt-1 font-bold text-white">Preview</p>
              <p className="mt-1 text-xs text-slate-400">7-day action plan only</p>
            </div>
            <div className="border-b pb-4 sm:border-b-0 sm:border-r border-[#1A2D50] sm:pb-0 sm:pr-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Pro</p>
              <p className="mt-1 font-bold text-white">Full 90-Day Roadmap</p>
              <p className="mt-1 text-xs text-slate-400">30/60/90 plan + outreach scripts</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Elite / Founders</p>
              <p className="mt-1 font-bold text-white">Full Accelerator Mode</p>
              <p className="mt-1 text-xs text-slate-400">All 8 modules + financial projections</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-5 py-20 text-center">
        <div className="rounded-3xl border p-10"
          style={{ background: "linear-gradient(135deg, #0D1528 0%, #0F1520 100%)", borderColor: "rgba(255,138,0,0.3)" }}>
          <h2 className="font-display text-3xl font-black text-white">Your Acceleration Starts Now.</h2>
          <p className="mt-4 text-slate-400">Start with the free roadmap. Upgrade to Pro or Elite to unlock the full Accelerator. Or become a Legacy Founder and own it all — forever.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter"
              className="btn-gold rounded-xl px-8 py-4 text-base font-black text-[#080C14]">
              Start Free Roadmap
            </Link>
            <Link to="/elite"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 hover:border-[#FF8A00] hover:text-white transition-all">
              Explore Elite →
            </Link>
          </div>
          <div className="mt-4 flex justify-center gap-4 text-sm">
            <Link to="/pro" className="text-[#1E88E5] hover:underline">Pro →</Link>
            <Link to="/founders" className="text-[#FF8A00] hover:underline">Legacy Founder →</Link>
            <Link to="/pricing" className="text-slate-400 hover:underline">All Plans →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
