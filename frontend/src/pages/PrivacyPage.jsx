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
        <p className="text-slate-400 mb-10">Last updated: {new Date().getFullYear()}</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">What We Collect</h2>
            <p>
              When you use PEN2PRO, we collect information you provide directly — such as your name, email,
              phone number, business idea, and roadmap intake answers — along with basic usage data
              (pages visited, features used, and referral source) to improve the platform.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">How We Use It</h2>
            <p>
              We use your information to generate your roadmap, respond to waitlist and support requests,
              improve PEN2PRO's tools, and — if you opt in — send updates about Pro, Elite, and Founders access.
              We do not sell your personal information.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Payments</h2>
            <p>
              Subscription payments are processed securely by Stripe. PEN2PRO does not store your full
              card details on our servers.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your data at any time by contacting
              our support team through the waitlist or dashboard.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Contact</h2>
            <p>Questions about this policy? Reach out via the contact options on our Waitlist page.</p>
          </section>
        </div>

        <div className="mt-12">
          <Link to="/" className="btn-outline px-6 py-3 text-sm font-bold inline-block">Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
