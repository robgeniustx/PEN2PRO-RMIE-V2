import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const LAUNCH_DATE = new Date("2026-06-15T00:00:00Z");

function useCountdown() {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const calc = () => {
      const diff = LAUNCH_DATE - Date.now();
      if (diff <= 0) return setT({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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
    <div className="min-w-[80px] rounded-2xl border border-[#d4af37]/40 bg-[#15120a] px-5 py-4 text-center">
      <p className="font-display text-3xl font-black text-[#d4af37]">
        {String(val ?? 0).padStart(2, "0")}
      </p>
      <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#9a7d20]">{label}</p>
    </div>
  );
}

const FOUNDERS_FEATURES = [
  { icon: "♾️", label: "Lifetime PEN2PRO Access", desc: "No monthly fees. One investment. Access for life." },
  { icon: "⚡", label: "Full RMIE Strategy Engine", desc: "The most advanced roadmap and monetization intelligence we have." },
  { icon: "🏢", label: "P2P Command Center", desc: "CRM, pipeline, calendar, quotes, invoices, and reputation management." },
  { icon: "🎙️", label: "P2P AI Voice Agent", desc: "Automated AI voice for lead follow-up, appointment booking, and sales calls." },
  { icon: "🌐", label: "Website Builder", desc: "Build and launch your business website — no tech skills needed." },
  { icon: "🤖", label: "Full Automation Suite", desc: "Workflows, triggers, follow-ups, and automation — all connected." },
  { icon: "💳", label: "Funding Readiness Tools", desc: "Personal credit prep, business credit sequence, and lender-ready documentation." },
  { icon: "📊", label: "12-Month 10M Strategist Framework", desc: "The full 12-month business growth plan designed to help you scale to seven figures." },
  { icon: "👑", label: "Founder Badge & Recognition", desc: "Permanent Legacy Founder status with priority access to new features." },
  { icon: "📞", label: "Priority Support", desc: "Jump the queue. Founders get first priority access to the team." },
];

const WHY_FOUNDERS = [
  {
    q: "Why only 200 spots?",
    a: "The Founders tier is not a discount — it's a co-builder relationship. We're accepting only 200 Founders who get lifetime access, priority support, and input on the platform roadmap. Once they're gone, this offer closes.",
  },
  {
    q: "What if subscriptions aren't live yet?",
    a: "Your Founders status is locked in the moment you claim it. When the platform fully launches, your account is upgraded automatically. You're not waiting — you're securing your spot before the price goes up.",
  },
  {
    q: "Is this a one-time payment?",
    a: "Yes. $1,899 one time. No monthly fees. No annual renewals. Full platform access for life — including every feature we build from this point forward.",
  },
  {
    q: "Who is this for?",
    a: "Founders is for serious builders who are committed to building income, not dabbling. If you're a veteran, returning citizen, entrepreneur, parent building a business, or someone who's been overlooked — and you're ready to go all-in — this is for you.",
  },
];

export default function FoundersPage() {
  const t = useCountdown();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCheckout() {
    setError("");
    setLoading(true);
    try {
      const result = await createCheckoutSession({ tier: "founders" });
      if (result?.checkout_url) {
        window.location.href = result.checkout_url;
        return;
      }
      setError(result?.error || "Checkout not configured yet. Join the waitlist to secure your spot.");
    } catch {
      setError("Unable to start checkout. Join the waitlist below to reserve your Founders spot.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">

      {/* Gold-tinted background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 -right-48 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.1) 0%, transparent 65%)", filter: "blur(40px)" }} />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,160,23,0.1) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ border: "1px solid rgba(212,175,55,0.4)", background: "rgba(212,175,55,0.08)", color: "#d4af37" }}>
            👑 Legacy Founder — Only 200 Spots
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Become a
            <br />
            <span style={{ background: "linear-gradient(90deg, #d4af37, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              PEN2PRO Legacy Founder.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            One investment. Lifetime access. Everything we build — forever. This isn't a subscription. This is founder-level positioning at the earliest stage of PEN2PRO's growth.
          </p>

          {/* Price callout */}
          <div className="mx-auto mt-8 max-w-sm rounded-2xl border p-6"
            style={{ borderColor: "rgba(212,175,55,0.4)", background: "#15120a" }}>
            <p className="text-xs font-bold uppercase tracking-widest text-[#9a7d20]">Founders Lifetime Price</p>
            <p className="mt-1 font-display text-5xl font-black text-[#d4af37]">$1,899</p>
            <p className="mt-1 text-sm text-slate-400">One-time payment. No monthly fees. Ever.</p>
            <p className="mt-3 rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/5 px-3 py-2 text-sm font-bold text-[#d4af37]">
              Only 200 spots available worldwide.
            </p>
          </div>

          {/* Countdown */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Official Launch In</p>
            <div className="flex gap-3">
              <CountBox val={t.days} label="Days" />
              <CountBox val={t.hours} label="Hours" />
              <CountBox val={t.minutes} label="Min" />
              <CountBox val={t.seconds} label="Sec" />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#081226] shadow-[0_0_35px_rgba(212,175,55,0.35)] transition hover:scale-[1.02] disabled:opacity-60"
              style={{ background: "#d4af37" }}
            >
              {loading ? "Starting Checkout…" : "Claim My Founders Spot →"}
            </button>
            <Link to="/waitlist?tier=founders"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Reserve My Spot (Waitlist)
            </Link>
          </div>

          {error && (
            <div className="mx-auto mt-4 max-w-md rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-4 py-3 text-sm text-yellow-200">
              {error}{" "}
              <Link to="/waitlist?tier=founders" className="font-bold underline">Join the waitlist →</Link>
            </div>
          )}
        </div>
      </section>

      {/* WHAT FOUNDERS GET */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#d4af37]">Everything Included</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Lifetime Access to the Full Platform
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Founders don't get a package. They get everything — every tool, every module, every feature we build — for life.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {FOUNDERS_FEATURES.map((f) => (
              <div key={f.label} className="flex gap-4 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
                <span className="mt-0.5 text-2xl shrink-0">{f.icon}</span>
                <div>
                  <p className="font-bold text-white">{f.label}</p>
                  <p className="mt-0.5 text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Who Founders Is For</div>
              <h2 className="mb-4 font-display text-3xl font-black">
                Built for Builders.<br />Not Browsers.
              </h2>
              <p className="mb-6 text-slate-400 leading-relaxed">
                The Legacy Founder offer isn't for people still deciding whether to build a business. It's for people who have already decided — who are serious about execution, income, and building something lasting.
              </p>
              <ul className="space-y-3">
                {[
                  "Entrepreneurs who want lifetime access before price goes up",
                  "Veterans ready to build civilian income streams",
                  "Returning citizens building second-chance businesses",
                  "Working-class builders with no room for monthly subscriptions",
                  "Side hustlers ready to make the side the main",
                  "Small business owners who want every tool under one roof",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 shrink-0 text-[#d4af37]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* The Offer Card */}
            <div className="rounded-2xl border p-8 text-center"
              style={{ borderColor: "rgba(212,175,55,0.5)", background: "linear-gradient(160deg, #13100a, #1c1606)" }}>
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#9a7d20]">Legacy Founder</p>
              <p className="font-display text-5xl font-black text-[#d4af37]">$1,899</p>
              <p className="mt-1 text-sm text-slate-400">One-time · No renewals · Lifetime</p>
              <div className="my-6 h-px bg-[#d4af37]/20" />
              <ul className="mb-6 space-y-2 text-sm text-slate-300 text-left">
                {["Lifetime PEN2PRO access", "Everything in Elite", "P2P Command Center", "P2P AI Voice Agent", "Website Builder", "12-month 10M framework", "Founder badge & priority support"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-[#d4af37]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full rounded-xl py-3.5 text-sm font-black text-[#081226] disabled:opacity-60 transition hover:scale-[1.02]"
                style={{ background: "#d4af37", boxShadow: "0 0 30px rgba(212,175,55,0.3)" }}
              >
                {loading ? "Starting Checkout…" : "Claim Founders Spot →"}
              </button>
              <p className="mt-3 text-xs text-slate-600">200 spots total · {Math.floor(Math.random() * 40 + 140)} remaining</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center font-display text-3xl font-black">Common Questions</h2>
          <div className="space-y-4">
            {WHY_FOUNDERS.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <p className="mb-2 font-bold text-white">{faq.q}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            200 Founders. That's It.
          </h2>
          <p className="mb-10 text-slate-400">
            When the spots are gone, the price goes up and lifetime access closes. Secure your spot now.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#081226] disabled:opacity-60 transition hover:scale-[1.02]"
              style={{ background: "#d4af37", boxShadow: "0 0 30px rgba(212,175,55,0.3)" }}
            >
              {loading ? "Starting Checkout…" : "Claim Founders Lifetime — $1,899 →"}
            </button>
            <Link to="/waitlist?tier=founders"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join Waitlist Instead
            </Link>
          </div>
          {error && (
            <p className="mx-auto mt-4 max-w-md text-sm text-yellow-300">{error}</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
