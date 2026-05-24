import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  { icon: "🗺️", title: "Full RMIE Blueprint", body: "Complete business blueprint: target customer, problem, offer, startup cost estimate, pricing strategy, and revenue model — built around your specific idea." },
  { icon: "📊", title: "Progress Tracking", body: "Track every milestone from idea to launch. Mark steps complete, see what's next, and keep momentum." },
  { icon: "🎨", title: "Business Branding Support", body: "Brand name ideas, positioning statement, brand voice direction, and logo concept brief." },
  { icon: "📤", title: "Email & PDF Export", body: "Download or email your full roadmap as a professional PDF. Share with partners, advisors, or lenders." },
  { icon: "🤖", title: "AI Refinement", body: "Ask follow-up questions, refine your roadmap, and get deeper strategy on any section." },
  { icon: "📣", title: "Outreach Strategy", body: "Scripted outreach messages, platform-specific posting strategy, and a 7-day customer acquisition plan." },
  { icon: "💳", title: "Credit & Funding Readiness Checklist", body: "Know exactly where you stand on credit and fundability — with actionable steps to close the gaps." },
  { icon: "📅", title: "7 / 30 / 90-Day Action Plans", body: "Step-by-step action calendars built for your specific business concept, timeline, and starting resources." },
];

const COMPARISON = [
  { feature: "Starter Blueprint", free: true, pro: true },
  { feature: "Full RMIE Roadmap", free: false, pro: true },
  { feature: "Progress Tracking", free: false, pro: true },
  { feature: "Branding Support", free: false, pro: true },
  { feature: "PDF / Email Export", free: false, pro: true },
  { feature: "AI Refinement Q&A", free: false, pro: true },
  { feature: "Outreach Strategy", free: false, pro: true },
  { feature: "Credit Readiness Checklist", free: false, pro: true },
  { feature: "30/60/90-Day Plans", free: false, pro: true },
  { feature: "P2P Command Center", free: false, pro: true },
];

export default function ProPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.20) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[40%] -right-40 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(30,136,229,0.12) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            ⚡ PEN2PRO Pro Plan
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Stop Planning.{" "}
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Start Building.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Pro gives you the full RMIE roadmap — complete blueprint, execution tools, branding support, credit readiness, and everything you need to turn your idea into a real business.
          </p>
          <div className="mb-8 inline-flex flex-col items-center gap-1">
            <span className="text-5xl font-black text-white">$249</span>
            <span className="text-slate-400 text-sm">per month · cancel anytime</span>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/checkout/pro" className="rounded-xl px-10 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              Get Pro Access
            </Link>
            <Link to="/waitlist?tier=pro" className="rounded-xl border border-[#1A2235] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">What Pro Includes</div>
          <h2 className="mb-14 text-center font-display text-3xl font-black md:text-4xl">
            Everything You Need to Launch and Grow
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white text-lg">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Free vs Pro</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">See the Difference</h2>
          <div className="overflow-hidden rounded-2xl border border-[#1A2D50]">
            <div className="grid grid-cols-3 bg-[#0F1520] px-5 py-3 text-xs font-bold uppercase tracking-widest text-slate-400">
              <span>Feature</span>
              <span className="text-center">Free</span>
              <span className="text-center text-[#FF8A00]">Pro</span>
            </div>
            {COMPARISON.map((row, i) => (
              <div key={row.feature}
                className={`grid grid-cols-3 px-5 py-3.5 text-sm ${i % 2 === 0 ? "bg-[#080C14]" : "bg-[#0A0F1E]"}`}>
                <span className="text-slate-300">{row.feature}</span>
                <span className="text-center">{row.free ? "✅" : <span className="text-slate-600">—</span>}</span>
                <span className="text-center">{row.pro ? "✅" : <span className="text-slate-600">—</span>}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Ready to Unlock the Full Roadmap?
          </h2>
          <p className="mb-10 text-slate-400">
            Join hundreds of builders who upgraded from free to Pro and finally have a real plan with real execution steps.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/checkout/pro" className="rounded-xl px-10 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              Get Pro — $249/mo
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#1A2235] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Elite Plan →
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">No contracts. Cancel anytime. Subscriptions opening soon — join waitlist to be first.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
