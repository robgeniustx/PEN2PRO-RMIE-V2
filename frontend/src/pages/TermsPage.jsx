import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
          <h1 className="mb-6 font-display text-4xl font-black">Terms of Service</h1>
          <p className="mb-8 text-sm text-slate-500">Last updated: {new Date().getFullYear()}</p>

          <div className="space-y-8 text-slate-300 leading-relaxed">
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Using PEN2PRO</h2>
              <p>
                PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources
                through the RMIE (Rapid Monetization Intelligence Engine). By using the Free, Pro, Elite, or
                Founders tiers, you agree to use the platform for lawful purposes and to provide accurate
                information during intake, roadmap, and waitlist forms.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">No Professional Advice</h2>
              <p>
                PEN2PRO's roadmaps, funding readiness checklists, credit-building guidance, and business
                strategy content are for educational and planning purposes only. They do not constitute legal,
                financial, tax, credit repair, or investment advice. You should consult a qualified professional
                before making business, legal, or financial decisions.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Subscriptions & Billing</h2>
              <p>
                Pro and Elite are billed on a recurring monthly basis. Founders Lifetime is a one-time payment
                for lifetime access to the tier and features described at time of purchase. Prices, features,
                and launch timelines may change prior to public launch; Founders members retain the pricing
                and access terms in effect at the time of their purchase.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">No Guaranteed Outcomes</h2>
              <p>
                PEN2PRO does not guarantee income, business success, funding approval, loan approval, or
                credit repair results. Outcomes depend on individual effort, execution, and market conditions.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Account & Access</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials. PEN2PRO
                may suspend or terminate access for misuse of the platform, including abuse of AI-generated
                content or violation of these terms.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Changes to These Terms</h2>
              <p>
                We may update these Terms as PEN2PRO evolves. Continued use of the platform after changes
                are posted constitutes acceptance of the updated terms.
              </p>
            </div>
          </div>

          <div className="mt-12 flex gap-3">
            <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
