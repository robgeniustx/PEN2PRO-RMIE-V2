import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ELITE_FEATURES = [
  { icon: "🗺️", title: "Everything in Pro", body: "Full RMIE blueprint, progress tracking, branding support, email/PDF export, AI refinement, outreach strategy, credit checklist — all included." },
  { icon: "🧠", title: "Advanced Strategist Guidance", body: "Done-with-you style AI support. Get refined strategy sessions, pivot recommendations, and market-specific execution plans." },
  { icon: "📈", title: "Financial Projections", body: "Revenue forecasts, break-even analysis, cost structure, and pricing models built around your business type and market." },
  { icon: "🏛️", title: "Legal Foundation Guidance", body: "Company formation checklist, trademark readiness, operating agreement guidance, and business structure recommendations." },
  { icon: "🤝", title: "Vendor & Funding Resource Center", body: "Curated vendor partnerships, funding partner matches, business credit tradelines, and lender preparation guidance." },
  { icon: "📣", title: "Marketing & Social Media Strategy", body: "30/60/90-day marketing roadmap, platform strategy, content calendar framework, ad readiness, and brand voice development." },
  { icon: "💳", title: "Full Credit & Funding Readiness", body: "Personal credit optimization, business credit foundation, fundability scoring, and lender-ready documentation checklist." },
  { icon: "⭐", title: "Priority Support", body: "Skip the line. Elite members get priority response for questions, roadmap reviews, and execution blockers." },
];

const ELITE_HIGHLIGHTS = [
  { stat: "45+", label: "Platform Features Unlocked" },
  { stat: "90-Day", label: "Execution Plan Included" },
  { stat: "Done-With-You", label: "Strategist Guidance Style" },
  { stat: "Priority", label: "Support Access" },
];

const BG_ORBS = (
  <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
    <div className="absolute -top-48 -left-48 h-[700px] w-[700px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(30,136,229,0.22) 0%, transparent 65%)", filter: "blur(40px)" }} />
    <div className="absolute top-[30%] -right-48 h-[600px] w-[600px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(255,138,0,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
    <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(13,71,161,0.25) 0%, transparent 65%)", filter: "blur(50px)" }} />
    <div className="absolute inset-0 opacity-[0.025]"
      style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
  </div>
);

export default function ElitePage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {BG_ORBS}
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,138,0,0.10) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            ⚡ PEN2PRO Elite
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Advanced Strategy.
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Full Execution Support.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Elite is the full platform — advanced strategist guidance, financial projections, legal foundation, vendor resources, funding readiness, and priority support. Built for builders who are serious about scaling.
          </p>
          <div className="mb-6 inline-flex items-baseline gap-1">
            <span className="text-5xl font-black text-white">$499</span>
            <span className="text-slate-400">/month</span>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E]"
              style={{ background: "linear-gradient(135deg, #FF8A00, #FF6B00)", boxShadow: "0 0 20px rgba(255,138,0,0.35)" }}>
              Join Elite Waitlist
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              View All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* ── STAT STRIP ── */}
      <section className="border-t border-b border-[#1A2D50] bg-[#0F1520] px-5 py-10">
        <div className="mx-auto max-w-4xl grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
          {ELITE_HIGHLIGHTS.map((h) => (
            <div key={h.label}>
              <div className="text-3xl font-black text-[#FF8A00]">{h.stat}</div>
              <div className="mt-1 text-xs text-slate-400 uppercase tracking-widest">{h.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Elite Features</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            The Full Arsenal
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Elite unlocks every tool PEN2PRO has — and adds strategist-level guidance, financial modeling, and done-with-you execution support.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {ELITE_FEATURES.map((f) => (
              <div key={f.title}
                className="rounded-2xl border p-6"
                style={{ borderColor: "rgba(255,138,0,0.2)", background: "linear-gradient(135deg, #0F1520 0%, #0D1428 100%)" }}>
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white text-lg">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Who Elite Is For</div>
          <h2 className="mb-8 text-center font-display text-3xl font-black">Built for Serious Builders</h2>
          <div className="space-y-4">
            {[
              "You have an idea or existing business and want a complete strategy — not just a plan, but execution.",
              "You need financial projections, legal foundation, and vendor resources — not just motivation.",
              "You want done-with-you AI guidance that adapts to your specific business, market, and situation.",
              "You're building toward funding and need to be lender-ready, not just credit-aware.",
              "You're scaling past the starter phase and need advanced automation, CRM, and marketing tools.",
            ].map((text) => (
              <div key={text} className="flex items-start gap-4 rounded-2xl border border-[#1A2D50] bg-[#0F1520] px-6 py-4">
                <span className="mt-0.5 text-[#FF8A00] text-lg shrink-0">✓</span>
                <p className="text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPGRADE NUDGE ── */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl rounded-2xl border p-10 text-center"
          style={{ borderColor: "rgba(255,138,0,0.25)", background: "linear-gradient(135deg, rgba(255,138,0,0.08) 0%, rgba(13,71,161,0.08) 100%)" }}>
          <div className="mb-3 text-4xl">👑</div>
          <h3 className="mb-3 font-display text-2xl font-black">Want Lifetime Access?</h3>
          <p className="mb-6 text-slate-400">
            The Founders Circle gives you everything Elite has — plus lifetime access, founder recognition, and early adopter benefits — for one flat price of $1,899. Only 200 spots available.
          </p>
          <Link to="/founders"
            className="inline-flex rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E]"
            style={{ background: "linear-gradient(135deg, #FF8A00, #FF6B00)" }}>
            Become a Legacy Founder
          </Link>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Ready to Go Elite?
          </h2>
          <p className="mb-10 text-slate-400">
            Join the waitlist and lock in your spot before Elite opens to the public.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E]"
              style={{ background: "linear-gradient(135deg, #FF8A00, #FF6B00)" }}>
              Join Elite Waitlist
            </Link>
            <Link to="/starter" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Try Free First
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
