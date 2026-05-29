import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  { icon: "🗺️", title: "Unlimited AI Roadmaps", desc: "Generate as many business roadmaps as you need — different ideas, refined strategies, updated plans." },
  { icon: "📅", title: "Full 90-Day Execution Plan", desc: "7-day launch, 30-day traction, 90-day growth — detailed and specific to your business model and market." },
  { icon: "📣", title: "Sales Scripts & Outreach", desc: "Real DM scripts, cold outreach sequences, follow-up cadences, and pricing conversation frameworks." },
  { icon: "💳", title: "Credit Readiness Checklist", desc: "Know exactly where your personal and business credit stands before you apply for anything." },
  { icon: "📄", title: "PDF & Email Export", desc: "Export your full roadmap to PDF or email it to partners, lenders, or advisors." },
  { icon: "🤖", title: "AI Business Refinement", desc: "Refine your offer, pricing, or strategy with follow-up AI prompts that go deeper than your first output." },
  { icon: "🏢", title: "Branding Direction", desc: "Business name ideas, brand voice guidance, visual identity direction, and domain suggestions." },
  { icon: "📊", title: "Full Progress Tracking", desc: "Track your roadmap milestones, completed tasks, and active priorities in one dashboard." },
];

const COMPARE = [
  { feature: "AI Business Roadmap", free: true, pro: true },
  { feature: "Unlimited roadmaps", free: false, pro: true },
  { feature: "90-day execution plan", free: false, pro: true },
  { feature: "Sales scripts & outreach", free: false, pro: true },
  { feature: "Credit readiness checklist", free: false, pro: true },
  { feature: "PDF/email export", free: false, pro: true },
  { feature: "AI refinement", free: false, pro: true },
  { feature: "Branding direction", free: false, pro: true },
  { feature: "Full progress tracking", free: false, pro: true },
  { feature: "Priority support", free: false, pro: true },
];

export default function ProPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-20 pb-24 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[600px] w-[600px] rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5" style={{ borderColor: "rgba(212,160,23,0.3)", background: "rgba(212,160,23,0.08)" }}>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Pro Plan — Most Popular</span>
          </div>
          <h1 className="font-display text-5xl font-black leading-tight tracking-tight text-white md:text-6xl">
            A Full Strategy,<br />
            <span style={{ color: "#D4A017" }}>Not Just a Roadmap.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Pro unlocks the complete PEN2PRO RMIE toolkit — unlimited roadmaps, execution plans, sales scripts, credit readiness, branding direction, and AI refinement built around your specific business idea.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="btn-gold rounded-xl px-8 py-3.5 text-base font-black text-[#080C14]">
              Join the Pro Waitlist
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-base font-semibold text-slate-300 transition hover:border-[#D4A017] hover:text-white">
              View All Plans
            </Link>
          </div>
          <div className="mt-8 text-center">
            <span className="text-3xl font-black text-white">$249</span>
            <span className="text-slate-400">/month</span>
            <p className="mt-1 text-sm text-slate-500">Cancel anytime. No contracts.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="mb-3 text-center text-3xl font-black text-white">Everything in Pro</h2>
        <p className="mb-12 text-center text-slate-400">Every tool you need to go from idea to income — built for builders who are serious about execution.</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border border-[#1A2235] p-6 transition hover:border-[#D4A017]/40" style={{ background: "#0F1520" }}>
              <div className="mb-4 text-3xl">{f.icon}</div>
              <h3 className="mb-2 font-bold text-white">{f.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARE */}
      <section className="mx-auto max-w-2xl px-5 pb-20">
        <h2 className="mb-8 text-center text-2xl font-black text-white">Free vs. Pro</h2>
        <div className="overflow-hidden rounded-2xl border border-[#1A2235]" style={{ background: "#0F1520" }}>
          <div className="grid grid-cols-3 border-b border-[#1A2235] px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-500">
            <span>Feature</span>
            <span className="text-center">Free</span>
            <span className="text-center" style={{ color: "#D4A017" }}>Pro</span>
          </div>
          {COMPARE.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 px-6 py-3.5 text-sm ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
              <span className="text-slate-300">{row.feature}</span>
              <span className="text-center">{row.free ? <span className="text-emerald-400">✓</span> : <span className="text-slate-600">—</span>}</span>
              <span className="text-center">{row.pro ? <span className="text-emerald-400">✓</span> : <span className="text-slate-600">—</span>}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-5 pb-28 text-center">
        <div className="rounded-2xl border px-8 py-12" style={{ borderColor: "rgba(212,160,23,0.3)", background: "rgba(212,160,23,0.05)" }}>
          <h2 className="mb-4 text-3xl font-black text-white">Ready to Go Pro?</h2>
          <p className="mb-8 text-slate-400">Join the Pro waitlist now and get early access when we launch. No payment required until you're ready.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="btn-gold rounded-xl px-8 py-3.5 font-black text-[#080C14]">
              Join Pro Waitlist
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#00C9B1]/40 px-8 py-3.5 font-semibold text-teal-400 transition hover:border-[#00C9B1]">
              Explore Elite →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
