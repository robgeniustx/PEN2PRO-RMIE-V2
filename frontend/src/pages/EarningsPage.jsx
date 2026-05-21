import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MILESTONES = [
  { month: "Month 1", target: "$0–$2,000", tasks: ["Get first 2–3 paid clients", "Validate your core offer", "Collect 3 Google reviews"] },
  { month: "Month 2", target: "$2,000–$5,000", tasks: ["Systemize delivery", "Add 1 upsell or add-on offer", "10 testimonials collected"] },
  { month: "Month 3", target: "$5,000–$10,000", tasks: ["Hire first part-time help", "Launch $50/day ad test", "Set commercial or recurring contract"] },
  { month: "Month 6", target: "$10,000–$20,000/mo", tasks: ["Team of 2–3 operators", "Recurring revenue stream established", "CRM and automation running"] },
];

export default function EarningsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00C9B1]/30 bg-[#00C9B1]/10 px-3 py-1 text-xs font-semibold text-[#00C9B1] mb-3">
            EARNINGS TRACKER
          </div>
          <h1 className="font-display text-3xl font-black text-white">Earnings & Milestones</h1>
          <p className="mt-2 text-slate-400 text-sm max-w-xl">
            Track your revenue milestones and see what actions drive income at each stage of your business.
          </p>
        </div>

        {/* Revenue Milestones */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-12">
          {MILESTONES.map((m, i) => (
            <div key={i} className="rounded-2xl border border-[#1A2D50] p-6" style={{ background: "#0F1520" }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{m.month}</span>
                <span className="font-display text-lg font-black text-[#00C9B1]">{m.target}</span>
              </div>
              <ul className="space-y-2">
                {m.tasks.map((task, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-[#D4A017] mt-0.5 shrink-0">→</span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mb-8 rounded-xl border border-[#1A2D50] bg-[#080C14] px-4 py-4 text-xs text-slate-500">
          PEN2PRO does not guarantee income results. These milestones represent potential outcomes based on consistent effort, proper execution, and market conditions. Individual results will vary.
        </div>

        {/* Upgrade CTA */}
        <div className="rounded-2xl border border-[#D4A017]/30 bg-[#D4A017]/5 p-8 text-center">
          <h2 className="font-display text-xl font-bold text-white mb-2">Unlock Full Financial Projections</h2>
          <p className="text-slate-400 text-sm mb-6">Pro and Elite members get detailed financial models, revenue forecasting, and pricing strategy built for their specific business.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="btn-gold px-8 py-3 text-sm font-bold">Upgrade to Pro</Link>
            <Link to="/waitlist?tier=elite" className="btn-outline px-8 py-3 text-sm font-bold">Upgrade to Elite</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
