import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const PRO_FEATURES = [
  {
    title: "Full RMIE Business Blueprint",
    body: "Complete business roadmap with target customer analysis, revenue model, pricing strategy, and a 90-day execution plan tailored to your idea.",
  },
  {
    title: "P2P Command Center",
    body: "Centralized operations hub to manage your leads, tasks, outreach, and business activity from one dashboard.",
  },
  {
    title: "CRM Basics",
    body: "Track customers, follow-ups, and pipeline stages so no opportunity slips through the cracks.",
  },
  {
    title: "Website Builder Access",
    body: "Launch a professional business presence without needing a developer. Templates built for service businesses and coaches.",
  },
  {
    title: "P2P AI Voice (Basic)",
    body: "AI-powered call and voice tools to help you handle follow-ups, answer inquiries, and capture leads automatically.",
  },
  {
    title: "Marketing & Monetization Roadmap",
    body: "Step-by-step marketing plan with outreach campaigns, offer positioning, social media strategy, and conversion-focused messaging.",
  },
  {
    title: "Progress Tracking",
    body: "Monitor milestones, completed steps, and roadmap progress so you always know where you stand and what to do next.",
  },
  {
    title: "Email & PDF Export",
    body: "Download your full business blueprint as a PDF or send it to your inbox so you have it ready for investors, partners, or lenders.",
  },
];

const COMPARE_ROWS = [
  { feature: "RMIE Business Blueprint", free: "Basic preview (3 sections)", pro: "Full blueprint (all sections)" },
  { feature: "Roadmap Depth", free: "7-day starter plan only", pro: "7 / 30 / 90-day execution plan" },
  { feature: "Progress Tracking", free: "Not included", pro: "Full progress dashboard" },
  { feature: "Email & PDF Export", free: "Not included", pro: "Included" },
  { feature: "Marketing Roadmap", free: "Not included", pro: "Full outreach and marketing plan" },
  { feature: "CRM & Pipeline", free: "Not included", pro: "Basic CRM included" },
  { feature: "P2P Command Center", free: "Not included", pro: "Full access" },
  { feature: "AI Voice Tools", free: "Not included", pro: "Basic P2P AI Voice" },
];

export default function ProPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpgrade = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await createCheckoutSession({ tier: "pro" });
      if (result?.checkout_url) {
        window.location.href = result.checkout_url;
        return;
      }
      navigate("/waitlist");
    } catch {
      navigate("/waitlist");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080C14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-4 text-center">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(30,136,229,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-[#1E88E5]/50 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#5ab0ff]">
            Most Popular &bull; $249/mo
          </span>
          <h1 className="mt-6 font-display text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            <span
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #5ab0ff 60%, #1E88E5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PEN2PRO Pro
            </span>
          </h1>
          <p className="mt-4 text-xl font-semibold text-slate-200">
            Full Roadmap. Real Strategy. Execution Support.
          </p>
          <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-xl mx-auto">
            Pro gives you every tool you need to move from idea to income — with a complete RMIE
            blueprint, progress tracking, AI-powered tools, and execution resources all in one
            platform.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleUpgrade}
              disabled={loading}
              className="rounded-xl bg-[#1E88E5] px-8 py-4 text-base font-black tracking-wide text-white shadow-[0_0_24px_rgba(30,136,229,0.5)] transition hover:bg-[#1976D2] hover:shadow-[0_0_36px_rgba(30,136,229,0.7)] disabled:opacity-60"
            >
              {loading ? "Connecting..." : "Upgrade to Pro — $249/mo"}
            </button>
            <Link
              to="/waitlist"
              className="rounded-xl border border-[#1A2D50] bg-[#0F1520] px-8 py-4 text-base font-bold text-slate-300 transition hover:border-[#1E88E5]/50 hover:text-white"
            >
              Join Waitlist Instead
            </Link>
          </div>
          {error && (
            <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              {error}
            </p>
          )}
        </div>
      </section>

      {/* Feature Grid */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-black text-white mb-10">
            Everything Included in Pro
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRO_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5 transition hover:border-[#1E88E5]/40 hover:-translate-y-1"
              >
                <div className="mb-3 h-1.5 w-8 rounded-full bg-[#1E88E5]" />
                <h3 className="text-sm font-black text-white mb-2">{f.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Table */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-black text-white mb-10">
            Free vs Pro — See the Difference
          </h2>
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-[#1A2D50] bg-[#080C14]">
              <div className="px-5 py-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                Feature
              </div>
              <div className="px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-slate-500">
                Free
              </div>
              <div className="px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-[#5ab0ff]">
                Pro $249/mo
              </div>
            </div>
            {COMPARE_ROWS.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 border-b border-[#1A2D50]/60 ${
                  i % 2 === 0 ? "bg-[#0F1520]" : "bg-[#080C14]"
                }`}
              >
                <div className="px-5 py-3.5 text-xs font-semibold text-slate-300">
                  {row.feature}
                </div>
                <div className="px-5 py-3.5 text-center text-xs text-slate-500">{row.free}</div>
                <div className="px-5 py-3.5 text-center text-xs font-semibold text-[#5ab0ff]">
                  {row.pro}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-2xl rounded-2xl border border-[#1E88E5]/30 bg-gradient-to-br from-[#0a1628] to-[#0F1520] p-10 text-center shadow-[0_0_60px_rgba(30,136,229,0.15)]">
          <h2 className="text-2xl font-black text-white">
            Ready to Build Something Real?
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Upgrade to Pro and get your full RMIE business blueprint, execution tools, and the
            roadmap that takes you from idea to income.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleUpgrade}
              disabled={loading}
              className="rounded-xl bg-[#1E88E5] px-8 py-4 text-base font-black text-white shadow-[0_0_24px_rgba(30,136,229,0.4)] transition hover:bg-[#1976D2] disabled:opacity-60"
            >
              {loading ? "Connecting..." : "Upgrade to Pro — $249/mo"}
            </button>
            <Link
              to="/waitlist"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-bold text-slate-300 transition hover:text-white hover:border-[#1E88E5]/40"
            >
              Join Waitlist Instead
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-600">
            No contracts. Cancel anytime. Questions?{" "}
            <Link to="/waitlist" className="text-[#5ab0ff] hover:underline">
              Join the waitlist
            </Link>{" "}
            and we will reach out.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
