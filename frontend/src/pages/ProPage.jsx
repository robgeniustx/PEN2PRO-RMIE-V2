import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  { icon: "🗺️", title: "Full RMIE Blueprint", body: "Complete AI-generated business roadmap: idea to income, not just a summary." },
  { icon: "📊", title: "Full Progress Tracking", body: "Track every milestone — 7-day, 30-day, 90-day — with visual progress indicators." },
  { icon: "🎨", title: "Business Branding Support", body: "Brand name ideas, tagline suggestions, color direction, and logo brief." },
  { icon: "📧", title: "Email & PDF Export", body: "Download or email your complete roadmap to yourself or an advisor." },
  { icon: "🤖", title: "AI Refinement", body: "Refine your blueprint with follow-up prompts — drill into pricing, offers, or outreach." },
  { icon: "📣", title: "Outreach Strategy", body: "Proven messaging templates for cold outreach, social, and referral campaigns." },
  { icon: "💳", title: "Credit & Funding Checklist", body: "Know exactly where you stand on fundability — and the specific steps to improve it." },
  { icon: "🏗️", title: "Business Foundation Guide", body: "LLC, EIN, business bank, licenses — the checklist most builders never see." },
];

const COMPARE = [
  { feature: "Starter Blueprint",        free: true,  pro: true  },
  { feature: "Full Roadmap (90 days)",   free: false, pro: true  },
  { feature: "Progress Tracking",        free: "Basic", pro: "Full" },
  { feature: "AI Refinement",            free: false, pro: true  },
  { feature: "Branding Support",         free: false, pro: true  },
  { feature: "Email / PDF Export",       free: false, pro: true  },
  { feature: "Outreach Strategy",        free: false, pro: true  },
  { feature: "Credit & Funding Checklist", free: false, pro: true },
  { feature: "Business Foundation Guide", free: false, pro: true },
];

function Check({ v }) {
  if (v === true)  return <span className="text-emerald-400 font-bold">✓</span>;
  if (v === false) return <span className="text-slate-600">—</span>;
  return <span className="text-slate-400 text-xs">{v}</span>;
}

export default function ProPage() {
  return (
    <div className="min-h-screen bg-[#070B14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-5 text-center">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(30,136,229,0.18) 0%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-block rounded-full border border-[#1E88E5]/40 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">
            PEN2PRO Pro
          </div>
          <h1 className="mb-5 text-4xl font-black leading-tight md:text-6xl">
            Stop Guessing.<br />
            <span style={{ background: "linear-gradient(90deg,#1E88E5,#42A5F5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Start Executing.
            </span>
          </h1>
          <p className="mb-8 text-lg text-slate-400 max-w-2xl mx-auto">
            Pro gives you the full RMIE roadmap — idea to income — with branding support, outreach strategy, credit readiness, and AI refinement. Built for serious builders.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/waitlist?tier=pro"
              className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] btn-gold"
            >
              Join Pro Waitlist
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 hover:border-[#1E88E5] hover:text-white transition-colors"
            >
              Compare All Plans
            </Link>
          </div>
          <p className="mt-5 text-sm text-slate-500">$249/mo · Cancel anytime · No setup fees</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-5">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 text-center text-3xl font-black">Everything in Pro</h2>
          <p className="mb-12 text-center text-slate-400">Eight tools that take you from idea to income — not just a plan on paper.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2D50] bg-[#0D1626] p-6 hover:border-[#1E88E5]/50 transition-colors">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-5 bg-[#0A0F1E]">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-2xl font-black">Free vs Pro</h2>
          <div className="overflow-hidden rounded-2xl border border-[#1A2D50]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1A2D50] bg-[#0D1626]">
                  <th className="py-4 px-6 text-left text-slate-400 font-semibold">Feature</th>
                  <th className="py-4 px-6 text-center text-slate-400 font-semibold">Free</th>
                  <th className="py-4 px-6 text-center text-[#1E88E5] font-bold">Pro</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-[#12192A] ${i % 2 === 0 ? "bg-[#0A0F1E]" : "bg-[#0D1626]"}`}>
                    <td className="py-3.5 px-6 text-slate-300">{row.feature}</td>
                    <td className="py-3.5 px-6 text-center"><Check v={row.free} /></td>
                    <td className="py-3.5 px-6 text-center"><Check v={row.pro} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-5 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-black">Ready to Build for Real?</h2>
          <p className="mb-8 text-slate-400">Pro gives you the full roadmap, the tools, and the strategy. Join the waitlist and be first when Pro launches.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/waitlist?tier=pro" className="rounded-xl px-8 py-4 font-black text-[#0A0F1E] btn-gold">
              Join Pro Waitlist
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#1A2D50] px-8 py-4 font-semibold text-slate-300 hover:border-[#FF8A00] hover:text-white transition-colors">
              See Elite Plan →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
