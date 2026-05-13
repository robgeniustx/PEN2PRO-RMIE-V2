import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { INDUSTRIES } from "../constants/industries";

const DOMAIN_AFFILIATE_URL = import.meta.env.VITE_DOMAIN_AFFILIATE_URL || "https://namecheap.com";

function generateDomainSuggestions(name, industry) {
  if (!name) return [];
  const clean = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  const ind = industry ? industry.replace(/-/g, "") : "";
  return [
    `${clean}.com`,
    `${clean}pro.com`,
    `${clean}${ind || "biz"}.com`,
    `get${clean}.com`,
    `${clean}services.com`,
    `my${clean}.com`,
  ].slice(0, 5);
}

export default function DomainSearchPage() {
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSuggestions(generateDomainSuggestions(name, industry));
  };

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,160,23,0.1) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#D4A017] uppercase tracking-widest">
            🔍 PEN2PRO Domain Finder
          </div>
          <h1 className="mb-4 font-display text-4xl font-black leading-tight md:text-6xl">
            Find Your Business Domain
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-slate-400">
            Find and secure a business domain that matches your brand, niche, and growth plan.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mx-auto max-w-xl">
            <div className="mb-4 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-left">
              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Your Business or Brand Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. XLR8 Services, Green Built, TrueShine..."
                className="mb-4 w-full rounded-xl border border-[#1A2D50] bg-[#0A0F1E] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none focus:border-[#1E88E5] transition-colors"
              />
              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Your Industry (optional)
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="mb-5 w-full rounded-xl border border-[#1A2D50] bg-[#0A0F1E] px-4 py-3 text-sm text-white outline-none focus:border-[#1E88E5] transition-colors"
              >
                <option value="">Select your industry…</option>
                {INDUSTRIES.map((ind) => (
                  <option key={ind.id} value={ind.id}>{ind.icon} {ind.label}</option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full rounded-xl py-3.5 text-sm font-black text-[#0A0F1E] btn-gold"
              >
                🔍 Search & Secure Your Domain
              </button>
            </div>
          </form>

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div className="mx-auto max-w-xl rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-left">
              <p className="mb-4 text-sm font-bold text-slate-300">Domain Suggestions</p>
              <div className="space-y-2">
                {suggestions.map((d) => (
                  <div key={d} className="flex items-center justify-between rounded-xl border border-[#1A2235] bg-[#0A0F1E] px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="text-base">🌐</span>
                      <span className="font-mono text-sm font-bold text-white">{d}</span>
                    </div>
                    <a
                      href={DOMAIN_AFFILIATE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg px-3 py-1.5 text-xs font-black text-[#0A0F1E] btn-gold"
                    >
                      Secure It →
                    </a>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-600">
                * Domain availability is checked when you click "Secure It." Results shown are suggestions only.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── TIPS ── */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-2xl font-black">Tips for Picking the Right Domain</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: "✅", tip: "Keep it short — under 15 characters is ideal." },
              { icon: "🔤", tip: ".com is still king for small business credibility." },
              { icon: "🔍", tip: "Include a keyword from your niche when possible." },
            ].map((t) => (
              <div key={t.tip} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5 text-center">
                <div className="mb-2 text-2xl">{t.icon}</div>
                <p className="text-sm text-slate-400">{t.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
