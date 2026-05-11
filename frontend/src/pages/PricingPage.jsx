import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
const LAUNCH_DATE = new Date("2026-06-10T00:00:00Z");

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({});
  useEffect(() => {
    function calc() {
      const diff = LAUNCH_DATE - Date.now();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);
  return timeLeft;
}

const plans = [
  {
    id: "free",
    name: "Free Forever",
    price: "$0",
    period: "",
    badge: null,
    highlight: false,
    description: "Start your journey with a free business roadmap.",
    features: [
      "1 AI business roadmap",
      "Basic business blueprint",
      "7-day action plan",
      "Business idea validation",
      "Credit readiness checklist",
      "Community access",
    ],
    locked: [],
    cta: "Start Free",
    ctaLink: "/starter",
    ctaAction: null,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$47",
    period: "/mo",
    badge: "Most Popular",
    highlight: false,
    description: "Full AI suite for serious founders ready to launch.",
    features: [
      "Unlimited AI roadmaps",
      "90-day growth plan",
      "Sales script generator",
      "Outreach sequence automation",
      "Financial projections",
      "AI marketing copy",
      "Credit & funding resource matching",
      "Priority support",
    ],
    locked: true,
    cta: "Join Waitlist — Pro",
    ctaLink: "/waitlist?tier=pro",
    ctaAction: null,
  },
  {
    id: "elite",
    name: "Elite",
    price: "$97",
    period: "/mo",
    badge: "Best Results",
    highlight: false,
    description: "Done-with-you strategy for founders going all in.",
    features: [
      "Everything in Pro",
      "Done-with-you strategy sessions",
      "Vendor introductions",
      "Launch support & accountability",
      "Custom branding checklist",
      "Business credit building guide",
      "SBA & CDFI funding prep",
      "1-on-1 coaching access",
    ],
    locked: true,
    cta: "Join Waitlist — Elite",
    ctaLink: "/waitlist?tier=elite",
    ctaAction: null,
  },
  {
    id: "founders",
    name: "Founders Lifetime",
    price: "$497",
    period: " one-time",
    badge: "Limited — 200 Spots",
    highlight: true,
    description: "Lock in lifetime access before the June 10 launch.",
    features: [
      "Everything in Elite — forever",
      "Lifetime updates, no monthly fees",
      "Founders-only community",
      "Early access to all new features",
      "Direct line to the PEN2PRO team",
      "Credit & funding done-with-you",
      "Exclusive partner discounts",
      "First-access to affiliate program",
    ],
    locked: false,
    cta: "Secure Founders Access",
    ctaLink: null,
    ctaAction: "stripe",
  },
];

const faqs = [
  {
    q: "When does PEN2PRO launch?",
    a: "PEN2PRO officially launches June 10, 2026. Founders Lifetime members get immediate early access to all tools as they are built.",
  },
  {
    q: "Is the Free plan really free forever?",
    a: "Yes. The Free plan gives you one AI roadmap and your 7-day action plan at no cost, no credit card required.",
  },
  {
    q: "What is a Founders Lifetime membership?",
    a: "It is a one-time payment of $497 that locks in full Elite-level access for life — no monthly fees, ever. Limited to 200 spots total.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes. You can upgrade from Free to Pro, Pro to Elite, or any tier to Founders at any time. Founders pricing will not be available after launch.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. If you are not satisfied within 14 days of purchase, contact support and we will issue a full refund — no questions asked.",
  },
  {
    q: "Is my payment secure?",
    a: "All payments are processed by Stripe. PEN2PRO never stores your card details.",
  },
];

export default function PricingPage() {
  const countdown = useCountdown();
  const [stripeLoading, setStripeLoading] = useState(false);
  const [stripeError, setStripeError] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  async function handleFoundersCheckout() {
    setStripeLoading(true);
    setStripeError("");
    try {
      const res = await fetch(`${API}/api/stripe/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier: "founders", price_id: "founders_lifetime" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Checkout failed");
      if (data.url) window.location.href = data.url;
      else throw new Error("No checkout URL returned");
    } catch (err) {
      setStripeError(err.message);
      setStripeLoading(false);
    }
  }

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      {/* Countdown Banner */}
      <div className="border-b border-[#1A2235] py-4" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm font-semibold text-white">
              PEN2PRO launches <span style={{ color: "#D4A017" }}>June 10, 2026</span> — Pro and Elite open at launch
            </p>
            <div className="flex items-center gap-3">
              {["days", "hours", "minutes", "seconds"].map((unit) => (
                <div key={unit} className="countdown-box text-center">
                  <div className="text-xl font-black" style={{ color: "#D4A017" }}>
                    {String(countdown[unit] ?? 0).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-slate-500 capitalize">{unit}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            PRICING
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl">
            Simple, <span className="gradient-text">honest</span> pricing
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Start free. Upgrade when you're ready to go all in. Lock in Founders pricing before June 10.
          </p>
        </div>

        {/* Stripe Error */}
        {stripeError && (
          <div className="mb-8 mx-auto max-w-xl rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-400">
            {stripeError} — Try again or{" "}
            <Link to="/waitlist" style={{ color: "#D4A017" }}>join the waitlist</Link>.
          </div>
        )}

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border p-6 transition-all ${
                plan.highlight
                  ? "border-[#D4A017] shadow-[0_0_40px_rgba(212,160,23,0.15)]"
                  : "border-[#1A2235]"
              }`}
              style={{ background: "#0F1520" }}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-xs font-black ${
                    plan.highlight
                      ? "gradient-gold text-[#080C14]"
                      : "bg-[#1A2235] text-slate-300"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h2 className="font-display text-lg font-bold text-white mb-1">{plan.name}</h2>
                <p className="text-xs text-slate-500 mb-4">{plan.description}</p>
                <div className="flex items-end gap-1">
                  <span className="font-display text-4xl font-black text-white">{plan.price}</span>
                  <span className="mb-1 text-sm text-slate-400">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <span style={{ color: "#D4A017" }} className="mt-0.5 text-xs">✓</span>
                    {f}
                  </li>
                ))}
                {plan.locked && (
                  <li className="flex items-center gap-2 text-xs text-slate-600 pt-2 border-t border-[#1A2235]">
                    <span>🔒</span> Unlocks at launch — June 10, 2026
                  </li>
                )}
              </ul>

              {plan.ctaAction === "stripe" ? (
                <button
                  onClick={handleFoundersCheckout}
                  disabled={stripeLoading}
                  className="btn-gold w-full py-3 text-sm font-bold"
                >
                  {stripeLoading ? "Redirecting..." : plan.cta}
                </button>
              ) : (
                <Link
                  to={plan.ctaLink}
                  className={`block w-full rounded-xl py-3 text-center text-sm font-bold transition-all ${
                    plan.locked
                      ? "border border-[#1A2235] text-slate-400 hover:border-[#D4A017]/50 hover:text-[#D4A017]"
                      : plan.id === "free"
                      ? "btn-outline"
                      : "btn-gold"
                  }`}
                >
                  {plan.cta}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-white text-center mb-10">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-[#1A2235] overflow-hidden"
                style={{ background: "#0F1520" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-white hover:text-[#D4A017] transition-colors"
                >
                  {faq.q}
                  <span className="ml-3 text-lg">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-slate-400 leading-7">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 mb-4">Not sure which plan is right for you?</p>
          <Link to="/waitlist" className="btn-gold px-8 py-3 text-sm font-bold">
            Join the Waitlist — It's Free
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
