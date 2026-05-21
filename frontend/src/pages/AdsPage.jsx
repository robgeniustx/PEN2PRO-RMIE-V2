import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const AD_TEMPLATES = [
  {
    platform: "Facebook",
    type: "Lead Generation",
    headline: "Turn Your Idea Into a Business in 7 Days",
    copy: "PEN2PRO gives you a step-by-step roadmap to launch, fund, and grow your business — even if you're starting from zero. Get your free plan today.",
    cta: "Get Free Roadmap",
    budget: "$5–$15/day",
    target: "25–55, entrepreneurs, small business owners",
  },
  {
    platform: "Instagram",
    type: "Story Ad",
    headline: "Your Business Roadmap in 30 Seconds",
    copy: "Swipe up to build your free AI-powered business roadmap. No credit card. No guesswork.",
    cta: "Build My Roadmap",
    budget: "$5/day",
    target: "Followers of business/entrepreneur pages",
  },
  {
    platform: "Google",
    type: "Search Ad",
    headline: "Free Business Roadmap Generator | PEN2PRO",
    copy: "Get your personalized 90-day business launch plan. Funding readiness, credit strategy, and sales scripts included. Free to start.",
    cta: "Start Free →",
    budget: "$10–$20/day",
    target: "Keywords: business plan, start a business, business roadmap",
  },
  {
    platform: "YouTube",
    type: "Pre-Roll (15s)",
    headline: "Skip this ad... or build a business",
    copy: "If you've been thinking about starting a business, PEN2PRO gives you the exact roadmap to do it. Free. No fluff. Real steps.",
    cta: "Visit PEN2PRO.com",
    budget: "$10/day",
    target: "Viewers of business/finance channels",
  },
];

export default function AdsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-3 py-1 text-xs font-semibold text-[#FF8A00] mb-3">
            AD ENGINE
          </div>
          <h1 className="font-display text-3xl font-black text-white">Ad Campaigns</h1>
          <p className="mt-2 text-slate-400 text-sm max-w-xl">
            Ready-to-run ad copy for Facebook, Instagram, Google, and YouTube. Copy, customize, and launch.
          </p>
        </div>

        {/* Notice */}
        <div className="mb-8 rounded-xl border border-[#D4A017]/30 bg-[#D4A017]/5 px-4 py-4 text-sm text-[#D4A017]">
          <strong>Pro Tip:</strong> Do NOT run paid ads until you have at least 3 paying clients and can describe your best customer precisely. Validate demand first, then scale.
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {AD_TEMPLATES.map((ad, i) => (
            <div key={i} className="rounded-2xl border border-[#1A2D50] p-6" style={{ background: "#0F1520" }}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-2 py-0.5 text-xs font-bold text-[#FF8A00]">
                    {ad.platform}
                  </span>
                  <span className="ml-2 text-xs text-slate-500">{ad.type}</span>
                </div>
                <span className="text-xs font-semibold text-[#00C9B1]">{ad.budget}</span>
              </div>
              <h3 className="font-display text-base font-bold text-white mb-2">{ad.headline}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">{ad.copy}</p>
              <div className="flex items-center justify-between">
                <span className="rounded-lg border border-[#1A2D50] px-3 py-1.5 text-xs font-bold text-[#D4A017]">
                  CTA: {ad.cta}
                </span>
                <button className="text-xs text-slate-500 hover:text-white transition-colors">
                  Copy Ad →
                </button>
              </div>
              <p className="mt-3 text-xs text-slate-600">Target: {ad.target}</p>
            </div>
          ))}
        </div>

        {/* Upgrade CTA */}
        <div className="mt-12 rounded-2xl border border-[#D4A017]/30 bg-[#D4A017]/5 p-8 text-center">
          <h2 className="font-display text-xl font-bold text-white mb-2">Want custom ad campaigns built for your business?</h2>
          <p className="text-slate-400 text-sm mb-6">Elite members get done-with-you ad strategy, custom copy, and campaign setup.</p>
          <Link to="/waitlist?tier=elite" className="btn-gold px-8 py-3 text-sm font-bold">
            Upgrade to Elite
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
