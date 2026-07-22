import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-semibold text-[#FF8A00] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Disclaimer
          </h1>
          <p className="text-slate-400">Last updated: January 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-16 space-y-10 text-slate-300 leading-relaxed">
        <section className="rounded-2xl border border-[#FF8A00]/30 bg-[#FF8A00]/5 p-6">
          <p className="font-semibold text-slate-100">
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business
            success. The platform provides education, strategy, organization, and readiness tools.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Not Financial, Legal, or Credit Repair Advice</h2>
          <p>
            Content on PEN2PRO — including roadmaps, funding readiness checklists, credit-building steps, and
            strategy guidance — is for educational and organizational purposes only. It is not a substitute for
            advice from a licensed accountant, attorney, credit counselor, or financial advisor. Consult a
            qualified professional before making financial, legal, or credit-related decisions.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Business Results Vary</h2>
          <p>
            Any examples, figures, or growth plans shown on PEN2PRO are illustrative. Actual results depend on
            your market, effort, resources, and execution, and are not guaranteed or typical.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Third-Party &amp; Affiliate Links</h2>
          <p>
            PEN2PRO links to third-party services (LLC formation, business banking, credit tools, funding
            partners, and other affiliate resources) for your convenience. We may earn a commission from these
            links. We do not control and are not responsible for the products, services, or outcomes provided
            by third parties.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">AI-Generated Content</h2>
          <p>
            Roadmaps and strategy output are generated with the help of AI and should be reviewed with your own
            judgment before you act on them. PEN2PRO does its best to provide realistic, specific guidance, but
            no roadmap can account for every detail of your individual situation.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Questions</h2>
          <p>
            If anything here is unclear, reach out through the{" "}
            <Link to="/waitlist" className="text-[#FF8A00] underline">contact form</Link>. See also our{" "}
            <Link to="/terms" className="text-[#FF8A00] underline">Terms of Service</Link> and{" "}
            <Link to="/privacy" className="text-[#FF8A00] underline">Privacy Policy</Link>.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
