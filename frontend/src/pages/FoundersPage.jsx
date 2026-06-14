import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const LAUNCH_DATE = new Date("2026-06-15T00:00:00Z");
const TOTAL_SPOTS = 200;

function useCountdown() {
  const [t, setT] = useState({});
  useEffect(() => {
    const calc = () => {
      const diff = LAUNCH_DATE - Date.now();
      if (diff <= 0) {
        setT({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setT({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function CountBox({ val, label }) {
  return (
    <div className="min-w-[72px] rounded-xl border border-[#3a2f10] bg-[#1a1400] px-4 py-3 text-center">
      <p className="font-display text-2xl font-black text-[#d4af37]">
        {String(val ?? 0).padStart(2, "0")}
      </p>
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{label}</p>
    </div>
  );
}

const FOUNDERS_INCLUDES = [
  { icon: "♾️", label: "Lifetime PEN2PRO Access", note: "Pay once, use forever. No monthly fees ever." },
  { icon: "🧠", label: "Everything in Elite", note: "Full advanced strategy, financial projections, done-with-you guidance." },
  { icon: "🗺️", label: "Full RMIE Blueprint Engine", note: "Unlimited roadmaps, refinements, and strategy updates." },
  { icon: "📊", label: "P2P Command Center", note: "CRM, pipeline management, leads, follow-ups, and reporting." },
  { icon: "🎙️", label: "P2P AI Voice Agent", note: "AI-powered calling and outreach for your business." },
  { icon: "🌐", label: "Website Builder", note: "Build and launch your professional business website." },
  { icon: "🤖", label: "CRM & Automation Tools", note: "Automate follow-ups, intake, onboarding, and more." },
  { icon: "💳", label: "Funding Readiness Tools", note: "Know exactly where you stand and what lenders need to see." },
  { icon: "🎨", label: "Branding & Launch Execution", note: "Brand kit, launch plan, and positioning strategy." },
  { icon: "📅", label: "12-Month 10M Strategist Framework", note: "A full year of structured growth strategy built into the platform." },
  { icon: "🏅", label: "Founder Recognition", note: "Permanently listed as a founding member of PEN2PRO." },
  { icon: "⚡", label: "Early Access to All New Features", note: "Get new tools before public release, for life." },
];

const FOUNDER_RIGHTS = [
  "Locked-in founding member pricing — never pay full retail",
  "Priority access to every new tool and feature",
  "Founder badge in the platform",
  "Direct input on product roadmap priorities",
  "Early beta access to unreleased modules",
  "Access to the exclusive PEN2PRO Founders community",
];

export default function FoundersPage() {
  const t = useCountdown();

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 left-1/3 h-[700px] w-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute bottom-0 -right-48 h-[500px] w-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(30,136,229,0.12) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <Navbar />

      {/* ── HERO ── */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#3a2f10] bg-[#1a1400] px-4 py-1.5 text-xs font-bold text-[#d4af37] uppercase tracking-widest">
            🏅 Founders Lifetime — Only {TOTAL_SPOTS} Spots
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            One Price.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #d4af37, #f7d675)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Lifetime Access.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
            The PEN2PRO Founders Lifetime offer gives you everything — the full platform, every
            future feature, and the 12-month 10M strategist framework — for a single one-time
            payment. This offer is limited to 200 founding members.
          </p>

          {/* Countdown */}
          <div className="mb-8 flex justify-center gap-3">
            <CountBox val={t.days} label="Days" />
            <CountBox val={t.hours} label="Hours" />
            <CountBox val={t.minutes} label="Min" />
            <CountBox val={t.seconds} label="Sec" />
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=founders"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] shadow-[0_0_35px_rgba(212,175,55,0.4)] transition hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #d4af37, #f7d675)" }}
            >
              Claim My Founders Spot — $1,899
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Compare All Plans
            </Link>
          </div>
          <p className="mt-5 text-sm text-slate-500">
            One-time payment of $1,899 · Lifetime access · No monthly fees · Only 200 spots
          </p>
        </div>
      </section>

      {/* ── SCARCITY BAR ── */}
      <section className="px-5 py-6 border-t border-[#3a2f10] bg-[#100E00]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold text-[#d4af37]">
            ⚠️ This offer will not be available after launch. Once 200 Founders spots are claimed, this pricing is gone — permanently.
          </p>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#d4af37]">
            Everything Included — For Life
          </div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            The Full Platform. No Recurring Fees.
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Every tool. Every feature. Every future update. Founders get it all — forever.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {FOUNDERS_INCLUDES.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-[#3a2f10] bg-[#0F0C00] p-5"
              >
                <div className="shrink-0 text-3xl">{item.icon}</div>
                <div>
                  <p className="font-bold text-[#f7d675]">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER RIGHTS ── */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center font-display text-2xl font-black md:text-3xl">
            Founders Get More Than a License
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {FOUNDER_RIGHTS.map((right) => (
              <div
                key={right}
                className="flex items-start gap-3 rounded-2xl border border-[#3a2f10] bg-[#0F0C00] p-5"
              >
                <span className="mt-0.5 shrink-0 text-[#d4af37] font-black">✦</span>
                <p className="text-sm text-slate-300">{right}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE COMPARISON ── */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center font-display text-2xl font-black">
            The Math Is Simple
          </h2>
          <div className="rounded-2xl border border-[#3a2f10] bg-[#100E00] p-7">
            <div className="space-y-3 text-sm">
              {[
                ["Pro plan (monthly)", "$249/mo", "text-slate-400"],
                ["Elite plan (monthly)", "$499/mo", "text-slate-400"],
                ["Founders Lifetime breaks even vs. Pro at", "~8 months", "text-[#f7d675]"],
                ["Founders Lifetime breaks even vs. Elite at", "~4 months", "text-[#f7d675]"],
              ].map(([label, value, color]) => (
                <div
                  key={label}
                  className="flex items-center justify-between border-b border-[#2a2000] pb-3"
                >
                  <span className="text-slate-400">{label}</span>
                  <span className={`font-bold ${color}`}>{value}</span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-2">
                <span className="font-black text-white">Founders Lifetime — one-time</span>
                <span className="font-black text-[#d4af37] text-lg">$1,899</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 font-display text-2xl font-black md:text-3xl">
            Who the Founders Offer Is For
          </h2>
          <p className="mb-10 text-slate-400">
            Not for everyone. Built for the people who see the vision early and commit before the crowd.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Early adopters who want to lock in before price increases",
              "Entrepreneurs building a business right now",
              "Veterans and returning citizens ready to commit",
              "Creators and side hustlers going full-time",
              "Small business owners who need real systems",
              "Anyone who sees the 5-year value of one-time access",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#3a2f10] bg-[#0F0C00] p-5 text-sm text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div
          className="mx-auto max-w-2xl rounded-2xl border p-10 text-center"
          style={{
            borderColor: "rgba(212,175,55,0.5)",
            background: "#100E00",
            boxShadow: "0 0 60px rgba(212,175,55,0.15)",
          }}
        >
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#d4af37]">
            Limited — 200 Founders Only
          </div>
          <h2 className="mb-4 font-display text-3xl font-black">
            Secure Your Founders Spot
          </h2>
          <p className="mb-6 text-slate-400 leading-relaxed">
            One-time payment. Lifetime access. Every feature. Every update. Founder recognition — forever.
          </p>

          {/* Countdown again */}
          <div className="mb-8 flex justify-center gap-3">
            <CountBox val={t.days} label="Days" />
            <CountBox val={t.hours} label="Hours" />
            <CountBox val={t.minutes} label="Min" />
            <CountBox val={t.seconds} label="Sec" />
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=founders"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] shadow-[0_0_35px_rgba(212,175,55,0.4)] transition hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #d4af37, #f7d675)" }}
            >
              Claim Founders Lifetime — $1,899
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">
            Not ready for Founders?{" "}
            <Link to="/pro" className="text-[#2d9cff] hover:underline">
              Start with Pro
            </Link>{" "}
            or{" "}
            <Link to="/elite" className="text-[#FF8A00] hover:underline">
              Explore Elite
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
