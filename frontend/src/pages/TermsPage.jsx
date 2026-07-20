import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="font-display text-3xl font-black">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {new Date().getFullYear()}</p>

        <div className="mt-8 space-y-6 text-sm leading-7 text-slate-400">
          <p>
            These Terms of Service govern your use of PEN2PRO, an AI-powered Rapid Monetization
            Intelligence Engine (RMIE) that helps you turn ideas, skills, and lived experience
            into business roadmaps and strategy. By using PEN2PRO, you agree to these terms.
          </p>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Use of the Platform</h2>
            <p>
              PEN2PRO provides education, strategy, planning tools, and organizational support.
              You agree to use the platform lawfully and not to misuse, resell, or scrape
              generated content or platform functionality without permission.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Plans &amp; Billing</h2>
            <p>
              Free, Pro, Elite, and Founders access levels are described on our{" "}
              <Link to="/pricing" className="text-[#FF8A00] hover:underline">
                Pricing
              </Link>{" "}
              page. Paid plans renew automatically until cancelled. You may cancel at any time
              from your account settings; access continues through the end of the paid period.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">No Guarantee of Results</h2>
            <p>
              PEN2PRO does not guarantee income, business success, funding approval, loan
              approval, or credit repair outcomes. Roadmaps, strategies, and readiness checklists
              are educational tools — results depend on your effort, market conditions, and
              factors outside our control.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Intellectual Property</h2>
            <p>
              The PEN2PRO name, brand, RMIE methodology, and platform content are owned by
              PEN2PRO. Roadmaps generated for your account are yours to use for your own
              business purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Limitation of Liability</h2>
            <p>
              PEN2PRO is provided "as is." We are not liable for business, financial, or credit
              decisions made based on platform output. See our{" "}
              <Link to="/disclaimer" className="text-[#FF8A00] hover:underline">
                Disclaimer
              </Link>{" "}
              for details.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Changes to These Terms</h2>
            <p>
              We may update these terms as the platform evolves. Continued use after changes
              means you accept the updated terms.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
