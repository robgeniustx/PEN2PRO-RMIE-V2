import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ACCELERATOR_MODULES = [
  {
    icon: "🚀",
    title: "Revenue Acceleration Plan",
    desc: "Move from first dollar to consistent monthly income with a sequenced revenue plan built around your niche, price points, and capacity.",
  },
  {
    icon: "📣",
    title: "Marketing Strategy",
    desc: "Platform-specific tactics, content frequency, paid ad readiness thresholds, and local marketing moves that actually generate leads.",
  },
  {
    icon: "💬",
    title: "Outreach Campaign Builder",
    desc: "Cold outreach sequences — DMs, emails, phone scripts — with daily volume targets and follow-up timing mapped out for 30 days.",
  },
  {
    icon: "💰",
    title: "Pricing Strategy Optimizer",
    desc: "Re-evaluate your offer structure, identify upsell opportunities, and find the right price point to maximize revenue without losing clients.",
  },
  {
    icon: "🎯",
    title: "Customer Acquisition System",
    desc: "Referral programs, Google Business Profile optimization, review generation, and repeat business systems to fill your pipeline consistently.",
  },
  {
    icon: "💳",
    title: "Funding Readiness Accelerator",
    desc: "Credit building timeline, vendor tradeline sequence, business bank history requirements, and lender-ready documentation checklist.",
  },
  {
    icon: "📝",
    title: "Sales Scripts Library",
    desc: "Opener, follow-up, objection handler, closing line, and referral ask — all written for your specific offer and priced service.",
  },
  {
    icon: "📅",
    title: "30/60/90-Day Execution Plan",
    desc: "Revenue targets, marketing milestones, team-building checkpoints, and scaling decision points for the next three months.",
  },
];

