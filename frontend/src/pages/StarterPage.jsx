import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const CATEGORIES = [
  "Cleaning / Pressure Washing",
  "Lawn Care / Landscaping",
  "Home Repair / Handyman",
  "Painting (Interior/Exterior)",
  "Trucking / Transportation",
  "Food / Catering / Meal Prep",
  "Personal Training / Fitness",
  "Hair / Barbering / Beauty",
  "Child Care / Tutoring",
  "Bookkeeping / Tax Prep",
  "Real Estate / Property Mgmt",
  "Staffing / Temp Agency",
  "E-commerce / Reselling",
  "Digital Marketing / Social Media",
  "Graphic Design / Branding",
  "Photography / Videography",
  "Consulting / Coaching",
  "Event Planning",
  "Security / Protective Services",
  "IT Support / Tech Services",
  "Construction / Contracting",
  "Plumbing / HVAC / Electrical",
  "Healthcare / Medical Staffing",
  "Other",
];

const BUDGETS = [
  "Under $500",
  "$500–$1,000",
  "$1,000–$5,000",
  "$5,000–$10,000",
  "$10,000+",
  "No budget yet",
];

const TIMELINES = [
  "ASAP — I need income now",
  "1–3 months",
  "3–6 months",
  "6–12 months",
  "Just exploring",
];

const CHALLENGES = [
  "I don't know where to start",
  "I have no startup capital",
  "I don't know how to get clients",
  "I have bad credit",
  "I've tried before and failed",
  "I'm working full-time — limited time",
  "I need help with legal/entity setup",
  "Marketing and online presence",
  "Other",
];

const LOADING_MSGS = [
  "Building your roadmap...",
  "Analyzing your market...",
  "Structuring your 90-day plan...",
  "Writing your sales scripts...",
  "Mapping your funding path...",
  "Almost ready...",
];

const SAMPLE_ROADMAP = {
  business_idea: "Pressure Washing Business",
  category: "Cleaning / Pressure Washing",
  snapshot: {
    names: ["AquaBlast Pro", "ClearPath Wash Co.", "HydroShield Services"],
    value_proposition: "On-demand exterior cleaning for residential and commercial properties with same-week service and guaranteed results.",
    target_customer: "Homeowners in suburbs with driveways, decks, and siding — households with $60K+ income, 30–55 years old.",
    problem: "Property owners can't maintain curb appeal without time-consuming equipment rental or expensive contractor quotes.",
    revenue_model: "Per-job flat-rate pricing — driveways $150, houses $300–$500, commercial contracts $800–$2,000/month.",
    startup_low: "$1,200",
    startup_realistic: "$3,500",
    startup_stretch: "$8,000",
  },
  offer_structure: {
    core: "Exterior pressure washing — driveways, decks, siding, fences, parking lots",
    tiers: [
      { name: "Starter Clean", price: "$149", includes: "Driveway only, up to 800 sq ft" },
      { name: "Full Home", price: "$349", includes: "Driveway + siding + walkways" },
      { name: "Premium Package", price: "$549", includes: "Full home + deck + fence + gutters" },
    ],
    entry_price: "$149",
    entry_why: "Low barrier gets you first 5 clients fast. Upsell from there once they see results.",
  },
  seven_days: [
    "Day 1: Register your LLC at your state's Secretary of State website. Cost: $50–$300. Download Wave (free invoicing app).",
    "Day 2: Get your EIN free at IRS.gov. Takes 5 minutes. Print and save the confirmation.",
    "Day 3: Open a Chase Business Complete Checking account. Bring EIN letter, LLC docs, and personal ID.",
    "Day 4: Create your Google Business Profile at business.google.com. Add 5 photos — even phone photos work.",
    "Day 5: Buy your domain on Namecheap ($12). Set up a Google Workspace business email ($6/mo).",
    "Day 6: Rent or buy a 3,500 PSI pressure washer. Home Depot rental: $65/day. Purchase: $350–$800 on Amazon.",
    "Day 7: Message 20 neighbors/contacts on Facebook. Offer $99 introductory rate for first job only.",
  ],
  sales_script: {
    cold_dm: "Hey [Name] — I just launched a pressure washing service in [City]. First 5 jobs are $99 (normally $149). Interested in getting your driveway cleaned this week?",
    follow_up: "Hey — just following up. Still have 2 introductory spots open this week. Want to grab one?",
    phone_opener: "Hey [Name], this is [Your Name]. I run a pressure washing company in [area] — I'm reaching out because I noticed your property could use a good wash. I have openings this week. Can I give you a quick quote?",
    objection: "I get it. Take 24 hours. But I only have 2 intro spots left at $99 — after that it goes to $149. What's holding you back?",
    close: "Want me to pencil you in for [day] at [time]? I just need your address to confirm.",
  },
  upgrade_note: "This roadmap gives you the foundation. Pro members get full outreach automation, financial projections, and credit/funding matching. Elite members get done-with-you strategy sessions and vendor introductions. If you are serious about hitting $5K/month within 90 days, upgrade to Pro or Elite.",
};

