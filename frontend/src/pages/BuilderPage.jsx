import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_STEPS = [
  { icon: "💡", step: "1", title: "Business Idea Intake", body: "Describe your idea, skill, or concept in plain language. PEN2PRO analyzes it and starts building your business model." },
  { icon: "🏷️", step: "2", title: "Brand Name Ideas", body: "Get 5–10 name concepts built around your niche, target customer, and brand tone. Includes domain availability notes." },
  { icon: "📐", step: "3", title: "Business Model Generation", body: "PEN2PRO identifies your revenue model — service, product, subscription, hybrid — and lays out the structure." },
  { icon: "💼", step: "4", title: "Offer Creation", body: "Build 3 tiered offer packages — entry, core, and premium — with pricing guidance for each." },
  { icon: "📋", step: "5", title: "Startup Checklist", body: "Step-by-step checklist to go from idea to operating business. Nothing skipped, nothing assumed." },
  { icon: "🏛️", step: "6", title: "LLC / EIN / Business Bank", body: "Entity formation checklist, EIN application guide, and business banking setup steps — so you're legally and financially set up right." },
];

const CHECKLIST_ITEMS = [
  { label: "LLC or business entity formed", detail: "Registered in your state with a registered agent" },
  { label: "EIN obtained from IRS", detail: "Free from IRS.gov — takes under 10 minutes" },
  { label: "Business bank account opened", detail: "Separate from personal — required for credit building" },
  { label: "Business address established", detail: "Use a registered agent or virtual address" },
  { label: "Business email created", detail: "yourname@yourbusiness.com — looks professional" },
  { label: "Google Business Profile created", detail: "Free — critical for local visibility and trust" },
  { label: "Offer packages defined", detail: "3 tiers: intro, core, premium" },
  { label: "Pricing strategy set", detail: "Based on competitor research and your value delivery" },
  { label: "Sales script drafted", detail: "How you talk about what you do and why it matters" },
  { label: "First 3 potential customers identified", detail: "People who already need what you offer" },
];

export default function BuilderPage() {
  const [checked, setChecked] = useState({});

  const toggle = (i) => setChecked((prev) => ({ ...prev, [i]: !prev[i] }));
  const completed = Object.values(checked).filter(Boolean).length;

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/3 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute top-[50%] -right-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(30,136,229,0.12) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            🏗️ Business Builder Mode
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Build Your Business{" "}
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              From the Ground Up.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Business Builder takes your idea and walks you through every step — business model, offer creation, startup checklist, entity formation, and your first launch plan. No experience needed.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-10 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              Start Your Free Blueprint
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2235] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">How Builder Works</div>
          <h2 className="mb-14 text-center font-display text-3xl font-black md:text-4xl">
            Six Steps From Idea to Operating Business
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BUILDER_STEPS.map((s) => (
              <div key={s.step} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-black text-[#0A0F1E]"
                    style={{ background: "linear-gradient(135deg, #1E88E5, #0D47A1)" }}>
                    {s.step}
                  </div>
                  <span className="text-2xl">{s.icon}</span>
                </div>
                <h3 className="mb-2 font-bold text-white text-lg">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive checklist */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Business Launch Checklist</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black">Where Are You Right Now?</h2>
          <p className="mb-8 text-center text-slate-400 text-sm">Check off what you have. PEN2PRO will help you complete the rest.</p>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="mb-2 flex justify-between text-xs text-slate-400">
              <span>{completed} of {CHECKLIST_ITEMS.length} complete</span>
              <span>{Math.round((completed / CHECKLIST_ITEMS.length) * 100)}%</span>
            </div>
            <div className="h-2 rounded-full bg-[#1A2235]">
              <div
                className="h-2 rounded-full transition-all duration-500"
                style={{ width: `${(completed / CHECKLIST_ITEMS.length) * 100}%`, background: "linear-gradient(90deg, #1E88E5, #FF8A00)" }}
              />
            </div>
          </div>

          <div className="space-y-3">
            {CHECKLIST_ITEMS.map((item, i) => (
              <button
                key={item.label}
                onClick={() => toggle(i)}
                className="w-full rounded-xl border bg-[#0F1520] p-4 text-left transition-all hover:border-[#1E88E5]/40"
                style={{ borderColor: checked[i] ? "rgba(30,136,229,0.40)" : "#1A2235" }}>
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded text-xs font-bold transition-all ${
                    checked[i] ? "bg-[#1E88E5] text-white" : "border border-[#1A2235] text-transparent"
                  }`}>
                    ✓
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${checked[i] ? "text-white" : "text-slate-300"}`}>{item.label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.detail}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="mb-4 text-sm text-slate-400">
              {completed < 5
                ? "You're in the early stages — PEN2PRO Builder will get you here fast."
                : completed < 9
                ? "Good foundation. Upgrade to Pro to build from here with full AI support."
                : "Strong foundation. Time to focus on customers, revenue, and growth."}
            </p>
            <Link to="/starter" className="inline-block rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Build Your Free Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* What's next */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black">Ready for More Than a Checklist?</h2>
          <p className="mb-10 text-slate-400">
            Upgrade to Pro and get the full RMIE roadmap — complete blueprint, execution plan, branding, AI refinement, and credit/funding readiness — built specifically for your business.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { label: "Free Blueprint", sub: "Start here", path: "/starter", style: "border border-[#1A2235] text-slate-300" },
              { label: "Pro — $249/mo", sub: "Full roadmap", path: "/pro", style: "btn-gold text-[#0A0F1E]" },
              { label: "Elite — $499/mo", sub: "Full execution", path: "/elite", style: "border border-[#FF8A00]/40 text-[#FF8A00]" },
            ].map((p) => (
              <Link key={p.label} to={p.path}
                className={`rounded-xl px-5 py-4 text-sm font-bold transition-all ${p.style}`}>
                <div className="text-base font-black">{p.label}</div>
                <div className="mt-1 text-xs opacity-70">{p.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
