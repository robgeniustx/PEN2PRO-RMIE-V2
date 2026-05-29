import { Link } from "react-router-dom";

const FEATURES = [
  { icon: "🗺️", title: "Full Roadmap Access", desc: "Unlock your complete 90-day business roadmap — 7-day, 30-day, and 90-day plans with detailed action steps." },
  { icon: "📊", title: "Progress Tracking", desc: "Track every milestone, mark completed steps, and see how far you've come from idea to income." },
  { icon: "🎨", title: "Business Branding Support", desc: "Get brand name suggestions, logo direction, color scheme guidance, and positioning copy." },
  { icon: "📤", title: "Email & PDF Export", desc: "Export your full business roadmap as a PDF or send it directly to your inbox for offline access." },
  { icon: "🤖", title: "AI Refinement", desc: "Refine your roadmap with follow-up prompts. Ask deeper questions and get sharper strategy back." },
  { icon: "📣", title: "Outreach Strategy", desc: "Get a tailored outreach script, prospect list approach, and messaging framework for your niche." },
  { icon: "💳", title: "Credit & Funding Readiness", desc: "Step-by-step checklist to clean up personal credit, build business credit, and prepare for funding." },
  { icon: "🔗", title: "Resource Links", desc: "Curated tools for LLC formation, business banking, payment processing, bookkeeping, and more." },
];

export default function ProPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-5">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #1E88E5 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-[#1E88E5]/40 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">
            Pro Plan
          </span>
          <h1 className="mb-5 text-4xl font-black leading-tight sm:text-5xl">
            Stop Guessing.<br />
            <span className="text-[#1E88E5]">Start Executing.</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400">
            Pro gives you the full PEN2PRO roadmap engine — complete action plans, branding direction,
            outreach strategy, credit readiness, and AI refinement so you can move from idea to income
            with real structure, not guesswork.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=pro"
              className="rounded-xl bg-[#1E88E5] px-8 py-4 text-base font-black text-white transition hover:bg-[#1565C0]"
            >
              Join the Pro Waitlist
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-[#1E88E5] hover:text-white"
            >
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-5">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-black text-white">Everything in Pro</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#1A2D50] bg-[#0D1520] p-5 transition hover:border-[#1E88E5]/40"
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison strip */}
      <section className="py-12 px-5">
        <div className="mx-auto max-w-2xl rounded-2xl border border-[#1E88E5]/30 bg-[#0D1B35] p-8 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#1E88E5]">Pro vs Free</p>
          <h3 className="mb-4 text-xl font-black text-white">Free gets you started. Pro gets you moving.</h3>
          <p className="mb-6 text-slate-400">
            The Free roadmap gives you a useful preview. Pro unlocks the full strategy, export tools,
            AI refinement, branding support, and everything you need to actually launch.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {[
              ["Free", "Starter roadmap preview", "Basic action steps", "No export", "No branding help"],
              ["Pro", "Full 90-day roadmap", "Detailed action steps", "PDF + email export", "Branding direction"],
            ].map(([tier, ...items]) => (
              <div key={tier} className={`rounded-xl p-4 ${tier === "Pro" ? "border border-[#1E88E5]/40 bg-[#0A1628]" : "border border-[#1A2235] bg-[#080C14]"}`}>
                <p className={`mb-3 font-black ${tier === "Pro" ? "text-[#1E88E5]" : "text-slate-500"}`}>{tier}</p>
                {items.map((item) => (
                  <p key={item} className={`mb-1 ${tier === "Pro" ? "text-slate-300" : "text-slate-600 line-through"}`}>
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 px-5">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-4 text-2xl font-black text-white">Ready to Build for Real?</h2>
          <p className="mb-8 text-slate-400">
            Join the Pro waitlist now. Early access pricing locks in when we launch.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="rounded-xl bg-[#1E88E5] px-8 py-4 text-base font-black text-white transition hover:bg-[#1565C0]">
              Join Pro Waitlist
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#FF8A00]/40 px-8 py-4 text-base font-semibold text-[#FF8A00] transition hover:border-[#FF8A00] hover:bg-[#FF8A00]/10">
              Explore Elite →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
