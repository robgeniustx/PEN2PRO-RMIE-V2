import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-3 md:text-5xl">
          Terms of <span className="gradient-text">Service</span>
        </h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: January 2026</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">1. Using PEN2PRO</h2>
            <p>
              PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that helps you turn
              ideas, skills, and lived experience into a business roadmap, launch plan, and funding/credit
              readiness strategy. By creating an account, joining the waitlist, or using the free Starter
              roadmap, you agree to these Terms.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">2. Plans & Billing</h2>
            <p>
              Free Starter access is provided at no cost. Pro and Elite are subscription plans billed monthly
              through Stripe; Founders is a one-time lifetime-access offer with limited availability. You can
              cancel a subscription at any time — access continues through the end of the current billing period.
              Prices and features are described on the Pricing page and may change with notice.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">3. Your Content</h2>
            <p>
              You own the business ideas, plans, and content you enter into PEN2PRO. You grant us a limited
              license to process that content in order to generate your roadmap, blueprint, and related AI
              output. You're responsible for the accuracy of what you submit.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">4. AI-Generated Output</h2>
            <p>
              Roadmaps, business plans, sales scripts, and strategy output are generated with the assistance of
              AI and are provided for planning and educational purposes. You are responsible for verifying legal,
              tax, licensing, and financial requirements for your specific business and location before acting.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">5. No Guarantees</h2>
            <p>
              PEN2PRO does not guarantee income, business success, credit repair results, or funding/loan
              approval. See our full <Link to="/disclaimer" className="text-[#FF8A00] hover:underline">Disclaimer</Link> for
              details.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">6. Acceptable Use</h2>
            <p>
              Don't use PEN2PRO to submit unlawful, fraudulent, or abusive content, or to attempt to disrupt or
              reverse-engineer the platform. Accounts that violate these Terms may be suspended.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">7. Changes</h2>
            <p>
              We may update these Terms as PEN2PRO evolves. Continued use of the platform after an update means
              you accept the revised Terms.
            </p>
          </section>
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <Link to="/privacy" className="btn-outline px-6 py-3 text-sm font-bold text-center">Privacy Policy</Link>
          <Link to="/disclaimer" className="btn-outline px-6 py-3 text-sm font-bold text-center">Disclaimer</Link>
          <Link to="/" className="btn-gold px-6 py-3 text-sm font-bold text-center">Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
