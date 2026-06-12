import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  { icon: "🗺️", title: "Unlimited Business Roadmaps", desc: "Generate as many RMIE roadmaps as you need. Test different ideas, industries, and markets without limits." },
  { icon: "📅", title: "Full 90-Day Execution Plan", desc: "Day-by-day, week-by-week action plans from launch through first $5K month — built around your specific idea." },
  { icon: "📣", title: "Sales Scripts & Outreach Strategy", desc: "Cold DM scripts, phone openers, follow-up sequences, and objection responses — ready to copy and send." },
  { icon: "💳", title: "Credit Readiness Checklist", desc: "Know your fundability score, dispute roadmap, and exactly what lenders need before you apply." },
  { icon: "📤", title: "PDF & Email Export", desc: "Download your full roadmap as a PDF. Share with partners, investors, lenders, or mentors instantly." },
  { icon: "🤖", title: "AI Business Refinement", desc: "Refine your roadmap as your business evolves. Update pricing, target market, or offer and get a new plan." },
  { icon: "📊", title: "Progress Tracking Dashboard", desc: "Track milestones, mark completed steps, and see how far you've come from idea to income." },
  { icon: "🏷️", title: "Business Branding Support", desc: "Business name ideas, brand voice direction, color psychology, and brand positioning strategy." },
];

const COMPARE = [
  { feature: "Business Roadmap", free: "1 basic roadmap", pro: "Unlimited" },
  { feature: "90-Day Execution Plan", free: "Preview only", pro: "Full access" },
  { feature: "Sales Scripts", free: "Sample only", pro: "Full library" },
  { feature: "Credit Readiness", free: "Not included", pro: "Full checklist" },
  { feature: "PDF Export", free: "Not included", pro: "Included" },
  { feature: "Progress Tracking", free: "Limited", pro: "Full dashboard" },
  { feature: "AI Refinement", free: "Not included", pro: "Included" },
  { feature: "Branding Support", free: "Not included", pro: "Included" },
];

export default function ProPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #2d9cff 0%, transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5">
            <span className="text-xs font-black uppercase tracking-widest text-[#2d9cff]">PEN2PRO Pro</span>
          </div>
          <h1 className="font-display text-5xl font-black leading-tight text-white md:text-7xl">
            Full Roadmap.<br />
            <span style={{ background: "linear-gradient(90deg, #2d9cff, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Real Execution.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Pro gives you unlimited roadmaps, full 90-day execution plans, sales scripts, credit readiness tools, PDF exports, and AI business refinement — everything you need to move from idea to income.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/pricing" className="rounded-2xl px-8 py-4 text-base font-black text-[#081226]"
              style={{ background: "#2d9cff", boxShadow: "0 0 35px rgba(45,156,255,0.4)" }}>
              Upgrade to Pro — $249/mo
            </Link>
            <Link to="/waitlist" className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 hover:border-blue-500 hover:text-blue-400 transition">
              Join Waitlist for June 15
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">Cancel anytime · No contracts · Upgrade or downgrade freely</p>
        </div>
      </section>

      {/* PRICING CALLOUT */}
      <section className="border-y border-[#1A2235] bg-[#0F1520] px-5 py-10">
        <div className="mx-auto max-w-4xl flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">PEN2PRO Pro</p>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-5xl font-black text-white">$249</span>
              <span className="text-slate-400">/month</span>
            </div>
            <p className="mt-2 text-sm text-slate-500">Full execution engine. Cancel anytime.</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-400 mb-3">Launching June 15, 2026</p>
            <Link to="/waitlist?tier=pro"
              className="inline-block rounded-2xl px-8 py-3.5 text-sm font-black text-[#081226]"
              style={{ background: "#2d9cff" }}>
              Join Waitlist — Lock In Pro Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#2d9cff]">What You Get</p>
            <h2 className="font-display text-4xl font-black text-white">Everything in Pro</h2>
            <p className="mt-3 text-slate-500">Built for builders who are ready to stop guessing and start executing.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6 hover:border-blue-500/30 transition-all">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 text-sm font-bold text-white">{f.title}</h3>
                <p className="text-xs leading-6 text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-[#0F1520] px-5 py-20 border-t border-[#1A2235]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#2d9cff]">Free vs Pro</p>
            <h2 className="font-display text-3xl font-black text-white">See the difference</h2>
          </div>
          <div className="rounded-2xl border border-[#1A2235] overflow-hidden">
            <div className="grid grid-cols-3 border-b border-[#1A2235] bg-[#080C14] px-6 py-4">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Feature</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 text-center">Free</p>
              <p className="text-xs font-bold uppercase tracking-widest text-[#2d9cff] text-center">Pro</p>
            </div>
            {COMPARE.map((row, i) => (
              <div key={row.feature}
                className={`grid grid-cols-3 px-6 py-4 ${i % 2 === 0 ? "bg-[#0F1520]" : "bg-[#0A0F1E]"}`}>
                <p className="text-sm text-slate-300">{row.feature}</p>
                <p className="text-xs text-slate-500 text-center">{row.free}</p>
                <p className="text-xs font-semibold text-[#2d9cff] text-center">{row.pro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-black text-white">Pro is for you if...</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "You've started a free roadmap and know you need more depth",
              "You want a complete 90-day plan with actual daily action steps",
              "You need sales scripts you can copy and send immediately",
              "You want to know exactly where you stand on credit and funding",
              "You're serious about launching within 30–90 days",
              "You want to track your progress and stay accountable",
            ].map((text) => (
              <div key={text} className="flex items-start gap-3 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4">
                <span className="mt-0.5 text-[#2d9cff] font-black shrink-0">✓</span>
                <p className="text-sm text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-24 text-center border-t border-[#1A2235]">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-4xl font-black text-white mb-4">
            Ready to go Pro?
          </h2>
          <p className="text-slate-400 mb-8">
            Join the waitlist now and lock in your Pro pricing before June 15. Founding members get the best rate available — locked for life.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro"
              className="rounded-2xl px-10 py-4 text-base font-black text-[#081226]"
              style={{ background: "#2d9cff", boxShadow: "0 0 35px rgba(45,156,255,0.4)" }}>
              Join Waitlist — Pro Plan
            </Link>
            <Link to="/pricing" className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-400 hover:border-blue-500 hover:text-blue-400 transition">
              Compare All Plans
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-600">
            Prefer Elite or Founders Lifetime?{" "}
            <Link to="/elite" className="text-slate-500 hover:text-blue-400 transition">View Elite →</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
