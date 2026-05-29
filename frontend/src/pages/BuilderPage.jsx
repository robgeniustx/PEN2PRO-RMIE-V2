import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CHECKLIST = [
  { label: "Choose your business name", detail: "Pick 2–3 options. Check availability on the Secretary of State website and social platforms." },
  { label: "Register your LLC", detail: "File with your state. Cost is typically $50–$500. Use a registered agent service if needed." },
  { label: "Apply for your EIN", detail: "Free from IRS.gov. Takes about 10 minutes online. Needed for taxes, banking, and payroll." },
  { label: "Open a business bank account", detail: "Never mix personal and business funds. A business account protects your LLC status." },
  { label: "Set up basic bookkeeping", detail: "Use Wave (free) or QuickBooks to track income and expenses from day one." },
  { label: "Create your offer packages", detail: "Minimum: Starter, Standard, and Premium tiers. Price each based on value, not just time." },
  { label: "Build a Google Business Profile", detail: "Free visibility tool. Upload photos, add hours, collect reviews. Critical for local service businesses." },
  { label: "Secure your domain and email", detail: "Get a professional domain. Use Google Workspace or Zoho for business email at your domain." },
];

export default function BuilderPage() {
  const [idea, setIdea] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  function handleStart(e) {
    e.preventDefault();
    if (idea.trim()) {
      navigate(`/starter?idea=${encodeURIComponent(idea.trim())}`);
    } else {
      navigate("/starter");
    }
  }

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-5">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #00BFA5 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-[#00BFA5]/40 bg-[#00BFA5]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00BFA5]">
            Business Builder
          </span>
          <h1 className="mb-5 text-4xl font-black leading-tight sm:text-5xl">
            Turn Your Idea Into<br />
            <span className="text-[#00BFA5]">A Real Business.</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400">
            Builder mode walks you through every step of turning your idea into a structured business —
            from brand name to LLC to your first paying customer. No fluff. Just the steps.
          </p>
        </div>
      </section>

      {/* Intake form */}
      <section className="py-8 px-5">
        <div className="mx-auto max-w-lg">
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0D1520] p-8">
            <h2 className="mb-2 text-center text-xl font-black text-white">What's Your Business Idea?</h2>
            <p className="mb-6 text-center text-sm text-slate-400">
              Enter your idea and we'll take you to the full RMIE roadmap builder.
            </p>
            <form onSubmit={handleStart} className="flex flex-col gap-4">
              <textarea
                className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#00BFA5] focus:outline-none resize-none"
                rows={3}
                placeholder="e.g. I want to start a mobile pressure washing business in my city..."
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
              />
              <button
                type="submit"
                className="w-full rounded-xl py-4 text-base font-black text-[#0A0F1E] transition"
                style={{ background: "linear-gradient(135deg, #00BFA5 0%, #26C6DA 100%)" }}
              >
                Build My Roadmap →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Startup Checklist */}
      <section className="py-16 px-5">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-3 text-center text-2xl font-black text-white">Business Formation Checklist</h2>
          <p className="mb-8 text-center text-slate-400">
            Every real business needs this foundation. PEN2PRO walks you through each step.
          </p>
          <div className="space-y-3">
            {CHECKLIST.map((item, i) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-xl border border-[#1A2D50] bg-[#0D1520] p-4 transition hover:border-[#00BFA5]/40"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#00BFA5]/10 text-sm font-black text-[#00BFA5]">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-white">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Builder generates */}
      <section className="py-12 px-5">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-black text-white">Your Builder Roadmap Includes</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["📋", "Business Idea Summary"],
              ["🎯", "Target Customer Profile"],
              ["💰", "Revenue Model & Pricing"],
              ["🚀", "7-Day Launch Action Plan"],
              ["📣", "Marketing & Outreach Strategy"],
              ["🏛️", "LLC / EIN / Banking Checklist"],
              ["💳", "Credit & Funding Readiness"],
              ["🔧", "Recommended Tools"],
              ["⬆️", "Upgrade Recommendation"],
            ].map(([icon, label]) => (
              <div key={label} className="flex items-center gap-3 rounded-xl border border-[#1A2235] bg-[#0A0F1E] p-4">
                <span className="text-2xl">{icon}</span>
                <span className="text-sm font-semibold text-slate-300">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-4 text-2xl font-black text-white">Ready to Build Your Business?</h2>
          <p className="mb-8 text-slate-400">
            Start your free roadmap now. Upgrade to Pro or Elite when you are ready for more.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/starter"
              className="rounded-xl py-4 px-8 text-base font-black text-[#0A0F1E] transition"
              style={{ background: "linear-gradient(135deg, #00BFA5 0%, #26C6DA 100%)" }}
            >
              Start Free Roadmap
            </Link>
            <Link to="/pro" className="rounded-xl border border-[#1E88E5]/40 px-8 py-4 text-base font-semibold text-[#1E88E5] transition hover:border-[#1E88E5] hover:bg-[#1E88E5]/10">
              Explore Pro →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
