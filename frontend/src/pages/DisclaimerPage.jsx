import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
              Legal
            </div>
            <h1 className="font-display text-4xl font-black text-white">Disclaimer</h1>
            <p className="mt-3 text-slate-400 text-sm">Last updated: July 1, 2026</p>
          </div>

          <div className="space-y-8">

            <div className="rounded-2xl border border-[#D4A017] bg-[#D4A01708] p-6">
              <h2 className="mb-3 font-display text-lg font-bold text-white">No Income or Business Guarantee</h2>
              <p className="text-sm leading-7 text-slate-400">
                PEN2PRO does not guarantee that use of its platform will result in business success, income generation, revenue, profit, or any specific outcome. Business success depends on many factors including market conditions, execution quality, individual effort, capital, and external circumstances — none of which PEN2PRO controls.
              </p>
            </div>

            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 font-display text-lg font-bold text-white">No Funding or Credit Guarantee</h2>
              <p className="text-sm leading-7 text-slate-400">
                PEN2PRO provides education, organization tools, and readiness frameworks related to business credit and funding. PEN2PRO does not guarantee funding approval, loan approval, credit score improvement, or lender acceptance. Credit and funding outcomes depend on lender criteria, individual credit history, and financial circumstances outside of PEN2PRO's control.
              </p>
            </div>

            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 font-display text-lg font-bold text-white">Not Professional Financial, Legal, or Tax Advice</h2>
              <p className="text-sm leading-7 text-slate-400">
                PEN2PRO is an AI-powered business roadmap and strategy tool. Nothing on the PEN2PRO platform constitutes professional financial advice, investment advice, legal advice, accounting advice, or tax advice. You should consult with qualified licensed professionals for advice specific to your situation before making major financial, legal, or business decisions.
              </p>
            </div>

            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 font-display text-lg font-bold text-white">AI-Generated Content</h2>
              <p className="text-sm leading-7 text-slate-400">
                PEN2PRO uses artificial intelligence to generate business roadmaps, plans, scripts, and strategies. AI-generated content is based on patterns and data — it is not a substitute for professional consultation. Always verify AI-generated business, legal, financial, and market information with qualified experts and your own research before acting on it.
              </p>
            </div>

            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 font-display text-lg font-bold text-white">Affiliate Disclosure</h2>
              <p className="text-sm leading-7 text-slate-400">
                PEN2PRO may feature affiliate links to third-party products and services. If you purchase through an affiliate link, PEN2PRO may earn a commission at no additional cost to you. Affiliate relationships do not influence our editorial content or product recommendations. We only recommend tools and services we believe provide genuine value to entrepreneurs.
              </p>
            </div>

            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 font-display text-lg font-bold text-white">Testimonials and Examples</h2>
              <p className="text-sm leading-7 text-slate-400">
                Testimonials and results examples on the PEN2PRO platform represent individual experiences and are not a guarantee of typical results. Individual results will vary based on effort, experience, market conditions, and other factors. Past performance or examples of business growth do not guarantee future results.
              </p>
            </div>

            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 font-display text-lg font-bold text-white">External Links</h2>
              <p className="text-sm leading-7 text-slate-400">
                PEN2PRO may contain links to third-party websites, services, and resources. We do not control or endorse the content of external sites and are not responsible for their accuracy, privacy practices, or terms. Visiting external links is at your own risk.
              </p>
            </div>

            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 font-display text-lg font-bold text-white">Contact</h2>
              <p className="text-sm leading-7 text-slate-400">
                Questions about this disclaimer? Contact us at <a href="mailto:support@pen2pro.com" className="text-[#FF8A00] hover:underline">support@pen2pro.com</a>.
              </p>
            </div>

          </div>

          <div className="mt-16 flex flex-wrap gap-4 text-sm">
            <Link to="/privacy" className="text-[#FF8A00] hover:underline">Privacy Policy</Link>
            <span className="text-slate-700">·</span>
            <Link to="/terms" className="text-[#FF8A00] hover:underline">Terms of Service</Link>
            <span className="text-slate-700">·</span>
            <Link to="/" className="text-slate-500 hover:text-white">Back to Home</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
