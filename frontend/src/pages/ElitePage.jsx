import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const ELITE_FEATURES = [
  { icon: "🗺️", title: "Everything in Pro — Fully Included", body: "Full RMIE blueprint, 7/30/90-day plans, sales scripts, outreach strategy, PDF export, AI refinement, branding direction, and CRM access." },
  { icon: "📈", title: "Advanced RMIE Strategy Engine", body: "Deeper AI analysis, advanced market intelligence, competitive positioning, and high-level strategy output that goes beyond the standard Pro roadmap." },
  { icon: "💰", title: "Financial Projections", body: "Revenue projections, startup cost models, break-even analysis, and income targets tailored to your specific business model and market." },
  { icon: "🏛️", title: "Legal Foundation Guidance", body: "Company formation checklist, trademark awareness, business structure guidance (LLC, S-Corp, etc.), and basic legal readiness steps." },
  { icon: "🤝", title: "Vendor & Credit Resource Center", body: "Curated vendor network, net-30 account recommendations, tradeline guidance, and business credit partner connections." },
  { icon: "💳", title: "Funding Partner Readiness", body: "Lender preparation documents, funding partner introductions, SBA readiness checklist, and step-by-step funding application strategy." },
  { icon: "⚡", title: "Advanced Automation Tools", body: "Workflow automation, follow-up sequences, lead scoring, pipeline automations, and campaign tools to run your business on autopilot." },
  { icon: "📣", title: "Marketing & Social Strategy", body: "Full social media strategy, content calendar, posting templates, paid ad readiness, and brand voice guide for your specific audience." },
  { icon: "🎯", title: "Done-With-You Guidance Style", body: "Elite gives you guidance that feels less like an app and more like a strategist sitting next to you — specific, direct, and actionable at every step." },
  { icon: "🚀", title: "Priority Support", body: "Elite users move to the front of the line for support, guidance updates, and new feature access as the platform grows." },
];

const TIERS_COMPARE = [
  { label: "Full RMIE Blueprint",         free: false, pro: true,  elite: true },
  { label: "7 / 30 / 90-Day Plan",        free: false, pro: true,  elite: true },
  { label: "Sales Scripts",               free: false, pro: true,  elite: true },
  { label: "Financial Projections",       free: false, pro: false, elite: true },
  { label: "Advanced Strategy Engine",    free: false, pro: false, elite: true },
  { label: "Legal Foundation Checklist",  free: false, pro: false, elite: true },
  { label: "Vendor / Credit Network",     free: false, pro: false, elite: true },
  { label: "Funding Partner Readiness",   free: false, pro: false, elite: true },
  { label: "Advanced Automations",        free: false, pro: false, elite: true },
  { label: "Done-With-You Guidance",      free: false, pro: false, elite: true },
  { label: "Priority Support",            free: false, pro: false, elite: true },
];

function Check({ val }) {
  if (val) return <span className="text-[#00C9B1] font-bold">✓</span>;
  return <span className="text-slate-600">—</span>;
}

