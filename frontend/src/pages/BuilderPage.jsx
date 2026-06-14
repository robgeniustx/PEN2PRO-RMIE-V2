import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_STEPS = [
  {
    step: "01",
    title: "Business Idea Intake",
    body: "Tell PEN2PRO your idea, skills, and goals. The RMIE engine turns that input into a real business concept with a defined offer, target market, and value proposition.",
  },
  {
    step: "02",
    title: "Brand Name & Identity",
    body: "Get brand name suggestions, a brand positioning statement, tone of voice, and a visual direction that fits your market — all generated from your specific business idea.",
  },
  {
    step: "03",
    title: "Business Model Generation",
    body: "Choose how you'll make money. Service-based, product-based, subscription, consulting, wholesale, or hybrid models — RMIE explains each option and recommends the right fit.",
  },
  {
    step: "04",
    title: "Offer Structure & Pricing",
    body: "Build your service or product offer with 3 pricing tiers — starter, standard, and premium. Get specific pricing recommendations based on your market and cost structure.",
  },
  {
    step: "05",
    title: "Startup Checklist",
    body: "A complete list of everything you need to launch: LLC, EIN, business bank account, website, payment processor, business email, and more — in the right order.",
  },
  {
    step: "06",
    title: "LLC, EIN & Business Banking",
    body: "Step-by-step guidance to form your LLC, get your EIN from the IRS, open a dedicated business checking account, and set up your operating agreement.",
  },
  {
    step: "07",
    title: "Launch Roadmap",
    body: "A complete 7-day, 30-day, and 90-day roadmap from setup to first customers. Every step is specific to your business, not a generic checklist.",
  },
  {
    step: "08",
    title: "Save & Upgrade",
    body: "Free users get a roadmap preview. Pro and Elite users unlock the full roadmap, refinement sessions, export options, and execution support.",
  },
];

const BUILDER_TOOLS = [
  { icon: "💡", label: "Idea → Concept" },
  { icon: "🏷️", label: "Brand Name Ideas" },
  { icon: "📦", label: "Offer Builder" },
  { icon: "💰", label: "Pricing Strategy" },
  { icon: "📋", label: "Startup Checklist" },
  { icon: "🏢", label: "LLC Guidance" },
  { icon: "🏦", label: "Banking Setup" },
  { icon: "🗺️", label: "Launch Roadmap" },
];

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 right-1/4 h-[600px] w-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute bottom-1/4 -left-48 h-[500px] w-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,138,0,0.10) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <Navbar />

      {/* ── HERO ── */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            🏗️ PEN2PRO Builder Mode
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Turn Your Idea Into
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #1E88E5, #FF8A00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              A Real Business.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
            PEN2PRO Builder walks you through every step of setting up a legitimate, fundable,
            market-ready business — from idea to launch checklist, brand name to LLC, offer to
            roadmap.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/starter"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold shadow-[0_0_35px_rgba(255,138,0,0.3)] transition hover:scale-[1.02]"
            >
              Start Building — Free
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              View Pro & Elite Tools
            </Link>
          </div>
          <p className="mt-5 text-sm text-slate-500">
            Free roadmap included · No credit card · Upgrade when ready
          </p>
        </div>
      </section>

      {/* ── TOOL TILES ── */}
      <section className="px-5 py-12 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {BUILDER_TOOLS.map((tool) => (
              <div
                key={tool.label}
                className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5 text-center transition hover:border-[#1E88E5]/40"
              >
                <div className="mb-2 text-3xl">{tool.icon}</div>
                <p className="text-sm font-semibold text-slate-200">{tool.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STEP-BY-STEP PROCESS ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">
            How Builder Works
          </div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            8 Steps From Idea to Launch
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Builder doesn't ask you to figure it out. It walks you through it — one step at a time.
          </p>
          <div className="space-y-6">
            {BUILDER_STEPS.map((s, i) => (
              <div
                key={s.step}
                className="flex items-start gap-5 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 transition hover:border-[#1E88E5]/30"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-display text-lg font-black text-[#0A0F1E]"
                  style={{ background: "linear-gradient(135deg, #1E88E5, #0D47A1)" }}
                >
                  {s.step}
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-white">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-10 font-display text-2xl font-black md:text-3xl">
            Builder Is for You If…
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "You have a business idea but don't know where to start",
              "You want to set up your LLC and business banking the right way",
              "You need a brand name, offer structure, and pricing strategy",
              "You're a first-time entrepreneur who needs a clear launch roadmap",
              "You're a veteran, returning citizen, or working-class builder",
              "You want a professional business foundation — not a side hustle setup",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5 text-left"
              >
                <span className="mt-0.5 shrink-0 text-[#1E88E5]">→</span>
                <p className="text-sm text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTPUT EXAMPLE ── */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center font-display text-2xl font-black">
            What Builder Outputs Look Like
          </h2>
          <div
            className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-7"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">
              Sample Builder Output — Pressure Washing Business
            </p>
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p><span className="font-bold text-white">Business Concept:</span> Residential and commercial pressure washing serving homeowners and property managers in your metro area.</p>
              <p><span className="font-bold text-white">Brand Name Suggestion:</span> XLR8 Exterior Services — professional, memorable, action-focused.</p>
              <p><span className="font-bold text-white">Offer Structure:</span> Basic driveway wash ($97) · Full exterior package ($247) · Monthly maintenance plan ($149/month).</p>
              <p><span className="font-bold text-white">7-Day Launch Plan:</span> Day 1: Form LLC. Day 2: Get EIN. Day 3: Open business bank account. Day 4: Create Google Business Profile. Day 5: Quote 10 neighbors. Day 6: Post before/after on social. Day 7: Follow up with all quotes.</p>
              <p><span className="font-bold text-white">Revenue Target:</span> 4 jobs at $247 average = $988 in Week 1. 16 jobs in Month 1 = $3,952.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black">
            Ready to Build Something Real?
          </h2>
          <p className="mb-8 text-slate-400 leading-relaxed">
            Start your free roadmap now. No credit card. No fluff. Just the real steps to turn your
            idea into a legitimate, fundable business.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/starter"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold shadow-[0_0_30px_rgba(255,138,0,0.3)] transition hover:scale-[1.02]"
            >
              Start Free Roadmap
            </Link>
            <Link
              to="/waitlist"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">
            Want advanced execution tools?{" "}
            <Link to="/accelerator" className="text-[#1E88E5] hover:underline">
              Explore Accelerator Mode →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
