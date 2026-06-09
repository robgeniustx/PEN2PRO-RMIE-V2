import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MODULES = [
  {
    icon: "💰",
    title: "Revenue Acceleration",
    body: "Identify your highest-revenue offer, optimize pricing, and build a repeatable sales process that generates consistent income.",
  },
  {
    icon: "📣",
    title: "Marketing Strategy",
    body: "Platform-specific marketing plan, content framework, audience targeting, and conversion funnel built around your offer and market.",
  },
  {
    icon: "📬",
    title: "Outreach Campaigns",
    body: "Cold outreach scripts, email templates, DM sequences, and follow-up frameworks — everything you need to get in front of prospects.",
  },
  {
    icon: "🏷️",
    title: "Pricing Strategy",
    body: "Test your pricing, structure tiered offers, add upsells, and position your service to command premium rates without losing leads.",
  },
  {
    icon: "🎯",
    title: "Customer Acquisition",
    body: "Lead generation strategy, referral system setup, partnership development, and the 20 customer actions to execute in your first 30 days.",
  },
  {
    icon: "🏦",
    title: "Funding Readiness",
    body: "Evaluate your funding eligibility, build your business credit profile, prepare for lender conversations, and access a curated lender directory.",
  },
  {
    icon: "📝",
    title: "Sales Scripts",
    body: "Phone scripts, closing scripts, objection responses, and follow-up templates tailored to your specific offer and market.",
  },
  {
    icon: "📊",
    title: "30 / 60 / 90 Day Plan",
    body: "A phased execution framework that tells you exactly what to do each month — foundation, launch, and scale — to hit your income targets.",
  },
];

const PLAN = [
  {
    day: "Days 1–30",
    title: "Foundation & First Revenue",
    color: "#1E88E5",
    actions: [
      "Validate your offer with 5 real conversations",
      "Close your first 3 clients or customers",
      "Set up Google Business Profile and social presence",
      "Build your outreach list of 100 prospects",
      "Launch your referral program",
    ],
  },
  {
    day: "Days 31–60",
    title: "Launch & Lead Generation",
    color: "#D4A017",
    actions: [
      "Run a targeted outreach campaign (20 contacts/day)",
      "Test $10/day ad after validating organic demand",
      "Build email capture and follow-up sequence",
      "Collect 5 testimonials and publish them everywhere",
      "Apply for business funding if credit-ready",
    ],
  },
  {
    day: "Days 61–90",
    title: "Scale & Systemize",
    color: "#FF8A00",
    actions: [
      "Hire first contractor or VA if revenue supports it",
      "Automate follow-up with CRM or email tool",
      "Launch a second offer or upsell existing clients",
      "Scale ad spend based on profitable channels",
      "Review, refine, and set 90-day revenue targets",
    ],
  },
];

const RESULTS = [
  { metric: "7 days", label: "to your first outreach campaign" },
  { metric: "30 days", label: "to your first paying customer" },
  { metric: "60 days", label: "to consistent lead flow" },
  { metric: "90 days", label: "to a scalable revenue system" },
];

