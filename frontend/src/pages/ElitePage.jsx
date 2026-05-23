import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ELITE_PRO_FEATURES = [
  {
    icon: "🗺️",
    title: "Full RMIE Blueprint",
    body: "Complete business roadmap with startup cost estimate, revenue model, pricing structure, offer design, and 7/30/90-day execution plans.",
  },
  {
    icon: "🖥️",
    title: "P2P Command Center",
    body: "Centralized hub for leads, tasks, automations, outreach campaigns, and full business activity management.",
  },
  {
    icon: "👥",
    title: "Advanced CRM Pipeline",
    body: "Full lead lifecycle tracking — intake to close. Manage follow-ups, pipeline stages, and client relationships at scale.",
  },
  {
    icon: "🌐",
    title: "Website Builder",
    body: "Launch a professional business presence fast. No developer needed — your brand, live and converting.",
  },
  {
    icon: "🎙️",
    title: "AI Voice Agent (Advanced)",
    body: "Full AI voice capabilities — inbound handling, lead qualification, appointment scheduling, and intelligent routing.",
  },
  {
    icon: "📣",
    title: "Marketing Roadmap",
    body: "Custom marketing plan built for your business type, audience, and budget — not recycled generic tactics.",
  },
];

const ELITE_EXCLUSIVE_FEATURES = [
  {
    icon: "🧠",
    title: "Advanced RMIE Strategy Engine",
    body: "Deeper AI strategist analysis — competitive positioning, market sizing, differentiation strategy, and multi-revenue stream mapping.",
  },
  {
    icon: "📊",
    title: "Financial Projections",
    body: "12-month revenue projections, break-even analysis, cash flow modeling, and scenario planning built from your actual inputs.",
  },
  {
    icon: "🏦",
    title: "Funding Partner Resources",
    body: "Curated lender directory, SBA loan guidance, alternative funding sources, grant databases, and investor-ready preparation checklist.",
  },
  {
    icon: "🤝",
    title: "Done-With-You Guidance",
    body: "Elite members get structured strategist-style walkthroughs — not just output to read, but process to execute alongside.",
  },
  {
    icon: "💳",
    title: "Vendor & Credit Resource Center",
    body: "Net-30 vendor list, tradeline strategy, business credit building sequence, and D-U-N-S registration guidance.",
  },
  {
    icon: "⚡",
    title: "Priority Support",
    body: "Skip the line. Elite members receive accelerated support response and direct access to strategy resources.",
  },
  {
    icon: "🏢",
    title: "Company Formation Checklist",
    body: "Step-by-step LLC setup, EIN registration, business bank account, registered agent, and operating agreement guide.",
  },
  {
    icon: "™️",
    title: "Trademark & Brand Guidance",
    body: "Brand name search, trademark filing primer, social media handle strategy, and brand identity direction.",
  },
];

const WHO_ELITE_IS_FOR = [
  {
    title: "Serious Builders",
    body: "You are not experimenting. You are building a real business and need the structure, tools, and strategy to match that commitment.",
  },
  {
    title: "Six-Figure Goal Setters",
    body: "Your roadmap goes beyond startup. You need financial projections, revenue modeling, and a scaling plan built around real numbers.",
  },
  {
    title: "Founders Seeking Funding",
    body: "You want to be investor-ready or lender-ready. Elite gives you the funding checklist, credit strategy, and documentation foundation to get there.",
  },
  {
    title: "People Ready to Scale",
    body: "You already have momentum — a client, a product, some traction. Elite helps you systematize, grow revenue, and build operational infrastructure.",
  },
];

export default function ElitePage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">

      {/* ── Background orbs ── */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -left-48 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.18) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute top-[35%] -right-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.14) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.20) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Navbar />

      {/* ── HERO ── */}
      <section className="relative px-5 py-28 text-center overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,160,23,0.12) 0%, transparent 70%)" }}
        />
        <div className="mx-auto max-w-3xl">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-black uppercase tracking-widest"
            style={{ borderColor: "#D4A017", color: "#D4A017", background: "rgba(212,160,23,0.08)" }}
          >
            Best Value Plan
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            PEN2PRO Elite —{" "}
            <span
              style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Advanced Strategy & Execution
            </span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Elite is the full execution tier. Advanced AI strategist guidance, financial projections,
            funding partner resources, done-with-you support, and every tool in the PEN2PRO platform —
            built for founders who are serious about building something real.
          </p>
          <p className="mb-10 text-3xl font-black text-white">
            $499<span className="text-lg font-normal text-slate-500">/month</span>
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/pricing"
              className="rounded-xl px-10 py-4 text-sm font-black text-[#0A0F1E]"
              style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)" }}
            >
              Upgrade to Elite
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-10 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Compare Plans
            </Link>
          </div>
        </div>
      </section>

      {/* ── EVERYTHING IN PRO FEATURES GRID ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
            Included with Elite
          </div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything in Pro, Plus More
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-slate-400">
            Elite starts where Pro ends. You get the full RMIE blueprint, Command Center, website builder,
            advanced CRM, and AI voice — then we add the strategist-level tools that Pro doesn't include.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ELITE_PRO_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 transition hover:border-[#D4A017]/40"
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELITE-EXCLUSIVE FEATURES ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>
            Elite-Only Features
          </div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            The Strategist Tier No Other Plan Offers
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-slate-400">
            These are not upgrades you can bolt on later. Elite members get the complete advanced system
            from day one — including done-with-you guidance, financial projections, and funding readiness.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {ELITE_EXCLUSIVE_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6 transition hover:border-[#D4A017]/60"
                style={{
                  border: "1px solid rgba(212,160,23,0.25)",
                  background: "linear-gradient(135deg, rgba(212,160,23,0.05) 0%, #0F1520 100%)",
                }}
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
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">
            Who Elite Is For
          </div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Built for Founders Who Are Ready
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-slate-400">
            Elite is not for people who are just exploring. It is for people who have made the decision
            to build something real and need the full infrastructure to do it right.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {WHO_ELITE_IS_FOR.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-7"
              >
                <div
                  className="mb-1 inline-block rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider"
                  style={{ background: "rgba(212,160,23,0.12)", color: "#D4A017" }}
                >
                  {item.title}
                </div>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div
          className="mx-auto max-w-2xl rounded-2xl border p-12 text-center"
          style={{
            borderColor: "rgba(212,160,23,0.30)",
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,160,23,0.08) 0%, transparent 70%), #0F1520",
          }}
        >
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest"
            style={{ background: "rgba(212,160,23,0.10)", border: "1px solid rgba(212,160,23,0.30)", color: "#D4A017" }}
          >
            Ready to Go Elite?
          </div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            The Full Platform. The Full Strategy.
          </h2>
          <p className="mb-8 text-slate-400 leading-relaxed">
            Elite members get everything — advanced RMIE engine, financial projections, funding resources,
            done-with-you guidance, company formation checklist, trademark direction, and priority support.
            All for $499/month. Lock in before launch pricing ends.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/pricing"
              className="rounded-xl px-10 py-4 text-sm font-black text-[#0A0F1E]"
              style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)" }}
            >
              Upgrade to Elite — $499/mo
            </Link>
            <Link
              to="/waitlist"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-600">
            Not sure yet?{" "}
            <Link to="/pro" className="font-semibold hover:text-white transition" style={{ color: "#1E88E5" }}>
              See what Pro includes
            </Link>
            {" "}or{" "}
            <Link to="/starter" className="font-semibold hover:text-white transition" style={{ color: "#1E88E5" }}>
              start with a free roadmap
            </Link>
            {" "}— no credit card required.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
