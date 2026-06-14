import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MODULES = [
  {
    phase: "Revenue Acceleration",
    icon: "💰",
    color: "#FF8A00",
    items: [
      "Pricing strategy audit — are you charging enough?",
      "Offer restructuring for higher conversion rates",
      "Add-on and upsell development for existing clients",
      "3 revenue streams identified for your specific business",
      "Revenue target calculator with monthly milestones",
    ],
  },
  {
    phase: "Marketing Strategy",
    icon: "📣",
    color: "#1E88E5",
    items: [
      "Platform-specific content strategy (Instagram, Facebook, TikTok, Google)",
      "30-day organic content calendar built for your offer",
      "Local business outreach script for your first 50 prospects",
      "Google Business Profile optimization checklist",
      "Referral system setup for word-of-mouth scaling",
    ],
  },
  {
    phase: "Customer Acquisition",
    icon: "🎯",
    color: "#22C55E",
    items: [
      "Identify your 3 highest-value customer types",
      "Cold outreach scripts and DM templates that convert",
      "Follow-up sequence (7-touch system to close more leads)",
      "Free-to-paid conversion funnel for your service or product",
      "First 10 clients acquisition plan with step-by-step actions",
    ],
  },
  {
    phase: "Funding Readiness",
    icon: "🏦",
    color: "#D4A017",
    items: [
      "Personal credit score optimization steps",
      "Business credit building roadmap (Net-30 vendors, tradelines)",
      "Business bank account setup for lender credibility",
      "Revenue documentation and cashflow tracking",
      "SBA loan, microloan, and grant readiness checklist",
    ],
  },
  {
    phase: "Sales Scripts & Outreach",
    icon: "📞",
    color: "#A855F7",
    items: [
      "Introduction script for cold prospects",
      "Objection handling responses for top 5 objections",
      "Discovery call framework to qualify leads faster",
      "Proposal/quote template that closes at higher rates",
      "Follow-up text and email sequences",
    ],
  },
];

const PLAN_TIMELINE = [
  {
    period: "30 Days",
    color: "#1E88E5",
    goals: [
      "First paying client landed",
      "Business legally set up (LLC, EIN, bank)",
      "Google Business Profile live",
      "5 client prospects contacted daily",
      "First $1,000 collected",
    ],
  },
  {
    period: "60 Days",
    color: "#FF8A00",
    goals: [
      "3–5 recurring clients",
      "Referral system in place",
      "Content strategy running",
      "Business credit applications started",
      "$3,000–$5,000 monthly revenue target",
    ],
  },
  {
    period: "90 Days",
    color: "#22C55E",
    goals: [
      "Revenue predictable and growing",
      "1 recurring revenue stream established",
      "Funding readiness achieved",
      "First hire or subcontract explored",
      "$10,000/mo revenue target unlocked",
    ],
  },
];

const BG_ORBS = (
  <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
    <div className="absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(255,138,0,0.18) 0%, transparent 65%)", filter: "blur(40px)" }} />
    <div className="absolute top-[40%] -left-48 h-[500px] w-[500px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(30,136,229,0.14) 0%, transparent 65%)", filter: "blur(50px)" }} />
    <div className="absolute bottom-0 right-1/3 h-[400px] w-[400px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
    <div className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
  </div>
);

export default function AcceleratorPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {BG_ORBS}
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,138,0,0.10) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            🚀 RMIE Accelerator
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Accelerate Your Revenue.
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Scale Your Vision.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 leading-relaxed">
            The RMIE Accelerator mode is for builders who are ready to grow — with revenue acceleration strategies, customer acquisition scripts, 30/60/90-day execution plans, and funding readiness built for your specific business.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/waitlist?tier=elite"
              className="rounded-xl border border-[#FF8A00]/40 px-8 py-3.5 text-sm font-semibold text-[#FF8A00] hover:text-white transition-colors">
              Unlock Accelerator (Elite)
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">Accelerator features available in Elite and Founders tiers</p>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Accelerator Modules</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            5 Core Engines to Scale Your Business
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Not generic advice. Specific strategies, scripts, and action plans built around your actual offer, industry, and target customer.
          </p>
          <div className="space-y-6">
            {MODULES.map((mod) => (
              <div key={mod.phase}
                className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 md:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-2xl">{mod.icon}</span>
                  <h3 className="font-display text-xl font-black" style={{ color: mod.color }}>
                    {mod.phase}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {mod.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full flex items-center justify-center text-xs font-black"
                        style={{ background: mod.color + "22", color: mod.color }}>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 30/60/90 PLAN ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Execution Plan</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Your 30/60/90-Day Roadmap to Revenue
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            The Accelerator doesn't just tell you what to do — it tells you when to do it. Three phases, clear milestones, and realistic targets based on your actual starting point.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {PLAN_TIMELINE.map((phase) => (
              <div key={phase.period}
                className="rounded-2xl border bg-[#0F1520] p-6"
                style={{ borderColor: phase.color + "40" }}>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-black"
                  style={{ background: phase.color + "22", color: phase.color }}>
                  {phase.period}
                </div>
                <ul className="space-y-3">
                  {phase.goals.map((g) => (
                    <li key={g} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="mt-0.5 shrink-0 font-black" style={{ color: phase.color }}>→</span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REAL EXAMPLE ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">The Difference</div>
          <h2 className="mb-12 text-center font-display text-3xl font-black">
            What RMIE Says vs Generic Advice
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-red-900/30 bg-[#0F1520] p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-red-400">Generic AI Advice</p>
              <p className="text-slate-400 text-sm leading-relaxed italic">
                "Post on social media and market your business. Build an audience and engage with your followers. Create content that resonates with your target market."
              </p>
            </div>
            <div className="rounded-2xl border border-[#22C55E]/30 bg-[#0F1520] p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#22C55E]">PEN2PRO RMIE Accelerator</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                "Create 3 offer packages at $149, $299, and $499. Message 20 local commercial property managers on LinkedIn with this exact script. Collect 3 before/after photos by Friday. Set up a Google Business Profile this week. Test a $10/day Google Local ad only after you've validated demand with at least 2 paying clients."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black">
            Ready to Accelerate?
          </h2>
          <p className="mb-10 text-slate-400">
            Accelerator features are available in the Elite and Founders tiers. Start with a free roadmap, then upgrade to unlock the full acceleration engine.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/elite"
              className="rounded-xl border border-[#FF8A00]/40 px-8 py-3.5 text-sm font-semibold text-[#FF8A00] hover:text-white transition-colors">
              Explore Elite
            </Link>
            <Link to="/founders"
              className="rounded-xl border border-[#D4A017]/40 px-8 py-3.5 text-sm font-semibold text-[#D4A017] hover:text-white transition-colors">
              See Founders Lifetime
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
