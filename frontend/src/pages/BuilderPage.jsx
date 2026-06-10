import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_STEPS = [
  { step: "01", title: "Define Your Idea", desc: "Name your business concept and the problem it solves. RMIE turns it into a structured offer." },
  { step: "02", title: "Build Your Offer", desc: "3-tier offer structure, pricing strategy, and service packaging built for your niche." },
  { step: "03", title: "Name Your Brand", desc: "Business name ideas, tagline options, and brand positioning tailored to your audience." },
  { step: "04", title: "Generate Your Business Model", desc: "Revenue model, target customer profile, delivery method, and monetization strategy." },
  { step: "05", title: "Foundation Checklist", desc: "LLC, EIN, business bank, domain, Google Business Profile — everything you need to be legitimate." },
  { step: "06", title: "Launch Roadmap", desc: "7-day quick launch plan and 30-day full launch plan — specific daily steps, not vague advice." },
];

const FOUNDATION_CHECKLIST = [
  { category: "Business Entity", items: ["Choose business structure (LLC recommended)", "File LLC with your state", "Obtain EIN from IRS.gov — free", "Create Operating Agreement"] },
  { category: "Business Banking", items: ["Open dedicated business checking account", "Get a business debit card", "Set up bookkeeping (Wave or QuickBooks)", "Separate all personal and business finances"] },
  { category: "Business Credit", items: ["Register with D&B — get DUNS number", "Open net-30 vendor accounts", "Apply for business credit card (secured if needed)", "Begin building credit history immediately"] },
  { category: "Brand & Online Presence", items: ["Register your domain name", "Create Google Business Profile", "Set up social media profiles (brand-consistent)", "Build a simple landing page or website"] },
];

const INDUSTRIES = [
  "Pressure Washing", "Landscaping", "Cleaning Services", "Food / Catering", "Personal Training",
  "Hair / Beauty", "Trucking / Logistics", "Consulting", "Real Estate", "Childcare",
  "Auto Detailing", "Photography", "Painting", "HVAC / Trades", "Digital Marketing",
  "Coaching / Mentoring", "E-commerce", "Event Planning", "Construction", "Other",
];

export default function BuilderPage() {
  const navigate = useNavigate();
  const [idea, setIdea] = useState("");
  const [industry, setIndustry] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleStart = (e) => {
    e.preventDefault();
    if (!idea.trim()) return;
    setSubmitting(true);
    setTimeout(() => {
      navigate(`/starter?idea=${encodeURIComponent(idea.trim())}&industry=${encodeURIComponent(industry)}`);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,136,229,0.13) 0%, transparent 70%)" }}
        />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">
            🏗️ PEN2PRO Builder
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Turn Your Idea Into a
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Real Business.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400">
            Builder walks you through naming your brand, structuring your offer, choosing your model, and getting your foundation in place — step by step, idea to income.
          </p>
        </div>
      </section>

      {/* INTAKE FORM */}
      <section className="border-t border-[#1A2D50] px-5 py-16">
        <div className="mx-auto max-w-xl">
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8">
            <div className="mb-6 text-center">
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Start Your Build</div>
              <h2 className="font-display text-2xl font-black">What's Your Business Idea?</h2>
              <p className="mt-2 text-sm text-slate-400">Describe it in a sentence. RMIE builds the rest.</p>
            </div>
            <form onSubmit={handleStart} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-300">
                  Business Idea <span className="text-[#FF8A00]">*</span>
                </label>
                <textarea
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="e.g. A pressure washing business targeting residential homeowners in my city..."
                  rows={3}
                  required
                  className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#1E88E5] focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-300">Industry / Niche</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-4 py-3 text-sm text-white focus:border-[#1E88E5] focus:outline-none"
                >
                  <option value="">Select your industry...</option>
                  {INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                disabled={submitting || !idea.trim()}
                className="w-full rounded-xl py-4 text-base font-black text-[#0A0F1E] btn-gold disabled:opacity-50"
              >
                {submitting ? "Building Your Roadmap..." : "Generate My Business Blueprint →"}
              </button>
            </form>
            <p className="mt-4 text-center text-xs text-slate-500">
              Free blueprint. No credit card required. Upgrade for deeper strategy.
            </p>
          </div>
        </div>
      </section>

      {/* HOW BUILDER WORKS */}
      <section className="border-t border-[#1A2D50] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">How It Works</div>
          <h2 className="mb-14 text-center font-display text-3xl font-black md:text-4xl">
            6 Steps From Idea to Launch
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BUILDER_STEPS.map((s) => (
              <div key={s.step} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 font-display text-4xl font-black text-[#1E88E5]/30">{s.step}</div>
                <h3 className="mb-2 font-bold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDATION CHECKLIST */}
      <section className="border-t border-[#1A2D50] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Foundation Checklist</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Build It Right the First Time
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            Most people skip the foundation and wonder why funding gets denied and revenue doesn't come. These four areas must be in place before you scale.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {FOUNDATION_CHECKLIST.map((section) => (
              <div key={section.category} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h3 className="mb-4 font-bold text-[#FF8A00]">{section.category}</h3>
                <ul className="space-y-2.5">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="mt-0.5 shrink-0 rounded border border-[#1A2D50] text-xs text-slate-600">☐</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">
            Pro and Elite users get interactive checklists with progress tracking and resource links.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1A2D50] px-5 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">Ready to Build?</h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-400">
            Start with a free blueprint and see your business roadmap in minutes. Upgrade to Pro or Elite when you're ready to go deeper.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              Build My Free Blueprint
            </Link>
            <Link to="/accelerator" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 transition-colors hover:text-white">
              Explore Accelerator →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
