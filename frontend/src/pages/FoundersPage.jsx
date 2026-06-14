import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function useCountdown(target) {
  const [t, setT] = useState({});
  useEffect(() => {
    const calc = () => {
      const diff = new Date(target) - new Date();
      if (diff <= 0) return setT({ d: 0, h: 0, m: 0, s: 0 });
      setT({ d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
}

const FOUNDER_FEATURES = [
  { icon: "♾️", title: "Lifetime PEN2PRO Access", body: "One payment. Lifetime access to the full platform — including every future feature, upgrade, and module released." },
  { icon: "🧠", title: "Everything in Elite — Forever", body: "Advanced RMIE engine, financial projections, funding resources, AI voice, priority support, and done-with-you strategy." },
  { icon: "📊", title: "12-Month 10M Strategist Framework", body: "A structured 12-month roadmap built on real revenue-scaling strategy — not theory. Monthly milestones, KPIs, and execution targets." },
  { icon: "⚡", title: "P2P Command Center — Full Access", body: "Complete CRM, pipeline management, automated follow-ups, appointment booking, invoices, and business operations hub." },
  { icon: "🤖", title: "P2P AI Voice Agent — Advanced", body: "Full AI phone agent with missed-call text-back, appointment scheduling, lead qualification, CRM sync, and custom voice scripts." },
  { icon: "🌐", title: "Website Builder — Unlimited", body: "Unlimited professional websites, landing pages, funnels, and domains with built-in SEO optimization." },
  { icon: "🏅", title: "Founder Recognition Badge", body: "Your Founder status is permanently attached to your account — visible to the PEN2PRO community and your network." },
  { icon: "🗺️", title: "Priority Roadmap Influence", body: "Founders help shape the product. Your feedback, feature requests, and priorities go to the front of the development queue." },
  { icon: "📈", title: "Branding & Launch Execution Tools", body: "Brand kit, social calendar, content strategy, launch checklist, and outreach campaign builder — all included." },
  { icon: "💳", title: "Funding & Credit Readiness Suite", body: "Business credit building, personal credit strategy, funding applications readiness, and vendor/tradeline resource center." },
];

const URGENCY_POINTS = [
  "Only 200 Founders spots available — ever.",
  "This pricing will never be offered again after launch.",
  "Founders lock in lifetime access before public pricing goes live.",
  "Every Founders spot claimed is one less available permanently.",
];

export default function FoundersPage() {
  const cd = useCountdown("2026-06-15T09:00:00");

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/40 bg-[#0F1520] px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-xs font-bold text-[#D4A017] uppercase tracking-widest">200 Spots Only — Filling Fast</span>
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            Founders Lifetime.
            <br />
            <span className="gradient-text">One Payment. Forever.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Become a PEN2PRO Legacy Founder — lock in lifetime access to the entire platform before we go public. This offer closes permanently once 200 spots are claimed.
          </p>

          {/* Countdown */}
          <div className="mt-8 mb-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">Launch closes this offer — countdown to June 15, 2026</p>
            <div className="flex items-center justify-center gap-3">
              {[["d", "Days"], ["h", "Hrs"], ["m", "Min"], ["s", "Sec"]].map(([key, label]) => (
                <div key={key} className="countdown-box flex flex-col items-center rounded-xl px-5 py-3 min-w-[70px]">
                  <span className="font-display text-3xl font-black tabular-nums" style={{ color: "#D4A017" }}>
                    {String(cd[key] ?? 0).padStart(2, "0")}
                  </span>
                  <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders" className="btn-gold rounded-xl px-8 py-3.5 text-base font-black text-[#080C14]">
              Claim My Founders Spot — $1,899
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">One-time payment. Lifetime access. No subscription ever.</p>
        </div>
      </section>

      {/* URGENCY BAR */}
      <section className="border-y border-[#D4A017]/20 bg-[#0D1020] px-5 py-6">
        <div className="mx-auto max-w-5xl grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {URGENCY_POINTS.map((pt) => (
            <div key={pt} className="flex items-start gap-2.5">
              <span className="mt-0.5 text-[#D4A017] font-black">⚠</span>
              <p className="text-sm text-slate-300">{pt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A017]">What Founders Get</p>
            <h2 className="font-display text-4xl font-black">Everything. Forever.</h2>
            <p className="mt-3 text-slate-500">The complete PEN2PRO platform — every current and future feature — for a single one-time investment.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {FOUNDER_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#D4A017]/20 bg-[#080C14] p-6 hover:border-[#D4A017]/50 transition-colors">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER STORY TIE-IN */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-[#D4A017]/30 bg-[#0D1020] p-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>⚡</div>
              <div>
                <p className="font-black text-white">Robert Earl Green Jr.</p>
                <p className="text-sm text-slate-400">Founder — PEN2PRO</p>
              </div>
            </div>
            <blockquote className="border-l-4 border-[#D4A017] pl-5 text-lg leading-relaxed text-slate-300">
              "PEN2PRO was built because I needed it and it didn't exist. The Founders Lifetime offer exists because I want the people who believe in this mission before the world does to be protected — forever. If you join as a Founder, you're not just getting a tool. You're getting a partner in what we're building."
            </blockquote>
            <p className="mt-4 text-sm font-semibold text-[#D4A017]">— Robert Green, Founder of PEN2PRO</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-xl text-center">
          <div className="rounded-3xl border border-[#D4A017]/40 bg-[#0D1020] p-10"
            style={{ boxShadow: "0 0 60px rgba(212,160,23,0.15)" }}>
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-3">Founders Lifetime</p>
            <div className="flex items-baseline justify-center gap-1 mb-1">
              <span className="font-display text-5xl font-black text-white">$1,899</span>
              <span className="text-slate-400 text-lg"> for life</span>
            </div>
            <p className="text-sm text-[#D4A017] font-semibold mb-6">Only 200 spots. No exceptions.</p>
            <Link to="/waitlist?tier=founders" className="btn-gold block w-full rounded-xl py-4 text-sm font-black text-[#080C14] mb-4">
              Claim My Founders Spot
            </Link>
            <Link to="/waitlist" className="block w-full rounded-xl border border-[#1A2D50] py-3 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
              Join Free Waitlist First
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-600">
            Compare options: <Link to="/pro" className="text-[#5ab0ff]">Pro</Link> · <Link to="/elite" className="text-[#00C9B1]">Elite</Link> · <Link to="/pricing" className="text-[#D4A017]">All Plans</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
