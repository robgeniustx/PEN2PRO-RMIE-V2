import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const WHAT_YOU_GET = [
  { icon: "💡", title: "Business Idea Validation", body: "Enter your idea and RMIE evaluates market demand, viability, startup cost range, and your likelihood of success." },
  { icon: "🏷️", title: "Brand Name Generator", body: "Get 5–10 brand name ideas tailored to your business type, target customer, and personality. Domain availability check included." },
  { icon: "📦", title: "Offer Structure Builder", body: "Build your service or product offer — packages, pricing tiers, what's included, and how to present it to customers." },
  { icon: "🗂️", title: "Business Model Generator", body: "Define your revenue model — service, product, subscription, affiliate, course, consulting, and more. Pick the model that fits your life." },
  { icon: "✅", title: "Startup Checklist", body: "Everything you need to actually start: LLC, EIN, business bank, domain, email, website, payment processor, social handles." },
  { icon: "🏛️", title: "LLC & EIN Guidance", body: "Step-by-step walkthrough for forming your LLC, getting your EIN, setting up your operating agreement, and staying compliant." },
  { icon: "🏦", title: "Business Bank Checklist", body: "Requirements for opening a real business bank account. Know what documents to bring and which banks accept new LLCs." },
  { icon: "🚀", title: "Launch Roadmap", body: "A personalized 7-day launch plan specific to your business type — real steps, not generic advice." },
];

const STEPS = [
  { step: "01", icon: "✍️", title: "Describe Your Idea", body: "Tell PEN2PRO what you want to build. Be specific or vague — the AI is built to work with rough ideas." },
  { step: "02", icon: "🤖", title: "RMIE Analyzes Your Idea", body: "The Rapid Monetization Intelligence Engine validates your concept, evaluates the market, and builds your initial blueprint." },
  { step: "03", icon: "🏗️", title: "Build Your Business Foundation", body: "Name your business, build your offer, set up your legal foundation, and get your launch checklist." },
  { step: "04", icon: "📋", title: "Save Your Blueprint", body: "Your complete business builder output is saved to your dashboard. Upgrade to Pro or Elite for deeper strategy." },
];

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,201,177,0.15) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-[50%] -right-40 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="relative px-5 py-24 text-center">
        <div className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,201,177,0.10) 0%, transparent 70%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00C9B1]/30 bg-[#0F1520] px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ color: "#00C9B1" }}>
            🏗️ Business Builder Mode
          </div>
          <h1 className="mb-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Turn Your Idea Into
            <br />
            <span style={{ background: "linear-gradient(90deg, #00C9B1, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              A Real Business.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            Builder Mode takes you from raw idea to a real business foundation — name, offer, model, legal checklist, bank setup, and launch roadmap. No fluff. Just the steps.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Building Free
            </Link>
            <Link to="/pro"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Unlock Full Builder with Pro
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest" style={{ color: "#00C9B1" }}>How It Works</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">Four Steps to a Real Business</h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Builder Mode is designed to be fast. Most people complete their initial blueprint in under 15 minutes.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.step} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-center">
                <div className="mb-3 flex items-center justify-center h-12 w-12 rounded-xl mx-auto text-2xl"
                  style={{ background: "rgba(0,201,177,0.1)", border: "1px solid rgba(0,201,177,0.2)" }}>
                  {s.icon}
                </div>
                <div className="mb-2 text-xs font-black uppercase tracking-widest" style={{ color: "#00C9B1" }}>Step {s.step}</div>
                <h3 className="mb-2 font-bold text-white">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Builder Features</div>
          <h2 className="mb-4 text-center font-display text-3xl font-black md:text-4xl">
            Everything the Foundation Requires
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
            Most business advice skips the foundation entirely. Builder Mode doesn't. It starts with the basics every business actually needs.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {WHAT_YOU_GET.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 hover:border-[#00C9B1]/30 transition-colors">
                <div className="mb-3 text-3xl">{f.icon}</div>
                <h3 className="mb-2 font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free vs Pro callout */}
      <section className="px-5 py-20 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8">
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">Free Starter</div>
              <h3 className="mb-4 font-display text-xl font-black text-white">Start Building Today</h3>
              <ul className="space-y-2 text-sm text-slate-400 mb-6">
                {["Business idea validation", "Brand name ideas", "Basic startup checklist", "Roadmap preview"].map(i => (
                  <li key={i} className="flex items-center gap-2"><span className="text-green-400">✓</span>{i}</li>
                ))}
              </ul>
              <Link to="/starter" className="block text-center rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
                Start Free
              </Link>
            </div>
            <div className="rounded-2xl border border-[#FF8A00]/30 bg-[#0F1520] p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#FF8A00] to-[#D4A017]" />
              <div className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>Pro Builder</div>
              <h3 className="mb-4 font-display text-xl font-black text-white">Full Foundation + Strategy</h3>
              <ul className="space-y-2 text-sm text-slate-400 mb-6">
                {["Everything in Free", "Full offer structure builder", "LLC/EIN/bank setup guide", "Complete 90-day roadmap", "Outreach scripts & sales strategy", "Branding direction & PDF export"].map(i => (
                  <li key={i} className="flex items-center gap-2"><span style={{ color: "#FF8A00" }}>✓</span>{i}</li>
                ))}
              </ul>
              <Link to="/waitlist?tier=pro" className="block text-center rounded-xl px-6 py-3 text-sm font-black text-[#0A0F1E] btn-gold">
                Join Pro Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-black md:text-4xl">Stop Planning. Start Building.</h2>
          <p className="mb-8 text-slate-400">
            The free roadmap takes 10 minutes and gives you more than most $500 business courses. Start there.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter"
              className="rounded-xl px-8 py-3.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/accelerator"
              className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              See Accelerator Mode →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
