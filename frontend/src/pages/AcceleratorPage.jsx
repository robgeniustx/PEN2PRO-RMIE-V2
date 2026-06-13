import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PLAN_30 = [
  "Define your primary offer and 3-tier pricing structure",
  "Create your Google Business Profile and Yelp listing",
  "Identify 100 target prospects in your market",
  "Send 15 outreach messages daily via DM, email, or text",
  "Collect 3 testimonials from beta or first clients",
  "File your LLC and get your EIN",
  "Open your business bank account",
  "Test one $10/day ad only after your first 3 paying clients",
];

const PLAN_60 = [
  "Scale daily outreach to 30 contacts per day",
  "Launch a referral incentive program for existing clients",
  "Add a second revenue stream or upsell offer",
  "Set up your CRM for pipeline and follow-up tracking",
  "Apply for your first business credit product (net-30)",
  "Get a vendor tradeline to build business credit",
  "Record 2–3 testimonial videos for social proof",
  "Review pricing — raise rates if demand justifies it",
];

const PLAN_90 = [
  "Target your first $10K revenue month",
  "Hire first contractor or part-time help if volume requires",
  "Apply for a business line of credit or SBA microloan",
  "Launch an email newsletter to your existing client list",
  "Build a lead-gen landing page with your offer and CTA",
  "Systematize your client onboarding process",
  "Set up automated follow-up sequences in your CRM",
  "Review and refine your 6-month growth plan",
];

const ACCELERATOR_TOOLS = [
  { icon: "📈", title: "Revenue Acceleration", desc: "Proven frameworks to move from $0 to $5K–$10K/month in the shortest, most direct path." },
  { icon: "🎯", title: "Marketing Strategy", desc: "Organic, paid, and referral channels mapped to your specific industry, location, and audience." },
  { icon: "📣", title: "Outreach Campaigns", desc: "Daily outreach systems with scripts, follow-up sequences, and progress tracking built in." },
  { icon: "💰", title: "Pricing Strategy", desc: "Tiered offer structures, anchor pricing, upsell ladders, and competitive positioning." },
  { icon: "🤝", title: "Customer Acquisition", desc: "First-client frameworks, referral systems, community marketing, and retention strategies." },
  { icon: "🏦", title: "Funding Readiness", desc: "What to do before you apply — personal credit, business bank history, revenue docs, and vendors." },
  { icon: "📝", title: "Sales Scripts", desc: "Cold DM, cold call, email, and in-person scripts tested in real markets with real clients." },
  { icon: "⚡", title: "30/60/90 Execution Plan", desc: "Day-by-day action plan that makes progress visible, decisions easy, and momentum real." },
];

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(255,138,0,0.12) 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            🚀 Accelerator Mode
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            Revenue Strategy.<br />
            <span
              style={{
                background: "linear-gradient(90deg, #FF8A00, #D4A017)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              30/60/90 Execution.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Accelerator mode is for businesses that exist but haven't hit their revenue targets yet.
            Get marketing strategy, outreach campaigns, pricing structure, funding readiness, and a
            day-by-day 90-day execution plan.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14] btn-gold">
              Start Your Accelerator Plan →
            </Link>
            <Link
              to="/elite"
              className="rounded-2xl border border-[#FF8A00]/30 px-8 py-4 text-base font-semibold text-[#FF8A00] hover:border-[#FF8A00] transition"
            >
              Unlock Elite Access
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">
            Pro and Elite members get the full Accelerator output · Free users get a preview
          </p>
        </div>
      </section>

      {/* ACCELERATOR TOOLS */}
      <section className="border-t border-[#1A2235] bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Accelerator Tools</p>
            <h2 className="font-display text-4xl font-black text-white">Everything you need to grow faster</h2>
            <p className="mt-3 text-slate-500">
              Specific moves. Real sequence. Not motivational fluff.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ACCELERATOR_TOOLS.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#FF8A00]/20 bg-[#080C14] p-6 hover:border-[#FF8A00]/40 transition-colors"
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 text-sm font-bold text-white">{f.title}</h3>
                <p className="text-xs leading-6 text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30/60/90 PLAN */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Execution Timeline</p>
            <h2 className="font-display text-4xl font-black text-white">The 90-day revenue acceleration plan</h2>
            <p className="mt-3 text-slate-500">
              Real actions. Specific sequence. Built around your business — not generic templates.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: "Days 1–30", title: "Foundation & First Clients", items: PLAN_30, color: "#1E88E5" },
              { label: "Days 31–60", title: "Scale & Systematize", items: PLAN_60, color: "#D4A017" },
              { label: "Days 61–90", title: "Revenue Growth & Credit", items: PLAN_90, color: "#00C9B1" },
            ].map((phase) => (
              <div
                key={phase.label}
                className="rounded-2xl border bg-[#0F1520] p-6"
                style={{ borderColor: phase.color + "40" }}
              >
                <div
                  className="mb-1 text-xs font-bold uppercase tracking-widest"
                  style={{ color: phase.color }}
                >
                  {phase.label}
                </div>
                <h3 className="mb-5 text-lg font-black text-white">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                      <span
                        className="mt-0.5 shrink-0 font-bold"
                        style={{ color: phase.color }}
                      >
                        →
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOD VS BAD EXAMPLE */}
      <section className="border-t border-[#1A2235] bg-[#0F1520] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">What PEN2PRO Actually Gives You</p>
            <h2 className="font-display text-3xl font-black text-white">Real strategy vs generic advice</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/20 bg-[#080C14] p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-red-400">Generic Advice</p>
              <p className="text-slate-400 leading-relaxed text-sm">
                "Post on social media and market your business to build your brand and get customers."
              </p>
            </div>
            <div className="rounded-2xl border border-[#00C9B1]/30 bg-[#080C14] p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#00C9B1]">PEN2PRO Accelerator Output</p>
              <p className="text-slate-300 leading-relaxed text-sm">
                "Create 3 offer packages priced at $120, $280, and $450. Identify 50 local prospects in
                Facebook neighborhood groups. Message 15 per day for 7 days with this script: [script].
                Create a Google Business Profile by Thursday. Collect 3 testimonials in the first 10 days.
                Test a $10/day ad only after validating demand with 3 paying clients."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 font-display text-4xl font-black">Ready to accelerate?</h2>
          <p className="mb-10 text-slate-400">
            Pro and Elite members get the full Accelerator output — complete 90-day plan, sales scripts,
            outreach system, and funding readiness checklist. Start free to see a preview.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14] btn-gold">
              Start Free Roadmap →
            </Link>
            <Link
              to="/pro"
              className="rounded-2xl border border-[#D4A017]/40 px-8 py-4 text-base font-semibold text-[#D4A017] hover:border-[#D4A017] transition"
            >
              Upgrade to Pro
            </Link>
            <Link
              to="/elite"
              className="rounded-2xl border border-[#00C9B1]/40 px-8 py-4 text-base font-semibold text-[#00C9B1] hover:border-[#00C9B1] transition"
            >
              Upgrade to Elite
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
