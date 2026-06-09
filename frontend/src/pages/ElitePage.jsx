import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  {
    icon: "🗺️",
    title: "Everything in Pro",
    body: "Full RMIE blueprint, progress tracking, branding support, email/PDF export, AI refinement, outreach strategy, and credit/funding readiness.",
  },
  {
    icon: "🧠",
    title: "Advanced Strategist Guidance",
    body: "Elite-level strategy guidance that goes beyond a roadmap — done-with-you execution support, advanced business structure, and real decision-making frameworks.",
  },
  {
    icon: "📈",
    title: "Financial Projections",
    body: "Revenue projections, startup cost analysis, break-even modeling, pricing optimization, and 12-month income target planning.",
  },
  {
    icon: "🏦",
    title: "Vendor & Funding Resource Center",
    body: "Curated vendor recommendations, lender preparation tools, business credit tradeline guidance, and a funding-readiness score with step-by-step improvement plan.",
  },
  {
    icon: "🏛️",
    title: "Company Formation Checklist",
    body: "LLC, EIN, operating agreement, registered agent, business banking, accounting setup, insurance, and contract basics — all in one checklist.",
  },
  {
    icon: "⚖️",
    title: "Trademark & Legal Foundation",
    body: "Trademark search guidance, brand protection steps, basic contract templates overview, and business legal foundation checklist.",
  },
  {
    icon: "📱",
    title: "Marketing & Social Media Guidance",
    body: "Platform selection strategy, content calendar framework, social profile setup checklist, hashtag strategy, and ad-readiness preparation.",
  },
  {
    icon: "🤝",
    title: "Done-With-You Style Support",
    body: "Elite users get priority access to strategy prompts, execution checklists, and AI-powered refinements at a deeper level than Pro.",
  },
  {
    icon: "⚡",
    title: "Priority Support",
    body: "Priority response queue for Elite members. Get support faster and access advanced features before they roll out to lower tiers.",
  },
];

const PHASES = [
  {
    phase: "Foundation",
    timeline: "Days 1–30",
    color: "#1E88E5",
    items: [
      "Business entity setup (LLC, EIN, bank)",
      "Brand identity & offer creation",
      "Financial baseline & projections",
      "Credit readiness assessment",
      "Initial marketing setup",
    ],
  },
  {
    phase: "Launch",
    timeline: "Days 31–60",
    color: "#D4A017",
    items: [
      "First customer acquisition plan",
      "Outreach campaign execution",
      "Pricing refinement",
      "Social media presence launch",
      "Funding applications if ready",
    ],
  },
  {
    phase: "Scale",
    timeline: "Days 61–90",
    color: "#FF8A00",
    items: [
      "Revenue acceleration strategy",
      "Automation & systemization",
      "Team or contractor readiness",
      "Advanced marketing campaigns",
      "Revenue milestone review",
    ],
  },
];

export default function ElitePage() {
  return (
    <div className="relative min-h-screen bg-[#080C14] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.18) 0%, transparent 65%)", filter: "blur(45px)" }} />
        <div className="absolute top-[35%] -left-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 right-1/3 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,138,0,0.10) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            🔥 PEN2PRO Elite — $499/mo
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Advanced Strategy.
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Elite Execution.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Elite is for builders who are ready to move fast. Advanced strategist guidance, financial projections, legal-foundation tools, vendor resources, and done-with-you execution support.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #FF8A00 0%, #D4A017 100%)" }}>
              Join Elite Waitlist
            </Link>
            <Link to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              View All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* PRICE CARD */}
      <section className="px-5 pb-16">
        <div className="mx-auto max-w-sm">
          <div className="rounded-2xl border border-[#FF8A00]/30 bg-[#0F1520] p-8 text-center"
            style={{ boxShadow: "0 0 40px rgba(255,138,0,0.12)" }}>
            <div className="mb-1 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Elite</div>
            <div className="mb-2 text-5xl font-black text-white">$499</div>
            <div className="mb-1 text-slate-400 text-sm">per month</div>
            <div className="mb-6 text-xs text-slate-500">Cancel anytime. Full access from day one.</div>
            <Link to="/waitlist?tier=elite"
              className="block w-full rounded-xl py-3.5 text-sm font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #FF8A00 0%, #D4A017 100%)" }}>
              Join Elite Waitlist
            </Link>
            <p className="mt-3 text-xs text-slate-500">Subscriptions opening soon. Waitlist members get early access.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">What Elite Includes</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            The Full Execution Stack
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Elite includes everything in Pro plus the advanced tools, resources, and guidance needed to build a real company — legally structured, financially prepared, and market-ready.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title}
                className={`rounded-2xl border bg-[#0F1520] p-6 ${f.title === "Everything in Pro" ? "border-[#1E88E5]/40" : "border-[#1A2D50]"}`}>
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30/60/90 PHASES */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">Execution Framework</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black">Your 90-Day Launch Plan</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Elite members get a structured 30/60/90-day execution plan — not just a roadmap but a real phase-by-phase business launch framework.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {PHASES.map((ph) => (
              <div key={ph.phase} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] overflow-hidden">
                <div className="px-6 py-4" style={{ borderBottom: `2px solid ${ph.color}30`, background: `${ph.color}08` }}>
                  <div className="font-black text-white text-lg">{ph.phase}</div>
                  <div className="text-xs font-semibold mt-0.5" style={{ color: ph.color }}>{ph.timeline}</div>
                </div>
                <ul className="space-y-2.5 p-6">
                  {ph.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="mt-0.5 shrink-0 text-xs font-bold" style={{ color: ph.color }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Who Elite Is For</div>
          <h2 className="mb-10 font-display text-3xl font-black">Serious Builders Ready to Move Fast</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "You want more than a roadmap — you need execution support",
              "You're ready to form your business entity and set up your financial foundation",
              "You need financial projections and funding readiness tools",
              "You want legal and trademark guidance built into your strategy",
              "You need done-with-you support, not just AI-generated output",
              "You want to go from idea to income in 90 days or less",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4 text-left">
                <span className="mt-0.5 text-[#FF8A00] shrink-0">✓</span>
                <p className="text-sm text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Ready for the Full Execution Stack?
          </h2>
          <p className="mb-10 text-slate-400">
            Join the Elite waitlist and be first in line when subscriptions open. No credit card needed to reserve your spot.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #FF8A00 0%, #D4A017 100%)" }}>
              Join Elite Waitlist
            </Link>
            <Link to="/founders"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Or Become a Founder →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
