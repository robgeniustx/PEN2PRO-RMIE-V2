import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const PLANS = {
  pro: {
    id: "pro",
    name: "PEN2PRO Pro",
    price: "$249",
    per: "/month",
    tagline: "Full execution tools for builders ready to go from idea to income.",
    color: "#1E88E5",
    shadow: "rgba(30,136,229,0.3)",
    badge: "Most Popular",
    badgeBg: "#2d9cff",
    features: [
      "Full RMIE business blueprint",
      "90-day execution plan",
      "Sales scripts & outreach sequences",
      "Credit readiness checklist",
      "Funding readiness tools",
      "P2P Command Center access",
      "CRM basics (contacts & pipeline)",
      "Website Builder access",
      "P2P AI Voice (Basic)",
      "Marketing & monetization roadmap",
      "Progress tracking",
      "PDF/email export",
      "AI business refinement sessions",
    ],
    faq: [
      { q: "Can I cancel anytime?", a: "Yes. Month-to-month, no lock-in. Cancel before your next billing date and you won't be charged." },
      { q: "What if Stripe isn't set up yet?", a: "Click 'Join Waitlist' to secure your Pro spot. You'll be first in line when payments go live." },
      { q: "What's included in the RMIE blueprint?", a: "Your blueprint includes business idea analysis, target customer, offer structure, pricing, 7/30/90-day action plan, sales scripts, and funding readiness — built for your specific idea." },
    ],
  },
  elite: {
    id: "elite",
    name: "PEN2PRO Elite",
    price: "$499",
    per: "/month",
    tagline: "Advanced strategy, automation, and execution support for serious business builders.",
    color: "#00C9B1",
    shadow: "rgba(0,201,177,0.25)",
    badge: "Best Value",
    badgeBg: "#00C9B1",
    features: [
      "Everything in Pro",
      "Advanced RMIE strategy engine",
      "Financial projections (12-month)",
      "Done-with-you strategy guidance",
      "Advanced CRM & pipeline tools",
      "P2P AI Voice Agent — Advanced access",
      "Full automation suite",
      "Vendor & funding resource center",
      "Company formation checklist",
      "Trademark & brand guidance",
      "Social media & marketing playbook",
      "Priority support",
      "10 business users",
    ],
    faq: [
      { q: "How is Elite different from Pro?", a: "Elite adds advanced AI strategy, financial projections, a done-with-you layer, vendor/funding resource center, and 10 business users vs. 3 in Pro." },
      { q: "What does 'done-with-you' mean?", a: "Elite includes advanced guided strategy — detailed decision trees, financial models, and step-by-step action plans tailored to where your business is right now." },
      { q: "Can I downgrade to Pro later?", a: "Yes. You can switch between plans anytime. Your data and roadmaps are always saved." },
    ],
  },
  founders: {
    id: "founders",
    name: "Founders Lifetime",
    price: "$1,899",
    per: " one-time",
    tagline: "Lifetime access to the entire PEN2PRO platform — every tool, every feature, forever.",
    color: "#d4af37",
    shadow: "rgba(212,175,55,0.3)",
    badge: "Only 200 Spots",
    badgeBg: "#d4af37",
    features: [
      "Lifetime PEN2PRO access (no renewals)",
      "Everything in Elite",
      "Full RMIE strategy engine",
      "P2P Command Center",
      "P2P AI Voice Agent",
      "Website Builder",
      "Full CRM & automation suite",
      "Funding readiness tools",
      "12-month 10M strategist framework",
      "Founder badge & recognition",
      "Priority support forever",
      "Early access to every new feature",
    ],
    faq: [
      { q: "Is this really lifetime?", a: "Yes — one payment, no monthly fees, access to every feature we build from now on. Once 200 spots are claimed, this offer closes." },
      { q: "What if the platform isn't fully live yet?", a: "Your Founders status is locked in immediately. When the platform launches, your account is upgraded automatically. You secure your price now." },
      { q: "What if checkout isn't configured?", a: "Join the waitlist below to reserve your Founders spot. We'll contact you directly to complete your purchase." },
    ],
  },
};

