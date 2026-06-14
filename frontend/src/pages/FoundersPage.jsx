import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FOUNDERS_FEATURES = [
  { icon: "♾️", title: "Lifetime Platform Access", body: "Pay once. Use forever. Every current and future PEN2PRO feature included — no monthly bills." },
  { icon: "💎", title: "Everything in Elite", body: "Full RMIE engine, financial projections, funding readiness, done-with-you guidance, priority support." },
  { icon: "⚡", title: "P2P Command Center", body: "Full business operating system — CRM, pipeline, calendar, invoices, automations, and more." },
  { icon: "🎙️", title: "P2P AI Voice Agent", body: "Automated AI voice agent for appointments, follow-ups, and inbound call handling." },
  { icon: "🌐", title: "Website Builder", body: "Build and launch your business website directly inside PEN2PRO — no third-party tools needed." },
  { icon: "🏅", title: "Founder Recognition Badge", body: "Your profile is permanently marked as a Founding Member — recognized inside the platform." },
  { icon: "🚀", title: "Early Access to All New Features", body: "Founders get first access to every new tool, module, and feature before public release." },
  { icon: "📋", title: "12-Month 10M Strategist Framework", body: "A structured 12-month growth framework built for founders who want to scale to seven figures." },
];

const REASONS = [
  { num: "200", label: "Total Spots Available", desc: "Once 200 Founders claim a spot, this offer closes permanently." },
  { num: "$1,899", label: "One-Time Investment", desc: "No monthly fees — ever. Lock in access before launch pricing ends." },
  { num: "June 15", label: "Official Platform Launch", desc: "Founders get full access on launch day. No waiting." },
];

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[800px] w-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.14) 0%, transparent 65%)", filter: "blur(70px)" }} />
        <div className="absolute bottom-0 -left-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.10) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/40 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
            🏆 Legacy Founders — Lifetime Access
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Own It Once.<br />
            <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Build It Forever.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-8">
            The Legacy Founders offer is the only way to own PEN2PRO for life. One payment. No subscriptions. Every current and future feature. Founder recognition. 200 spots total.
          </p>

          {/* Scarcity */}
          <div className="mx-auto mb-10 max-w-md rounded-2xl border border-[#D4A017]/30 bg-[#0F1520] p-6">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>⚠ Limited Availability</div>
            <p className="text-2xl font-black text-white mb-1">200 Founders Spots Total</p>
            <p className="text-sm text-slate-400">Once claimed, this offer is gone permanently. No exceptions.</p>
          </div>

          <div className="mb-2 flex items-baseline justify-center gap-1">
            <span className="text-4xl font-black text-white">$1,899</span>
            <span className="text-lg text-slate-400"> one-time</span>
          </div>
          <p className="mb-10 text-sm text-slate-500">Lifetime access · No recurring fees · All future features included</p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14] btn-gold">
              Claim My Founders Spot →
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* WHY FOUNDERS */}
      <section className="px-5 py-16 border-t border-b border-[#1A2D50] bg-[#0A0F1E]">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {REASONS.map((r) => (
              <div key={r.num} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-center">
                <p className="text-3xl font-black mb-1" style={{ color: "#D4A017" }}>{r.num}</p>
                <p className="text-sm font-bold text-white mb-2">{r.label}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>What Founders Get</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">Everything. Forever.</h2>
          <p className="mb-14 text-center text-slate-400 max-w-xl mx-auto">
            Founders get every feature on the platform — current and future — for a single one-time investment. No feature-gating. No upgrades. No monthly surprises.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {FOUNDERS_FEATURES.map((f) => (
              <div key={f.title} className="group rounded-2xl border border-[#D4A017]/20 bg-[#0F1520] p-6 hover:border-[#D4A017]/50 transition-colors">
                <div className="mb-3 text-2xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white text-sm leading-snug">{f.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER STORY CALLOUT */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[#D4A017]/30 bg-[#0F1520] p-10 text-center">
            <div className="mb-6 flex h-16 w-16 mx-auto items-center justify-center rounded-2xl text-3xl"
              style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>
              ⚡
            </div>
            <p className="text-lg leading-relaxed text-slate-300 mb-6">
              "PEN2PRO wasn't built from theory. It was built from pressure, rejection, discipline, and the refusal to stay stuck. The Legacy Founders who believe in this mission early enough to invest in it at the beginning — those are the people who deserve to own it for life."
            </p>
            <p className="font-black text-white">Robert Earl Green Jr.</p>
            <p className="text-sm text-slate-500 mt-1">Founder — PEN2PRO RMIE</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            200 Spots. One Price. Forever.
          </h2>
          <p className="mb-3 text-slate-400 max-w-lg mx-auto">
            If you've been waiting for the right time to build — this is it. The Founders offer won't be available after launch.
          </p>
          <p className="mb-10 text-xs text-slate-600">After 200 spots are claimed, the Founders tier closes permanently.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14] btn-gold">
              Claim My Founders Spot
            </Link>
            <Link to="/about" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Read the Story →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
