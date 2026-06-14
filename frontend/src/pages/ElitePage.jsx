import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  { icon: "🗺️", title: "Everything in Pro", body: "Full RMIE blueprint, progress tracking, branding direction, outreach strategy, PDF/email export, credit & funding checklist, and marketing plan." },
  { icon: "🧠", title: "Advanced Strategist Guidance", body: "Deeper AI-powered strategy sessions for offer positioning, revenue model validation, and competitive differentiation." },
  { icon: "📈", title: "Financial Projections", body: "12-month revenue projections, break-even analysis, profit margin modeling, and realistic income milestones for your specific offer." },
  { icon: "🏛️", title: "Company Formation Checklist", body: "Step-by-step guide to LLC formation, EIN application, business banking setup, registered agent, operating agreement, and initial compliance." },
  { icon: "™️", title: "Trademark & Brand Protection Guidance", body: "Understand when and how to protect your brand name, logo, and intellectual property as your business grows." },
  { icon: "📣", title: "Advanced Marketing Strategy", body: "Content calendars, platform-specific strategies, organic growth plans, and paid ad readiness assessments for Facebook, Instagram, Google, and TikTok." },
  { icon: "💼", title: "Vendor & Resource Center", body: "Curated vendor directory for bookkeeping, legal, insurance, payment processing, CRM, and business tools — with vetted affiliate partners." },
  { icon: "🏦", title: "Full Funding & Credit Center", body: "Business credit building roadmap, personal credit optimization steps, lender preparation checklist, and tradeline guidance." },
  { icon: "⚡", title: "Priority Support", body: "Get ahead of the queue. Elite members receive priority responses and first access to new RMIE features as they launch." },
  { icon: "🤝", title: "Done-With-You Style Guidance", body: "Elite isn't just software. It's structured guidance that walks you through decisions instead of leaving you to figure it out alone." },
];

const TIERS = [
  { label: "Free", path: "/starter", style: "border-[#1A2D50] text-slate-400" },
  { label: "Pro", path: "/pro", style: "border-[#1E88E5]/40 text-[#1E88E5]" },
  { label: "Elite", path: "/elite", style: "border-[#FF8A00]/40 text-[#FF8A00] bg-[#FF8A00]/5", current: true },
  { label: "Founders", path: "/founders", style: "border-[#D4A017]/40 text-[#D4A017]" },
];

const BG_ORBS = (
  <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
    <div className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(255,138,0,0.18) 0%, transparent 65%)", filter: "blur(40px)" }} />
    <div className="absolute top-[35%] -right-48 h-[500px] w-[500px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(30,136,229,0.14) 0%, transparent 65%)", filter: "blur(50px)" }} />
    <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
    <div className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
  </div>
);

export default function ElitePage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {BG_ORBS}
      <Navbar />

      {/* ── TIER NAV ── */}
      <div className="border-b border-[#1A2D50] bg-[#080C14]">
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-2 px-5 py-3 flex-wrap">
          {TIERS.map((t) => (
            <Link key={t.label} to={t.path}
              className={`rounded-lg border px-4 py-1.5 text-xs font-bold transition-colors ${t.style} ${t.current ? "" : "hover:text-white hover:border-slate-500"}`}>
              {t.label} {t.current && "✓"}
            </Link>
          ))}
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,138,0,0.10) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            ⚡ PEN2PRO Elite
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Advanced Strategy.
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Full Execution Support.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Elite is for builders who are serious about execution. Financial projections, company formation, advanced marketing strategy, vendor resources, and priority guidance — all in one place.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Elite Waitlist
            </Link>
            <Link to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">Launching soon · Early access pricing available for waitlist members</p>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Elite Features</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything Pro Has. Plus the Execution Layer.
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Pro builds your roadmap. Elite walks you through executing it — with financial models, legal foundation steps, advanced marketing, and real vendor resources.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {FEATURES.map((f) => (
              <div key={f.title}
                className={`rounded-2xl border p-6 hover:border-[#FF8A00]/40 transition-colors ${f.icon === "🗺️" ? "border-[#1E88E5]/30 bg-[#0F1520]" : "border-[#1A2D50] bg-[#0F1520]"}`}>
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Who Elite Is For</div>
          <h2 className="mb-12 text-center font-display text-3xl font-black md:text-4xl">
            Built for the Builder Who Is Ready to Execute
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { icon: "🚀", label: "You have a business idea and need more than a roadmap — you need execution support." },
              { icon: "📊", label: "You want financial projections, not just motivation. Real numbers for your real business." },
              { icon: "🏛️", label: "You're ready to set up your LLC, EIN, business bank, and brand properly." },
              { icon: "💰", label: "You want to understand your funding options and build toward business credit." },
              { icon: "📣", label: "You need a real marketing strategy — not just 'post on social media.'" },
              { icon: "⚡", label: "You want priority support and done-with-you style guidance from a real system." },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-center">
                <div className="mb-3 text-3xl">{item.icon}</div>
                <p className="text-sm text-slate-300 leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 inline-block rounded-2xl border border-[#FF8A00]/30 bg-[#0F1520] px-8 py-5">
            <p className="text-sm text-slate-400 line-through">$499/mo</p>
            <p className="font-display text-4xl font-black text-white">Founding Price</p>
            <p className="text-sm text-[#FF8A00] font-semibold mt-1">Join the waitlist to lock in early pricing</p>
          </div>
          <h2 className="mb-4 font-display text-3xl font-black">
            Stop Guessing. Start Executing.
          </h2>
          <p className="mb-10 text-slate-400">
            Elite members get financial projections, company formation guidance, advanced marketing strategy, and priority support. Join the waitlist to secure early pricing.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Elite Waitlist
            </Link>
            <Link to="/founders"
              className="rounded-xl border border-[#D4A017]/40 px-8 py-3.5 text-sm font-semibold text-[#D4A017] hover:text-white transition-colors">
              See Founders Lifetime →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
