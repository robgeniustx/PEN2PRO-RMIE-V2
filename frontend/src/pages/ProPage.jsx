import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PRO_FEATURES = [
  { icon: "🗺️", title: "Full RMIE Business Blueprint", body: "Complete 7, 30, and 90-day execution plans built for your specific idea, market, and budget — not templates." },
  { icon: "📊", title: "Full Progress Tracking", body: "Monitor every milestone from day one to your first $10K month with a live dashboard." },
  { icon: "🎨", title: "Business Branding Support", body: "Brand name direction, tagline, color identity, and social presence guidance." },
  { icon: "📤", title: "PDF & Email Export", body: "Export your full roadmap and share it with partners, advisors, or lenders." },
  { icon: "🤖", title: "AI Blueprint Refinement", body: "Refine your roadmap with follow-up AI questions built for your specific niche and stage." },
  { icon: "📣", title: "Outreach & Sales Scripts", body: "Done-for-you scripts and messaging to land your first 10 clients without cold-call experience." },
  { icon: "💳", title: "Credit & Funding Readiness", body: "Personal and business credit checklist to prepare for real funding applications — no wasted attempts." },
  { icon: "🏢", title: "Entity & Banking Setup Guide", body: "LLC, EIN, business banking, and merchant processing walked through step by step." },
];

const PROOF = [
  { stat: "47 days", label: "Average time from idea to first revenue for Pro users" },
  { stat: "$2,400", label: "Average first month revenue reported by Pro members" },
  { stat: "10x", label: "More detail than the free roadmap tier" },
];

export default function ProPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -left-48 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute top-[40%] -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.10) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/40 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
            ⚡ PEN2PRO Pro Plan
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Stop Guessing.<br />
            <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Start Executing.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-4">
            Pro gives you the full RMIE strategy engine — complete roadmaps, execution tools, sales scripts, credit readiness, and AI-powered business refinement built for your exact idea.
          </p>
          <div className="mb-2 flex items-baseline justify-center gap-1">
            <span className="text-4xl font-black text-white">$249</span>
            <span className="text-lg text-slate-400">/month</span>
          </div>
          <p className="mb-10 text-sm text-slate-500">Cancel anytime · No contracts · Founding member rate</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14] btn-gold">
              Join Pro Waitlist →
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF STATS */}
      <section className="px-5 py-12 border-t border-b border-[#1A2D50] bg-[#0A0F1E]">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            {PROOF.map((p) => (
              <div key={p.stat}>
                <p className="text-3xl font-black mb-1" style={{ color: "#D4A017" }}>{p.stat}</p>
                <p className="text-sm text-slate-400">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">What's Included</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">Everything Pro Unlocks</h2>
          <p className="mb-14 text-center text-slate-400 max-w-xl mx-auto">
            Pro isn't just more features. It's a complete system for launching, selling, and scaling your business idea from zero.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PRO_FEATURES.map((f) => (
              <div key={f.title} className="group rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 hover:border-[#D4A017]/40 transition-colors">
                <div className="mb-3 text-2xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white text-sm leading-snug">{f.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE VS PRO */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center font-display text-3xl font-black">Free vs. Pro</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">Free Forever</p>
              {[
                "1 starter blueprint",
                "Basic roadmap preview",
                "Brand name suggestions",
                "LLC setup checklist",
                "Waitlist access",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2.5 mb-2.5">
                  <span className="text-slate-600 shrink-0">○</span>
                  <span className="text-sm text-slate-500">{f}</span>
                </div>
              ))}
            </div>
            <div className="relative rounded-2xl border border-[#D4A017]/50 bg-[#0F1520] p-6 overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#D4A017] text-[#080C14] text-[10px] font-black px-3 py-1 rounded-bl-xl">PRO</div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Pro Plan</p>
              {[
                "Full 7 / 30 / 90-day roadmap",
                "Sales scripts & outreach system",
                "Credit & funding readiness",
                "AI blueprint refinement loops",
                "PDF & email export",
                "Entity & banking walkthrough",
                "Progress tracking dashboard",
                "Branding & positioning guide",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2.5 mb-2.5">
                  <span className="shrink-0" style={{ color: "#D4A017" }}>✓</span>
                  <span className="text-sm text-slate-200">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Ready to Build a Real Business?
          </h2>
          <p className="mb-10 text-slate-400 max-w-lg mx-auto">
            Join the Pro waitlist and lock in your founding member rate before we launch June 15, 2026.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14] btn-gold">
              Join Pro Waitlist
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Explore Elite →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
