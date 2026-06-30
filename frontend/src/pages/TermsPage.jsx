import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service | PEN2PRO";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-2 font-display text-4xl font-black">Terms of Service</h1>
          <p className="mb-10 text-sm text-slate-500">Last updated: {new Date().getFullYear()}</p>

          <div className="space-y-8 text-sm leading-7 text-slate-400">
            <p>
              These Terms govern your use of PEN2PRO and the RMIE (Rapid Monetization Intelligence Engine)
              platform. By creating an account, generating a roadmap, or joining the waitlist, you agree to
              these Terms.
            </p>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">The Service</h2>
              <p>
                PEN2PRO provides AI-generated business roadmaps, strategy guidance, funding and credit
                readiness checklists, and execution tools. Plans include Free Starter, Pro, Elite, and Legacy
                Founder, each with different feature access as described on the{" "}
                <Link to="/pricing" className="text-[#FF8A00] hover:underline">Pricing page</Link>.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">No Guarantee of Results</h2>
              <p>
                PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee
                income, business success, credit repair results, funding approval, or loan approval. Results
                depend on individual effort, market conditions, and factors outside our control.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Account Responsibilities</h2>
              <p>
                You are responsible for the accuracy of information you submit and for keeping your account
                credentials secure. You agree not to misuse the platform, attempt to disrupt service, or use
                roadmap content for unlawful purposes.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Payments &amp; Upgrades</h2>
              <p>
                Pro, Elite, and Legacy Founder plans are billed as described at checkout. Pricing, features,
                and availability may change as the platform evolves. Founder-tier offers may be limited in
                quantity and time.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Changes to These Terms</h2>
              <p>
                We may update these Terms as PEN2PRO grows. Continued use of the platform after changes means
                you accept the updated Terms.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
