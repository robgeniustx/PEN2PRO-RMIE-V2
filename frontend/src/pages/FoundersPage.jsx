import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FOUNDER_PERKS = [
  { icon: "♾️", title: "Lifetime Platform Access", body: "Pay once. Use PEN2PRO forever. No monthly fees, no renewals, no lock-in. Full access to every feature we launch." },
  { icon: "🚀", title: "Everything in Elite", body: "Full roadmaps, progress tracking, branding, export, outreach, credit/funding readiness, advanced strategy, financial projections, and done-with-you guidance." },
  { icon: "🎖️", title: "Founder Badge & Recognition", body: "Be permanently recognized as a PEN2PRO Founding Member. Your name and story become part of the platform's history." },
  { icon: "⚡", title: "Early Access to All New Features", body: "Every new tool, AI upgrade, module, and feature that ships — Founders get it first, before anyone else, for life." },
  { icon: "📋", title: "Founder-Level Strategy Roadmap", body: "An exclusive AI-powered roadmap tier only available to Founders — deeper analysis, longer time horizons, higher-ceiling output." },
  { icon: "🤝", title: "12-Month Strategist Framework", body: "A structured 12-month business growth framework built into your dashboard — month-by-month execution with milestones and strategy shifts." },
  { icon: "⚡", title: "P2P Command Center Access", body: "Full access to the P2P Command Center — CRM, pipeline, calendar, automations, reputation management, invoices, and more." },
  { icon: "🎤", title: "P2P AI Voice Agent", body: "Advanced AI voice agent for call handling, appointment booking, lead qualification, and follow-up — included for life." },
  { icon: "🌐", title: "Website Builder + Unlimited Domains", body: "Build and host unlimited websites, funnels, and landing pages. Included with your Founders lifetime access." },
];

const SPOTS_TOTAL = 200;
const SPOTS_TAKEN = 47;

export default function FoundersPage() {
  const pct = Math.round((SPOTS_TAKEN / SPOTS_TOTAL) * 100);

  return (
    <div className="min-h-screen bg-[#080C14] text-white overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 h-[800px] w-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.14) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.10) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="relative px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A017] bg-[#D4A017]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#D4A017]">
            🏆 Founders Lifetime — Only 200 Spots
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Own PEN2PRO.
            <br />
            <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Pay Once. Build Forever.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            The Founders Lifetime offer gives early believers everything PEN2PRO has and ever will build — for a single one-time investment. No subscriptions. No limits. No waiting.
          </p>

          {/* Scarcity bar */}
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-[#D4A017]/30 bg-[#0F1520] p-5">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="font-bold text-white">{SPOTS_TOTAL - SPOTS_TAKEN} spots remaining</span>
              <span className="text-[#D4A017] font-bold">{SPOTS_TAKEN} of {SPOTS_TOTAL} claimed</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-[#1A2235]">
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${pct}%`, background: "linear-gradient(90deg, #D4A017, #FF8A00)" }}
              />
            </div>
            <p className="mt-3 text-xs text-slate-500 text-center">When 200 spots are claimed, this offer closes permanently.</p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders" className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14] btn-gold">
              Claim Your Founder Spot →
            </Link>
            <Link to="/pricing" className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
          <p className="mt-3 text-sm text-[#D4A017] font-semibold">$1,899 one-time · Lifetime access · 200 spots only</p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">Founders Lifetime Includes</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            The Most Complete PEN2PRO Experience
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Founders get every current feature and every future feature — permanently. Voice agent, website builder, command center, advanced RMIE, financial projections, and more.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {FOUNDER_PERKS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-[#D4A017]/25 bg-[#0F1520] p-6 hover:border-[#D4A017]/60 transition-colors">
                <div className="mb-3 text-3xl">{p.icon}</div>
                <h3 className="mb-2 font-bold text-white">{p.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FOUNDERS */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Why Founders?</div>
          <h2 className="mb-8 text-center font-display text-3xl font-black">This Is Not Just a Deal. This Is a Decision.</h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>PEN2PRO was built for people who are serious about execution. The Founders offer exists because the people who believe in the platform early — before it reaches its full potential — deserve to be recognized, rewarded, and included for life.</p>
            <p className="font-semibold text-white">$249/month for Pro is $2,988 per year. $499/month for Elite is $5,988 per year.</p>
            <p>Founders Lifetime is <span className="text-[#D4A017] font-bold">$1,899 once</span> — less than 8 months of Pro — and you never pay again. Everything we build from this point forward is yours.</p>
            <p>This offer closes when the 200 spots are claimed. It will not be reopened.</p>
          </div>
        </div>
      </section>

      {/* FOUNDER PLEDGE */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#D4A017]/30 bg-[#0F1520] p-8 text-center">
          <div className="mb-4 text-4xl">🤝</div>
          <h3 className="mb-4 font-display text-2xl font-black text-white">The PEN2PRO Founder Pledge</h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            As a Founder, you are not a customer. You are a partner in this mission. PEN2PRO commits to giving every Founder priority access, permanent platform access, and recognition in everything we build. When this platform reaches the people it was designed to help — the overlooked, the underestimated, the counted out — you were part of making that happen.
          </p>
          <p className="font-bold text-[#D4A017]">— Robert Earl Green Jr., Founder</p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            {SPOTS_TOTAL - SPOTS_TAKEN} Spots Left.
          </h2>
          <p className="mb-10 text-slate-400">
            Join the Founders waitlist now. When payments go live, Founders spots will be claimed in order. Reserve your place today.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders" className="rounded-xl px-8 py-4 text-sm font-black text-[#080C14] btn-gold">
              Claim Founders Lifetime
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#00C9B1]/40 px-8 py-4 text-sm font-semibold text-[#00C9B1] hover:text-white transition-colors">
              See Elite Plan Instead
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2235] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
