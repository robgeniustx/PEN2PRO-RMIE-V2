import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ELITE_FEATURES = [
  {
    icon: "🗺️",
    title: "Everything in Pro",
    desc: "Full RMIE roadmaps, progress tracking, branding support, outreach scripts, credit readiness, and PDF export — all included.",
    highlight: false,
  },
  {
    icon: "📐",
    title: "Advanced Strategist Guidance",
    desc: "Done-with-you style strategy for execution — not just a plan but guided decision-making at every stage of growth.",
    highlight: true,
  },
  {
    icon: "📈",
    title: "Financial Projections",
    desc: "Revenue projections, break-even analysis, and profit modeling for your first 12 months of operations.",
    highlight: true,
  },
  {
    icon: "🏦",
    title: "Vendor & Funding Resource Center",
    desc: "Vetted lender connections, net-30 vendor programs, business credit resources, and funding readiness documentation.",
    highlight: true,
  },
  {
    icon: "🏛️",
    title: "Company Formation Checklist",
    desc: "Full LLC, EIN, business banking, registered agent, and legal foundation checklist with step-by-step guidance.",
    highlight: true,
  },
  {
    icon: "®️",
    title: "Trademark & Brand Protection",
    desc: "Trademark guidance, social media handle reservation strategy, domain protection, and brand identity development.",
    highlight: true,
  },
  {
    icon: "📢",
    title: "Marketing System Setup",
    desc: "Full marketing strategy, launch campaign plan, content calendar, social media playbook, and ad readiness checklist.",
    highlight: true,
  },
  {
    icon: "⭐",
    title: "Priority Support",
    desc: "Elite members get priority access to strategy support, faster roadmap refinement, and direct feedback on their execution.",
    highlight: true,
  },
];

const ELITE_STEPS = [
  { n: "01", t: "Complete RMIE Intake", d: "Answer 7 intake questions about your business, market, budget, and goals." },
  { n: "02", t: "Get Your Full Blueprint", d: "AI generates a complete business blueprint with financial model, launch plan, and funding readiness score." },
  { n: "03", t: "Execute With Guidance", d: "Follow your personalized 30/60/90-day action plan with done-with-you strategy support." },
  { n: "04", t: "Scale With Resources", d: "Access the vendor center, funding resources, trademark guidance, and advanced marketing system." },
];

export default function ElitePage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pt-20 pb-24 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="h-[700px] w-[700px] rounded-full opacity-[0.07]"
            style={{ background: "radial-gradient(circle, #00C9B1 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-teal-400">
            PEN2PRO Elite Plan · Best Value
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight text-white md:text-6xl">
            Advanced Strategy.
            <br />
            <span style={{ background: "linear-gradient(90deg, #00C9B1, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Done With You.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-400">
            Elite gives you everything in Pro — plus financial projections, done-with-you strategist guidance, a full vendor and funding resource center, trademark support, and priority access. Built for entrepreneurs who are serious about scaling.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/pricing"
              className="rounded-2xl px-8 py-4 text-base font-black"
              style={{ background: "linear-gradient(135deg, #00C9B1, #1E88E5)", color: "#fff", boxShadow: "0 0 35px rgba(0,201,177,0.35)" }}
            >
              Upgrade to Elite — $499/mo →
            </Link>
            <Link
              to="/waitlist"
              className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-teal-400 hover:text-teal-400"
            >
              Join the Waitlist
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">Cancel anytime · Secure checkout via Stripe</p>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-400">Elite Includes</p>
            <h2 className="font-display text-4xl font-black text-white">More than a roadmap.</h2>
            <p className="mt-3 text-slate-500">A complete business launch and growth system with execution support built in.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ELITE_FEATURES.map((f) => (
              <div
                key={f.title}
                className={`rounded-2xl border p-6 transition-all ${
                  f.highlight
                    ? "border-teal-400/30 bg-teal-400/5 hover:border-teal-400/50"
                    : "border-[#1A2235] bg-[#080C14] hover:border-[#1A2235]"
                }`}
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 text-base font-bold text-white">{f.title}</h3>
                <p className="text-sm leading-6 text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">How It Works</p>
            <h2 className="font-display text-4xl font-black text-white">Your Elite roadmap in 4 steps</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {ELITE_STEPS.map((item) => (
              <div key={item.n} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6 hover:border-teal-400/30 transition-colors">
                <div className="mb-4 font-display text-5xl font-black leading-none" style={{ color: "rgba(0,201,177,0.2)" }}>
                  {item.n}
                </div>
                <h3 className="mb-2 text-base font-bold text-white">{item.t}</h3>
                <p className="text-sm leading-6 text-slate-500">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELITE VS PRO */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-400">Pro vs Elite</p>
            <h2 className="font-display text-4xl font-black text-white">The Elite difference</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#1A2235]">
            <div className="grid grid-cols-3 bg-[#080C14] px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-500">
              <span>Capability</span>
              <span className="text-center text-[#2d9cff]">Pro</span>
              <span className="text-center text-teal-400">Elite</span>
            </div>
            {[
              ["Full RMIE Blueprints", "✓", "✓"],
              ["Progress Tracking", "✓", "✓"],
              ["Outreach Scripts", "✓", "✓"],
              ["Credit Readiness", "✓", "✓"],
              ["Financial Projections", "—", "✓"],
              ["Done-With-You Strategy", "—", "✓"],
              ["Funding Resource Center", "—", "✓"],
              ["Vendor / Tradeline Access", "—", "✓"],
              ["Trademark Guidance", "—", "✓"],
              ["Full Marketing System", "—", "✓"],
              ["Priority Support", "—", "✓"],
            ].map(([feature, pro, elite], i) => (
              <div
                key={feature}
                className={`grid grid-cols-3 items-center gap-4 px-6 py-4 text-sm ${i % 2 === 0 ? "bg-[#0D1528]" : "bg-[#080C14]"}`}
              >
                <span className="font-semibold text-slate-300">{feature}</span>
                <span className={`text-center font-bold ${pro === "✓" ? "text-[#2d9cff]" : "text-slate-700"}`}>{pro}</span>
                <span className={`text-center font-bold ${elite === "✓" ? "text-teal-400" : "text-slate-700"}`}>{elite}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-400">Ready to go all in?</p>
          <h2 className="mb-4 font-display text-4xl font-black text-white md:text-5xl">
            Elite is for people who are done guessing.
          </h2>
          <p className="mb-10 text-lg text-slate-400">
            Full execution support, financial modeling, funding resources, trademark guidance, and done-with-you strategy. All in one platform.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/pricing"
              className="rounded-2xl px-10 py-4 text-base font-black"
              style={{ background: "linear-gradient(135deg, #00C9B1, #1E88E5)", color: "#fff", boxShadow: "0 0 35px rgba(0,201,177,0.35)" }}
            >
              Upgrade to Elite →
            </Link>
            <Link
              to="/founders"
              className="rounded-2xl border border-[#D4A017]/40 px-8 py-4 text-base font-semibold text-[#D4A017] transition hover:border-[#D4A017] hover:bg-[#D4A017]/5"
            >
              See Founders Lifetime →
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-600">
            Start with less?{" "}
            <Link to="/pro" className="text-[#2d9cff] font-semibold hover:underline">
              See Pro plan
            </Link>{" "}
            or{" "}
            <Link to="/starter" className="text-[#FF8A00] font-semibold hover:underline">
              try it free
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
