import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const LAUNCH_TARGET = "2026-06-15T09:00:00";

const FOUNDERS_FEATURES = [
  {
    title: "Lifetime PEN2PRO Access",
    body: "One price, forever. No monthly fees, no renewals, no surprises — every current and future PEN2PRO feature included for life.",
  },
  {
    title: "Everything in Elite",
    body: "Full RMIE Blueprint, P2P Command Center, Advanced Strategy Engine, Financial Projections, Done-With-You Guidance, Priority Support, and every Elite tool.",
  },
  {
    title: "RMIE Launch & Scaling Roadmap",
    body: "A complete business roadmap from idea validation through launch, first revenue, and 12-month growth — built around your specific business.",
  },
  {
    title: "P2P Command Center",
    body: "Centralized business operations hub — leads, CRM, tasks, pipeline, outreach, and follow-ups all in one dashboard.",
  },
  {
    title: "P2P AI Voice Agent",
    body: "Full-access AI voice tools to handle calls, capture leads, follow up automatically, and keep your pipeline moving even when you are not available.",
  },
  {
    title: "Website Builder",
    body: "Professional business presence without a developer. Templates designed for service businesses, coaches, consultants, and entrepreneurs.",
  },
  {
    title: "CRM & Automation Tools",
    body: "Manage contacts, automate follow-ups, track every touchpoint, and close deals with a CRM built for small business builders — not enterprise teams.",
  },
  {
    title: "Funding Readiness Tools",
    body: "Credit preparation checklist, business bank setup guide, documentation framework, vendor/tradeline resources, and a lender-ready business profile builder.",
  },
  {
    title: "Branding & Launch Execution",
    body: "Brand name ideas, brand voice guide, social media strategy, launch checklist, and first 30-day marketing plan — all tailored to your business.",
  },
  {
    title: "12-Month 10M Strategist Framework",
    body: "Advanced business strategy framework for building toward real revenue milestones — with quarterly reviews, offer refinement, and scaling benchmarks.",
  },
];

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
    <span className="flex flex-col items-center rounded-xl border border-[#1A2D50] bg-[#0F1520] px-5 py-4 min-w-[68px]">
      <span
        className="font-display text-3xl font-black tabular-nums leading-none"
        style={{ color: "#D4A017" }}
      >
        {String(v ?? 0).padStart(2, "0")}
      </span>
      <span className="mt-1.5 text-[9px] font-bold uppercase tracking-widest text-slate-500">
        {l}
      </span>
    </span>
  );
}

