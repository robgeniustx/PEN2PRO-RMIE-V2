import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ELITE_FEATURES = [
  { icon: "🗺️", title: "Everything in Pro", body: "Full RMIE roadmap, tracking dashboard, sales scripts, credit checklist, PDF export, AI refinement." },
  { icon: "📈", title: "Advanced Strategist Guidance", body: "Step above templates — done-with-you strategy sessions built around your specific business model." },
  { icon: "💹", title: "Financial Projections", body: "Revenue modeling, break-even analysis, cost structure, and realistic 12-month income targets." },
  { icon: "🏦", title: "Funding Partner Resources", body: "Access a vetted center of lenders, grants, and funding pathways matched to your business profile." },
  { icon: "⚖️", title: "Company Formation Checklist", body: "LLC, EIN, registered agent, operating agreement, and business banking — nothing skipped." },
  { icon: "™️", title: "Trademark & Brand Legal Guidance", body: "Trademark search readiness, naming strategy, and IP protection overview for founders." },
  { icon: "📣", title: "Marketing & Sales Launch System", body: "Paid ad strategy, content calendar, outreach sequences, and customer acquisition systems." },
  { icon: "🤝", title: "Vendor & Tradeline Center", body: "Net-30 vendors, business credit builders, and tradeline readiness to grow business credit fast." },
  { icon: "🛡️", title: "Priority Support", body: "Jump the queue — Elite members get fast-track responses and dedicated review of their roadmap." },
  { icon: "🔄", title: "Done-With-You Guidance", body: "Not just AI — structured checkpoints, reviews, and implementation guidance from the PEN2PRO team." },
];

const STEPS = [
  { step: "01", title: "Build Your Blueprint", body: "RMIE generates your full business roadmap with financial projections and 90-day execution plan." },
  { step: "02", title: "Legal Foundation", body: "We walk you through company formation, banking setup, EIN, and brand registration." },
  { step: "03", title: "Funding Readiness", body: "We map your credit profile, business credit gaps, and funding pathway before you ever apply." },
  { step: "04", title: "Launch & Acquire Clients", body: "Marketing system, outreach scripts, pricing strategy, and client acquisition in motion." },
];

export default function ElitePage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 left-1/4 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,201,177,0.12) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute top-[50%] -right-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.10) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00C9B1]/40 bg-[#00C9B1]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: "#00C9B1" }}>
            💎 PEN2PRO Elite — Advanced Execution
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Advanced Strategy.<br />
            <span style={{ background: "linear-gradient(90deg, #00C9B1, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Full Execution Support.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-4">
            Elite is for builders who are serious about execution. Financial projections, funding readiness, legal foundation, marketing launch systems, and priority guidance — all in one place.
          </p>
          <div className="mb-2 flex items-baseline justify-center gap-1">
            <span className="text-4xl font-black text-white">$499</span>
            <span className="text-lg text-slate-400">/month</span>
          </div>
          <p className="mb-10 text-sm text-slate-500">Cancel anytime · No contracts · Founding member rate</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite" className="rounded-xl px-8 py-3.5 text-sm font-black text-white transition-colors"
              style={{ background: "linear-gradient(135deg, #00C9B1, #1E88E5)" }}>
              Join Elite Waitlist →
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-5 py-20 border-t border-[#1A2D50] bg-[#0A0F1E]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest" style={{ color: "#00C9B1" }}>The Elite Process</div>
          <h2 className="mb-14 text-center font-display text-3xl font-black md:text-4xl">
            From Idea to Operating Business in 90 Days
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.step} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 text-3xl font-black" style={{ color: "#00C9B1", opacity: 0.6 }}>{s.step}</div>
                <h3 className="mb-2 font-bold text-white">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest" style={{ color: "#00C9B1" }}>Full Feature Set</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">Everything Elite Includes</h2>
          <p className="mb-14 text-center text-slate-400 max-w-xl mx-auto">
            Elite is the most complete business-building experience on the platform — built for people who are ready to stop planning and start building.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {ELITE_FEATURES.map((f) => (
              <div key={f.title} className="group rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5 hover:border-[#00C9B1]/40 transition-colors">
                <div className="mb-3 text-2xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white text-sm leading-snug">{f.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-display text-3xl font-black">Pro vs. Elite</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Pro Plan — $249/mo</p>
              {[
                "Full RMIE roadmap",
                "Progress tracking",
                "Sales scripts",
                "Credit readiness checklist",
                "PDF export",
                "AI refinement",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2.5 mb-2.5">
                  <span className="shrink-0" style={{ color: "#D4A017" }}>✓</span>
                  <span className="text-sm text-slate-300">{f}</span>
                </div>
              ))}
            </div>
            <div className="relative rounded-2xl border-2 border-[#00C9B1]/50 bg-[#0F1520] p-6 overflow-hidden">
              <div className="absolute top-0 right-0 text-[10px] font-black px-3 py-1 rounded-bl-xl" style={{ background: "#00C9B1", color: "#080C14" }}>ELITE</div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "#00C9B1" }}>Elite Plan — $499/mo</p>
              {[
                "Everything in Pro",
                "Financial projections",
                "Funding partner resources",
                "Done-with-you guidance",
                "Company formation checklist",
                "Trademark & brand legal guide",
                "Marketing launch system",
                "Vendor & tradeline center",
                "Priority support",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2.5 mb-2.5">
                  <span className="shrink-0" style={{ color: "#00C9B1" }}>✓</span>
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
            Ready for Full Execution Support?
          </h2>
          <p className="mb-10 text-slate-400 max-w-lg mx-auto">
            Join the Elite waitlist and secure your founding member rate before June 15, 2026 launch.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite" className="rounded-xl px-8 py-3.5 text-sm font-black text-white"
              style={{ background: "linear-gradient(135deg, #00C9B1, #1E88E5)" }}>
              Join Elite Waitlist
            </Link>
            <Link to="/legacy-founder" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Legacy Founder →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
