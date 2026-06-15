import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ACCELERATOR_MODULES = [
  {
    icon: "📈",
    title: "Revenue Acceleration",
    body: "Stop guessing your pricing. Get a data-driven pricing strategy, upsell paths, recurring revenue models, and a revenue acceleration roadmap built for your market.",
  },
  {
    icon: "🎯",
    title: "Marketing Strategy",
    body: "Identify your exact target customer. Build a 90-day content strategy, organic marketing plan, and a paid ad readiness checklist before you spend a dollar on advertising.",
  },
  {
    icon: "📣",
    title: "Outreach Campaigns",
    body: "Get 3 done-for-you outreach campaign templates. Email sequences, DM scripts, cold call openers, and follow-up cadences tailored to your specific offer.",
  },
  {
    icon: "💰",
    title: "Pricing Strategy",
    body: "Build a 3-tier pricing structure with entry, core, and premium packages. Know your break-even, target margins, and when to raise prices.",
  },
  {
    icon: "🔍",
    title: "Customer Acquisition",
    body: "Build a customer acquisition engine — referral systems, lead magnets, partnership outreach, and community positioning to get your first 10 customers without paid ads.",
  },
  {
    icon: "💳",
    title: "Funding Readiness",
    body: "Know if you're ready for funding before you apply. Get your personal credit strategy, business credit roadmap, revenue documentation checklist, and lender readiness score.",
  },
  {
    icon: "📝",
    title: "Sales Scripts",
    body: "Done-for-you sales scripts for discovery calls, follow-up conversations, objection handling, and closing. Built around your specific offer and target customer.",
  },
  {
    icon: "🗓️",
    title: "30 / 60 / 90-Day Execution Plan",
    body: "A structured 90-day roadmap with weekly sprints, daily priority actions, and progress milestones — so you always know what to do next.",
  },
];

const WEEK_PLAN = [
  { day: "Days 1–7", focus: "Foundation", actions: ["Finalize your offer", "Set your pricing", "Build your Google Business Profile", "Message 20 target customers"] },
  { day: "Days 8–30", focus: "Launch", actions: ["Launch your first outreach campaign", "Collect 3 testimonials", "Post 12 pieces of content", "Set up your CRM and follow-up system"] },
  { day: "Days 31–60", focus: "Growth", actions: ["Run first paid test ad ($10/day)", "Build your referral system", "Close 3–5 paying clients", "Track and optimize conversion"] },
  { day: "Days 61–90", focus: "Scale", actions: ["Hire first team member or contractor", "Automate your follow-up", "Apply for business credit", "Plan your next 90 days"] },
];

export default function AcceleratorPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,201,177,0.1) 0%, transparent 65%)", filter: "blur(60px)" }}
        />
        <div
          className="absolute bottom-0 -left-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#00C9B1] uppercase tracking-widest">
            🚀 Accelerator Mode
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Revenue Acceleration.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #00C9B1, #1E88E5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Built for Growth.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Accelerator is the advanced growth and monetization mode inside PEN2PRO. It gives you marketing strategy, outreach campaigns, pricing models, a funding readiness roadmap, and a 90-day execution plan built around your specific business.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/starter"
              className="rounded-xl bg-[#00C9B1] px-8 py-3.5 text-sm font-black text-[#0A0F1E] shadow-[0_0_30px_rgba(0,201,177,0.4)] transition hover:scale-[1.02]"
            >
              Start Free Roadmap
            </Link>
            <Link
              to="/pro"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Unlock Full Accelerator with Pro
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Accelerator features are available in{" "}
            <Link to="/pro" className="text-[#2d9cff] hover:underline">Pro</Link>,{" "}
            <Link to="/elite" className="text-[#d4af37] hover:underline">Elite</Link>, and{" "}
            <Link to="/founders" className="text-[#d4af37] hover:underline">Founders</Link> plans.
          </p>
        </div>
      </section>

      {/* Modules */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#00C9B1]">Accelerator Modules</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">8 Growth Systems in One Engine</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Accelerator doesn't give you generic advice. It gives you specific moves, specific scripts, and a specific plan built around your business type, your market, and your available resources.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {ACCELERATOR_MODULES.map((m) => (
              <div key={m.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 text-3xl">{m.icon}</div>
                <h3 className="mb-2 font-bold text-white text-lg">{m.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 90-Day Plan */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">90-Day Plan</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">A Real Execution Timeline</h2>
          <p className="mb-12 text-center text-slate-400">
            Not motivation. Not theory. An actual 90-day business launch and growth plan with daily and weekly actions — built around what a real person can do with real resources.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {WEEK_PLAN.map((phase) => (
              <div key={phase.day} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-1 text-xs font-bold uppercase tracking-widest text-[#00C9B1]">{phase.day}</div>
                <p className="mb-4 text-lg font-black text-white">{phase.focus} Phase</p>
                <ul className="space-y-2">
                  {phase.actions.map((action) => (
                    <li key={action} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="mt-1 shrink-0 text-[#00C9B1]">→</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Accelerator Is NOT */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center font-display text-3xl font-black">What Accelerator Is Not</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { bad: "Post on social media and market your business.", good: "Create 3 offer packages, identify 50 local prospects, message 20 per day for 7 days, collect 3 testimonials, and test a $10/day ad only after validating demand." },
              { bad: "Build a website and wait for customers.", good: "Launch a 1-page offer site, claim your Google Business Profile, and reach out to 20 neighbors directly before running any ad." },
              { bad: "Network and find clients.", good: "Identify 10 businesses in your city that need your service, craft a 3-sentence cold DM, and follow up twice over 5 business days." },
              { bad: "Improve your credit and get funding.", good: "Pay down utilization below 30%, dispute 2 negative items, open 2 net-30 vendor accounts, and wait 6 months before applying to your first business lender." },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
                <p className="mb-3 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-300">
                  ✗ Generic: "{item.bad}"
                </p>
                <p className="rounded-lg bg-[#00C9B1]/10 px-3 py-2 text-sm text-[#00C9B1]">
                  ✓ Accelerator: "{item.good}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">Unlock Full Accelerator Mode</h2>
          <p className="mb-10 text-slate-400">
            The free roadmap gives you a preview of Accelerator. Pro and Elite unlock the full suite — marketing strategy, outreach campaigns, pricing models, funding readiness, and the full 90-day plan.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/pro"
              className="rounded-xl bg-[#2d9cff] px-8 py-3.5 text-sm font-black text-[#081226] shadow-[0_0_30px_rgba(45,156,255,0.4)] transition hover:scale-[1.02]"
            >
              Get Pro — $249/mo
            </Link>
            <Link
              to="/elite"
              className="rounded-xl bg-[#d4af37] px-8 py-3.5 text-sm font-black text-[#081226] shadow-[0_0_30px_rgba(212,175,55,0.4)] transition hover:scale-[1.02]"
            >
              Get Elite — $499/mo
            </Link>
            <Link
              to="/founders"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Founders Lifetime →
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">
            Not ready to upgrade?{" "}
            <Link to="/starter" className="text-[#FF8A00] hover:underline">Start free</Link>{" "}
            and see what RMIE builds for your idea first.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
