import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BENEFITS = [
  { icon: "♾️", title: "Lifetime Platform Access", desc: "Pay once. Access PEN2PRO forever. Every update, every new module, every feature — yours for life." },
  { icon: "🚀", title: "Everything in Elite", desc: "Full roadmap engine, financial projections, strategist guidance, vendor center, funding readiness, and priority support." },
  { icon: "⚡", title: "P2P Command Center", desc: "The full business operating system — CRM, pipeline, estimates, invoices, reputation management, and automations." },
  { icon: "🎙️", title: "P2P AI Voice Agent", desc: "AI-powered voice calling agent to handle outreach, follow-ups, appointment setting, and lead qualification." },
  { icon: "🌐", title: "Website Builder", desc: "Build and launch a professional business website — templates, editor, domain connection, and hosting." },
  { icon: "🏆", title: "Founder Recognition", desc: "Permanent Founder badge on your account, Founder-only community access, and early access to every new release." },
  { icon: "📈", title: "12-Month Strategist Framework", desc: "A structured 10M growth framework — the full roadmap used to scale from startup to sustainable revenue." },
  { icon: "🎯", title: "Early Adopter Pricing — Forever", desc: "200 spots only. Lock in founder pricing before the platform goes live and prices increase." },
];

const STATS = [
  { value: "200", label: "Total Founder Spots" },
  { value: "$1,899", label: "One-Time Investment" },
  { value: "Lifetime", label: "Access Duration" },
  { value: "Limited", label: "Availability" },
];

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-20 pb-24 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[700px] w-[700px] rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5" style={{ borderColor: "rgba(212,160,23,0.5)", background: "rgba(212,160,23,0.1)" }}>
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>200 Spots Only — Legacy Founders Lifetime</span>
          </div>
          <h1 className="font-display text-5xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Own It Once.<br />
            <span style={{ color: "#D4A017" }}>Access It Forever.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            The Founders Lifetime plan is for people who believe in the mission early. You get full lifetime access to every PEN2PRO tier, feature, and future release — one payment, no monthly fees, ever.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders" className="btn-gold rounded-xl px-8 py-3.5 text-base font-black text-[#080C14]">
              Claim Your Founder Spot
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-base font-semibold text-slate-300 transition hover:border-[#D4A017] hover:text-white">
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-[#1A2235] p-6 text-center" style={{ background: "#0F1520" }}>
              <div className="text-2xl font-black" style={{ color: "#D4A017" }}>{s.value}</div>
              <div className="mt-1 text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-6xl px-5 py-10 pb-20">
        <h2 className="mb-3 text-center text-3xl font-black text-white">What Founders Get</h2>
        <p className="mb-12 text-center text-slate-400">The most complete version of PEN2PRO — everything we're building, yours permanently.</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-2xl border p-6 transition hover:border-[#D4A017]/40" style={{ background: "#0F1520", borderColor: "#1A2235" }}>
              <div className="mb-4 text-3xl">{b.icon}</div>
              <h3 className="mb-2 font-bold text-white">{b.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER STORY CALLOUT */}
      <section className="mx-auto max-w-3xl px-5 pb-20">
        <div className="rounded-2xl border px-8 py-10" style={{ borderColor: "rgba(212,160,23,0.2)", background: "rgba(212,160,23,0.04)" }}>
          <p className="text-lg leading-8 text-slate-300 italic">
            "PEN2PRO was built for people who know they're capable of more but need direction, structure, strategy, and tools to unlock what's already inside them. The Founders plan is for the early believers — the people who saw the vision before the world did."
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl font-black text-[#080C14]" style={{ background: "#D4A017" }}>RG</div>
            <div>
              <div className="font-bold text-white">Robert Green</div>
              <div className="text-sm text-slate-500">Founder, PEN2PRO</div>
            </div>
          </div>
        </div>
      </section>

      {/* URGENCY */}
      <section className="mx-auto max-w-2xl px-5 pb-28 text-center">
        <div className="rounded-2xl border px-8 py-12" style={{ borderColor: "rgba(212,160,23,0.4)", background: "rgba(212,160,23,0.06)" }}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-widest" style={{ borderColor: "rgba(212,160,23,0.4)", color: "#D4A017" }}>
            Limited Availability
          </div>
          <h2 className="mb-4 text-3xl font-black text-white">200 Spots. One Price. No Monthly Fees.</h2>
          <p className="mb-8 text-slate-400">
            When the 200 Founder spots are gone, they're gone. The platform price increases at launch. This is the only way to lock in lifetime access at this investment level.
          </p>
          <div className="mb-6">
            <span className="text-4xl font-black text-white">$1,899</span>
            <span className="ml-2 text-slate-400">one-time · lifetime access</span>
          </div>
          <Link to="/waitlist?tier=founders" className="btn-gold inline-block rounded-xl px-10 py-4 text-base font-black text-[#080C14]">
            Claim My Founder Spot →
          </Link>
          <p className="mt-4 text-xs text-slate-600">No payment required to join the waitlist. Lock in your spot — pay when ready.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
