import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_MODULES = [
  {
    icon: "💡",
    title: "Business Idea Intake",
    desc: "Answer 5 focused questions about your idea, target customer, and starting budget. The AI builds from your answers — not a generic template.",
  },
  {
    icon: "🏷️",
    title: "Brand Name Generator",
    desc: "Get 5–10 brand name options, tagline suggestions, and a brand direction based on your business type and target market.",
  },
  {
    icon: "🏗️",
    title: "Business Model Generation",
    desc: "Service-based, product, subscription, agency, consulting — the AI identifies your ideal business model and revenue structure.",
  },
  {
    icon: "🎁",
    title: "Offer Creation",
    desc: "Get 3 offer packages with pricing, service scope, and positioning — ready to present to your first client or post online.",
  },
  {
    icon: "📋",
    title: "Startup Checklist",
    desc: "Everything you need to launch — sorted by week. From idea validation to first dollar, sequenced in the right order.",
  },
  {
    icon: "🏛️",
    title: "LLC / EIN / Business Bank",
    desc: "Step-by-step checklist for entity formation, EIN registration, business banking setup, and legal business foundation.",
  },
  {
    icon: "🗺️",
    title: "Launch Roadmap",
    desc: "7-day quick-start plan and 30-day launch plan with specific daily actions, milestones, and accountability steps.",
  },
  {
    icon: "💾",
    title: "Save & Upgrade",
    desc: "Save your blueprint and revisit anytime. Upgrade to Pro for the full 90-day plan, outreach scripts, and credit readiness tools.",
  },
];

