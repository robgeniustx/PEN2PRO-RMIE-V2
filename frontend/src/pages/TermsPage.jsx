import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Legal</p>
          <h1 className="font-display text-4xl font-black">Terms of Service</h1>
          <p className="mt-3 text-slate-400 text-sm">Last updated: June 2026</p>
        </div>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">1. Acceptance of Terms</h2>
            <p>By accessing or using PEN2PRO ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Platform. PEN2PRO is operated by Robert Earl Green Jr. and the PEN2PRO team.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">2. Description of Service</h2>
            <p>PEN2PRO is an AI-powered business development platform — the Rapid Monetization Intelligence Engine (RMIE) — that provides business roadmaps, strategy tools, credit and funding readiness resources, CRM tools, and related business-building content. The Platform is provided for informational and planning purposes only.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">3. Account Registration</h2>
            <p>To access certain features, you must create an account. You agree to provide accurate, current information and to keep your account credentials confidential. You are responsible for all activity that occurs under your account. Notify us immediately of any unauthorized use.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">4. Subscription Plans and Payments</h2>
            <p className="mb-3">PEN2PRO offers free and paid subscription tiers (Pro, Elite, Founders Lifetime). By subscribing to a paid plan:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>You authorize PEN2PRO to charge your payment method on a recurring basis (monthly or one-time, depending on plan)</li>
              <li>Monthly subscriptions renew automatically until cancelled</li>
              <li>The Founders Lifetime plan is a one-time purchase with no recurring charges</li>
              <li>Refunds are not guaranteed but may be considered within 7 days of purchase for billing errors</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">5. No Guarantee of Results</h2>
            <p>PEN2PRO provides educational content, planning tools, and AI-generated recommendations. We do not guarantee any specific business outcome, income level, credit approval, funding approval, or other result. Success depends entirely on your own effort, decisions, market conditions, and circumstances beyond our control.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">6. Acceptable Use</h2>
            <p className="mb-3">You agree not to use the Platform to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>Violate any applicable laws or regulations</li>
              <li>Submit false, fraudulent, or misleading information</li>
              <li>Attempt to reverse engineer, copy, or redistribute platform content without permission</li>
              <li>Use AI outputs to misrepresent yourself in financial or legal contexts</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">7. Intellectual Property</h2>
            <p>All content, design, software, and branding on the Platform is owned by PEN2PRO and protected by applicable intellectual property laws. Your business roadmaps and data belong to you. PEN2PRO retains the right to use anonymized, aggregated data to improve the platform.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, PEN2PRO shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Platform, including lost profits, data loss, or business interruption.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">9. Changes to Terms</h2>
            <p>We may update these Terms at any time. Continued use of the Platform after changes constitutes acceptance of the updated Terms. We will notify registered users of material changes via email.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">10. Contact</h2>
            <p>Questions about these Terms? Contact us at: <span className="text-[#FF8A00]">support@pen2pro.com</span></p>
          </section>
        </div>

        <div className="mt-12 border-t border-[#1A2D50] pt-8 flex gap-4">
          <Link to="/privacy" className="text-sm text-slate-400 hover:text-white">Privacy Policy</Link>
          <Link to="/disclaimer" className="text-sm text-[#FF8A00] hover:underline">Disclaimer</Link>
          <Link to="/" className="text-sm text-slate-400 hover:text-white">Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
