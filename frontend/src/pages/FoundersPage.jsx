import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FOUNDERS_BENEFITS = [
  { icon: "♾️", title: "Lifetime Platform Access", desc: "One payment. Access to everything PEN2PRO builds — current and future features — for life. No monthly bills, ever." },
  { icon: "🥇", title: "Founder Recognition", desc: "Your name listed in the PEN2PRO Founders Registry. You were here first. That matters." },
  { icon: "⚡", title: "Early Access — Everything", desc: "First access to every new feature, module, upgrade, and AI tool before it rolls out to the general public." },
  { icon: "🤖", title: "Full RMIE Engine — Unlimited", desc: "Unlimited blueprint generations, full roadmap depth, advanced AI refinement, and every RMIE module unlocked." },
  { icon: "🏗️", title: "P2P Command Center — Full", desc: "Complete CRM, pipeline, automation builder, AI Voice Agent, website builder, and all dashboard tools — no restrictions." },
  { icon: "💳", title: "Credit & Funding — Advanced", desc: "Full funding readiness scoring, advanced credit strategy, vendor credit guidance, and lender readiness checklist." },
  { icon: "📈", title: "Financial Projection Engine", desc: "12-month projections, profit modeling, pricing strategy, and break-even analysis built around your business." },
  { icon: "🎖️", title: "Priority Everything", desc: "Priority support, priority AI processing, and priority access to any new tools, beta features, or community events." },
];

const WHAT_YOU_GET = [
  "Everything in Elite",
  "Everything in Pro",
  "Full RMIE engine — unlimited blueprints",
  "P2P Command Center — all modules",
  "AI Voice Agent — advanced access",
  "Full automation builder",
  "Advanced CRM and pipeline",
  "Financial projections and modeling",
  "Credit repair and funding readiness — full",
  "Website builder and domain tools",
  "Social strategy and content engine",
  "Vendor and funding resource center",
  "Company formation and legal checklist",
  "Trademark and brand guidance",
  "All future features — forever",
  "Founder recognition in the registry",
  "Early access to every new release",
  "Priority support — front of the line",
];

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(212,160,23,0.15) 0%, rgba(30,136,229,0.08) 50%, transparent 80%)",
          }}
        />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#1A1200] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#D4A017]">
            👑 Legacy Founders — Limited
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Build Once.
            <br />
            <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Access Forever.
            </span>
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            The Legacy Founders offer is a one-time investment for lifetime access to everything PEN2PRO builds — past, present, and future. Only 200 spots exist. When they're gone, they're gone.
          </p>
          <div className="mx-auto mb-8 max-w-sm rounded-2xl border border-[#D4A017]/30 bg-[#0F0A00] px-8 py-5">
            <div className="text-4xl font-black text-[#D4A017]">$1,899</div>
            <div className="text-sm text-slate-400">One-time payment. Lifetime access.</div>
            <div className="mt-2 text-xs font-bold text-[#FF8A00]">200 Founders spots — limited availability</div>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/waitlist?tier=founders"
              className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] btn-gold"
            >
              Claim My Founders Spot
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 transition-colors hover:text-white"
            >
              Compare Plans
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">
            Founders access launches with the platform. Reserve your spot now and be first in.
          </p>
        </div>
      </section>

      {/* WHY FOUNDERS */}
      <section className="border-t border-[#1A2D50] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">Why Founders</div>
          <h2 className="mb-6 text-center font-display text-3xl font-black md:text-4xl">
            You Were Here First. That's Worth Something.
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            The people who believed in PEN2PRO before the world knew it existed deserve something different. Legacy Founders don't just get access — they get permanence. No subscription. No price increases. No being locked out when your budget gets tight.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {FOUNDERS_BENEFITS.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#2A1F00] bg-[#0F0A00] p-6 transition-colors hover:border-[#D4A017]/40"
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLETE FEATURE LIST */}
      <section className="border-t border-[#1A2D50] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">Complete Access</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black md:text-4xl">
            Everything. No Exceptions.
          </h2>
          <div className="rounded-2xl border border-[#2A1F00] bg-[#0F0A00] p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {WHAT_YOU_GET.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <span className="mt-0.5 shrink-0 font-bold text-[#D4A017]">✓</span>
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-[#2A1F00] pt-6 text-center">
              <Link to="/waitlist?tier=founders" className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] btn-gold">
                Claim My Founders Spot — $1,899
              </Link>
              <p className="mt-3 text-xs text-slate-500">200 spots total. First come, first served.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="border-t border-[#1A2D50] px-5 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#D4A017]">Who This Is For</div>
          <h2 className="mb-8 font-display text-3xl font-black md:text-4xl">
            Builders Who Think Long Term
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-slate-400">
            Legacy Founder access is not for everyone. It is for the person who looks at PEN2PRO and sees not just what it is today — but what it will become. It is for the builder who is tired of paying monthly for every tool and wants to own their business infrastructure outright.
          </p>
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8">
            <p className="mb-6 text-lg italic leading-relaxed text-slate-300">
              "This is not just software. This is a second-chance engine, a business builder, and a roadmap for people ready to stop waiting for permission."
            </p>
            <p className="font-bold text-[#D4A017]">— Robert Green, Founder of PEN2PRO</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-[#1A2D50] px-5 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div
            className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
            style={{ background: "linear-gradient(135deg, #7A5000, #D4A017)", boxShadow: "0 0 24px rgba(212,160,23,0.3)" }}
          >
            👑
          </div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Secure Your Spot Before It's Gone
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-400">
            200 Founders spots. One-time price. Lifetime access to every tool, every upgrade, and every module PEN2PRO builds. Reserve yours now.
          </p>
          <Link to="/waitlist?tier=founders" className="rounded-xl px-10 py-5 text-lg font-black text-[#0A0F1E] btn-gold">
            Claim Legacy Founders Access — $1,899
          </Link>
          <p className="mt-4 text-xs text-slate-500">
            Not ready for Founders?{" "}
            <Link to="/elite" className="text-[#FF8A00] transition-colors hover:text-white">
              Explore Elite →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
