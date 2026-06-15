import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const LAUNCH_DATE = new Date("2026-06-15T00:00:00Z");
const TOTAL_SPOTS = 200;

const FOUNDERS_FEATURES = [
  { icon: "♾️", title: "Lifetime PEN2PRO Access", body: "Pay once. Use forever. Every feature, every update, every tool — unlocked for life. No monthly fees ever." },
  { icon: "🗺️", title: "Everything in Elite", body: "Full RMIE blueprint, advanced strategy engine, financial projections, legal guidance, vendor network, funding readiness, and priority support." },
  { icon: "🏗️", title: "P2P Command Center", body: "The full business operations platform — CRM, pipeline, estimates, invoices, calendar, reputation management, and reporting." },
  { icon: "🎙️", title: "P2P AI Voice Agent", body: "Advanced AI voice agent for outreach, follow-ups, appointment setting, and customer communication automation." },
  { icon: "🌐", title: "Website Builder", body: "Build and launch a professional business website without a developer. Templates, custom domains, and AI-assisted content included." },
  { icon: "⚡", title: "CRM & Automation Tools", body: "Full automation suite — workflows, drip sequences, lead scoring, and smart follow-ups to run your business on autopilot." },
  { icon: "💳", title: "Funding Readiness Tools", body: "Complete funding preparation — lender documents, business credit roadmap, tradeline strategy, and funding partner network access." },
  { icon: "🎯", title: "12-Month 10M Strategist Framework", body: "A structured 12-month roadmap to build toward seven-figure thinking — strategy, systems, mindset, and execution milestones." },
  { icon: "🏆", title: "Founders Recognition", body: "Permanent Founders badge, early access to every new feature, input on product direction, and recognition in the PEN2PRO community." },
  { icon: "⭐", title: "Priority Access — Forever", body: "Founders always move first. First to new tools, first to new strategies, first in support queue. You built this with us." },
];

const WHY_FOUNDERS = [
  { title: "You Believe in the Mission", body: "You're not just buying software. You're joining the movement early — when it matters most." },
  { title: "You Want Lifetime Value", body: "At $249/mo Pro, Founders pays for itself in under 8 months. Everything after that is free." },
  { title: "You Want to Be First", body: "200 spots. That's it. Early adopters shape the product, get the best deal, and move ahead of everyone else." },
  { title: "You're Done Waiting", body: "Every month you're not building is a month your competitors are. Founders gives you the full toolkit today." },
];