export default function CheckoutPage() {
  const { tier } = useParams();
  const navigate = useNavigate();
  const plan = PLANS[tier];

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!plan) navigate("/pricing", { replace: true });
  }, [plan, navigate]);

  if (!plan) return null;

  async function handleCheckout() {
    setError("");
    setLoading(true);
    try {
      const result = await createCheckoutSession({ tier: plan.id });
      if (result?.checkout_url) {
        window.location.href = result.checkout_url;
        return;
      }
      setError(result?.error || "Checkout is not yet configured. Join the waitlist to secure your spot.");
    } catch {
      setError("Unable to start checkout. Please join the waitlist to reserve your spot.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">

      {/* Tinted background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full"
          style={{ background: `radial-gradient(circle, ${plan.shadow} 0%, transparent 65%)`, filter: "blur(50px)" }} />
      </div>

      <Navbar />

      <div className="mx-auto max-w-5xl px-5 py-16">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link to="/pricing" className="hover:text-slate-300 transition-colors">Pricing</Link>
          <span>›</span>
          <span className="text-slate-300">{plan.name}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">

          {/* LEFT — Plan Details */}
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest"
              style={{ background: plan.badgeBg, color: "#081226" }}>
              {plan.badge}
            </div>

            <h1 className="mt-3 font-display text-4xl font-black text-white md:text-5xl">{plan.name}</h1>

            <div className="mt-2 flex items-baseline gap-1">
              <span className="font-display text-5xl font-black" style={{ color: plan.color }}>{plan.price}</span>
              <span className="text-lg text-slate-400">{plan.per}</span>
            </div>

            <p className="mt-4 text-lg text-slate-400 leading-relaxed">{plan.tagline}</p>

            {/* Features */}
            <div className="mt-8">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400">Everything Included</p>
              <ul className="grid gap-y-3 sm:grid-cols-2 gap-x-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <span className="mt-0.5 shrink-0 font-black" style={{ color: plan.color }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <div className="mt-10">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400">Common Questions</p>
              <div className="space-y-4">
                {plan.faq.map((item) => (
                  <div key={item.q} className="rounded-xl border border-[#1A2D50] bg-[#0F1520] p-5">
                    <p className="mb-1.5 font-semibold text-white">{item.q}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Checkout Card */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border p-7"
              style={{ borderColor: `${plan.color}50`, background: "#0F1520", boxShadow: `0 0 50px ${plan.shadow}` }}>

              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">You're getting</p>
              <p className="mt-1 font-display text-2xl font-black text-white">{plan.name}</p>

              <div className="my-5 h-px" style={{ background: `${plan.color}30` }} />

              <div className="mb-2 flex items-baseline justify-between">
                <span className="text-sm text-slate-400">Price</span>
                <span className="font-display text-2xl font-black" style={{ color: plan.color }}>
                  {plan.price}<span className="text-sm font-normal text-slate-400">{plan.per}</span>
                </span>
              </div>

              {plan.id === "founders" && (
                <p className="mb-4 rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/5 px-3 py-2 text-sm font-bold text-[#d4af37]">
                  One-time payment · No renewals · Lifetime access
                </p>
              )}

              <button
                onClick={handleCheckout}
                disabled={loading}
                className="mt-4 w-full rounded-xl py-4 text-sm font-black text-[#081226] transition hover:scale-[1.02] disabled:opacity-60"
                style={{ background: plan.color, boxShadow: `0 0 30px ${plan.shadow}` }}
              >
                {loading ? "Starting Checkout…" : `Get ${plan.name} →`}
              </button>

              {error && (
                <div className="mt-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-4 py-3 text-sm text-yellow-200">
                  {error}
                </div>
              )}

              <Link
                to={`/waitlist?tier=${plan.id}`}
                className="mt-3 block rounded-xl border border-[#1A2D50] py-3.5 text-center text-sm font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Join Waitlist Instead →
              </Link>

              <div className="mt-5 space-y-2 text-xs text-slate-600">
                <p>🔒 Secure checkout via Stripe</p>
                {plan.id !== "founders" && <p>✓ Cancel anytime, no lock-in</p>}
                <p>✓ 100% satisfaction commitment</p>
              </div>
            </div>

            {/* Compare link */}
            <p className="mt-4 text-center text-sm text-slate-500">
              Want to compare all plans?{" "}
              <Link to="/pricing" className="font-semibold hover:text-white transition-colors" style={{ color: plan.color }}>
                View Pricing →
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
