import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PHASES = [
  {
    phase: "Days 1–30",
    title: "Revenue Foundation",
    color: "#D4A017",
    items: [
      "Validate demand — 20 real conversations before you spend anything",
      "Price your offer and create 2–3 service tiers",
      "Build your lead list — 50 targeted prospects in your market",
      "Outreach script and 7-day daily messaging system",
      "Collect 3 testimonials from your first customers",
      "Open Google Business Profile and get your first 5 reviews",
    ],
  },
  {
    phase: "Days 31–60",
    title: "Growth Engine",
    color: "#FF8A00",
    items: [
      "Launch a simple referral system — 1 client = 1 referral ask",
      "Begin email or SMS list building from every new contact",
      "Test one paid ad — $10/day only after manual sales validated",
      "Create 3 content pieces per week (reels, posts, or emails)",
      "Identify your best-performing offer and double it",
      "Track revenue, costs, and profit margin weekly",
    ],
  },
  {
    phase: "Days 61–90",
    title: "Income Acceleration",
    color: "#00C9B1",
    items: [
      "Reach $3,000–$10,000/month consistent revenue",
      "Hire or contract your first support role",
      "Begin building business credit — vendor tradelines first",
      "Apply for first business funding with proper profile ready",
      "Automate follow-ups, booking, and review requests",
      "Set 6-month revenue goal and build Q3 strategy",
    ],
  },
];

const ACCELERATOR_TOOLS = [
  { icon: "💸", title: "Revenue Model Analysis",   body: "Identify which of your offers has the highest margin, lowest friction, and fastest sales cycle — then focus there." },
  { icon: "🎯", title: "Pricing Strategy Builder", body: "Structure your offer tiers, set your anchor price, and create a positioning that commands what you are worth." },
  { icon: "📣", title: "Customer Acquisition Plan", body: "Cold outreach, warm network, paid ads, and content — a full stack acquisition plan for your first 25 clients." },
  { icon: "💳", title: "Funding Readiness Score",   body: "Know where you stand with lenders. What's missing, what's weak, and what to fix before you apply for any capital." },
  { icon: "🤝", title: "Sales Script Library",      body: "Objection handling, opening messages, follow-up sequences, and closing language tailored to your market." },
  { icon: "📊", title: "90-Day Execution Plan",     body: "Your personalized 30/60/90-day milestone tracker with daily priorities, weekly goals, and monthly benchmarks." },
];

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* ambient bg */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.10) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,201,177,0.08) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      {/* HERO */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold text-orange-400 uppercase tracking-widest">
            ⚡ ACCELERATOR MODE
          </div>
          <h1 className="mt-3 font-display text-5xl font-black leading-tight md:text-6xl">
            Revenue Acceleration
            <br />
            <span style={{ background: "linear-gradient(90deg,#FF8A00,#D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              In 90 Days
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Accelerator Mode is the growth phase of PEN2PRO. Once your business foundation is built, this is how you scale revenue, build credit, access funding, and systematize your operations.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter"
              className="rounded-2xl px-10 py-4 text-base font-black text-[#080C14] btn-gold glow-gold">
              Start Accelerating for Free →
            </Link>
            <Link to="/pro"
              className="rounded-2xl border border-orange-500/30 px-8 py-4 text-base font-semibold text-orange-300 hover:border-orange-400 transition">
              Upgrade to Pro
            </Link>
          </div>
        </div>
      </section>

      {/* 90-DAY PHASES */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-400">The Accelerator Framework</p>
            <h2 className="font-display text-4xl font-black">Your 90-Day Revenue Roadmap</h2>
            <p className="mt-3 text-slate-500">Not theory. Not motivation. Specific actions, in order, with accountability.</p>
          </div>
          <div className="space-y-6">
            {PHASES.map((phase) => (
              <div key={phase.phase} className="rounded-2xl border border-[#1A2235] bg-[#080C14] overflow-hidden">
                <div className="px-6 py-4 flex items-center gap-3"
                  style={{ borderBottom: `2px solid ${phase.color}20`, background: `${phase.color}08` }}>
                  <span className="font-display text-sm font-black uppercase tracking-widest"
                    style={{ color: phase.color }}>{phase.phase}</span>
                  <span className="text-white font-bold text-lg">— {phase.title}</span>
                </div>
                <div className="px-6 py-5 grid gap-2 sm:grid-cols-2">
                  {phase.items.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-0.5 font-bold" style={{ color: phase.color }}>→</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCELERATOR TOOLS */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-400">Accelerator Tools</p>
            <h2 className="font-display text-4xl font-black">What's inside Accelerator Mode</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ACCELERATOR_TOOLS.map((t) => (
              <div key={t.title} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6 hover:border-orange-500/30 transition-all">
                <div className="mb-3 text-3xl">{t.icon}</div>
                <h3 className="mb-2 font-bold text-white">{t.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF CALLOUT */}
      <section className="bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border p-8" style={{ borderColor: "rgba(255,138,0,0.3)", background: "rgba(255,138,0,0.05)" }}>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">Why this works differently</p>
            <p className="text-lg font-bold text-white mb-3">
              Most business advice says "market yourself" or "post on social media."
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              PEN2PRO Accelerator tells you exactly: Create 3 offer packages. Identify 50 local prospects. Message 20 per day for 7 days. Create a Google Business Profile. Collect 3 testimonials. Test a $10/day ad only after validating demand.
            </p>
            <p className="text-sm font-semibold text-orange-400">
              Specific. Sequenced. Built for people with limited time and limited resources who need results.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 border-t border-[#1A2235]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-black md:text-4xl">Start accelerating today.</h2>
          <p className="mt-4 text-slate-400">
            Free users get the 30-day foundation. Pro and Elite unlock the full 90-day accelerator with AI refinement and funding readiness.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-2xl px-10 py-4 text-base font-black text-[#080C14] btn-gold glow-gold">
              Get Your Accelerator Plan →
            </Link>
            <Link to="/elite"
              className="rounded-2xl border border-teal-500/40 px-8 py-4 text-base font-semibold text-teal-400 hover:border-teal-400 transition">
              See Elite Plan
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
