import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ACCELERATOR_MODULES = [
  {
    icon: "📈",
    title: "Revenue Acceleration Plan",
    body: "Identify your fastest path to revenue — the highest-value offer, the hottest audience, and the shortest time from pitch to payment.",
  },
  {
    icon: "📣",
    title: "Marketing Strategy",
    body: "Build a real marketing plan — organic outreach, referral systems, content strategy, and paid acquisition tested in the right order.",
  },
  {
    icon: "📧",
    title: "Outreach Campaigns",
    body: "Pre-written outreach scripts, email sequences, DM templates, and follow-up cadences designed for your specific offer and industry.",
  },
  {
    icon: "💲",
    title: "Pricing Strategy",
    body: "Stop undercharging. RMIE analyzes your market, your costs, and your competition to help you set a price that's both competitive and profitable.",
  },
  {
    icon: "🎯",
    title: "Customer Acquisition Strategy",
    body: "Identify the best channels for your business, build a lead pipeline, and establish a repeatable customer acquisition process.",
  },
  {
    icon: "🏦",
    title: "Funding Readiness",
    body: "Assess your business and personal credit, identify the right funding options, and build the documentation lenders need before you apply.",
  },
  {
    icon: "🗣️",
    title: "Sales Scripts",
    body: "Word-for-word sales scripts for phone, in-person, and digital. Handle objections, close confidently, and follow up like a professional.",
  },
  {
    icon: "📅",
    title: "30/60/90-Day Execution Plan",
    body: "A milestone-driven plan for your first 90 days — with specific tasks, weekly targets, and clear checkpoints to measure progress.",
  },
];

const EXECUTION_PLAN = [
  {
    phase: "Days 1–30",
    color: "#059669",
    title: "Foundation & First Sales",
    tasks: [
      "Finalize your offer and pricing",
      "Set up your business entity (LLC, EIN, bank)",
      "Build or claim your digital presence",
      "Reach out to 20 prospects daily",
      "Close first 3–5 customers",
      "Collect testimonials and social proof",
    ],
  },
  {
    phase: "Days 31–60",
    color: "#1E88E5",
    title: "Systems & Momentum",
    tasks: [
      "Build a simple CRM and lead tracking system",
      "Create referral system for existing customers",
      "Launch first email sequence for follow-up",
      "Automate booking and intake process",
      "Hit consistent weekly revenue targets",
      "Apply for business credit if qualified",
    ],
  },
  {
    phase: "Days 61–90",
    color: "#D4A017",
    title: "Scale & Reinvest",
    tasks: [
      "Evaluate what's working and double down",
      "Add second offer or upsell",
      "Test first paid ad campaign at small budget",
      "Hire first help (VA or contractor) if needed",
      "Set 6-month and 12-month revenue targets",
      "Explore partnership and affiliate opportunities",
    ],
  },
];

