import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PRO_FEATURES = [
  { icon: "🗺️", title: "Full RMIE Roadmap", desc: "Complete 7/30/90-day execution plan tailored to your idea, budget, and market. Not generic — built for you." },
  { icon: "📊", title: "Full Progress Tracking", desc: "Visual checklist system — track every milestone from LLC formation to first client closed." },
  { icon: "🎨", title: "Business Branding Support", desc: "Brand name ideas, market positioning, tagline guidance, and visual identity direction." },
  { icon: "📄", title: "PDF & Email Export", desc: "Download your full roadmap as a PDF or send it to your email for offline access and sharing." },
  { icon: "🤖", title: "AI Roadmap Refinement", desc: "Refine your strategy with AI — get more specific answers and tighter execution steps on demand." },
  { icon: "📣", title: "Outreach Strategy", desc: "Cold outreach scripts, pricing structures, and client acquisition playbooks for your niche." },
  { icon: "💳", title: "Credit & Funding Readiness", desc: "Know exactly where you stand and what to fix before applying for any business funding." },
  { icon: "🏢", title: "Entity Setup Checklist", desc: "LLC, EIN, business bank account — every step explained and sequenced in the right order." },
];

const COMPARE = [
  { feature: "AI Business Roadmap", free: "Basic preview", pro: "Full output" },
  { feature: "Execution timeline", free: "7-day only", pro: "7 / 30 / 90-day plan" },
  { feature: "Sales scripts", free: "—", pro: "✓ Included" },
  { feature: "Outreach strategy", free: "—", pro: "✓ Included" },
  { feature: "Credit readiness", free: "—", pro: "✓ Included" },
  { feature: "PDF export", free: "—", pro: "✓ Included" },
  { feature: "AI refinement", free: "—", pro: "✓ Included" },
  { feature: "Progress tracking", free: "Limited", pro: "Full tracking" },
  { feature: "Branding support", free: "—", pro: "✓ Included" },
];

export default function ProPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(212,160,23,0.12) 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#D4A017]">
            ⭐ PEN2PRO Pro Plan
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            The Full Roadmap.<br />
            <span
              style={{
                background: "linear-gradient(90deg, #D4A017, #FF8A00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              No Gatekeeping.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Pro gives you the complete RMIE execution engine — full roadmap, sales scripts, credit
            readiness, branding support, and AI refinement. Built for builders who are ready to move.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=pro"
              className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14] btn-gold"
            >
              Join Pro Waitlist — $249/mo →
            </Link>
            <Link
              to="/pricing"
              className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-400 hover:border-[#D4A017]/50 hover:text-white transition"
            >
              View All Plans
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">Launching June 15, 2026 · Lock in your spot now</p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="border-t border-[#1A2235] bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A017]">What Pro Includes</p>
            <h2 className="font-display text-4xl font-black text-white">Everything you need to build and launch</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRO_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#1A2235] bg-[#080C14] p-6 hover:border-[#D4A017]/30 transition-colors"
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 text-sm font-bold text-white">{f.title}</h3>
                <p className="text-xs leading-6 text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Free vs Pro</p>
            <h2 className="font-display text-3xl font-black text-white">See exactly what you unlock</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#1A2235]">
            <div className="grid grid-cols-3 bg-[#0F1520] px-5 py-3 text-xs font-bold uppercase tracking-widest text-slate-500">
              <span>Feature</span>
              <span className="text-center">Free</span>
              <span className="text-center text-[#D4A017]">Pro</span>
            </div>
            {COMPARE.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 px-5 py-4 text-sm ${i % 2 === 0 ? "bg-[#080C14]" : "bg-[#0A0E1A]"}`}
              >
                <span className="font-semibold text-slate-300">{row.feature}</span>
                <span className="text-center text-slate-500">{row.free}</span>
                <span className="text-center font-semibold text-[#D4A017]">{row.pro}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING CARD */}
      <section className="border-t border-[#1A2235] bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-md">
          <div className="rounded-2xl border border-[#D4A017]/40 bg-[#080C14] p-8 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A017]">Pro Plan</div>
            <div className="mb-1 font-display text-5xl font-black text-white">
              $249<span className="text-xl text-slate-500">/mo</span>
            </div>
            <p className="mb-6 text-slate-400 text-sm">Cancel anytime. Start immediately at launch.</p>
            <Link
              to="/waitlist?tier=pro"
              className="block rounded-2xl py-4 text-base font-black text-[#080C14] btn-gold"
            >
              Join Pro Waitlist →
            </Link>
            <p className="mt-3 text-xs text-slate-600">Launching June 15, 2026</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 font-display text-4xl font-black">Need even more firepower?</h2>
          <p className="mb-10 text-slate-400">
            Elite adds financial projections, funding partner resources, done-with-you guidance, and priority
            support on top of everything in Pro.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/elite"
              className="rounded-2xl border border-[#00C9B1]/40 px-8 py-4 text-base font-semibold text-[#00C9B1] hover:border-[#00C9B1] transition"
            >
              Explore Elite — $499/mo
            </Link>
            <Link
              to="/founders"
              className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14] btn-gold"
            >
              Founders Lifetime — $1,899
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
