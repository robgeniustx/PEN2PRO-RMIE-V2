import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PRO_FEATURES = [
  { icon: "🗺️", title: "Full RMIE Roadmap", desc: "Complete business blueprint — 7, 30, and 90-day action plans built around your specific idea and market." },
  { icon: "📊", title: "Progress Tracking", desc: "Track every milestone. Know exactly where you are in your launch plan and what comes next." },
  { icon: "🎨", title: "Business Branding Support", desc: "Brand name ideas, color palette guidance, tagline suggestions, and offer positioning." },
  { icon: "📧", title: "Email & PDF Export", desc: "Download your full roadmap as a PDF or share it by email — ready for investors, partners, or banks." },
  { icon: "🤖", title: "AI Refinement Engine", desc: "Sharpen your roadmap. Ask follow-up questions, adjust your niche, and get improved outputs in real time." },
  { icon: "📣", title: "Outreach Strategy", desc: "Specific daily outreach targets, channels, scripts, and messaging — built for your niche and offer." },
  { icon: "🏗️", title: "P2P Command Center", desc: "CRM basics, pipeline view, lead inbox, and website builder access — your business ops hub." },
  { icon: "💳", title: "Credit & Funding Readiness", desc: "Know your fundability score. Get a step-by-step checklist to become bankable and investor-ready." },
];

const COMPARISON = [
  { feature: "RMIE Business Blueprint", free: "Preview only", pro: true },
  { feature: "7/30/90-day action plans", free: false, pro: true },
  { feature: "Revenue & pricing strategy", free: false, pro: true },
  { feature: "Sales script", free: false, pro: true },
  { feature: "Outreach strategy", free: false, pro: true },
  { feature: "Progress tracking", free: false, pro: true },
  { feature: "Email/PDF export", free: false, pro: true },
  { feature: "Branding direction", free: false, pro: true },
  { feature: "Credit & funding checklist", free: false, pro: true },
  { feature: "P2P Command Center", free: false, pro: true },
  { feature: "Website Builder", free: false, pro: true },
  { feature: "AI Voice (basic)", free: false, pro: true },
];

export default function ProPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,136,229,0.15) 0%, transparent 70%)" }}
        />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">
            ⚡ PEN2PRO Pro
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            From Idea to Income.
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              With a Real Plan.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400">
            Pro unlocks the full RMIE roadmap, execution tools, branding support, and the P2P Command Center — everything you need to stop planning and start building.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              Join Pro Waitlist — $249/mo
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 transition-colors hover:text-white">
              Compare All Plans
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">Pro launches June 15, 2026. Reserve your spot now.</p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="border-t border-[#1A2D50] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">What Pro Unlocks</div>
          <h2 className="mb-14 text-center font-display text-3xl font-black md:text-4xl">
            Everything You Need to Launch
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PRO_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 transition-colors hover:border-[#1E88E5]/40">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="border-t border-[#1A2D50] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Free vs Pro</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">See the Difference</h2>
          <div className="overflow-hidden rounded-2xl border border-[#1A2D50]">
            <div className="grid grid-cols-3 border-b border-[#1A2D50] bg-[#0F1520] px-6 py-4 text-sm font-bold uppercase tracking-wider text-slate-400">
              <span>Feature</span>
              <span className="text-center">Free</span>
              <span className="text-center text-[#1E88E5]">Pro</span>
            </div>
            {COMPARISON.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 items-center px-6 py-4 text-sm ${i % 2 === 0 ? "bg-[#080C14]" : "bg-[#0B1018]"}`}
              >
                <span className="text-slate-300">{row.feature}</span>
                <span className="text-center">
                  {row.free === true ? (
                    <span className="text-emerald-400">✓</span>
                  ) : row.free === false ? (
                    <span className="text-slate-600">—</span>
                  ) : (
                    <span className="text-xs text-slate-500">{row.free}</span>
                  )}
                </span>
                <span className="text-center">
                  {row.pro ? <span className="font-bold text-[#FF8A00]">✓</span> : <span className="text-slate-600">—</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1A2D50] px-5 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
            style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)", boxShadow: "0 0 24px rgba(30,136,229,0.3)" }}>
            🚀
          </div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">Ready to Build For Real?</h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-400">
            Join the Pro waitlist now. Be among the first to access the full PEN2PRO RMIE roadmap, execution tools, and P2P Command Center when we launch.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              Reserve My Pro Spot
            </Link>
            <Link to="/starter" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 transition-colors hover:text-white">
              Try Free First
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Want even more power?{" "}
            <Link to="/elite" className="text-[#1E88E5] hover:text-white transition-colors">
              Explore Elite →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
