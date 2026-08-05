import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what
            information we collect through the site and roadmap tools, how we use it, and the
            choices you have.
          </p>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Information We Collect</h2>
            <p>
              Account details (name, email, phone), roadmap intake answers (business idea,
              goals, background), waitlist submissions, and basic usage analytics (pages
              visited, feature usage, referral source).
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">How We Use It</h2>
            <p>
              To generate your roadmap, operate your dashboard, respond to support requests,
              improve the platform, and — only if you opt in — send updates about Pro, Elite,
              and Founders access.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">What We Don't Do</h2>
            <p>
              We don't sell your personal information. We don't share your roadmap or intake
              answers with third parties except the service providers required to run the
              platform (hosting, payments, email).
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your data at any time by
              contacting support through the app.
            </p>
          </div>
        </div>
        <Link to="/" className="mt-10 inline-block btn-outline px-6 py-3 text-sm font-bold">
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
