import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ACCELERATOR_TOOLS = [
  { icon: "💰", title: "Revenue Acceleration Plan", body: "Identify your fastest revenue path — the offer, the price, the channel, and the customer who will pay you first." },
  { icon: "📣", title: "Marketing Strategy Engine", body: "Platform-specific marketing plans with content calendars, hashtag strategy, and paid ad readiness checklists." },
  { icon: "📧", title: "Outreach Campaign Builder", body: "Cold outreach sequences, DM scripts, email templates, and follow-up frameworks that convert." },
  { icon: "💲", title: "Pricing Strategy Optimizer", body: "Test and refine your pricing with three tiered offers — starter, pro, and premium packages for every market." },
  { icon: "🎯", title: "Customer Acquisition System", body: "50-prospect identification strategy, daily outreach targets, referral scripts, and social proof collection." },
  { icon: "🏦", title: "Funding Readiness Checklist", body: "Before you apply — credit, banking, entity, revenue history, and documentation everything a lender needs to see." },
  { icon: "📝", title: "Sales Script Library", body: "Discovery call scripts, pitch decks, objection handlers, and closing frameworks for your specific offer." },
  { icon: "📅", title: "30 / 60 / 90-Day Execution Plan", body: "Day-by-day, week-by-week execution targets broken across three phases of growth with measurable milestones." },
];

const PHASES = [
  {
    phase: "30 Days",
    color: "#D4A017",
    title: "Launch Phase",
    items: [
      "Finalize your offer and pricing",
      "Set up entity, banking, and brand",
      "Identify first 50 prospects",
      "Run first outreach campaign",
      "Close first 3–5 clients",
    ],
  },
  {
    phase: "60 Days",
    color: "#1E88E5",
    title: "Traction Phase",
    items: [
      "Scale outreach to 20+ daily",
      "Collect 5+ testimonials",
      "Build referral system",
      "Launch Google Business Profile",
      "Test first $10/day ad if profitable",
    ],
  },
  {
    phase: "90 Days",
    color: "#00C9B1",
    title: "Growth Phase",
    items: [
      "Reach $5K–$10K monthly revenue target",
      "Apply for business credit",
      "Hire first contractor or VA",
      "Launch second offer tier",
      "Begin funding readiness process",
    ],
  },
];

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute top-[40%] -right-32 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,201,177,0.10) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/40 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>
            🚀 PEN2PRO Accelerator
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Revenue First.<br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Scale Second.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
            Accelerator is the advanced growth and monetization mode inside PEN2PRO. It builds your revenue model, outreach system, sales scripts, funding readiness, and 90-day execution plan — specific to your business.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14] btn-gold">
              Start Your Roadmap →
            </Link>
            <Link to="/pro" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Explore Pro Plan
            </Link>
          </div>
        </div>
      </section>

      {/* 30/60/90 DAY PLAN */}
      <section className="px-5 py-20 border-t border-[#1A2D50] bg-[#0A0F1E]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>The Growth Framework</div>
          <h2 className="mb-14 text-center font-display text-3xl font-black md:text-4xl">
            Your 90-Day Acceleration Plan
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {PHASES.map((p) => (
              <div key={p.phase} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-black" style={{ background: `${p.color}20`, color: p.color }}>
                  {p.phase}
                </div>
                <h3 className="mb-4 font-black text-white text-lg">{p.title}</h3>
                <ul className="space-y-2.5">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 shrink-0 text-xs" style={{ color: p.color }}>✓</span>
                      <span className="text-sm text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>Accelerator Tools</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Built to Generate Revenue Fast
          </h2>
          <p className="mb-14 text-center text-slate-400 max-w-xl mx-auto">
            Not generic advice. Every tool inside Accelerator is built around your specific business, market, and goal — because generic strategy produces generic results.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {ACCELERATOR_TOOLS.map((t) => (
              <div key={t.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 hover:border-[#FF8A00]/30 transition-colors">
                <div className="mb-3 text-2xl">{t.icon}</div>
                <h3 className="mb-2 font-bold text-white text-sm leading-snug">{t.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT GOOD OUTPUT LOOKS LIKE */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>The RMIE Difference</div>
          <h2 className="mb-12 text-center font-display text-3xl font-black md:text-4xl">
            Specific Beats Generic. Every Time.
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/20 bg-[#0F1520] p-6">
              <div className="mb-3 text-xs font-bold uppercase tracking-widest text-red-500">❌ Generic Advice</div>
              <p className="text-slate-400 leading-relaxed text-sm italic">
                "Post on social media and market your business to grow your audience and attract customers."
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-[#0F1520] p-6">
              <div className="mb-3 text-xs font-bold uppercase tracking-widest text-emerald-400">✓ RMIE Accelerator Output</div>
              <p className="text-slate-200 leading-relaxed text-sm">
                "Create 3 service packages at $150, $350, and $750. Identify 50 local prospects on Google Maps this week. Message 20 per day for 7 days. Create your Google Business Profile. Collect 3 testimonials in the first 30 days. Test a $10/day ad only after validating demand organically."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Ready to Accelerate?
          </h2>
          <p className="mb-10 text-slate-400 max-w-lg mx-auto">
            Start free and see your roadmap. Upgrade to Pro or Elite to unlock Accelerator's full output depth.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/pro" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Upgrade to Pro →
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Upgrade to Elite →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
