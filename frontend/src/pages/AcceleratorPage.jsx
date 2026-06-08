import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ACCELERATOR_MODULES = [
  { icon: "💰", title: "Revenue Acceleration", body: "Identify your fastest path to revenue — which offers to lead with, which customers to target first, and how to close faster." },
  { icon: "📣", title: "Marketing Strategy", body: "Platform-specific marketing plans. Organic, paid, and outreach strategies built around your budget and business type." },
  { icon: "📱", title: "Outreach Campaigns", body: "50-prospect targeting list, 20-message-per-day cadence, follow-up sequence, and outreach scripts — ready to use today." },
  { icon: "💲", title: "Pricing Strategy", body: "Value-based pricing models, competitor analysis, package structuring, and upsell path design for maximum revenue per customer." },
  { icon: "🎯", title: "Customer Acquisition", body: "Where your customers are, how to reach them, what message resonates, and how to convert them — specific to your market." },
  { icon: "💳", title: "Funding Readiness", body: "Credit profile assessment, business banking readiness, lender prep checklist, and tradeline strategy to access capital when you need it." },
  { icon: "📞", title: "Sales Scripts", body: "Custom cold call scripts, discovery call frameworks, objection handling responses, and follow-up message templates." },
  { icon: "📅", title: "30/60/90-Day Execution Plan", body: "Day-by-day, week-by-week execution roadmap. What to focus on, what to skip, and what to measure at each stage." },
];

const EXECUTION_PLAN = [
  {
    phase: "Days 1–30",
    label: "Foundation & First Revenue",
    color: "#1E88E5",
    items: [
      "Validate your offer with 10 prospect conversations",
      "Land your first 3 paying customers",
      "Set up your business infrastructure (LLC, EIN, bank, payment processing)",
      "Create your Google Business Profile and collect first testimonials",
      "Build your 50-prospect outreach list",
    ],
  },
  {
    phase: "Days 31–60",
    label: "Scale What Works",
    color: "#FF8A00",
    items: [
      "Double down on the customer acquisition channel that worked in Month 1",
      "Raise your prices by 10–20% if demand allows",
      "Start building your referral system",
      "Launch a simple email list or text list",
      "Begin building business credit with vendor tradelines",
    ],
  },
  {
    phase: "Days 61–90",
    label: "Growth & Systemization",
    color: "#FFC107",
    items: [
      "Hire or contract your first support person",
      "Systematize your delivery process",
      "Apply for your first business line of credit",
      "Launch a paid ad test with a $10/day budget",
      "Begin planning your 90-day growth sprint",
    ],
  },
];

const BG_ORBS = (
  <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
    <div className="absolute -top-48 -left-48 h-[700px] w-[700px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(30,136,229,0.22) 0%, transparent 65%)", filter: "blur(40px)" }} />
    <div className="absolute top-[30%] -right-48 h-[600px] w-[600px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(255,138,0,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
    <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(13,71,161,0.25) 0%, transparent 65%)", filter: "blur(50px)" }} />
    <div className="absolute inset-0 opacity-[0.025]"
      style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            🚀 PEN2PRO Accelerator
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Stop Planning.
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Start Accelerating.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Accelerator Mode is for builders who have an idea or existing business and need a real execution engine — revenue strategy, outreach campaigns, pricing, customer acquisition, and a 90-day plan to move.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Your Accelerator Plan — Free
            </Link>
            <Link to="/waitlist?tier=elite" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join Elite Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Accelerator Tools</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Built for Growth. Built for Revenue.
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Accelerator goes beyond the roadmap — it gives you the sales scripts, outreach campaigns, pricing models, and execution plans to generate real revenue.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {ACCELERATOR_MODULES.map((m) => (
              <div key={m.title}
                className="rounded-2xl border p-6"
                style={{ borderColor: "rgba(255,138,0,0.2)", background: "linear-gradient(135deg, #0F1520 0%, #0D1428 100%)" }}>
                <div className="mb-3 text-3xl">{m.icon}</div>
                <h3 className="mb-2 font-bold text-white text-lg">{m.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 30/60/90 PLAN ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Execution Roadmap</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Your 90-Day Acceleration Plan
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            RMIE generates this around your specific business. The example below shows the framework — your plan will be tailored to your idea, market, and resources.
          </p>
          <div className="space-y-6">
            {EXECUTION_PLAN.map((phase) => (
              <div key={phase.phase} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] overflow-hidden">
                <div className="flex items-center gap-4 px-6 py-4"
                  style={{ background: `linear-gradient(135deg, ${phase.color}22, transparent)`, borderBottom: `1px solid ${phase.color}33` }}>
                  <span className="text-sm font-black uppercase tracking-widest" style={{ color: phase.color }}>
                    {phase.phase}
                  </span>
                  <span className="text-white font-bold">{phase.label}</span>
                </div>
                <div className="space-y-3 px-6 py-5">
                  {phase.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 text-sm shrink-0" style={{ color: phase.color }}>✓</span>
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPGRADE NUDGE ── */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-3">
          {[
            { tier: "Pro", price: "$249/mo", desc: "Full roadmap, tracking, branding, outreach strategy, and credit checklist.", cta: "Explore Pro", href: "/pro", color: "#1E88E5" },
            { tier: "Elite", price: "$499/mo", desc: "Advanced strategy, financial projections, done-with-you guidance, vendor resources, and priority support.", cta: "Explore Elite", href: "/elite", color: "#FF8A00" },
            { tier: "Founders", price: "$1,899 lifetime", desc: "Everything, forever. One price. Lifetime access. Founder recognition. Only 200 spots.", cta: "Become a Founder", href: "/founders", color: "#FFC107" },
          ].map((t) => (
            <div key={t.tier} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-center">
              <div className="mb-2 text-sm font-black uppercase tracking-widest" style={{ color: t.color }}>{t.tier}</div>
              <div className="mb-3 text-2xl font-black text-white">{t.price}</div>
              <p className="mb-5 text-sm text-slate-400">{t.desc}</p>
              <Link to={t.href}
                className="inline-block rounded-xl border px-6 py-2.5 text-sm font-bold transition-all hover:opacity-80"
                style={{ borderColor: t.color, color: t.color }}>
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Your Acceleration Starts Now.
          </h2>
          <p className="mb-10 text-slate-400">
            Generate your free Accelerator blueprint. No credit card. No fluff. Real strategy for your specific business.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Accelerator Plan
            </Link>
            <Link to="/builder" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Go to Builder Mode
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
