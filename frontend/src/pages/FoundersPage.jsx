import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FOUNDERS_FEATURES = [
  { icon: "♾️", title: "Lifetime Platform Access", desc: "Pay once. Access PEN2PRO forever. No monthly bills. No annual renewals. Every future feature included." },
  { icon: "🗺️", title: "Everything in Elite — Forever", desc: "Every Elite feature, every Pro feature, and every Free feature. Full stack, full access, for life." },
  { icon: "🏛️", title: "P2P Command Center", desc: "Full access to the PEN2PRO business operating system — CRM, pipeline, invoices, automations, and more." },
  { icon: "🎙️", title: "P2P AI Voice Agent", desc: "Deploy your own AI voice agent to handle calls, qualify leads, and follow up with clients automatically." },
  { icon: "🌐", title: "Website Builder", desc: "Build and launch your business website with AI-powered templates, funnels, and domain management tools." },
  { icon: "📊", title: "12-Month 10M Strategist Framework", desc: "A complete 12-month business scaling framework designed to take a validated business from startup to $10M in revenue trajectory." },
  { icon: "🥇", title: "Founder Recognition", desc: "Your name is in the founding members list. You are acknowledged as someone who believed before the platform launched." },
  { icon: "🔑", title: "Early Access to Every Feature", desc: "Every new PEN2PRO product, tool, or module ships to Founders first — always, before public release." },
];

const BENEFITS = [
  "Lifetime access — zero recurring fees",
  "Everything in Elite — every feature, forever",
  "P2P Command Center (full business OS)",
  "P2P AI Voice Agent (call automation)",
  "Website Builder with AI templates",
  "CRM, pipeline, invoices, automations",
  "Funding readiness tools",
  "Credit foundation toolkit",
  "Branding and launch execution suite",
  "12-month 10M strategist framework",
  "Founder recognition — listed in app",
  "First access to every new feature",
  "Priority strategy and product access",
  "200 spots — no exceptions",
];

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      {/* URGENCY BANNER */}
      <div className="border-b border-yellow-500/20 bg-yellow-500/5 px-5 py-3 text-center">
        <p className="text-sm font-bold text-yellow-400">
          ⚠️ Only 200 Founders spots available. This offer closes permanently at launch or when sold out — whichever comes first.
        </p>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="h-[700px] w-[700px] rounded-full opacity-[0.08]"
            style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ borderColor: "rgba(212,160,23,0.5)", background: "rgba(212,160,23,0.12)", color: "#D4A017" }}
          >
            🔥 Founders Lifetime — 200 Spots Only
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight text-white md:text-6xl">
            Pay Once.<br />
            <span className="gradient-text">Own PEN2PRO Forever.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            The Founders Lifetime offer is for the first 200 people who commit to PEN2PRO before launch.
            You get every tool, every upgrade, every feature — for a single one-time payment. Forever.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=founders"
              className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14] btn-gold"
            >
              Claim Your Founders Spot →
            </Link>
            <Link
              to="/pricing"
              className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-yellow-500 hover:text-yellow-400"
            >
              Compare All Plans
            </Link>
          </div>

          {/* Price */}
          <div
            className="mx-auto mt-10 max-w-xs rounded-2xl border p-6"
            style={{ borderColor: "rgba(212,160,23,0.4)", background: "rgba(212,160,23,0.06)" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-yellow-500">One-Time Payment</p>
            <div className="mt-2 flex items-baseline justify-center gap-1">
              <span className="font-display text-5xl font-black text-white">$1,899</span>
            </div>
            <p className="mt-1 text-sm text-slate-500">vs $499/month Elite = lifetime savings after 4 months</p>
            <p className="mt-3 text-xs font-bold text-yellow-400">Limited to 200 founding members</p>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Full Founders Access</p>
            <h2 className="font-display text-4xl font-black text-white">Everything. For life.</h2>
            <p className="mt-3 text-slate-500">No feature gates. No upgrade walls. No future bills. Every tool PEN2PRO ever builds is yours.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FOUNDERS_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border p-6 transition-all"
                style={{ borderColor: "rgba(212,160,23,0.2)", background: "#080C14" }}
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 text-base font-bold text-white">{f.title}</h3>
                <p className="text-sm leading-6 text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS LIST */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Complete Access List</p>
            <h2 className="font-display text-4xl font-black text-white">Everything included — no exceptions</h2>
          </div>
          <div className="rounded-2xl border p-8" style={{ borderColor: "rgba(212,160,23,0.3)", background: "#0F1520" }}>
            <div className="grid gap-3 sm:grid-cols-2">
              {BENEFITS.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-[10px] font-black text-[#080C14]">✓</span>
                  <span className="text-sm font-semibold text-slate-300">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE WHY */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border p-8 md:p-12" style={{ borderColor: "rgba(212,160,23,0.25)" }}>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Why Founders Pricing Exists</p>
            <h2 className="mb-6 font-display text-3xl font-black text-white">
              The first 200 people who believe in PEN2PRO deserve to own it.
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                PEN2PRO was not built in a corporate boardroom. It was built from lived experience, discipline,
                rejection, and the refusal to give up. The people who join before launch aren't customers —
                they're co-builders of what this becomes.
              </p>
              <p>
                Founders pricing exists because early believers should be rewarded, not just thanked.
                You believed before the proof. You locked in before the launch. That deserves lifetime access,
                not a subscription.
              </p>
              <p className="font-bold text-white">
                This is the last time this price will ever exist. When the 200 spots are gone, the Founders
                Lifetime offer is permanently closed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Only 200 spots. No exceptions.</p>
          <h2 className="font-display text-4xl font-black text-white md:text-5xl">
            Become a Founding Member.<br />
            <span className="gradient-text">Own the platform forever.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-500">
            $1,899 one-time payment. Lifetime access. Everything included. 200 spots only.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=founders"
              className="rounded-2xl px-10 py-4 text-base font-black text-[#080C14] btn-gold"
            >
              Claim My Founders Spot →
            </Link>
            <Link
              to="/elite"
              className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-teal-400 hover:text-teal-400"
            >
              View Elite Instead
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-600">
            PEN2PRO does not guarantee income, funding approval, or credit results. Results depend on individual effort and market conditions.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
