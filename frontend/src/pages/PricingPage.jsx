import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const API_BASE =
  import.meta.env.VITE_API_BASE_URL ||
  "http://127.0.0.1:8000";

const LAUNCH_DATE = new Date("2026-06-15T00:00:00Z");

const fallbackPlans = [
  {
    id: "free",
    name: "Free Forever",
    price: 0,
    display_price: "$0",
    billing_type: "free",
    description: "Start your business roadmap with a basic PEN2PRO blueprint.",
    cta: "Start Free",
    stripe_tier: null,
    features: [
      "1 starter business blueprint",
      "Basic roadmap preview",
      "Limited progress tracking",
      "Free Forever access",
    ],
  },
  {
    id: "pro",
    name: "PEN2PRO Pro",
    price: 249,
    display_price: "$249/mo",
    billing_type: "monthly",
    description: "For builders ready to move from idea to income with execution tools.",
    cta: "Upgrade to Pro",
    stripe_tier: "pro",
    features: [
      "Full RMIE business blueprint",
      "P2P Command Center access",
      "CRM basics",
      "Website Builder access",
      "Marketing and monetization roadmap",
      "Progress tracking",
      "Email and PDF export",
    ],
  },
  {
    id: "elite",
    name: "PEN2PRO Elite",
    price: 499,
    display_price: "$499/mo",
    billing_type: "monthly",
    description: "Advanced AI, automation, and business scaling support.",
    cta: "Upgrade to Elite",
    stripe_tier: "elite",
    features: [
      "Everything in Pro",
      "Advanced RMIE strategy engine",
      "P2P AI Voice Agent access",
      "Advanced automations",
      "Funding readiness tools",
      "Advanced CRM and pipeline tools",
      "Priority support",
    ],
  },
  {
    id: "founders",
    name: "Founders Lifetime",
    price: 1899,
    display_price: "$1,899 for life",
    billing_type: "lifetime",
    description:
      "Everything you need to launch your business from idea to income and scale with a 10M strategist framework over the next 12 months.",
    cta: "Claim Founders Lifetime",
    stripe_tier: "founders",
    spots_total: 200,
    spots_message: "Only 200 Founders spots available.",
    urgency: "This offer will not last long.",
    features: [
      "Lifetime PEN2PRO access",
      "Everything in Elite",
      "RMIE launch and scaling roadmap",
      "P2P Command Center",
      "P2P AI Voice Agent",
      "Website Builder",
      "CRM and automation tools",
      "Funding readiness tools",
      "Branding and launch execution tools",
      "12-month 10M strategist framework",
    ],
  },
];

const standaloneTools = [
  { name: "CRM Pro", price: 149 },
  { name: "P2P AI Voice Agent", price: 99 },
  { name: "Website Builder", price: 79 },
  { name: "P2P Command Center", price: 99 },
  { name: "Funding System", price: 99 },
];

