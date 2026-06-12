import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function useCountdown(target) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const calc = () => {
      const diff = new Date(target) - new Date();
      if (diff <= 0) return setT({ d: 0, h: 0, m: 0, s: 0 });
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
}

function CBox({ v, l }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-[#1A2235] bg-[#0F1520] px-5 py-4 min-w-[70px]">
      <span className="font-display text-3xl font-black tabular-nums leading-none" style={{ color: "#D4A017" }}>
        {String(v ?? 0).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">{l}</span>
    </div>
  );
}

const EVERYTHING_INCLUDED = [
  { icon: "♾️", label: "Lifetime PEN2PRO Access", desc: "Pay once. Own it forever. Every new feature included at no extra cost." },
  { icon: "🗺️", label: "Everything in Elite", desc: "All roadmaps, execution plans, projections, funding resources, and strategy support." },
  { icon: "🖥️", label: "P2P Command Center", desc: "CRM, lead pipeline, invoicing, reputation management, and business command hub." },
  { icon: "🎙️", label: "P2P AI Voice Agent", desc: "AI-powered outbound calling, lead follow-up, appointment setting, and scripted sales calls." },
  { icon: "🌐", label: "Website Builder", desc: "Build your business website without a developer. Templates, domains, and landing pages included." },
  { icon: "🔄", label: "CRM & Automation Tools", desc: "Contact management, follow-up sequences, pipeline tracking, and lead nurturing automation." },
  { icon: "💰", label: "Funding Readiness Tools", desc: "Full funding prep suite — lender readiness, credit building roadmap, and vendor credit system." },
  { icon: "📋", label: "12-Month 10M Strategist Framework", desc: "A 12-month structured playbook built around growing from first dollar to $10M — step by step." },
];

const FOUNDER_BENEFITS = [
  ["🔒", "Lifetime access — pay once, never again"],
  ["⚡", "First access to every new feature before public release"],
  ["💎", "Founder badge and recognition inside the platform"],
  ["🎯", "Done-with-you onboarding to launch faster"],
  ["📞", "Direct founder support line — not a ticket queue"],
  ["💡", "Input on new features and product direction"],
];

export default function FoundersPage() {
  const cd = useCountdown("2026-06-15T09:00:00");
  const SPOTS_CLAIMED = 136;
  const SPOTS_TOTAL = 200;
  const spotsLeft = SPOTS_TOTAL - SPOTS_CLAIMED;
  const pct = Math.round((SPOTS_CLAIMED / SPOTS_TOTAL) * 100);

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full opacity-[0.08]"
            style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2"
            style={{ borderColor: "rgba(212,160,23,0.4)", background: "rgba(212,160,23,0.08)" }}>
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-black uppercase tracking-widest" style={{ color: "#D4A017" }}>
              Limited — Only {spotsLeft} Founders Spots Remaining
            </span>
          </div>

          <h1 className="font-display text-5xl font-black leading-tight text-white md:text-7xl">
            Founders Lifetime.<br />
            <span style={{ background: "linear-gradient(90deg, #D4A017, #F0C040)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Own It Forever.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            One payment. Lifetime access to everything PEN2PRO will ever build — RMIE, Command Center, Voice Agent, Website Builder, CRM, Funding Tools, and the 12-month 10M strategist framework. Only 200 spots exist worldwide.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders"
              className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14]"
              style={{ background: "#D4A017", boxShadow: "0 0 40px rgba(212,160,23,0.4)" }}>
              Claim Your Founders Spot — $1,899
            </Link>
            <Link to="/pricing" className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 hover:border-yellow-500 hover:text-yellow-400 transition">
              Compare All Plans
            </Link>
          </div>

          <p className="mt-4 text-xs text-slate-600">
            One-time payment · Lifetime access · All future features included · 200 spots only
          </p>
        </div>
      </section>

      {/* COUNTDOWN + SPOTS */}
      <section className="border-y border-[#1A2235] bg-[#0F1520] px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Official Launch Countdown</p>
            <div className="flex items-center justify-center gap-3">
              <CBox v={cd.d} l="Days" />
              <span className="text-2xl font-black opacity-40" style={{ color: "#D4A017" }}>:</span>
              <CBox v={cd.h} l="Hrs" />
              <span className="text-2xl font-black opacity-40" style={{ color: "#D4A017" }}>:</span>
              <CBox v={cd.m} l="Min" />
              <span className="text-2xl font-black opacity-40" style={{ color: "#D4A017" }}>:</span>
              <CBox v={cd.s} l="Sec" />
            </div>
          </div>

          {/* Spots bar */}
          <div className="mx-auto max-w-lg rounded-2xl border border-[#1A2235] bg-[#080C14] p-5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Founders Spots</p>
              <p className="text-xs font-bold" style={{ color: "#D4A017" }}>{spotsLeft} of {SPOTS_TOTAL} remaining</p>
            </div>
            <div className="h-2.5 w-full rounded-full bg-[#1A2235] overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${pct}%`, background: "linear-gradient(90deg, #D4A017, #F0C040)" }}
              />
            </div>
            <p className="mt-2 text-xs text-slate-600">
              <strong className="text-white">{SPOTS_CLAIMED}</strong> founders have already claimed their lifetime spot
            </p>
          </div>
        </div>
      </section>

      {/* EVERYTHING INCLUDED */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>What's Included</p>
            <h2 className="font-display text-4xl font-black text-white">Everything. Forever.</h2>
            <p className="mt-3 text-slate-500">Founders get the full ecosystem — every tool, every update, every new feature — for one payment.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EVERYTHING_INCLUDED.map((item) => (
              <div key={item.label}
                className="rounded-2xl border bg-[#0F1520] p-6 hover:border-yellow-500/30 transition-all"
                style={{ borderColor: "rgba(212,160,23,0.2)" }}>
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h3 className="mb-2 text-sm font-bold text-white">{item.label}</h3>
                <p className="text-xs leading-6 text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER BENEFITS */}
      <section className="bg-[#0F1520] px-5 py-20 border-t border-[#1A2235]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Exclusive to Founders</p>
            <h2 className="font-display text-3xl font-black text-white">Benefits no other tier gets</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {FOUNDER_BENEFITS.map(([icon, text]) => (
              <div key={text} className="flex items-start gap-4 rounded-xl border border-[#1A2235] bg-[#080C14] p-5">
                <span className="text-2xl shrink-0">{icon}</span>
                <p className="text-sm font-semibold text-slate-200">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING BREAKDOWN */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border bg-[#0F1520] overflow-hidden" style={{ borderColor: "rgba(212,160,23,0.3)" }}>
            <div className="px-8 py-6 border-b border-[#1A2235]">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>The Math</p>
              <h3 className="mt-1 font-display text-2xl font-black text-white">Why Founders Lifetime makes sense</h3>
            </div>
            <div className="px-8 py-6 space-y-4">
              {[
                ["Pro Plan (monthly)", "$249/mo", "= $2,988/year"],
                ["Elite Plan (monthly)", "$499/mo", "= $5,988/year"],
                ["Founders Lifetime (once)", "$1,899", "= Every year, forever"],
              ].map(([label, price, note]) => (
                <div key={label} className="flex items-center justify-between py-3 border-b border-[#1A2235]">
                  <div>
                    <p className="text-sm font-semibold text-white">{label}</p>
                    <p className="text-xs text-slate-500">{note}</p>
                  </div>
                  <p className="text-sm font-black" style={{ color: "#D4A017" }}>{price}</p>
                </div>
              ))}
              <div className="pt-2">
                <p className="text-sm text-slate-400">
                  <strong className="text-white">Founders pay back their investment in under 8 months</strong> compared to Elite, and get every future feature included — no extra charges, ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ROBERT BUILT THIS */}
      <section className="bg-[#0F1520] px-5 py-16 border-t border-[#1A2235]">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[#1A2235] bg-[#080C14] p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>⚡</div>
              <div>
                <p className="font-black text-white">Robert Earl Green Jr.</p>
                <p className="text-xs text-slate-500">Founder — PEN2PRO | Service-Connected Veteran | Entrepreneur</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-7 mb-4">
              "I built PEN2PRO because I needed it and it didn't exist. After coming home from prison, I tried to rebuild the traditional way — interviews, job offers, background checks — and kept hitting walls. So I stopped waiting and started building."
            </p>
            <p className="text-slate-400 text-sm leading-7">
              "The Founders Lifetime offer is for people who believe in what we're building before the world catches on. You get everything — forever — and you get to say you were one of 200 people who built with us from the beginning."
            </p>
            <Link to="/about" className="mt-4 inline-block text-xs font-semibold hover:opacity-80 transition" style={{ color: "#D4A017" }}>
              Read Robert's Full Story →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2"
            style={{ borderColor: "rgba(212,160,23,0.3)", background: "rgba(212,160,23,0.06)" }}>
            <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
              Only {spotsLeft} Spots Left
            </span>
          </div>
          <h2 className="font-display text-4xl font-black text-white mb-4">
            Claim Your Founders Spot
          </h2>
          <p className="text-slate-400 mb-8">
            $1,899 one time. Lifetime access. Every feature. Every update. Forever. Only 200 spots exist — and {SPOTS_CLAIMED} are already claimed.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders"
              className="rounded-2xl px-10 py-4 text-base font-black text-[#080C14]"
              style={{ background: "#D4A017", boxShadow: "0 0 40px rgba(212,160,23,0.4)" }}>
              Claim Founders Lifetime — $1,899
            </Link>
            <Link to="/pricing" className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-400 hover:border-yellow-500 hover:text-yellow-400 transition">
              Compare All Plans
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-600">
            Not sure yet?{" "}
            <Link to="/waitlist" className="text-slate-500 hover:text-yellow-400 transition">Join the free waitlist instead →</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
