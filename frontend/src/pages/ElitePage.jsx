import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ELITE_FEATURES = [
  { icon: "🧠", title: "Advanced RMIE Strategy Engine", desc: "Deeper AI outputs — advanced market analysis, competitive positioning, and revenue models built for your specific industry." },
  { icon: "📊", title: "Financial Projections", desc: "12-month revenue projections, break-even analysis, startup cost modeling, and profit margin strategy." },
  { icon: "💼", title: "Vendor & Funding Resource Center", desc: "Curated lender connections, vendor credit sources, SBA guidance, and grant research — organized around your business type." },
  { icon: "⚖️", title: "Company Formation Checklist", desc: "Step-by-step LLC filing, EIN registration, operating agreements, and registered agent guidance." },
  { icon: "™️", title: "Trademark & Brand Protection", desc: "Basic trademark search guidance, brand name protection strategy, and IP readiness checklist." },
  { icon: "📱", title: "Marketing & Social Strategy", desc: "Platform-by-platform social strategy, content pillars, posting cadence, and paid ad readiness checklist." },
  { icon: "🤝", title: "Done-With-You Guidance", desc: "Elite users get strategic guidance at each phase — not just a roadmap, but structured walkthroughs." },
  { icon: "🎯", title: "Priority Support", desc: "Front-of-line access. Elite members get priority response on questions, reviews, and platform issues." },
  { icon: "🤖", title: "AI Voice Agent (Advanced)", desc: "Advanced P2P AI Voice automation, appointment setting, and outreach follow-up cadences." },
  { icon: "🔁", title: "Advanced Automations", desc: "Full automation builder — follow-up sequences, lead nurture, pipeline automations, and trigger-based workflows." },
  { icon: "📈", title: "Advanced CRM & Pipeline", desc: "Full pipeline management, deal stage tracking, lead scoring, and close-rate reporting." },
  { icon: "🏆", title: "Everything in Pro", desc: "Every Pro feature included — RMIE blueprint, Command Center, Website Builder, export tools, and more." },
];

const PHASES = [
  {
    phase: "Phase 1",
    title: "Foundation",
    days: "Days 1–30",
    steps: [
      "Business entity formation (LLC/EIN)",
      "Business bank account setup",
      "Credit profile audit and repair plan",
      "Brand identity and offer structure",
      "Website and social profile launch",
    ],
  },
  {
    phase: "Phase 2",
    title: "Launch",
    days: "Days 31–60",
    steps: [
      "First paying customers acquired",
      "Outreach campaign activated",
      "Vendor accounts and tradelines started",
      "Revenue model validated",
      "Sales script refined by data",
    ],
  },
  {
    phase: "Phase 3",
    title: "Scale",
    days: "Days 61–90",
    steps: [
      "Funding readiness checklist completed",
      "Revenue tracked and documented",
      "First funding application submitted",
      "Marketing automation active",
      "Team or contractor plan developed",
    ],
  },
];

export default function ElitePage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,138,0,0.12) 0%, transparent 70%)" }}
        />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2D1A00] bg-[#1A0F00] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            🔥 PEN2PRO Elite
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Advanced Strategy.
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Full Execution Support.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400">
            Elite is for builders who are serious about going from idea to funded, operational business — with advanced AI tools, financial modeling, legal foundations, and done-with-you guidance at every phase.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite" className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              Join Elite Waitlist — $499/mo
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 transition-colors hover:text-white">
              Compare All Plans
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">Elite launches June 15, 2026. Reserve your spot now.</p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="border-t border-[#1A2D50] px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">What Elite Unlocks</div>
          <h2 className="mb-14 text-center font-display text-3xl font-black md:text-4xl">
            The Full Execution Stack
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {ELITE_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#2D1A00] bg-[#0F0A00] p-6 transition-colors hover:border-[#FF8A00]/40"
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 90-DAY ROADMAP */}
      <section className="border-t border-[#1A2D50] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">The Elite Journey</div>
          <h2 className="mb-14 text-center font-display text-3xl font-black md:text-4xl">
            Your 90-Day Launch Roadmap
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {PHASES.map((p) => (
              <div key={p.phase} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-1 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">{p.phase}</div>
                <div className="mb-1 font-display text-xl font-black">{p.title}</div>
                <div className="mb-5 text-xs text-slate-500">{p.days}</div>
                <ul className="space-y-2.5">
                  {p.steps.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="mt-0.5 shrink-0 text-[#FF8A00]">✓</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
            🔥
          </div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Stop Waiting. Start Executing.
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-400">
            Elite gives you everything you need to move from concept to funded, operational business in 90 days — with AI tools, financial modeling, and strategic guidance the whole way.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite" className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              Reserve My Elite Spot
            </Link>
            <Link to="/founders" className="rounded-xl border border-[#FF8A00]/30 px-8 py-4 text-base font-semibold text-[#FF8A00] transition-colors hover:border-[#FF8A00]">
              See Founders Lifetime →
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Want everything forever?{" "}
            <Link to="/founders" className="text-[#FF8A00] transition-colors hover:text-white">
              Explore Legacy Founder Access →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
