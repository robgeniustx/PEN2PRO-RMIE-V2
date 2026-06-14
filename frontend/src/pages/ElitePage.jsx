import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const ELITE_FEATURES = [
  {
    title: "Everything in Pro",
    body: "Full RMIE blueprint, P2P Command Center, CRM, Website Builder, AI Voice, marketing roadmap, progress tracking, and export tools — all included.",
  },
  {
    title: "Advanced RMIE Strategy Engine",
    body: "Deeper analysis with competitive positioning, multi-revenue-stream modeling, and industry-specific execution playbooks.",
  },
  {
    title: "Financial Projections",
    body: "12-month revenue projections, break-even analysis, pricing sensitivity, and cash flow framework built around your actual business model.",
  },
  {
    title: "Vendor & Credit Resource Center",
    body: "Curated list of tradeline vendors, net-30 accounts, business credit builders, and lender-ready documentation templates.",
  },
  {
    title: "Done-With-You Guidance",
    body: "You are not doing this alone. Elite includes guided execution support — step-by-step walkthrough for each phase of your build.",
  },
  {
    title: "Priority Support",
    body: "Skip the line. Elite members get priority response times so questions get answered fast and momentum stays intact.",
  },
  {
    title: "Company Formation & Trademark Checklist",
    body: "LLC registration, EIN setup, business banking, trademark awareness, social media handle securing, and marketing launch checklist — all sequenced in the right order.",
  },
];

const WHO_CARDS = [
  {
    title: "Serious Builders",
    body: "You have validated your idea, you know what you want to build, and now you need advanced strategy and real execution support to scale it correctly.",
    accent: "#00C9B1",
  },
  {
    title: "Funding-Ready Entrepreneurs",
    body: "You need financial projections, a lender-ready profile, tradeline resources, and credit foundation — all the pieces that make you a serious candidate for business capital.",
    accent: "#FF8A00",
  },
  {
    title: "People Who Want Results, Not Templates",
    body: "Generic AI tools give you templates. Elite gives you execution. Done-with-you guidance, priority support, and a real 90-day plan built around your business.",
    accent: "#1E88E5",
  },
];

export default function ElitePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpgrade = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await createCheckoutSession({ tier: "elite" });
      if (result?.checkout_url) {
        window.location.href = result.checkout_url;
        return;
      }
      navigate("/waitlist");
    } catch {
      navigate("/waitlist");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080C14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-4 text-center">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,201,177,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-[#00C9B1]/50 bg-[#00C9B1]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00C9B1]">
            Best Value &bull; $499/mo
          </span>
          <h1 className="mt-6 font-display text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            <span
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #00C9B1 60%, #009d8c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PEN2PRO Elite
            </span>
          </h1>
          <p className="mt-4 text-xl font-semibold text-slate-200">
            Advanced Strategy. Done-With-You Execution.
          </p>
          <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-xl mx-auto">
            Elite is for entrepreneurs who are ready to execute at a higher level. Advanced RMIE
            strategy, financial projections, funding readiness tools, and done-with-you guidance —
            all in one platform.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleUpgrade}
              disabled={loading}
              className="rounded-xl bg-[#00C9B1] px-8 py-4 text-base font-black tracking-wide text-[#080C14] shadow-[0_0_24px_rgba(0,201,177,0.5)] transition hover:bg-[#00b09c] hover:shadow-[0_0_36px_rgba(0,201,177,0.7)] disabled:opacity-60"
            >
              {loading ? "Connecting..." : "Upgrade to Elite — $499/mo"}
            </button>
            <Link
              to="/waitlist"
              className="rounded-xl border border-[#1A2D50] bg-[#0F1520] px-8 py-4 text-base font-bold text-slate-300 transition hover:border-[#00C9B1]/40 hover:text-white"
            >
              Join Waitlist Instead
            </Link>
          </div>
          {error && (
            <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              {error}
            </p>
          )}
        </div>
      </section>

      {/* Feature Grid */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-black text-white mb-10">
            Everything Included in Elite
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ELITE_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 transition hover:border-[#00C9B1]/40 hover:-translate-y-1"
              >
                <div className="mb-3 h-1.5 w-8 rounded-full bg-[#00C9B1]" />
                <h3 className="text-sm font-black text-white mb-2">{f.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Elite Is For */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-black text-white mb-3">
            Who Elite Is Built For
          </h2>
          <p className="text-center text-sm text-slate-400 mb-10">
            Elite is not for everyone — and that is by design.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {WHO_CARDS.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border bg-[#0F1520] p-7"
                style={{ borderColor: `${c.accent}30` }}
              >
                <div
                  className="mb-4 h-1 w-12 rounded-full"
                  style={{ background: c.accent }}
                />
                <h3 className="text-base font-black text-white mb-3">{c.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro vs Elite callout */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#1A2D50] bg-[#0F1520] overflow-hidden">
          <div className="grid grid-cols-2 border-b border-[#1A2D50] bg-[#080C14]">
            <div className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#5ab0ff] text-center">
              Pro — $249/mo
            </div>
            <div className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#00C9B1] text-center">
              Elite — $499/mo
            </div>
          </div>
          {[
            ["Full RMIE Blueprint", "Advanced RMIE Strategy Engine"],
            ["Basic CRM", "Advanced CRM & Pipeline Tools"],
            ["Progress Tracking", "Financial Projections"],
            ["Standard Support", "Priority Support"],
            ["Marketing Roadmap", "Vendor & Credit Resource Center"],
            ["Email & PDF Export", "Done-With-You Guidance"],
            ["—", "Company Formation & Trademark Checklist"],
          ].map(([pro, elite], i) => (
            <div
              key={i}
              className={`grid grid-cols-2 border-b border-[#1A2D50]/60 ${
                i % 2 === 0 ? "bg-[#0F1520]" : "bg-[#080C14]"
              }`}
            >
              <div className="px-6 py-3 text-xs text-slate-400 text-center border-r border-[#1A2D50]/60">
                {pro}
              </div>
              <div className="px-6 py-3 text-xs font-semibold text-[#00C9B1] text-center">
                {elite}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-2xl rounded-2xl border border-[#00C9B1]/30 bg-gradient-to-br from-[#081c1a] to-[#0F1520] p-10 text-center shadow-[0_0_60px_rgba(0,201,177,0.12)]">
          <h2 className="text-2xl font-black text-white">
            Stop Waiting. Start Executing.
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Elite gives you every tool, strategy, and execution resource you need to build a real
            business — not just a roadmap.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleUpgrade}
              disabled={loading}
              className="rounded-xl bg-[#00C9B1] px-8 py-4 text-base font-black text-[#080C14] shadow-[0_0_24px_rgba(0,201,177,0.4)] transition hover:bg-[#00b09c] disabled:opacity-60"
            >
              {loading ? "Connecting..." : "Upgrade to Elite — $499/mo"}
            </button>
            <Link
              to="/waitlist"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-bold text-slate-300 transition hover:text-white hover:border-[#00C9B1]/40"
            >
              Join Waitlist Instead
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-600">
            No contracts. Cancel anytime. Want to compare plans?{" "}
            <Link to="/pricing" className="text-[#00C9B1] hover:underline">
              View full pricing
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
