import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ACCELERATION_PILLARS = [
  {
    icon: "💰",
    title: "Revenue Strategy",
    color: "#D4A017",
    items: [
      "Pricing architecture (3 offer tiers)",
      "High-ticket vs volume model analysis",
      "Upsell & retention strategy",
      "Monthly recurring revenue setup",
    ],
  },
  {
    icon: "📣",
    title: "Marketing & Outreach",
    color: "#1E88E5",
    items: [
      "50-prospect outreach list in 24 hours",
      "DM/email/text scripts proven to convert",
      "Social content calendar (30 days)",
      "$10/day ad strategy after validation",
    ],
  },
  {
    icon: "🤝",
    title: "Client Acquisition",
    color: "#00C9B1",
    items: [
      "Cold outreach → warm pipeline system",
      "Follow-up sequences (7-touch)",
      "Referral program setup",
      "Google Business Profile optimization",
    ],
  },
  {
    icon: "💳",
    title: "Funding Readiness",
    color: "#7C3AED",
    items: [
      "Personal credit benchmarks for lenders",
      "Business credit tradeline sequence",
      "Net-30 vendor account strategy",
      "Lender-ready documentation checklist",
    ],
  },
];

const EXECUTION_PLAN = [
  {
    phase: "Days 1–7",
    label: "Launch Sprint",
    color: "#FF8A00",
    tasks: [
      "Finalize your offer and pricing",
      "Set up business entity & bank account",
      "Reach out to 20 warm prospects",
      "Collect 3 testimonials or case studies",
      "Create your Google Business Profile",
    ],
  },
  {
    phase: "Days 8–30",
    label: "Build Momentum",
    color: "#1E88E5",
    tasks: [
      "Hit your first $1,000–$5,000 in revenue",
      "Launch social media content system",
      "Start net-30 tradeline accounts",
      "Set up basic CRM pipeline",
      "Begin personal credit improvement steps",
    ],
  },
  {
    phase: "Days 31–90",
    label: "Scale & Systematize",
    color: "#00C9B1",
    tasks: [
      "Revenue target: 3×–5× Month 1",
      "Hire or outsource first task",
      "Apply for business funding (if ready)",
      "Launch referral or affiliate system",
      "Optimize pricing based on demand",
    ],
  },
];

export default function AcceleratorPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">

      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute bottom-0 -left-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,201,177,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,160,23,0.1) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#D4A017] uppercase tracking-widest">
            🚀 Accelerator
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Stop Building Slowly.
            <br />
            <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Accelerate to Revenue.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Most entrepreneurs take 12–24 months to get traction. The PEN2PRO Accelerator compresses that into 90 days with revenue strategy, client acquisition systems, marketing execution, and funding readiness — all built around your specific business.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/checkout/pro" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Unlock Accelerator — Pro →
            </Link>
            <Link to="/starter" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Start Free First
            </Link>
          </div>
        </div>
      </section>

      {/* 4 PILLARS */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">Acceleration Pillars</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            4 Systems That Drive Revenue
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            The Accelerator doesn't give you generic advice. It gives you the exact plays that move the needle — revenue, outreach, clients, and capital.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {ACCELERATION_PILLARS.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-3xl">{pillar.icon}</span>
                  <h3 className="text-xl font-black text-white">{pillar.title}</h3>
                </div>
                <ul className="space-y-3">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="mt-0.5 shrink-0" style={{ color: pillar.color }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30/60/90 EXECUTION PLAN */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Execution Framework</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Your 90-Day Revenue Roadmap
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            This isn't theory. These are the exact phases, tasks, and milestones that go into your personalized Accelerator plan — built around your business, your idea, and your starting point.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {EXECUTION_PLAN.map((phase) => (
              <div key={phase.phase} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: phase.color }}>
                  {phase.phase}
                </div>
                <h3 className="mb-4 font-display text-xl font-black text-white">{phase.label}</h3>
                <ul className="space-y-3">
                  {phase.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="mt-0.5 shrink-0" style={{ color: phase.color }}>✓</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center font-display text-3xl font-black md:text-4xl">
            Accelerator vs. Figuring It Out Alone
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-6">
              <h3 className="mb-4 font-bold text-red-400">Without a System</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                {[
                  "12–24 months to get first traction",
                  "Random marketing, no clear strategy",
                  "Rejected by lenders — didn't know why",
                  "Underselling services or overpricing market",
                  "No follow-up system — leads go cold",
                  "LLC, EIN, bank account set up out of order",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-red-500">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6">
              <h3 className="mb-4 font-bold text-emerald-400">With PEN2PRO Accelerator</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {[
                  "First revenue in 7–30 days (with execution)",
                  "Clear outreach, pricing, and offer strategy",
                  "Funding readiness score before you apply",
                  "3 offer tiers priced for your market",
                  "7-touch follow-up system built in",
                  "Entity setup in the right legal order",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            ⚡ Available in Pro & Elite
          </div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            The Accelerator Is Ready.<br />Are You?
          </h2>
          <p className="mb-10 text-slate-400">
            Join Pro or Elite to unlock your full 90-day Accelerator roadmap. Or start free and see what your business blueprint looks like before you upgrade.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/checkout/pro" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Unlock Pro Accelerator →
            </Link>
            <Link to="/checkout/elite" className="rounded-xl border border-[#00C9B1] px-8 py-3.5 text-sm font-black text-[#00C9B1] hover:bg-[#00C9B1] hover:text-black transition-all">
              Go Elite →
            </Link>
            <Link to="/founders" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Legacy Founder Lifetime →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
