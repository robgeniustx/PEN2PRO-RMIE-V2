import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ACCEL_MODULES = [
  { icon: "💰", title: "Revenue Acceleration", body: "Identify your highest-margin service, restructure your offer into tiers, and build a pricing strategy that maximizes revenue per client." },
  { icon: "📣", title: "Marketing Strategy", body: "Niche-specific content strategy, platform selection, brand voice development, and organic marketing roadmap for the first 90 days." },
  { icon: "📧", title: "Outreach Campaigns", body: "Cold outreach scripts, follow-up sequences, DM strategies, and cold call frameworks — all built for your specific business and market." },
  { icon: "🏷️", title: "Pricing Strategy", body: "Stop undercharging. Competitive pricing analysis, value-based pricing models, and psychological pricing strategies for your niche." },
  { icon: "🎯", title: "Customer Acquisition", body: "5 proven acquisition channels for your business type. Daily prospecting system, referral engine setup, and first-client acquisition sprint." },
  { icon: "💳", title: "Funding Readiness", body: "Credit profile review, business entity setup, bank account seasoning, revenue documentation, and lender preparation checklist." },
  { icon: "📞", title: "Sales Scripts", body: "Word-for-word scripts for your first call, follow-up, objection handling, closing, and upsell conversation — ready to use today." },
  { icon: "📅", title: "30/60/90-Day Execution Plan", body: "Day-by-day action plan for the first 30 days, milestone targets for 60 days, and a growth system for 90 days and beyond." },
];

const PLAN_PREVIEW = [
  {
    period: "Days 1–30",
    color: "#FF8A00",
    actions: [
      "Finalize offer and pricing structure",
      "Set up LLC, EIN, and business bank account",
      "Launch Google Business Profile",
      "Identify 50 local prospects",
      "Send 20 outreach messages per day",
      "Close first 2–3 clients",
      "Collect 3 testimonials",
    ],
  },
  {
    period: "Days 31–60",
    color: "#1E88E5",
    actions: [
      "Scale outreach to 40 contacts/day",
      "Run first $10/day paid test ad",
      "Build referral reward system",
      "Create 2 service packages",
      "Set up basic CRM pipeline",
      "Reach consistent $3,000/month",
      "Apply for first business credit account",
    ],
  },
  {
    period: "Days 61–90",
    color: "#00C9B1",
    actions: [
      "Hire first contractor or part-time help",
      "Automate follow-up sequences",
      "Expand to second acquisition channel",
      "Submit funding readiness application",
      "Build email list with 100 contacts",
      "Target $5,000–$10,000/month",
      "Launch website or landing page",
    ],
  },
];

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(30,136,229,0.12) 0%, transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/40 bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#5ab0ff] uppercase tracking-widest">
            🚀 PEN2PRO Accelerator
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            Stop Talking.
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #00C9B1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Start Accelerating.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            The Accelerator is PEN2PRO's advanced growth and monetization engine — built for people who already have an idea or business and are ready to move faster, earn more, and scale with structure.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="btn-gold rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14]">
              Generate My Accelerator Roadmap →
            </Link>
            <Link to="/waitlist?tier=elite" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join Elite Waitlist
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">Available to Pro and Elite members · Join the waitlist to reserve access</p>
        </div>
      </section>

      {/* MODULES */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#5ab0ff]">Accelerator Modules</p>
            <h2 className="font-display text-4xl font-black">8 growth systems. One engine.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {ACCEL_MODULES.map((m) => (
              <div key={m.title} className="rounded-2xl border border-[#1A2D50] bg-[#080C14] p-6 hover:border-[#1E88E5]/40 transition-colors">
                <div className="mb-3 text-3xl">{m.icon}</div>
                <h3 className="mb-2 font-bold text-white">{m.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30/60/90 PLAN */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">The Execution Plan</p>
            <h2 className="font-display text-4xl font-black">Your 30/60/90-Day Roadmap</h2>
            <p className="mt-3 text-slate-500">Real actions. Real targets. Not generic advice.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PLAN_PREVIEW.map((phase) => (
              <div key={phase.period} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full" style={{ background: phase.color }} />
                  <p className="font-black text-white">{phase.period}</p>
                </div>
                <ul className="space-y-2.5">
                  {phase.actions.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-0.5 font-bold" style={{ color: phase.color }}>→</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-600">
            * Your actual plan is generated specifically for your business idea and niche — not this generic preview.
          </p>
        </div>
      </section>

      {/* UPGRADE PATHS */}
      <section className="border-t border-[#1A2D50] bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#00C9B1]">Access Levels</p>
            <h2 className="font-display text-3xl font-black">How to access the Accelerator</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { name: "Free", tier: "Starter", color: "#1A2D50", textColor: "#64748b", access: "Basic roadmap preview only", cta: "Start Free", href: "/starter" },
              { name: "Pro", tier: "$249/mo", color: "#2d9cff", textColor: "#5ab0ff", access: "Full 90-day roadmap + sales scripts + outreach", cta: "Join Pro Waitlist", href: "/waitlist?tier=pro" },
              { name: "Elite", tier: "$499/mo", color: "#00C9B1", textColor: "#00C9B1", access: "Full Accelerator + financial projections + funding + AI voice", cta: "Join Elite Waitlist", href: "/waitlist?tier=elite" },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border p-6" style={{ borderColor: t.color + "60", background: "#080C14" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: t.textColor }}>{t.name}</p>
                <p className="font-display text-2xl font-black text-white mb-3">{t.tier}</p>
                <p className="text-sm text-slate-400 mb-5">{t.access}</p>
                <Link to={t.href} className="block w-full rounded-xl border py-2.5 text-center text-sm font-bold transition hover:opacity-80"
                  style={{ borderColor: t.color + "60", color: t.textColor }}>
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50] text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 font-display text-4xl font-black">
            Ready to accelerate?
          </h2>
          <p className="mb-10 text-slate-400">
            Start with a free roadmap. Get the full Accelerator when you upgrade to Pro or Elite.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="btn-gold rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14]">
              Start Free Roadmap →
            </Link>
            <Link to="/founders" className="rounded-xl border border-[#D4A017]/40 px-8 py-3.5 text-sm font-semibold text-[#D4A017] hover:opacity-80 transition-opacity">
              See Founders Lifetime
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
