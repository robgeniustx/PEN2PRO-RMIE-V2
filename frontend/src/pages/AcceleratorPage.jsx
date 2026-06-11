import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MODULES = [
  { icon: "💰", title: "Revenue Acceleration", body: "Find your fastest path to first dollar. Identify your highest-value offer, validate demand in 48 hours, and price for profit from day one." },
  { icon: "📣", title: "Marketing Strategy", body: "Platform-specific marketing plan built for your business type. Content angles, posting cadence, and paid ads readiness checklist." },
  { icon: "📬", title: "Outreach Campaigns", body: "Pre-written outreach scripts for cold DMs, email campaigns, cold calls, and partnership pitches — tailored to your offer." },
  { icon: "💵", title: "Pricing Strategy", body: "Stop guessing on price. RMIE builds a tiered pricing structure for your specific offer with competitive analysis and conversion logic." },
  { icon: "👥", title: "Customer Acquisition", body: "50-target prospect plan, outreach tracking system, follow-up sequences, and conversion triggers to close your first 10 customers." },
  { icon: "🏦", title: "Funding Readiness", body: "Know exactly where you stand with lenders. Personal credit review, business entity readiness, revenue documentation, and application prep." },
  { icon: "📝", title: "Sales Scripts", body: "Word-for-word scripts for in-person pitches, phone calls, DMs, discovery calls, and closing conversations — built for your specific business." },
  { icon: "📅", title: "30/60/90-Day Execution Plan", body: "Granular action plan broken down by week. Know exactly what to do every single day for the next three months." },
];

const PLAN_PHASES = [
  {
    phase: "30-Day Sprint",
    color: "#1E88E5",
    goal: "Validate, Launch, and Get First Revenue",
    items: [
      "Validate your offer with 20 real prospects",
      "Close your first paying customer",
      "Launch your online presence",
      "Build your first outreach list of 100 contacts",
      "Collect your first 3 testimonials",
    ],
  },
  {
    phase: "60-Day Build",
    color: "#FF8A00",
    goal: "Systemize and Scale Outreach",
    items: [
      "Hit $1,000–$5,000 in revenue",
      "Build a repeatable sales system",
      "Start business credit foundation",
      "Launch your first marketing campaign",
      "Build referral pipeline",
    ],
  },
  {
    phase: "90-Day Growth",
    color: "#D4A017",
    goal: "Expand Revenue and Fund the Business",
    items: [
      "Hit $5,000–$15,000 in monthly revenue",
      "Apply for business funding or credit line",
      "Hire first contractor or VA",
      "Build automated follow-up sequences",
      "Plan next 90-day growth phase",
    ],
  },
];

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.18) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[50%] -left-40 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,138,0,0.12) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#0F1520] px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ color: "#FF8A00" }}>
            🚀 Accelerator Mode
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Stop Thinking.
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Start Accelerating.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Accelerator Mode is for people who have an idea or business and are ready to get serious about revenue. Sales scripts, outreach campaigns, marketing strategy, funding readiness, and a 30/60/90-day execution plan built specifically for you.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Your Accelerator Blueprint
            </Link>
            <Link to="/elite"
              className="rounded-xl border border-[#FF8A00]/30 px-8 py-3.5 text-sm font-semibold transition-colors"
              style={{ color: "#FF8A00" }}>
              Unlock Full Accelerator with Elite →
            </Link>
          </div>
        </div>
      </section>

      {/* 30/60/90 plan */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>Execution Timeline</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Your 30/60/90-Day Growth Plan
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Not a vague plan. Not motivation. Specific milestones, specific actions, and specific outcomes for each phase of your growth.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {PLAN_PHASES.map((phase) => (
              <div key={phase.phase} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: phase.color }} />
                <div className="mb-1 text-xs font-black uppercase tracking-widest" style={{ color: phase.color }}>{phase.phase}</div>
                <p className="mb-4 text-sm font-bold text-white">{phase.goal}</p>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-0.5 shrink-0" style={{ color: phase.color }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Accelerator Modules</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Every Tool to Go from 0 to Revenue
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Accelerator Mode includes every revenue-focused tool in PEN2PRO. Scripts, strategy, outreach, pricing, and the plan to execute it all.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {MODULES.map((m) => (
              <div key={m.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 hover:border-[#FF8A00]/30 transition-colors">
                <div className="mb-3 text-3xl">{m.icon}</div>
                <h3 className="mb-2 font-bold text-white">{m.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real example */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center font-display text-3xl font-black">What Real Output Looks Like</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/20 bg-[#0F1520] p-6">
              <div className="mb-3 text-xs font-bold uppercase tracking-widest text-red-400">Generic Advice (What You Don't Get)</div>
              <p className="text-slate-400 text-sm leading-relaxed italic">
                "Post on social media and market your business to reach more customers."
              </p>
            </div>
            <div className="rounded-2xl border border-[#FF8A00]/30 bg-[#0F1520] p-6">
              <div className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>PEN2PRO Output (What You Actually Get)</div>
              <p className="text-slate-300 text-sm leading-relaxed">
                "Create 3 offer packages at $97, $297, and $597. Build a list of 50 local prospects on LinkedIn. Message 20 per day for 7 days using this script: [script provided]. Create a Google Business Profile. Collect 3 testimonials in week 1. Run a $10/day Facebook ad only after closing your first 5 customers."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center justify-center h-16 w-16 rounded-2xl mx-auto"
            style={{ background: "linear-gradient(135deg, #CC5200, #FF8A00)" }}>
            <span className="text-2xl">🚀</span>
          </div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Your Accelerator Starts Here.
          </h2>
          <p className="mb-8 text-slate-400">
            Start with the free roadmap to see what RMIE builds for your idea. Upgrade to Elite for the full accelerator experience.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/elite"
              className="rounded-xl border border-[#FF8A00]/30 px-8 py-3.5 text-sm font-semibold transition-colors"
              style={{ color: "#FF8A00" }}>
              Unlock Full Accelerator
            </Link>
            <Link to="/founders"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Legacy Founders
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