export default function FoundersPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const timer = useCountdown(LAUNCH_TARGET);

  const handleClaim = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await createCheckoutSession({ tier: "founders" });
      if (result?.checkout_url) {
        window.location.href = result.checkout_url;
        return;
      }
      navigate("/waitlist?tier=founders");
    } catch {
      navigate("/waitlist?tier=founders");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080C14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-4 text-center">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(212,160,23,0.16) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-[#D4A017]/50 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#D4A017]">
            Founders Lifetime &bull; 200 Spots Only
          </span>
          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            <span
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #D4A017 60%, #b8880f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Founders Lifetime
            </span>
          </h1>
          <p className="mt-4 text-xl font-semibold text-slate-200">
            200 Spots. One Price. Forever.
          </p>
          <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-xl mx-auto">
            Lock in every PEN2PRO feature — current and future — for a single one-time payment.
            Before the official launch price goes up, Founders get lifetime access at the earliest
            believer rate.
          </p>

          {/* Countdown */}
          <div className="mt-10 mb-2">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
              Official Launch Countdown
            </p>
            <div className="flex items-center justify-center gap-3">
              <CBox v={timer.d} l="Days" />
              <span className="text-2xl font-black text-[#D4A017] pb-4">:</span>
              <CBox v={timer.h} l="Hours" />
              <span className="text-2xl font-black text-[#D4A017] pb-4">:</span>
              <CBox v={timer.m} l="Min" />
              <span className="text-2xl font-black text-[#D4A017] pb-4">:</span>
              <CBox v={timer.s} l="Sec" />
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleClaim}
              disabled={loading}
              className="rounded-xl px-8 py-4 text-base font-black tracking-wide text-[#080C14] shadow-[0_0_30px_rgba(212,160,23,0.5)] transition hover:shadow-[0_0_48px_rgba(212,160,23,0.7)] disabled:opacity-60"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)" }}
            >
              {loading ? "Connecting..." : "Claim Founders Lifetime — $1,899"}
            </button>
            <Link
              to="/waitlist?tier=founders"
              className="rounded-xl border border-[#1A2D50] bg-[#0F1520] px-8 py-4 text-base font-bold text-slate-300 transition hover:border-[#D4A017]/40 hover:text-white"
            >
              Join Founders Waitlist
            </Link>
          </div>
          {error && (
            <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              {error}
            </p>
          )}
        </div>
      </section>

      {/* Urgency block */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-2xl rounded-2xl border border-[#D4A017]/30 bg-[#0F1520] p-7 text-center">
          <p className="text-sm font-bold text-[#D4A017] uppercase tracking-widest mb-2">
            Limited Availability
          </p>
          <p className="text-base text-slate-300 leading-relaxed">
            Only{" "}
            <span className="font-black text-white">200 Founders spots</span>{" "}
            are available. When they are gone, this offer closes permanently. The platform will
            continue — but the Founders lifetime rate will not return.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-black text-white mb-3">
            Everything Included — For Life
          </h2>
          <p className="text-center text-sm text-slate-400 mb-10">
            One payment. Every feature. No future upgrade fees.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FOUNDERS_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 transition hover:border-[#D4A017]/40 hover:-translate-y-1"
              >
                <div
                  className="mb-3 h-1.5 w-8 rounded-full"
                  style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)" }}
                />
                <h3 className="text-sm font-black text-white mb-2">{f.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-[#D4A017]/20 bg-gradient-to-br from-[#1a1200] to-[#0F1520] p-10">
            <div
              className="mb-6 h-1 w-16 rounded-full"
              style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)" }}
            />
            <blockquote className="text-base text-slate-200 leading-loose italic">
              "I built PEN2PRO from the setbacks. This Founders offer is my way of letting the
              first 200 believers in before everyone else. If you are serious about building
              something real, this is your moment. Not a trial. Not a teaser. Lifetime access —
              the same tools that helped me turn rejection into a business, shared with the people
              ready to do the same."
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-[#D4A017]/20 border border-[#D4A017]/40 flex items-center justify-center">
                <span className="text-sm font-black text-[#D4A017]">RG</span>
              </div>
              <div>
                <p className="text-sm font-black text-white">Robert Green</p>
                <p className="text-xs text-slate-500">Founder, PEN2PRO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan comparison callout */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#1A2D50] bg-[#0F1520] overflow-hidden">
          <div className="grid grid-cols-3 border-b border-[#1A2D50] bg-[#080C14]">
            <div className="px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-slate-500">
              Pro<br />
              <span className="text-[#5ab0ff]">$249/mo</span>
            </div>
            <div className="px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-slate-500">
              Elite<br />
              <span className="text-[#00C9B1]">$499/mo</span>
            </div>
            <div className="px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-slate-500">
              Founders<br />
              <span className="text-[#D4A017]">$1,899 forever</span>
            </div>
          </div>
          {[
            ["Full RMIE Blueprint", "Advanced RMIE Engine", "RMIE Launch & Scaling Roadmap"],
            ["Basic CRM", "Advanced CRM & Pipeline", "Full CRM & Automation"],
            ["Standard Support", "Priority Support", "Founders Priority Access"],
            ["Marketing Roadmap", "Done-With-You Guidance", "12-Month 10M Framework"],
            ["Monthly fee", "Monthly fee", "One payment. No renewals."],
          ].map(([pro, elite, founder], i) => (
            <div
              key={i}
              className={`grid grid-cols-3 border-b border-[#1A2D50]/60 ${
                i % 2 === 0 ? "bg-[#0F1520]" : "bg-[#080C14]"
              }`}
            >
              <div className="px-4 py-3 text-xs text-slate-400 text-center border-r border-[#1A2D50]/60">
                {pro}
              </div>
              <div className="px-4 py-3 text-xs text-slate-400 text-center border-r border-[#1A2D50]/60">
                {elite}
              </div>
              <div className="px-4 py-3 text-xs font-semibold text-[#D4A017] text-center">
                {founder}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-24">
        <div
          className="mx-auto max-w-2xl rounded-2xl p-10 text-center"
          style={{
            background: "linear-gradient(135deg, #1a1200 0%, #0F1520 100%)",
            border: "1px solid rgba(212,160,23,0.25)",
            boxShadow: "0 0 60px rgba(212,160,23,0.12)",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-3">
            Only 200 Spots Available
          </p>
          <h2 className="text-2xl font-black text-white">
            This Is Your Moment. Do Not Let It Pass.
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Every tool. Every feature. Every upgrade — included forever for a single payment of
            $1,899. No subscriptions, no upgrade walls, no regrets.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleClaim}
              disabled={loading}
              className="rounded-xl px-8 py-4 text-base font-black text-[#080C14] shadow-[0_0_24px_rgba(212,160,23,0.4)] transition disabled:opacity-60"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)" }}
            >
              {loading ? "Connecting..." : "Claim Founders Lifetime — $1,899"}
            </button>
            <Link
              to="/waitlist?tier=founders"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-bold text-slate-300 transition hover:text-white hover:border-[#D4A017]/40"
            >
              Join Waitlist Instead
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-600">
            Questions?{" "}
            <Link to="/waitlist" className="text-[#D4A017] hover:underline">
              Join the waitlist
            </Link>{" "}
            and we will reach out directly.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
