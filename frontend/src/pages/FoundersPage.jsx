import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function useCountdown(target) {
  const [t, setT] = useState({});
  useEffect(() => {
    const calc = () => {
      const diff = new Date(target) - Date.now();
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

function CountBox({ val, label }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-[#D4A017]/30 bg-[#0F1520] px-5 py-4 min-w-[80px]">
      <span className="font-display text-3xl font-black tabular-nums text-[#D4A017]">
        {String(val ?? 0).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">{label}</span>
    </div>
  );
}

const FOUNDERS_FEATURES = [
  "Lifetime PEN2PRO access — pay once, own it forever",
  "Everything in Elite — full RMIE engine, financial projections, funding resources",
  "P2P Command Center — full business operating system",
  "P2P AI Voice Agent — automated outreach and appointment setting",
  "Website Builder — launch your business website without a developer",
  "CRM and automation tools — manage leads, customers, and follow-ups",
  "Funding readiness system — know when you're ready to apply",
  "Advanced branding and launch execution tools",
  "12-month 10M strategist framework — scaling roadmap for Year 1",
  "Founder recognition — named in the PEN2PRO Founders Registry",
  "Early access to all new features before public release",
  "Priority support — your questions move to the front of the line",
];

const FOUNDER_BENEFITS = [
  {
    icon: "🔐",
    title: "Lock In Your Price Forever",
    desc: "Founders pricing is a one-time payment. No monthly fees. No renewals. No price increases — ever. You own it.",
  },
  {
    icon: "🚀",
    title: "Full Platform Access at Launch",
    desc: "When PEN2PRO goes live on June 15, Founders get immediate access to every tool, every tier, every feature.",
  },
  {
    icon: "🏅",
    title: "Founder Recognition",
    desc: "Your name joins the PEN2PRO Founders Registry — the first believers who helped build this platform.",
  },
  {
    icon: "📲",
    title: "Early Access to Everything New",
    desc: "New tools, new AI agents, new features — Founders test them first. Always ahead of the general public.",
  },
];

export default function FoundersPage() {
  const cd = useCountdown("2026-06-15T09:00:00");

  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-20 pb-24 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="h-[700px] w-[700px] rounded-full opacity-[0.09]"
            style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest"
            style={{ borderColor: "rgba(212,160,23,0.4)", background: "rgba(212,160,23,0.08)", color: "#D4A017" }}
          >
            ⚡ Only 200 Founders Spots Available
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight text-white md:text-6xl">
            Be a Founder.
            <br />
            <span
              style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Own It For Life.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-400">
            The PEN2PRO Founders Lifetime offer gives you complete, permanent access to the entire PEN2PRO platform — RMIE engine, Command Center, AI Voice Agent, Website Builder, CRM, funding readiness, and the 12-month 10M strategist framework. Pay once. Own it forever.
          </p>

          {/* Countdown */}
          <div className="mb-8 flex flex-col items-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">
              Founders pricing closes at launch — June 15, 2026
            </p>
            <div className="flex items-center gap-3">
              <CountBox val={cd.d} label="Days" />
              <span className="text-2xl font-black text-[#D4A017] opacity-40">:</span>
              <CountBox val={cd.h} label="Hours" />
              <span className="text-2xl font-black text-[#D4A017] opacity-40">:</span>
              <CountBox val={cd.m} label="Min" />
              <span className="text-2xl font-black text-[#D4A017] opacity-40">:</span>
              <CountBox val={cd.s} label="Sec" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/pricing"
              className="rounded-2xl px-8 py-4 text-base font-black"
              style={{ background: "linear-gradient(135deg, #D4A017, #FF8A00)", color: "#080C14", boxShadow: "0 0 40px rgba(212,160,23,0.4)" }}
            >
              Claim Founders Lifetime — $1,899 →
            </Link>
            <Link
              to="/waitlist?tier=founders"
              className="rounded-2xl border border-[#D4A017]/40 px-8 py-4 text-base font-semibold text-[#D4A017] transition hover:border-[#D4A017] hover:bg-[#D4A017]/5"
            >
              Join Founders Waitlist
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">One-time payment · Secure checkout · 200 spots total</p>
        </div>
      </section>

      {/* URGENCY BANNER */}
      <section className="border-y border-[#D4A017]/20 bg-[#D4A017]/5 px-5 py-5">
        <div className="mx-auto max-w-5xl flex flex-col items-center gap-2 text-center md:flex-row md:justify-between">
          <p className="text-sm font-bold text-[#D4A017]">
            ⚡ Only 200 Founders Lifetime spots will ever exist. Once they're gone, the price goes up to $3,000+/year.
          </p>
          <Link
            to="/pricing"
            className="shrink-0 rounded-xl px-6 py-2 text-sm font-black"
            style={{ background: "#D4A017", color: "#080C14" }}
          >
            Claim Your Spot
          </Link>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A017]">What Founders Get</p>
            <h2 className="font-display text-4xl font-black text-white">The complete PEN2PRO platform. Forever.</h2>
            <p className="mt-3 text-slate-500">Everything that will ever be built inside PEN2PRO — yours, permanently, for one price.</p>
          </div>
          <div className="rounded-2xl border border-[#D4A017]/30 bg-[#0F1520] p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {FOUNDERS_FEATURES.map((f) => (
                <div key={f} className="flex items-start gap-3 rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3">
                  <span className="mt-0.5 font-bold text-[#D4A017] shrink-0">✓</span>
                  <span className="text-sm text-slate-300">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER BENEFITS */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Founder Advantages</p>
            <h2 className="font-display text-4xl font-black text-white">Why founding members win</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FOUNDER_BENEFITS.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-[#D4A017]/20 bg-[#080C14] p-6 hover:border-[#D4A017]/40 transition"
              >
                <div className="mb-3 text-3xl">{b.icon}</div>
                <h3 className="mb-2 text-base font-bold text-white">{b.title}</h3>
                <p className="text-sm leading-6 text-slate-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE BREAKDOWN */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A017]">The Math</p>
            <h2 className="font-display text-4xl font-black text-white">What you're actually getting</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#D4A017]/30">
            <div className="bg-[#0F1520] px-6 py-3 grid grid-cols-2 text-xs font-bold uppercase tracking-widest text-slate-500">
              <span>What's Included</span>
              <span className="text-right">Monthly Value</span>
            </div>
            {[
              ["RMIE Blueprint Engine", "$249/mo"],
              ["Elite Strategy Tools", "+$250/mo"],
              ["P2P Command Center", "$99/mo"],
              ["P2P AI Voice Agent", "$99/mo"],
              ["Website Builder", "$79/mo"],
              ["CRM + Automation", "$149/mo"],
              ["Funding Readiness System", "$99/mo"],
              ["12-Month Strategist Framework", "$500/mo"],
            ].map(([name, val], i) => (
              <div
                key={name}
                className={`grid grid-cols-2 px-6 py-4 text-sm ${i % 2 === 0 ? "bg-[#0D1528]" : "bg-[#080C14]"}`}
              >
                <span className="text-slate-300">{name}</span>
                <span className="text-right font-semibold text-slate-400">{val}</span>
              </div>
            ))}
            <div className="grid grid-cols-2 bg-[#D4A017]/10 px-6 py-4 border-t border-[#D4A017]/30">
              <span className="font-bold text-white">Total Monthly Value</span>
              <span className="text-right font-black text-[#D4A017]">$1,524+/mo</span>
            </div>
            <div className="grid grid-cols-2 bg-[#D4A017]/5 px-6 py-4">
              <span className="font-black text-white text-lg">Your Founders Price</span>
              <span className="text-right font-black text-[#D4A017] text-lg">$1,899 once</span>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-slate-600">
            That's less than 2 months of equivalent tools — paid once, kept forever.
          </p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-400">Who Founders Are</p>
          <h2 className="mb-4 font-display text-4xl font-black text-white">This offer is for builders who move fast</h2>
          <p className="mb-12 text-slate-400">
            Founders are the people who don't wait for the perfect time. They invest when the opportunity is real and the price is right.
          </p>
          <div className="grid gap-4 text-left sm:grid-cols-2">
            {[
              { icon: "🎯", t: "You're serious about building", d: "You have an idea, a skill, or a business — and you're ready to turn it into income with a real system." },
              { icon: "💡", t: "You think long-term", d: "You understand that paying once to own forever is a better deal than paying $500/month indefinitely." },
              { icon: "⚡", t: "You move before the crowd", d: "You see the opportunity early, decide quickly, and secure your advantage while others hesitate." },
              { icon: "🏗️", t: "You want to build something real", d: "Not a side hustle fantasy — a real business with real structure, real strategy, and real execution support." },
            ].map((item) => (
              <div key={item.t} className="flex gap-4 rounded-2xl border border-[#1A2235] bg-[#080C14] p-5">
                <span className="mt-0.5 text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="mb-1 font-bold text-white">{item.t}</p>
                  <p className="text-sm text-slate-500">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <p
            className="mb-3 text-xs font-bold uppercase tracking-widest"
            style={{ color: "#D4A017" }}
          >
            200 spots. No extensions.
          </p>
          <h2 className="mb-4 font-display text-4xl font-black text-white md:text-5xl">
            This is the most valuable offer<br />PEN2PRO will ever make.
          </h2>
          <p className="mb-10 text-lg text-slate-400">
            After 200 Founders spots are filled, this price disappears. The platform continues, the lifetime offer does not.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/pricing"
              className="rounded-2xl px-10 py-4 text-base font-black"
              style={{ background: "linear-gradient(135deg, #D4A017, #FF8A00)", color: "#080C14", boxShadow: "0 0 40px rgba(212,160,23,0.4)" }}
            >
              Claim Founders Lifetime — $1,899 →
            </Link>
            <Link
              to="/waitlist?tier=founders"
              className="rounded-2xl border border-[#D4A017]/40 px-8 py-4 text-base font-semibold text-[#D4A017] transition hover:border-[#D4A017]"
            >
              Reserve My Spot (Waitlist)
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-600">
            Compare plans?{" "}
            <Link to="/pricing" className="text-[#D4A017] font-semibold hover:underline">
              View full pricing
            </Link>
            {" "}or{" "}
            <Link to="/starter" className="text-[#FF8A00] font-semibold hover:underline">
              start free
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