export default function AcceleratorPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-0 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[30%] -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.1) 0%, transparent 65%)", filter: "blur(50px)" }} />
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
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#7C3AED] uppercase tracking-widest">
            🚀 PEN2PRO Accelerator
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            From Launch to Revenue.
            <br />
            <span style={{ background: "linear-gradient(90deg, #7C3AED, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              In 90 Days.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-8">
            Accelerator is the growth and monetization engine inside PEN2PRO. Not a course. Not a template. A full execution plan — outreach campaigns, pricing strategy, sales scripts, funding readiness, and a 30/60/90-day roadmap built for your business.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-4 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Your Free Roadmap
            </Link>
            <Link to="/pro" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Unlock Full Accelerator with Pro →
            </Link>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#7C3AED]">Accelerator Modules</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            8 Growth Engines in One Platform
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Each Accelerator module targets a specific lever in your business — revenue, marketing, sales, pricing, customer acquisition, and funding readiness.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {ACCELERATOR_MODULES.map((m) => (
              <div key={m.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1 h-full"
                  style={{ background: "linear-gradient(180deg, #7C3AED, #FF8A00)" }} />
                <div className="mb-3 text-3xl">{m.icon}</div>
                <h3 className="mb-2 font-bold text-white text-lg">{m.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30/60/90 Plan */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">30/60/90-Day Plan</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            A Real Execution Timeline
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Not "work harder." Actual milestones. Actual deadlines. Actual tasks — in the right order, built for where you are right now.
          </p>
          <div className="space-y-6">
            {EXECUTION_PLAN.map((phase) => (
              <div key={phase.phase} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] overflow-hidden">
                <div className="px-6 py-4 flex items-center gap-4 border-b border-[#1A2D50]"
                  style={{ background: `linear-gradient(90deg, ${phase.color}18 0%, transparent 100%)` }}>
                  <div className="rounded-xl px-3 py-1 text-xs font-black uppercase tracking-widest"
                    style={{ color: phase.color, background: `${phase.color}20`, border: `1px solid ${phase.color}40` }}>
                    {phase.phase}
                  </div>
                  <h3 className="font-black text-white text-lg">{phase.title}</h3>
                </div>
                <div className="grid gap-3 p-6 sm:grid-cols-2 lg:grid-cols-3">
                  {phase.tasks.map((task) => (
                    <div key={task} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border-2 flex items-center justify-center"
                        style={{ borderColor: phase.color }}>
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: phase.color }} />
                      </span>
                      {task}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Accelerator Gives You */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#7C3AED]">The Accelerator Difference</div>
          <h2 className="mb-8 font-display text-3xl font-black md:text-4xl">
            Real Moves. Not Motivation.
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 text-left">
            {[
              { wrong: "Post on social media", right: "Post 3 pieces of content per week targeting your specific audience, with a clear call to action and offer link in every post" },
              { wrong: "Find customers", right: "Identify 50 local prospects by searching Facebook Groups, Google Maps, and LinkedIn — then reach out to 20 per day" },
              { wrong: "Get funding", right: "Check your personal credit score, open a business bank account, get an EIN, and wait 3 months of business activity before applying for credit" },
              { wrong: "Build an audience", right: "Start a weekly email newsletter, offer one valuable free resource to your target audience, and collect 100 email subscribers in 30 days" },
            ].map(({ wrong, right }) => (
              <div key={wrong} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-red-400 text-lg">✗</span>
                  <p className="text-sm text-slate-500 line-through">{wrong}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#7C3AED] text-lg shrink-0 mt-0.5">✓</span>
                  <p className="text-sm text-slate-300">{right}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier Access */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Accelerator Access by Tier</div>
          <h2 className="mb-8 font-display text-2xl font-black md:text-3xl">
            How Much Accelerator You Get
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { tier: "Free", access: "30-day preview plan", desc: "See the roadmap structure — upgrade to execute", cta: "Start Free", to: "/starter", color: "slate-400", border: "border-[#1A2D50]" },
              { tier: "Pro", access: "Full 90-day roadmap", desc: "Complete Accelerator — outreach, pricing, sales scripts, and full execution", cta: "Join Pro Waitlist", to: "/waitlist?tier=pro", color: "[#1E88E5]", border: "border-[#1E88E5]/40", gold: true },
              { tier: "Elite", access: "Advanced Accelerator", desc: "Financial projections, funding readiness, and advanced scaling strategy", cta: "Join Elite Waitlist", to: "/waitlist?tier=elite", color: "[#D4A017]", border: "border-[#D4A017]/40" },
            ].map((t) => (
              <div key={t.tier} className={`rounded-2xl border ${t.border} bg-[#0F1520] p-6`}>
                <p className={`text-sm font-black uppercase tracking-widest text-${t.color} mb-1`}>{t.tier}</p>
                <p className="font-bold text-white text-sm mb-2">{t.access}</p>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">{t.desc}</p>
                <Link to={t.to} className={`block rounded-xl px-4 py-2.5 text-center text-xs font-black ${t.gold ? "btn-gold text-[#0A0F1E]" : "border border-[#1A2D50] text-slate-300 hover:text-white transition-colors"}`}>
                  {t.cta}
                </Link>
              </div>
            ))}
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
            Start your free roadmap now and see what your first 30 days should look like. Upgrade to Pro for the full 90-day execution plan.
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
