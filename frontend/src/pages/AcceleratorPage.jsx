import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ACCELERATOR_FEATURES = [
  {
    title: "Revenue Acceleration",
    body: "Identify your fastest path to $5K, $10K, and $25K months with a pricing strategy and offer stack built for your market.",
    accent: "#FF8A00",
  },
  {
    title: "Marketing Strategy",
    body: "Platform-specific marketing plans: which channels to focus on, what content to create, and what budget to allocate at each stage.",
    accent: "#1E88E5",
  },
  {
    title: "Customer Acquisition",
    body: "Local outreach, online funnels, referral systems, and cold message scripts — all tailored to your business type.",
    accent: "#00C9B1",
  },
  {
    title: "Pricing Strategy",
    body: "Stop undercharging. RMIE analyzes your offer, market, and competition to recommend a pricing structure that positions you correctly.",
    accent: "#D4A017",
  },
  {
    title: "Outreach Campaigns",
    body: "Ready-to-use outreach messages, email sequences, and follow-up frameworks designed to generate real conversations.",
    accent: "#FF8A00",
  },
  {
    title: "30 / 60 / 90-Day Execution Plan",
    body: "A three-phase growth roadmap with specific milestones, weekly targets, and accountability checkpoints for each phase.",
    accent: "#1E88E5",
  },
];

const WHO_ITS_FOR = [
  { label: "Veterans",                  icon: "🎖️" },
  { label: "Returning Citizens",        icon: "🔄" },
  { label: "Side Hustlers Scaling Up",  icon: "📈" },
  { label: "Small Business Owners",     icon: "🏪" },
  { label: "Stuck Under $5K/mo",        icon: "📊" },
  { label: "Service Providers",         icon: "🛠️" },
  { label: "Freelancers Going Full-Time",icon: "💼" },
  { label: "Creators Monetizing",       icon: "📱" },
];

const SAMPLE_OUTPUT = [
  "Create 3 offer packages priced at $297 / $597 / $997 based on your service scope.",
  "Identify 50 local prospects within a 15-mile radius using Google Maps and Yelp.",
  "Send 20 personalized outreach messages per day for the next 7 days — script included.",
  "Create and optimize your Google Business Profile this week — free and high-visibility.",
  "Collect 3 client testimonials using this exact script before running any paid ads.",
  "Test a $10/day Facebook ad only after validating demand with free outreach first.",
  "Follow up with every non-response at Day 3 and Day 7 using this follow-up template.",
];

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080C14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-5 text-center">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,138,0,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-[#FF8A00]/40 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            Business Accelerator Mode
          </span>
          <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            <span
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #FF8A00 60%, #D4A017 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Revenue. Marketing.<br />Momentum.
            </span>
          </h1>
          <p className="mt-5 text-lg text-slate-400 leading-relaxed max-w-xl mx-auto">
            For builders who have a business but need a system to grow it. 30/60/90-day revenue acceleration powered by the RMIE engine — specific moves, not generic advice.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/starter"
              className="rounded-xl px-8 py-4 text-base font-black text-[#080C14] btn-gold"
            >
              Start Your Acceleration Plan — Free
            </Link>
            <Link
              to="/elite"
              className="rounded-xl border border-[#FF8A00]/40 px-8 py-4 text-base font-bold text-[#FF8A00] transition hover:bg-[#FF8A00]/10"
            >
              Unlock Full Accelerator with Elite
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-600">No credit card required to start</p>
        </div>
      </section>

      {/* What Accelerator Delivers */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            What Accelerator Delivers
          </div>
          <h2 className="mb-3 text-center font-display text-3xl font-black md:text-4xl">
            Six growth systems. One engine.
          </h2>
          <p className="mb-14 text-center text-slate-400 max-w-xl mx-auto">
            Not a template pack. Not a course. An AI-powered execution system built around your specific business.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ACCELERATOR_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#1A2D50] bg-[#080C14] p-6 transition hover:-translate-y-1"
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${f.accent}40`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
              >
                <div className="mb-3 h-1.5 w-8 rounded-full" style={{ background: f.accent }} />
                <h3 className="mb-2 text-sm font-black text-white">{f.title}</h3>
                <p className="text-xs leading-relaxed text-slate-400">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Output Preview */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#00C9B1]">
            Sample Output
          </div>
          <h2 className="mb-3 text-center font-display text-3xl font-black">
            This is what real output looks like
          </h2>
          <p className="mb-10 text-center text-slate-400">
            Not "post on social media." Actual moves.
          </p>
          <div
            className="rounded-2xl border border-[#1A2D50] p-6"
            style={{ background: "#0F1520" }}
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/70" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <div className="h-3 w-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs text-slate-600 font-mono">RMIE Accelerator Output — Week 1 Action Plan</span>
            </div>
            <ul className="space-y-3">
              {SAMPLE_OUTPUT.map((line, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 font-mono text-xs font-bold text-[#00C9B1]">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <p className="text-sm leading-relaxed text-slate-300">{line}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-[#FF8A00]/20 bg-[#FF8A00]/5 px-4 py-3">
              <p className="text-xs text-slate-400">
                <span className="font-bold text-[#FF8A00]">Pro tip: </span>
                Pro and Elite members receive this level of output for every phase — 30, 60, and 90 days — with sales scripts, funding readiness, and credit strategy included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#D4A017]">Who This Is For</div>
          <h2 className="mb-3 font-display text-3xl font-black md:text-4xl">
            Built for serious builders
          </h2>
          <p className="mb-12 text-slate-400">
            If you have a business or idea but need a real system to grow it — Accelerator was built for you.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {WHO_ITS_FOR.map((w) => (
              <div
                key={w.label}
                className="rounded-2xl border border-[#1A2D50] bg-[#080C14] p-5 text-center"
              >
                <div className="mb-2 text-3xl">{w.icon}</div>
                <p className="text-sm font-semibold text-slate-200">{w.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-2xl rounded-2xl border border-[#FF8A00]/25 bg-gradient-to-br from-[#170f00] to-[#0F1520] p-10 shadow-[0_0_60px_rgba(255,138,0,0.08)]">
          <h2 className="font-display text-3xl font-black text-white">
            Stop waiting. Start accelerating.
          </h2>
          <p className="mt-3 text-slate-400">
            Free to start. The RMIE engine builds your acceleration plan in under 5 minutes. Upgrade to Elite to unlock the full 90-day system with done-with-you guidance.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Acceleration Plan
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#FF8A00]/40 px-8 py-3.5 text-sm font-semibold text-[#FF8A00] transition hover:bg-[#FF8A00]/10">
              Unlock with Elite
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-600">
            See all features?{" "}
            <Link to="/pricing" className="text-[#D4A017] hover:underline">View full pricing</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
