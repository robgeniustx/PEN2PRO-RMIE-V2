import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const LAUNCH_DATE = new Date("2026-06-15T00:00:00Z");
const SPOTS_TOTAL = 200;

const EVERYTHING_INCLUDED = [
  "Lifetime PEN2PRO access — pay once, own it forever",
  "Everything in Elite (everything in Pro included)",
  "Full RMIE launch and scaling roadmap",
  "P2P Command Center — CRM, pipeline, leads, invoicing",
  "P2P AI Voice Agent — advanced automated outreach",
  "Website Builder — landing pages and full sites",
  "Automation workflows and AI agent command center",
  "Funding readiness tools and lender preparation",
  "Business credit foundation and tradeline guidance",
  "Branding, trademark, and IP foundation guidance",
  "Social media and content strategy engine",
  "12-month 10M strategist execution framework",
  "Founder recognition — listed as a PEN2PRO OG Founder",
  "Early access to every new feature before public launch",
  "Priority direct support — you skip every queue",
];

const FOUNDER_PERKS = [
  { icon: "🔑", title: "Own It Forever", body: "One payment. No monthly fees. Your account never expires and you get every future feature included." },
  { icon: "🏆", title: "Founder Recognition", body: "Your name is listed as a PEN2PRO OG Founder. You helped build this. That story is part of the platform." },
  { icon: "🚀", title: "First Access Always", body: "Every new module, tool, and AI upgrade hits your account before it goes to anyone else." },
  { icon: "💬", title: "Direct Access to Robert", body: "Founders get direct access to the founder for strategic questions, feedback, and guidance." },
];

function useCountdown() {
  const [t, setT] = useState({});
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
    <div className="min-w-[72px] rounded-xl border border-[#d4af37]/40 bg-[#15120a] px-4 py-3 text-center">
      <p className="font-display text-2xl font-black text-[#f7d675]">{String(val ?? 0).padStart(2, "0")}</p>
      <p className="text-[10px] font-bold uppercase tracking-widest text-[#a08020]">{label}</p>
    </div>
  );
}

export default function FoundersPage() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const t = useCountdown();

  async function handleCheckout() {
    setErr("");
    setLoading(true);
    try {
      const result = await createCheckoutSession({ tier: "founders" });
      if (result?.checkout_url) { window.location.href = result.checkout_url; return; }
      setErr(result?.error || "Checkout is not live yet. Claim your spot on the waitlist below.");
    } catch {
      setErr("Unable to start checkout. Claim your spot on the waitlist below.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-24 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.1),transparent_70%)]" />
        <div className="relative mx-auto max-w-3xl">
          <span className="mb-4 inline-block rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#f7d675]">
            Founders Lifetime — Only 200 Spots
          </span>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            Own PEN2PRO Forever.<br />Pay Once.
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            This is the most powerful offer PEN2PRO will ever make. Founders get lifetime access to the entire platform — every tool, every future feature, every upgrade — for a single one-time payment of $1,899. Only 200 spots. No exceptions.
          </p>

          {/* Countdown */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            <CountBox val={t.days} label="Days" />
            <CountBox val={t.hours} label="Hours" />
            <CountBox val={t.minutes} label="Min" />
            <CountBox val={t.seconds} label="Sec" />
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="rounded-xl bg-[#d4af37] px-8 py-3.5 text-sm font-black text-[#081226] shadow-[0_0_40px_rgba(212,175,55,0.4)] transition hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? "Starting Checkout…" : "Claim Founders Lifetime — $1,899"}
            </button>
            <Link to="/waitlist?tier=founders" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-bold text-slate-200 transition hover:border-slate-400 hover:text-white">
              Join Founders Waitlist
            </Link>
          </div>
          {err && <p className="mt-4 rounded-xl border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-3 text-sm text-[#f7d675]">{err}</p>}
          <p className="mt-4 text-xs text-slate-500">One-time payment. Lifetime access. {SPOTS_TOTAL} founders max.</p>
        </div>
      </section>

      {/* Exclusive Perks */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-center text-xs font-black uppercase tracking-[0.3em] text-[#f7d675]">Exclusive to Founders</p>
          <h2 className="mb-10 text-center font-display text-3xl font-black md:text-4xl">Why Founders is Different</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FOUNDER_PERKS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-[#d4af37]/30 bg-[#15120a] p-6 transition hover:-translate-y-1">
                <div className="mb-3 text-2xl">{p.icon}</div>
                <h3 className="mb-2 font-bold text-[#f7d675]">{p.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Everything Included */}
      <section className="border-y border-[#1A2D50] bg-[#0B1222] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-display text-3xl font-black">Everything You Get</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {EVERYTHING_INCLUDED.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-[#d4af37]/20 bg-[#15120a] px-4 py-3">
                <span className="mt-0.5 text-[#d4af37]">✓</span>
                <span className="text-sm text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#1A2D50] bg-[#0F1520] p-8 md:p-12">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#f7d675]">From the Founder</p>
          <blockquote className="mb-5 border-l-2 border-[#d4af37] pl-5 text-lg leading-relaxed text-slate-200 italic">
            "PEN2PRO was built for people who have been counted out — people who have ideas, drive, and the will to build something, but who keep hitting walls. The Founders offer is my way of saying: I believe in you enough to give you everything, at a price that is actually reachable."
          </blockquote>
          <p className="text-sm font-bold text-slate-400">— Robert Green, Founder of PEN2PRO</p>
          <Link to="/about" className="mt-5 inline-block text-sm font-bold text-[#2d9cff] hover:underline">
            Read the full founder story →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">200 Founders. That's It.</h2>
          <p className="mb-7 text-slate-300">When the spots are gone, this offer is gone. Monthly pricing goes live after launch. Founders lock in everything — forever.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button onClick={handleCheckout} disabled={loading} className="rounded-xl bg-[#d4af37] px-8 py-3 text-sm font-black text-[#081226] shadow-[0_0_35px_rgba(212,175,55,0.35)] transition hover:scale-[1.02] disabled:opacity-60">
              {loading ? "Starting…" : "Claim My Founders Spot"}
            </button>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3 text-sm font-bold text-slate-200 transition hover:border-slate-400">
              See All Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
