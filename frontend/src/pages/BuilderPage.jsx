import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const TOOLS = [
  {
    icon: "💡",
    title: "Business Idea Intake",
    body: "Tell PEN2PRO your idea, skill, or experience. The engine identifies the market, the problem it solves, and whether the idea is viable.",
  },
  {
    icon: "🏷️",
    title: "Brand Name Ideas",
    body: "Get AI-generated business name suggestions based on your niche, audience, and positioning. Includes availability guidance.",
  },
  {
    icon: "🏗️",
    title: "Business Model Generation",
    body: "Identify your revenue model — service, product, subscription, affiliate, hybrid — and how to structure your offer for maximum profitability.",
  },
  {
    icon: "📦",
    title: "Offer Creation",
    body: "Build your core offer: what you sell, who you sell it to, at what price, and how to package it for conversion.",
  },
  {
    icon: "✅",
    title: "Startup Checklist",
    body: "Step-by-step startup checklist so you don't miss the legal, financial, operational, or marketing essentials.",
  },
  {
    icon: "🏛️",
    title: "LLC / EIN / Business Bank",
    body: "Know exactly how to form your LLC, get your EIN, and open a business bank account — in the right order.",
  },
  {
    icon: "🗓️",
    title: "Launch Roadmap",
    body: "A 7-day and 30-day action plan that tells you what to do, in what order, to launch your business the right way.",
  },
  {
    icon: "💾",
    title: "Save & Export Your Blueprint",
    body: "Save your roadmap to your account, export as PDF, or email it to yourself. Pro/Elite members get full export and tracking.",
  },
];

const STEPS = [
  { step: "01", title: "Enter Your Idea", body: "Describe your business idea, skill, or experience in plain language. No business degree required." },
  { step: "02", title: "Choose Your Industry", body: "Select your industry from a curated list or let the engine identify it automatically." },
  { step: "03", title: "Set Your Goals", body: "Tell us your income goals, available time, and whether you're starting from scratch or already have clients." },
  { step: "04", title: "Get Your Blueprint", body: "The RMIE engine generates your customized business roadmap — structured, specific, and actionable." },
  { step: "05", title: "Execute & Track", body: "Use your blueprint to take action. Track your progress with Pro/Elite. Upgrade when you're ready." },
];

export default function BuilderPage() {
  return (
    <div className="relative min-h-screen bg-[#080C14] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(45px)" }} />
        <div className="absolute top-[45%] -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(13,71,161,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,136,229,0.10) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            🏗️ Business Builder Mode
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Build the Business
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Right from the Start
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Builder mode takes your idea from concept to launch-ready with a complete business setup toolkit — brand name, offer structure, LLC checklist, business bank guide, and a real 30-day launch roadmap.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #1E88E5 0%, #D4A017 100%)" }}>
              Start Building Free
            </Link>
            <Link to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Upgrade for Full Access
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">How Builder Works</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black">5 Steps from Idea to Launch-Ready</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            No business experience required. PEN2PRO Builder walks you through every step in the right order so nothing falls through the cracks.
          </p>
          <div className="space-y-4">
            {STEPS.map((s, i) => (
              <div key={s.step} className="flex items-start gap-5 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl font-black text-sm text-[#080C14]"
                  style={{ background: i % 2 === 0 ? "linear-gradient(135deg, #1E88E5, #0D47A1)" : "linear-gradient(135deg, #D4A017, #FF8A00)" }}>
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">Builder Tools</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black">Everything You Need to Launch</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Builder mode gives you the complete startup toolkit — from naming your business to opening your business bank account — in one platform.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TOOLS.map((t) => (
              <div key={t.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
                <div className="mb-3 text-2xl">{t.icon}</div>
                <h3 className="mb-1.5 font-bold text-white text-sm">{t.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE VS PAID */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Free vs Paid</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">Start Free. Upgrade When Ready.</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <div className="mb-4 font-bold text-white text-lg">Free</div>
              <ul className="space-y-3">
                {[
                  "Starter business blueprint",
                  "Basic roadmap preview",
                  "Business idea intake",
                  "Limited progress tracking",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-green-400">✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link to="/starter"
                className="mt-6 block w-full rounded-xl border border-[#1A2D50] py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
                Start Free
              </Link>
            </div>
            <div className="relative rounded-2xl bg-[#0F1520] p-6 overflow-hidden"
              style={{ border: "1px solid rgba(212,160,23,0.40)", boxShadow: "0 0 30px rgba(212,160,23,0.10)" }}>
              <div className="absolute inset-x-0 top-0 h-0.5"
                style={{ background: "linear-gradient(90deg, #1E88E5, #D4A017, #FF8A00)" }} />
              <div className="mb-4 flex items-center justify-between">
                <span className="font-bold text-white text-lg">Pro / Elite</span>
                <span className="rounded-full bg-[#D4A017]/20 px-2.5 py-0.5 text-xs font-bold text-[#D4A017]">Recommended</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Everything Free includes",
                  "Full RMIE blueprint",
                  "7 / 30 / 90-day action plans",
                  "Brand name & offer creation",
                  "LLC / EIN / bank checklist",
                  "Progress tracking",
                  "PDF & email export",
                  "AI refinement",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-[#D4A017]">✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link to="/waitlist?tier=pro"
                className="mt-6 block w-full rounded-xl py-3 text-center text-sm font-black text-[#080C14]"
                style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)" }}>
                Join Pro Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Your Business Starts Here
          </h2>
          <p className="mb-10 text-slate-400">
            Stop waiting for the perfect moment. Start with a free roadmap and build from there.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)" }}>
              Start Free Roadmap
            </Link>
            <Link to="/accelerator"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Explore Accelerator →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