export default function StarterPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingMsgIdx, setLoadingMsgIdx] = useState(0);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    business_idea: "",
    category: "",
    target_customer: "",
    budget: "",
    current_revenue: "",
    timeline: "",
    challenge: "",
    name: "",
    email: "",
  });

  function update(field, val) {
    setForm(f => ({ ...f, [field]: val }));
  }

  function nextStep() {
    if (step === 1) {
      if (!form.business_idea.trim()) { setError("Please describe your business idea."); return; }
      if (!form.category) { setError("Please select a business category."); return; }
    }
    if (step === 2) {
      if (!form.budget) { setError("Please select a budget range."); return; }
      if (!form.timeline) { setError("Please select a timeline."); return; }
    }
    setError("");
    setStep(s => s + 1);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim()) { setError("Please enter your name."); return; }
    if (!form.email.trim()) { setError("Please enter your email."); return; }
    setError("");
    setLoading(true);

    // Cycle loading messages
    let idx = 0;
    const msgInterval = setInterval(() => {
      idx = (idx + 1) % LOADING_MSGS.length;
      setLoadingMsgIdx(idx);
    }, 1800);

    try {
      const res = await fetch(`${API}/api/blueprints/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      clearInterval(msgInterval);

      if (!res.ok) throw new Error(data.detail || "Generation failed");

      navigate("/results", { state: { roadmap: data, formData: form } });
    } catch {
      clearInterval(msgInterval);
      // Fallback: show sample roadmap so it never breaks
      navigate("/results", { state: { roadmap: SAMPLE_ROADMAP, formData: form, isSample: true } });
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: "#080C14" }}>
        <div className="text-center">
          <div className="mb-8 flex h-20 w-20 mx-auto items-center justify-center rounded-2xl gradient-gold text-3xl font-black text-[#080C14]">
            P2P
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-5 w-5 border-2 border-[#D4A017] border-t-transparent rounded-full animate-spin" />
            <p className="font-display text-xl font-bold text-white">{LOADING_MSGS[loadingMsgIdx]}</p>
          </div>
          <div className="flex gap-1.5 justify-center mt-6">
            {LOADING_MSGS.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${i === loadingMsgIdx ? "w-8 bg-[#D4A017]" : "w-2 bg-[#1A2235]"}`}
              />
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-500">This takes about 20–30 seconds...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-2xl px-5 py-16">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-up">
          <h1 className="font-display text-3xl font-black text-white md:text-4xl">
            Build Your Free <span className="gradient-text">Business Roadmap</span>
          </h1>
          <p className="mt-3 text-slate-400">
            Answer 3 quick steps. Get a personalized 90-day plan to launch your business.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            {[1, 2, 3].map(s => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-all ${
                    s < step
                      ? "gradient-gold text-[#080C14]"
                      : s === step
                      ? "border-2 border-[#D4A017] text-[#D4A017]"
                      : "border border-[#1A2235] text-slate-600"
                  }`}
                >
                  {s < step ? "✓" : s}
                </div>
                <span className={`text-xs font-medium ${s === step ? "text-white" : "text-slate-600"}`}>
                  {s === 1 ? "Your Idea" : s === 2 ? "Your Situation" : "Your Info"}
                </span>
              </div>
            ))}
          </div>
          <div className="h-1.5 w-full rounded-full bg-[#1A2235]">
            <div
              className="h-1.5 rounded-full gradient-gold transition-all duration-500"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            />
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Card */}
        <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-xl font-bold text-white mb-1">Tell us about your idea</h2>
                <p className="text-sm text-slate-500">Be specific — the more detail, the better your roadmap.</p>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-300">
                  What business do you want to start? <span style={{ color: "#D4A017" }}>*</span>
                </label>
                <textarea
                  value={form.business_idea}
                  onChange={e => update("business_idea", e.target.value)}
                  placeholder="e.g. I want to start a pressure washing business targeting homeowners in my city..."
                  rows={4}
                  className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none resize-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-300">
                  Business category <span style={{ color: "#D4A017" }}>*</span>
                </label>
                <select
                  value={form.category}
                  onChange={e => update("category", e.target.value)}
                  className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white focus:border-[#D4A017] focus:outline-none"
                >
                  <option value="">Select a category...</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-300">
                  Who is your target customer?
                </label>
                <input
                  type="text"
                  value={form.target_customer}
                  onChange={e => update("target_customer", e.target.value)}
                  placeholder="e.g. Homeowners in suburban neighborhoods, 30–55 years old"
                  className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                />
              </div>
              <button onClick={nextStep} className="btn-gold w-full py-3 text-sm font-bold">
                Continue — Step 2 of 3
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-xl font-bold text-white mb-1">Your current situation</h2>
                <p className="text-sm text-slate-500">We use this to customize your funding path and timeline.</p>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-300">
                  Startup budget range <span style={{ color: "#D4A017" }}>*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {BUDGETS.map(b => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => update("budget", b)}
                      className={`rounded-xl border px-3 py-2.5 text-sm text-left transition-all ${
                        form.budget === b
                          ? "border-[#D4A017] bg-[#D4A017]/10 text-[#D4A017]"
                          : "border-[#1A2235] text-slate-400 hover:border-[#D4A017]/40"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-300">Current monthly revenue</label>
                <input
                  type="text"
                  value={form.current_revenue}
                  onChange={e => update("current_revenue", e.target.value)}
                  placeholder="$0 — I haven't started yet"
                  className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-300">
                  Launch timeline <span style={{ color: "#D4A017" }}>*</span>
                </label>
                <div className="space-y-2">
                  {TIMELINES.map(t => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => update("timeline", t)}
                      className={`w-full rounded-xl border px-4 py-2.5 text-sm text-left transition-all ${
                        form.timeline === t
                          ? "border-[#D4A017] bg-[#D4A017]/10 text-[#D4A017]"
                          : "border-[#1A2235] text-slate-400 hover:border-[#D4A017]/40"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-300">Biggest challenge right now</label>
                <select
                  value={form.challenge}
                  onChange={e => update("challenge", e.target.value)}
                  className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white focus:border-[#D4A017] focus:outline-none"
                >
                  <option value="">Select your biggest challenge...</option>
                  {CHALLENGES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => { setError(""); setStep(1); }}
                  className="btn-outline flex-1 py-3 text-sm font-bold"
                >
                  Back
                </button>
                <button onClick={nextStep} className="btn-gold flex-1 py-3 text-sm font-bold">
                  Continue — Step 3 of 3
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="font-display text-xl font-bold text-white mb-1">Almost there — where should we send your roadmap?</h2>
                <p className="text-sm text-slate-500">Your roadmap is generated instantly and free. No credit card required.</p>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-300">
                  Your name <span style={{ color: "#D4A017" }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => update("name", e.target.value)}
                  placeholder="Robert Green"
                  className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-300">
                  Email address <span style={{ color: "#D4A017" }}>*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => update("email", e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                />
              </div>

              <div className="rounded-xl border border-[#D4A017]/20 bg-[#D4A017]/5 p-4">
                <p className="text-sm font-semibold text-[#D4A017] mb-2">Your roadmap will include:</p>
                <ul className="space-y-1 text-xs text-slate-400">
                  <li>✓ Business snapshot &amp; name ideas</li>
                  <li>✓ 3-tier pricing structure</li>
                  <li>✓ Day-by-day 7-day launch plan</li>
                  <li>✓ 30 &amp; 90-day milestones</li>
                  <li>✓ Copy-paste sales scripts</li>
                  <li>✓ Entity &amp; legal foundation steps</li>
                  <li>✓ Credit &amp; funding roadmap</li>
                </ul>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => { setError(""); setStep(2); }}
                  className="btn-outline flex-1 py-3 text-sm font-bold"
                >
                  Back
                </button>
                <button type="submit" className="btn-gold flex-1 py-3 text-sm font-bold">
                  Build My Roadmap — Free
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
