import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16 text-slate-300">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6">Privacy Policy</h1>
        <div className="space-y-6 text-sm leading-7 text-slate-400">
          <p>
            PEN2PRO ("we," "us," "our") collects the information you provide directly — such as your
            name, email, phone number, business idea, and roadmap intake answers — to generate your
            business roadmap, operate the waitlist, and communicate with you about your account and
            PEN2PRO plans.
          </p>
          <p>
            We do not sell your personal information. We may share limited data with service
            providers (payment processing, email delivery, analytics, and hosting) strictly to
            operate the platform. Affiliate links on this site may earn PEN2PRO a commission at no
            extra cost to you.
          </p>
          <p>
            You can request access to, correction of, or deletion of your data at any time by
            contacting support. We retain waitlist and account data only as long as needed to
            provide the service or as required by law.
          </p>
          <p>
            PEN2PRO uses reasonable technical and organizational safeguards to protect your data,
            but no system is 100% secure. Continued use of the platform means you accept this
            policy as it may be updated from time to time.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link to="/starter" className="btn-gold px-6 py-3 text-sm font-bold text-center">Start Free Roadmap</Link>
          <Link to="/about" className="btn-outline px-6 py-3 text-sm font-bold text-center">Learn About PEN2PRO</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
