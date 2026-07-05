import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>Legal</p>
        <h1 className="mt-2 font-display text-4xl font-black text-white md:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-slate-400">Last updated: {new Date().getFullYear()}</p>

        <div className="mt-10 space-y-8 text-slate-300 leading-7">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Using PEN2PRO</h2>
            <p>
              PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that helps
              users turn ideas, skills, and lived experience into business roadmaps, strategy, and execution
              guidance. By using the platform you agree to use it lawfully and provide accurate information.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Plans and Billing</h2>
            <p>
              Free, Pro, Elite, and Founders tiers unlock different levels of access as described on our
              Pricing page. Paid tiers are billed on a recurring or lifetime basis depending on the plan
              selected at checkout. You can view your plan and manage billing from your dashboard.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">No Guarantee of Results</h2>
            <p>
              PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee
              income, business success, credit repair results, or funding/loan approval. Outcomes depend on
              individual effort, market conditions, and factors outside our control.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Intellectual Property</h2>
            <p>
              The PEN2PRO platform, brand, and generated roadmap templates are owned by PEN2PRO. Your business
              ideas and content you submit remain yours.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of PEN2PRO after changes means you
              accept the updated Terms.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
