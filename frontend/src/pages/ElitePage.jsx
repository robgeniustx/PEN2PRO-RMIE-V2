import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ELITE_FEATURES = [
  { icon: "🗺️", title: "Everything in Pro", body: "Full roadmap, progress tracking, branding, export, AI refinement, outreach strategy, credit readiness, and 90-day launch plan." },
  { icon: "🧠", title: "Advanced Strategist Guidance", body: "Go beyond a roadmap. Get industry-specific strategy layered on top of your AI output — covering competitive positioning, offer stacking, and market entry." },
  { icon: "📈", title: "Financial Projections", body: "Revenue models, startup cost estimates, break-even analysis, and 12-month income projections based on your pricing and market." },
  { icon: "🏦", title: "Vendor & Funding Resource Center", body: "Curated list of lenders, SBA programs, CDFI funders, micro-grant opportunities, and business credit vendors — organized by business stage." },
  { icon: "🏗️", title: "Company Formation Checklist", body: "LLC filing, EIN registration, operating agreement, business banking, and registered agent — step-by-step for your state." },
  { icon: "™️", title: "Trademark & IP Guidance", body: "Protect your brand name, logo, and business identity. Guidance on USPTO trademark search, filing process, and cost estimates." },
  { icon: "📣", title: "Marketing & Social Media Strategy", body: "Platform selection, content calendar, brand voice, paid ads strategy, and organic growth plan tailored to your audience and budget." },
  { icon: "🤝", title: "Done-With-You Guidance", body: "Not done-for-you. But almost. Structured templates, checklists, and AI-assisted walkthroughs for each phase of building your business." },
  { icon: "⚡", title: "Priority Support", body: "Elite members get priority response in the support queue. Your questions move to the front of the line." },
  { icon: "🔄", title: "Unlimited Roadmap Revisions", body: "Refine, pivot, and rebuild your roadmap as your business evolves — as many times as you need." },
];

const MILESTONES = [
  { step: "Week 1", title: "Foundation Setup", tasks: ["Validate your business idea", "Define your offer and pricing", "Set up LLC and EIN", "Open business bank account"] },
  { step: "Month 1", title: "Launch Ready", tasks: ["Build your brand identity", "Create your first offer package", "Set up payment processing", "Identify your first 50 prospects"] },
  { step: "Month 2", title: "Revenue Activated", tasks: ["Run first outreach campaign", "Close first 3 clients", "Collect 3 testimonials", "Submit for business credit"] },
  { step: "Month 3", title: "Growth Phase", tasks: ["Scale outreach", "Apply for business funding", "Hire first contractor/VA", "Launch referral program"] },
];

export default function ElitePage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.18) 0%, transparent 65%)", filter: "blur(45px)" }} />
        <div className="absolute top-[35%] -left-40 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-20 right-1/4 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,193,7,0.1) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,138,0,0.08) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            🔥 PEN2PRO Elite Plan
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            The Full Execution
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #FFC107)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              System. Nothing Held Back.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Elite is everything. Advanced strategy, financial projections, company formation, trademark guidance, marketing plans, vendor resources, and done-with-you execution support — all in one place.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Elite Waitlist
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
          <div className="mt-6 flex justify-center gap-6 text-xs text-slate-500">
            <span>✓ Founding member pricing locked in</span>
            <span>✓ Priority support access</span>
            <span>✓ Full platform launch June 15</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Elite Capabilities</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Pro Was a Strategy. Elite Is a System.
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Every feature in Pro, plus advanced layers that take you from planning to execution.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {ELITE_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#FF8A00]/20 bg-[#0F1520] p-5 hover:border-[#FF8A00]/40 transition-colors lg:col-span-1">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-1.5 font-bold text-white text-sm">{f.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 90-day roadmap visual */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Your First 90 Days</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black">
            A Real Execution Timeline. Not a Generic Plan.
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Elite builds your personal 90-day execution roadmap with weekly milestones, day-by-day actions, and checkpoints.
          </p>
          <div className="grid gap-5 md:grid-cols-4">
            {MILESTONES.map((m, i) => (
              <div key={m.step} className="relative rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
                <div className="mb-1 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">{m.step}</div>
                <h3 className="mb-3 font-bold text-white">{m.title}</h3>
                <ul className="space-y-1.5">
                  {m.tasks.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="mt-0.5 text-[#FF8A00]">→</span>
                      {t}
                    </li>
                  ))}
                </ul>
                {i < MILESTONES.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-[#1A2D50] md:block">
                    <span className="text-xl">›</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Elite is for */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Who This Is For</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">Elite Is For the Builder Who Is Serious</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { icon: "💼", title: "You have a real idea and want a real plan", body: "Not a dream board. A working business structure with a real offer, real pricing, and real customers in mind." },
              { icon: "🏦", title: "You want to be funding-ready in 90 days", body: "Credit, banking, entity, and documentation — all organized so you can walk into a funding conversation prepared." },
              { icon: "📣", title: "You are ready to market and sell", body: "You need a full marketing plan — social, outreach, ads, brand — not a generic tip sheet." },
              { icon: "⚡", title: "You want to move fast with the right support", body: "You need the tool and the guidance. Elite gives both. Done-with-you execution across every phase." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
                <div className="text-2xl shrink-0">{item.icon}</div>
                <div>
                  <h3 className="mb-1 font-bold text-white text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl rounded-2xl border border-[#FF8A00]/30 bg-gradient-to-br from-[#FF8A00]/10 to-[#0A0F1E] p-10 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
            style={{ background: "linear-gradient(135deg, #FF8A00, #FFC107)" }}>
            🔥
          </div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Secure Your Elite Access
          </h2>
          <p className="mb-3 text-slate-300">
            Elite waitlist members lock in founding pricing and get first access when the platform launches June 15, 2026.
          </p>
          <p className="mb-8 text-sm text-slate-500">
            Spots are limited. Elite is designed for a focused group of committed builders.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Elite Waitlist
            </Link>
            <Link to="/founders" className="rounded-xl border border-[#FF8A00]/30 px-8 py-3.5 text-sm font-semibold text-[#FF8A00] hover:border-[#FF8A00] transition-colors">
              See Legacy Founder →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
