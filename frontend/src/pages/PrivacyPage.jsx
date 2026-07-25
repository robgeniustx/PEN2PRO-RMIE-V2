import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="mb-8 font-display text-4xl font-black">Privacy Policy</h1>
        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p>
            PEN2PRO collects the information you provide directly — such as your name, email, phone
            number, business idea, and roadmap intake answers — to generate your business roadmap,
            manage your account, and communicate with you about the platform.
          </p>
          <p>
            We do not sell your personal information. Data you submit through the waitlist, starter
            roadmap, or dashboard is used to operate PEN2PRO, improve the RMIE engine, and provide
            customer support. Aggregated, de-identified data may be used to improve our AI models and
            product.
          </p>
          <p>
            Third-party services we rely on (payment processing, email delivery, hosting, and
            analytics) receive only the data necessary to perform their function and are bound by
            their own privacy and security obligations.
          </p>
          <p>
            You can request access to, correction of, or deletion of your personal data at any time by
            contacting us. We retain account and roadmap data for as long as your account is active or
            as needed to provide the service.
          </p>
          <p>
            This policy may be updated as PEN2PRO grows. Continued use of the platform after changes
            means you accept the updated policy.
          </p>
        </div>
        <Link to="/" className="mt-10 inline-block text-sm font-semibold text-[#1E88E5] hover:text-white">
          ← Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
