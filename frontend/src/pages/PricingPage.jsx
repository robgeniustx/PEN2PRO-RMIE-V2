import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const LAUNCH_DATE = new Date("2026-06-10T00:00:00Z");

const standaloneTools = [
  { name: "CRM Pro", price: 149 },
  { name: "Voice AI", price: 99 },
  { name: "Website Builder", price: 79 },
  { name: "Command Center", price: 99 },
  { name: "Funding System", price: 99 },
];

const plans = [
  {
    id: "free",
    name: "RMIE FREE",
    price: "$0",
    period: "Forever",
    position: "For founders getting started.",
    cta: "Start Free",
    ctaLink: "/starter",
    features: [
      "Basic RMIE dashboard",
      "Starter roadmap",
      "Limited AI generations",
      "Basic website preview",
      "Community access",
      "Intro automation tools",
    ],
  },
  {
    id: "pro",
    name: "RMIE PRO",
    price: "$249",
    period: "/mo",
    badge: "MOST POPULAR",
    highlight: true,
    position: "For growing businesses ready to automate operations and scale.",
    valueLine: "Over $525/mo in standalone value.",
    cta: "Upgrade to Pro",
    ctaLink: "/waitlist?tier=pro",
    features: [
      "Full AI CRM",
      "AI Voice Agent",
      "Website Builder",
      "Command Center",
      "Funding Readiness System",
      "Workflow Automations",
      "Pipeline Tracking",
      "Lead Capture",
      "AI Business Roadmaps",
      "SMS + Email Automations",
      "Advanced Integrations",
      "AI Insights Dashboard",
    ],
  },
  {
    id: "elite",
    name: "RMIE ELITE",
    price: "$599",
    period: "/mo",
    position: "For operators, agencies, and scaling teams.",
    cta: "Go Elite",
    ctaLink: "/waitlist?tier=elite",
    features: [
      "Everything in Pro",
      "Multi-user access",
      "Team permissions",
      "Advanced AI workflows",
      "White-label capabilities",
      "Multi-location management",
      "Revenue analytics",
      "Automation builder",
      "Enterprise automations",
      "API access",
      "Advanced AI orchestration",
      "Priority onboarding",
      "Concierge support",
    ],
  },
];

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
    <div className="min-w-[72px] rounded-xl border border-[#1A2D50] bg-[#0F1520] px-4 py-3 text-center">
      <p className="font-display text-2xl font-black text-[#5ab0ff]">{String(val ?? 0).padStart(2, "0")}</p>
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{label}</p>
    </div>
  );
}

export default function PricingPage() {
  const t = useCountdown();
  const totalValue = standaloneTools.reduce((sum, tool) => sum + tool.price, 0);
  const savings = totalValue - 249;

  return (
    <div className="min-h-screen overflow-hidden bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 pb-16 pt-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 font-display text-4xl font-black leading-tight md:text-6xl">One AI Operating System For Your Entire Business</h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-slate-300">Replace disconnected software, automate operations, capture more leads, and scale your business with the PEN2PRO RMIE ecosystem.</p>
          <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/starter" className="rounded-xl bg-[#2d9cff] px-7 py-3 text-sm font-black text-[#081226] shadow-[0_0_35px_rgba(45,156,255,0.45)] transition hover:scale-[1.02]">Start Free</Link>
            <Link to="/waitlist" className="rounded-xl border border-[#1A2D50] px-7 py-3 text-sm font-bold text-slate-200 transition hover:border-slate-400 hover:text-white">Book Demo</Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            {["AI-powered workflows", "CRM automation", "Voice AI", "Website Builder", "Funding Readiness", "Command Center", "Workflow Automation"].map((item) => (
              <span key={item} className="rounded-full border border-[#1A2D50] bg-[#0F1520] px-3 py-1">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-3xl border border-[#1A2D50] bg-[#0F1520]/80 p-6 md:grid-cols-2 md:p-8">
          <div className="rounded-2xl border border-[#27324a] bg-[#0A0F1E] p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Buying Separately</p>
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
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#87c8ff]">Inside RMIE</p>
            <p className="mb-2 font-display text-4xl font-black">RMIE Pro</p>
            <p className="mb-4 text-3xl font-black text-white">ONLY $249/mo</p>
            <span className="inline-flex rounded-full border border-emerald-300/40 bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-300">Save ${savings}/month</span>
            <p className="mt-4 text-slate-200">Everything connected. Everything automated. One ecosystem.</p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.id} className={`relative rounded-2xl border p-7 transition hover:-translate-y-1 ${plan.highlight ? "border-[#2d9cff] bg-[#101a30] shadow-[0_0_45px_rgba(45,156,255,0.3)]" : "border-[#1A2D50] bg-[#0F1520]"}`}>
              {plan.badge && <span className="absolute -top-3 left-6 rounded-full bg-[#2d9cff] px-3 py-1 text-[10px] font-black tracking-wider text-[#081226]">{plan.badge}</span>}
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{plan.name}</p>
              <div className="mt-2 flex items-end gap-1">
                <span className="font-display text-4xl font-black">{plan.price}</span>
                <span className="mb-1 text-sm text-slate-400">{plan.period}</span>
              </div>
              <p className="mt-3 text-sm text-slate-300">{plan.position}</p>
              {plan.valueLine && <p className="mt-2 text-sm font-semibold text-[#87c8ff]">{plan.valueLine}</p>}
              <ul className="mt-5 space-y-2 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2"><span className="text-[#2d9cff]">✓</span>{feature}</li>
                ))}
              </ul>
              <Link to={plan.ctaLink} className={`mt-6 block rounded-xl py-3 text-center text-sm font-black transition ${plan.highlight ? "bg-[#2d9cff] text-[#081226]" : "border border-[#1A2D50] text-slate-200 hover:border-slate-400"}`}>{plan.cta}</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#1A2D50] bg-[#0B1222] px-5 py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#6f86b340] bg-[#0F1520] p-8 text-center shadow-[0_0_40px_rgba(111,134,179,0.15)]">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Founder Access</p>
          <h3 className="mb-3 font-display text-3xl font-black">Founder Access Launching Soon</h3>
          <p className="mx-auto mb-6 max-w-3xl text-slate-300">Lifetime ecosystem access for early operators who want deeper influence in the RMIE Growth Ecosystem and AI-Powered Operations roadmap.</p>
          <div className="mb-6 flex justify-center gap-3">
            <CountBox val={t.days} label="Days" />
            <CountBox val={t.hours} label="Hours" />
            <CountBox val={t.minutes} label="Min" />
            <CountBox val={t.seconds} label="Sec" />
          </div>
          <div className="grid gap-2 text-sm text-slate-200 md:grid-cols-2">
            {["Lifetime ecosystem access", "Founder-only benefits", "Early feature access", "Priority onboarding", "Exclusive founder community", "Locked pricing benefits", "Private beta systems", "Priority roadmap influence"].map((item) => (
              <p key={item} className="rounded-xl border border-[#1A2D50] bg-[#0A0F1E] px-3 py-2">{item}</p>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