const SAMPLE_STEPS = [
  { day: "Day 1–2", action: "Register your LLC, get your EIN, open a business checking account" },
  { day: "Day 3", action: "Create 3 service packages with pricing — basic, standard, premium" },
  { day: "Day 4", action: "Build a simple Google Business Profile and claim your social media handles" },
  { day: "Day 5", action: "Identify your first 20 target prospects — local, online, or referral network" },
  { day: "Day 6", action: "Send 10 outreach messages using the AI-generated script from your roadmap" },
  { day: "Day 7", action: "Follow up with all 10, book your first consultation or close your first client" },
];

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-20 pb-24 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="h-[600px] w-[600px] rounded-full opacity-[0.08]"
            style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-purple-400">
            PEN2PRO Builder Mode
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight text-white md:text-6xl">
            Build Your Business.
            <br />
            <span style={{ background: "linear-gradient(90deg, #7C3AED, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Start Today.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-400">
            PEN2PRO Builder mode walks you through everything you need to launch a real business — from naming your brand to forming your LLC, creating your offer packages, and landing your first client. No experience required.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/starter"
              className="rounded-2xl px-8 py-4 text-base font-black"
              style={{ background: "linear-gradient(135deg, #7C3AED, #FF8A00)", color: "#fff", boxShadow: "0 0 35px rgba(124,58,237,0.4)" }}
            >
              Start Building — Free →
            </Link>
            <Link
              to="/pricing"
              className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-purple-500 hover:text-purple-400"
            >
              See Pro Builder Tools
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">Free to start · No credit card required · Launch roadmap in under 10 minutes</p>
        </div>
      </section>

      {/* MODULES */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-purple-400">Builder Modules</p>
            <h2 className="font-display text-4xl font-black text-white">Everything you need to launch</h2>
            <p className="mt-3 text-slate-500">Each module builds on the last — structured so you don't miss a step.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BUILDER_MODULES.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-[#1A2235] bg-[#080C14] p-6 hover:border-purple-500/30 hover:bg-[#0F1520] transition"
              >
                <div className="mb-3 text-3xl">{m.icon}</div>
                <h3 className="mb-2 text-base font-bold text-white">{m.title}</h3>
                <p className="text-sm leading-6 text-slate-500">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAMPLE 7-DAY PLAN */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Sample Output</p>
            <h2 className="font-display text-4xl font-black text-white">Your 7-day launch plan looks like this</h2>
            <p className="mt-3 text-slate-500">Not vague advice. Specific daily actions — built for your business type.</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#1A2235]">
            {SAMPLE_STEPS.map((step, i) => (
              <div
                key={step.day}
                className={`flex items-start gap-4 px-6 py-4 ${i % 2 === 0 ? "bg-[#0D1528]" : "bg-[#080C14]"}`}
              >
                <span
                  className="shrink-0 rounded-lg px-3 py-1 text-xs font-black"
                  style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.3)" }}
                >
                  {step.day}
                </span>
                <p className="text-sm text-slate-300">{step.action}</p>
              </div>
            ))}
            <div className="bg-purple-500/10 border-t border-purple-500/20 px-6 py-4 text-sm text-purple-300 font-semibold">
              Pro members get the full 30-day and 90-day plan with outreach scripts, pricing strategy, and client acquisition system.
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-400">Who Builder Is For</p>
          <h2 className="mb-4 font-display text-4xl font-black text-white">Built for first-time business owners</h2>
          <p className="mb-12 text-slate-400">
            You don't need a business degree. You don't need startup experience. You just need a real plan and the will to execute it.
          </p>
          <div className="grid gap-4 text-left sm:grid-cols-2">
            {[
              { icon: "🧱", t: "Starting from scratch", d: "You have an idea but don't know where to begin. Builder gives you a clear starting point and a sequenced launch plan." },
              { icon: "🛠️", t: "Turning a skill into a business", d: "You're already good at something — cleaning, cooking, coding, trucking, training. Builder turns that skill into a real business." },
              { icon: "🎖️", t: "Veterans and returning citizens", d: "If the traditional job market has counted you out, Builder helps you build your own income opportunity from what you already know." },
              { icon: "👪", t: "Parents building for their family", d: "A side business, a service, a brand — Builder maps out the fastest path from zero to generating income for your household." },
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

      {/* FREE VS PRO BUILDER */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A017]">Free vs Pro Builder</p>
            <h2 className="font-display text-4xl font-black text-white">Start free. Unlock everything when ready.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-500">Free Builder</p>
              <ul className="space-y-3 text-sm text-slate-400">
                {["Business idea intake", "Brand name suggestions", "Business model overview", "LLC / EIN checklist", "7-day quick-start plan", "Basic offer structure"].map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-teal-400 mt-0.5">✓</span>{f}</li>
                ))}
              </ul>
              <Link to="/starter" className="mt-6 block rounded-xl border border-[#1A2235] px-4 py-3 text-center text-sm font-bold text-slate-300 hover:border-slate-400 transition">
                Start Free
              </Link>
            </div>
            <div className="rounded-2xl border border-[#D4A017]/40 bg-[#0F1520] p-6">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#D4A017]">Pro Builder</p>
              <ul className="space-y-3 text-sm text-slate-400">
                {["Everything in Free", "Full 30-day launch plan", "Full 90-day growth plan", "3 offer packages with pricing", "Outreach scripts (10 messages)", "Credit & funding readiness", "Progress tracking", "PDF / email export"].map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-[#D4A017] mt-0.5">✓</span>{f}</li>
                ))}
              </ul>
              <Link to="/pricing" className="mt-6 block rounded-xl px-4 py-3 text-center text-sm font-black" style={{ background: "#D4A017", color: "#080C14" }}>
                Upgrade to Pro — $249/mo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-purple-400">Ready to build?</p>
          <h2 className="mb-4 font-display text-4xl font-black text-white md:text-5xl">
            Your business starts with one decision.
          </h2>
          <p className="mb-10 text-lg text-slate-400">
            Start your free roadmap now. Answer 5 questions. Get your brand name ideas, business model, and 7-day launch plan in under 10 minutes.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/starter"
              className="rounded-2xl px-10 py-4 text-base font-black"
              style={{ background: "linear-gradient(135deg, #7C3AED, #FF8A00)", color: "#fff", boxShadow: "0 0 35px rgba(124,58,237,0.4)" }}
            >
              Start Building Free →
            </Link>
            <Link
              to="/accelerator"
              className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-400 transition hover:border-teal-400 hover:text-teal-400"
            >
              See Accelerator →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
