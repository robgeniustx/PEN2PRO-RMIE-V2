import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ELITE_FEATURES = [
  { icon: "🧠", title: "Advanced Strategist Guidance", body: "Elite-tier AI strategy mode for complex business builds, competitive positioning, and high-level execution planning." },
  { icon: "📈", title: "Financial Projections", body: "12-month revenue forecast, break-even analysis, cash flow projection, and profitability modeling for your business." },
  { icon: "🏛️", title: "Company Formation Checklist", body: "LLC, EIN, registered agent, operating agreement, business bank — every step with curated resource links." },
  { icon: "™️", title: "Trademark & Brand Protection", body: "Trademark readiness checklist, brand name conflict identification, and social media handle priority strategy." },
  { icon: "📦", title: "Vendor & Resource Center", body: "Curated directory of vetted vendors for business credit, funding, bookkeeping, insurance, and payment processing." },
  { icon: "💰", title: "Advanced Credit & Funding Roadmap", body: "Business credit tiers, personal fundability score, lender prep sequence, vendor tradelines, and net-30 accounts strategy." },
  { icon: "🎯", title: "Marketing & Social Media Strategy", body: "Platform-specific strategy, content calendar, audience targeting, influencer outreach, and paid ad readiness for your niche." },
  { icon: "🤝", title: "Done-With-You Style Guidance", body: "Not just templates — Elite gives you directional guidance at every build stage, like having a strategist in your corner." },
  { icon: "📋", title: "Full Business Plan Output", body: "Investor-ready business plan with executive summary, market analysis, competitive positioning, and financial tables." },
  { icon: "⚡", title: "Priority Support Access", body: "Elite users get first-in-queue priority for support, strategy reviews, and platform assistance." },
];

export default function ElitePage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(124,58,237,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Navbar />

      {/* ── HERO ── */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-4 py-1.5 text-xs font-bold text-[#7C3AED] uppercase tracking-widest">
            💎 PEN2PRO Elite Plan
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-5xl">
            Advanced Strategy.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #7C3AED, #1E88E5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Execution-Level Guidance.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Elite is for serious builders who need more than a roadmap. Financial projections, legal foundation guidance, vendor integrations, a full business plan, advanced marketing strategy, and priority support.
          </p>
          <div className="mb-6 inline-block rounded-2xl border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-8 py-5">
            <p className="text-5xl font-black" style={{ color: "#7C3AED" }}>
              $499<span className="text-2xl font-semibold text-slate-400">/mo</span>
            </p>
            <p className="text-sm text-slate-500 mt-1.5">Cancel anytime. No contracts.</p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center mt-4">
            <Link
              to="/waitlist?tier=elite"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-white transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #7C3AED, #1E88E5)" }}
            >
              Join Waitlist — Elite
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest" style={{ color: "#7C3AED" }}>
            What's Included
          </div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            The Full Elite Toolkit
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-slate-400">
            Elite goes deeper than any other tier. This is the platform for people who are serious about building a fundable, scalable business.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {ELITE_FEATURES.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 rounded-2xl bg-[#0F1520] p-6"
                style={{ border: "1px solid rgba(124,58,237,0.2)" }}
              >
                <div className="mt-1 shrink-0 text-2xl">{f.icon}</div>
                <div>
                  <h3 className="mb-1.5 font-bold text-white">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INCLUDES PRO CALLOUT ── */}
      <section className="px-5 py-12 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8 text-center">
            <div className="mb-3 text-3xl">✅</div>
            <h3 className="mb-3 font-display text-2xl font-black">Everything in Pro, Plus More</h3>
            <p className="text-slate-400 leading-relaxed">
              Elite includes every Pro feature — full RMIE blueprint, Command Center, Voice Agent, Website Builder, CRM, outreach scripts, export, and branding support — plus the advanced features listed above.
            </p>
            <div className="mt-6">
              <Link
                to="/pro"
                className="text-sm font-semibold text-[#7C3AED] hover:text-white transition-colors"
              >
                See what's included in Pro →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO ELITE IS FOR ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#7C3AED" }}>
            Who Elite Is For
          </div>
          <h2 className="mb-12 font-display text-3xl font-black md:text-4xl">
            Built for Builders Who Are Serious
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: "🏢", title: "Business Starters", body: "You have an idea or early business and want a complete legal, financial, and marketing foundation." },
              { icon: "💰", title: "Funding Seekers", body: "You want business credit, fundability, lender prep, and vendor tradelines — not just a checklist." },
              { icon: "📈", title: "Scale-Ready Builders", body: "You've validated demand and want real marketing strategy, financial projections, and execution guidance." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 text-3xl">{c.icon}</div>
                <h3 className="mb-2 font-bold text-white">{c.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Stop Planning. Start Executing.
          </h2>
          <p className="mb-10 text-slate-400">
            Join the Elite waitlist and get early access when we launch. Free roadmap still available anytime.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=elite"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-white transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #7C3AED, #1E88E5)" }}
            >
              Join Elite Waitlist
            </Link>
            <Link
              to="/founders"
              className="rounded-xl border border-[#D4A017]/30 px-8 py-3.5 text-sm font-semibold text-[#D4A017] hover:text-white transition-colors"
            >
              See Legacy Founder →
            </Link>
            <Link
              to="/starter"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
            >
              Start Free First
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