export default function AcceleratorPage() {
  return (
    <div className="relative min-h-screen bg-[#080C14] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-0 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.18) 0%, transparent 65%)", filter: "blur(45px)" }} />
        <div className="absolute top-[40%] -left-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.10) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,138,0,0.10) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            🚀 Accelerator Mode
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            30-60-90 Day
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Revenue Acceleration
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Accelerator gives you a phase-by-phase execution plan to go from idea to income — with marketing strategy, outreach campaigns, sales scripts, pricing optimization, and funding readiness built in.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #FF8A00 0%, #D4A017 100%)" }}>
              Join Pro to Unlock Accelerator
            </Link>
            <Link to="/starter"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Start Free First
            </Link>
          </div>
        </div>
      </section>

      {/* RESULT METRICS */}
      <section className="px-5 pb-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {RESULTS.map((r) => (
              <div key={r.metric} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5 text-center">
                <div className="text-2xl font-black text-[#FF8A00]">{r.metric}</div>
                <div className="mt-1 text-xs text-slate-400 leading-snug">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">What Accelerator Includes</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            8 Revenue Acceleration Modules
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Accelerator is not generic advice. Each module gives you specific actions, scripts, templates, and frameworks built around your idea, market, and income goals.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {MODULES.map((m) => (
              <div key={m.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
                <div className="mb-3 text-2xl">{m.icon}</div>
                <h3 className="mb-1.5 font-bold text-white text-sm">{m.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30/60/90 PLAN */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">The 90-Day Framework</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black">Exactly What to Do. In What Order.</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            No vague advice. No "post on social media." Every action item is specific, measurable, and sequenced in the order that produces results.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {PLAN.map((phase) => (
              <div key={phase.day} className="rounded-2xl overflow-hidden border border-[#1A2D50] bg-[#0F1520]">
                <div className="px-6 py-5" style={{ background: `${phase.color}10`, borderBottom: `2px solid ${phase.color}30` }}>
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: phase.color }}>{phase.day}</div>
                  <div className="font-black text-white text-lg">{phase.title}</div>
                </div>
                <ul className="p-6 space-y-3">
                  {phase.actions.map((action) => (
                    <li key={action} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="shrink-0 mt-0.5 font-black text-xs" style={{ color: phase.color }}>→</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL HAVE */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">After 90 Days</div>
          <h2 className="mb-10 font-display text-3xl font-black">What You'll Have Built</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "A validated, revenue-generating offer",
              "A consistent lead generation system",
              "A tested outreach and follow-up process",
              "Business credit and funding readiness",
              "A working marketing funnel",
              "Real customers and real testimonials",
              "A 90-day track record of execution",
              "A scalable business foundation",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-[#1A2D50] bg-[#0F1520] px-4 py-3 text-left">
                <span className="text-[#FF8A00] shrink-0">✓</span>
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIER ACCESS */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Accelerator Access</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">Included in Pro, Elite, and Founders</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                plan: "Pro",
                price: "$249/mo",
                color: "#1E88E5",
                includes: ["Full RMIE Blueprint", "7/30/90-Day Plan", "Marketing Strategy", "Outreach Scripts", "Sales Scripts", "Funding Readiness Checklist"],
                cta: "Join Pro Waitlist",
                href: "/waitlist?tier=pro",
              },
              {
                plan: "Elite",
                price: "$499/mo",
                color: "#FF8A00",
                includes: ["Everything in Pro", "Advanced Strategy Guidance", "Financial Projections", "Done-With-You Support", "Priority Access", "Vendor Resources"],
                cta: "Join Elite Waitlist",
                href: "/waitlist?tier=elite",
                highlight: true,
              },
              {
                plan: "Founders",
                price: "$1,899 one-time",
                color: "#D4A017",
                includes: ["Everything in Elite", "Lifetime Access", "Early Feature Access", "Founders Badge", "Founders Community"],
                cta: "Join Founders Waitlist",
                href: "/waitlist?tier=founders",
              },
            ].map((tier) => (
              <div key={tier.plan}
                className="rounded-2xl bg-[#0F1520] p-6 flex flex-col"
                style={{ border: `1px solid ${tier.highlight ? tier.color : "#1A2D50"}`, boxShadow: tier.highlight ? `0 0 30px ${tier.color}15` : "none" }}>
                <div className="font-bold text-white mb-1">{tier.plan}</div>
                <div className="text-lg font-black mb-4" style={{ color: tier.color }}>{tier.price}</div>
                <ul className="space-y-2 mb-6 flex-1">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-slate-300">
                      <span style={{ color: tier.color }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
                <Link to={tier.href}
                  className="block w-full rounded-xl py-3 text-center text-sm font-black text-[#080C14]"
                  style={{ background: `linear-gradient(135deg, ${tier.color} 0%, #FF8A00 100%)` }}>
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Stop Planning. Start Executing.
          </h2>
          <p className="mb-10 text-slate-400">
            The difference between an idea and income is execution. Join the waitlist and get full access to Accelerator when Pro launches.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #FF8A00 0%, #D4A017 100%)" }}>
              Join the Waitlist
            </Link>
            <Link to="/starter"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Start Free First
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
