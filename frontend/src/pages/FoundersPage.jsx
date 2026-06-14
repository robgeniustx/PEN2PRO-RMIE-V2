import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FOUNDERS_BENEFITS = [
  {
    icon: "♾️",
    title: "Lifetime Access",
    body: "One payment. No monthly fees — ever. Full access to PEN2PRO for as long as the platform exists, including every future upgrade.",
  },
  {
    icon: "🚀",
    title: "Early Access to Everything",
    body: "Founders get first access to every new feature before public release — RMIE upgrades, new agents, new tools, and new integrations.",
  },
  {
    icon: "👑",
    title: "Founder Recognition",
    body: "Your name is part of the founding story. Founder badge on your profile, listed in the Founders registry, and recognized as a building-block contributor.",
  },
  {
    icon: "💡",
    title: "Full RMIE Elite Access",
    body: "Everything in Elite — full blueprint, financial projections, company formation guidance, advanced CRM, done-with-you support, credit & funding tools.",
  },
  {
    icon: "🎯",
    title: "Priority Strategy Support",
    body: "Direct access to PEN2PRO strategy support. Not a chatbot — real feedback, priority queue, and guidance from the team.",
  },
  {
    icon: "📊",
    title: "Founding Member Dashboard",
    body: "A private Founders section inside your dashboard — Founders-only content, resources, and community access as the platform grows.",
  },
  {
    icon: "🛡️",
    title: "Price Lock — Forever",
    body: "Founding members pay $1,899 once. No matter what pricing looks like in 2027, 2028, or beyond — your access never expires and your price never changes.",
  },
  {
    icon: "🤝",
    title: "Affiliate & Referral Priority",
    body: "Founders get priority tier in the PEN2PRO affiliate program — higher commissions, first priority on referral bonuses, and direct tracking.",
  },
];

const SPOTS_TOTAL = 200;
const SPOTS_USED = 47;
const SPOTS_LEFT = SPOTS_TOTAL - SPOTS_USED;

