import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MODULES = [
  {
    icon: "💰",
    title: "Revenue Acceleration",
    body: "Identify the fastest path to your first $1k, $5k, and $10k months. Revenue model analysis, pricing optimization, and upsell strategy included.",
  },
  {
    icon: "📣",
    title: "Marketing Strategy",
    body: "Platform-specific marketing plans for your business type. Instagram, Facebook, TikTok, Google, email, and local outreach — built around your audience.",
  },
  {
    icon: "🎯",
    title: "Outreach Campaigns",
    body: "Custom outreach scripts, DM templates, cold call frameworks, and follow-up sequences designed to convert prospects into paying customers.",
  },
  {
    icon: "💲",
    title: "Pricing Strategy",
    body: "Three-tier offer design, anchor pricing, discount strategy, and competitive positioning so you charge what your business is worth.",
  },
  {
    icon: "👥",
    title: "Customer Acquisition",
    body: "Identify your ideal buyer, find where they spend time, and build a repeatable system to attract, convert, and retain customers.",
  },
  {
    icon: "🏦",
    title: "Funding Readiness",
    body: "Assess your fundability, fix what's blocking you, and prepare documentation so lenders and investors take you seriously.",
  },
  {
    icon: "📜",
    title: "Sales Scripts",
    body: "Word-for-word scripts for introductory calls, closing calls, objection handling, and follow-up conversations — built for your specific offer.",
  },
  {
    icon: "📅",
    title: "30/60/90-Day Execution Plan",
    body: "Specific daily and weekly actions for the first 90 days — no vague goals, just real tasks, benchmarks, and milestones.",
  },
];

const PLAN_ROWS = [
  {
    day: "Days 1–7",
    label: "Foundation Sprint",
    tasks: [
      "Finalize your offer and pricing",
      "Set up your business entity (LLC/EIN)",
      "Create basic online presence",
      "Identify first 25 prospects",
    ],
  },
  {
    day: "Days 8–30",
    label: "Launch Execution",
    tasks: [
      "Run initial outreach campaign (20 contacts/day)",
      "Book first client meetings",
      "Collect first testimonials",
      "Optimize your offer based on feedback",
    ],
  },
  {
    day: "Days 31–60",
    label: "Revenue Build",
    tasks: [
      "Systematize your delivery process",
      "Launch referral program",
      "Test first paid marketing ($10/day)",
      "Open business bank account",
    ],
  },
  {
    day: "Days 61–90",
    label: "Scale & Optimize",
    tasks: [
      "Expand outreach channels",
      "Apply for business credit",
      "Build your first marketing funnel",
      "Prepare funding readiness documentation",
    ],
  },
];

export default function AcceleratorPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 right-0 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* Hero */}
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
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Accelerator mode gives you everything a growth-stage business needs: revenue strategy, outreach campaigns, sales scripts, 90-day execution plan, and funding readiness — all in one engine.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Launch Accelerator
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Upgrade to Elite →
            </Link>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Accelerator Modules</div>
          <h2 className="mb-14 text-center font-display text-3xl font-black md:text-4xl">
            Eight Engines. One Platform.
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {MODULES.map((m) => (
              <div key={m.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 hover:border-[#FF8A00]/30 transition-colors">
                <div className="mb-3 text-3xl">{m.icon}</div>
                <h3 className="mb-2 font-bold text-white text-sm">{m.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30/60/90 Plan */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Your 90-Day Plan</div>
          <h2 className="mb-5 text-center font-display text-3xl font-black md:text-4xl">
            Real Tasks. Real Milestones.
          </h2>
          <p className="mb-12 text-center text-slate-400 max-w-2xl mx-auto">
            No vague goals like "market your business." Accelerator gives you specific daily and weekly actions for the first 90 days of execution.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {PLAN_ROWS.map((row) => (
              <div key={row.day} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-1 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">{row.day}</div>
                <h3 className="mb-4 font-bold text-white text-lg">{row.label}</h3>
                <ul className="space-y-2">
                  {row.tasks.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="mt-0.5 text-[#FF8A00] font-bold shrink-0">→</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade Tiers */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Unlock More Power</div>
          <h2 className="mb-12 text-center font-display text-3xl font-black">
            Accelerator Runs Deeper with Pro or Elite
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { tier: "Free", price: "$0", desc: "Starter blueprint, basic 30-day plan, limited tracking.", cta: "Start Free", link: "/starter", border: "border-[#1A2D50]" },
              { tier: "Pro", price: "$249/mo", desc: "Full RMIE roadmap, outreach scripts, 90-day plan, AI refinement, PDF export.", cta: "Go Pro", link: "/pro", border: "border-[#1E88E5]/40" },
              { tier: "Elite", price: "$499/mo", desc: "Everything in Pro + financial projections, funding readiness, vendor access, done-with-you strategy.", cta: "Go Elite", link: "/elite", border: "border-[#FF8A00]/40" },
            ].map((t) => (
              <div key={t.tier} className={`rounded-2xl border ${t.border} bg-[#0F1520] p-6 text-center`}>
                <div className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-500">{t.tier}</div>
                <div className="text-2xl font-black text-white mb-3">{t.price}</div>
                <p className="text-sm text-slate-400 mb-5 leading-relaxed">{t.desc}</p>
                <Link to={t.link} className="block rounded-xl px-5 py-2.5 text-sm font-bold btn-gold text-[#0A0F1E]">
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black">Ready to Accelerate?</h2>
          <p className="mb-8 text-slate-400">
            Start with a free blueprint. Upgrade when you're ready to go deeper. No pressure, no lock-ins.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/waitlist" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
