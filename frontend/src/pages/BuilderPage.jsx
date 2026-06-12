import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_MODULES = [
  { icon: "💡", title: "Business Idea Intake", body: "Describe your idea in plain English. The Builder analyzes it, clarifies your offer, and identifies your target customer automatically." },
  { icon: "🏷️", title: "Brand Name Generator", body: "Get 10–15 brand name options based on your industry, vibe, and target audience. Instantly check name availability." },
  { icon: "🏗️", title: "Business Model Generator", body: "Service, product, subscription, digital, consulting — define how you make money and how the offer is structured." },
  { icon: "🎯", title: "Offer Creation", body: "Build 2–3 service or product packages with names, descriptions, pricing, and deliverables. Ready to put on a website or pitch deck." },
  { icon: "✅", title: "Startup Checklist", body: "Every step to legally and operationally launch your business — checked off as you complete them." },
  { icon: "🏛️", title: "LLC / EIN / Banking Setup", body: "Walk through LLC formation, EIN registration, business bank account requirements, and registered agent options by state." },
  { icon: "🗺️", title: "Full Launch Roadmap", body: "A structured launch plan from idea to first client — with week-by-week milestones and action items." },
  { icon: "💾", title: "Save & Export", body: "Save your business blueprint to your account. Export as PDF. Share with partners, advisors, or lenders." },
];

const SAMPLE_STAGES = [
  { num: "01", title: "Tell Us Your Idea", desc: "What do you want to build? Who do you want to serve? What problem are you solving?" },
  { num: "02", title: "The Builder Analyzes", desc: "PEN2PRO AI identifies the business model, target customer, revenue streams, and initial offer structure." },
  { num: "03", title: "You Get a Blueprint", desc: "Brand name options, offer packages, startup checklist, launch roadmap, and LLC formation steps." },
  { num: "04", title: "Execute with Confidence", desc: "Follow the roadmap. Check off steps. Upgrade to Pro or Elite for full strategy, outreach, and funding readiness." },
];

export default function BuilderPage() {
  const navigate = useNavigate();
  const [idea, setIdea] = useState("");

  function handleStart(e) {
    e.preventDefault();
    if (idea.trim()) {
      navigate(`/starter?idea=${encodeURIComponent(idea.trim())}`);
    } else {
      navigate("/starter");
    }
  }

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[40%] -right-40 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(13,71,161,0.2) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <Navbar />

      {/* Hero with quick-start */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,136,229,0.1) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            🏗️ PEN2PRO Business Builder
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            Got an Idea?
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Let's Build It Right.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 leading-relaxed">
            The Business Builder takes your raw idea and turns it into a real business blueprint — brand names, offers, startup checklist, LLC formation steps, and a launch roadmap. Free to start.
          </p>

          {/* Quick start box */}
          <form onSubmit={handleStart} className="mx-auto max-w-xl rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-left">
            <label className="mb-2 block text-sm font-bold text-slate-300">
              Describe your business idea in one or two sentences:
            </label>
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Example: I want to start a mobile pressure washing business targeting commercial properties in Houston..."
              rows={3}
              className="mb-4 w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#1E88E5] focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="w-full rounded-xl py-3.5 text-sm font-black text-[#0A0F1E] btn-gold"
            >
              Build My Blueprint →
            </button>
            <p className="mt-3 text-center text-xs text-slate-500">
              Free to start. No credit card required. Takes about 3 minutes.
            </p>
          </form>
        </div>
      </section>

      {/* How it works */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">How It Works</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            From Idea to Blueprint in Minutes
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            No business knowledge required. No jargon. Just describe your idea and the Builder does the work.
          </p>
          <div className="relative grid gap-5 md:grid-cols-4">
            {SAMPLE_STAGES.map((s, i) => (
              <div key={s.num} className="relative rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
                <div className="mb-3 font-display text-4xl font-black text-[#1A2D50]">{s.num}</div>
                <h3 className="mb-2 font-bold text-white">{s.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                {i < SAMPLE_STAGES.length - 1 && (
                  <div className="absolute -right-3 top-6 hidden text-[#FF8A00] md:block text-xl">›</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Builder Modules</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything You Need to Launch
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            The Builder covers every step — from naming your business to setting up the legal foundation and landing your first customer.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {BUILDER_MODULES.map((m) => (
              <div key={m.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5 hover:border-[#1E88E5]/40 transition-colors">
                <div className="mb-3 text-3xl">{m.icon}</div>
                <h3 className="mb-1.5 font-bold text-white text-sm">{m.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample output preview */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Example Output</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">
            This Is What a Real Blueprint Looks Like
          </h2>
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl text-xl"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>
                🏗️
              </div>
              <div>
                <p className="font-black text-white">Mobile Pressure Washing Business</p>
                <p className="text-xs text-slate-400">Sample Blueprint Output</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { label: "Business Model", value: "Mobile service — residential and commercial exterior cleaning" },
                { label: "Target Customer", value: "Homeowners (30–60), property managers, HOAs, commercial landlords" },
                { label: "Core Offer", value: "3-tier service packages: Basic ($199), Pro ($349), Monthly Maintenance ($150/mo)" },
                { label: "Startup Cost Estimate", value: "$3,500–$8,500 (equipment, trailer, licensing, insurance)" },
                { label: "Revenue Model", value: "One-time jobs + monthly recurring maintenance contracts" },
                { label: "First 7 Days", value: "Register LLC, open bank account, list on Google, contact 20 local prospects" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-[#1A2235] bg-[#080C14] p-4">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#FF8A00]">{item.label}</p>
                  <p className="text-sm text-slate-300">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-[#1E88E5]/20 bg-[#1E88E5]/5 p-4 text-sm text-slate-400">
              <span className="font-bold text-[#1E88E5]">Pro & Elite users get: </span>
              Full outreach script, 30/60/90-day plan, credit readiness checklist, marketing strategy, financial projections, and unlimited AI refinement.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Your Blueprint Is 3 Minutes Away
          </h2>
          <p className="mb-8 text-slate-400">
            Start free. No credit card. Get a real business blueprint in minutes, not months.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Blueprint
            </Link>
            <Link to="/accelerator" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Accelerator Mode →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
