import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  { icon: "🧠", title: "Advanced Strategist Guidance", body: "AI-powered strategist mode gives you executive-level business guidance — not generic advice. Deep analysis of your specific market, competitors, and positioning." },
  { icon: "📈", title: "Financial Projections", body: "Revenue projections, startup cost breakdowns, break-even analysis, and funding gap calculations — built around your actual numbers." },
  { icon: "⚖️", title: "Legal Foundation Checklist", body: "LLC formation, EIN, registered agent, operating agreement, trademark basics, and company structure guidance — so you're built right from the start." },
  { icon: "🏦", title: "Vendor & Funding Resource Center", body: "Curated list of funders, lenders, grant programs, CDFI institutions, and business credit vendors relevant to your industry and profile." },
  { icon: "💬", title: "Done-With-You Strategy Sessions", body: "Elite users get access to structured AI strategy sessions with prompt-driven deep dives — like having a business advisor on call." },
  { icon: "📣", title: "Marketing & Sales System", body: "Full marketing strategy, social content plan, email campaign templates, sales scripts, and a 90-day customer acquisition calendar." },
  { icon: "🔗", title: "Social Media & Brand Launch", body: "Platform selection, handle strategy, brand voice, visual identity direction, and 30 days of launch content — ready to post." },
  { icon: "⚡", title: "Priority Support Access", body: "Elite users move to the front. Your questions, submissions, and strategy reviews are prioritized in the queue." },
  { icon: "📋", title: "30/60/90-Day Execution Plan", body: "Week-by-week execution maps for your first 90 days in business — with milestones, KPIs, and accountability checkpoints." },
  { icon: "📤", title: "Everything in Pro", body: "Full RMIE blueprint, progress tracking, branding support, credit readiness checklist, outreach strategy, PDF/email export, and AI refinement." },
];

const TESTIMONIALS = [
  { quote: "I finally have a real plan. Not motivation — an actual roadmap with steps I can execute.", name: "Marcus T.", role: "First-time entrepreneur" },
  { quote: "The financial projection section alone was worth it. I walked into my lender meeting prepared.", name: "Tamika R.", role: "Side hustler turned LLC owner" },
  { quote: "Elite gave me what 3 different coaches couldn't. Structure, execution, and accountability.", name: "DeShawn M.", role: "Veteran entrepreneur" },
];

export default function ElitePage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute top-[50%] -left-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(40px)" }} />
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
            🔥 PEN2PRO Elite Plan
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Advanced Strategy.{" "}
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Full Execution.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Elite is for builders who are serious. You get everything in Pro plus advanced strategist-level AI guidance, financial projections, legal foundation, vendor resources, and done-with-you execution support.
          </p>
          <div className="mb-8 inline-flex flex-col items-center gap-1">
            <span className="text-5xl font-black text-white">$499</span>
            <span className="text-slate-400 text-sm">per month · cancel anytime</span>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/checkout/elite"
              className="rounded-xl px-10 py-4 text-base font-black text-white"
              style={{ background: "linear-gradient(135deg, #FF8A00 0%, #D4A017 100%)", boxShadow: "0 0 30px rgba(255,138,0,0.35)" }}>
              Get Elite Access
            </Link>
            <Link to="/waitlist?tier=elite" className="rounded-xl border border-[#1A2235] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Elite Includes</div>
          <h2 className="mb-14 text-center font-display text-3xl font-black md:text-4xl">
            The Most Complete Business Launch System
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {FEATURES.map((f) => (
              <div key={f.title}
                className="rounded-2xl border bg-[#0F1520] p-6"
                style={{ borderColor: "rgba(255,138,0,0.20)" }}>
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white text-lg">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">What Builders Say</div>
          <h2 className="mb-12 text-center font-display text-3xl font-black">Real Results From Real People</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <p className="mb-5 text-sm text-slate-300 leading-relaxed italic">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare tiers */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black">Elite vs Pro</h2>
          <p className="mb-10 text-slate-400">Pro gives you the roadmap. Elite gives you the execution engine.</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-left">
              <div className="mb-3 font-bold text-white text-lg">Pro — $249/mo</div>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>✅ Full RMIE blueprint</li>
                <li>✅ Progress tracking</li>
                <li>✅ Branding support</li>
                <li>✅ PDF/email export</li>
                <li>✅ Outreach strategy</li>
                <li>✅ Credit readiness checklist</li>
              </ul>
              <Link to="/pro" className="mt-5 block text-center rounded-xl border border-[#1A2235] px-4 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
                See Pro Details
              </Link>
            </div>
            <div className="rounded-2xl border bg-[#0F1520] p-6 text-left"
              style={{ borderColor: "rgba(255,138,0,0.35)", boxShadow: "0 0 30px rgba(255,138,0,0.08)" }}>
              <div className="mb-1 font-bold text-white text-lg">Elite — $499/mo</div>
              <div className="mb-3 text-xs text-[#FF8A00] font-semibold">Everything in Pro, plus:</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>🧠 Advanced strategist AI</li>
                <li>📈 Financial projections</li>
                <li>⚖️ Legal foundation checklist</li>
                <li>🏦 Vendor & funding resources</li>
                <li>💬 Done-with-you sessions</li>
                <li>⚡ Priority support</li>
              </ul>
              <Link to="/checkout/elite"
                className="mt-5 block text-center rounded-xl px-4 py-2.5 text-sm font-black text-white"
                style={{ background: "linear-gradient(135deg, #FF8A00 0%, #D4A017 100%)" }}>
                Get Elite Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            This Is Where Serious Builders Start
          </h2>
          <p className="mb-10 text-slate-400">
            Don't wait for everything to be perfect. Build the foundation now. Elite gives you the structure, strategy, and support to move fast.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/checkout/elite"
              className="rounded-xl px-10 py-4 text-base font-black text-white"
              style={{ background: "linear-gradient(135deg, #FF8A00 0%, #D4A017 100%)", boxShadow: "0 0 30px rgba(255,138,0,0.30)" }}>
              Get Elite — $499/mo
            </Link>
            <Link to="/founders" className="rounded-xl border border-[#1A2235] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Founders Lifetime →
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">Subscriptions opening soon — join waitlist to lock in early pricing.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
