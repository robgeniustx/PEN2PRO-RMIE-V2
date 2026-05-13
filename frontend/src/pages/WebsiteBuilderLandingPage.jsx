import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FREE_FEATURES = [
  "AI-generated homepage draft",
  "AI-generated service pages",
  "AI-generated landing pages",
  "Niche website templates",
  "SEO title & meta generator",
  "Local SEO service-page builder",
  "Blog generator",
  "Lead capture forms",
  "Calendar embeds",
  "Funnel pages",
  "Domain connection",
  "Payment & invoice connection",
  "CRM contact capture",
  "Review widgets",
  "Before/after gallery",
  "Call-to-action sections",
];

const ELITE_FEATURES = [
  "Unlimited websites",
  "Unlimited landing pages",
  "Unlimited funnels",
  "Unlimited blogs",
  "Unlimited domain connections",
  "AI SEO page builder",
  "AI service-area page generator",
  "AI content assistant",
  "Advanced analytics",
];

export default function WebsiteBuilderLandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(5,150,105,0.12) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-emerald-400 uppercase tracking-widest">
            🌐 PEN2PRO Website Builder
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Your Website.
            <br />
            <span style={{ background: "linear-gradient(90deg, #059669, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Built by AI. Ready to Convert.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Build websites, funnels, landing pages, forms, blogs, and service pages — connected directly to your P2P Command Center CRM.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/website-builder/templates" className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              Browse Templates
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 hover:text-white transition-colors">
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-emerald-400">What's Included</div>
          <h2 className="mb-14 text-center font-display text-3xl font-black md:text-4xl">
            Everything You Need to Publish and Convert
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {FREE_FEATURES.map((f) => (
              <div key={f} className="flex items-center gap-2 rounded-xl border border-[#1A2D50] bg-[#0F1520] px-4 py-3 text-sm text-slate-300">
                <span className="shrink-0 text-emerald-400">✓</span>
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELITE UPGRADE ── */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#D4A017]/30 bg-[#0F1520] p-8">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A017]">Elite Plan</div>
          <h3 className="mb-6 font-display text-2xl font-black text-white">Unlock Unlimited Everything</h3>
          <div className="grid gap-2 sm:grid-cols-2">
            {ELITE_FEATURES.map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
                <span className="shrink-0 text-[#D4A017]">★</span>
                {f}
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <Link to="/pricing" className="rounded-xl px-6 py-3 text-sm font-black text-[#0A0F1E] btn-gold">
              Upgrade to Elite
            </Link>
            <Link to="/waitlist" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* ── NAV LINKS ── */}
      <section className="px-5 py-10 border-t border-[#1A2D50] text-center">
        <div className="flex justify-center gap-6 text-sm text-slate-500">
          <Link to="/command-center" className="hover:text-[#FF8A00] transition-colors">🖥️ Command Center</Link>
          <Link to="/voice-agent" className="hover:text-[#FF8A00] transition-colors">🎙️ Voice Agent</Link>
          <Link to="/domain-search" className="hover:text-[#FF8A00] transition-colors">🔍 Domain Finder</Link>
          <Link to="/rmie" className="hover:text-[#FF8A00] transition-colors">⚡ RMIE</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
