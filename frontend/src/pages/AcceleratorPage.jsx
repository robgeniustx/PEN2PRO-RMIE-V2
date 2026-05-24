import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MODULES = [
  { icon: "💰", title: "Revenue Acceleration", body: "Identify your fastest path to first revenue. Prioritize offers, pricing, and channels based on your specific business type and market." },
  { icon: "📣", title: "Marketing Strategy", body: "Platform selection, content strategy, brand voice, and a 30-day marketing calendar built around your offer and customer." },
  { icon: "📬", title: "Outreach Campaigns", body: "Scripted outreach messages for cold, warm, and referral contacts. Tested templates for DM, email, and phone outreach." },
  { icon: "💲", title: "Pricing Strategy", body: "Value-based pricing guidance, competitive positioning, and the psychology of offer presentation — so prospects say yes faster." },
  { icon: "👥", title: "Customer Acquisition", body: "A 30-day customer acquisition plan with daily action steps, lead source priorities, and follow-up cadence." },
  { icon: "🏦", title: "Funding Readiness", body: "Credit building roadmap, business banking setup, vendor tradelines, and documentation preparation for lenders." },
  { icon: "🗣️", title: "Sales Scripts", body: "Word-for-word scripts for discovery calls, objection handling, closing conversations, and referral requests." },
  { icon: "📆", title: "30/60/90-Day Execution Plan", body: "Week-by-week execution map with milestones, KPIs, and accountability checkpoints for your first 90 days in growth mode." },
];

const PLAN_PREVIEW = [
  { period: "Days 1–30", label: "Foundation Sprint", tasks: ["Set up LLC, EIN, and business bank", "Define 3 offer packages with pricing", "Identify 50 target prospects", "Launch Google Business Profile", "Begin outreach: 20 contacts/day"] },
  { period: "Days 31–60", label: "First Revenue Push", tasks: ["Land first 3–5 paying customers", "Collect testimonials and reviews", "Optimize your core offer based on feedback", "Build referral system", "Set up basic CRM or contact tracker"] },
  { period: "Days 61–90", label: "Scale & Systemize", tasks: ["Repeat what generated revenue in days 1–60", "Start building recurring revenue", "Document your delivery process", "Begin credit and funding preparation", "Plan next 90 days at higher revenue target"] },
];

export default function AcceleratorPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-1/3 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.16) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.16) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,138,0,0.10) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            🚀 PEN2PRO Accelerator
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Stop Thinking.{" "}
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Start Executing.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Accelerator is PEN2PRO's advanced growth and monetization mode. Revenue strategy, outreach campaigns, sales scripts, customer acquisition, and a complete 90-day execution plan — built for your specific business.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-10 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#1A2235] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Unlock Accelerator with Elite →
            </Link>
          </div>
        </div>
      </section>

      {/* Module grid */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Accelerator Modules</div>
          <h2 className="mb-14 text-center font-display text-3xl font-black md:text-4xl">
            Every System You Need to Generate Revenue
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {MODULES.map((m) => (
              <div key={m.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 text-3xl">{m.icon}</div>
                <h3 className="mb-2 font-bold text-white">{m.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 90-day plan */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">The 90-Day Execution Plan</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black">
            What the First 90 Days Actually Look Like
          </h2>
          <p className="mb-12 text-center text-slate-400 text-sm max-w-xl mx-auto">
            Not vague advice. Real steps. Real timelines. Built around what actually generates revenue in your first 90 days.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {PLAN_PREVIEW.map((p, i) => (
              <div key={p.period}
                className="rounded-2xl border bg-[#0F1520] p-6"
                style={{ borderColor: i === 0 ? "rgba(30,136,229,0.40)" : i === 1 ? "rgba(255,138,0,0.30)" : "rgba(212,160,23,0.30)" }}>
                <div className="mb-1 text-xs font-bold uppercase tracking-widest"
                  style={{ color: i === 0 ? "#1E88E5" : i === 1 ? "#FF8A00" : "#D4A017" }}>
                  {p.period}
                </div>
                <div className="mb-4 font-black text-white text-lg">{p.label}</div>
                <ul className="space-y-2">
                  {p.tasks.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-1 text-xs" style={{ color: i === 0 ? "#1E88E5" : i === 1 ? "#FF8A00" : "#D4A017" }}>▸</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PEN2PRO vs generic advice */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">The Difference</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">Generic Advice vs RMIE Output</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <div className="mb-3 font-bold text-red-400 text-sm uppercase tracking-widest">❌ Generic Advice</div>
              <div className="space-y-3 text-sm text-slate-400">
                <p>"Post on social media and market your business."</p>
                <p>"Network with people in your industry."</p>
                <p>"Consider creating a website."</p>
                <p>"Set competitive pricing."</p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#1E88E5]/30 bg-[#1E88E5]/5 p-6">
              <div className="mb-3 font-bold text-[#1E88E5] text-sm uppercase tracking-widest">✅ RMIE Accelerator Output</div>
              <div className="space-y-3 text-sm text-slate-300">
                <p>"Create 3 offer packages. Identify 50 local prospects. Message 20/day for 7 days."</p>
                <p>"Build a Google Business Profile. Collect 3 testimonials by day 14."</p>
                <p>"Test a $10/day ad only after 3 paying customers validate demand."</p>
                <p>"Charge $[X] for entry, $[Y] for core, $[Z] for premium. Here's why."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Accelerator Is Built Into Elite
          </h2>
          <p className="mb-10 text-slate-400">
            The full Accelerator — revenue strategy, outreach, sales scripts, and 90-day execution plan — is available in the Elite plan. Start with a free blueprint and upgrade when you're ready.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/elite"
              className="rounded-xl px-10 py-4 text-base font-black text-white"
              style={{ background: "linear-gradient(135deg, #FF8A00 0%, #D4A017 100%)", boxShadow: "0 0 30px rgba(255,138,0,0.30)" }}>
              Unlock Elite Accelerator
            </Link>
            <Link to="/starter" className="rounded-xl border border-[#1A2235] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Start Free First
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
