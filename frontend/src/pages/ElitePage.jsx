import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ELITE_FEATURES = [
  {
    icon: "🧠",
    title: "Advanced RMIE Strategy Engine",
    body: "Deeper AI analysis — multi-scenario planning, market positioning, competitor gap identification, and an advanced monetization model built around your business.",
  },
  {
    icon: "📈",
    title: "Financial Projections",
    body: "12-month revenue projections, break-even analysis, startup cost modeling, and realistic income targets based on your specific offer and market.",
  },
  {
    icon: "🏦",
    title: "Vendor, Funding & Credit Resource Center",
    body: "A curated directory of lenders, credit programs, business banking options, vendor accounts, and tradeline strategies built for entrepreneurs at every stage.",
  },
  {
    icon: "⚖️",
    title: "Company Formation Checklist",
    body: "Step-by-step guidance on LLC formation, EIN registration, business bank setup, operating agreement, and the legal foundation every serious business needs.",
  },
  {
    icon: "™️",
    title: "Trademark, Brand & Social Guidance",
    body: "Trademark readiness, handle availability checks, social media strategy, content calendar foundation, and brand positioning for your market.",
  },
  {
    icon: "🎯",
    title: "Done-With-You Execution Guidance",
    body: "Not just a plan — step-by-step execution support. Think of it as a strategist walking alongside you through the launch and growth phase.",
  },
  {
    icon: "⚡",
    title: "Advanced Command Center + CRM",
    body: "Full CRM pipeline, lead management, customer tracking, automation flows, invoicing, and reporting — everything to run your business from one dashboard.",
  },
  {
    icon: "🎖️",
    title: "Priority Support",
    body: "Move to the front. Priority response time on support requests, roadmap questions, and strategic guidance when you need it most.",
  },
];

const ELITE_CALLOUTS = [
  {
    stat: "12-Month",
    label: "Revenue Projection",
  },
  {
    stat: "Done-With-You",
    label: "Execution Support",
  },
  {
    stat: "Full CRM",
    label: "Command Center",
  },
  {
    stat: "Priority",
    label: "Response Time",
  },
];

export default function ElitePage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -right-48 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[30%] -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.1) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,160,23,0.08) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2A1F00] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#D4A017] uppercase tracking-widest">
            👑 PEN2PRO Elite Plan
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Advanced Strategy.
            <br />
            <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Execution-Level Support.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-8">
            Elite is where strategy becomes execution. Financial projections, company formation guidance, advanced CRM, done-with-you support, and a complete business infrastructure — built for people serious about scaling.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite" className="rounded-xl px-8 py-4 text-sm font-black btn-gold text-[#0A0F1E]">
              Join Elite Waitlist — $499/mo
            </Link>
            <Link to="/founders" className="rounded-xl border border-[#D4A017]/40 px-8 py-4 text-sm font-semibold text-[#D4A017] hover:text-white transition-colors">
              See Founders Lifetime →
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">Launching June 15, 2026 · Join waitlist to lock in your spot</p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-[#1A2D50] bg-[#0F1520] px-5 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {ELITE_CALLOUTS.map((c) => (
              <div key={c.label} className="text-center">
                <p className="text-2xl font-black text-white mb-1">{c.stat}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Card */}
      <section className="px-5 py-10">
        <div className="mx-auto max-w-md">
          <div className="rounded-2xl border-2 border-[#D4A017] bg-[#0F1520] p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4A017] to-[#FF8A00]" />
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/30 px-3 py-1 text-xs font-bold text-[#D4A017] uppercase tracking-wider">
              👑 Most Advanced
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-2 mt-2">PEN2PRO Elite</p>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-5xl font-black text-white">$499</span>
              <span className="text-slate-400">/month</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">Billed monthly · Cancel anytime</p>
            <Link to="/waitlist?tier=elite" className="btn-gold block rounded-xl py-3.5 text-sm font-black text-[#0A0F1E] w-full">
              Join the Waitlist
            </Link>
            <p className="mt-3 text-xs text-slate-500">
              Or consider{" "}
              <Link to="/founders" className="text-[#D4A017] hover:underline">
                Founders Lifetime at $1,899
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">What Elite Includes</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything in Pro, Plus This
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Elite is the advanced tier — financial projections, legal foundation, done-with-you execution support, advanced automation, and priority guidance when you need it.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {ELITE_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#D4A017] to-[#FF8A00]" />
                <div className="pl-3">
                  <div className="mb-3 text-3xl">{f.icon}</div>
                  <h3 className="mb-2 font-bold text-white text-lg">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro vs Elite Comparison */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Pro vs Elite</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black md:text-4xl">
            When to Choose Elite Over Pro
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <p className="text-sm font-bold text-[#1E88E5] mb-4 uppercase tracking-widest">Choose Pro If...</p>
              <ul className="space-y-3">
                {[
                  "You're in the idea-to-launch phase",
                  "You need a full roadmap and outreach plan",
                  "You want branding direction and credit readiness",
                  "You're just getting your business off the ground",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-300">
                    <span className="text-[#1E88E5] shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#D4A017]/40 bg-[#0F1520] p-6">
              <p className="text-sm font-bold text-[#D4A017] mb-4 uppercase tracking-widest">Choose Elite If...</p>
              <ul className="space-y-3">
                {[
                  "You want financial projections and advanced strategy",
                  "You need company formation and legal foundation guidance",
                  "You're building a scalable business that needs CRM and automation",
                  "You want done-with-you support and priority access",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-300">
                    <span className="text-[#D4A017] shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Ready to Build at the Elite Level?
          </h2>
          <p className="mb-10 text-slate-400">
            Join the Elite waitlist and secure your spot before launch. Or consider Founders Lifetime — one payment, lifetime access.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Elite Waitlist
            </Link>
            <Link to="/founders" className="rounded-xl border border-[#D4A017]/40 px-8 py-3.5 text-sm font-semibold text-[#D4A017] hover:text-white transition-colors">
              See Founders Lifetime →
            </Link>
          </div>
          <div className="mt-8 flex justify-center gap-8 text-xs text-slate-500">
            <span>Cancel anytime</span>
            <span>·</span>
            <span>Launches June 15, 2026</span>
            <span>·</span>
            <span>Lock in your rate</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
