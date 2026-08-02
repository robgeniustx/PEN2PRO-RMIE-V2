import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | PEN2PRO";
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-6 font-display text-4xl font-black md:text-5xl">Privacy Policy</h1>
          <p className="mb-10 text-sm text-slate-500">Last updated: {new Date().getFullYear()}</p>

          <div className="space-y-8 text-slate-300 leading-relaxed">
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">What We Collect</h2>
              <p>
                When you use PEN2PRO, we collect information you provide directly — such as your name, email,
                phone number, business idea details, and roadmap intake answers — along with basic usage data
                (pages visited, features used) to improve the product.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">How We Use It</h2>
              <p>
                We use your information to generate your business roadmap, manage your account, respond to
                waitlist and support requests, process payments for Pro, Elite, and Founders plans, and improve
                PEN2PRO's tools. We do not sell your personal information to third parties.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Payment Data</h2>
              <p>
                Subscription payments are processed securely through Stripe. PEN2PRO does not store your full
                credit card number on its own servers.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Third-Party Links</h2>
              <p>
                Pages like Affiliate, Funding, and Credit Repair may link to third-party partners (LLC formation,
                banking, credit, or funding providers). Those partners have their own privacy policies, and
                PEN2PRO is not responsible for how they handle your data.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Your Choices</h2>
              <p>
                You can request access to, correction of, or deletion of your personal data at any time by
                contacting us. You may also unsubscribe from marketing emails using the link in any email we
                send.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Contact</h2>
              <p>Questions about this policy? Reach out through the waitlist form or your account dashboard.</p>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 sm:flex-row">
            <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Terms of Service
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
