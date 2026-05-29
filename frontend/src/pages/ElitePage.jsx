import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  { icon: "🗺️", title: "Everything in Pro", desc: "All unlimited roadmaps, 90-day plans, sales scripts, credit readiness, branding, export, and AI refinement." },
  { icon: "🧠", title: "Advanced Strategist Guidance", desc: "Done-with-you strategy — not just AI output. Elite gives you structured guidance through your specific business challenges." },
  { icon: "📊", title: "Financial Projections", desc: "12-month revenue projections, expense modeling, break-even analysis, and investor-ready financial summaries." },
  { icon: "🏛️", title: "Legal Foundation Checklist", desc: "Company formation, registered agent, operating agreement, EIN, trademark guidance, and business structure review." },
  { icon: "💳", title: "Vendor & Credit Resource Center", desc: "Net-30 vendor accounts, business credit tradelines, DUNS/Experian setup, and funding partner introductions." },
  { icon: "📣", title: "Marketing & Growth Strategy", desc: "Content calendar, social media strategy, ad testing framework, SEO basics, and local/digital outreach systems." },
  { icon: "🤝", title: "Funding Readiness Deep Dive", desc: "Full funding preparation — SBA readiness, bank relationships, revenue documentation, and lender presentation strategy." },
  { icon: "⚡", title: "Priority Support", desc: "Elite members go to the front of the line. Priority response on all support and strategy questions." },
];

const ELITE_EXTRAS = [
  "Done-with-you strategy sessions",
  "Financial projection templates",
  "Vendor/tradeline readiness roadmap",
  "Trademark & legal formation guidance",
  "Funding partner introductions",
  "Content & marketing calendar",
  "1-on-1 onboarding walkthrough",
  "Priority support queue",
];

export default function ElitePage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-20 pb-24 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[600px] w-[600px] rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, #00C9B1 0%, transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5" style={{ borderColor: "rgba(0,201,177,0.3)", background: "rgba(0,201,177,0.08)" }}>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00C9B1" }}>Elite Plan — Advanced Execution</span>
          </div>
          <h1 className="font-display text-5xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Strategy, Execution,<br />
            <span style={{ color: "#00C9B1" }}>Done With You.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Elite is PEN2PRO at full power — advanced strategist guidance, financial projections, legal foundation support, vendor and funding resources, and white-glove execution support for serious builders.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite" className="rounded-xl px-8 py-3.5 text-base font-black text-[#080C14] transition" style={{ background: "#00C9B1" }}>
              Join the Elite Waitlist
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-base font-semibold text-slate-300 transition hover:border-[#00C9B1] hover:text-white">
              View All Plans
            </Link>
          </div>
          <div className="mt-8 text-center">
            <span className="text-3xl font-black text-white">$499</span>
            <span className="text-slate-400">/month</span>
            <p className="mt-1 text-sm text-slate-500">Cancel anytime. No contracts.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="mb-3 text-center text-3xl font-black text-white">What You Get With Elite</h2>
        <p className="mb-12 text-center text-slate-400">Built for people who are past the idea stage and ready to execute at a professional level.</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border p-6 transition hover:border-[#00C9B1]/40" style={{ background: "#0F1520", borderColor: "#1A2235" }}>
              <div className="mb-4 text-3xl">{f.icon}</div>
              <h3 className="mb-2 font-bold text-white">{f.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ELITE EXTRAS */}
      <section className="mx-auto max-w-3xl px-5 pb-20">
        <div className="rounded-2xl border p-8" style={{ borderColor: "rgba(0,201,177,0.3)", background: "rgba(0,201,177,0.04)" }}>
          <h2 className="mb-6 text-2xl font-black text-white">Elite-Only Advantages</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {ELITE_EXTRAS.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black" style={{ background: "rgba(0,201,177,0.15)", color: "#00C9B1" }}>✓</span>
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="mx-auto max-w-3xl px-5 pb-10">
        <p className="text-center text-xs text-slate-600">
          PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools.
        </p>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-5 pb-28 text-center">
        <div className="rounded-2xl border px-8 py-12" style={{ borderColor: "rgba(0,201,177,0.3)", background: "rgba(0,201,177,0.05)" }}>
          <h2 className="mb-4 text-3xl font-black text-white">Ready for Elite-Level Execution?</h2>
          <p className="mb-8 text-slate-400">Join the Elite waitlist and get first access when we launch. Limited spots available.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite" className="rounded-xl px-8 py-3.5 font-black text-[#080C14]" style={{ background: "#00C9B1" }}>
              Join Elite Waitlist
            </Link>
            <Link to="/founders" className="rounded-xl border px-8 py-3.5 font-semibold transition" style={{ borderColor: "rgba(212,160,23,0.4)", color: "#D4A017" }}>
              Explore Founders Lifetime →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
