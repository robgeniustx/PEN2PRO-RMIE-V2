import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6 md:text-5xl">
          Terms of <span className="gradient-text">Service</span>
        </h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: June 15, 2026</p>

        <div className="space-y-8 text-slate-400 text-sm leading-7">
          <section>
            <h2 className="text-white font-bold text-lg mb-2">Using PEN2PRO</h2>
            <p>
              By creating an account or using the PEN2PRO RMIE platform (Free, Pro, Elite, or Founders tiers),
              you agree to use the service for lawful business planning purposes and to provide accurate
              information in your roadmap intake.
            </p>
          </section>
          <section>
            <h2 className="text-white font-bold text-lg mb-2">Plans & Billing</h2>
            <p>
              Pro, Elite, and Founders access is billed according to the plan you select at checkout. Founders
              pricing is offered for a limited time to early adopters and is subject to availability. You may
              cancel a recurring plan at any time; access continues through the end of the current billing
              period.
            </p>
          </section>
          <section>
            <h2 className="text-white font-bold text-lg mb-2">No Guarantee of Results</h2>
            <p>
              PEN2PRO provides education, strategy, planning tools, and organizational support. We do not
              guarantee income, business success, funding approval, loan approval, or credit repair results.
              Outcomes depend on your effort, market conditions, and factors outside our control.
            </p>
          </section>
          <section>
            <h2 className="text-white font-bold text-lg mb-2">Acceptable Use</h2>
            <p>
              You agree not to misuse the platform, attempt to bypass tier access controls, resell PEN2PRO
              output as your own software, or use the platform for unlawful business activity.
            </p>
          </section>
          <section>
            <h2 className="text-white font-bold text-lg mb-2">Intellectual Property</h2>
            <p>
              The PEN2PRO platform, brand, RMIE engine, and roadmap templates are the property of PEN2PRO. Your
              business idea and the roadmap generated from it belong to you.
            </p>
          </section>
          <section>
            <h2 className="text-white font-bold text-lg mb-2">Changes to These Terms</h2>
            <p>
              We may update these terms as the platform evolves. Continued use of PEN2PRO after changes are
              posted means you accept the updated terms.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