function SpotsMeter() {
  const pct = Math.round((SPOTS_USED / SPOTS_TOTAL) * 100);
  return (
    <div className="rounded-2xl border border-[#D4A017]/30 bg-[#0F1520] p-6 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-4">Founders Spots Remaining</p>
      <div className="relative mb-3">
        <div className="h-3 rounded-full bg-[#1A2235] overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${pct}%`, background: "linear-gradient(90deg, #D4A017, #FF8A00)" }}
          />
        </div>
      </div>
      <div className="flex justify-between text-xs text-slate-500 mb-4">
        <span>{SPOTS_USED} claimed</span>
        <span>{SPOTS_LEFT} remaining</span>
      </div>
      <p className="text-3xl font-black text-white mb-1">{SPOTS_LEFT}</p>
      <p className="text-sm text-slate-400">of {SPOTS_TOTAL} total spots left</p>
    </div>
  );
}

export default function FoundersPage() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 left-1/4 h-[800px] w-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute top-[40%] -right-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.1) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-[10%] -left-32 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,160,23,0.08) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#D4A017] uppercase tracking-widest">
            👑 Legacy Founders — Limited to 200 Spots
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Build the Foundation.
            <br />
            <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Own It for Life.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-3">
            The Founders Lifetime is for people who believe in PEN2PRO before the world catches up. One payment. Lifetime access. You become part of the founding story.
          </p>
          <p className="mx-auto max-w-xl text-base text-[#D4A017] font-semibold mb-8">
            Only 200 spots exist — ever. When they're gone, they're gone.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders" className="rounded-xl px-8 py-4 text-sm font-black btn-gold text-[#0A0F1E]">
              Claim My Founders Spot — $1,899
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">Launch: June 15, 2026 · Founding members get first platform access</p>
        </div>
      </section>

      {/* Spots Meter + Pricing */}
      <section className="px-5 py-10">
        <div className="mx-auto max-w-2xl">
          <div className="grid gap-6 md:grid-cols-2">
            <SpotsMeter />
            <div className="rounded-2xl border-2 border-[#D4A017] bg-[#0F1520] p-6 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4A017] to-[#FF8A00]" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-2 mt-2">Founders Lifetime</p>
              <div className="flex items-baseline justify-center gap-1 mb-1">
                <span className="text-5xl font-black text-white">$1,899</span>
              </div>
              <p className="text-sm text-slate-500 line-through mb-1">$499/mo forever</p>
              <p className="text-sm text-[#D4A017] font-semibold mb-5">One payment. Lifetime access.</p>
              <Link to="/waitlist?tier=founders" className="btn-gold block rounded-xl py-3.5 text-sm font-black text-[#0A0F1E] w-full">
                Claim My Spot
              </Link>
              <p className="mt-3 text-xs text-slate-500">Equivalent to ~4 months of Elite · But forever</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">What Founders Get</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything. Forever.
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Founders don't just get Elite access. They get lifetime access, founder recognition, priority support, and a seat at the table as PEN2PRO grows.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {FOUNDERS_BENEFITS.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#D4A017]/20 bg-[#0F1520] p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full"
                  style={{ background: "linear-gradient(180deg, #D4A017, #FF8A00)" }} />
                <div className="pl-3">
                  <div className="mb-3 text-3xl">{f.icon}</div>
                  <h3 className="mb-2 font-bold text-white text-lg">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">This Is For You If...</div>
          <h2 className="mb-8 font-display text-3xl font-black md:text-4xl">
            You Believe in the Mission Before the World Does
          </h2>
          <div className="grid gap-4 text-left sm:grid-cols-2">
            {[
              "You're building a business and want the best tools available — forever",
              "You want to lock in your price before PEN2PRO scales and pricing changes",
              "You believe in the PEN2PRO mission and want to be part of the founding story",
              "You're an entrepreneur, veteran, returning citizen, or working-class builder ready to go all in",
              "You want lifetime access to every future feature — no recurring payment, no surprises",
              "You want priority strategy support and founder-level recognition on the platform",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-[#D4A017]/20 bg-[#0F1520] p-4">
                <span className="shrink-0 text-[#D4A017] font-black text-lg">✓</span>
                <p className="text-sm text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Robert's Message */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[#D4A017]/30 bg-[#0F1520] p-8 md:p-10">
            <div className="mb-8 flex items-center gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
                ⚡
              </div>
              <div>
                <p className="font-black text-white text-lg">Robert Earl Green Jr.</p>
                <p className="text-sm text-slate-400">Founder — PEN2PRO</p>
              </div>
            </div>
            <blockquote className="space-y-5 text-[1.05rem] leading-relaxed text-slate-300">
              <p>
                I did not create PEN2PRO from a perfect path. I created it from pressure, rejection, discipline, and the refusal to stay stuck.
              </p>
              <p>
                Every Founder who claims a spot is not just buying software. They are backing a mission that was built from the ground up by someone who needed it and couldn't find it.
              </p>
              <p className="font-bold text-white">
                If you believe that ideas should become income — regardless of where you started — this is your spot.
              </p>
              <p>
                Two hundred Founders. That's it. When they're claimed, the Founders tier closes and monthly pricing is all that remains.
              </p>
              <p className="text-[#D4A017] font-semibold">
                I'm grateful for every person who decides to build with us. — Robert
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-2xl font-black md:text-3xl">
            Common Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Is Founders Lifetime really lifetime?",
                a: "Yes. One payment of $1,899 gives you full access to PEN2PRO for as long as the platform exists — including all future features, upgrades, and plan additions.",
              },
              {
                q: "What happens after all 200 spots are claimed?",
                a: "The Founders tier closes permanently. Anyone who missed it will need to pay monthly (Pro at $249/mo or Elite at $499/mo). There will be no exceptions.",
              },
              {
                q: "When does the platform launch?",
                a: "PEN2PRO officially launches June 15, 2026. Founders get early access before the public launch.",
              },
              {
                q: "Is this a waitlist or an actual purchase?",
                a: "Submitting through the waitlist secures your place in line. Payment processing will be activated at launch. Early registrants get first access to complete their purchase.",
              },
              {
                q: "What if PEN2PRO adds new features after I join?",
                a: "Founders get all of them — forever. New agents, tools, integrations, and modules are included in your Founders lifetime access.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <p className="font-bold text-white mb-2">{q}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#D4A017] uppercase tracking-widest">
            {SPOTS_LEFT} spots remaining
          </div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Claim Your Founders Spot
          </h2>
          <p className="mb-10 text-slate-400">
            Two hundred Founders. One chance. Lock in lifetime access now — before the window closes.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Claim My Founders Spot
            </Link>
            <Link to="/about" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Learn the Story →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