export default function ElitePage() {
  const [loading, setLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");

  const handleUpgrade = async () => {
    setCheckoutError("");
    setLoading(true);
    try {
      const result = await createCheckoutSession({ tier: "elite" });
      if (result?.checkout_url) {
        window.location.href = result.checkout_url;
        return;
      }
      setCheckoutError(result?.error || "Checkout is not live yet.");
    } catch {
      setCheckoutError("Unable to start checkout. Join the waitlist to lock in your spot.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">

      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -left-32 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,201,177,0.14) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[40%] -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,201,177,0.08) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 pt-24 pb-16 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00C9B1]/40 bg-[#00C9B1]/10 px-4 py-1.5 text-xs font-bold text-[#00C9B1] uppercase tracking-widest">
            ⚡ PEN2PRO Elite
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Advanced Strategy.
            <br />
            <span style={{ background: "linear-gradient(90deg, #00C9B1, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Full Execution Power.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Elite combines everything in Pro with advanced strategy output, financial projections,
            legal guidance, vendor networks, funding readiness, done-with-you support, and priority access.
            Built for builders serious about scaling.
          </p>

          {/* Pricing Badge */}
          <div className="mb-8 inline-block rounded-2xl border border-[#00C9B1]/40 bg-[#0a1f1f] px-10 py-6">
            <p className="text-5xl font-black text-white">
              $499<span className="text-xl text-slate-400 font-semibold">/mo</span>
            </p>
            <p className="mt-1 text-sm text-slate-400">Cancel anytime · No contracts · Everything unlocked</p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleUpgrade}
              disabled={loading}
              className="rounded-xl px-10 py-4 text-base font-black text-white shadow-[0_0_35px_rgba(0,201,177,0.35)] transition hover:scale-[1.02] disabled:opacity-60"
              style={{ background: "linear-gradient(135deg, #00C9B1, #1E88E5)" }}
            >
              {loading ? "Starting Checkout…" : "Upgrade to Elite — $499/mo"}
            </button>
            <Link
              to="/waitlist?tier=elite"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Join Elite Waitlist
            </Link>
          </div>

          {checkoutError && (
            <div className="mt-4 mx-auto max-w-md rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-4 py-3 text-sm text-yellow-200">
              {checkoutError}{" "}
              <Link to="/waitlist?tier=elite" className="underline text-yellow-300 font-semibold">
                Join the waitlist instead →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Feature grid */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#00C9B1]">What's Included</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything Elite Unlocks
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            Elite is the complete tier — everything Pro has plus advanced strategy, financial tools, funding readiness, and done-with-you execution support.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {ELITE_FEATURES.map((f) => (
              <div key={f.title} className="flex gap-4 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 transition hover:border-[#00C9B1]/30">
                <div className="text-2xl shrink-0 mt-0.5">{f.icon}</div>
                <div>
                  <h3 className="mb-1.5 font-bold text-white">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-tier comparison table */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Tier Comparison</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">Free vs Pro vs Elite</h2>
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] overflow-hidden">
            <div className="grid grid-cols-4 border-b border-[#1A2D50] bg-[#080C14] px-5 py-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Feature</span>
              <span className="text-center text-xs font-bold uppercase tracking-widest text-slate-500">Free</span>
              <span className="text-center text-xs font-bold uppercase tracking-widest text-[#2d9cff]">Pro</span>
              <span className="text-center text-xs font-bold uppercase tracking-widest text-[#00C9B1]">Elite</span>
            </div>
            {TIERS_COMPARE.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-4 px-5 py-3.5 text-sm ${i % 2 === 0 ? "bg-[#0F1520]" : "bg-[#080C14]/50"}`}
              >
                <span className="text-slate-300 font-medium text-xs leading-relaxed">{row.label}</span>
                <span className="text-center"><Check val={row.free} /></span>
                <span className="text-center"><Check val={row.pro} /></span>
                <span className="text-center"><Check val={row.elite} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Elite */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Why Elite</div>
          <h2 className="mb-6 text-center font-display text-3xl font-black">
            Pro Gets You Started. Elite Gets You Funded.
          </h2>
          <div className="rounded-2xl border border-[#00C9B1]/30 bg-[#0a1f1f]/60 p-8 text-center">
            <p className="text-slate-300 leading-relaxed text-lg">
              Most business platforms stop at the roadmap. Elite goes deeper — into financial projections, funding readiness, vendor networks,
              credit strategy, and legal foundations. It's the difference between knowing what to do and knowing how to fund and scale it.
            </p>
            <p className="mt-4 text-slate-400 text-sm">
              Elite is for entrepreneurs who aren't just testing an idea — they're building a real company and need the tools to back it up.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black">Build. Fund. Scale.</h2>
          <p className="mb-8 text-slate-400 text-lg">
            Elite gives you the complete toolkit to launch, fund, and scale your business — not just a plan.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleUpgrade}
              disabled={loading}
              className="rounded-xl px-10 py-4 text-sm font-black text-white shadow-[0_0_35px_rgba(0,201,177,0.3)] transition hover:scale-[1.02] disabled:opacity-60"
              style={{ background: "linear-gradient(135deg, #00C9B1, #1E88E5)" }}
            >
              {loading ? "…" : "Upgrade to Elite — $499/mo"}
            </button>
            <Link
              to="/founders"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              See Founders Lifetime →
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            <Link to="/pricing" className="hover:text-slate-300 transition-colors">View all plans</Link>
            {" · "}
            <Link to="/pro" className="hover:text-slate-300 transition-colors">Compare Pro</Link>
            {" · "}
            <Link to="/waitlist?tier=elite" className="hover:text-slate-300 transition-colors">Join Elite waitlist</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
