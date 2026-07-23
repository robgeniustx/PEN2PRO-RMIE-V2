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
        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            PEN2PRO collects the information you provide directly to us — such as your name, email,
            phone number, and business idea details — when you start a roadmap, join the waitlist, create
            an account, or contact us. We use this information to generate your business roadmap, operate
            the platform, communicate with you about your account and offers, and improve PEN2PRO.
          </p>
          <p>
            We do not sell your personal information. We may share limited data with service providers
            (such as payment processors, hosting, and analytics tools) strictly to operate the platform.
            Affiliate and funding partner links may be tracked to measure referrals.
          </p>
          <p>
            You can request access to, correction of, or deletion of your data at any time by contacting
            us. We retain data only as long as needed to provide the service or as required by law.
          </p>
          <p>
            PEN2PRO uses reasonable technical and organizational safeguards to protect your data, but no
            system is completely secure. By using PEN2PRO, you consent to this policy.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link to="/starter" className="btn-gold px-8 py-3 text-sm font-bold text-center">Start Free Roadmap</Link>
          <Link to="/" className="btn-outline px-8 py-3 text-sm font-bold text-center">Back Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
