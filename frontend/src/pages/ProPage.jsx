import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const PRO_FEATURES = [
  {
    icon: "🗺️",
    title: "Full RMIE Business Blueprint",
    body: "Complete roadmap with 7-day action plan, 30-day launch steps, 90-day growth plan, and monetization strategy built around your specific idea — not a generic template.",
  },
  {
    icon: "📊",
    title: "Full Progress Tracking",
    body: "Track every milestone, task, and launch step with visual progress indicators. Know exactly where you are and what to do next.",
  },
  {
    icon: "🎨",
    title: "Business Branding Support",
    body: "Brand name ideas, logo direction, color palette guidance, social media handle strategy, and visual identity planning built for your niche.",
  },
  {
    icon: "📤",
    title: "Email & PDF Export",
    body: "Export your full roadmap as a branded PDF or email it directly. Share with partners, advisors, or lenders with one click.",
  },
  {
    icon: "🤖",
    title: "Advanced AI Refinement",
    body: "Refine your roadmap with deeper AI prompts. Get industry-specific insights, competitor analysis, and targeted recommendations.",
  },
  {
    icon: "📣",
    title: "Outreach Strategy",
    body: "Sales scripts, outreach templates, 20-prospect-per-day action plans, and lead generation strategy built for your exact target customer.",
  },
  {
    icon: "💳",
    title: "Credit & Funding Readiness",
    body: "Know exactly where you stand for business credit and funding. Get a readiness score and a step-by-step improvement plan.",
  },
  {
    icon: "🏗️",
    title: "Business Foundation Checklist",
    body: "LLC formation, EIN registration, business banking, and business credit builder — all organized in one actionable checklist.",
  },
];

const WHO_PRO_IS_FOR = [
  "Entrepreneurs serious about launching",
  "Side hustlers ready to go full-time",
  "Small business owners needing structure",
  "Veterans building post-service income",
  "Creators monetizing their skills",
  "Returning citizens building a new path",
];

export default function ProPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const result = await createCheckoutSession({ tier: "pro" });
      if (result?.checkout_url) {
        window.location.href = result.checkout_url;
        return;
      }
      navigate("/waitlist?tier=pro");
    } catch {
      navigate("/waitlist?tier=pro");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.2) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute top-[40%] -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(45,156,255,0.15) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#2d9cff] uppercase tracking-widest">
            ⚡ PEN2PRO Pro Plan
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Move From Idea to Income
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #2d9cff, #1E88E5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              With Pro-Level Tools
            </span>
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Pro gives you a full RMIE business roadmap, branding support, credit and funding readiness, outreach strategy, progress tracking, and PDF export — everything you need to stop planning and start executing.
          </p>
          <div className="mb-8">
            <span className="font-display text-5xl font-black text-white">$249</span>
            <span className="ml-2 text-xl text-slate-400">/month</span>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="rounded-xl bg-[#2d9cff] px-8 py-3.5 text-sm font-black text-[#081226] shadow-[0_0_35px_rgba(45,156,255,0.4)] transition hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? "Starting Checkout..." : "Upgrade to Pro — $249/mo"}
            </button>
            <Link
              to="/waitlist?tier=pro"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Join Pro Waitlist
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-500">No long-term contracts. Cancel anytime. 30-day access.</p>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#2d9cff]">What's Included</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">Everything You Need to Execute</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Pro is built for people who are done waiting and ready to move. Every tool is connected. Every feature serves one goal: turning your idea into income.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {PRO_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white text-lg">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Who Pro Is For</div>
          <h2 className="mb-12 text-center font-display text-3xl font-black md:text-4xl">Built for Builders Who Are Ready</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {WHO_PRO_IS_FOR.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4">
                <span className="text-[#2d9cff] text-xl shrink-0">✓</span>
                <p className="text-sm font-semibold text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free vs Pro */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center font-display text-3xl font-black">Free vs Pro</h2>
          <p className="mb-10 text-center text-slate-400">The free roadmap gives you a starting point. Pro gives you the full execution blueprint.</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400">Free Roadmap</p>
              <ul className="space-y-3 text-sm text-slate-400">
                {[
                  "1 starter blueprint",
                  "Basic roadmap preview",
                  "Limited progress tracking",
                  "No PDF export",
                  "No branding support",
                  "No outreach strategy",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-slate-600">—</span>
                    {i}
                  </li>
                ))}
              </ul>
              <Link
                to="/starter"
                className="mt-6 block rounded-xl border border-[#1A2D50] px-4 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Start Free Roadmap
              </Link>
            </div>
            <div className="rounded-2xl border border-[#2d9cff] bg-[#101a30] p-6 shadow-[0_0_35px_rgba(45,156,255,0.2)]">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#2d9cff]">Pro — $249/mo</p>
              <ul className="space-y-3 text-sm text-slate-200">
                {[
                  "Full RMIE blueprint",
                  "7 / 30 / 90-day action plan",
                  "Credit & funding checklist",
                  "PDF & email export",
                  "Business branding support",
                  "Outreach strategy + sales scripts",
                  "Advanced AI refinement",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#2d9cff]">✓</span>
                    {i}
                  </li>
                ))}
              </ul>
              <button
                onClick={handleCheckout}
                disabled={loading}
                className="mt-6 block w-full rounded-xl bg-[#2d9cff] py-3 text-center text-sm font-black text-[#081226] transition hover:scale-[1.02] disabled:opacity-60"
              >
                {loading ? "..." : "Get Pro"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">Ready to Upgrade to Pro?</h2>
          <p className="mb-10 text-slate-400">
            Stop guessing. Start executing. Pro gives you the blueprint, the checklist, and the strategy to build a real business — no fluff, no motivation speeches. Just real steps.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="rounded-xl bg-[#2d9cff] px-8 py-3.5 text-sm font-black text-[#081226] shadow-[0_0_35px_rgba(45,156,255,0.4)] transition hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? "Starting Checkout..." : "Get Pro — $249/mo"}
            </button>
            <Link
              to="/elite"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Explore Elite Instead →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
