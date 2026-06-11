import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  { icon: "🗺️", title: "Everything in Pro", body: "Full roadmap, progress tracking, branding support, PDF/email export, outreach scripts, credit readiness, and AI refinement — all included." },
  { icon: "🧠", title: "Advanced Strategist Guidance", body: "Deeper AI analysis with strategist-level depth. Multi-scenario planning, market analysis, and competitive positioning." },
  { icon: "📊", title: "Financial Projections", body: "12-month revenue projections, break-even analysis, startup cost breakdown, and cash flow modeling for your specific business." },
  { icon: "🏛️", title: "Company Formation Checklist", body: "Step-by-step LLC/S-Corp formation guide, EIN registration, business bank setup, and operating agreement templates." },
  { icon: "⚖️", title: "Trademark & Legal Foundation", body: "Brand protection checklist, trademark research guidance, contract templates, and legal foundation for your business." },
  { icon: "💰", title: "Vendor & Funding Resource Center", body: "Access to vetted lenders, SBA resources, CDFI contacts, vendor tradeline partners, and business credit programs." },
  { icon: "📱", title: "Social Media & Marketing Guidance", body: "Platform-specific launch strategy, content calendar, paid ad readiness, and brand voice development." },
  { icon: "🤝", title: "Done-With-You Style Guidance", body: "Step-by-step execution support at every stage. Not just a plan — guided implementation from launch to growth." },
  { icon: "🚀", title: "Priority Support", body: "Priority access to platform updates, new features, and dedicated response for Elite members." },
];

const TIMELINE = [
  { day: "Days 1–7", title: "Foundation Sprint", points: ["Validate your idea", "Name & brand your business", "Build your offer", "Register your LLC/EIN"] },
  { day: "Days 8–30", title: "Launch Execution", points: ["Launch outreach campaign", "Build your online presence", "Start generating leads", "Collect first testimonials"] },
  { day: "Days 31–90", title: "Growth & Monetization", points: ["Scale outreach", "Build business credit", "Apply for funding", "Systemize operations"] },
];

export default function ElitePage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[40%] -left-40 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,160,23,0.10) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#0F1520] px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ color: "#D4A017" }}>
            👑 PEN2PRO Elite
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Advanced Strategy.
            <br />
            <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Execution-Level Support.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Elite is for serious builders who don't just want a roadmap — they want the financial projections, legal foundation, vendor access, funding readiness, and done-with-you execution support to actually build a real company.
          </p>

          <div className="mt-10 inline-flex flex-col items-center gap-1">
            <div className="text-5xl font-black text-white">$79<span className="text-2xl text-slate-400">/mo</span></div>
            <div className="text-sm text-slate-500">Everything in Pro · Priority support · Cancel anytime</div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Elite Waitlist
            </Link>
            <Link to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* 90-day timeline */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Your 90-Day Path</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">From Idea to Real Business</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Elite gives you a guided execution path — not just a plan, but the steps, tools, and support to move through each phase with confidence.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {TIMELINE.map((phase, i) => (
              <div key={phase.day}
                className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: i === 0 ? "#1E88E5" : i === 1 ? "#FF8A00" : "#D4A017" }} />
                <div className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-500">{phase.day}</div>
                <h3 className="mb-4 font-bold text-white text-lg">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-slate-400">
                      <span style={{ color: "#D4A017" }} className="mt-0.5 shrink-0">✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Elite Features</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything You Need to Build a Real Company
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Elite is not just better software. It is strategist-level guidance, legal foundation support, financial modeling, and funding readiness — all in one platform.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 hover:border-[#D4A017]/40 transition-colors">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is Elite for */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black">Is Elite Right for You?</h2>
          <p className="mb-10 text-slate-400">Elite is built for people who are ready to go all the way — not just plan, but execute and build something real.</p>
          <div className="grid gap-4 sm:grid-cols-2 text-left">
            {[
              "You're serious about launching a real business",
              "You need more than a roadmap — you need execution support",
              "You want financial projections and legal foundation guidance",
              "You're ready to tackle funding and business credit",
              "You want vendor and lender resource access",
              "You want done-with-you guidance at every step",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4">
                <span className="text-lg mt-0.5" style={{ color: "#D4A017" }}>✓</span>
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center justify-center h-16 w-16 rounded-2xl mx-auto"
            style={{ background: "linear-gradient(135deg, #B8860B 0%, #D4A017 100%)" }}>
            <span className="text-2xl">👑</span>
          </div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">Ready for Elite?</h2>
          <p className="mb-8 text-slate-400">
            Elite is in early access. Join the waitlist to lock in your founding rate and be first in line when we launch.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Elite Waitlist
            </Link>
            <Link to="/pro"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Pro Instead
            </Link>
            <Link to="/founders"
              className="rounded-xl border border-[#D4A017]/30 px-8 py-3.5 text-sm font-semibold transition-colors"
              style={{ color: "#D4A017" }}>
              See Legacy Founders →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
