import { Link } from "react-router-dom";

const MODULES = [
  {
    phase: "Week 1–2",
    color: "#1E88E5",
    title: "Revenue Foundation",
    items: [
      "Define 3 offer tiers with pricing",
      "Identify your first 50 target prospects",
      "Build a simple outreach message template",
      "Create a Google Business Profile and collect 3 reviews",
    ],
  },
  {
    phase: "Week 3–4",
    color: "#00BFA5",
    title: "Outreach & First Sales",
    items: [
      "Message 20 prospects per day for 7 days",
      "Follow up with anyone who engaged",
      "Close first 3 clients at any price point",
      "Collect case study or testimonial from each",
    ],
  },
  {
    phase: "Month 2",
    color: "#FF8A00",
    title: "Marketing Build-Out",
    items: [
      "Create 30-day content calendar",
      "Set up 1–2 social platforms (pick where your customers are)",
      "Post 3x per week minimum",
      "Test a $10/day ad only after validating demand organically",
    ],
  },
  {
    phase: "Month 3",
    color: "#9B59B6",
    title: "Growth & Scale",
    items: [
      "Raise prices by 20–40% based on demand",
      "Hire or outsource 1 task you do not want to do",
      "Apply for business credit once 3–6 months of bank history exists",
      "Begin funding readiness documentation",
    ],
  },
];

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-5">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #FF8A00 0%, #1E88E5 100%)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-[#FF8A00]/40 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            Growth Accelerator
          </span>
          <h1 className="mb-5 text-4xl font-black leading-tight sm:text-5xl">
            From Launch to Revenue.<br />
            <span className="text-[#FF8A00]">90 Days.</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400">
            Accelerator is PEN2PRO's advanced growth and monetization mode. It turns your
            business foundation into a real revenue engine — with a 30/60/90-day execution plan,
            sales scripts, customer acquisition strategy, and funding readiness milestones.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=elite"
              className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] transition"
              style={{ background: "linear-gradient(135deg, #FF8A00 0%, #FFB347 100%)" }}
            >
              Unlock Accelerator with Elite
            </Link>
            <Link
              to="/starter"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 transition hover:border-[#FF8A00] hover:text-white"
            >
              Start Free First
            </Link>
          </div>
        </div>
      </section>

      {/* 90-Day Plan */}
      <section className="py-16 px-5">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-3 text-center text-2xl font-black text-white">Your 90-Day Execution Map</h2>
          <p className="mb-10 text-center text-slate-400">
            No vague advice. No "just post on social media." These are exact steps, in order, built around your business.
          </p>
          <div className="space-y-6">
            {MODULES.map((m) => (
              <div
                key={m.phase}
                className="rounded-2xl border bg-[#0D1520] p-6"
                style={{ borderColor: `${m.color}30` }}
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
                    style={{ background: `${m.color}15`, color: m.color, border: `1px solid ${m.color}30` }}
                  >
                    {m.phase}
                  </span>
                  <h3 className="text-lg font-black text-white">{m.title}</h3>
                </div>
                <ul className="space-y-2">
                  {m.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-300">
                      <span className="mt-1 shrink-0" style={{ color: m.color }}>→</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 px-5">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-black text-white">Accelerator Includes</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["📈", "Revenue Acceleration Model"],
              ["📣", "Marketing Strategy by Channel"],
              ["🎯", "Customer Acquisition Playbook"],
              ["💬", "Sales Script Templates"],
              ["💰", "Pricing Strategy & Testing"],
              ["💳", "Funding Readiness Milestones"],
              ["📊", "30/60/90-Day Execution Plan"],
              ["🔗", "Outreach Campaign Framework"],
              ["⬆️", "Upgrade Path Recommendations"],
            ].map(([icon, label]) => (
              <div key={label} className="flex items-center gap-3 rounded-xl border border-[#1A2235] bg-[#0A0F1E] p-4">
                <span className="text-2xl">{icon}</span>
                <span className="text-sm font-semibold text-slate-300">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-4 text-2xl font-black text-white">Stop Planning. Start Accelerating.</h2>
          <p className="mb-8 text-slate-400">
            Accelerator mode is available with Elite and Legacy Founder. Join the waitlist to lock in your spot.
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
