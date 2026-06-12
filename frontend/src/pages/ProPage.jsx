import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PRO_FEATURES = [
  { icon: "🗺️", title: "Full Business Roadmap", body: "Complete AI-generated roadmap tailored to your idea — not a template. Covers idea validation, offers, pricing, and launch sequence." },
  { icon: "📊", title: "Full Progress Tracking", body: "Track every milestone from idea to launch. Check off tasks, log wins, and see your momentum in real time." },
  { icon: "🎨", title: "Business Branding Support", body: "Brand name ideas, tagline generation, brand voice guidelines, and visual identity direction." },
  { icon: "📄", title: "Email & PDF Export", body: "Export your full roadmap as a professional PDF to share with partners, investors, or your team." },
  { icon: "🤖", title: "AI Refinement Rounds", body: "Request revisions and refinements from the AI — go deeper on strategy, offers, outreach, or pricing." },
  { icon: "📣", title: "Outreach Strategy", body: "Who to contact, what to say, how to land your first 10 clients — written specifically for your business type." },
  { icon: "💳", title: "Credit & Funding Readiness", body: "Know exactly where you stand before applying. Step-by-step checklist to get funding-ready in 30–90 days." },
  { icon: "📅", title: "30 / 60 / 90-Day Launch Plan", body: "A structured action calendar — not generic advice. Day-by-day priorities for your first three months." },
];

const COMPARE = [
  { feature: "Business Roadmap", free: "Preview only", pro: "Full access" },
  { feature: "AI Refinement", free: "1 round", pro: "Unlimited rounds" },
  { feature: "Progress Tracking", free: "✗", pro: "✓" },
  { feature: "PDF / Email Export", free: "✗", pro: "✓" },
  { feature: "Branding Direction", free: "✗", pro: "✓" },
  { feature: "Outreach Strategy", free: "✗", pro: "✓" },
  { feature: "Credit Readiness", free: "Basic", pro: "Full checklist" },
  { feature: "30/60/90-Day Plan", free: "✗", pro: "✓" },
  { feature: "Sales Script", free: "✗", pro: "✓" },
];

const TESTIMONIALS = [
  { name: "Marcus T.", role: "Landscaping Entrepreneur", body: "Pro gave me a full roadmap I actually understood. Not corporate jargon — real steps I could take Monday morning." },
  { name: "Destiny W.", role: "Freelance Designer", body: "The branding direction and outreach strategy alone paid for itself. I booked 3 clients in my first week." },
  { name: "James R.", role: "Returning Citizen", body: "I didn't think I could start a business with my background. Pro showed me I was further along than I thought." },
];

export default function ProPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.2) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[40%] -right-40 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(13,71,161,0.2) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,136,229,0.1) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            ⚡ PEN2PRO Pro Plan
          </div>
          <h1 className="mb-5 font-display text-5xl font-black leading-tight md:text-6xl">
            More Than a Roadmap.
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              A Full Strategy Engine.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Pro gives you the complete blueprint — roadmap, branding, outreach, credit readiness, export tools, and a 90-day launch plan built around your specific idea.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Pro Waitlist
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Compare All Plans
            </Link>
          </div>
          <div className="mt-6 flex justify-center gap-6 text-xs text-slate-500">
            <span>✓ No credit card required to start</span>
            <span>✓ Cancel anytime</span>
            <span>✓ Waitlist locks in founding price</span>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">What You Get</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything in Free. Plus the Tools That Actually Move the Needle.
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Free gives you a preview. Pro gives you a full execution system.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PRO_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5 hover:border-[#1E88E5]/40 transition-colors">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-1.5 font-bold text-white text-sm">{f.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Free vs Pro</div>
          <h2 className="mb-10 text-center font-display text-3xl font-black">See the Difference</h2>
          <div className="overflow-hidden rounded-2xl border border-[#1A2D50]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1A2D50] bg-[#0F1520]">
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">Feature</th>
                  <th className="px-5 py-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500">Free</th>
                  <th className="px-5 py-4 text-center text-xs font-bold uppercase tracking-wider text-[#FF8A00]">Pro</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-[#1A2D50] ${i % 2 === 0 ? "bg-[#0A0F1E]" : "bg-[#0D1528]"}`}>
                    <td className="px-5 py-3.5 font-medium text-slate-300">{row.feature}</td>
                    <td className="px-5 py-3.5 text-center text-slate-500">{row.free}</td>
                    <td className="px-5 py-3.5 text-center font-semibold text-[#FF8A00]">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Real Results</div>
          <h2 className="mb-12 text-center font-display text-3xl font-black">Built for People Who Take Action</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <p className="mb-4 text-sm text-slate-300 leading-relaxed">"{t.body}"</p>
                <p className="font-bold text-white text-sm">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
            style={{ background: "linear-gradient(135deg, #FF8A00, #FFC107)" }}>
            ⚡
          </div>
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">
            Ready to Go Pro?
          </h2>
          <p className="mb-10 text-slate-400">
            Join the Pro waitlist today and lock in your founding member price. Pro launches June 15, 2026.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/waitlist?tier=pro" className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Join Pro Waitlist
            </Link>
            <Link to="/starter" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Try Free First
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">
            Already a member?{" "}
            <Link to="/login" className="text-[#FF8A00] font-semibold hover:underline">Sign in to upgrade</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
