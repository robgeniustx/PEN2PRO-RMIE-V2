import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// ── Ecosystem Module Pricing ────────────────────────────────────────────────
const MODULES = [
  {
    id: "rmie",
    icon: "🧠",
    name: "RMIE",
    subtitle: "Rapid Monetization Intelligence Engine",
    color: "#1E88E5",
    includedIn: "All Plans",
    tiers: [
      {
        name: "Free",
        price: "$0",
        period: "",
        features: ["1 starter blueprint", "Basic business strategy", "7-day action plan preview", "Waitlist access"],
      },
      {
        name: "Pro",
        price: "$47",
        period: "/mo",
        features: ["Full blueprint engine", "Industry-specific strategy", "30/60/90-day plans", "Credit & funding readiness checklist", "Sales script + outreach plan"],
      },
      {
        name: "Elite",
        price: "$97",
        period: "/mo",
        features: ["Everything in Pro", "Advanced AI depth", "Financial projections", "Premium knowledge base access", "Done-with-you guidance"],
      },
      {
        name: "Founders",
        price: "$497",
        period: " one-time",
        features: ["Lifetime RMIE access", "All future blueprint updates", "Early feature access", "Founder badge"],
      },
    ],
  },
  {
    id: "voice",
    icon: "🎙️",
    name: "P2P AI Voice Agent",
    subtitle: "AI-Powered Business Phone & Appointment System",
    color: "#FF8A00",
    includedIn: "Pro & Above",
    tiers: [
      {
        name: "Starter",
        price: "$49",
        period: "/mo",
        features: ["100 min/mo AI calls", "Appointment booking", "Basic lead capture", "Call summaries"],
      },
      {
        name: "Pro",
        price: "$149",
        period: "/mo",
        features: ["500 min/mo AI calls", "CRM auto-update from calls", "Lead qualification scripts", "Custom agent persona"],
      },
      {
        name: "Elite",
        price: "$299",
        period: "/mo",
        features: ["Unlimited AI call minutes", "Multi-agent support", "Advanced analytics dashboard", "Missed-call text-back", "Custom voice & branding"],
      },
      {
        name: "Founder",
        price: "$889",
        period: " one-time",
        features: ["Lifetime access", "Discounted usage rates", "All future AI Voice features", "Priority onboarding"],
      },
    ],
  },
  {
    id: "website",
    icon: "🌐",
    name: "Website Builder",
    subtitle: "Launch-Ready Business Websites, Funnels & Landing Pages",
    color: "#7C3AED",
    includedIn: "Pro & Above",
    tiers: [
      {
        name: "Basic",
        price: "Free",
        period: "",
        features: ["1 landing page draft", "1 funnel draft", "PEN2PRO-hosted subdomain", "Lead capture form"],
      },
      {
        name: "Builder",
        price: "$27",
        period: "/mo",
        features: ["Unlimited pages & funnels", "Custom domain support", "SEO tools", "Form builder", "Basic e-commerce"],
      },
      {
        name: "Pro",
        price: "In BusinessOS Pro",
        period: "",
        features: ["Everything in Builder", "Memberships & courses", "Unlimited blogs", "Video hosting", "Full e-commerce"],
      },
    ],
  },
  {
    id: "command",
    icon: "⚡",
    name: "P2P Command Center",
    subtitle: "CRM, Pipelines, Messaging, Invoicing & Automation",
    color: "#10B981",
    includedIn: "Pro & Above",
    tiers: [
      {
        name: "Basic",
        price: "Free",
        period: "",
        features: ["10 contacts", "1 sales pipeline", "Basic messaging", "1 form & calendar"],
      },
      {
        name: "Starter",
        price: "$39",
        period: "/mo",
        features: ["Unlimited contacts & pipelines", "Email & SMS marketing", "Workflows & automations", "Invoices & payments", "Reputation management"],
      },
      {
        name: "Pro",
        price: "In BusinessOS Pro",
        period: "",
        features: ["Everything in Starter", "Multi-channel inbox", "Team roles & collaboration", "Advanced reporting", "Social media planner"],
      },
    ],
  },
  {
    id: "domain",
    icon: "🔍",
    name: "Domain Finder",
    subtitle: "Business Name Discovery & Domain Registration",
    color: "#06B6D4",
    includedIn: "All Plans",
    tiers: [
      {
        name: "Free",
        price: "$0",
        period: "",
        features: ["Unlimited domain searches", "Availability checker", "Multi-TLD results", "Affiliate purchase links"],
      },
      {
        name: "Pro",
        price: "In Pro+",
        period: "",
        features: ["AI brand name suggestions", "Logo name matching", "Social handle availability", "One-click domain checkout"],
      },
    ],
  },
];

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
  const [activeModule, setActiveModule] = useState("rmie");
  const mod = MODULES.find((m) => m.id === activeModule);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">

      {/* ── RADIANT BACKGROUND ORBS ── */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Blue orb — top center */}
        <div
          className="absolute -top-56 left-1/2 -translate-x-1/2 h-[750px] w-[750px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.20) 0%, transparent 65%)", filter: "blur(45px)" }}
        />
        {/* Orange orb — mid left */}
        <div
          className="absolute top-[35%] -left-48 h-[550px] w-[550px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.16) 0%, transparent 65%)", filter: "blur(55px)" }}
        />
        {/* Deep blue orb — bottom right */}
        <div
          className="absolute bottom-0 -right-40 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(13,71,161,0.22) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        {/* Gold accent — upper right */}
        <div
          className="absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,193,7,0.10) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

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

      {/* ── ECOSYSTEM MODULE PRICING ── */}
      <section className="border-t border-[#1A2D50] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-4 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
              ⚡ Individual Module Pricing
            </div>
            <h2 className="mb-3 font-display text-3xl font-black md:text-4xl">
              Every Tool in the PEN2PRO Ecosystem
            </h2>
            <p className="mx-auto max-w-2xl text-slate-400 text-sm leading-relaxed">
              Use standalone modules or get everything bundled in a BusinessOS plan above. Each tool is built to work together — or independently.
            </p>
          </div>

          {/* Module Tab Selector */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {MODULES.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveModule(m.id)}
                className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-bold transition-all ${
                  activeModule === m.id
                    ? "border-transparent text-white shadow-lg"
                    : "border-[#1A2D50] text-slate-400 hover:text-white hover:border-slate-500 bg-[#0F1520]"
                }`}
                style={activeModule === m.id ? { background: m.color, boxShadow: `0 0 20px ${m.color}40` } : {}}
              >
                <span>{m.icon}</span>
                <span>{m.name}</span>
              </button>
            ))}
          </div>

          {/* Active Module Detail */}
          {mod && (
            <div
              key={mod.id}
              className="rounded-3xl border border-[#1A2D50] bg-[#0D1528] p-6 md:p-8"
              style={{ boxShadow: `0 0 60px ${mod.color}18` }}
            >
              {/* Module Header */}
              <div className="mb-6 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{mod.icon}</span>
                    <div>
                      <h3 className="font-display text-2xl font-black text-white">{mod.name}</h3>
                      <p className="text-sm text-slate-400">{mod.subtitle}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold text-white self-start md:self-auto"
                  style={{ background: `${mod.color}30`, border: `1px solid ${mod.color}50`, color: mod.color }}
                >
                  Included in: {mod.includedIn}
                </div>
              </div>

              {/* Tier Cards */}
              <div className={`grid gap-4 ${mod.tiers.length === 4 ? "sm:grid-cols-2 xl:grid-cols-4" : "sm:grid-cols-2 md:grid-cols-3"}`}>
                {mod.tiers.map((tier, i) => (
                  <div
                    key={tier.name}
                    className={`rounded-2xl border p-5 flex flex-col transition-all ${
                      i === mod.tiers.length - 1
                        ? "border-opacity-60"
                        : "border-[#1A2D50]"
                    }`}
                    style={
                      i === mod.tiers.length - 1
                        ? { borderColor: `${mod.color}60`, background: `${mod.color}08` }
                        : { background: "#0A0F1E" }
                    }
                  >
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: mod.color }}>
                      {tier.name}
                    </p>
                    <div className="mb-4 flex items-end gap-1">
                      <span className="font-display text-2xl font-black text-white leading-none">{tier.price}</span>
                      {tier.period && <span className="mb-0.5 text-xs text-slate-400">{tier.period}</span>}
                    </div>
                    <ul className="flex-1 space-y-2">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="mt-0.5 shrink-0 text-[10px]" style={{ color: mod.color }}>✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Module CTA */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-[#1A2D50] pt-6">
                <p className="text-xs text-slate-500">
                  All standalone plans can be upgraded or combined into a BusinessOS bundle for maximum savings.
                </p>
                <Link
                  to={`/waitlist?module=${mod.id}`}
                  className="shrink-0 rounded-xl px-6 py-2.5 text-sm font-black text-white transition-all hover:opacity-90"
                  style={{ background: mod.color, boxShadow: `0 4px 20px ${mod.color}40` }}
                >
                  Join Waitlist — {mod.name}
                </Link>
              </div>
            </div>
          )}

          {/* Bundle Savings Banner */}
          <div className="mt-8 rounded-2xl border border-[#1A2D50] bg-[#0F1520] px-6 py-5 text-center"
            style={{ background: "linear-gradient(135deg, rgba(30,136,229,0.06) 0%, rgba(255,138,0,0.06) 100%)" }}>
            <p className="text-sm font-semibold text-white mb-1">
              💡 Save More with a BusinessOS Bundle
            </p>
            <p className="text-xs text-slate-400 mb-4">
              BusinessOS Pro at $89/mo includes RMIE + Command Center + Website Builder + Domain Finder + Basic Voice Agent — versus $142+/mo buying standalone.
            </p>
            <Link to="/pricing#pro" className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-black text-[#0A0F1E] btn-gold">
              See Bundle Plans ↑
            </Link>
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
