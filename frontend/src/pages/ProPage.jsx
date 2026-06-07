import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  { icon: "🗺️", title: "Full RMIE Roadmap", body: "Complete business blueprint — startup cost estimate, revenue model, pricing strategy, 7-day plan, 30-day launch, 90-day growth." },
  { icon: "📊", title: "Full Progress Tracking", body: "Track every milestone from idea to launch. See what's done, what's next, and what needs attention." },
  { icon: "🎨", title: "Business Branding Support", body: "Brand name ideas, color direction, logo concept prompts, tagline, and brand voice guidance built around your offer." },
  { icon: "📧", title: "Email & PDF Export", body: "Export your full roadmap as a professional PDF or send it to your email for reference anytime." },
  { icon: "🤖", title: "AI Refinement Engine", body: "Refine and sharpen your roadmap as your idea evolves. Ask follow-up questions and iterate toward clarity." },
  { icon: "📣", title: "Outreach Strategy", body: "Who to contact, what to say, how many outreach attempts per day, and how to convert conversations into clients." },
  { icon: "💳", title: "Credit & Funding Readiness", body: "Full checklist to get your personal and business credit ready, position yourself for funding, and avoid common funding mistakes." },
  { icon: "🏗️", title: "Business Foundation Checklist", body: "LLC, EIN, business bank account, bookkeeping, insurance, and payment setup — step by step." },
];

const COMPARED = [
  { label: "1 starter blueprint", free: true, pro: false },
  { label: "Full business blueprint", free: false, pro: true },
  { label: "Progress tracking", free: "Limited", pro: "Full" },
  { label: "AI refinement", free: false, pro: true },
  { label: "Email & PDF export", free: false, pro: true },
  { label: "Branding support", free: false, pro: true },
  { label: "Outreach strategy", free: false, pro: true },
  { label: "Credit & funding checklist", free: false, pro: true },
];

export default function ProPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.2) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[40%] -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            ⚡ PEN2PRO Pro Plan
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Your Full Business
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Strategy Platform
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-8">
            Pro gives you a complete RMIE roadmap, full progress tracking, branding tools, AI refinement, outreach strategy, and credit & funding readiness — everything you need to move from idea to income.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center mb-6">
            <Link to="/waitlist?tier=pro" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Pro Waitlist
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
          <div className="inline-flex items-center gap-2 rounded-2xl border border-[#1A2D50] bg-[#0F1520] px-6 py-3">
            <span className="text-2xl font-black text-white">$249</span>
            <span className="text-slate-400 text-sm">/month · Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Pro Features</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything You Need to Launch and Grow
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Not generic templates. A real, refined business strategy built around your specific idea, industry, and situation.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 hover:border-[#1E88E5]/40 transition-colors">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free vs Pro Comparison */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Free vs Pro</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">See the Difference</h2>
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] overflow-hidden">
            <div className="grid grid-cols-3 border-b border-[#1A2D50] px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">
              <span>Feature</span>
              <span className="text-center">Free</span>
              <span className="text-center text-[#FF8A00]">Pro</span>
            </div>
            {COMPARED.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-3 px-6 py-4 ${i % 2 === 0 ? "bg-[#0A0F1E]/40" : ""}`}>
                <span className="text-sm text-slate-300">{row.label}</span>
                <span className="text-center text-sm">
                  {row.free === true ? <span className="text-green-400">✓</span>
                    : row.free === false ? <span className="text-slate-600">—</span>
                    : <span className="text-slate-400 text-xs">{row.free}</span>}
                </span>
                <span className="text-center text-sm">
                  {row.pro === true ? <span className="text-[#FF8A00] font-bold">✓</span>
                    : row.pro === false ? <span className="text-slate-600">—</span>
                    : <span className="text-[#FF8A00] font-bold text-xs">{row.pro}</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Ready to Move from Idea to Income?
          </h2>
          <p className="mb-10 text-slate-400">
            Join the Pro waitlist. Be notified the moment subscriptions open and lock in early access pricing.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Pro Waitlist
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Elite Plan →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
