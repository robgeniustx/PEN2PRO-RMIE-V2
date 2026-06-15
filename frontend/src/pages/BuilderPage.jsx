import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_STEPS = [
  {
    step: "01",
    title: "Business Idea Intake",
    body: "Describe your idea, skill, or experience in plain language. RMIE extracts your core offer, target market, and best business model.",
  },
  {
    step: "02",
    title: "Brand Name Ideas",
    body: "Get AI-generated brand name options with domain availability notes, naming rationale, and trademark conflict awareness.",
  },
  {
    step: "03",
    title: "Business Model Generation",
    body: "Service? Product? Course? Licensing? RMIE identifies your best monetization path based on your resources, market, and goals.",
  },
  {
    step: "04",
    title: "Offer Creation",
    body: "Define your core offer, pricing tiers, and client promise — with real market-tested pricing benchmarks for your niche.",
  },
  {
    step: "05",
    title: "Startup Checklist",
    body: "Step-by-step foundation checklist: LLC, EIN, business bank, business email, Google Business Profile, and payment setup.",
  },
  {
    step: "06",
    title: "Launch Roadmap",
    body: "7-day action plan, 30-day client acquisition strategy, and 90-day revenue milestone targets — built for your specific idea.",
  },
];

const TOOLS_INCLUDED = [
  "Business idea summary",
  "Target customer profile",
  "Revenue model selection",
  "Pricing strategy",
  "Brand name generator",
  "LLC & EIN checklist",
  "Business bank checklist",
  "7-day action plan",
  "30-day launch roadmap",
  "90-day growth milestones",
  "Outreach script templates",
  "Google Business setup guide",
  "Credit readiness overview",
  "Sales script starter",
  "Offer packaging guide",
  "Startup cost estimate",
];

const WHO_BUILDER_IS_FOR = [
  { icon: "💡", label: "First-time entrepreneurs" },
  { icon: "🎖️", label: "Veterans starting a business" },
  { icon: "🔄", label: "Returning citizens rebuilding" },
  { icon: "👷", label: "Tradespeople going independent" },
  { icon: "📱", label: "Creators monetizing their skills" },
  { icon: "👩‍👧", label: "Parents building income at home" },
  { icon: "🏪", label: "Side hustlers going full-time" },
  { icon: "💼", label: "Corporate professionals going solo" },
];

export default function BuilderPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,201,177,0.16) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute top-1/2 -left-32 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,201,177,0.08) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(0,201,177,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,201,177,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Navbar />

      {/* ── HERO ── */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00C9B1]/30 bg-[#00C9B1]/10 px-4 py-1.5 text-xs font-bold text-[#00C9B1] uppercase tracking-widest">
            🏗️ PEN2PRO Business Builder
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-5xl">
            Build Your Business.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #00C9B1, #1E88E5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Step by Step. No Experience Required.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Builder Mode takes your idea, skill, or lived experience and walks you through every step of building a real business — brand identity, offer, legal foundation, pricing, and a launch roadmap. No business degree required.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/starter"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold"
            >
              Start Building — Free
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Unlock Pro Builder Tools
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#00C9B1]">
            How Builder Works
          </div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Six Phases to a Real Business
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-slate-400">
            No fluff. No motivational filler. Just the six phases every serious builder needs to go from idea to operational business.
          </p>
          <div className="space-y-5">
            {BUILDER_STEPS.map((s) => (
              <div
                key={s.step}
                className="flex gap-5 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6"
              >
                <div
                  className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl font-black text-sm text-white"
                  style={{ background: "linear-gradient(135deg, #00C9B1, #1E88E5)" }}
                >
                  {s.step}
                </div>
                <div>
                  <h3 className="mb-1.5 font-bold text-white text-lg">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS GRID ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#00C9B1]">
            What You Get
          </div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            16 Tools in Every Builder Roadmap
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-slate-400">
            Your free roadmap includes the essentials. Pro unlocks the full toolkit.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {TOOLS_INCLUDED.map((t, i) => (
              <div
                key={t}
                className="flex items-center gap-2.5 rounded-xl bg-[#0F1520] px-4 py-3 text-left"
                style={{ border: i < 8 ? "1px solid rgba(0,201,177,0.2)" : "1px solid #1A2D50" }}
              >
                <span style={{ color: i < 8 ? "#00C9B1" : "#D4A017" }} className="shrink-0 font-bold text-sm">
                  ✓
                </span>
                <span className="text-xs font-medium text-slate-300">{t}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-600">
            Items marked in teal are included in the free roadmap. Gold items require Pro or above.
          </p>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#00C9B1]">
            Who Builder Is For
          </div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Built for the Overlooked Builder
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-slate-400">
            You don't need business experience, capital, or connections. You need a plan. That's what Builder gives you.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {WHO_BUILDER_IS_FOR.map((w) => (
              <div
                key={w.label}
                className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5 text-center"
              >
                <div className="mb-2 text-3xl">{w.icon}</div>
                <p className="text-sm font-semibold text-slate-200">{w.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXAMPLE OUTPUT ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#00C9B1]">
            Real Output Example
          </div>
          <h2 className="mb-12 text-center font-display text-3xl font-black">
            What Bad Advice Looks Like vs. PEN2PRO
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-red-400">Generic Advice</p>
              <p className="text-sm text-slate-400 leading-relaxed italic">
                "Post on social media, market your business, build your brand, and network with potential clients."
              </p>
            </div>
            <div className="rounded-2xl bg-[#0F1520] p-6" style={{ border: "1px solid rgba(0,201,177,0.25)" }}>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#00C9B1]">PEN2PRO Builder Output</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                "Create 3 offer tiers at $299, $499, and $999. Identify 50 local businesses using Google Maps. Message 20 per day for 7 days. Set up your Google Business Profile by Thursday. Collect 3 testimonials in week 2. Test a $10/day ad only after 5 paying clients validate demand."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black">
            Stop Thinking. Start Building.
          </h2>
          <p className="mb-10 text-slate-400">
            Your free roadmap is ready right now. No credit card. No fluff. Just a real plan for your specific idea.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/starter"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold"
            >
              Launch Builder — Free
            </Link>
            <Link
              to="/accelerator"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              See Accelerator Mode →
            </Link>
            <Link
              to="/waitlist?tier=pro"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
            >
              Unlock Pro Builder
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
