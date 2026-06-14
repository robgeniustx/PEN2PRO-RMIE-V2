import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BUILDER_CARDS = [
  {
    title: "Business Idea Intake",
    body: "Describe your idea in plain language. The RMIE engine analyzes it, identifies the opportunity, and structures it into a business concept with a clear offer.",
    accent: "#1E88E5",
  },
  {
    title: "Brand Name Ideas",
    body: "Get AI-generated brand name options based on your business type, target customer, and offer — with availability guidance and positioning notes.",
    accent: "#D4A017",
  },
  {
    title: "Business Model Generation",
    body: "Understand exactly how your business makes money — service model, product model, subscription, referral, or hybrid — with a revenue structure built around your idea.",
    accent: "#00C9B1",
  },
  {
    title: "Offer Creation",
    body: "Build 2–3 tiered offer packages with pricing, deliverables, and positioning — so you have something real to put in front of customers from day one.",
    accent: "#FF8A00",
  },
  {
    title: "Startup Checklist",
    body: "Step-by-step legal and operational checklist: LLC registration, EIN application, business bank account, business address, and business phone setup — sequenced correctly.",
    accent: "#1E88E5",
  },
  {
    title: "Launch Roadmap",
    body: "A structured 7-day action plan that takes you from idea confirmation to first outreach — with specific daily tasks, not generic advice.",
    accent: "#D4A017",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Describe Your Business Idea",
    body: "Tell the RMIE engine what you want to build — in your own words. No business degree required. Just your idea.",
  },
  {
    num: "02",
    title: "AI Generates Your Brand Options",
    body: "Receive 3–5 brand name options with positioning notes, tone guidance, and availability suggestions for each.",
  },
  {
    num: "03",
    title: "Business Model + Offer Structure",
    body: "The engine builds your revenue model and creates 2–3 offer tiers with pricing you can actually use.",
  },
  {
    num: "04",
    title: "LLC / EIN / Business Bank Checklist",
    body: "A sequenced legal and operational checklist walks you through the exact steps to make your business real — in the right order.",
  },
  {
    num: "05",
    title: "First 7-Day Action Plan",
    body: "Daily tasks, outreach targets, and first-week priorities — so you leave Builder with a real plan, not just an idea.",
  },
  {
    num: "06",
    title: "Upgrade for Full 90-Day Roadmap",
    body: "Unlock the complete 30/60/90-day execution plan, marketing strategy, and funding readiness tools with Pro or Elite.",
  },
];

export default function BuilderPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080C14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-4 text-center">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(30,136,229,0.16) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-[#1E88E5]/50 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#5ab0ff]">
            Business Builder Mode &bull; Free to Start
          </span>
          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            <span
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #5ab0ff 60%, #1E88E5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Business Builder
            </span>
          </h1>
          <p className="mt-4 text-xl font-semibold text-slate-200">
            Build Your Company From Scratch
          </p>
          <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-xl mx-auto">
            From idea intake to LLC, EIN, business bank, brand name, and first offer — sequenced
            in the right order. Builder gives you a real business foundation, not just a plan.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/starter"
              className="rounded-xl bg-[#1E88E5] px-8 py-4 text-base font-black tracking-wide text-white shadow-[0_0_24px_rgba(30,136,229,0.5)] transition hover:bg-[#1976D2] hover:shadow-[0_0_36px_rgba(30,136,229,0.7)]"
            >
              Start Building — It is Free
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-[#1A2D50] bg-[#0F1520] px-8 py-4 text-base font-bold text-slate-300 transition hover:border-[#1E88E5]/50 hover:text-white"
            >
              View Full Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* What Builder Does */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-black text-white mb-3">
            What Builder Does for You
          </h2>
          <p className="text-center text-sm text-slate-400 mb-10">
            Six tools. One sequenced flow. A real business at the end of it.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BUILDER_CARDS.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 transition hover:-translate-y-1"
                style={{ "--hover-border": `${c.accent}40` }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = `${c.accent}40`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "")
                }
              >
                <div
                  className="mb-3 h-1.5 w-8 rounded-full"
                  style={{ background: c.accent }}
                />
                <h3 className="text-sm font-black text-white mb-2">{c.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-step flow */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-black text-white mb-3">
            How Builder Works
          </h2>
          <p className="text-center text-sm text-slate-400 mb-12">
            Six steps from idea to real business — in the correct order.
          </p>
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-7 top-8 bottom-8 w-px bg-gradient-to-b from-[#1E88E5]/60 via-[#D4A017]/40 to-[#1E88E5]/10 hidden sm:block" />
            <div className="flex flex-col gap-6">
              {STEPS.map((step, i) => (
                <div key={step.num} className="relative flex gap-6 items-start">
                  {/* Step number bubble */}
                  <div
                    className="relative z-10 flex-shrink-0 h-14 w-14 rounded-full border border-[#1A2D50] bg-[#0F1520] flex items-center justify-center"
                    style={{
                      boxShadow:
                        i === 0
                          ? "0 0 20px rgba(30,136,229,0.3)"
                          : i === STEPS.length - 1
                          ? "0 0 20px rgba(212,160,23,0.3)"
                          : "none",
                    }}
                  >
                    <span
                      className="text-sm font-black"
                      style={{
                        color: i === STEPS.length - 1 ? "#D4A017" : "#5ab0ff",
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
                    <h3 className="text-sm font-black text-white mb-1">{step.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.body}</p>
                    {i === STEPS.length - 1 && (
                      <div className="mt-3 flex gap-3">
                        <Link
                          to="/pro"
                          className="rounded-lg bg-[#1E88E5]/15 border border-[#1E88E5]/30 px-3 py-1.5 text-xs font-bold text-[#5ab0ff] hover:bg-[#1E88E5]/25 transition"
                        >
                          Upgrade to Pro
                        </Link>
                        <Link
                          to="/elite"
                          className="rounded-lg bg-[#00C9B1]/10 border border-[#00C9B1]/30 px-3 py-1.5 text-xs font-bold text-[#00C9B1] hover:bg-[#00C9B1]/20 transition"
                        >
                          Upgrade to Elite
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Builder is for */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-black text-white mb-10">
            Builder Is Made for You If...
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "You have an idea but do not know where to start",
              "You want a business name but are not sure what fits",
              "You need to know the right legal steps in the right order",
              "You want a real offer structure before you talk to a single customer",
              "You have been thinking about starting a business for months",
              "You want a 7-day action plan you can actually execute",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4"
              >
                <div className="mt-0.5 h-5 w-5 rounded-full bg-[#1E88E5]/20 border border-[#1E88E5]/40 flex-shrink-0 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-[#1E88E5]" />
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-2xl rounded-2xl border border-[#1E88E5]/30 bg-gradient-to-br from-[#0a1628] to-[#0F1520] p-10 text-center shadow-[0_0_60px_rgba(30,136,229,0.12)]">
          <h2 className="text-2xl font-black text-white">
            Your Business Starts Here.
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Builder is free to start. Get your brand name, business model, offer structure, and
            first 7-day action plan — then upgrade when you are ready to go deeper.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/starter"
              className="rounded-xl bg-[#1E88E5] px-8 py-4 text-base font-black text-white shadow-[0_0_24px_rgba(30,136,229,0.4)] transition hover:bg-[#1976D2]"
            >
              Start Building — It is Free
            </Link>
            <Link
              to="/pro"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-bold text-slate-300 transition hover:text-white hover:border-[#1E88E5]/40"
            >
              Upgrade to Pro
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-600">
            Want to see everything Builder unlocks?{" "}
            <Link to="/pricing" className="text-[#5ab0ff] hover:underline">
              View full pricing
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
