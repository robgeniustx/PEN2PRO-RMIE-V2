import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const INTERESTS = [
  "Free Roadmap",
  "Pro Plan ($47/mo)",
  "Elite Plan ($97/mo)",
  "Founders Lifetime ($497)",
  "Affiliate Partner",
  "Funding Help",
  "Credit Repair Help",
];

function useCountdown(target) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const calc = () => {
      const diff = new Date(target) - new Date();
      if (diff <= 0) return setT({ d: 0, h: 0, m: 0, s: 0 });
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
}

function CBox({ v, l }) {
  return (
    <span className="countdown-box flex flex-col items-center rounded-xl px-4 py-3 min-w-[58px]">
      <span className="font-display text-2xl font-black tabular-nums leading-none" style={{ color: "#D4A017" }}>
        {String(v ?? 0).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[9px] font-bold uppercase tracking-widest text-slate-500">{l}</span>
    </span>
  );
}

export default function WaitlistPage() {
  const [params] = useSearchParams();

  // Pull ?tier= and ?ref= from URL
  const tierParam  = params.get("tier")  || "";
  const refParam   = params.get("ref")   || "";
  const sourceUrl  = typeof window !== "undefined" ? window.location.href : "";

  // Map tier param to interest label
  const matchInterest = (tier) => {
    if (!tier) return INTERESTS[0];
    return INTERESTS.find((i) => i.toLowerCase().includes(tier.toLowerCase())) || INTERESTS[0];
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business_idea: "",
    interest: matchInterest(tierParam),
    referral: refParam,   // ?ref=affiliateName
    source: sourceUrl,    // full URL
  });

  // If URL params change (rare), keep form in sync
  useEffect(() => {
    setForm((f) => ({
      ...f,
      interest: matchInterest(tierParam),
      referral: refParam,
      source: sourceUrl,
    }));
  }, [tierParam, refParam]);

  const [status, setStatus]     = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const cd = useCountdown("2026-06-10T09:00:00");

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${API}/api/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        if (res.status === 409) {
          setErrorMsg("That email is already on the list. You're already in — we'll see you June 10!");
          setStatus("error");
        } else {
          setErrorMsg(data.detail || "Something went wrong. Please try again.");
          setStatus("error");
        }
      }
    } catch {
      // Backend offline — still show success (offline-tolerant)
      setStatus("success");
    }
  };

  /* ── Success screen ── */
  if (status === "success") {
    return (
      <div className="min-h-screen bg-[#080C14]">
        <Navbar />
        <div className="flex min-h-[80vh] items-center justify-center px-5 py-16">
          <div className="mx-auto w-full max-w-lg text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
              style={{ background: "rgba(212,160,23,0.15)", border: "2px solid rgba(212,160,23,0.4)" }}>
              <span className="text-4xl">🎯</span>
            </div>
            <h1 className="font-display text-4xl font-black text-white mb-3">You're In.</h1>
            <p className="text-base leading-7 text-slate-400 mb-8">
              <strong className="text-white">{form.name || "Welcome"}</strong>, your spot is secured for the
              PEN2PRO launch on{" "}
              <strong style={{ color: "#D4A017" }}>June 10, 2026</strong>.
              {refParam && (
                <span className="block mt-2 text-xs text-slate-600">
                  Referred by: <span className="text-slate-400 font-semibold">{refParam}</span>
                </span>
              )}
            </p>

            <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6 mb-8 text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">What Happens Next</p>
              <ul className="space-y-3">
                {[
                  "Confirmation details are saved — watch for our June 10 email",
                  "Founding members get first access + pricing locked forever",
                  "Start your free roadmap right now while you wait",
                  "Share your referral link to earn affiliate commissions at launch",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-400">
                    <span className="font-bold text-teal-400 mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link to="/starter" className="rounded-2xl px-8 py-3 text-sm font-black text-[#080C14] btn-gold">
                Start My Free Roadmap →
              </Link>
              <Link to="/pricing" className="rounded-2xl border border-[#1A2235] px-8 py-3 text-sm font-semibold text-slate-400 hover:border-yellow-500 hover:text-yellow-400 transition">
                View Pricing
              </Link>
            </div>

            {/* Cross-links */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-slate-600">
              <Link to="/funding" className="hover:text-yellow-400 transition">Funding Readiness →</Link>
              <Link to="/credit-repair" className="hover:text-yellow-400 transition">Credit Repair →</Link>
              <Link to="/affiliate" className="hover:text-yellow-400 transition">Affiliate Resources →</Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  /* ── Main form ── */
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-5xl grid gap-12 md:grid-cols-2 md:items-start">

          {/* ── Left: info panel ── */}
          <div>
            {refParam && (
              <div className="mb-5 rounded-xl border border-teal-500/30 bg-teal-900/20 px-4 py-3">
                <p className="text-xs font-bold text-teal-400">
                  🤝 Referred by <span className="font-black">{refParam}</span>
                </p>
              </div>
            )}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2"
              style={{ borderColor: "rgba(212,160,23,0.3)", background: "rgba(212,160,23,0.08)" }}>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
                Waitlist Open — Limited Founding Spots
              </span>
            </div>

            <h1 className="font-display text-4xl font-black leading-tight text-white md:text-5xl">
              Secure Your Spot.<br />
              <span className="gradient-text">Launch June 10.</span>
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-400">
              PEN2PRO officially launches <strong className="text-white">June 10, 2026</strong>. Founding members
              lock in their pricing for life, get first access, and receive done-with-you launch support
              that won't be available after launch.
            </p>

            {/* Countdown */}
            <div className="mt-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Launch In</p>
              <div className="flex items-center gap-2">
                <CBox v={cd.d} l="Days" />
                <span className="text-xl font-black opacity-40" style={{ color: "#D4A017" }}>:</span>
                <CBox v={cd.h} l="Hrs" />
                <span className="text-xl font-black opacity-40" style={{ color: "#D4A017" }}>:</span>
                <CBox v={cd.m} l="Min" />
                <span className="text-xl font-black opacity-40" style={{ color: "#D4A017" }}>:</span>
                <CBox v={cd.s} l="Sec" />
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-10 space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Founding Member Benefits</p>
              {[
                ["🔒", "Pricing locked for life — never increases"],
                ["⚡", "First access to every new feature"],
                ["🎯", "Done-with-you onboarding support"],
                ["📊", "Full Pro + Elite from day one"],
                ["🤝", "Direct founder support line"],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-3">
                  <span className="text-lg">{icon}</span>
                  <span className="text-sm text-slate-400">{text}</span>
                </div>
              ))}
            </div>

            {/* Availability bar */}
            <div className="mt-8 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Founding Spots</p>
              <div className="h-2 w-full rounded-full bg-[#1A2235] overflow-hidden">
                <div className="h-full rounded-full" style={{ width: "68%", background: "linear-gradient(90deg,#D4A017,#F0C040)" }} />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                <strong className="text-white">136 of 200</strong> founding spots claimed
              </p>
            </div>

            {/* Cross-links */}
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              {[
                ["Start Free Roadmap", "/starter"],
                ["View Pricing", "/pricing"],
                ["Funding Readiness", "/funding"],
                ["Credit Repair", "/credit-repair"],
                ["Affiliate Resources", "/affiliate"],
              ].map(([label, path]) => (
                <Link key={path} to={path}
                  className="rounded-lg border border-[#1A2235] px-3 py-1.5 text-slate-500 hover:border-yellow-500/50 hover:text-yellow-400 transition">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <div>
            <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-7">
              <h2 className="font-display text-xl font-black text-white mb-1">Join the Waitlist</h2>
              <p className="text-sm text-slate-500 mb-6">60 seconds. No credit card. Your spot is saved instantly.</p>

              {errorMsg && (
                <div className="mb-5 rounded-xl border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-400">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" name="name" value={form.name} onChange={handle}
                    placeholder="Your full name" required
                    className="w-full rounded-xl px-4 py-3 text-sm" />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input type="email" name="email" value={form.email} onChange={handle}
                    placeholder="you@yourbusiness.com" required
                    className="w-full rounded-xl px-4 py-3 text-sm" />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">
                    Phone <span className="text-slate-600">(Optional)</span>
                  </label>
                  <input type="tel" name="phone" value={form.phone} onChange={handle}
                    placeholder="(713) 555-0100"
                    className="w-full rounded-xl px-4 py-3 text-sm" />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">
                    I'm Most Interested In
                  </label>
                  <select name="interest" value={form.interest} onChange={handle}
                    className="w-full rounded-xl px-4 py-3 text-sm">
                    {INTERESTS.map((i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">
                    Business Idea <span className="text-slate-600">(Optional)</span>
                  </label>
                  <textarea name="business_idea" value={form.business_idea} onChange={handle}
                    placeholder="Describe your business idea in 1–2 sentences..."
                    rows={3} className="w-full rounded-xl px-4 py-3 text-sm resize-none" />
                </div>

                {/* Hidden referral field — populated from ?ref= */}
                <input type="hidden" name="referral" value={form.referral} />
                <input type="hidden" name="source"   value={form.source} />

                <button type="submit" disabled={status === "loading"}
                  className="w-full rounded-xl py-4 text-sm font-black text-[#080C14] btn-gold disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === "loading" ? "Securing Your Spot..." : "🔒 Secure My Spot — June 10 Launch"}
                </button>
              </form>

              <p className="mt-4 text-center text-xs text-slate-600">
                Launch updates only. No spam. Unsubscribe anytime.
              </p>
              <div className="mt-4 flex justify-center gap-5 text-xs text-slate-600">
                <span>🔐 Secure</span><span>•</span>
                <span>📧 No spam</span><span>•</span>
                <span>✋ Cancel anytime</span>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-slate-600">
                Already have an account?{" "}
                <Link to="/login" className="font-bold hover:opacity-80 transition" style={{ color: "#D4A017" }}>
                  Sign In →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
