import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PRO_FEATURES = [
  {
    icon: "🗺️",
    title: "Full RMIE Business Blueprint",
    body: "Complete roadmap with 7-day, 30-day, and 90-day action plans tailored to your specific idea, market, and resources.",
  },
  {
    icon: "📊",
    title: "Full Progress Tracking",
    body: "Track every milestone, action step, and business goal from a single dashboard. Never lose your place in the build.",
  },
  {
    icon: "🎨",
    title: "Business Branding Support",
    body: "Brand name ideas, positioning, tone of voice, and visual direction — all generated around your specific idea.",
  },
  {
    icon: "📄",
    title: "Email & PDF Export",
    body: "Download your complete business blueprint and roadmap as a professional PDF or send it directly to your inbox.",
  },
  {
    icon: "🤖",
    title: "AI Roadmap Refinement",
    body: "Refine your roadmap with follow-up questions and iterative AI strategy updates as your business evolves.",
  },
  {
    icon: "📣",
    title: "Outreach Strategy",
    body: "Sales scripts, prospect messaging templates, outreach sequences, and customer acquisition steps built for your niche.",
  },
  {
    icon: "💳",
    title: "Credit & Funding Readiness Checklist",
    body: "Know exactly where you stand before approaching lenders or investors. Get clear on what to fix and in what order.",
  },
  {
    icon: "🏗️",
    title: "LLC, EIN & Business Bank Checklist",
    body: "Step-by-step guidance to properly form your business entity, get your EIN, and open a dedicated business banking account.",
  },
];

const FREE_VS_PRO = {
  free: [
    "1 starter blueprint preview",
    "Basic roadmap overview only",
    "Limited progress tracking",
    "No branding direction",
    "No export options",
    "No outreach or sales strategy",
    "No AI refinement sessions",
    "No credit/funding guidance",
  ],
  pro: [
    "Full RMIE business blueprint",
    "7 / 30 / 90-day execution plan",
    "Complete milestone tracking",
    "Branding direction & brand voice",
    "PDF & email export",
    "Sales scripts & outreach sequences",
    "AI roadmap refinement",
    "Credit & funding readiness checklist",
  ],
};

export default function ProPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(45,156,255,0.18) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute top-[50%] -right-48 h-[500px] w-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(30,136,229,0.12) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      <Navbar />

      {/* ── HERO ── */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1E3A6E] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#2d9cff] uppercase tracking-widest">
            ⚡ PEN2PRO Pro — $249/month
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            The Full Roadmap.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #2d9cff, #1E88E5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              The Real Strategy.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
            PEN2PRO Pro gives you everything the free roadmap previews — plus the full execution
            plan, AI refinement, branding direction, outreach strategy, and the business foundation
            checklist to build it right.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=pro"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#081226] shadow-[0_0_35px_rgba(45,156,255,0.4)] transition hover:scale-[1.02]"
              style={{ background: "#2d9cff" }}
            >
              Join Pro Waitlist
            </Link>
            <Link
              to="/starter"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Try Free First
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Compare All Plans
            </Link>
          </div>
          <p className="mt-5 text-sm text-slate-500">
            $249/month · No contracts · Cancel anytime · Launch pricing locked in at signup
          </p>
        </div>
      </section>

      {/* ── FREE VS PRO COMPARISON ── */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#2d9cff]">
            Free vs. Pro
          </div>
          <h2 className="mb-12 text-center font-display text-3xl font-black md:text-4xl">
            What's Actually Different?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Free column */}
            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-7">
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-500">
                Free Roadmap
              </p>
              <p className="mb-6 text-2xl font-black text-slate-300">$0</p>
              <ul className="space-y-3">
                {FREE_VS_PRO.free.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-500">
                    <span className="mt-0.5 shrink-0 text-slate-600">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/starter"
                className="mt-7 block rounded-xl border border-[#1A2D50] py-3 text-center text-sm font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Start Free Roadmap
              </Link>
            </div>

            {/* Pro column */}
            <div
              className="rounded-2xl border p-7"
              style={{
                borderColor: "#2d9cff",
                background: "#101a30",
                boxShadow: "0 0 45px rgba(45,156,255,0.2)",
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-bold uppercase tracking-widest text-[#2d9cff]">
                  Pro Plan
                </p>
                <span className="rounded-full bg-[#2d9cff] px-2.5 py-0.5 text-[10px] font-black text-[#081226]">
                  RECOMMENDED
                </span>
              </div>
              <p className="mb-6 text-2xl font-black text-white">$249/month</p>
              <ul className="space-y-3">
                {FREE_VS_PRO.pro.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="mt-0.5 shrink-0 text-[#2d9cff]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/waitlist?tier=pro"
                className="mt-7 block rounded-xl py-3 text-center text-sm font-black text-[#081226] transition hover:scale-[1.01]"
                style={{ background: "#2d9cff" }}
              >
                Join Pro Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#2d9cff]">
            Everything Inside Pro
          </div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Tools Built for Execution
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Not generic advice. Not vague templates. Real deliverables your business can actually use.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {PRO_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 transition hover:border-[#2d9cff]/40"
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT GOOD OUTPUT LOOKS LIKE ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            Real Output Examples
          </div>
          <h2 className="mb-12 text-center font-display text-3xl font-black">
            This Is What Pro Outputs Look Like
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-red-400">
                ✗ Generic Free Advice
              </p>
              <p className="text-sm italic text-slate-400">
                "Post on social media and market your business to grow your audience and reach more customers."
              </p>
            </div>
            <div className="rounded-2xl border border-[#2d9cff]/40 bg-[#2d9cff]/5 p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#2d9cff]">
                ✓ Pro RMIE Strategy
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                "Create 3 service packages at $297, $497, and $897. Identify 50 local prospects on LinkedIn. Message 20 per day for 7 days using this script. Set up Google Business Profile. Collect 3 testimonials in Week 1. Run a $10/day ad only after validating demand organically."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── UPGRADE CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div
          className="mx-auto max-w-2xl rounded-2xl border p-10 text-center"
          style={{
            borderColor: "#2d9cff",
            background: "#101a30",
            boxShadow: "0 0 50px rgba(45,156,255,0.2)",
          }}
        >
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#2d9cff]">
            PEN2PRO Pro
          </div>
          <h2 className="mb-4 font-display text-3xl font-black">Ready to Go Pro?</h2>
          <p className="mb-8 text-slate-400 leading-relaxed">
            Get the full roadmap, execution plan, branding direction, and business tools to move
            from idea to income — the right way.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=pro"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#081226] shadow-[0_0_30px_rgba(45,156,255,0.4)] transition hover:scale-[1.02]"
              style={{ background: "#2d9cff" }}
            >
              Join Pro Waitlist — $249/mo
            </Link>
            <Link
              to="/elite"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Explore Elite Instead
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">
            Want lifetime access?{" "}
            <Link to="/founders" className="text-[#d4af37] hover:underline">
              See Founders Lifetime →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