const RESULTS_FLOW = [
  { period: "Days 1–7", target: "First client or lead", actions: ["Get 5 Google reviews requested", "Message 20 prospects", "Set up Google Business Profile", "Register LLC & EIN"] },
  { period: "Days 8–30", target: "$1,500–$3,000 revenue", actions: ["Run 1 Nextdoor ad ($50 budget)", "Ask every client for a referral", "Apply for Uline net-30 account", "Post daily on local Facebook groups"] },
  { period: "Days 31–60", target: "$3,000–$6,000 revenue", actions: ["Hire first part-time helper", "Set 2 recurring commercial accounts", "Request business credit card", "Test Facebook ad ($10/day)"] },
  { period: "Days 61–90", target: "$6,000–$12,000 revenue", actions: ["Systemize delivery with SOPs", "Launch referral incentive program", "Apply for small business line of credit", "Explore second service offering"] },
];

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full opacity-[0.08]"
            style={{ background: "radial-gradient(circle, #00C9B1 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(circle, #FF8A00 0%, transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-black uppercase tracking-widest text-teal-400">PEN2PRO Accelerator</span>
          </div>
          <h1 className="font-display text-5xl font-black leading-tight text-white md:text-7xl">
            Accelerate Your<br />
            <span style={{ background: "linear-gradient(90deg, #00C9B1, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Revenue Growth.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            PEN2PRO Accelerator is for builders who already have a business idea or existing business — and need a real strategy to grow revenue, acquire clients, build funding readiness, and hit their 90-day income targets.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14] btn-gold glow-gold">
              Build Your Accelerator Plan — Free
            </Link>
            <Link to="/pricing" className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 hover:border-teal-400 hover:text-teal-400 transition">
              View Pro & Elite Plans
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">No credit card · Free plan in under 5 minutes · Pro unlocks deeper strategy</p>
        </div>
      </section>

      {/* MODULES */}
      <section className="border-t border-[#1A2235] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-400">Accelerator Includes</p>
            <h2 className="font-display text-4xl font-black text-white">8 growth modules built for execution</h2>
            <p className="mt-3 text-slate-500">Each module is specific to your business type, location, and starting position.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ACCELERATOR_MODULES.map((mod) => (
              <div key={mod.title} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6 hover:border-teal-400/30 transition-all">
                <div className="mb-3 text-3xl">{mod.icon}</div>
                <h3 className="mb-2 text-sm font-bold text-white">{mod.title}</h3>
                <p className="text-xs leading-6 text-slate-500">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 90-DAY EXECUTION TIMELINE */}
      <section className="bg-[#0F1520] px-5 py-20 border-t border-[#1A2235]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-400">The 90-Day Roadmap</p>
            <h2 className="font-display text-4xl font-black text-white">From $0 to $12K/month in 90 days</h2>
            <p className="mt-3 text-slate-500">
              This is what a real Accelerator roadmap looks like. Your actual plan is built around your specific idea and market.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {RESULTS_FLOW.map((phase) => (
              <div key={phase.period}
                className="rounded-2xl border border-[#1A2235] bg-[#080C14] p-6">
                <div className="mb-1 text-xs font-bold uppercase tracking-widest text-teal-400">{phase.period}</div>
                <div className="mb-4 text-sm font-black text-white">{phase.target}</div>
                <ul className="space-y-2">
                  {phase.actions.map((action) => (
                    <li key={action} className="flex items-start gap-2 text-xs text-slate-500">
                      <span className="font-bold text-teal-400 mt-0.5 shrink-0">→</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-600">
            Revenue targets are illustrative. Results vary based on effort, market, and execution.
          </p>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-black text-white">Accelerator is for you if...</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "You already have a business idea — you need a growth strategy",
              "Your business is open but revenue is inconsistent or too low",
              "You don't have a clear marketing or outreach plan",
              "You want to become fundable within the next 90 days",
              "You need a real pricing strategy, not just random numbers",
              "You want to hire your first employee and don't know when",
              "You want a system — not just motivation — to hit your income goal",
              "You're ready to go from side hustle to full-time business owner",
            ].map((text) => (
              <div key={text} className="flex items-start gap-3 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4">
                <span className="mt-0.5 text-teal-400 font-black shrink-0">✓</span>
                <p className="text-sm text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIER UPSELL */}
      <section className="bg-[#0F1520] px-5 py-16 border-t border-[#1A2235]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-400">Accelerate Faster with Pro or Elite</p>
            <h2 className="font-display text-2xl font-black text-white">Free gets you started. Pro and Elite get you there faster.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                tier: "Free",
                price: "$0",
                features: ["1 Accelerator plan", "30-day preview", "Sample outreach script"],
                cta: "Start Free",
                href: "/starter",
                style: "border-[#1A2235] text-slate-300",
                ctaStyle: "border border-[#1A2235] text-slate-400 hover:border-yellow-500 hover:text-yellow-400",
              },
              {
                tier: "Pro",
                price: "$249/mo",
                features: ["Unlimited plans", "Full 90-day roadmap", "Sales script library", "Credit readiness", "PDF export"],
                cta: "Upgrade to Pro",
                href: "/waitlist?tier=pro",
                style: "border-[#2d9cff]",
                ctaStyle: "bg-[#2d9cff] text-[#081226]",
                badge: "Most Popular",
              },
              {
                tier: "Elite",
                price: "$499/mo",
                features: ["Everything in Pro", "Financial projections", "Funding partner resources", "Done-with-you guidance", "Priority support"],
                cta: "Upgrade to Elite",
                href: "/waitlist?tier=elite",
                style: "border-teal-400/40",
                ctaStyle: "bg-teal-400 text-[#080C14]",
                badge: "Best Value",
              },
            ].map((plan) => (
              <div key={plan.tier}
                className={`relative rounded-2xl border bg-[#080C14] p-6 ${plan.style}`}>
                {plan.badge && (
                  <div className="absolute -top-3 left-4 rounded-full border bg-[#080C14] px-3 py-0.5 text-[10px] font-black uppercase tracking-widest"
                    style={{ borderColor: "rgba(212,160,23,0.4)", color: "#D4A017" }}>
                    {plan.badge}
                  </div>
                )}
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{plan.tier}</p>
                <p className="font-display text-2xl font-black text-white mb-4">{plan.price}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="font-bold text-teal-400 mt-0.5 shrink-0">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link to={plan.href}
                  className={`block w-full rounded-xl py-3 text-center text-sm font-black transition ${plan.ctaStyle}`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-24 text-center border-t border-[#1A2235]">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-4xl font-black text-white mb-4">
            Ready to accelerate?
          </h2>
          <p className="text-slate-400 mb-8">
            Start with your free Accelerator plan. Get a real 30-day strategy for your business idea or existing business — no credit card required.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-2xl px-10 py-4 text-base font-black text-[#080C14] btn-gold glow-gold">
              Build My Accelerator Plan →
            </Link>
            <Link to="/founders" className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-400 hover:border-yellow-500 hover:text-yellow-400 transition">
              View Founders Lifetime →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
