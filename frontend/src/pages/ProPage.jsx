import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PRO_FEATURES = [
  { icon: "🗺️", title: "Full AI Business Roadmap", body: "Complete 7-day, 30-day, and 90-day execution plans built around your specific idea, market, and budget — not copy-paste advice." },
  { icon: "📊", title: "Full Progress Tracking", body: "Track every task, milestone, and goal from launch to revenue. Know exactly where you are and what's next at all times." },
  { icon: "🎨", title: "Business Branding Support", body: "Brand name ideas, logo direction, color palette guidance, tagline suggestions, and positioning strategy for your offer." },
  { icon: "📄", title: "PDF & Email Export", body: "Download your full roadmap as a professional PDF or send it to your email for offline planning and sharing." },
  { icon: "🤖", title: "AI Business Refinement", body: "Refine your roadmap with follow-up AI questions. Adjust your pricing, niche, or offer and get updated strategy instantly." },
  { icon: "📣", title: "Outreach Strategy", body: "Real prospecting scripts, DM templates, cold outreach sequences, and a daily client-acquisition action plan." },
  { icon: "💳", title: "Credit & Funding Readiness Checklist", body: "Know exactly what personal credit score, accounts, documents, and history lenders need before you apply — no wasted applications." },
  { icon: "🏗️", title: "Business Foundation Checklist", body: "LLC, EIN, business bank account, and brand setup — step-by-step with no guesswork or missed steps." },
];

const FREE_VS_PRO = [
  { feature: "Starter blueprint", free: true, pro: true },
  { feature: "Full 90-day execution plan", free: false, pro: true },
  { feature: "Progress tracking", free: false, pro: true },
  { feature: "Business branding support", free: false, pro: true },
  { feature: "PDF / email export", free: false, pro: true },
  { feature: "Sales scripts & outreach", free: false, pro: true },
  { feature: "AI business refinement", free: false, pro: true },
  { feature: "Credit & funding checklist", free: false, pro: true },
];

export default function ProPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white overflow-hidden">

      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="relative px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/40 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#D4A017]">
            ⚡ PEN2PRO Pro
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Your Full Business Roadmap.
            <br />
            <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Built for Execution.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Pro gives you the complete strategy, tools, and structure to move from idea to income — with AI-powered roadmaps, outreach scripts, branding support, and funding readiness all in one platform.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="rounded-2xl px-8 py-4 text-base font-black text-[#080C14] btn-gold">
              Join Pro Waitlist →
            </Link>
            <Link to="/pricing" className="rounded-2xl border border-[#1A2235] px-8 py-4 text-base font-semibold text-slate-300 hover:text-white transition-colors">
              View All Plans
            </Link>
          </div>
          <p className="mt-3 text-sm text-[#D4A017] font-semibold">$249/month · Cancel anytime</p>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#D4A017]">What You Get</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything You Need to Launch and Grow
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Pro is not a generic business plan generator. It is a complete execution system built around your specific idea, market, and budget.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {PRO_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 hover:border-[#D4A017]/40 transition-colors">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE VS PRO COMPARISON */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Free vs Pro</div>
          <h2 className="mb-12 text-center font-display text-3xl font-black">
            See the Difference Clearly
          </h2>
          <div className="overflow-hidden rounded-2xl border border-[#1A2D50]">
            <div className="grid grid-cols-3 bg-[#0F1520] px-6 py-4 text-sm font-bold uppercase tracking-widest text-slate-400">
              <span>Feature</span>
              <span className="text-center">Free</span>
              <span className="text-center text-[#D4A017]">Pro</span>
            </div>
            {FREE_VS_PRO.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 px-6 py-4 text-sm ${i % 2 === 0 ? "bg-[#080C14]" : "bg-[#0A0F18]"}`}>
                <span className="text-slate-300">{row.feature}</span>
                <span className="text-center">{row.free ? <span className="text-emerald-400 font-bold">✓</span> : <span className="text-slate-600">—</span>}</span>
                <span className="text-center">{row.pro ? <span className="text-[#D4A017] font-bold">✓</span> : <span className="text-slate-600">—</span>}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Who Pro Is For</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">Built for Serious Builders</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Entrepreneurs ready to move past the idea stage", "Veterans and returning citizens building their own income", "Side hustlers turning part-time into full-time", "Small business owners who need a structured growth plan", "Creators who need a real monetization roadmap", "Anyone who tried before but needed a clearer system"].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4">
                <span className="mt-0.5 text-[#D4A017] font-black">✓</span>
                <p className="text-sm text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Ready to Move From Idea to Income?
          </h2>
          <p className="mb-10 text-slate-400">
            Join the Pro waitlist. Be first when subscriptions go live. No payment required today.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="rounded-xl px-8 py-4 text-sm font-black text-[#080C14] btn-gold">
              Join Pro Waitlist
            </Link>
            <Link to="/starter" className="rounded-xl border border-[#1A2235] px-8 py-4 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Try Free Roadmap First
            </Link>
            <Link to="/elite" className="rounded-xl border border-[#00C9B1]/40 px-8 py-4 text-sm font-semibold text-[#00C9B1] hover:text-white transition-colors">
              See Elite Plan →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
