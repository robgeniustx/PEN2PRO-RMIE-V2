import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ACCELERATOR_MODULES = [
  { icon: "💰", title: "Revenue Acceleration", body: "AI-powered analysis of your current revenue model with specific levers to increase income in the next 30 days — pricing, upsells, volume, and partnerships." },
  { icon: "📣", title: "Marketing Strategy", body: "Multi-channel marketing plan built for your niche — organic content calendar, paid ad strategy, email sequences, and referral program design." },
  { icon: "🎯", title: "Outreach Campaigns", body: "Ready-to-send outreach templates, follow-up sequences, DM scripts, cold email frameworks, and a daily prospecting action plan." },
  { icon: "💲", title: "Pricing Strategy", body: "Stop undercharging. Get a data-driven pricing strategy based on your offer, market, and customer acquisition costs — with tiered package structures." },
  { icon: "👥", title: "Customer Acquisition", body: "5 specific customer acquisition channels for your business type — with traffic sources, conversion scripts, and 30-day execution steps for each." },
  { icon: "🏦", title: "Funding Readiness", body: "Know exactly where you stand for business loans, grants, and investor conversations. Get a clear action plan to become fundable within 90 days." },
  { icon: "📞", title: "Sales Scripts", body: "Customized sales scripts for your offer: discovery calls, objection handling, closing frameworks, and follow-up messages that convert." },
  { icon: "📅", title: "30/60/90-Day Execution Plan", body: "A locked-in calendar of actions for the first 90 days — what to do daily, weekly, and monthly to reach your first significant revenue milestone." },
];

const PLAN_PHASES = [
  { phase: "30 Days", color: "#1E88E5", title: "Foundation & First Revenue", items: ["Complete LLC and EIN setup", "Open business bank account", "Create 3 service packages with pricing", "Build outreach list of 50 prospects", "Launch Google Business Profile", "Close first 2 paying clients"] },
  { phase: "60 Days", color: "#D4A017", title: "System & Scale", items: ["Hit consistent $3K–$5K monthly revenue", "Implement CRM and pipeline tracking", "Launch email nurture sequence", "Start building business credit", "Run first paid ad test ($10/day)", "Collect 5 verified client testimonials"] },
  { phase: "90 Days", color: "#00C9B1", title: "Growth & Funding Readiness", items: ["Reach $7K–$10K monthly revenue target", "Submit first funding application", "Hire first virtual assistant or contractor", "Launch affiliate or referral program", "Document all processes and SOPs", "Set 12-month business growth targets"] },
];

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -right-48 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 -left-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,201,177,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="relative px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/40 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            🚀 PEN2PRO Accelerator
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Stop Building Slowly.
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Accelerate to Income.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            The PEN2PRO Accelerator is the advanced growth and monetization mode — revenue acceleration, marketing strategy, outreach campaigns, pricing optimization, and a locked-in 30/60/90-day execution plan.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite" className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14] btn-gold">
              Get Accelerator Access →
            </Link>
            <Link to="/pricing" className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 hover:text-white transition-colors">
              View Pricing
            </Link>
          </div>
          <p className="mt-3 text-sm text-slate-500">Accelerator is included in Pro, Elite, and Founders Lifetime plans</p>
        </div>
      </section>

      {/* MODULES */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Accelerator Modules</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Eight Revenue Acceleration Systems
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Every module is built for people who need real moves, not motivational content. Specific. Actionable. Built around your business.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {ACCELERATOR_MODULES.map((m) => (
              <div key={m.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 hover:border-[#FF8A00]/30 transition-colors">
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
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">Execution Timeline</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Your 90-Day Income Roadmap
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            The Accelerator gives you a specific calendar of actions built around your business type, market, and starting point.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {PLAN_PHASES.map((phase) => (
              <div key={phase.phase} className="rounded-2xl border bg-[#0F1520] p-6" style={{ borderColor: `${phase.color}30` }}>
                <div className="mb-2 inline-block rounded-lg px-3 py-1 text-xs font-black uppercase tracking-widest"
                  style={{ background: `${phase.color}20`, color: phase.color }}>
                  {phase.phase}
                </div>
                <h3 className="mb-4 font-bold text-white">{phase.title}</h3>
                <ul className="space-y-2.5">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-0.5 shrink-0 font-bold" style={{ color: phase.color }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTPUT EXAMPLE */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Real Output Example</div>
          <h2 className="mb-8 text-center font-display text-3xl font-black">What RMIE Actually Produces</h2>
          <div className="space-y-4">
            <div className="rounded-2xl border border-red-500/20 bg-[#0F1520] p-5">
              <p className="text-sm font-bold text-red-400 mb-2">❌ What most tools give you:</p>
              <p className="text-sm text-slate-500">"Market your services online and build your customer base."</p>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-[#0F1520] p-5">
              <p className="text-sm font-bold text-emerald-400 mb-2">✅ What PEN2PRO Accelerator gives you:</p>
              <div className="text-sm text-slate-300 space-y-1">
                <p>"Day 1–7: Create 3 offer packages at $350 (basic), $650 (standard), $1,200 (premium)."</p>
                <p>"Day 1–7: Pull 50 local business contacts from Google Maps in your zip code."</p>
                <p>"Day 1–14: Send 20 personalized DMs per day using this exact script: [script included]."</p>
                <p>"Day 8: Claim your Google Business Profile and add 5 photos this week."</p>
                <p>"Day 14: Follow up with all non-responders using [follow-up script]."</p>
                <p>"Day 21: Ask your first 2 clients for Google reviews using [review request template]."</p>
              </div>
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
          <p className="mb-10 text-slate-400">
            Accelerator is included in Pro, Elite, and Founders Lifetime plans. Join the waitlist and get access when we launch.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="rounded-xl px-8 py-4 text-sm font-black text-[#080C14] btn-gold">
              Join Waitlist — Pro
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#00C9B1]/40 px-8 py-4 text-sm font-semibold text-[#00C9B1] hover:text-white transition-colors">
              See Elite Plan
            </Link>
            <Link to="/founders" className="rounded-xl border border-[#D4A017]/40 px-8 py-4 text-sm font-semibold text-[#D4A017] hover:text-white transition-colors">
              Founders Lifetime
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
