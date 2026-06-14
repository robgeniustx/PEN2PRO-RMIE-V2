import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const PRO_FEATURES = [
  { icon: "🗺️", title: "Full RMIE Roadmap", body: "Complete 7/30/90-day business execution plan tailored to your idea, market, and resources." },
  { icon: "📊", title: "Full Progress Tracking", body: "Visual milestone tracker. Mark tasks done and watch your business roadmap advance step by step." },
  { icon: "🎨", title: "Business Branding Support", body: "Brand name ideas, logo direction, brand voice, and color palette built into your blueprint." },
  { icon: "📧", title: "Email & PDF Export", body: "Download or share your full business roadmap as a professionally formatted PDF." },
  { icon: "🤖", title: "AI Business Refinement", body: "Refine your blueprint with AI-powered Q&A — get more specific answers as your strategy evolves." },
  { icon: "📣", title: "Outreach & Sales Scripts", body: "Real outreach scripts, pricing structures, and daily prospecting templates for your market." },
  { icon: "💳", title: "Credit & Funding Checklist", body: "Know exactly what lenders need before you apply. No wasted time on rejected applications." },
  { icon: "🏢", title: "Entity Setup Guidance", body: "LLC, EIN, business banking, and business credit — sequenced in the right order." },
];

const VS_FREE = [
  { feature: "Starter business blueprint",      free: true,       pro: true },
  { feature: "Full 90-day execution plan",       free: false,      pro: true },
  { feature: "AI business refinement",           free: false,      pro: true },
  { feature: "Sales scripts & outreach",         free: false,      pro: true },
  { feature: "Credit & funding checklist",       free: false,      pro: true },
  { feature: "Email & PDF export",               free: false,      pro: true },
  { feature: "Progress tracking",                free: "Limited",  pro: true },
  { feature: "Branding direction",               free: false,      pro: true },
];

export default function ProPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  async function handleUpgrade() {
    setLoading(true);
    setError("");
    const result = await createCheckoutSession({ tier: "pro" });
    if (result.checkout_url) {
      window.location.href = result.checkout_url;
    } else {
      window.location.href = "/waitlist?tier=pro";
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* ambient bg */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.10) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      {/* HERO */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-bold text-yellow-400 uppercase tracking-widest">
            ⚡ PEN2PRO PRO
          </div>
          <span className="ml-2 inline-flex items-center rounded-full bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 text-[10px] font-black text-yellow-500 uppercase tracking-widest">
            Most Popular
          </span>
          <h1 className="mt-5 font-display text-5xl font-black leading-tight md:text-6xl">
            Full Business
            <br />
            <span style={{ background: "linear-gradient(90deg,#D4A017,#FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Execution Engine
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Go beyond a basic roadmap. Pro gives you the full plan, AI refinement, sales tools, credit guidance, and everything you need to turn your idea into income — systematically.
          </p>

          <div className="mt-8">
            <span className="font-display text-5xl font-black text-white">$249</span>
            <span className="ml-1 text-slate-500">/month</span>
          </div>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button onClick={handleUpgrade} disabled={loading}
              className="rounded-2xl px-10 py-4 text-base font-black text-[#080C14] btn-gold glow-gold">
              {loading ? "Loading…" : "Upgrade to Pro →"}
            </button>
            <Link to="/waitlist?tier=pro"
              className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 hover:border-yellow-500 hover:text-yellow-400 transition">
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
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-yellow-400">What You Get</p>
            <h2 className="font-display text-4xl font-black">Everything Pro includes</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRO_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2235] bg-[#080C14] p-6 hover:border-yellow-500/30 transition-all">
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
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-yellow-400">Comparison</p>
            <h2 className="font-display text-3xl font-black">Free vs Pro</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#1A2235]">
            <div className="grid grid-cols-3 bg-[#0F1520] px-5 py-3 text-xs font-bold uppercase tracking-widest text-slate-500">
              <span>Feature</span><span className="text-center">Free</span><span className="text-center text-yellow-400">Pro</span>
            </div>
            {VS_FREE.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 px-5 py-4 text-sm ${i % 2 === 0 ? "bg-[#080C14]" : "bg-[#0A0E1A]"}`}>
                <span className="text-slate-300">{row.feature}</span>
                <span className="text-center">
                  {row.free === true ? <span className="text-teal-400">✓</span>
                    : row.free === false ? <span className="text-slate-600">—</span>
                    : <span className="text-[11px] text-slate-500">{row.free}</span>}
                </span>
                <span className="text-center font-bold text-yellow-400">
                  {row.pro ? "✓" : "—"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-5 py-20 border-t border-[#1A2235]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-black md:text-4xl">Ready to go all in?</h2>
          <p className="mt-4 text-slate-400">Real roadmap. Real tools. Real strategy. Everything you need to launch — in one platform.</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button onClick={handleUpgrade} disabled={loading}
              className="rounded-2xl px-10 py-4 text-base font-black text-[#080C14] btn-gold">
              {loading ? "Loading…" : "Upgrade to Pro — $249/mo"}
            </button>
            <Link to="/elite"
              className="rounded-2xl border border-teal-500/40 px-8 py-4 text-base font-semibold text-teal-400 hover:border-teal-400 transition">
              See Elite Plan
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Want lifetime access?{" "}
            <Link to="/founders" className="text-yellow-400 font-semibold hover:underline">Check out Founders Lifetime →</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
