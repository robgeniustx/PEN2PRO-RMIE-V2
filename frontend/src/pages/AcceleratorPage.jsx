import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MODULES = [
  { icon: "💰", title: "Revenue Acceleration", body: "Identify your fastest path to first dollar — not the perfect path, the fastest one." },
  { icon: "📣", title: "Marketing Strategy", body: "Channel selection, messaging framework, content calendar, and ad-spend guidance." },
  { icon: "📬", title: "Outreach Campaigns", body: "Cold outreach scripts, follow-up sequences, and DM templates proven to get responses." },
  { icon: "💲", title: "Pricing Strategy", body: "Package your offer, set anchors, and price based on value — not guesswork." },
  { icon: "🎯", title: "Customer Acquisition", body: "Your first 10, 50, and 100 customers — mapped out with specific actions by week." },
  { icon: "🏦", title: "Funding Readiness", body: "Know your fundability score before you walk into a bank or pitch an investor." },
  { icon: "📞", title: "Sales Scripts", body: "Word-for-word scripts for cold calls, follow-ups, discovery calls, and closing." },
  { icon: "🗓️", title: "30/60/90 Execution Sprint", body: "Three sprints. Clear targets. Daily actions. Built specifically for your business stage." },
];

const SPRINT = [
  {
    period: "30 Days",
    color: "#1E88E5",
    targets: [
      "Define offer and pricing",
      "Launch minimal viable presence",
      "Contact 50+ prospects",
      "Close first 3 paying customers",
      "Set up business foundation",
    ],
  },
  {
    period: "60 Days",
    color: "#10B981",
    targets: [
      "10 paying customers",
      "First testimonial collected",
      "Referral system activated",
      "Consistent content cadence",
      "First revenue report filed",
    ],
  },
  {
    period: "90 Days",
    color: "#FF8A00",
    targets: [
      "Predictable weekly revenue",
      "Second offer or upsell live",
      "First ad campaign tested",
      "Funding application ready",
      "Systems documented and delegatable",
    ],
  },
];

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-[#070B14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-5 text-center">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,92,246,0.14) 0%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-block rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-violet-400">
            Accelerator Mode
          </div>
          <h1 className="mb-5 text-4xl font-black leading-tight md:text-6xl">
            Idea Is Just the Start.<br />
            <span style={{ background: "linear-gradient(90deg,#8B5CF6,#A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Revenue Is the Goal.
            </span>
          </h1>
          <p className="mb-10 text-lg text-slate-400 max-w-2xl mx-auto">
            Accelerator mode is the growth execution layer of PEN2PRO — marketing strategy, outreach campaigns, pricing architecture, customer acquisition, and a 90-day sprint plan built around your specific business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/starter"
              className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] btn-gold"
            >
              Start Your Roadmap
            </Link>
            <Link
              to="/waitlist?tier=elite"
              className="rounded-xl border border-violet-500/40 px-8 py-4 text-base font-semibold text-violet-400 hover:border-violet-400 hover:text-white transition-colors"
            >
              Unlock Accelerator Mode →
            </Link>
          </div>
          <p className="mt-5 text-sm text-slate-500">Available in Elite and Founders plans.</p>
        </div>
      </section>

      {/* Module Grid */}
      <section className="py-20 px-5">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 text-center text-3xl font-black">Accelerator Modules</h2>
          <p className="mb-12 text-center text-slate-400">Eight growth modules. All built around your specific business and stage.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MODULES.map((m) => (
              <div key={m.title} className="rounded-2xl border border-[#1A1030] bg-[#0D0A1A] p-6 hover:border-violet-500/40 transition-colors">
                <div className="mb-3 text-3xl">{m.icon}</div>
                <h3 className="mb-2 font-bold text-white">{m.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30/60/90 Sprint */}
      <section className="py-16 px-5 bg-[#0A0F1E]">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 text-center text-2xl font-black">The 30/60/90-Day Execution Sprint</h2>
          <p className="mb-12 text-center text-slate-400">Not a theory. A plan with specific targets per sprint period.</p>
          <div className="grid gap-6 md:grid-cols-3">
            {SPRINT.map((s) => (
              <div
                key={s.period}
                className="rounded-2xl border bg-[#0D1626] p-6"
                style={{ borderColor: `${s.color}33` }}
              >
                <div
                  className="mb-4 inline-block rounded-lg px-3 py-1 text-sm font-black"
                  style={{ background: `${s.color}20`, color: s.color }}
                >
                  {s.period}
                </div>
                <ul className="space-y-2.5">
                  {s.targets.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="mt-0.5 shrink-0 font-bold" style={{ color: s.color }}>✓</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-2xl font-black">Who Accelerator Is For</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 text-sm">
            {["You have a business idea but no roadmap", "You started but revenue is inconsistent", "You need a marketing strategy that actually works", "You're ready to pitch for funding", "You have the skills but no customers", "You want to grow from $0 to predictable income"].map((item) => (
              <div key={item} className="rounded-xl border border-[#1A1030] bg-[#0D0A1A] p-4 text-slate-400 leading-relaxed">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-5 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-black">Your 90-Day Sprint Starts Now.</h2>
          <p className="mb-8 text-slate-400">
            Get your free starter roadmap — or unlock the full Accelerator mode with Elite or Founders Lifetime access.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/starter" className="rounded-xl px-8 py-4 font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/elite" className="rounded-xl border border-violet-500/40 px-8 py-4 font-semibold text-violet-400 hover:border-violet-400 hover:text-white transition-colors">
              Unlock with Elite →
            </Link>
            <Link to="/founders" className="rounded-xl border border-yellow-500/40 px-8 py-4 font-semibold text-yellow-400 hover:border-yellow-400 hover:text-white transition-colors">
              Founders Lifetime →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
