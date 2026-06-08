import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FOUNDERS_BENEFITS = [
  { icon: "♾️", title: "Lifetime Platform Access", body: "Pay once, access forever. Every feature, every upgrade, every tier — permanently unlocked for one flat price." },
  { icon: "🏆", title: "Founder Recognition", body: "Be recognized as an original PEN2PRO Founder. Your name is part of the origin story of this platform." },
  { icon: "🚀", title: "Early Access to Every Feature", body: "Founders get first access to every new module, tool, and integration before the public sees it." },
  { icon: "🧠", title: "Full RMIE Strategist Engine", body: "Every advanced strategy tool, financial projection, legal foundation guide, and done-with-you session — included forever." },
  { icon: "💼", title: "Full Command Center Access", body: "CRM, pipeline, automation, voice agent, website builder, marketing tools, content generation — all of it, all the time." },
  { icon: "💳", title: "Full Credit & Funding Suite", body: "Credit readiness, funding readiness, lender prep, tradeline guidance, and business credit foundation — permanently unlocked." },
  { icon: "📣", title: "Full Marketing & Outreach Stack", body: "30/60/90-day marketing plans, social media strategy, outreach campaigns, and brand voice development for life." },
  { icon: "⭐", title: "Priority Support — Always", body: "Founders never wait in line. Priority response for questions, roadmap reviews, and execution blockers — forever." },
  { icon: "🤝", title: "Vendor & Affiliate Resource Hub", body: "Full access to curated business resources, partner tools, funding partners, and affiliate income opportunities." },
  { icon: "📊", title: "10M Strategist Framework", body: "Access the full 12-month execution framework built to take your business from concept to $10M trajectory." },
];

const SPOTS_REMAINING = 200;

const BG_ORBS = (
  <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
    <div className="absolute -top-48 -left-48 h-[700px] w-[700px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(255,193,7,0.15) 0%, transparent 65%)", filter: "blur(40px)" }} />
    <div className="absolute top-[30%] -right-48 h-[600px] w-[600px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(255,138,0,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
    <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(13,71,161,0.25) 0%, transparent 65%)", filter: "blur(50px)" }} />
    <div className="absolute inset-0 opacity-[0.025]"
      style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
  </div>
);

export default function FoundersPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {BG_ORBS}
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,193,7,0.12) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/40 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            👑 Founders Circle · Only {SPOTS_REMAINING} Spots
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Become a
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #FFC107)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Legacy Founder.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            The Founders Circle is the original inner circle of PEN2PRO. Pay once. Access everything — forever. Be part of the story from the beginning.
          </p>

          {/* Price Card */}
          <div className="mx-auto mb-8 max-w-sm rounded-2xl border p-8"
            style={{ borderColor: "rgba(255,193,7,0.3)", background: "linear-gradient(135deg, rgba(255,138,0,0.1) 0%, rgba(13,71,161,0.1) 100%)" }}>
            <div className="mb-1 text-sm font-bold text-[#FF8A00] uppercase tracking-widest">One-Time Investment</div>
            <div className="mb-1 flex items-baseline justify-center gap-1">
              <span className="text-6xl font-black text-white">$1,899</span>
            </div>
            <div className="text-slate-400 text-sm">Lifetime access · No monthly fees · Ever.</div>
            <div className="mt-4 text-xs text-slate-500">
              vs. $499/month for Elite = pays for itself in under 4 months
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E]"
              style={{ background: "linear-gradient(135deg, #FF8A00, #FFC107)", boxShadow: "0 0 24px rgba(255,138,0,0.4)" }}>
              Claim My Founders Spot
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* ── URGENCY STRIP ── */}
      <section className="border-t border-b border-[#FF8A00]/20 bg-[#FF8A00]/5 px-5 py-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#FF8A00]">
            ⚡ Only {SPOTS_REMAINING} Founders Circle spots are available. Once they're gone, this offer closes permanently.
          </p>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">What You Get Forever</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything. For Life.
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Founders get the full platform — every feature, every tool, every upgrade — permanently. No renewals. No price increases. No tier limits.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {FOUNDERS_BENEFITS.map((f) => (
              <div key={f.title}
                className="rounded-2xl border p-6"
                style={{ borderColor: "rgba(255,193,7,0.15)", background: "linear-gradient(135deg, #0F1520 0%, #0D1428 100%)" }}>
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white text-lg">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Who This Is For</div>
          <h2 className="mb-8 text-center font-display text-3xl font-black">The Early Adopter. The True Believer.</h2>
          <div className="space-y-4">
            {[
              "You believe in PEN2PRO's mission and want to be part of the foundation it's built on.",
              "You're done paying monthly subscriptions and want one flat price for lifetime access.",
              "You want to lock in before prices go up and spots fill — not chase it after the fact.",
              "You're building something long-term and want a platform that will grow with you.",
              "You want the full platform — not a limited version — starting from day one.",
            ].map((text) => (
              <div key={text} className="flex items-start gap-4 rounded-2xl border border-[#1A2D50] bg-[#0F1520] px-6 py-4">
                <span className="mt-0.5 text-[#FF8A00] text-lg shrink-0">👑</span>
                <p className="text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER VALUE PROP ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl rounded-2xl border p-10"
          style={{ borderColor: "rgba(255,193,7,0.25)", background: "linear-gradient(135deg, rgba(255,138,0,0.08) 0%, rgba(13,71,161,0.08) 100%)" }}>
          <div className="mb-6 text-center text-4xl">🏆</div>
          <h3 className="mb-4 text-center font-display text-2xl font-black">The Math Is Simple</h3>
          <div className="space-y-4 text-slate-300">
            <div className="flex items-center justify-between border-b border-[#1A2D50] pb-4">
              <span>Elite Plan (monthly)</span>
              <span className="font-bold text-white">$499/mo</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#1A2D50] pb-4">
              <span>Elite for 12 months</span>
              <span className="font-bold text-white">$5,988</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#1A2D50] pb-4">
              <span>Elite for 5 years</span>
              <span className="font-bold text-white">$29,940</span>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="font-bold text-[#FF8A00]">Founders Circle — Lifetime</span>
              <span className="text-2xl font-black text-[#FF8A00]">$1,899</span>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            Founders access pays for itself in under 4 months compared to Elite monthly.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Only {SPOTS_REMAINING} Spots Available.
          </h2>
          <p className="mb-10 text-slate-400">
            Join the Founders Circle waitlist now. When payments launch, Founders get first access at the locked-in lifetime price.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E]"
              style={{ background: "linear-gradient(135deg, #FF8A00, #FFC107)", boxShadow: "0 0 24px rgba(255,138,0,0.4)" }}>
              Claim My Founders Spot
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Explore Elite Instead
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
