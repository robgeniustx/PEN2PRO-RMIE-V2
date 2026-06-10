import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  { icon: "🤖", title: "Advanced RMIE Strategy Engine", body: "Deeper AI output: financial projections, competitive positioning, and 12-month growth modeling." },
  { icon: "📈", title: "Financial Projections", body: "Revenue forecasting, break-even analysis, and pricing sensitivity — built around your numbers." },
  { icon: "🏛️", title: "Legal Foundation Guidance", body: "LLC structuring, trademark readiness, operating agreements, and compliance checklist." },
  { icon: "🤝", title: "Vendor & Resource Center", body: "Curated access to funding partners, credit builders, legal, insurance, and marketing vendors." },
  { icon: "💳", title: "Advanced Credit & Funding", body: "Full credit strategy, tradeline guidance, funding readiness score, and lender match prep." },
  { icon: "🧠", title: "Strategist-Level Guidance", body: "Done-with-you guidance that goes beyond automation — real strategy applied to your business." },
  { icon: "⚡", title: "Priority Support", body: "Skip the queue. Elite members get priority response on all platform questions and roadmap help." },
  { icon: "🚀", title: "Advanced Automations", body: "AI-powered outreach automation, social scheduling, and lead scoring built into your workflow." },
];

const STACK = [
  "Everything in Pro",
  "Advanced RMIE strategy engine",
  "Financial projections & modeling",
  "Legal foundation checklist",
  "Trademark & social media guidance",
  "Vendor & funding resource center",
  "Advanced credit & tradeline strategy",
  "Company formation walkthrough",
  "Priority support",
  "30/60/90-day execution sprint plan",
  "Advanced CRM & pipeline tools",
  "P2P AI Voice Agent (advanced)",
];

export default function ElitePage() {
  return (
    <div className="min-h-screen bg-[#070B14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-5 text-center">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,138,0,0.14) 0%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-block rounded-full border border-[#FF8A00]/40 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            PEN2PRO Elite
          </div>
          <h1 className="mb-5 text-4xl font-black leading-tight md:text-6xl">
            This Is Where<br />
            <span style={{ background: "linear-gradient(90deg,#FF8A00,#FFB347)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Builders Scale.
            </span>
          </h1>
          <p className="mb-8 text-lg text-slate-400 max-w-2xl mx-auto">
            Elite is the advanced execution tier. Strategy, financial modeling, legal foundation, vendor resources, credit architecture, and priority support — all in one platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/waitlist?tier=elite"
              className="rounded-xl px-8 py-4 text-base font-black text-white transition-all"
              style={{ background: "linear-gradient(135deg,#FF8A00,#E65100)", boxShadow: "0 0 24px rgba(255,138,0,0.35)" }}
            >
              Join Elite Waitlist
            </Link>
            <Link
              to="/founders"
              className="rounded-xl border border-[#FF8A00]/40 px-8 py-4 text-base font-semibold text-[#FF8A00] hover:border-[#FF8A00] hover:text-white transition-colors"
            >
              See Founders Lifetime →
            </Link>
          </div>
          <p className="mt-5 text-sm text-slate-500">$499/mo · Cancel anytime · Priority onboarding</p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 px-5">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 text-center text-3xl font-black">The Full Elite Stack</h2>
          <p className="mb-12 text-center text-slate-400">Everything Pro has — plus the advanced tools serious operators need.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#2A1A00] bg-[#130E00] p-6 hover:border-[#FF8A00]/50 transition-colors">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Stack List */}
      <section className="py-16 px-5 bg-[#0A0F1E]">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-center text-2xl font-black">Everything Included in Elite</h2>
          <div className="rounded-2xl border border-[#2A1A00] bg-[#0D1626] p-8">
            <ul className="space-y-3">
              {STACK.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="mt-0.5 shrink-0 text-[#FF8A00] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 px-5">
        <div className="mx-auto max-w-2xl text-center">
          <blockquote className="text-xl font-semibold text-slate-300 italic leading-relaxed">
            "Elite isn't for people who want to think about building a business. It's for people who are building one and need the real tools to do it right."
          </blockquote>
          <p className="mt-4 text-sm text-[#FF8A00] font-bold">— Robert Green, Founder · PEN2PRO</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-5 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-black">Ready for Elite-Level Execution?</h2>
          <p className="mb-8 text-slate-400">Join the Elite waitlist. When the platform launches, you'll have everything you need to move fast and build right.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/waitlist?tier=elite" className="rounded-xl px-8 py-4 font-black text-white" style={{ background: "linear-gradient(135deg,#FF8A00,#E65100)" }}>
              Join Elite Waitlist
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-4 font-semibold text-slate-300 hover:border-[#FF8A00] hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
