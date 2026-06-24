import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const ELITE_FEATURES = [
  {
    icon: "🧠",
    title: "Advanced Strategist Guidance",
    body: "Go beyond templates. Elite gives you advanced scenario planning, pivot strategies, competitor intelligence, and done-with-you business strategy built around your market.",
  },
  {
    icon: "📈",
    title: "Financial Projections",
    body: "12-month revenue projection model, break-even analysis, pricing strategy calculator, and funding gap analysis — so you know your numbers before you present them.",
  },
  {
    icon: "🏛️",
    title: "Legal Foundation Checklist",
    body: "Company formation, operating agreement templates, trademark basics, intellectual property guidance, and business structure recommendations by industry.",
  },
  {
    icon: "🤝",
    title: "Vendor & Funding Resource Center",
    body: "Access a curated list of vendors, lenders, SBA resources, CDFI lenders, grant databases, and business credit vendors aligned to your business type.",
  },
  {
    icon: "📋",
    title: "Advanced CRM & Pipeline Tools",
    body: "Full CRM access with lead scoring, pipeline management, follow-up automation, deal tracking, and customer lifecycle management.",
  },
  {
    icon: "⚡",
    title: "Automation Workflows",
    body: "Set up automated follow-ups, appointment reminders, lead nurture sequences, and outreach campaigns without writing a single line of code.",
  },
  {
    icon: "🎯",
    title: "Marketing & Sales Strategy",
    body: "Paid ad readiness checklist, organic content strategy, social media growth plan, sales funnel design, and conversion optimization guide.",
  },
  {
    icon: "🚀",
    title: "Priority Support",
    body: "Elite members get priority response on support requests, dedicated onboarding resources, and first access to new features before general release.",
  },
];

const ELITE_INCLUDES_PRO = [
  "Full RMIE Business Blueprint",
  "7 / 30 / 90-day action plan",
  "Business branding support",
  "Credit & funding readiness checklist",
  "Outreach strategy & sales scripts",
  "PDF & email export",
  "Progress tracking",
  "Advanced AI refinement",
];

export default function ElitePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const result = await createCheckoutSession({ tier: "elite" });
      if (result?.checkout_url) {
        window.location.href = result.checkout_url;
        return;
      }
      navigate("/waitlist?tier=elite");
    } catch {
      navigate("/waitlist?tier=elite");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -right-48 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute bottom-0 -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(40px)" }}
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2a2010] bg-[#15120a] px-4 py-1.5 text-xs font-bold text-[#d4af37] uppercase tracking-widest">
            ⚡ PEN2PRO Elite Plan
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Advanced Strategy.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #d4af37, #f7d675)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Elite Execution.
            </span>
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Elite goes beyond Pro. Get advanced strategist guidance, financial projections, legal foundation tools, a full vendor and funding resource center, advanced automation, and priority support.
          </p>
          <div className="mb-8">
            <span className="font-display text-5xl font-black text-white">$499</span>
            <span className="ml-2 text-xl text-slate-400">/month</span>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="rounded-xl bg-[#d4af37] px-8 py-3.5 text-sm font-black text-[#081226] shadow-[0_0_35px_rgba(212,175,55,0.4)] transition hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? "Starting Checkout..." : "Upgrade to Elite — $499/mo"}
            </button>
            <Link
              to="/waitlist?tier=elite"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Join Elite Waitlist
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-500">Includes everything in Pro. Cancel anytime.</p>
        </div>
      </section>

      {/* What Elite Adds */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#d4af37]">Elite-Only Features</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">Advanced Tools for Serious Builders</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Elite is for entrepreneurs who are ready to build a real company — not just a side hustle. Everything in Pro, plus the advanced tools to fund it, structure it, and scale it.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {ELITE_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#2a2010] bg-[#0e0d08] p-6">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white text-lg">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Also Includes Pro */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#2d9cff]">Also Included</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black">Everything in Pro. Plus Elite.</h2>
          <p className="mb-10 text-center text-slate-400">Elite is a complete upgrade. You don't lose anything — you gain everything.</p>
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-[#2d9cff]">Included from Pro</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {ELITE_INCLUDES_PRO.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-[#2d9cff]">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plan Comparison */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center font-display text-3xl font-black">Pro vs Elite</h2>
          <p className="mb-10 text-center text-slate-400">Choose the plan that matches where you are and where you're going.</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#2d9cff] bg-[#101a30] p-6">
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#2d9cff]">Pro — $249/mo</p>
              <p className="mb-4 text-sm text-slate-400">Full blueprint + execution tools</p>
              <ul className="space-y-2 text-sm text-slate-300">
                {["Full RMIE blueprint", "7/30/90-day plan", "Branding support", "PDF export", "Credit & funding checklist"].map((i) => (
                  <li key={i} className="flex items-center gap-2"><span className="text-[#2d9cff]">✓</span>{i}</li>
                ))}
              </ul>
              <Link
                to="/pro"
                className="mt-6 block rounded-xl border border-[#2d9cff] px-4 py-3 text-center text-sm font-bold text-[#2d9cff] hover:bg-[#2d9cff] hover:text-[#081226] transition-colors"
              >
                View Pro Details
              </Link>
            </div>
            <div className="rounded-2xl border border-[#d4af37] bg-[#15120a] p-6 shadow-[0_0_35px_rgba(212,175,55,0.2)]">
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#d4af37]">Elite — $499/mo</p>
              <p className="mb-4 text-sm text-slate-400">Everything in Pro + advanced strategy</p>
              <ul className="space-y-2 text-sm text-slate-300">
                {["All Pro features", "Financial projections", "Legal foundation checklist", "Vendor & funding resource center", "Automation workflows", "Priority support"].map((i) => (
                  <li key={i} className="flex items-center gap-2"><span className="text-[#d4af37]">✓</span>{i}</li>
                ))}
              </ul>
              <button
                onClick={handleCheckout}
                disabled={loading}
                className="mt-6 block w-full rounded-xl bg-[#d4af37] py-3 text-center text-sm font-black text-[#081226] transition hover:scale-[1.02] disabled:opacity-60"
              >
                {loading ? "..." : "Get Elite"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">Ready to Build at the Elite Level?</h2>
          <p className="mb-10 text-slate-400">
            Elite is for builders who want the full picture — business structure, funding readiness, advanced strategy, and execution support all in one place.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="rounded-xl bg-[#d4af37] px-8 py-3.5 text-sm font-black text-[#081226] shadow-[0_0_35px_rgba(212,175,55,0.4)] transition hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? "Starting Checkout..." : "Get Elite — $499/mo"}
            </button>
            <Link
              to="/founders"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Explore Founders Lifetime →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
