import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SPOTS_TOTAL = 200;
const SPOTS_CLAIMED = 47;

const BENEFITS = [
  { icon: "⚡", title: "Lifetime PEN2PRO Access", body: "One payment. Full access. No monthly fees. Ever. This is the only offer like this on the platform." },
  { icon: "🗺️", title: "Everything in Elite", body: "Full RMIE blueprint, progress tracking, financial projections, company formation guidance, advanced marketing strategy, vendor resources, and priority support." },
  { icon: "🤖", title: "RMIE Launch & Scaling Roadmap", body: "A custom 12-month business roadmap built for founders — not just a starter plan. Built to get you from idea to revenue to scale." },
  { icon: "📣", title: "P2P Command Center Access", body: "Full access to the PEN2PRO Command Center — CRM, pipeline management, lead inbox, automations, calendar, invoicing, and more." },
  { icon: "🎙️", title: "P2P AI Voice Agent", body: "AI-powered voice agent that can handle inbound calls, outreach scripts, appointment setting, and customer follow-up for your business." },
  { icon: "🌐", title: "Website Builder", body: "Build and launch a professional business website without code. Templates, domains, and publish-ready designs included." },
  { icon: "🏦", title: "Funding Readiness Tools", body: "Business credit roadmap, personal credit optimization, lender preparation checklist, tradeline guidance, and funding readiness score." },
  { icon: "🏛️", title: "Branding & Launch Execution", body: "Brand name ideas, logo direction, tagline development, and a launch execution plan to go live with confidence." },
  { icon: "🎖️", title: "Founder Recognition", body: "Be listed as one of the original PEN2PRO Founders. Early adopters who helped build this platform from the ground up." },
  { icon: "🔔", title: "First Access to All New Features", body: "Every tool, feature, and upgrade we add to PEN2PRO — Founders get it first. No waiting for general release." },
];

const TESTIMONIAL_PLACEHOLDER = [
  { quote: "I needed structure, not motivation. PEN2PRO gave me both a roadmap and a reason to believe in myself again.", name: "D. Williams", role: "Returning Citizen & Small Business Owner" },
  { quote: "As a veteran, I had skills but no blueprint. PEN2PRO helped me turn 20 years of experience into an actual business plan.", name: "M. Torres", role: "Service-Connected Veteran Entrepreneur" },
];

const BG_ORBS = (
  <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
    <div className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(212,160,23,0.20) 0%, transparent 65%)", filter: "blur(40px)" }} />
    <div className="absolute top-[35%] -right-48 h-[500px] w-[500px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(30,136,229,0.14) 0%, transparent 65%)", filter: "blur(50px)" }} />
    <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(255,138,0,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
    <div className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
  </div>
);

const spotsLeft = SPOTS_TOTAL - SPOTS_CLAIMED;
const pctClaimed = Math.round((SPOTS_CLAIMED / SPOTS_TOTAL) * 100);

export default function FoundersPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {BG_ORBS}
      <Navbar />

      {/* ── SCARCITY BANNER ── */}
      <div className="border-b border-[#D4A017]/20 bg-[#D4A017]/10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 px-5 py-3 text-center sm:flex-row sm:justify-between">
          <p className="text-sm font-bold text-[#D4A017]">
            🔒 Only {SPOTS_TOTAL} Founders Lifetime spots available — {spotsLeft} remaining
          </p>
          <div className="flex items-center gap-3">
            <div className="h-2 w-32 overflow-hidden rounded-full bg-[#1A2D50]">
              <div className="h-full rounded-full bg-[#D4A017]" style={{ width: `${pctClaimed}%` }} />
            </div>
            <span className="text-xs text-slate-400">{pctClaimed}% claimed</span>
          </div>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,160,23,0.10) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#D4A017] uppercase tracking-widest">
            🎖️ Founders Lifetime Access
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Be a Founding Member.
            <br />
            <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Lock in Lifetime Access.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 leading-relaxed">
            The Founders Lifetime offer is the only time you'll get complete, permanent access to PEN2PRO — every tier, every feature, every update — for a single one-time investment. This is not a recurring subscription. This is a legacy position.
          </p>

          {/* Price card */}
          <div className="mx-auto mb-8 max-w-sm rounded-2xl border border-[#D4A017]/30 bg-[#0F1520] p-8">
            <p className="text-sm text-slate-500 line-through mb-1">$3,000+ value</p>
            <p className="font-display text-5xl font-black text-white">$1,899</p>
            <p className="text-sm text-[#D4A017] font-semibold mt-1">One-time · Lifetime access · No monthly fees</p>
            <div className="mt-6 flex flex-col gap-3">
              <Link to="/waitlist?tier=founders"
                className="block rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold text-center">
                Claim Your Founders Spot
              </Link>
              <Link to="/pricing"
                className="block rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-center text-slate-300 hover:text-white transition-colors">
                Compare All Plans
              </Link>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            Payments processed securely · {spotsLeft} of {SPOTS_TOTAL} spots remaining · Offer closes when sold out
          </p>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">What Founders Get</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything. Forever.
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Founders members get permanent access to every feature across all tiers — Free, Pro, and Elite — plus first access to every new tool we build.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {BENEFITS.map((b) => (
              <div key={b.title}
                className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 hover:border-[#D4A017]/40 transition-colors">
                <div className="mb-3 text-3xl">{b.icon}</div>
                <h3 className="mb-2 font-bold text-white">{b.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER STORY TIE-IN ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[#D4A017]/20 bg-[#0F1520] p-8 md:p-12">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
                ⚡
              </div>
              <div>
                <p className="font-black text-white">Robert Earl Green Jr.</p>
                <p className="text-sm text-slate-400">Founder — PEN2PRO · Service-Connected Veteran</p>
              </div>
            </div>
            <blockquote className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                "I didn't build PEN2PRO from a perfect path. I built it from pressure, rejection, and the refusal to stay stuck. After coming home from prison, I tried to rebuild the traditional way. Job offers came — then background checks followed, and the offers were rescinded.
              </p>
              <p>
                After a day of moping, I picked my head up and took off running. If the system wouldn't give me a path, I would build one.
              </p>
              <p className="text-white font-semibold">
                PEN2PRO is for the person who is tired of waiting for permission. The Founders offer is for the person who is ready to build something that lasts."
              </p>
            </blockquote>
            <div className="mt-8">
              <Link to="/about" className="text-sm font-semibold text-[#1E88E5] hover:text-white transition-colors">
                Read the full story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Early Community</div>
          <div className="grid gap-6 md:grid-cols-2">
            {TESTIMONIAL_PLACEHOLDER.map((t) => (
              <div key={t.name} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8">
                <p className="mb-6 text-slate-300 leading-relaxed italic">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-2 text-sm font-bold text-[#D4A017]">⚠️ {spotsLeft} spots remaining</div>
          <h2 className="mb-4 font-display text-3xl font-black">
            This Offer Won't Last Long.
          </h2>
          <p className="mb-10 text-slate-400">
            When the {SPOTS_TOTAL} Founders spots are gone, they're gone. Monthly plans will be the only option. This is your chance to lock in lifetime access at the founding price.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders"
              className="rounded-xl px-10 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              Claim Your Founders Spot — $1,899 Lifetime
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-500">
            <span>✓ No monthly fees</span>
            <span>✓ All future features included</span>
            <span>✓ Founder recognition</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
