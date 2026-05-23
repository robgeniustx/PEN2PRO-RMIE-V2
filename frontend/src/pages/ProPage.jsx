import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const FEATURES = [
  { icon: "🗺️", title: "Full RMIE Business Blueprint", body: "Complete roadmap — idea to income — with actionable steps tailored to your specific business concept." },
  { icon: "📊", title: "Full Progress Tracking", body: "Track every milestone, task, and launch step with a visual dashboard that keeps you moving forward." },
  { icon: "🎨", title: "Business Branding Support", body: "Brand name ideas, tagline options, color direction, and positioning strategy to look professional from day one." },
  { icon: "📧", title: "Email & PDF Export", body: "Download your roadmap, business plan, and sales scripts as a PDF or send to your email to execute offline." },
  { icon: "🤖", title: "AI Refinement Engine", body: "Run your roadmap through multiple AI passes that tighten the strategy, sharpen the offer, and improve the plan." },
  { icon: "📣", title: "Outreach Strategy", body: "Sales scripts, 50-prospect target lists, outreach templates, and follow-up sequences to start landing clients fast." },
  { icon: "💳", title: "Credit & Funding Readiness Checklist", body: "Know exactly where you stand before you apply for funding — personal credit, business structure, and documentation." },
  { icon: "🏗️", title: "Business Foundation Module", body: "LLC formation checklist, EIN registration steps, business bank account guidance, and vendor setup roadmap." },
];

const COMPARE = [
  { label: "Starter Blueprint", free: true, pro: true },
  { label: "Full Roadmap (7/30/90-day)", free: false, pro: true },
  { label: "Progress Tracking", free: "Basic", pro: "Full" },
  { label: "Branding Support", free: false, pro: true },
  { label: "Email / PDF Export", free: false, pro: true },
  { label: "AI Refinement", free: false, pro: true },
  { label: "Outreach Strategy", free: false, pro: true },
  { label: "Credit & Funding Checklist", free: false, pro: true },
  { label: "Sales Scripts", free: false, pro: true },
  { label: "Business Foundation Module", free: false, pro: true },
];

function CheckIcon({ val, gold = false }) {
  if (val === true) return <span className={gold ? "text-[#FF8A00]" : "text-[#2d9cff]"}>✓</span>;
  if (val === false) return <span className="text-slate-600">—</span>;
  return <span className="text-slate-400 text-xs">{val}</span>;
}

export default function ProPage() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function handleCheckout() {
    setErr("");
    setLoading(true);
    try {
      const result = await createCheckoutSession({ tier: "pro" });
      if (result?.checkout_url) { window.location.href = result.checkout_url; return; }
      setErr(result?.error || "Checkout is not live yet. Join the waitlist below.");
    } catch {
      setErr("Unable to start checkout. Join the waitlist below.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-24 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,156,255,0.12),transparent_70%)]" />
        <div className="relative mx-auto max-w-3xl">
          <span className="mb-4 inline-block rounded-full border border-[#2d9cff]/40 bg-[#2d9cff]/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#5ab0ff]">
            PEN2PRO Pro
          </span>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            Full Strategy.<br />Real Execution Tools.
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Pro gives you the complete RMIE roadmap, AI refinement, branding direction, outreach strategy, credit readiness, and business foundation tools — everything a serious entrepreneur needs to move from idea to income.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="rounded-xl bg-[#2d9cff] px-8 py-3.5 text-sm font-black text-[#081226] shadow-[0_0_35px_rgba(45,156,255,0.45)] transition hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? "Starting Checkout…" : "Upgrade to Pro — $249/mo"}
            </button>
            <Link to="/waitlist?tier=pro" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-bold text-slate-200 transition hover:border-slate-400 hover:text-white">
              Join Pro Waitlist
            </Link>
          </div>
          {err && <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">{err}</p>}
          <p className="mt-4 text-xs text-slate-500">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-center text-xs font-black uppercase tracking-[0.3em] text-[#5ab0ff]">What You Get</p>
          <h2 className="mb-10 text-center font-display text-3xl font-black md:text-4xl">Everything You Need to Execute</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 transition hover:-translate-y-1">
                <div className="mb-3 text-2xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Table */}
      <section className="border-y border-[#1A2D50] bg-[#0B1222] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-3xl font-black">Free vs. Pro</h2>
          <div className="overflow-hidden rounded-2xl border border-[#1A2D50]">
            <div className="grid grid-cols-3 border-b border-[#1A2D50] bg-[#0A0F1E] px-5 py-3 text-xs font-black uppercase tracking-widest text-slate-400">
              <span>Feature</span>
              <span className="text-center">Free</span>
              <span className="text-center text-[#2d9cff]">Pro</span>
            </div>
            {COMPARE.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-3 items-center px-5 py-3 text-sm ${i % 2 === 0 ? "bg-[#0F1520]" : "bg-[#0a0f1e]"}`}>
                <span className="text-slate-300">{row.label}</span>
                <span className="text-center"><CheckIcon val={row.free} /></span>
                <span className="text-center"><CheckIcon val={row.pro} gold /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-5 py-20 text-center">
        <div className="mx-auto max-w-2xl rounded-3xl border border-[#2d9cff]/40 bg-[linear-gradient(160deg,#101a2f,#0a0f1e)] p-10 shadow-[0_0_60px_rgba(45,156,255,0.15)]">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">Ready to Build For Real?</h2>
          <p className="mb-7 text-slate-300">Stop waiting. Start executing. Pro gives you the structure, strategy, and tools to move from idea to income — fast.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button onClick={handleCheckout} disabled={loading} className="rounded-xl bg-[#2d9cff] px-8 py-3 text-sm font-black text-[#081226] transition hover:scale-[1.02] disabled:opacity-60">
              {loading ? "Starting…" : "Get Pro — $249/mo"}
            </button>
            <Link to="/elite" className="rounded-xl border border-[#1A2D50] px-8 py-3 text-sm font-bold text-slate-200 transition hover:border-slate-400">
              See Elite Plan →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