function useCountdown() {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const calc = () => {
      const diff = LAUNCH_DATE - Date.now();
      if (diff <= 0) { setT({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setT({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function CountBox({ val, label }) {
  return (
    <div className="countdown-box flex flex-col items-center rounded-2xl min-w-[80px] px-5 py-4 border border-[#d4af37]/30">
      <span className="font-display text-3xl font-black tabular-nums leading-none" style={{ color: "#d4af37" }}>
        {String(val ?? 0).padStart(2, "0")}
      </span>
      <span className="mt-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500">{label}</span>
    </div>
  );
}

export default function FoundersPage() {
  const t = useCountdown();
  const [loading, setLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");

  const handleClaim = async () => {
    setCheckoutError("");
    setLoading(true);
    try {
      const result = await createCheckoutSession({ tier: "founders" });
      if (result?.checkout_url) {
        window.location.href = result.checkout_url;
        return;
      }
      setCheckoutError(result?.error || "Checkout is not live yet.");
    } catch {
      setCheckoutError("Unable to start checkout. Join the Founders waitlist to reserve your spot.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">

      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -left-32 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.16) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[35%] -right-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.10) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 pt-24 pb-16 text-center">
        <div className="mx-auto max-w-3xl">
          {/* Urgency badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-1.5 text-xs font-bold text-[#d4af37] uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-[#d4af37] animate-pulse" />
            Only {TOTAL_SPOTS} Founders Spots — Lifetime Access
          </div>

          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Become a PEN2PRO
            <br />
            <span style={{ background: "linear-gradient(90deg, #d4af37, #f7d675, #d4af37)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Legacy Founder.
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            One payment. Lifetime access. You get every feature, every update, and every tool PEN2PRO releases —
            forever. No monthly fees. No upgrades. Just permanent access to the full platform.
          </p>

          {/* Price */}
          <div className="mb-8 inline-block rounded-2xl border border-[#d4af37]/40 bg-[#15120a] px-10 py-6 shadow-[0_0_60px_rgba(212,175,55,0.2)]">
            <p className="text-5xl font-black text-white">
              $1,899<span className="text-xl text-slate-400 font-semibold"> for life</span>
            </p>
            <p className="mt-1 text-sm text-[#d4af37] font-semibold">Pay once. Own it forever.</p>
            <p className="mt-1 text-xs text-slate-500">vs. $249/mo Pro (pays off in under 8 months)</p>
          </div>

          {/* Countdown */}
          <div className="mb-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Launch Countdown</p>
            <div className="flex justify-center gap-3">
              <CountBox val={t.days} label="Days" />
              <CountBox val={t.hours} label="Hours" />
              <CountBox val={t.minutes} label="Min" />
              <CountBox val={t.seconds} label="Sec" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleClaim}
              disabled={loading}
              className="rounded-xl px-10 py-4 text-base font-black text-[#081226] shadow-[0_0_40px_rgba(212,175,55,0.45)] transition hover:scale-[1.02] disabled:opacity-60"
              style={{ background: "linear-gradient(135deg, #d4af37, #f7d675, #d4af37)" }}
            >
              {loading ? "Starting Checkout…" : "Claim Founders Lifetime — $1,899"}
            </button>
            <Link
              to="/waitlist?tier=founders"
              className="rounded-xl border border-[#d4af37]/30 px-8 py-4 text-sm font-semibold text-[#d4af37] hover:text-white hover:border-[#d4af37] transition-colors"
            >
              Reserve My Founders Spot
            </Link>
          </div>

          {checkoutError && (
            <div className="mt-4 mx-auto max-w-md rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-4 py-3 text-sm text-yellow-200">
              {checkoutError}{" "}
              <Link to="/waitlist?tier=founders" className="underline text-yellow-300 font-semibold">
                Reserve your spot on the waitlist →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* What's included */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#d4af37]">Founders Includes Everything</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            The Complete PEN2PRO Platform — Forever
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            Founders isn't just a tier. It's a permanent ownership stake in the full platform.
            Every feature listed below is yours — unlocked permanently on day one.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {FOUNDERS_FEATURES.map((f) => (
              <div key={f.title} className="flex gap-4 rounded-2xl border border-[#d4af37]/20 bg-[#15120a] p-6 transition hover:border-[#d4af37]/40">
                <div className="text-2xl shrink-0 mt-0.5">{f.icon}</div>
                <div>
                  <h3 className="mb-1.5 font-bold text-white">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Founders */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Why Founders</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">
            The Founders Decision Is Simple
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {WHY_FOUNDERS.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-2 text-2xl">✦</div>
                <h3 className="mb-2 font-bold text-white text-lg">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency section */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-[#d4af37]/30 bg-[#15120a] p-10 text-center shadow-[0_0_60px_rgba(212,175,55,0.12)]">
            <div className="mb-3 text-4xl">🔒</div>
            <h3 className="mb-4 font-display text-2xl font-black">Only {TOTAL_SPOTS} Founders Spots. Ever.</h3>
            <p className="mb-6 text-slate-400 max-w-xl mx-auto leading-relaxed">
              When the 200 spots are gone, the Founders offer is closed permanently. There is no waitlist for Founders once
              the limit is hit. No exceptions. This is the only window — and it's closing.
            </p>
            <p className="text-sm font-bold text-[#d4af37]">
              Every day you wait is a day closer to the spot disappearing.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black">Own It. Forever.</h2>
          <p className="mb-8 text-slate-400 text-lg">
            One payment. Lifetime access. You're not a subscriber — you're a Founder.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleClaim}
              disabled={loading}
              className="rounded-xl px-10 py-4 text-sm font-black text-[#081226] shadow-[0_0_40px_rgba(212,175,55,0.4)] transition hover:scale-[1.02] disabled:opacity-60"
              style={{ background: "linear-gradient(135deg, #d4af37, #f7d675, #d4af37)" }}
            >
              {loading ? "…" : "Claim Founders Lifetime — $1,899"}
            </button>
            <Link
              to="/waitlist?tier=founders"
              className="rounded-xl border border-[#d4af37]/30 px-8 py-4 text-sm font-semibold text-[#d4af37] hover:text-white transition-colors"
            >
              Reserve My Spot
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            <Link to="/pricing" className="hover:text-slate-300 transition-colors">View all plans</Link>
            {" · "}
            <Link to="/elite" className="hover:text-slate-300 transition-colors">Compare Elite</Link>
            {" · "}
            <Link to="/pro" className="hover:text-slate-300 transition-colors">Compare Pro</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
