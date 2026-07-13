import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-6 font-display text-4xl font-black md:text-5xl">Privacy Policy</h1>
          <p className="mb-8 text-sm text-slate-500">Last updated: 2026</p>

          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              PEN2PRO ("we," "us," "our") collects the information you provide directly — such as your name, email,
              phone number, business idea details, and interest level — when you use the free roadmap tool, join the
              waitlist, create an account, or contact us. We also collect basic usage data (pages visited, features
              used) to improve the platform.
            </p>
            <h2 className="text-xl font-bold text-white pt-4">How we use your information</h2>
            <p>
              We use the information you provide to generate your business roadmap, respond to inquiries, send
              updates about PEN2PRO plans and features, and improve our AI-powered tools. We do not sell your
              personal information to third parties.
            </p>
            <h2 className="text-xl font-bold text-white pt-4">Sharing</h2>
            <p>
              We may share limited data with service providers who help us operate PEN2PRO (hosting, email
              delivery, payment processing, analytics) under confidentiality obligations. We may disclose
              information if required by law.
            </p>
            <h2 className="text-xl font-bold text-white pt-4">Your choices</h2>
            <p>
              You can request access to, correction of, or deletion of your personal information at any time by
              contacting us. You can unsubscribe from marketing emails using the link in any email we send.
            </p>
            <h2 className="text-xl font-bold text-white pt-4">Contact</h2>
            <p>
              Questions about this policy can be sent through the contact options on our{" "}
              <Link to="/about" className="text-[#1E88E5] hover:underline">About page</Link>.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              View Terms of Service
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              View Disclaimer
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
