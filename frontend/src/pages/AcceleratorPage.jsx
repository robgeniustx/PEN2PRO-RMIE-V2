import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ACCELERATOR_MODULES = [
  {
    icon: "💰",
    title: "Revenue Acceleration Strategy",
    body: "Stop guessing how to make money. RMIE Accelerator builds a specific revenue model for your business — pricing tiers, revenue streams, and the fastest path to your first $5K month.",
  },
  {
    icon: "📣",
    title: "Marketing Strategy",
    body: "Platform-specific marketing plans for your business type. Social content pillars, posting cadence, paid ad readiness, and content batching strategy built around your niche.",
  },
  {
    icon: "📬",
    title: "Outreach Campaigns",
    body: "Pre-written outreach sequences for cold email, LinkedIn, SMS, and phone. Know exactly what to say, to whom, and when — with follow-up templates built in.",
  },
  {
    icon: "🏷️",
    title: "Pricing Strategy",
    body: "Value-based pricing analysis for your specific offer. Includes competitor positioning, psychological pricing tactics, and upsell/downsell architecture.",
  },
  {
    icon: "🎯",
    title: "Customer Acquisition Plan",
    body: "Define your ideal customer avatar, find where they are, and build a repeatable system to bring them in — referrals, outreach, ads, partnerships, and organic.",
  },
  {
    icon: "🏦",
    title: "Funding Readiness",
    body: "Get your business fundable. Personal credit preparation, business credit establishment, bank account setup, revenue documentation, and lender readiness checklist.",
  },
  {
    icon: "📝",
    title: "Sales Scripts",
    body: "Custom sales scripts for your offer, industry, and customer type — including objection handlers, closing language, and follow-up sequences.",
  },
  {
    icon: "📅",
    title: "30 / 60 / 90-Day Execution Plan",
    body: "A structured 90-day business acceleration plan with weekly milestones, revenue checkpoints, and priority action steps — built specifically for your business.",
  },
];

const PLAN_90_DAY = [
  {
    phase: "Days 1–30",
    color: "#1E88E5",
    label: "Foundation & First Revenue",
    steps: [
      "Finalize offer and pricing structure",
      "Set up LLC, EIN, and business banking",
      "Launch Google Business Profile",
      "Outreach to first 50 prospects",
      "Close first 3 paying customers",
    ],
  },
  {
    phase: "Days 31–60",
    color: "#FF8A00",
    label: "Systems & Scale",
    steps: [
      "Automate follow-up sequences",
      "Build referral program",
      "Launch first paid ad ($10/day test)",
      "Add second revenue stream",
      "Collect and publish 5 testimonials",
    ],
  },
  {
    phase: "Days 61–90",
    color: "#d4af37",
    label: "Growth & Funding Readiness",
    steps: [
      "Establish business credit tradelines",
      "Apply for a business credit card",
      "Document revenue for lender qualification",
      "Run ad campaign at scale",
      "Build strategic partner relationships",
    ],
  },
];

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -right-48 h-[700px] w-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 h-[600px] w-[600px] rounded-full"
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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            🚀 PEN2PRO Accelerator
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Stop Planning.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #FF8A00, #1E88E5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Start Executing.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
            PEN2PRO Accelerator is built for businesses that have a foundation and need to move
            faster. Revenue acceleration, outreach campaigns, funding readiness, pricing strategy,
            and a 90-day execution plan — all built for your specific business.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=pro"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] shadow-[0_0_35px_rgba(255,138,0,0.35)] transition hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #FF8A00, #D4A017)" }}
            >
              Access Accelerator — Join Pro
            </Link>
            <Link
              to="/elite"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Go Deeper with Elite
            </Link>
          </div>
          <p className="mt-5 text-sm text-slate-500">
            Accelerator is included in Pro ($249/mo), Elite ($499/mo), and Founders Lifetime ($1,899)
          </p>
        </div>
      </section>

      {/* ── MODULES GRID ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            Accelerator Modules
          </div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            8 Revenue Growth Tools
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Not generic business advice. Specific revenue strategy, outreach tools, and execution
            plans for your industry, offer, and market.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {ACCELERATOR_MODULES.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 transition hover:border-[#FF8A00]/30"
              >
                <div className="mb-3 text-3xl">{m.icon}</div>
                <h3 className="mb-2 font-bold text-white">{m.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 90-DAY PLAN ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">
            Built-In Execution
          </div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Your 90-Day Acceleration Plan
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Accelerator doesn't just give you goals — it gives you the specific steps to hit them, in
            the right order, in the right timeframe.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {PLAN_90_DAY.map((phase) => (
              <div
                key={phase.phase}
                className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6"
              >
                <div
                  className="mb-1 inline-block rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#0A0F1E]"
                  style={{ background: phase.color }}
                >
                  {phase.phase}
                </div>
                <p className="mb-4 mt-2 font-bold text-white">{phase.label}</p>
                <ul className="space-y-2">
                  {phase.steps.map((step) => (
                    <li key={step} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-0.5 shrink-0" style={{ color: phase.color }}>→</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTPUT EXAMPLE ── */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center font-display text-2xl font-black">
            Accelerator vs. Generic Advice
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-red-400">
                ✗ Generic Marketing Advice
              </p>
              <p className="text-sm italic text-slate-400">
                "Build your brand on social media. Create content consistently. Engage with your
                audience and grow your following over time."
              </p>
            </div>
            <div className="rounded-2xl border border-[#FF8A00]/40 bg-[#FF8A00]/5 p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
                ✓ Accelerator Output
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                "Post 3x/week on Instagram — Monday (before/after), Wednesday (process video),
                Friday (customer testimonial). Message 20 local contractors per day using this DM
                script. Run a $297 limited-time offer for the first 10 customers. Track response rate.
                If below 5%, test this alternate script."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-10 font-display text-2xl font-black md:text-3xl">
            Accelerator Is Built For…
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Businesses already launched but not generating consistent revenue",
              "Entrepreneurs who need a real sales and outreach system",
              "Builders ready to go from $0 to $5K/month in 90 days",
              "Small business owners who need a marketing plan that actually works",
              "Freelancers transitioning to agency or business-owner model",
              "Creators turning content into a real business with real revenue",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5 text-left"
              >
                <span className="mt-0.5 shrink-0 text-[#FF8A00]">→</span>
                <p className="text-sm text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black">
            Ready to Accelerate?
          </h2>
          <p className="mb-8 text-slate-400 leading-relaxed">
            Accelerator is included in Pro, Elite, and Founders Lifetime. Start with a free roadmap
            to see what your business potential looks like — then upgrade when you're ready to execute
            at full speed.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/starter"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold shadow-[0_0_30px_rgba(255,138,0,0.3)] transition hover:scale-[1.02]"
            >
              Start Free Roadmap
            </Link>
            <Link
              to="/waitlist?tier=pro"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#081226] transition hover:scale-[1.02]"
              style={{ background: "#2d9cff" }}
            >
              Join Pro Waitlist
            </Link>
            <Link
              to="/founders"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Founders Lifetime
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
