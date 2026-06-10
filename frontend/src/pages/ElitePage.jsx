import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PRO_INCLUDED = [
  "Full RMIE business blueprint",
  "Progress tracking & milestone board",
  "Business branding support",
  "Email & PDF export",
  "AI refinement engine",
  "Outreach & sales scripts",
  "Credit & funding readiness checklist",
  "P2P Command Center access",
  "Website Builder access",
  "AI Voice Agent (basic)",
];

const ELITE_EXCLUSIVE = [
  {
    icon: "🧠",
    title: "Advanced Strategist Guidance",
    body: "Deep-dive AI analysis of your business model, competitive landscape, offer differentiation, and growth levers — beyond a basic roadmap.",
  },
  {
    icon: "📈",
    title: "Financial Projections",
    body: "12-month revenue projections, breakeven analysis, expense modeling, pricing tier strategy, and customer lifetime value calculations for your business.",
  },
  {
    icon: "🏛️",
    title: "Company Formation Checklist",
    body: "Step-by-step LLC/S-Corp formation, EIN registration, registered agent, operating agreement, and state compliance — so you build on a real foundation.",
  },
  {
    icon: "💼",
    title: "Vendor, Funding & Credit Resource Center",
    body: "Curated network of business credit vendors, funding sources, equipment lenders, factoring companies, tradeline providers, and SBA-ready preparation.",
  },
  {
    icon: "™️",
    title: "Trademark & Brand Protection Guidance",
    body: "Understand trademark basics, USPTO search guidance, brand filing steps, and how to protect your business name and intellectual property.",
  },
  {
    icon: "📱",
    title: "Social Media & Marketing Strategy",
    body: "Platform-specific growth strategies, content calendar templates, audience targeting, paid ad readiness, and organic traffic build-out plans.",
  },
  {
    icon: "🤝",
    title: "Done-With-You Style Guidance",
    body: "Elite isn't just tools. You get structured guidance that walks through your specific situation — like having a strategist in the room, not just an AI chatbot.",
  },
  {
    icon: "⚡",
    title: "Priority Support",
    body: "Elite members get priority response time for technical issues, roadmap questions, and platform guidance — no waiting in general queues.",
  },
];

export default function ElitePage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-48 right-0 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute top-[50%] -left-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,201,177,0.12) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* ── HERO ── */}
      <section className="px-5 py-24 text-center relative">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2d1a4a] bg-[#1a1030] px-4 py-1.5 text-xs font-bold text-[#a78bfa] uppercase tracking-widest">
            ⚡ PEN2PRO Elite
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Advanced Strategy.
            <br />
            <span style={{ background: "linear-gradient(90deg, #a78bfa, #00C9B1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Full Execution Support.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-8">
            Elite is everything Pro gives you — plus advanced strategist guidance, financial projections, company formation support, vendor/funding resources, trademark guidance, and done-with-you execution strategy.
          </p>
          <p className="mb-3 text-2xl font-black text-white">$499<span className="text-slate-400 text-base font-semibold">/month</span></p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/pricing"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-white shadow-[0_0_35px_rgba(124,58,237,0.4)] transition hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #7C3AED 0%, #5b21b6 100%)" }}
            >
              Upgrade to Elite — $499/mo
            </Link>
            <Link to="/waitlist?tier=elite" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join Elite Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRO INCLUDED ── */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#2d9cff]">Included From Pro</div>
          <h2 className="mb-8 text-center font-display text-2xl font-black">Everything in Pro, Plus More</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 mb-6">
            {PRO_INCLUDED.map((item) => (
              <div key={item} className="flex items-start gap-2 rounded-xl border border-[#1A2D50] bg-[#0F1520] px-4 py-3 text-sm text-slate-300">
                <span className="text-[#2d9cff] mt-0.5 shrink-0">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELITE EXCLUSIVES ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#a78bfa]">Elite Exclusives</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">What Only Elite Members Get</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            Elite goes beyond a roadmap. It gives you advanced strategy, financial modeling, legal foundation guidance, and done-with-you execution support.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ELITE_EXCLUSIVE.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#2d1a4a] bg-[#100920] p-6 hover:border-[#a78bfa]/50 transition-colors">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO ELITE IS FOR ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-display text-2xl font-black md:text-3xl">Elite Is for Builders Who Are Serious</h2>
          <p className="mb-10 text-slate-400 leading-relaxed">
            You are past the "thinking about it" stage. You have an idea, a real product or service, or a business you are already running. You need structure, strategy, and execution support — not motivation.
          </p>
          <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
            {[
              "You need real financial projections, not guesses",
              "You want to form your LLC and build business credit the right way",
              "You are ready to approach funding sources and need to be prepared",
              "You want a done-with-you approach, not just self-serve tools",
              "You need to protect your brand with proper trademark guidance",
              "You want marketing that actually acquires customers, not just looks good",
              "You want advanced AI analysis of your specific business",
              "You need priority support without waiting in line",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-xl border border-[#2d1a4a] bg-[#0F1520] px-4 py-3">
                <span className="text-[#a78bfa] mt-0.5 shrink-0">✓</span>
                <span className="text-sm text-slate-300">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">Build at the Elite Level.</h2>
          <p className="mb-10 text-slate-400 leading-relaxed">
            Stop guessing and start executing with a full business strategy stack — roadmap, projections, legal foundation, marketing, funding readiness, and expert-level AI guidance.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/pricing" className="rounded-xl px-8 py-3.5 text-sm font-black text-white shadow-[0_0_35px_rgba(124,58,237,0.4)] transition hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #7C3AED 0%, #5b21b6 100%)" }}>
              Upgrade to Elite
            </Link>
            <Link to="/waitlist?tier=elite" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join Elite Waitlist
            </Link>
            <Link to="/founders" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Founders Lifetime →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
