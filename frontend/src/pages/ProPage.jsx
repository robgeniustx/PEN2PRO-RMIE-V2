import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const PRO_FEATURES = [
  { icon: "🗺️", title: "Full RMIE Business Blueprint", body: "Complete roadmap — 7-day, 30-day, and 90-day execution plans tailored to your specific idea, market, and budget. Not templates. Not guesses." },
  { icon: "📊", title: "Progress Tracking Dashboard", body: "Track milestones, action items, and business metrics as you execute your roadmap step by step." },
  { icon: "🎨", title: "Business Branding Support", body: "Brand name suggestions, visual identity direction, positioning strategy, and brand voice guidance built around your offer." },
  { icon: "📤", title: "Email & PDF Export", body: "Download your full business blueprint as a professional PDF or share via email — ready for partners, investors, or advisors." },
  { icon: "🤖", title: "AI Roadmap Refinement", body: "Ask follow-up questions, adjust your strategy, and get refined answers based on your specific business context — unlimited." },
  { icon: "📣", title: "Outreach Strategy & Sales Scripts", body: "Real scripts for cold outreach, follow-ups, and closing. Built for your offer and your audience — not generic copy-paste advice." },
  { icon: "💳", title: "Credit & Funding Readiness Checklist", body: "Know exactly where you stand before applying for funding. Step-by-step credit strategy and readiness assessment included." },
  { icon: "🏗️", title: "P2P Command Center Access", body: "Full CRM, pipeline, estimates, invoices, and automation basics. The business operations platform you need to run your company." },
];

const COMPARISON = [
  { feature: "Business Blueprint",    free: "Basic preview",  pro: "Full roadmap" },
  { feature: "Execution Plan",        free: "7-day only",     pro: "7 / 30 / 90 day" },
  { feature: "Sales Scripts",         free: "—",              pro: "✓ Included" },
  { feature: "Outreach Strategy",     free: "—",              pro: "✓ Full strategy" },
  { feature: "Credit Checklist",      free: "—",              pro: "✓ Step-by-step" },
  { feature: "PDF / Email Export",    free: "—",              pro: "✓ Included" },
  { feature: "AI Refinement",         free: "—",              pro: "✓ Unlimited" },
  { feature: "Branding Direction",    free: "—",              pro: "✓ Full guidance" },
  { feature: "CRM Access",            free: "—",              pro: "✓ Basic CRM" },
  { feature: "Progress Tracking",     free: "Limited",        pro: "Full dashboard" },
];

const WHO_ITS_FOR = [
  "You've started a business idea but don't have a complete plan",
  "You want real outreach scripts and sales strategy — not generic advice",
  "You need a credit and funding readiness checklist before applying",
  "You're ready to build a real brand, not just a side hustle",
  "You want to export a professional blueprint to share with others",
  "You need a CRM to track clients, leads, and pipeline",
];

export default function ProPage() {
  const [loading, setLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");

  const handleUpgrade = async () => {
    setCheckoutError("");
    setLoading(true);
    try {
      const result = await createCheckoutSession({ tier: "pro" });
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
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[40%] -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(45,156,255,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 pt-24 pb-16 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2d9cff]/40 bg-[#2d9cff]/10 px-4 py-1.5 text-xs font-bold text-[#5ab0ff] uppercase tracking-widest">
            ⚡ PEN2PRO Pro
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Everything You Need
            <br />
            <span style={{ background: "linear-gradient(90deg, #2d9cff, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              To Execute Your Vision.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Pro gives you the full RMIE roadmap, sales scripts, outreach strategy, credit readiness checklist,
            PDF export, AI refinement, branding direction, and CRM access — everything to move from idea to income.
          </p>

          {/* Pricing Badge */}
          <div className="mb-8 inline-block rounded-2xl border border-[#2d9cff]/40 bg-[#101a30] px-10 py-6">
            <p className="text-5xl font-black text-white">
              $249<span className="text-xl text-slate-400 font-semibold">/mo</span>
            </p>
            <p className="mt-1 text-sm text-slate-400">Cancel anytime · No contracts · No setup fees</p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleUpgrade}
              disabled={loading}
              className="rounded-xl bg-[#2d9cff] px-10 py-4 text-base font-black text-[#081226] shadow-[0_0_35px_rgba(45,156,255,0.4)] transition hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? "Starting Checkout…" : "Upgrade to Pro — $249/mo"}
            </button>
            <Link
              to="/waitlist?tier=pro"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Join Pro Waitlist
            </Link>
          </div>

          {checkoutError && (
            <div className="mt-4 mx-auto max-w-md rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-4 py-3 text-sm text-yellow-200">
              {checkoutError}{" "}
              <Link to="/waitlist?tier=pro" className="underline text-yellow-300 font-semibold">
                Join the waitlist instead →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#2d9cff]">What's Included</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Pro Unlocks Everything You Need to Execute
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            Not previews. Not locked features. Every Pro tool is fully unlocked from day one.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {PRO_FEATURES.map((f) => (
              <div key={f.title} className="flex gap-4 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 transition hover:border-[#2d9cff]/40">
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

      {/* Free vs Pro comparison */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Comparison</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">Free vs Pro</h2>
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] overflow-hidden">
            <div className="grid grid-cols-3 border-b border-[#1A2D50] bg-[#080C14] px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Feature</span>
              <span className="text-center text-xs font-bold uppercase tracking-widest text-slate-500">Free</span>
              <span className="text-center text-xs font-bold uppercase tracking-widest text-[#2d9cff]">Pro</span>
            </div>
            {COMPARISON.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 px-6 py-3.5 text-sm ${i % 2 === 0 ? "bg-[#0F1520]" : "bg-[#080C14]/50"}`}
              >
                <span className="text-slate-300 font-medium">{row.feature}</span>
                <span className="text-center text-slate-500">{row.free}</span>
                <span className="text-center font-semibold text-[#2d9cff]">{row.pro}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Who Pro Is For</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">
            Pro Is Built For Serious Builders
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {WHO_ITS_FOR.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-[#1A2D50] bg-[#0F1520] px-5 py-4">
                <span className="text-[#2d9cff] font-bold mt-0.5">✓</span>
                <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black">Ready to Build For Real?</h2>
          <p className="mb-8 text-slate-400 text-lg">
            Stop previewing. Start executing. The full blueprint is one upgrade away.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleUpgrade}
              disabled={loading}
              className="rounded-xl bg-[#2d9cff] px-10 py-4 text-sm font-black text-[#081226] shadow-[0_0_35px_rgba(45,156,255,0.35)] transition hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? "…" : "Upgrade to Pro — $249/mo"}
            </button>
            <Link
              to="/elite"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Compare Elite Plan →
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            <Link to="/pricing" className="hover:text-slate-300 transition-colors">View all plans</Link>
            {" · "}
            <Link to="/starter" className="hover:text-slate-300 transition-colors">Start with free first</Link>
            {" · "}
            <Link to="/waitlist?tier=pro" className="hover:text-slate-300 transition-colors">Join Pro waitlist</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
