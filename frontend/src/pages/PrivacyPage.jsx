import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6">Privacy Policy</h1>
        <p className="text-slate-400 mb-10">Last updated: 2026</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Information We Collect</h2>
            <p>
              PEN2PRO collects the information you provide directly — such as your name, email,
              phone number, and business idea details — when you generate a roadmap, join the
              waitlist, or create an account. We also collect basic usage data (pages visited,
              features used) to improve the platform.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">How We Use Your Information</h2>
            <p>
              We use your information to generate your business roadmap, communicate with you
              about your account and product updates, and improve PEN2PRO's AI tools. We do not
              sell your personal information to third parties.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Data Storage &amp; Security</h2>
            <p>
              Your data is stored on secured infrastructure. We take reasonable technical and
              organizational measures to protect your information, but no system is 100% secure.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal data at any
              time by contacting support through the platform.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link to="/" className="btn-gold px-6 py-3 text-sm font-bold">Back Home</Link>
          <Link to="/terms" className="btn-outline px-6 py-3 text-sm font-bold">Terms of Service</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
