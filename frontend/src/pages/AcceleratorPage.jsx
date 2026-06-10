import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ACCELERATOR_MODULES = [
  {
    icon: "📈",
    title: "Revenue Acceleration",
    desc: "Identify your fastest path to $5K/month. Pricing strategy, offer stacking, upsell architecture, and recurring revenue setup.",
  },
  {
    icon: "📣",
    title: "Marketing Strategy",
    desc: "Platform selection, content calendar, brand voice, hook writing, and 90-day organic growth plan built for your niche.",
  },
  {
    icon: "📬",
    title: "Outreach Campaigns",
    desc: "Daily outreach targets, messaging scripts, follow-up cadences, and DM/email templates. Not theory — a working system.",
  },
  {
    icon: "💰",
    title: "Pricing Strategy",
    desc: "Value-based pricing model, 3-tier offer design, discount strategy, and premium positioning for your market.",
  },
  {
    icon: "🎯",
    title: "Customer Acquisition",
    desc: "Ideal customer profile, where they live, how to reach them, what to say, and how to close at a higher rate.",
  },
  {
    icon: "💳",
    title: "Funding Readiness",
    desc: "Know your fundability score. Build the credit profile, documentation, and bank history lenders need to say yes.",
  },
  {
    icon: "🗣️",
    title: "Sales Scripts",
    desc: "Real sales scripts built for your offer — not generic templates. Cold intro, objection handling, follow-up, and close.",
  },
  {
    icon: "📅",
    title: "30/60/90-Day Execution Plan",
    desc: "Week-by-week action plan. Specific daily priorities, milestones, and metrics to hit at each stage of your launch.",
  },
];

const EXECUTION_PLAN = [
  {
    period: "Days 1–30",
    color: "#1E88E5",
    title: "Build the Machine",
    actions: [
      "Finalize offer and pricing structure",
      "Build or improve your online presence",
      "Launch outreach to 20 prospects per day",
      "Collect first testimonials",
      "Open business bank account if not done",
    ],
  },
  {
    period: "Days 31–60",
    color: "#FF8A00",
    title: "Activate Revenue",
    actions: [
      "Close first 3–5 paying clients",
      "Launch referral program",
      "Test $10/day paid ad after validating demand",
      "Add recurring revenue offer",
      "Begin credit and funding preparation",
    ],
  },
  {
    period: "Days 61–90",
    color: "#D4A017",
    title: "Scale What Works",
    actions: [
      "Identify top-performing offer and double down",
      "Hire first contractor or VA if revenue supports it",
      "Submit funding application if ready",
      "Automate outreach and follow-up sequences",
      "Review and reforecast 90-day projection",
    ],
  },
];

