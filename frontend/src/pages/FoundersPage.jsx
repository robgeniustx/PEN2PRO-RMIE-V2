import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BENEFITS = [
  { icon: "♾️", title: "Lifetime Platform Access", body: "Pay once. Access everything PEN2PRO ever builds — including every future feature, tool, and upgrade — for life." },
  { icon: "⚡", title: "Everything in Elite", body: "Full RMIE blueprint, financial projections, legal foundation, funding readiness, vendor access, done-with-you guidance, and priority support." },
  { icon: "🚀", title: "12-Month 10M Strategist Framework", body: "A structured, 12-month growth framework built around reaching your first major revenue milestone — with execution steps at each stage." },
  { icon: "🎖️", title: "Founder Recognition", body: "Your name and business are recognized as a PEN2PRO Legacy Founder — the people who believed before the rest of the world caught on." },
  { icon: "🔑", title: "Early Access to All New Features", body: "Legacy Founders get first access to every new tool, module, and AI agent as they're released — before public rollout." },
  { icon: "🤝", title: "Founders-Only Community", body: "Exclusive access to the PEN2PRO Founders network — builders, strategists, and veterans building real businesses together." },
  { icon: "🏗️", title: "P2P Command Center + Voice Agent + Website Builder", body: "Full access to every PEN2PRO platform tool: CRM, command center, AI voice agent, website builder, and domain finder." },
  { icon: "💰", title: "Best Price You Will Ever See", body: "This is the lowest price PEN2PRO will ever offer for lifetime access. Once the 200 spots are gone, this offer is gone permanently." },
];

const SPOTS_TOTAL = 200;
const SPOTS_TAKEN = 47;
const SPOTS_LEFT = SPOTS_TOTAL - SPOTS_TAKEN;

export default function FoundersPage() {
  const pctFilled = Math.round((SPOTS_TAKEN / SPOTS_TOTAL) * 100);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(255,193,7,0.12) 0%, transparent 70%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 -left-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-bold text-yellow-400 uppercase tracking-widest">
            ⚡ Legacy Founder — $1,899 One-Time
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Believe Early.
            <br />
            <span style={{ background: "linear-gradient(90deg, #FFD700, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Access Everything. Forever.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Only 200 Legacy Founder spots will ever be offered at this price. Get lifetime access to PEN2PRO — every tool, every feature, every future release — for a single one-time payment.
          </p>

          {/* Spots meter */}
          <div className="mx-auto mt-8 max-w-sm">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold text-yellow-400">{SPOTS_LEFT} spots remaining</span>
              <span className="text-slate-500">{pctFilled}% filled</span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-[#1A2D50] overflow-hidden">
              <div className="h-full rounded-full transition-all duration-500"
                style={{ width: `${pctFilled}%`, background: "linear-gradient(90deg, #D4A017, #FF8A00)" }} />
            </div>
            <p className="mt-2 text-xs text-slate-500">Once 200 spots are gone, this offer closes permanently.</p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Claim My Founders Spot
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-8">
            <div className="mb-3 text-3xl text-center">🔥</div>
            <h2 className="mb-4 font-display text-2xl font-black text-center text-white">This Offer Is for Believers</h2>
            <p className="text-slate-300 leading-relaxed text-center max-w-2xl mx-auto">
              Legacy Founder access is for people who see where PEN2PRO is going and want to be part of it from the beginning. You are not just buying software. You are staking your claim as someone who believed when the platform was still being built. That decision will not cost you later — because later, this price will not exist.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-yellow-400">Founders Benefits</div>
          <h2 className="mb-14 text-center font-display text-3xl font-black md:text-4xl">
            Everything. Forever.
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <div key={b.title} className="rounded-2xl border border-yellow-500/20 bg-[#0F1520] p-6 hover:border-yellow-400/40 transition-colors">
                <div className="mb-3 text-3xl">{b.icon}</div>
                <h3 className="mb-2 font-bold text-white text-sm">{b.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-block rounded-2xl border border-yellow-500/30 bg-[#0F1520] px-8 py-6">
            <div className="text-5xl font-black text-white mb-1">$1,899</div>
            <div className="text-sm text-yellow-400 font-semibold">One-time. Lifetime access. No monthly fees ever.</div>
          </div>
          <h2 className="mb-4 font-display text-3xl font-black">Only {SPOTS_LEFT} Spots Left</h2>
          <p className="mb-8 text-slate-400">
            Secure your Legacy Founder spot now. Join the waitlist to hold your place and be first notified when checkout goes live.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=founders" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Claim My Founders Spot
            </Link>
            <Link to="/about" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              The Story Behind PEN2PRO
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
