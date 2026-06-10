import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ELITE_FEATURES = [
  { icon: "🧠", title: "Advanced Strategist Guidance", desc: "Done-with-you style guidance from AI trained on real business strategy. Not generic advice — specific steps for your business model." },
  { icon: "📈", title: "Financial Projections", desc: "Month-by-month revenue projections, break-even analysis, cost modeling, and pricing validation for your specific offer." },
  { icon: "🏛️", title: "Legal Foundation Checklist", desc: "LLC formation guide, EIN registration, operating agreements, business licensing, and compliance essentials broken down simply." },
  { icon: "🤝", title: "Vendor & Resource Center", desc: "Curated directory of trusted vendors, funding sources, credit-building tradelines, and business service providers." },
  { icon: "💰", title: "Funding Readiness Roadmap", desc: "Full funding prep: credit scores, business history, documentation, lender requirements, and microloan readiness." },
  { icon: "™️", title: "Trademark & Brand Protection", desc: "Trademark process guidance, brand naming strategy, domain acquisition, and intellectual property foundations." },
  { icon: "📲", title: "Marketing & Social Strategy", desc: "Platform-specific marketing playbooks, content calendars, audience targeting, and ad-ready messaging frameworks." },
  { icon: "⚡", title: "Priority Support Access", desc: "Get to the front of the line. Priority response and access to expanded RMIE features before general release." },
];

const ELITE_COMPARE = [
  { feature: "Everything in Pro",                    elite: true },
  { feature: "Advanced AI strategist guidance",      elite: true },
  { feature: "Financial projections & break-even",   elite: true },
  { feature: "Legal foundation checklist",           elite: true },
  { feature: "Vendor & funding resource center",     elite: true },
  { feature: "Trademark & brand protection guide",   elite: true },
  { feature: "Marketing & social media playbook",    elite: true },
  { feature: "Done-with-you execution style",        elite: true },
  { feature: "Priority support",                     elite: true },
  { feature: "Early access to new features",         elite: true },
];

export default function ElitePage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 text-center px-5">
        <div className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,160,23,0.12) 0%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/40 bg-[#D4A017]/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: "#D4A017" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Elite Plan</span>
          </div>
          <h1 className="font-display text-5xl font-black leading-tight text-white md:text-6xl">
            Advanced Strategy.<br />
            <span style={{ color: "#D4A017" }}>Full Execution.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Elite is for builders who are serious about launch. Get financial projections, legal foundation steps, vendor resources, marketing playbooks, and done-with-you guidance — not just a roadmap.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite"
              className="rounded-xl px-8 py-4 text-base font-black text-[#080C14] transition-all"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)" }}>
              Join Elite Waitlist
            </Link>
            <Link to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 hover:border-[#D4A017] hover:text-white transition-all">
              View All Plans
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">Official launch June 15, 2026 — Elite spots are limited.</p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="mb-4 text-center font-display text-3xl font-black text-white">What Elite Unlocks</h2>
        <p className="mb-12 text-center text-slate-400">Every tool, strategy, and resource to build, launch, and grow — with elite-level depth.</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ELITE_FEATURES.map((f) => (
            <div key={f.title}
              className="rounded-2xl border p-6 transition-all hover:border-[#D4A017]/50"
              style={{ background: "#0F1520", borderColor: "#1A2D50" }}>
              <div className="mb-3 text-3xl">{f.icon}</div>
              <h3 className="mb-2 font-bold text-white">{f.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Elite Includes Section */}
      <section className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="mb-10 text-center font-display text-3xl font-black text-white">Everything Elite Includes</h2>
        <div className="rounded-2xl border border-[#D4A017]/30 overflow-hidden" style={{ background: "#0F1520" }}>
          {ELITE_COMPARE.map((row, i) => (
            <div key={i}
              className={`flex items-center gap-4 px-6 py-4 ${i % 2 === 1 ? "bg-[#080C14]/40" : ""} ${i < ELITE_COMPARE.length - 1 ? "border-b border-[#1A2D50]" : ""}`}>
              <span className="text-lg text-green-400">✓</span>
              <span className="text-slate-300">{row.feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tier Comparison CTA */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-5 sm:grid-cols-3">
          <Link to="/pro"
            className="rounded-2xl border border-[#1E88E5]/30 p-6 text-center transition-all hover:border-[#1E88E5] hover:-translate-y-1"
            style={{ background: "#0F1520" }}>
            <p className="text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Pro</p>
            <p className="mt-2 font-display text-2xl font-black text-white">Full Roadmap</p>
            <p className="mt-2 text-sm text-slate-400">Build with confidence. Track every step.</p>
            <p className="mt-4 text-sm font-semibold text-[#1E88E5]">Learn More →</p>
          </Link>

          <div className="rounded-2xl border p-6 text-center"
            style={{ background: "linear-gradient(135deg, #0D1528, #0F1520)", borderColor: "rgba(212,160,23,0.5)" }}>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Elite</p>
            <p className="mt-2 font-display text-2xl font-black text-white">Advanced Execution</p>
            <p className="mt-2 text-sm text-slate-400">Everything you need to actually launch.</p>
            <Link to="/waitlist?tier=elite"
              className="mt-4 inline-block rounded-lg px-5 py-2 text-sm font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #D4A017, #FF8A00)" }}>
              Secure My Spot
            </Link>
          </div>

          <Link to="/founders"
            className="rounded-2xl border border-[#FF8A00]/30 p-6 text-center transition-all hover:border-[#FF8A00] hover:-translate-y-1"
            style={{ background: "#0F1520" }}>
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legacy Founder</p>
            <p className="mt-2 font-display text-2xl font-black text-white">Lifetime Access</p>
            <p className="mt-2 text-sm text-slate-400">Early adopter status. Locked-in for life.</p>
            <p className="mt-4 text-sm font-semibold text-[#FF8A00]">Learn More →</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-5 py-20 text-center">
        <div className="rounded-3xl border p-10"
          style={{ background: "linear-gradient(135deg, #0D1528 0%, #0F1520 100%)", borderColor: "rgba(212,160,23,0.3)" }}>
          <h2 className="font-display text-3xl font-black text-white">Your Business Deserves More Than a Wish List</h2>
          <p className="mt-4 text-slate-400">Elite gives you the financial clarity, legal foundation, marketing direction, and execution support to build something real. Join the waitlist and lock in your founding rate.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite"
              className="rounded-xl px-8 py-4 text-base font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)" }}>
              Secure Elite Access
            </Link>
            <Link to="/founders"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 hover:border-[#FF8A00] hover:text-white transition-all">
              See Legacy Founder →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
