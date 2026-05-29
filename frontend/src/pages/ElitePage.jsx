import { Link } from "react-router-dom";

const ELITE_FEATURES = [
  { icon: "🗺️", title: "Everything in Pro", desc: "Full roadmap, progress tracking, branding, PDF export, AI refinement, and outreach strategy included." },
  { icon: "🧠", title: "Advanced Strategist Guidance", desc: "Deeper AI-driven strategy sessions that go beyond the roadmap into competitive positioning, pricing psychology, and growth modeling." },
  { icon: "📈", title: "Financial Projections", desc: "Revenue models, cost breakdowns, break-even analysis, and 12-month income projections tailored to your business." },
  { icon: "🏛️", title: "Company Formation Checklist", desc: "LLC, EIN, operating agreement, registered agent, business banking setup — all laid out step by step." },
  { icon: "💼", title: "Vendor & Funding Resource Center", desc: "Curated list of lenders, credit unions, SBA resources, grant databases, and vendor credit programs." },
  { icon: "™️", title: "Trademark & Legal Guidance", desc: "Trademark search walkthrough, brand protection steps, and basic legal structure guidance." },
  { icon: "📱", title: "Social Media & Marketing Guidance", desc: "Platform selection, content calendar strategy, audience targeting approach, and brand voice development." },
  { icon: "🤝", title: "Done-With-You Style Guidance", desc: "AI works through strategy with you step by step, not just generating output — it helps you think and decide." },
  { icon: "⚡", title: "Priority Support", desc: "Elite users move to the front of the line for new features, beta access, and platform updates." },
];

export default function ElitePage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-5">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #FF8A00 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-[#FF8A00]/40 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            Elite Plan
          </span>
          <h1 className="mb-5 text-4xl font-black leading-tight sm:text-5xl">
            Strategy. Structure.<br />
            <span className="text-[#FF8A00]">Execution.</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400">
            Elite is the advanced tier for founders who are serious about building. Financial projections,
            legal foundation guidance, vendor resource centers, done-with-you strategy sessions,
            and priority platform access — everything you need to go from blueprint to business.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=elite"
              className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] transition"
              style={{ background: "linear-gradient(135deg, #FF8A00 0%, #FFB347 100%)" }}
            >
              Join the Elite Waitlist
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-[#FF8A00] hover:text-white"
            >
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-5">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-black text-white">What Elite Unlocks</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ELITE_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#2A1800] bg-[#110A00] p-5 transition hover:border-[#FF8A00]/40"
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-12 px-5">
        <div className="mx-auto max-w-2xl rounded-2xl border border-[#FF8A00]/20 bg-[#100800] p-8">
          <h3 className="mb-5 text-center text-xl font-black text-white">Elite is Built for Founders Who Are Ready to Move</h3>
          <ul className="space-y-3">
            {[
              "You have an idea and you are ready to structure it into a real business",
              "You need financial projections to show investors, partners, or a bank",
              "You want to form your LLC, get your EIN, open a business account, and build credit",
              "You want a platform that helps you think, not just generate content",
              "You are serious enough to invest in your own growth",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-0.5 shrink-0 text-[#FF8A00]">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-4 text-2xl font-black text-white">This is the Tier That Builds Real Businesses</h2>
          <p className="mb-8 text-slate-400">
            Join the Elite waitlist and lock in your early-access pricing before we launch.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=elite"
              className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] transition"
              style={{ background: "linear-gradient(135deg, #FF8A00 0%, #FFB347 100%)" }}
            >
              Join Elite Waitlist
            </Link>
            <Link to="/founders" className="rounded-xl border border-[#9B59B6]/40 px-8 py-4 text-base font-semibold text-[#9B59B6] transition hover:border-[#9B59B6] hover:bg-[#9B59B6]/10">
              Explore Legacy Founder →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
