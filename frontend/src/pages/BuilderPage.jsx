import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_STEPS = [
  {
    n: "01",
    title: "Describe Your Business Idea",
    desc: "Tell RMIE what you want to build. Industry, location, target customer, startup budget, and timeline. The more you share, the better your output.",
  },
  {
    n: "02",
    title: "AI Builds Your Business Foundation",
    desc: "RMIE generates business name ideas, brand positioning, offer structure with 3 pricing tiers, and a startup cost estimate — tailored to your specific idea.",
  },
  {
    n: "03",
    title: "Get Your Entity & Legal Checklist",
    desc: "LLC formation, EIN, business banking, general liability insurance, registered agent — all sequenced in the right order so you don't miss a step.",
  },
  {
    n: "04",
    title: "Launch Roadmap — 7, 30, 90 Days",
    desc: "Day-by-day actions for your first week. Weekly milestones for Month 1. Revenue targets for Month 2 and 3. Built around your idea, not generic advice.",
  },
  {
    n: "05",
    title: "Save Your Blueprint",
    desc: "Create a free account to save your roadmap. Return anytime to update it as your business grows. Pro members get PDF export and unlimited saves.",
  },
];

const WHAT_YOU_GET = [
  { icon: "🏷️", title: "Business Name Ideas", desc: "3–5 AI-generated name ideas that fit your niche, are domain-available, and are distinct from competitors." },
  { icon: "📦", title: "3-Tier Offer Structure", desc: "Starter, Core, and Premium packages with specific pricing, what each includes, and who each is designed for." },
  { icon: "💵", title: "Startup Cost Estimate", desc: "Low, realistic, and stretch estimates for your first 30 days. No guessing what it actually costs to launch." },
  { icon: "🎯", title: "Target Market Profile", desc: "Specific demographics, psychographics, and location targets for your ideal first 10 clients." },
  { icon: "📋", title: "Entity Setup Checklist", desc: "LLC, EIN, business bank, insurance, and address — fully sequenced with cost estimates and provider suggestions." },
  { icon: "📣", title: "Sales Script", desc: "Cold DM, phone opener, follow-up message, and objection handler — written for your specific offer." },
];

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full opacity-[0.07]"
            style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5">
            <span className="text-xs font-black uppercase tracking-widest text-purple-400">Business Builder Mode</span>
          </div>
          <h1 className="font-display text-5xl font-black leading-tight text-white md:text-7xl">
            Build Your Business<br />
            <span style={{ background: "linear-gradient(90deg, #7C3AED, #9333ea)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              From Scratch.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            PEN2PRO Builder walks you from business idea to legal entity, branded offer, and launch roadmap — step by step. No MBA required. No prior experience needed.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/starter"
              className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14] btn-gold glow-gold">
              Start Building — Free
            </Link>
            <Link to="/pricing" className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 hover:border-purple-500 hover:text-purple-400 transition">
              View Plans
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">No credit card required · Free blueprint in under 5 minutes</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-[#1A2235] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-purple-400">How Builder Works</p>
            <h2 className="font-display text-4xl font-black text-white">5 steps from idea to launch</h2>
            <p className="mt-3 text-slate-500">Builder is powered by RMIE — the Rapid Monetization Intelligence Engine. Not templates. Real AI strategy.</p>
          </div>
          <div className="space-y-4">
            {BUILDER_STEPS.map((step) => (
              <div key={step.n}
                className="flex gap-6 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6 hover:border-purple-500/30 transition-all">
                <div className="shrink-0 font-display text-5xl font-black leading-none" style={{ color: "rgba(124,58,237,0.25)" }}>
                  {step.n}
                </div>
                <div>
                  <h3 className="mb-1.5 font-bold text-white text-base">{step.title}</h3>
                  <p className="text-sm leading-6 text-slate-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-[#0F1520] px-5 py-20 border-t border-[#1A2235]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-purple-400">Your Blueprint Includes</p>
            <h2 className="font-display text-4xl font-black text-white">Everything to launch your business</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_YOU_GET.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#1A2235] bg-[#080C14] p-6 hover:border-purple-500/20 transition-all">
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h3 className="mb-2 text-sm font-bold text-white">{item.title}</h3>
                <p className="text-xs leading-6 text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE vs PRO BUILDER */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-black text-white">Free Builder vs Pro Builder</h2>
            <p className="mt-3 text-slate-500">Start free. Upgrade when you need more depth.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {/* Free */}
            <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-7">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">Free Builder</p>
              <ul className="space-y-3 mb-6">
                {[
                  "1 business blueprint",
                  "Business name suggestions",
                  "Starter offer structure",
                  "7-day launch preview",
                  "Basic entity checklist",
                  "Sample sales script",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="font-bold text-teal-400 mt-0.5 shrink-0">✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link to="/starter"
                className="block w-full rounded-xl border border-[#1A2235] py-3 text-center text-sm font-black text-slate-300 hover:border-yellow-500 hover:text-yellow-400 transition">
                Start Free Builder
              </Link>
            </div>
            {/* Pro */}
            <div className="rounded-2xl border bg-[#0F1520] p-7 shadow-[0_0_30px_rgba(45,156,255,0.15)]"
              style={{ borderColor: "#2d9cff" }}>
              <div className="absolute -mt-10 text-xs" />
              <div className="flex items-center gap-2 mb-4">
                <p className="text-xs font-bold uppercase tracking-widest text-[#2d9cff]">Pro Builder</p>
                <span className="rounded-full bg-[#2d9cff] px-2 py-0.5 text-[9px] font-black uppercase text-[#081226]">Recommended</span>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "Unlimited blueprints",
                  "Full 90-day execution plan",
                  "Complete sales script library",
                  "Credit & funding readiness",
                  "PDF export & save",
                  "AI refinement as you grow",
                  "Progress tracking dashboard",
                  "Branding direction",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="font-bold text-[#2d9cff] mt-0.5 shrink-0">✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link to="/waitlist?tier=pro"
                className="block w-full rounded-xl py-3 text-center text-sm font-black text-[#081226]"
                style={{ background: "#2d9cff" }}>
                Upgrade to Pro Builder
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 text-center border-t border-[#1A2235]">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-4xl font-black text-white mb-4">
            Ready to build your business?
          </h2>
          <p className="text-slate-400 mb-8">
            Your free blueprint is 5 minutes away. No credit card. No fluff. Just a real plan for your specific idea.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-2xl px-10 py-4 text-base font-black text-[#080C14] btn-gold glow-gold">
              Build My Blueprint — Free →
            </Link>
            <Link to="/accelerator" className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-400 hover:border-yellow-500 hover:text-yellow-400 transition">
              Accelerate Growth →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
