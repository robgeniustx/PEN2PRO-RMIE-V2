import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FEATURES = [
  { icon: "🗺️", title: "Everything in Pro", body: "Full RMIE blueprint, progress tracking, branding, export, AI refinement, outreach, credit & funding checklist — all included." },
  { icon: "🧠", title: "Advanced Strategist Guidance", body: "Deeper RMIE analysis with advanced market positioning, competitive strategy, and revenue acceleration paths built for your exact situation." },
  { icon: "📊", title: "Financial Projections", body: "Month-by-month revenue projections, break-even analysis, pricing sensitivity, and cash flow planning based on your business model." },
  { icon: "🏦", title: "Vendor, Funding & Credit Resource Center", body: "Curated lenders, business credit partners, tradeline vendors, grant databases, and SBA loan prep resources — organized for your stage." },
  { icon: "⚖️", title: "Company Formation Checklist", body: "LLC filing, registered agent, EIN, operating agreement, business banking, and bookkeeping setup — fully guided with state-specific notes." },
  { icon: "™️", title: "Trademark, Social & Marketing Guidance", body: "Trademark search guidance, social media presence buildout, content calendar framework, and brand authority strategy." },
  { icon: "🤝", title: "Done-With-You Style Guidance", body: "Not just tools — structured advisory frameworks that walk you through each step like a business coach without the $500/hour price tag." },
  { icon: "⚡", title: "Priority Support", body: "Priority queue access for questions, roadmap reviews, and strategy refinement requests. Your time matters — we move faster for Elite members." },
];

const TESTIMONIAL_PLACEHOLDER = [
  { quote: "PEN2PRO Elite gave me the exact steps I needed to go from $0 to my first paying client in 30 days. The financial projections alone were worth it.", author: "Elite Member, Houston TX" },
  { quote: "I had the idea. I had the drive. Elite gave me the structure — the business plan, the branding, the outreach, all of it. I finally felt like a real CEO.", author: "Elite Member, Atlanta GA" },
];

export default function ElitePage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.18) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[40%] -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            🔥 PEN2PRO Elite Plan — Most Advanced
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Advanced Strategy.
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Real Execution.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-8">
            Elite is built for builders who are serious about speed, scale, and execution. Advanced strategist guidance, financial projections, done-with-you frameworks, and priority access — all in one platform.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center mb-6">
            <Link to="/waitlist?tier=elite" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Elite Waitlist
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
          <div className="inline-flex items-center gap-2 rounded-2xl border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-6 py-3">
            <span className="text-2xl font-black text-white">$499</span>
            <span className="text-slate-400 text-sm">/month · Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Elite Features</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            The Full Arsenal for Serious Builders
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Elite gives you every Pro feature plus advanced strategy, financial modeling, legal-foundation guidance, resource centers, and priority access.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title}
                className="rounded-2xl border border-[#FF8A00]/20 bg-[#0F1520] p-6 hover:border-[#FF8A00]/40 transition-colors"
              >
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Placeholders */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Early Feedback</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">Built for People Who Actually Execute</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {TESTIMONIAL_PLACEHOLDER.map((t) => (
              <div key={t.author} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-7">
                <p className="mb-4 text-slate-300 italic leading-relaxed">"{t.quote}"</p>
                <p className="text-sm font-bold text-[#FF8A00]">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elite vs Pro quick bar */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-display text-2xl font-black">Why Elite Over Pro?</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Financial Projections", sub: "Know your numbers before you launch" },
              { label: "Done-With-You Guidance", sub: "Not just tools — structured advisory" },
              { label: "Priority Support", sub: "Faster responses when it matters" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-[#FF8A00]/20 bg-[#0F1520] p-5 text-center">
                <p className="font-bold text-white mb-1">{item.label}</p>
                <p className="text-xs text-slate-400">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Stop Planning. Start Executing.
          </h2>
          <p className="mb-10 text-slate-400">
            Join the Elite waitlist. Early adopters get priority access and locked-in launch pricing when Elite goes live.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=elite" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Elite Waitlist
            </Link>
            <Link to="/founders" className="rounded-xl border border-[#FF8A00]/30 px-8 py-3.5 text-sm font-semibold text-[#FF8A00] hover:bg-[#FF8A00]/10 transition-colors">
              See Founders Lifetime →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