const SALES_SCRIPT_PREVIEW = [
  { label: "Cold Intro (DM/Text)", text: "Hey [Name] — I help [target customer] get [specific result] without [common pain]. Would it make sense to connect for 10 minutes this week?" },
  { label: "Objection: \"Too Expensive\"", text: "I understand. Most clients say the same thing before they see the ROI. What if I could show you exactly how you'd get [result] within [timeframe]?" },
  { label: "Follow-Up", text: "Hey [Name] — just checking back in. [reference previous conversation]. Is now a better time to explore what [service] could do for [their goal]?" },
];

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,138,0,0.1) 0%, rgba(30,136,229,0.08) 50%, transparent 75%)" }}
        />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2D1A00] bg-[#1A0F00] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            🚀 PEN2PRO Accelerator
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Stop Planning.
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Start Accelerating.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400">
            The Accelerator is your revenue growth engine — marketing strategy, daily outreach targets, sales scripts, pricing structure, and a 30/60/90-day execution plan built around your specific business.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              Build My Growth Plan — Free
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 transition-colors hover:text-white">
              Unlock Full Accelerator (Elite)
            </Link>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="border-t border-[#1A2D50] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Accelerator Modules</div>
          <h2 className="mb-14 text-center font-display text-3xl font-black md:text-4xl">
            8 Systems Built to Drive Revenue
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {ACCELERATOR_MODULES.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 transition-colors hover:border-[#FF8A00]/30"
              >
                <div className="mb-3 text-3xl">{m.icon}</div>
                <h3 className="mb-2 font-bold text-white">{m.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXECUTION PLAN */}
      <section className="border-t border-[#1A2D50] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">The Execution Plan</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            90 Days. Specific Steps. Real Results.
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            Bad advice: "Post on social media and market your business."
            <br />
            Accelerator advice: Here is exactly what to do, when, with what message, to reach which people, and how to measure it.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {EXECUTION_PLAN.map((phase) => (
              <div
                key={phase.period}
                className="rounded-2xl border bg-[#0F1520] p-6"
                style={{ borderColor: `${phase.color}40` }}
              >
                <div className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: phase.color }}>
                  {phase.period}
                </div>
                <div className="mb-5 font-display text-xl font-black">{phase.title}</div>
                <ul className="space-y-2.5">
                  {phase.actions.map((action) => (
                    <li key={action} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="mt-0.5 shrink-0 font-bold" style={{ color: phase.color }}>→</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SALES SCRIPTS PREVIEW */}
      <section className="border-t border-[#1A2D50] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Sales Scripts</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Real Scripts. Not Templates.
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-slate-400">
            Accelerator builds sales scripts specific to your offer, your niche, and your target customer — with cold outreach, objection handling, and follow-up included.
          </p>
          <div className="space-y-4">
            {SALES_SCRIPT_PREVIEW.map((s) => (
              <div key={s.label} className="rounded-xl border border-[#1A2D50] bg-[#0F1520] p-5">
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-[#FF8A00]">{s.label}</div>
                <p className="text-sm italic leading-relaxed text-slate-300">"{s.text}"</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">
            Full script generation is available in Pro and Elite plans with your actual offer and niche built in.
          </p>
        </div>
      </section>

      {/* WHAT MAKES ACCELERATOR DIFFERENT */}
      <section className="border-t border-[#1A2D50] px-5 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Why Accelerator Works</div>
          <h2 className="mb-8 font-display text-3xl font-black md:text-4xl">Built for People Who Have to Make It Work</h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-400">
            Accelerator was not built for people with big budgets and perfect conditions. It was built for people who have limited time, limited capital, and no room for bad advice. Every module is designed to produce a specific revenue result — not a motivational feeling.
          </p>
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8">
            <div className="grid gap-4 text-left sm:grid-cols-2">
              {[
                ["Generic Tools", "Post on social media", "Consider your target market", "Build your brand", "Find customers online"],
                ["Accelerator", "Post [specific hook] to [platform] targeting [customer] 3x/week at [time]", "Contact 20 [specific buyer type] daily via [channel] with [script]", "Name + tagline + 3-color palette + 1 core offer defined today", "List of 50 local prospects, message drafted, sent by Friday"],
              ].map(([title, ...items]) => (
                <div key={title}>
                  <div className={`mb-3 text-xs font-bold uppercase tracking-wider ${title === "Generic Tools" ? "text-slate-500" : "text-[#FF8A00]"}`}>
                    {title}
                  </div>
                  {items.map((item) => (
                    <div key={item} className={`mb-2 flex items-start gap-2 text-sm ${title === "Generic Tools" ? "text-slate-600 line-through" : "text-slate-300"}`}>
                      <span className={`mt-0.5 shrink-0 ${title === "Generic Tools" ? "text-slate-600" : "text-[#FF8A00]"}`}>
                        {title === "Generic Tools" ? "✗" : "✓"}
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1A2D50] px-5 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div
            className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
            style={{ background: "linear-gradient(135deg, #7A3B00, #FF8A00)", boxShadow: "0 0 24px rgba(255,138,0,0.3)" }}
          >
            🚀
          </div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">Build Your Growth Engine Today</h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-400">
            Start with a free roadmap to see what's possible. Unlock the full Accelerator with Pro or Elite — specific scripts, daily plans, outreach systems, and funding readiness built for your business.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              Start Free
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#FF8A00]/30 px-8 py-4 text-base font-semibold text-[#FF8A00] transition-colors hover:border-[#FF8A00]">
              Unlock Full Accelerator →
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Want lifetime access?{" "}
            <Link to="/founders" className="text-[#D4A017] transition-colors hover:text-white">
              Explore Legacy Founders →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
