import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PRO_FEATURES = [
  { icon: "🗺️", title: "Full Roadmap Access", desc: "Complete 90-day business roadmap with milestones, action steps, and checkpoints tailored to your idea." },
  { icon: "📊", title: "Progress Tracking", desc: "Track every task, milestone, and revenue goal. See exactly where you are in your launch journey." },
  { icon: "🎨", title: "Business Branding Support", desc: "Brand name ideas, tagline options, color direction, and visual identity recommendations." },
  { icon: "📄", title: "Email & PDF Export", desc: "Download and share your full roadmap as a polished PDF or export to email. Your blueprint, your property." },
  { icon: "🤖", title: "AI Refinement Engine", desc: "Submit your idea and get back a refined business model, offer stack, and pricing strategy built for your market." },
  { icon: "📣", title: "Outreach Strategy", desc: "Proven scripts, outreach sequences, and customer acquisition tactics built for your specific business type." },
  { icon: "💳", title: "Credit & Funding Readiness", desc: "Step-by-step credit-building and funding readiness checklist. Know exactly what you need before applying." },
  { icon: "🏗️", title: "Startup Cost Estimate", desc: "Realistic startup cost breakdown so you know what to save, what to spend, and what to skip." },
];

const COMPARE = [
  { feature: "Starter business blueprint",   free: true,  pro: true },
  { feature: "7-day action plan",            free: true,  pro: true },
  { feature: "Full 90-day roadmap",          free: false, pro: true },
  { feature: "Progress tracking dashboard",  free: false, pro: true },
  { feature: "Branding & brand identity",    free: false, pro: true },
  { feature: "PDF / email export",           free: false, pro: true },
  { feature: "AI roadmap refinement",        free: false, pro: true },
  { feature: "Outreach & sales scripts",     free: false, pro: true },
  { feature: "Credit readiness checklist",   free: false, pro: true },
  { feature: "Funding prep roadmap",         free: false, pro: true },
  { feature: "Startup cost estimate",        free: false, pro: true },
];

export default function ProPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 text-center px-5">
        <div className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,136,229,0.15) 0%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-1.5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Pro Plan</span>
          </div>
          <h1 className="font-display text-5xl font-black leading-tight text-white md:text-6xl">
            Go Deeper.<br />
            <span style={{ color: "#1E88E5" }}>Execute Faster.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Pro gives you the full roadmap, not just the preview. Build with confidence, track your progress, export your blueprint, and get AI-powered refinement every step of the way.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro"
              className="btn-gold rounded-xl px-8 py-4 text-base font-black text-[#080C14]">
              Join Pro Waitlist
            </Link>
            <Link to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 hover:border-[#1E88E5] hover:text-white transition-all">
              View All Plans
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">Official launch June 15, 2026 — secure your rate now.</p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="mb-4 text-center font-display text-3xl font-black text-white">Everything Pro Includes</h2>
        <p className="mb-12 text-center text-slate-400">Every tool you need to move from idea to income — organized and actionable.</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRO_FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border border-[#1A2D50] p-6 transition-all hover:border-[#1E88E5]/40"
              style={{ background: "#0F1520" }}>
              <div className="mb-3 text-3xl">{f.icon}</div>
              <h3 className="mb-2 font-bold text-white">{f.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="mb-10 text-center font-display text-3xl font-black text-white">Free vs Pro</h2>
        <div className="overflow-hidden rounded-2xl border border-[#1A2D50]" style={{ background: "#0F1520" }}>
          <div className="grid grid-cols-3 gap-0 border-b border-[#1A2D50] px-6 py-4">
            <span className="text-sm font-bold text-slate-400">Feature</span>
            <span className="text-center text-sm font-bold text-slate-400">Free</span>
            <span className="text-center text-sm font-bold" style={{ color: "#1E88E5" }}>Pro</span>
          </div>
          {COMPARE.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 gap-0 px-6 py-3.5 ${i % 2 === 1 ? "bg-[#080C14]/40" : ""}`}>
              <span className="text-sm text-slate-300">{row.feature}</span>
              <span className="text-center text-lg">{row.free ? "✅" : "—"}</span>
              <span className="text-center text-lg">{row.pro ? "✅" : "—"}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-2xl px-5 py-20 text-center">
        <div className="rounded-3xl border border-[#1E88E5]/30 p-10"
          style={{ background: "linear-gradient(135deg, #0D1528 0%, #0F1520 100%)" }}>
          <h2 className="font-display text-3xl font-black text-white">Ready to Build for Real?</h2>
          <p className="mt-4 text-slate-400">Join the Pro waitlist and lock in your launch-day rate. Founding Pro members get a permanent discount.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro"
              className="btn-gold rounded-xl px-8 py-4 text-base font-black text-[#080C14]">
              Secure Pro Access
            </Link>
            <Link to="/elite"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 hover:border-[#D4A017] hover:text-white transition-all">
              Compare Elite →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
