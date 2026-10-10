import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { getStripeSession } from "../api/stripeApi";
import { claimPurchase, isSignedIn, rememberPendingClaim } from "../api/authApi";

const TIER_INFO = {
  strategist: {
    name: "$100 Strategist Plan",
    price: "$100 one-time",
    color: "#00C9B1",
    next: [
      "Check your email for your Stripe receipt.",
      "Open your step-by-step Strategist Plan and start with Step 1.",
      "Bookmark the playbook page. Your purchase unlocks it on this device.",
    ],
    cta: { label: "Open My Strategist Plan", to: "/strategist/playbook" },
  },
  founders: {
    name: "Founders Lifetime",
    price: "$1,899 one-time",
    color: "#D4A017",
    next: [
      "Check your email for your PEN2PRO confirmation and receipt.",
      "Create or sign in to your account with the same email you used at checkout.",
      "Start with a new roadmap, then explore the dashboard.",
    ],
  },
  pro: {
    name: "Pro",
    price: "$249/mo",
    color: "#00C9B1",
    next: [
      "Check your email for your confirmation and receipt.",
      "Create or sign in to your account with the same email you used at checkout.",
      "Generate a roadmap and work through the 7/30/90-day plan.",
    ],
  },
  elite: {
    name: "Elite",
    price: "$499/mo",
    color: "#D4A017",
    next: [
      "Check your email for your confirmation and Elite member details.",
      "Create or sign in to your account with the same email you used at checkout.",
      "Reach out to support@pen2pro.com with any questions.",
    ],
  },
  default: {
    name: "PEN2PRO",
    price: "",
    color: "#D4A017",
    next: [
      "Check your email for your confirmation and receipt.",
      "Create or sign in to your account with the same email you used at checkout.",
      "Generate a business roadmap to get started.",
    ],
  },
};

export default function PaymentSuccessPage() {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");
  const [tier, setTier] = useState(params.get("tier") || "default");
  const info = TIER_INFO[tier] || TIER_INFO.default;
  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(id);
  }, []);

  const [claim, setClaim] = useState(sessionId ? (isSignedIn() ? "claiming" : "needs-account") : "none");
  const [claimError, setClaimError] = useState("");

  // Link the purchase to the signed-in account (this unlocks the plan). If nobody is signed in yet,
  // remember the checkout so it is linked as soon as they create an account or sign in.
  useEffect(() => {
    if (!sessionId) return;
    let active = true;
    getStripeSession(sessionId).then((session) => {
      if (active && session?.tier && TIER_INFO[session.tier]) setTier(session.tier);
    });
    if (isSignedIn()) {
      claimPurchase(sessionId)
        .then((session) => { if (active) { setTier(session.purchased); setClaim("done"); } })
        .catch((error) => { if (active) { setClaim("error"); setClaimError(error.message); } });
    } else {
      rememberPendingClaim(sessionId);
    }
    return () => { active = false; };
  }, [sessionId]);

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-20">
        <div className={`w-full max-w-lg transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {/* Gold Checkmark */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 glow-gold" style={{ borderColor: "#D4A017" }}>
              <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#D4A017" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-display text-4xl font-black text-white mb-2">Payment Confirmed</h1>
            <p className="text-slate-400">Welcome to PEN2PRO — you made the right call.</p>
          </div>

          <div className="rounded-2xl border p-8 text-center" style={{ background: "#0F1520", borderColor: info.color + "60" }}>
            {/* Tier Badge */}
            <div className="mb-6">
              <span
                className="inline-block rounded-full px-5 py-2 text-sm font-black"
                style={{ background: info.color + "20", color: info.color }}
              >
                {info.name} Member
              </span>
              {info.price && (
                <p className="text-xs text-slate-500 mt-2">{info.price}</p>
              )}
            </div>

            {/* What's Next */}
            <div className="text-left mb-8">
              <p className="text-sm font-bold text-white mb-4">What happens next:</p>
              <ul className="space-y-4">
                {info.next.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full gradient-gold text-xs font-black text-[#080C14]">
                      {i + 1}
                    </div>
                    <p className="text-sm text-slate-300">{step}</p>
                  </li>
                ))}
              </ul>
            </div>

            {claim === "claiming" && <p className="mb-4 text-sm text-slate-400">Unlocking your plan…</p>}
            {claim === "done" && (
              <p role="status" className="mb-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                Your plan is unlocked on your account.
              </p>
            )}
            {claim === "error" && (
              <p role="alert" className="mb-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-4 py-3 text-sm text-yellow-200">
                {claimError || "We could not link this purchase yet."} Email support@pen2pro.com with your receipt and we will fix it.
              </p>
            )}
            {claim === "needs-account" && (
              <div className="mb-6 rounded-xl border border-[#D4A017]/40 bg-[#D4A017]/10 p-4 text-left">
                <p className="mb-3 text-sm font-semibold text-white">One more step: attach this purchase to your account.</p>
                <div className="flex gap-3">
                  <Link to="/signup" className="btn-gold flex-1 py-2.5 text-center text-sm font-bold">Create Account</Link>
                  <Link to="/login" className="btn-outline flex-1 py-2.5 text-center text-sm font-bold">Sign In</Link>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              {info.cta && (
                <Link to={`${info.cta.to}${sessionId ? `?session_id=${sessionId}` : ""}`} className="btn-gold block w-full py-3 text-sm font-bold text-center">
                  {info.cta.label}
                </Link>
              )}
              <Link to="/dashboard" className={`${info.cta ? "btn-outline" : "btn-gold"} block w-full py-3 text-sm font-bold text-center`}>
                Go to Dashboard
              </Link>
              <Link to="/starter" className="btn-outline block w-full py-3 text-sm font-bold text-center">
                Start Your Free Roadmap
              </Link>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              Questions? Email us at{" "}
              <a href="mailto:support@pen2pro.com" className="text-[#D4A017] hover:underline">
                support@pen2pro.com
              </a>
            </p>
          </div>

          <p className="text-center text-xs text-slate-600 mt-6">
            Powered by Stripe — your payment is secure and encrypted.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
