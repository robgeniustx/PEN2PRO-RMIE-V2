import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-slate-400">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-14 space-y-10 text-slate-300 leading-7">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Using PEN2PRO</h2>
          <p>
            By creating an account or using the PEN2PRO platform (Starter, Pro, Elite, or Founders tiers), you agree
            to use the platform for lawful purposes and to provide accurate information during roadmap intake and
            account setup.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Plans &amp; Billing</h2>
          <p>
            Pro and Elite are subscription plans billed on a recurring basis until canceled. Founders is a one-time,
            lifetime-access offer subject to availability. Prices, features, and availability may change; current
            pricing is always shown on the{" "}
            <Link to="/pricing" className="text-[#FF8A00] hover:underline">Pricing page</Link>.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">AI-Generated Content</h2>
          <p>
            Roadmaps, business plans, marketing scripts, and strategy output are generated with AI assistance based
            on the information you provide. This content is for planning and educational purposes and should be
            reviewed against your own judgment, licensed professionals, and local regulations before acting on it.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">No Guarantee of Results</h2>
          <p>
            PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or business
            success. Outcomes depend on your effort, market conditions, and factors outside our control.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Account Termination</h2>
          <p>
            We may suspend or terminate accounts that violate these terms, misuse the platform, or engage in
            fraudulent activity. You may cancel your subscription at any time.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
          <p>
            Questions about these terms? Reach out through the{" "}
            <Link to="/waitlist" className="text-[#FF8A00] hover:underline">waitlist form</Link> or your account
            support channel.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
