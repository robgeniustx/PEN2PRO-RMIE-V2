import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
          <h1 className="font-display text-4xl font-black">Disclaimer</h1>
          <p className="mt-3 text-slate-400 text-sm">Last updated: June 2026</p>
        </div>

        <div className="mb-8 rounded-2xl border border-[#FF8A00]/30 bg-[#FF8A00]/5 p-6">
          <p className="font-bold text-[#FF8A00] text-sm uppercase tracking-widest mb-2">Important Notice</p>
          <p className="text-slate-300 leading-relaxed">PEN2PRO does not guarantee income, business success, credit improvement, funding approval, or any specific financial result. The platform provides educational content, AI-powered planning tools, and organizational resources. All outcomes depend on your individual effort, decisions, and circumstances.</p>
        </div>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">No Financial Advice</h2>
            <p>The content and tools provided by PEN2PRO do not constitute financial advice, investment advice, tax advice, or legal counsel. PEN2PRO is not a licensed financial advisor, attorney, credit counselor, or accountant. Always consult qualified professionals before making financial, legal, or business decisions.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">No Income Guarantee</h2>
            <p>Any examples of income, revenue, or business results mentioned on the Platform are illustrative and not typical. Building a successful business requires significant effort, skill, timing, and market conditions that are outside PEN2PRO's control. Individual results will vary significantly.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">No Credit Repair Guarantee</h2>
            <p>PEN2PRO's credit readiness tools and guidance are educational in nature. PEN2PRO is not a credit repair organization as defined under federal or state law, and does not promise to improve your credit score. Credit outcomes depend on individual circumstances, lender policies, and your personal credit history.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">No Funding Guarantee</h2>
            <p>PEN2PRO's funding readiness tools are organizational and educational. PEN2PRO does not guarantee that you will qualify for or receive any business loan, grant, line of credit, or other funding. Lending decisions are made solely by lenders based on their own criteria.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">AI-Generated Content</h2>
            <p>PEN2PRO uses artificial intelligence to generate business roadmaps, strategies, and recommendations. AI-generated content may contain errors, omissions, or outdated information. Always verify critical business information with appropriate professionals before acting on it.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">Affiliate Links</h2>
            <p>The PEN2PRO platform may include affiliate links to third-party products and services. If you click an affiliate link and make a purchase, PEN2PRO may receive a commission at no additional cost to you. We only recommend tools and services we believe provide genuine value, but we cannot guarantee the performance of third-party services.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">Third-Party Resources</h2>
            <p>PEN2PRO may reference or link to third-party websites, tools, lenders, or service providers. We do not control these third-party services and are not responsible for their content, terms, or practices. Engaging with third-party services is at your own risk.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">Contact</h2>
            <p>Questions about this Disclaimer? Contact us at: <span className="text-[#FF8A00]">support@pen2pro.com</span></p>
          </section>
        </div>

        <div className="mt-12 border-t border-[#1A2D50] pt-8 flex gap-4">
          <Link to="/privacy" className="text-sm text-slate-400 hover:text-white">Privacy Policy</Link>
          <Link to="/terms" className="text-sm text-slate-400 hover:text-white">Terms of Service</Link>
          <Link to="/" className="text-sm text-slate-400 hover:text-white">Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
