import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: {new Date().getFullYear()}</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">What we collect</h2>
            <p>
              When you use PEN2PRO — including the free roadmap intake, waitlist signup, and account
              creation — we collect the information you provide directly, such as your name, email,
              phone number, business idea details, and interest level. We also collect basic usage data
              (pages visited, features used) to improve the platform.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">How we use it</h2>
            <p>
              We use your information to generate your business roadmap, communicate launch updates and
              plan details, respond to support requests, and improve PEN2PRO's AI-powered strategy tools.
              We do not sell your personal information.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Third parties</h2>
            <p>
              We use trusted third-party services for payment processing (Stripe), and may link out to
              affiliate partners for business services such as LLC formation, banking, and funding. Those
              partners have their own privacy policies governing data you share with them directly.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Your control</h2>
            <p>
              You can request access to, correction of, or deletion of your personal data at any time by
              contacting us. Removing your waitlist entry or account does not affect roadmap data you've
              already downloaded or exported.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn-gold px-6 py-3 text-sm font-bold text-center">Back to Home</Link>
          <Link to="/terms" className="btn-outline px-6 py-3 text-sm font-bold text-center">View Terms</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
