import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ELITE_FEATURES = [
  {
    icon: "🧠",
    title: "Advanced Strategist Guidance",
    body: "Elite unlocks a deeper layer of RMIE intelligence — strategic analysis that goes beyond the roadmap into market positioning, competitive advantage, and execution sequencing.",
  },
  {
    icon: "📈",
    title: "Financial Projections",
    body: "Revenue modeling, startup cost estimates, 90-day income projections, break-even analysis, and pricing strategy — all generated for your specific business model.",
  },
  {
    icon: "🏦",
    title: "Vendor, Funding & Credit Resource Center",
    body: "Access a curated directory of funding sources, vendor relationships, business credit builders, and financial tools matched to your industry and stage.",
  },
  {
    icon: "📋",
    title: "Company Formation Checklist",
    body: "Full step-by-step guide to LLC formation, EIN registration, business bank setup, operating agreements, and registered agent requirements.",
  },
  {
    icon: "™️",
    title: "Trademark & Brand Protection Guidance",
    body: "Step-by-step direction on protecting your brand name, checking trademark availability, and establishing brand ownership before launch.",
  },
  {
    icon: "📱",
    title: "Social Media & Marketing Launch Plan",
    body: "30-day social launch calendar, platform selection strategy, content pillars, posting cadence, paid ad readiness checklist, and growth benchmarks.",
  },
  {
    icon: "🤝",
    title: "Done-With-You Style Guidance",
    body: "Elite is not just a tool — it walks alongside you. Structured milestone check-ins, refinement sessions, and execution guidance built into the platform.",
  },
  {
    icon: "🚀",
    title: "Priority Support",
    body: "Elite members get priority access to PEN2PRO support for technical questions, strategy clarifications, and platform guidance.",
  },
  {
    icon: "💼",
    title: "Advanced CRM & Pipeline Tools",
    body: "Full CRM with lead pipeline management, follow-up automation, deal tracking, and sales reporting — all inside PEN2PRO.",
  },
  {
    icon: "⚙️",
    title: "Advanced Automations",
    body: "Set up business automations for follow-up sequences, appointment reminders, lead intake, and client onboarding without any code.",
  },
];

const INCLUDED_FROM_PRO = [
  "Full RMIE business blueprint",
  "7 / 30 / 90-day execution plan",
  "Complete milestone tracking",
  "Branding direction & brand voice",
  "PDF & email export",
  "Sales scripts & outreach sequences",
  "AI roadmap refinement",
  "Credit & funding readiness checklist",
  "LLC, EIN & business bank checklist",
];

export default function ElitePage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -right-48 h-[700px] w-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute bottom-0 -left-48 h-[500px] w-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <Navbar />

      {/* ── HERO ── */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#3D2200] bg-[#1A0F00] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            ⚡ PEN2PRO Elite — $499/month
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Advanced Strategy.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #FF8A00, #D4A017)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Full Execution Support.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
            Elite is for builders who are done exploring and ready to execute. Everything in Pro,
            plus advanced strategist guidance, financial projections, legal foundation, vendor
            connections, and done-with-you support.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=elite"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] shadow-[0_0_35px_rgba(255,138,0,0.4)] transition hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #FF8A00, #D4A017)" }}
            >
              Join Elite Waitlist
            </Link>
            <Link
              to="/pro"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Compare with Pro
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              View All Plans
            </Link>
          </div>
          <p className="mt-5 text-sm text-slate-500">
            $499/month · No contracts · Cancel anytime · Includes everything in Pro
          </p>
        </div>
      </section>

      {/* ── PRO INCLUDED BANNER ── */}
      <section className="px-5 py-12 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div
            className="rounded-2xl border border-[#2d9cff]/30 bg-[#101a30] p-7"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#2d9cff]">
              Everything in Pro is Included
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
              {INCLUDED_FROM_PRO.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-[#2d9cff]">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ELITE-ONLY FEATURES ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            Elite-Only Access
          </div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            What Makes Elite Different
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Pro gives you the roadmap. Elite gives you the full operating system — financial projections, legal foundation, advanced automation, and done-with-you execution.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {ELITE_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 transition hover:border-[#FF8A00]/30"
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO ELITE IS FOR ── */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center font-display text-2xl font-black md:text-3xl">
            Is Elite Right for You?
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "You have a business idea but need a real financial model",
              "You want to launch legally with LLC, EIN, and business banking done right",
              "You need a real marketing and sales launch strategy — not generic advice",
              "You want vendor connections, credit-building support, and funding readiness",
              "You're serious about building revenue in the next 90 days",
              "You want done-with-you support and priority access — not just a tool",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5"
              >
                <span className="mt-0.5 shrink-0 text-[#FF8A00] text-lg">→</span>
                <p className="text-sm text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div
          className="mx-auto max-w-2xl rounded-2xl border p-10 text-center"
          style={{
            borderColor: "rgba(255,138,0,0.4)",
            background: "#150E00",
            boxShadow: "0 0 50px rgba(255,138,0,0.15)",
          }}
        >
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            PEN2PRO Elite
          </div>
          <h2 className="mb-4 font-display text-3xl font-black">
            Ready for Full Execution Support?
          </h2>
          <p className="mb-8 text-slate-400 leading-relaxed">
            Join the Elite waitlist now. Lock in launch pricing and get early access when we go live.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=elite"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] shadow-[0_0_30px_rgba(255,138,0,0.3)] transition hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #FF8A00, #D4A017)" }}
            >
              Join Elite Waitlist — $499/mo
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">
            Want lifetime access instead?{" "}
            <Link to="/founders" className="text-[#d4af37] hover:underline">
              See Founders Lifetime →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
