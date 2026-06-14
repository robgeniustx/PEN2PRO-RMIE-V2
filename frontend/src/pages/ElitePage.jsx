import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ELITE_FEATURES = [
  { icon: "📈", title: "Financial Projections", desc: "12-month revenue projections, break-even analysis, and profit margin estimates built around your specific business model." },
  { icon: "💼", title: "Done-With-You Strategy", desc: "Advanced strategist guidance woven into your roadmap — not just tools, but directional insight at every decision point." },
  { icon: "🏦", title: "Funding Partner Resources", desc: "Curated list of funding sources, lender requirements, SBA loan guidance, and grant opportunities matched to your business type." },
  { icon: "💳", title: "Vendor & Credit Center", desc: "Net-30 vendors, business tradeline strategy, business credit timeline, and personal-to-business credit bridge guidance." },
  { icon: "⚖️", title: "Company Formation Checklist", desc: "LLC structure, registered agent, operating agreement, EIN, state-specific filing guidance, and annual compliance steps." },
  { icon: "™️", title: "Trademark & Brand Protection", desc: "USPTO trademark readiness checklist, social media handle strategy, domain security, and brand identity protection steps." },
  { icon: "📣", title: "Marketing & Growth System", desc: "Full marketing playbook — content strategy, paid ad readiness, email list building, and customer acquisition system." },
  { icon: "🎯", title: "Priority Strategy Support", desc: "Priority access to roadmap support, advanced AI refinement, and strategy updates as your business evolves." },
];

const ELITE_VS_PRO = [
  { label: "Everything in Pro", pro: "✓", elite: "✓" },
  { label: "Financial Projections", pro: "—", elite: "✓" },
  { label: "Done-With-You Guidance", pro: "—", elite: "✓" },
  { label: "Funding Partner Resources", pro: "—", elite: "✓" },
  { label: "Vendor & Credit Center", pro: "—", elite: "✓" },
  { label: "Company Formation Guide", pro: "Basic", elite: "Full" },
  { label: "Trademark & Brand Protection", pro: "—", elite: "✓" },
  { label: "Advanced Marketing Playbook", pro: "—", elite: "✓" },
  { label: "Priority Support", pro: "Standard", elite: "Priority" },
  { label: "AI Refinement", pro: "Standard", elite: "Advanced" },
];

export default function ElitePage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="h-[700px] w-[700px] rounded-full opacity-[0.07]"
            style={{ background: "radial-gradient(circle, #00C9B1 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ borderColor: "rgba(0,201,177,0.3)", background: "rgba(0,201,177,0.08)", color: "#00C9B1" }}
          >
            ⚡ PEN2PRO Elite Plan
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight text-white md:text-6xl">
            Advanced Strategy.<br />
            <span style={{ background: "linear-gradient(90deg, #00C9B1, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Serious Execution.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Elite is for entrepreneurs ready to go beyond the plan — into financial projections,
            funding readiness, done-with-you strategy, and a fully built business foundation.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=elite"
              className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #00C9B1, #1E88E5)" }}
            >
              Join Elite Waitlist →
            </Link>
            <Link
              to="/pricing"
              className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-teal-400 hover:text-teal-400"
            >
              View All Plans
            </Link>
          </div>
          <div className="mt-8 flex items-baseline justify-center gap-2">
            <span className="font-display text-4xl font-black text-white">$499</span>
            <span className="text-slate-500 text-lg">/month</span>
          </div>
          <p className="mt-2 text-sm text-slate-600">Everything in Pro + advanced strategy tools · Cancel anytime</p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-400">Elite Capabilities</p>
            <h2 className="font-display text-4xl font-black text-white">Everything Pro has — and then some</h2>
            <p className="mt-3 text-slate-500">Elite adds financial intelligence, funding access, legal foundation tools, and done-with-you guidance.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ELITE_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border p-6 transition-all"
                style={{ borderColor: "rgba(0,201,177,0.2)", background: "#080C14" }}
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 text-base font-bold text-white">{f.title}</h3>
                <p className="text-sm leading-6 text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-400">Pro vs Elite</p>
            <h2 className="font-display text-4xl font-black text-white">What Elite adds to your arsenal</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#1A2235]">
            <div className="grid grid-cols-3 border-b border-[#1A2235] bg-[#0F1520] px-6 py-3">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Feature</span>
              <span className="text-center text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Pro</span>
              <span className="text-center text-xs font-bold uppercase tracking-widest text-teal-400">Elite</span>
            </div>
            {ELITE_VS_PRO.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 items-center px-6 py-4 text-sm ${i % 2 === 0 ? "bg-[#080C14]" : "bg-[#0F1520]"}`}
              >
                <span className="font-semibold text-slate-300">{row.label}</span>
                <span className="text-center text-slate-500">{row.pro}</span>
                <span className="text-center font-bold text-teal-400">{row.elite}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELITE STORY */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border p-8 md:p-12" style={{ borderColor: "rgba(0,201,177,0.25)" }}>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-teal-400">Why Elite Exists</p>
            <h2 className="mb-6 font-display text-3xl font-black text-white">
              Most people don't fail because they lack motivation.<br />
              They fail because they lack infrastructure.
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                A roadmap without financial clarity is just a wish. Elite adds the financial projections,
                funding readiness, and vendor relationships that turn your plan into something you can take
                to a lender, investor, or partner.
              </p>
              <p>
                Elite was built for the person who is serious enough to ask the harder questions —
                how much will this cost to scale? What does a lender need to see? How do I protect my brand?
                What legal steps am I missing?
              </p>
              <p className="font-semibold text-white">
                Elite answers those questions and builds the infrastructure around your answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-400">Ready for the advanced tier?</p>
          <h2 className="font-display text-4xl font-black text-white md:text-5xl">
            Build the whole thing.<br />
            <span style={{ background: "linear-gradient(90deg, #00C9B1, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Elite makes it possible.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-500">
            Join the Elite waitlist. Lock in your founding rate before June 15 launch.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=elite"
              className="rounded-2xl px-10 py-4 text-base font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #00C9B1, #1E88E5)" }}
            >
              Join Elite Waitlist →
            </Link>
            <Link
              to="/founders"
              className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-yellow-500 hover:text-yellow-400"
            >
              Explore Founders Lifetime
            </Link>
          </div>
          <div className="mt-8 flex justify-center gap-8 text-sm text-slate-600">
            <span>$499/month</span>
            <span>·</span>
            <span>Everything in Pro</span>
            <span>·</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
