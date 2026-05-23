import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const FEATURES = [
  { icon: "⚡", title: "Everything in Pro", body: "All Pro features included — full roadmap, progress tracking, branding, exports, AI refinement, outreach strategy, and credit readiness." },
  { icon: "🧠", title: "Advanced Strategist Guidance", body: "Done-with-you strategy sessions powered by AI, giving you advisor-level direction without the $5,000/month consultant price tag." },
  { icon: "📈", title: "Financial Projections", body: "12-month revenue models, break-even analysis, pricing optimization, and profit margin projections specific to your business model." },
  { icon: "🏦", title: "Vendor, Funding & Credit Resource Center", body: "Curated lender directory, vendor tradeline sources, business credit builder programs, and grant databases matched to your profile." },
  { icon: "⚖️", title: "Company Formation Checklist", body: "LLC formation, EIN filing, registered agent setup, operating agreement templates, and state-specific compliance steps." },
  { icon: "™️", title: "Trademark & Brand Protection", body: "Trademark search guidance, USPTO filing overview, brand protection strategy, and IP foundations for serious founders." },
  { icon: "📱", title: "Social Media & Marketing Guidance", body: "Platform-specific content strategy, posting cadence, audience targeting, paid ad entry points, and brand voice development." },
  { icon: "🎯", title: "30/60/90-Day Execution Plan", body: "A structured, sprint-based execution roadmap that tells you exactly what to do each day to launch, grow, and monetize." },
  { icon: "🚀", title: "Priority Support", body: "Skip the queue. Elite members get priority response on support requests and access to new features first." },
];

const TIERS = [
  { name: "Pro", price: "$249/mo", active: false, link: "/pro" },
  { name: "Elite", price: "$499/mo", active: true, link: "/elite" },
  { name: "Founders Lifetime", price: "$1,899 once", active: false, link: "/founders" },
];

export default function ElitePage() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function handleCheckout() {
    setErr("");
    setLoading(true);
    try {
      const result = await createCheckoutSession({ tier: "elite" });
      if (result?.checkout_url) { window.location.href = result.checkout_url; return; }
      setErr(result?.error || "Checkout is not live yet. Join the waitlist below.");
    } catch {
      setErr("Unable to start checkout. Join the waitlist below.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-24 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.12),transparent_70%)]" />
        <div className="relative mx-auto max-w-3xl">
          <span className="mb-4 inline-block rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-purple-300">
            PEN2PRO Elite
          </span>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            Advanced Strategy.<br />Full Execution Support.
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Elite is for founders who are done planning and ready to execute. Get advanced AI strategist guidance, financial projections, legal foundations, vendor resources, and a 30/60/90-day sprint plan that puts you in motion.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="rounded-xl bg-purple-500 px-8 py-3.5 text-sm font-black text-white shadow-[0_0_35px_rgba(124,58,237,0.4)] transition hover:scale-[1.02] hover:bg-purple-400 disabled:opacity-60"
            >
              {loading ? "Starting Checkout…" : "Upgrade to Elite — $499/mo"}
            </button>
            <Link to="/waitlist?tier=elite" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-bold text-slate-200 transition hover:border-slate-400 hover:text-white">
              Join Elite Waitlist
            </Link>
          </div>
          {err && <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">{err}</p>}
          <p className="mt-4 text-xs text-slate-500">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* Tier Selector */}
      <section className="px-5 pb-12">
        <div className="mx-auto flex max-w-lg gap-3">
          {TIERS.map((t) => (
            <Link
              key={t.name}
              to={t.link}
              className={`flex-1 rounded-xl border py-3 text-center text-xs font-black transition ${
                t.active
                  ? "border-purple-500 bg-purple-500/20 text-purple-300"
                  : "border-[#1A2D50] bg-[#0F1520] text-slate-400 hover:border-slate-400 hover:text-white"
              }`}
            >
              <div>{t.name}</div>
              <div className="mt-0.5 text-[10px] font-semibold opacity-70">{t.price}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-center text-xs font-black uppercase tracking-[0.3em] text-purple-400">What You Get</p>
          <h2 className="mb-10 text-center font-display text-3xl font-black md:text-4xl">Elite-Level Tools & Guidance</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-purple-500/20 bg-[#0F1520] p-6 transition hover:-translate-y-1">
                <div className="mb-3 text-2xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="border-y border-[#1A2D50] bg-[#0B1222] px-5 py-20 text-center">
        <div className="mx-auto max-w-2xl rounded-3xl border border-purple-500/30 bg-[linear-gradient(160deg,#1a0f2e,#0a0f1e)] p-10 shadow-[0_0_60px_rgba(124,58,237,0.15)]">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">This Is Where Builders Become Owners</h2>
          <p className="mb-7 text-slate-300">Elite gives you the strategy, structure, and systems to stop working in your business and start building a real company.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button onClick={handleCheckout} disabled={loading} className="rounded-xl bg-purple-500 px-8 py-3 text-sm font-black text-white transition hover:scale-[1.02] disabled:opacity-60">
              {loading ? "Starting…" : "Get Elite — $499/mo"}
            </button>
            <Link to="/founders" className="rounded-xl border border-[#1A2D50] px-8 py-3 text-sm font-bold text-slate-200 transition hover:border-slate-400">
              See Founders Lifetime →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
