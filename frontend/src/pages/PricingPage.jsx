import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const LAUNCH_DATE = new Date("2026-06-10T00:00:00Z");

function useCountdown() {
  const [t, setT] = useState({});
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
    <div className="flex flex-col items-center rounded-xl bg-[#0F1520] border border-[#1A2D50] px-4 py-3 min-w-[64px]">
      <span className="font-display text-2xl font-black tabular-nums" style={{ color: "#FF8A00" }}>
        {String(val ?? 0).padStart(2, "0")}
      </span>
      <span className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-slate-500">{label}</span>
    </div>
  );
}

const PLANS = [
  {
    id: "free",
    name: "Free Forever",
    price: "$0",
    period: "",
    badge: null,
    popular: false,
    color: "#1E88E5",
    desc: "Start your business journey with a free AI roadmap.",
    cta: "Start Free Roadmap",
    ctaLink: "/starter",
    features: [
      "1 RMIE starter blueprint",
      "10 contacts",
      "1 sales pipeline",
      "1 landing page draft",
      "1 basic funnel draft",
      "1 basic form",
      "1 basic calendar",
      "Limited CRM dashboard",
      "Limited AI message generation",
      "Basic niche marketing plan preview",
    ],
    locked: ["Invoices", "Advanced automations", "AI Voice Agent", "Advanced reporting", "Unlimited tools"],
  },
  {
    id: "pro",
    name: "PEN2PRO Pro",
    price: "$89",
    period: "/mo",
    badge: null,
    popular: false,
    color: "#1E88E5",
    desc: "The complete small business operating system.",
    cta: "Join Waitlist — Pro",
    ctaLink: "/waitlist?tier=pro",
    features: [
      "RMIE strategy engine",
      "Full business roadmap",
      "Website builder",
      "Domain search + affiliate link",
      "Unlimited websites & funnels",
      "Unlimited contacts",
      "Unlimited sales pipelines",
      "Full CRM dashboard",
      "Calendar & scheduling",
      "Payments & invoices",
      "Proposals & estimates",
      "Reputation management",
      "Multi-channel messaging",
      "Email marketing",
      "2-way text/email conversation",
      "Missed-call text-back",
      "Social media planner",
      "Branding boards",
      "Workflows & automations",
      "Up to 3 users",
      "Basic AI Voice Agent",
      "Niche marketing plan generator",
    ],
    locked: [],
  },
  {
    id: "elite",
    name: "PEN2PRO Elite",
    price: "$247",
    period: "/mo",
    badge: "Most Popular",
    popular: true,
    color: "#FF8A00",
    desc: "Advanced AI, unlimited everything, and Voice Agent.",
    cta: "Join Waitlist — Elite",
    ctaLink: "/waitlist?tier=elite",
    features: [
      "Everything in Pro",
      "Advanced RMIE strategy engine",
      "Advanced business plan generation",
      "Advanced niche marketing plans",
      "Unlimited domains & blogs",
      "Unlimited memberships & courses",
      "Unlimited video hosting",
      "Unlimited communities",
      "Unlimited certificates",
      "Expert nurture campaigns",
      "Advanced workflows & automations",
      "Advanced pipeline reporting",
      "AI follow-up & sales assistant",
      "AI content & funnel assistant",
      "AI review response assistant",
      "AI proposal/estimate generator",
      "AI profit/loss insight",
      "Up to 10 users",
      "Advanced P2P AI Voice Agent",
      "Call summaries & lead qualification",
      "Appointment booking via AI",
      "CRM updates from calls",
      "Text-to-pay",
      "Priority support",
    ],
    locked: [],
  },
  {
    id: "founder",
    name: "PEN2PRO Founder",
    price: "$1,497",
    period: " one-time",
    badge: "Limited Spots",
    popular: false,
    color: "#D4A017",
    desc: "Lifetime access. Early adopter benefits. Founder status.",
    cta: "Become a Founder",
    ctaLink: "/waitlist?tier=founders",
    features: [
      "Lifetime access to RMIE",
      "Lifetime access to P2P Command Center core",
      "Lifetime access to Website/Funnel Builder core",
      "Lifetime access to Niche Marketing Planner",
      "Lifetime access to Branding Boards",
      "Lifetime access to Proposals & Estimates",
      "Lifetime access to Invoices",
      "Lifetime access to core automations",
      "Founder badge & recognition",
      "Early access to new modules",
      "Discounted AI Voice Agent usage",
      "Discounted SMS/email/phone usage",
      "Priority founder updates",
    ],
    locked: [],
    note: "AI, SMS, email, phone, and video usage are usage-based and not unlimited.",
  },
  {
    id: "agency",
    name: "BusinessOS Agency",
    price: "$397",
    period: "/mo",
    badge: "Agency",
    popular: false,
    color: "#7C3AED",
    desc: "Everything in Elite plus multi-client agency management.",
    cta: "Join Waitlist — Agency",
    ctaLink: "/waitlist?tier=agency",
    features: [
      "Everything in Elite",
      "Multi-business accounts",
      "Agency dashboard",
      "Client workspace management",
      "Snapshot templates",
      "Industry templates",
      "White-label-ready structure",
      "Sub-account management",
      "Client reporting",
      "Advanced API placeholder",
      "Team roles & permissions",
      "Priority support",
    ],
    locked: [],
  },
];

