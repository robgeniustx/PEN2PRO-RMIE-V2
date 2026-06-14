import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PRO_FEATURES = [
  { icon: "🗺️", title: "Full RMIE Business Blueprint", body: "Complete 7-day, 30-day, and 90-day execution plan built around your specific idea, market, and budget." },
  { icon: "📊", title: "Full Progress Tracking", body: "Track every milestone, task, and action item from your roadmap in one place — no spreadsheets needed." },
  { icon: "🏢", title: "Business Branding Support", body: "Brand name ideas, tagline suggestions, color direction, and positioning strategy for your niche." },
  { icon: "📄", title: "Email & PDF Export", body: "Export your full roadmap and business plan as a PDF or send it directly to your email for sharing and storage." },
  { icon: "🤖", title: "AI Refinement Engine", body: "Ask follow-up questions, adjust your strategy, and get refined outputs as your business evolves." },
  { icon: "📣", title: "Outreach Strategy", body: "Prospecting scripts, cold outreach templates, and daily client acquisition tactics for your specific industry." },
  { icon: "💳", title: "Credit & Funding Readiness Checklist", body: "Know exactly what personal credit score, business accounts, and documentation you need before applying for funding." },
  { icon: "🔧", title: "P2P Command Center Access", body: "CRM basics, contact management, and pipeline tracking built for small businesses and solopreneurs." },
  { icon: "🌐", title: "Website Builder Access", body: "Build a professional business website or landing page — no code required." },
];

const COMPARISON = [
  { feature: "Business Blueprint", free: "1 basic preview", pro: "Unlimited + full detail" },
  { feature: "90-Day Execution Plan", free: "Locked", pro: "✓ Full access" },
  { feature: "Sales Scripts", free: "Locked", pro: "✓ Included" },
  { feature: "Credit Readiness Checklist", free: "Locked", pro: "✓ Included" },
  { feature: "PDF Export", free: "Locked", pro: "✓ Included" },
  { feature: "AI Refinement", free: "Locked", pro: "✓ Included" },
  { feature: "Outreach Strategy", free: "Locked", pro: "✓ Included" },
  { feature: "Progress Tracking", free: "Basic", pro: "✓ Full tracking" },
  { feature: "Command Center CRM", free: "Locked", pro: "✓ Included" },
  { feature: "Website Builder", free: "Locked", pro: "✓ Included" },
];

export default function ProPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #2d9cff 0%, transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2d9cff]/40 bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#5ab0ff] uppercase tracking-widest">
            ⚡ PEN2PRO Pro
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            Your Full Roadmap.
            <br />
            <span style={{ background: "linear-gradient(90deg, #2d9cff, #00C9B1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Real Strategy. Real Tools.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Pro gives you the full execution engine — complete blueprints, sales scripts, credit readiness, branding support, CRM tools, and AI refinement. Built for builders who are serious about moving from idea to income.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="btn-gold rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14]">
              Join Pro Waitlist — $249/mo
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">Launch: June 15, 2026 · Join the waitlist to lock in Pro pricing</p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#5ab0ff]">What You Get</p>
            <h2 className="font-display text-4xl font-black">Everything in Pro</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRO_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2D50] bg-[#080C14] p-6 hover:border-[#2d9cff]/40 transition-colors">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE vs PRO COMPARISON */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Free vs Pro</p>
            <h2 className="font-display text-3xl font-black">Why Pro changes everything</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#1A2D50]">
            <div className="grid grid-cols-3 border-b border-[#1A2D50] bg-[#0F1520] px-5 py-3.5 text-xs font-bold uppercase tracking-widest text-slate-500">
              <span>Feature</span>
              <span className="text-center">Free</span>
              <span className="text-center text-[#5ab0ff]">Pro</span>
            </div>
            {COMPARISON.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 px-5 py-4 text-sm ${i % 2 === 0 ? "bg-[#080C14]" : "bg-[#0A0F1E]"}`}>
                <span className="text-slate-300 font-medium">{row.feature}</span>
                <span className="text-center text-slate-600">{row.free}</span>
                <span className="text-center font-semibold text-[#5ab0ff]">{row.pro}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING CTA */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-xl text-center">
          <div className="rounded-3xl border border-[#2d9cff]/40 bg-[#0F1520] p-10 shadow-[0_0_60px_rgba(45,156,255,0.15)]">
            <p className="text-xs font-bold uppercase tracking-widest text-[#5ab0ff] mb-3">PEN2PRO Pro</p>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="font-display text-5xl font-black text-white">$249</span>
              <span className="text-slate-400 text-lg">/mo</span>
            </div>
            <p className="text-slate-400 mb-8">Full execution engine. Cancel anytime.</p>
            <Link to="/waitlist?tier=pro" className="btn-gold block w-full rounded-xl py-4 text-sm font-black text-[#080C14] mb-4">
              Join Pro Waitlist
            </Link>
            <Link to="/elite" className="block text-sm font-semibold text-[#00C9B1] hover:opacity-80 transition">
              Need more? Explore Elite →
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-600">
            Not ready? <Link to="/starter" className="text-[#D4A017] hover:opacity-80">Start with the free roadmap →</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
