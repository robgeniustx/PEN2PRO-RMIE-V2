import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="text-slate-400 mb-8">Last updated: 2026</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">What We Collect</h2>
            <p>
              PEN2PRO collects the information you provide directly — such as your name, email, phone number,
              business idea details, and roadmap intake answers — along with basic usage data (pages visited,
              features used) needed to operate and improve the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">How We Use It</h2>
            <p>
              We use your information to generate your business roadmap, manage your account and subscription tier,
              respond to waitlist and support requests, and improve PEN2PRO's AI-powered tools. We do not sell your
              personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Third-Party Services</h2>
            <p>
              PEN2PRO uses trusted third-party services for payment processing (Stripe), infrastructure, and
              affiliate partners referenced on the Affiliate, Funding, and Credit Repair pages. Those providers have
              their own privacy policies governing the data you share with them directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Data Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect your data. No online platform can
              guarantee absolute security, so please use strong, unique credentials for your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your personal data at any time by contacting
              us through the account associated with your PEN2PRO profile.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link to="/terms" className="btn-outline px-6 py-3 text-sm font-bold text-center">Terms of Service</Link>
          <Link to="/disclaimer" className="btn-outline px-6 py-3 text-sm font-bold text-center">Disclaimer</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
