import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service | PEN2PRO";
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-6 font-display text-4xl font-black md:text-5xl">Terms of Service</h1>
          <p className="mb-10 text-sm text-slate-500">Last updated: {new Date().getFullYear()}</p>

          <div className="space-y-8 text-slate-300 leading-relaxed">
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Using PEN2PRO</h2>
              <p>
                PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational content through
                our Free, Pro, Elite, and Founders plans. By creating an account or using the free roadmap tool,
                you agree to these terms.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">No Guarantee of Results</h2>
              <p>
                PEN2PRO is a planning, education, and strategy tool. We do not guarantee income, business
                success, funding approval, loan approval, or credit repair results. Outcomes depend on your
                effort, market conditions, and factors outside our control.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Subscriptions & Billing</h2>
              <p>
                Pro, Elite, and Founders plans are billed on a recurring or one-time basis as described on the
                Pricing page at checkout. You may cancel a recurring subscription at any time; access continues
                through the end of the current billing period.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Acceptable Use</h2>
              <p>
                You agree not to misuse the platform — including attempting to interfere with the service,
                scraping data without permission, or using generated content for unlawful purposes.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Intellectual Property</h2>
              <p>
                Roadmaps and content generated for your account are yours to use for your business. The PEN2PRO
                platform, brand, and underlying technology remain the property of PEN2PRO.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Changes</h2>
              <p>
                We may update these terms as PEN2PRO evolves. Continued use of the platform after changes are
                posted means you accept the updated terms.
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 sm:flex-row">
            <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Disclaimer
            </Link>
            <Link to="/" className="rounded-xl px-6 py-3 text-center text-sm font-black text-[#0A0F1E] btn-gold">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
