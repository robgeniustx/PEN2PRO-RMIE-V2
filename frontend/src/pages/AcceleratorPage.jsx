import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ACCELERATOR_MODULES = [
  { icon: "💰", title: "Revenue Acceleration", body: "Identify your highest-value revenue streams and build a strategy to maximize income from existing and new customers." },
  { icon: "📣", title: "Marketing Strategy", body: "Organic, paid, referral, and partnership strategies — selected based on your budget, audience, and business stage." },
  { icon: "📬", title: "Outreach Campaigns", body: "Pre-written outreach sequences for email, DM, SMS, and phone — customized for your offer and target customer." },
  { icon: "💲", title: "Pricing Strategy", body: "Stop undercharging. Evaluate your market, audit your offer value, and set prices that support business growth." },
  { icon: "👥", title: "Customer Acquisition", body: "50-prospect target list, daily outreach cadence, follow-up sequences, and closing scripts — built for your business." },
  { icon: "🏦", title: "Funding Readiness", body: "Credit score targets, business bank account, entity structure, revenue tracking, and lender documentation checklist." },
  { icon: "📞", title: "Sales Scripts", body: "Phone, email, and face-to-face scripts for your offer — objection handling, pricing conversations, and closing techniques." },
  { icon: "📅", title: "30/60/90-Day Execution Plan", body: "Day-by-day, week-by-week action calendar — not generic advice. Real tasks assigned to real deadlines." },
];

const PLANS = [
  {
    phase: "Days 1–30",
    label: "Launch Phase",
    color: "#1E88E5",
    items: [
      "Finalize offer and pricing",
      "Create Google Business Profile",
      "Set up payment processing",
      "Build prospect list of 50 targets",
      "Send first 20 outreach messages",
      "Collect 1–3 testimonials",
      "Register for business credit",
    ],
  },
  {
    phase: "Days 31–60",
    label: "Revenue Phase",
    color: "#FF8A00",
    items: [
      "Close 3–5 new clients",
      "Launch referral program",
      "Run first paid ad test ($10/day)",
      "Submit LLC and EIN paperwork",
      "Open business bank account",
      "Apply for Tier 1 business credit",
      "Automate follow-up sequences",
    ],
  },
  {
    phase: "Days 61–90",
    label: "Growth Phase",
    color: "#FFC107",
    items: [
      "Scale outreach to 30+ per day",
      "Hire first contractor or VA",
      "Apply for business funding",
      "Build second revenue stream",
      "Launch loyalty or retention program",
      "Review financials and adjust pricing",
      "Set 6-month growth targets",
    ],
  },
];

const SALES_SCRIPT_PREVIEW = `"Hey [Name], I saw your property on [Platform] and noticed it could really benefit from [your service]. We help [target customer type] with [specific outcome]. I'd love to offer you a free [quote/consultation/demo] — takes about 15 minutes and comes with zero pressure. Would [Day] at [Time] work for you?"`;

export default function AcceleratorPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-1/4 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.15) 0%, transparent 65%)", filter: "blur(45px)" }} />
        <div className="absolute top-[35%] -left-40 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-20 right-10 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,193,7,0.1) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,138,0,0.08) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            🚀 PEN2PRO Accelerator
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            Stop Planning.
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #FFC107)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Start Accelerating.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            The Accelerator mode is for businesses that are ready to grow. Revenue strategy, outreach campaigns, customer acquisition, funding readiness, sales scripts, and a full 90-day execution plan — built around your specific numbers.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Elite Waitlist
            </Link>
            <Link to="/starter" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Start Free Roadmap
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Accelerator mode is included in Elite and Legacy Founder plans.
          </p>
        </div>
      </section>

      {/* Modules */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Accelerator Modules</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Every Tool You Need to Generate Revenue Now
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Not generic advice. Specific tools, scripts, and strategies built around your business, your offer, and your market.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {ACCELERATOR_MODULES.map((m) => (
              <div key={m.title} className="rounded-2xl border border-[#FF8A00]/20 bg-[#0F1520] p-5 hover:border-[#FF8A00]/40 transition-colors">
                <div className="mb-3 text-3xl">{m.icon}</div>
                <h3 className="mb-1.5 font-bold text-white text-sm">{m.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30/60/90 day plan */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Execution Timeline</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Your First 90 Days, Week by Week
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Not a general business checklist. A custom execution calendar built around your specific idea and starting point.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div key={plan.phase} className="rounded-2xl border bg-[#0F1520] p-6"
                style={{ borderColor: `${plan.color}30` }}>
                <div className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: plan.color }}>
                  {plan.phase}
                </div>
                <h3 className="mb-4 font-black text-white text-lg">{plan.label}</h3>
                <ul className="space-y-2">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-1 shrink-0 h-1.5 w-1.5 rounded-full" style={{ background: plan.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales script preview */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Sales Scripts</div>
              <h2 className="mb-4 font-display text-3xl font-black">
                Know Exactly What to Say — and When to Say It
              </h2>
              <p className="mb-6 text-slate-400 leading-relaxed">
                Most people with great businesses lose deals because they don't know how to start the conversation, handle objections, or close. The Accelerator writes your scripts based on your offer, audience, and industry.
              </p>
              <ul className="space-y-3">
                {["Cold outreach email sequence", "SMS/DM introduction script", "Phone discovery call guide", "Objection handling responses", "Pricing conversation script", "Follow-up sequence (5 touches)"].map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-[#FF8A00]">✓</span> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#FF8A00]/20 bg-[#0F1520] p-6">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500" />
                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-slate-500">Sample Outreach Script</span>
              </div>
              <p className="font-mono text-sm text-slate-300 leading-relaxed">
                {SALES_SCRIPT_PREVIEW}
              </p>
              <div className="mt-4 rounded-lg border border-[#1E88E5]/20 bg-[#1E88E5]/5 p-3 text-xs text-slate-400">
                <span className="text-[#1E88E5] font-bold">Accelerator mode</span> fills in every [bracket] with your specific business, offer, and target customer.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the accelerator replaces */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">The Real Value</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">
            What the Accelerator Replaces
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: "❌", before: "Paying a business coach $500/hr", after: "AI-powered strategy engine at a fraction of the cost" },
              { icon: "❌", before: "Hiring a marketing agency to write scripts", after: "Custom outreach campaigns generated in minutes" },
              { icon: "❌", before: "Guessing what to do next", after: "90-day plan with specific daily actions" },
            ].map((item) => (
              <div key={item.before} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
                <div className="mb-3 text-sm text-slate-500 line-through">{item.before}</div>
                <div className="text-sm font-semibold text-white flex items-start gap-2">
                  <span className="text-[#FF8A00] shrink-0">→</span> {item.after}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
            style={{ background: "linear-gradient(135deg, #FF8A00, #FFC107)" }}>
            🚀
          </div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Ready to Accelerate?
          </h2>
          <p className="mb-3 text-slate-400">
            Accelerator mode is included in Elite and Legacy Founder plans.
          </p>
          <p className="mb-8 text-sm text-slate-500">
            Join the waitlist today and lock in founding pricing before June 15, 2026.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Elite Waitlist
            </Link>
            <Link to="/founders" className="rounded-xl border border-[#FFC107]/30 px-8 py-3.5 text-sm font-semibold text-[#FFC107] hover:border-[#FFC107] transition-colors">
              See Legacy Founder →
            </Link>
          </div>
          <div className="mt-5 text-sm text-slate-500">
            Want to start for free first?{" "}
            <Link to="/starter" className="text-[#FF8A00] font-semibold hover:underline">
              Start your free roadmap →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
