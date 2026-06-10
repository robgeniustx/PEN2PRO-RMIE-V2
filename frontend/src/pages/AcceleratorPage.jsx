import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ACCELERATOR_MODULES = [
  {
    icon: "💰",
    title: "Revenue Acceleration",
    body: "Identify your fastest path to income. Offer bundling, upsell strategy, recurring revenue models, and pricing architecture designed to maximize what you earn.",
  },
  {
    icon: "📣",
    title: "Marketing Strategy",
    body: "Platform-specific marketing plans, content strategy, organic growth approach, paid ad readiness, and channel selection based on your business type and audience.",
  },
  {
    icon: "📬",
    title: "Outreach Campaigns",
    body: "Cold outreach scripts, follow-up sequences, email templates, DM templates, and a 30-day outreach execution plan — specific to your offer and target customer.",
  },
  {
    icon: "🏷️",
    title: "Pricing Strategy",
    body: "AI-powered pricing analysis for your market: anchor pricing, value-based pricing, competitive positioning, and package tiers that convert.",
  },
  {
    icon: "🎯",
    title: "Customer Acquisition",
    body: "Identify where your ideal customers are, how to reach them, what to say, how to convert them — with a repeatable acquisition system you can run daily.",
  },
  {
    icon: "💳",
    title: "Funding Readiness",
    body: "Assessment of your current fundability, credit score targets, business documentation checklist, bank account history requirements, and lender preparation steps.",
  },
  {
    icon: "🗣️",
    title: "Sales Scripts",
    body: "Word-for-word sales scripts for your specific offer — phone call scripts, discovery call frameworks, objection handling, and closing language that fits your business.",
  },
  {
    icon: "📅",
    title: "30/60/90-Day Execution Plan",
    body: "Day-by-day, week-by-week execution roadmap for your first 90 days — what to do, in what order, to build momentum and generate real revenue.",
  },
];

const PLAN_PREVIEW = [
  {
    period: "30 Days",
    color: "#FF8A00",
    items: [
      "Complete business foundation (LLC, EIN, bank)",
      "Launch your offer and set pricing",
      "Run first 200 outreach contacts",
      "Collect 5 testimonials",
      "Get first 3 paying clients",
    ],
  },
  {
    period: "60 Days",
    color: "#1E88E5",
    items: [
      "Build first marketing funnel",
      "Test $10/day ad after validating demand",
      "Set up CRM and lead tracking",
      "Reach consistent $3K-$5K monthly revenue",
      "Apply for business credit tradelines",
    ],
  },
  {
    period: "90 Days",
    color: "#00C9B1",
    items: [
      "Scale outreach to 500+ contacts",
      "Hire first contractor or VA",
      "Apply for business funding if ready",
      "Build recurring revenue stream",
      "Document systems for scaling",
    ],
  },
];

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-32 right-0 h-[550px] w-[550px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,201,177,0.15) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-1/3 -left-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(5,150,105,0.12) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* ── HERO ── */}
      <section className="px-5 py-24 text-center relative">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,201,177,0.10) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#00C9B1] uppercase tracking-widest">
            🚀 PEN2PRO Accelerator
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Stop Planning.
            <br />
            <span style={{ background: "linear-gradient(90deg, #00C9B1, #059669)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Start Accelerating.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-8">
            Accelerator is the advanced monetization and growth engine inside PEN2PRO. Revenue strategy, outreach campaigns, pricing architecture, customer acquisition, funding readiness, sales scripts, and a 30/60/90-day execution plan — built around your business.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/starter"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-white shadow-[0_0_35px_rgba(0,201,177,0.4)] transition hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #00C9B1 0%, #059669 100%)" }}
            >
              Start Free Roadmap
            </Link>
            <Link to="/pro" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Upgrade to Pro
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Elite Plan
            </Link>
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#00C9B1]">Accelerator Modules</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">8 Systems to Grow Revenue Fast</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            Every module is AI-powered and built around your specific business — not generic templates, not copy-paste frameworks. Real strategy for your real situation.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {ACCELERATOR_MODULES.map((m) => (
              <div key={m.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 hover:border-[#00C9B1]/40 transition-colors">
                <div className="mb-3 text-3xl">{m.icon}</div>
                <h3 className="mb-2 font-bold text-white">{m.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 30/60/90 PLAN ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Execution Framework</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">Your 30/60/90-Day Plan Preview</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            Accelerator does not give you goals. It gives you specific actions — what to do each week, in what order — to reach real revenue milestones.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {PLAN_PREVIEW.map((phase) => (
              <div key={phase.period} className="rounded-2xl border bg-[#0F1520] p-6"
                style={{ borderColor: `${phase.color}40` }}>
                <div className="mb-4 inline-flex rounded-full px-4 py-1.5 text-xs font-black"
                  style={{ background: `${phase.color}20`, color: phase.color }}>
                  {phase.period}
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="mt-0.5 shrink-0" style={{ color: phase.color }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">
            Actual plans are personalized to your business, market, budget, and current stage.
          </p>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-display text-2xl font-black">Accelerator Is for You If…</h2>
          <div className="grid gap-3 text-left sm:grid-cols-2">
            {[
              "You have a business idea but no monetization plan",
              "You are making some money but need to scale it",
              "You are tired of doing random marketing with no system",
              "You need a funding roadmap, not just a wish list",
              "You want outreach scripts, not generic tips",
              "You need a 90-day plan you can actually execute",
              "You want AI that understands your specific business",
              "You are ready to move from side hustle to real income",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-[#1A2D50] bg-[#0F1520] px-4 py-3">
                <span className="text-[#00C9B1] mt-0.5 shrink-0">✓</span>
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">Your Revenue Timeline Starts Now.</h2>
          <p className="mb-10 text-slate-400 leading-relaxed">
            Start with the free roadmap to see what Accelerator looks like for your idea. Upgrade to Pro or Elite to unlock the full monetization engine with 30/60/90-day execution, sales scripts, and advanced strategy.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-white shadow-[0_0_35px_rgba(0,201,177,0.4)] transition hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #00C9B1 0%, #059669 100%)" }}>
              Start Free Roadmap
            </Link>
            <Link to="/pro" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Upgrade to Pro
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Elite Plan
            </Link>
            <Link to="/founders" className="rounded-xl border border-[#d4af37]/30 px-8 py-3.5 text-sm font-semibold text-[#d4af37] hover:bg-[#d4af37]/5 transition-colors">
              Founders Lifetime →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
