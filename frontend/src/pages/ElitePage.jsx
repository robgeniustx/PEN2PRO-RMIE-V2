import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const ELITE_FEATURES = [
  { icon: "🗺️", title: "Everything in Pro",          body: "Full RMIE roadmap, AI refinement, sales scripts, credit checklist, branding, export — all included." },
  { icon: "📈", title: "Financial Projections",       body: "Startup cost analysis, break-even timelines, 12-month revenue projections built around your model." },
  { icon: "🏦", title: "Funding Resource Center",     body: "Vetted lenders, grants, SBA resources, and alt-funding options matched to your business profile." },
  { icon: "🤝", title: "Done-With-You Guidance",      body: "Step-by-step strategist-style direction on decisions, launches, pricing, and pivots — when you need it." },
  { icon: "🏛️", title: "Legal Entity Checklist",     body: "LLC, EIN, registered agent, operating agreement, and business banking setup in a guided checklist." },
  { icon: "™️",  title: "Brand & Trademark Guidance", body: "Trademark research direction, social media handles, domain strategy, and brand protection basics." },
  { icon: "📣",  title: "Marketing Launch System",    body: "30-day marketing calendar, content scripts, ad copy frameworks, and organic outreach sequences." },
  { icon: "⚡",  title: "Priority Support Access",    body: "Elite members move to the front of the line for roadmap reviews, troubleshooting, and strategy updates." },
];

const VS_PRO = [
  { feature: "Full Pro plan features",            pro: true,  elite: true  },
  { feature: "Financial projections",             pro: false, elite: true  },
  { feature: "Funding resource center",           pro: false, elite: true  },
  { feature: "Done-with-you guidance",            pro: false, elite: true  },
  { feature: "Legal entity & trademark guidance", pro: false, elite: true  },
  { feature: "Marketing launch calendar",         pro: false, elite: true  },
  { feature: "Vendor & tradeline readiness",      pro: false, elite: true  },
  { feature: "Priority support",                  pro: false, elite: true  },
];

export default function ElitePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  async function handleUpgrade() {
    setLoading(true);
    setError("");
    const result = await createCheckoutSession({ tier: "elite" });
    if (result.checkout_url) {
      window.location.href = result.checkout_url;
    } else {
      window.location.href = "/waitlist?tier=elite";
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* ambient bg */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,201,177,0.10) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.10) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      {/* HERO */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-bold text-teal-400 uppercase tracking-widest">
            ⚡ PEN2PRO ELITE
          </div>
          <span className="ml-2 inline-flex items-center rounded-full bg-teal-500/10 border border-teal-400/20 px-3 py-1 text-[10px] font-black text-teal-400 uppercase tracking-widest">
            Best Value
          </span>
          <h1 className="mt-5 font-display text-5xl font-black leading-tight md:text-6xl">
            Advanced Strategy
            <br />
            <span style={{ background: "linear-gradient(90deg,#00C9B1,#1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              &amp; Execution Support
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Elite is for builders who are serious about execution. Financial projections, funding resources, legal guidance, and done-with-you strategy — all in one platform.
          </p>

          <div className="mt-8">
            <span className="font-display text-5xl font-black text-white">$499</span>
            <span className="ml-1 text-slate-500">/month</span>
          </div>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button onClick={handleUpgrade} disabled={loading}
              className="rounded-2xl px-10 py-4 text-base font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg,#00C9B1,#1E88E5)" }}>
              {loading ? "Loading…" : "Upgrade to Elite →"}
            </button>
            <Link to="/waitlist?tier=elite"
              className="rounded-2xl border border-teal-500/30 px-8 py-4 text-base font-semibold text-teal-300 hover:border-teal-400 transition">
              Join Waitlist
            </Link>
          </div>
          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
          <p className="mt-3 text-xs text-slate-600">Cancel anytime · 30-day money-back guarantee</p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-400">What You Get</p>
            <h2 className="font-display text-4xl font-black">Everything Elite includes</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ELITE_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2235] bg-[#080C14] p-6 hover:border-teal-500/30 transition-all">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 text-sm font-bold text-white">{f.title}</h3>
                <p className="text-xs leading-6 text-slate-500">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-400">Comparison</p>
            <h2 className="font-display text-3xl font-black">Pro vs Elite</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#1A2235]">
            <div className="grid grid-cols-3 bg-[#0F1520] px-5 py-3 text-xs font-bold uppercase tracking-widest text-slate-500">
              <span>Feature</span>
              <span className="text-center text-yellow-400">Pro</span>
              <span className="text-center text-teal-400">Elite</span>
            </div>
            {VS_PRO.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 px-5 py-4 text-sm ${i % 2 === 0 ? "bg-[#080C14]" : "bg-[#0A0E1A]"}`}>
                <span className="text-slate-300">{row.feature}</span>
                <span className="text-center text-yellow-400">{row.pro ? "✓" : <span className="text-slate-600">—</span>}</span>
                <span className="text-center font-bold text-teal-400">{row.elite ? "✓" : "—"}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-5 py-20 border-t border-[#1A2235]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-black md:text-4xl">Take the advanced lane.</h2>
          <p className="mt-4 text-slate-400">
            Elite is the full strategist experience — not just a roadmap, but a done-with-you execution partner.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button onClick={handleUpgrade} disabled={loading}
              className="rounded-2xl px-10 py-4 text-base font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg,#00C9B1,#1E88E5)" }}>
              {loading ? "Loading…" : "Upgrade to Elite — $499/mo"}
            </button>
            <Link to="/founders"
              className="rounded-2xl border border-yellow-500/40 px-8 py-4 text-base font-semibold text-yellow-400 hover:border-yellow-400 transition">
              See Founders Lifetime
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Compare all plans at{" "}
            <Link to="/pricing" className="text-teal-400 font-semibold hover:underline">full pricing page →</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
