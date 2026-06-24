import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-24">
        <div className="mb-8">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
          <h1 className="font-display text-4xl font-black text-white">Terms of Service</h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: June 2026</p>
        </div>

        <div className="space-y-8 text-slate-300 leading-[1.8]">
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">1. Acceptance of Terms</h2>
            <p>By accessing or using PEN2PRO ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our platform.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">2. Description of Service</h2>
            <p>PEN2PRO is an AI-powered business development platform that helps users create business roadmaps, strategies, and plans. The platform provides educational tools and guidance — not licensed financial, legal, or business advisory services.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">3. User Accounts</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must be at least 18 years of age to use PEN2PRO.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">4. Payment and Subscriptions</h2>
            <p>Paid plans are billed as described at the time of purchase. Monthly subscriptions renew automatically. Lifetime plans are one-time payments. You may cancel your subscription at any time. Refunds are handled case-by-case — contact us within 7 days of purchase.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">5. Intellectual Property</h2>
            <p>PEN2PRO and its content, features, and functionality are owned by PEN2PRO and its licensors. The roadmaps and outputs generated for you are yours to use for your business purposes.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">6. Limitation of Liability</h2>
            <p>PEN2PRO is not liable for any indirect, incidental, or consequential damages arising from use of the platform. Results from using our tools depend entirely on your individual actions, market conditions, and effort. We do not guarantee income, funding approval, credit results, or business success.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">7. Termination</h2>
            <p>We reserve the right to suspend or terminate your account for violation of these terms. You may terminate your account at any time by contacting support.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">8. Contact</h2>
            <p>Questions about these terms? Email <a href="mailto:support@pen2pro.com" className="text-[#FF8A00] hover:underline">support@pen2pro.com</a>.</p>
          </section>
        </div>

        <div className="mt-12 flex gap-4">
          <Link to="/privacy" className="text-sm text-slate-500 hover:text-white transition-colors">Privacy Policy →</Link>
          <Link to="/disclaimer" className="text-sm text-slate-500 hover:text-white transition-colors">Disclaimer →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