export default function PricingPage() {
  const t = useCountdown();

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="px-5 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            ⚡ PEN2PRO BusinessOS Pricing
          </div>
          <h1 className="mb-4 font-display text-4xl font-black leading-tight md:text-6xl">
            Pick Your Plan.
            <br />
            <span style={{ background: "linear-gradient(90deg,#1E88E5,#FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Build Your Business.
            </span>
          </h1>
          <p className="mb-8 text-lg text-slate-400">
            Start free. Upgrade when you're ready. All plans include PEN2PRO RMIE access.
          </p>

          {/* Countdown */}
          <div className="mb-2 text-sm font-semibold text-slate-400">🚀 Full launch in</div>
          <div className="flex justify-center gap-3">
            <CountBox val={t.days} label="Days" />
            <CountBox val={t.hours} label="Hrs" />
            <CountBox val={t.minutes} label="Min" />
            <CountBox val={t.seconds} label="Sec" />
          </div>
        </div>
      </section>

      {/* ── PLANS ── */}
      <section className="px-5 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                id={plan.id}
                className={`relative flex flex-col rounded-2xl border bg-[#0F1520] p-7 transition-all ${
                  plan.popular
                    ? "border-[#FF8A00]/60 shadow-[0_0_40px_rgba(255,138,0,0.12)]"
                    : "border-[#1A2D50]"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-xs font-black text-white"
                    style={{ background: plan.color }}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-5">
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: plan.color }}>
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-1">
                    <span className="font-display text-4xl font-black text-white">{plan.price}</span>
                    {plan.period && <span className="mb-1 text-slate-400 text-sm">{plan.period}</span>}
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{plan.desc}</p>
                </div>

                {/* Features */}
                <ul className="mb-6 flex-1 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="mt-0.5 shrink-0" style={{ color: plan.color }}>✓</span>
                      {f}
                    </li>
                  ))}
                  {plan.locked && plan.locked.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600 line-through">
                      <span className="mt-0.5 shrink-0 text-slate-700">✗</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Note */}
                {plan.note && (
                  <p className="mb-4 rounded-lg border border-[#1A2235] bg-[#0A0F1E] px-3 py-2 text-xs text-slate-500">
                    ⚠️ {plan.note}
                  </p>
                )}

                {/* CTA */}
                <Link
                  to={plan.ctaLink}
                  className={`block w-full rounded-xl py-3.5 text-center text-sm font-black transition-all ${
                    plan.popular
                      ? "text-[#0A0F1E] btn-gold"
                      : "border border-[#1A2D50] text-slate-300 hover:text-white hover:border-slate-500"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ STRIP ── */}
      <section className="border-t border-[#1A2D50] px-5 py-14 text-center">
        <div className="mx-auto max-w-xl">
          <p className="mb-4 text-slate-400 text-sm">
            Questions? All plans start with a free roadmap. Join the waitlist to lock in early-access pricing.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist" className="rounded-xl px-6 py-3 text-sm font-black text-[#0A0F1E] btn-gold">
              Join the Waitlist
            </Link>
            <Link to="/starter" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Start Free Roadmap
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