function useCountdown() {
  const [t, setT] = useState({});

  useEffect(() => {
    const calc = () => {
      const diff = LAUNCH_DATE - Date.now();

      if (diff <= 0) {
        setT({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

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
    <div className="min-w-[72px] rounded-xl border border-[#1A2D50] bg-[#0F1520] px-4 py-3 text-center">
      <p className="font-display text-2xl font-black text-[#5ab0ff]">
        {String(val ?? 0).padStart(2, "0")}
      </p>
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
        {label}
      </p>
    </div>
  );
}

function PlanCard({ plan }) {
  const [checkoutError, setCheckoutError] = useState("");
  const [loading, setLoading] = useState(false);

  const isFeatured = plan.id === "pro";
  const isFounders = plan.id === "founders";

  const handlePlanClick = async () => {
    setCheckoutError("");

    if (plan.id === "free" || !plan.stripe_tier) {
      window.location.href = "/starter";
      return;
    }

    setLoading(true);

    try {
      const result = await createCheckoutSession({ tier: plan.stripe_tier });

      if (result?.checkout_url) {
        window.location.href = result.checkout_url;
        return;
      }

      setCheckoutError(result?.error || "Checkout is not configured yet.");
    } catch (error) {
      console.error("Pricing checkout error:", error);
      setCheckoutError("Unable to start checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`relative rounded-2xl border p-7 transition hover:-translate-y-1 ${
        isFeatured
          ? "border-[#2d9cff] bg-[#101a30] shadow-[0_0_45px_rgba(45,156,255,0.3)]"
          : isFounders
            ? "border-[#d4af37] bg-[#15120a] shadow-[0_0_45px_rgba(212,175,55,0.2)]"
            : "border-[#1A2D50] bg-[#0F1520]"
      }`}
    >
      {isFeatured && (
        <span className="absolute -top-3 left-6 rounded-full bg-[#2d9cff] px-3 py-1 text-[10px] font-black tracking-wider text-[#081226]">
          MOST POPULAR
        </span>
      )}

      {isFounders && (
        <span className="absolute -top-3 left-6 rounded-full bg-[#d4af37] px-3 py-1 text-[10px] font-black tracking-wider text-[#081226]">
          ONLY 200 FOUNDERS
        </span>
      )}

      <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
        {plan.name}
      </p>

      <div className="mt-2">
        <span className="font-display text-4xl font-black">
          {plan.display_price}
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-300">{plan.description}</p>

      {plan.spots_message && (
        <p className="mt-3 rounded-xl border border-[#d4af37]/40 bg-[#d4af37]/10 px-3 py-2 text-sm font-bold text-[#f7d675]">
          {plan.spots_message}
        </p>
      )}

      {plan.urgency && (
        <p className="mt-2 text-sm font-semibold text-[#f7d675]">
          {plan.urgency}
        </p>
      )}

      <ul className="mt-5 space-y-2 text-sm text-slate-200">
        {(plan.features || []).map((feature) => (
          <li key={feature} className="flex gap-2">
            <span className={isFounders ? "text-[#d4af37]" : "text-[#2d9cff]"}>
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={handlePlanClick}
        disabled={loading}
        className={`mt-6 block w-full rounded-xl py-3 text-center text-sm font-black transition disabled:cursor-not-allowed disabled:opacity-60 ${
          isFeatured
            ? "bg-[#2d9cff] text-[#081226]"
            : isFounders
              ? "bg-[#d4af37] text-[#081226]"
              : "border border-[#1A2D50] text-slate-200 hover:border-slate-400"
        }`}
      >
        {loading ? "Starting Checkout..." : plan.cta || "Get Started"}
      </button>

      {checkoutError ? (
        <p className="mt-3 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
          {checkoutError}
        </p>
      ) : null}
    </div>
  );
}

export default function PricingPage() {
  const t = useCountdown();
  const [pricing, setPricing] = useState({
    launch_date: "June 15",
    brand: "PEN2PRO",
    tagline: "From Idea to Income",
    plans: fallbackPlans,
  });
  const [loading, setLoading] = useState(true);
  const [pricingError, setPricingError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadPricing() {
      try {
        const response = await fetch(`${API_BASE}/api/pricing/`);

        if (!response.ok) {
          throw new Error(`Pricing API error: ${response.status}`);
        }

        const data = await response.json();

        if (active) {
          setPricing({
            launch_date: data.launch_date || "June 15",
            brand: data.brand || "PEN2PRO",
            tagline: data.tagline || "From Idea to Income",
            plans: Array.isArray(data.plans) && data.plans.length ? data.plans : fallbackPlans,
          });
          setPricingError("");
        }
      } catch (error) {
        console.error("Unable to load pricing API:", error);

        if (active) {
          setPricingError("Using local pricing fallback while backend pricing API is unavailable.");
          setPricing((current) => ({
            ...current,
            plans: fallbackPlans,
          }));
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadPricing();

    return () => {
      active = false;
    };
  }, []);

  const totalValue = standaloneTools.reduce((sum, tool) => sum + tool.price, 0);
  const proPlan = useMemo(
    () => pricing.plans.find((plan) => plan.id === "pro") || fallbackPlans.find((plan) => plan.id === "pro"),
    [pricing.plans]
  );
  const savings = totalValue - (proPlan?.price || 249);

  return (
    <div className="min-h-screen overflow-hidden bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 pb-16 pt-20 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#5ab0ff]">
            Launching {pricing.launch_date}
          </p>

          <h1 className="mb-4 font-display text-4xl font-black leading-tight md:text-6xl">
            One AI Operating System For Your Entire Business
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg text-slate-300">
            PEN2PRO helps you move from idea to income with RMIE, P2P Command Center,
            P2P AI Voice Agent, Website Builder, CRM tools, funding readiness, and launch execution.
          </p>

          <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/starter"
              className="rounded-xl bg-[#2d9cff] px-7 py-3 text-sm font-black text-[#081226] shadow-[0_0_35px_rgba(45,156,255,0.45)] transition hover:scale-[1.02]"
            >
              Start Free
            </Link>

            <Link
              to="/waitlist"
              className="rounded-xl border border-[#1A2D50] px-7 py-3 text-sm font-bold text-slate-200 transition hover:border-slate-400 hover:text-white"
            >
              Join Launch Waitlist
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            {[
              "AI-powered workflows",
              "CRM automation",
              "P2P AI Voice Agent",
              "Website Builder",
              "Funding Readiness",
              "P2P Command Center",
              "From Idea to Income",
            ].map((item) => (
              <span key={item} className="rounded-full border border-[#1A2D50] bg-[#0F1520] px-3 py-1">
                {item}
              </span>
            ))}
          </div>

          {loading && (
            <p className="mt-6 text-sm text-slate-400">
              Loading live pricing...
            </p>
          )}

          {pricingError && (
            <p className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-4 py-3 text-sm text-yellow-200">
              {pricingError}
            </p>
          )}
        </div>
      </section>

      <section className="px-5 pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-3xl border border-[#1A2D50] bg-[#0F1520]/80 p-6 md:grid-cols-2 md:p-8">
          <div className="rounded-2xl border border-[#27324a] bg-[#0A0F1E] p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Buying Separately
            </p>

            <ul className="space-y-2 text-sm text-slate-200">
              {standaloneTools.map((tool) => (
                <li key={tool.name} className="flex items-center justify-between border-b border-[#1A2238] pb-2">
                  <span>{tool.name}</span>
                  <span>${tool.price}/mo</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center justify-between text-lg font-black">
              <span>TOTAL VALUE</span>
              <span className="text-[#5ab0ff]">${totalValue}/mo</span>
            </div>
          </div>

          <div className="rounded-2xl border border-[#2d9cff66] bg-[linear-gradient(160deg,#101a2f,#132a4f)] p-6 shadow-[0_0_45px_rgba(45,156,255,0.2)]">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#87c8ff]">
              Inside PEN2PRO
            </p>

            <p className="mb-2 font-display text-4xl font-black">
              {proPlan?.name || "PEN2PRO Pro"}
            </p>

            <p className="mb-4 text-3xl font-black text-white">
              ONLY {proPlan?.display_price || "$249/mo"}
            </p>

            <span className="inline-flex rounded-full border border-emerald-300/40 bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-300">
              Save ${savings}/month
            </span>

            <p className="mt-4 text-slate-200">
              Everything connected. Everything automated. One ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-4">
          {pricing.plans.map((plan) => (
            <div key={plan.id} data-founders-checkout={plan.id === "founders" ? "true" : undefined}><PlanCard plan={plan} /></div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#1A2D50] bg-[#0B1222] px-5 py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#6f86b340] bg-[#0F1520] p-8 text-center shadow-[0_0_40px_rgba(111,134,179,0.15)]">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
            Founder Access
          </p>

          <h3 className="mb-3 font-display text-3xl font-black">
            Founders Lifetime — $1,899 for life
          </h3>

          <p className="mx-auto mb-6 max-w-3xl text-slate-300">
            Everything you need to launch your business from idea to income and scale with a 10M strategist framework over the next 12 months.
            This offer will not last long. We are only accepting 200 Founders.
          </p>

          <div className="mb-6 flex justify-center gap-3">
            <CountBox val={t.days} label="Days" />
            <CountBox val={t.hours} label="Hours" />
            <CountBox val={t.minutes} label="Min" />
            <CountBox val={t.seconds} label="Sec" />
          </div>

          <div className="grid gap-2 text-sm text-slate-200 md:grid-cols-2">
            {[
              "Lifetime PEN2PRO access",
              "Everything in Elite",
              "P2P Command Center",
              "P2P AI Voice Agent",
              "Website Builder",
              "CRM and automation tools",
              "Funding readiness tools",
              "12-month 10M strategist framework",
            ].map((item) => (
              <p key={item} className="rounded-xl border border-[#1A2D50] bg-[#0A0F1E] px-3 py-2">
                {item}
              </p>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              const foundersCard = document.querySelector("[data-founders-checkout]");
              if (foundersCard) foundersCard.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="mx-auto mt-8 inline-flex rounded-xl bg-[#d4af37] px-8 py-3 text-sm font-black text-[#081226] shadow-[0_0_35px_rgba(212,175,55,0.35)] transition hover:scale-[1.02]"
          >
            Claim Founders Lifetime
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
