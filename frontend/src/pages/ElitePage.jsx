import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ELITE_FEATURES = [
  { icon: "🗺️", title: "Everything in Pro", desc: "Full roadmap, tracking, branding, PDF export, outreach scripts, and AI refinement — all included." },
  { icon: "📈", title: "Financial Projections", desc: "Revenue forecasts, expense modeling, break-even analysis, and 12-month growth targets." },
  { icon: "🏦", title: "Funding Partner Resources", desc: "Vetted lenders, SBA resources, grant databases, and business credit vendor connections." },
  { icon: "🏢", title: "Company Formation Guidance", desc: "LLC, S-Corp, EIN, operating agreements, and business banking — walked through in the right order." },
  { icon: "™️", title: "Trademark & Brand Protection", desc: "Trademark search guidance, brand registration checklist, and social media handle strategy." },
  { icon: "📣", title: "Marketing & Advertising", desc: "Paid ad strategy, organic content calendar, email sequences, and follow-up campaign templates." },
  { icon: "🤝", title: "Done-With-You Guidance", desc: "Strategy reviews and execution support from the PEN2PRO team during your build phase." },
  { icon: "⚡", title: "Priority Support", desc: "Front-of-line access. Questions answered within 24 hours by the PEN2PRO team." },
];

const ELITE_FULL_LIST = [
  "Full RMIE business blueprint",
  "Complete 90-day execution roadmap",
  "Sales scripts and outreach playbooks",
  "Credit and funding readiness checklist",
  "Business branding direction",
  "Financial projections and revenue modeling",
  "Vendor and tradeline guidance",
  "Company formation walkthrough (LLC, EIN, banking)",
  "Trademark and social media guidance",
  "Done-with-you strategy support sessions",
  "Priority support — 24-hour response",
  "Funding partner resource center",
  "All current and future Elite updates",
];

export default function ElitePage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(0,201,177,0.10) 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00C9B1]/30 bg-[#00C9B1]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00C9B1]">
            💎 PEN2PRO Elite Plan
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            Advanced Strategy.<br />
            <span
              style={{
                background: "linear-gradient(90deg, #00C9B1, #1E88E5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Full Execution Support.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Elite is everything in Pro, plus financial projections, funding partner resources, company
            formation guidance, done-with-you strategy, and priority support. Built for serious builders.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=elite"
              className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #00C9B1, #1E88E5)" }}
            >
              Join Elite Waitlist — $499/mo →
            </Link>
            <Link
              to="/pricing"
              className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-400 hover:border-[#00C9B1]/50 hover:text-white transition"
            >
              View All Plans
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">Launching June 15, 2026 · Priority access for waitlist members</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-[#1A2235] bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#00C9B1]">What Elite Includes</p>
            <h2 className="font-display text-4xl font-black text-white">The full strategy and execution suite</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ELITE_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#00C9B1]/20 bg-[#080C14] p-6 hover:border-[#00C9B1]/40 transition-colors"
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 text-sm font-bold text-white">{f.title}</h3>
                <p className="text-xs leading-6 text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL LIST + PRICING */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Full Access</p>
            <h2 className="font-display text-3xl font-black text-white">Everything you get with Elite</h2>
          </div>
          <div className="rounded-2xl border border-[#00C9B1]/30 bg-[#0F1520] p-8">
            <ul className="space-y-3">
              {ELITE_FULL_LIST.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-0.5 font-bold text-[#00C9B1]">✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-[#1A2235] pt-8 text-center">
              <div className="mb-2 font-display text-4xl font-black text-white">
                $499<span className="text-lg text-slate-500">/mo</span>
              </div>
              <p className="mb-6 text-sm text-slate-500">Cancel anytime. All features active from day one.</p>
              <Link
                to="/waitlist?tier=elite"
                className="block rounded-2xl py-4 text-base font-black text-[#080C14]"
                style={{ background: "linear-gradient(135deg, #00C9B1, #1E88E5)" }}
              >
                Join Elite Waitlist →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRO COMPARISON */}
      <section className="border-t border-[#1A2235] bg-[#0F1520] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Plan Comparison</p>
            <h2 className="font-display text-3xl font-black text-white">Pro vs Elite at a glance</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                name: "Pro", price: "$249/mo", color: "#D4A017",
                features: ["Full RMIE roadmap", "Progress tracking", "Branding support", "Sales scripts", "Credit readiness", "PDF export", "AI refinement"],
                cta: "Explore Pro", href: "/pro",
              },
              {
                name: "Elite", price: "$499/mo", color: "#00C9B1",
                features: ["Everything in Pro", "Financial projections", "Funding partner center", "Company formation guide", "Done-with-you support", "Priority response", "Trademark guidance"],
                cta: "Join Elite Waitlist", href: "/waitlist?tier=elite",
              },
            ].map((plan) => (
              <div key={plan.name} className="rounded-2xl border bg-[#080C14] p-6" style={{ borderColor: plan.color + "40" }}>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: plan.color }}>{plan.name}</p>
                <p className="mt-1 mb-5 font-display text-2xl font-black text-white">{plan.price}</p>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
                      <span className="font-bold" style={{ color: plan.color }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={plan.href}
                  className="block rounded-xl px-4 py-3 text-center text-sm font-black transition border"
                  style={{ borderColor: plan.color + "60", color: plan.color }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS CTA */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 font-display text-4xl font-black">
            Or skip the monthly fee — become a Founder.
          </h2>
          <p className="mb-10 text-slate-400">
            Founders Lifetime gives you everything in Elite — forever — for a single one-time investment of $1,899.
            Only 200 spots exist, globally.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/founders"
              className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14] btn-gold"
            >
              Explore Founders Lifetime →
            </Link>
            <Link
              to="/pricing"
              className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-400 hover:text-white transition"
            >
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
