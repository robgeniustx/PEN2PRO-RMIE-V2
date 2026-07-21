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
          <h1 className="font-display text-3xl font-black md:text-4xl">Terms of Service</h1>
          <p className="mt-3 text-sm text-slate-500">Last updated: {new Date().getFullYear()}</p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-slate-400">
            <p>
              By using PEN2PRO, you agree to these Terms of Service. If you do not agree, please
              do not use the platform.
            </p>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Using PEN2PRO</h2>
              <p>
                PEN2PRO provides AI-generated business roadmaps, strategy content, and planning
                tools through its RMIE (Rapid Monetization Intelligence Engine). Free, Pro, Elite,
                and Founders tiers unlock different levels of access, described on the{" "}
                <Link to="/pricing" className="text-[#FF8A00] hover:underline">Pricing page</Link>.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">No Guarantees</h2>
              <p>
                PEN2PRO provides education, strategy, organization, and readiness tools. We do not
                guarantee income, business success, funding approval, loan approval, or credit
                repair results. Outcomes depend on your effort, market conditions, and factors
                outside our control.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Accounts & Payments</h2>
              <p>
                You are responsible for the accuracy of information you provide and for keeping
                your account credentials secure. Paid tiers (Pro, Elite, Founders) are billed as
                described at checkout. You may cancel a subscription at any time; access continues
                through the end of the current billing period.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Acceptable Use</h2>
              <p>
                You agree not to misuse PEN2PRO — including attempting to disrupt the platform,
                reverse-engineer its systems, or use generated content for unlawful purposes.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Changes to These Terms</h2>
              <p>
                We may update these terms as PEN2PRO evolves. Continued use of the platform after
                changes take effect means you accept the updated terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
