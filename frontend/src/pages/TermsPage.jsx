import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
          <h1 className="font-display text-4xl font-black text-white">Terms of Service</h1>
          <p className="mt-3 text-slate-500">Last updated: June 2026</p>
        </div>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">Acceptance of Terms</h2>
            <p>By using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform. PEN2PRO reserves the right to update these terms at any time.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">Platform Use</h2>
            <p>PEN2PRO provides AI-powered business roadmaps, strategy tools, and educational resources. The platform is designed to help users plan and structure business ideas. It is not a substitute for licensed legal, financial, or accounting advice.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">No Guarantee of Results</h2>
            <p>PEN2PRO does not guarantee business success, income generation, funding approval, or credit improvement. Results depend entirely on the individual user's effort, market conditions, and execution. The roadmaps and strategies generated are starting points, not guarantees.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">Subscriptions &amp; Payments</h2>
            <p>Paid plans are billed monthly or as a one-time payment (Founders Lifetime). Subscriptions can be cancelled at any time. Refunds are not guaranteed after access has been granted. Contact support for billing issues.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">Prohibited Use</h2>
            <p>You may not use PEN2PRO to generate fraudulent business plans, impersonate others, or violate any applicable law. Accounts found in violation may be terminated without refund.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">Intellectual Property</h2>
            <p>PEN2PRO, RMIE, and all associated branding, content, and code are owned by PEN2PRO. Generated roadmaps are provided for your use. You may not resell, sublicense, or redistribute platform output as your own product.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">Contact</h2>
            <p>For questions about these terms, contact <span className="text-[#FF8A00]">support@pen2pro.com</span>.</p>
          </section>
        </div>

        <div className="mt-12 flex gap-4">
          <Link to="/privacy" className="text-sm text-slate-500 hover:text-white transition">Privacy Policy →</Link>
          <Link to="/disclaimer" className="text-sm text-slate-500 hover:text-white transition">Disclaimer →</Link>
          <Link to="/" className="text-sm text-slate-500 hover:text-white transition">Home →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
