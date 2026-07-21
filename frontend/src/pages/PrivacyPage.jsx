import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 text-slate-300">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: {new Date().getFullYear()}</p>

        <div className="space-y-8 text-sm leading-7 text-slate-400">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Information We Collect</h2>
            <p>
              When you use PEN2PRO, we collect information you provide directly — such as your name, email,
              phone number, business idea, and roadmap intake answers — along with usage data like pages
              visited, features used, and account activity.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">How We Use Your Information</h2>
            <p>
              We use your information to generate your business roadmap, operate your account, communicate
              with you about your plan and product updates, improve PEN2PRO's AI outputs, and — where you've
              opted in — share relevant affiliate and partner offers (LLC formation, banking, credit, and
              funding resources).
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">How We Protect Your Information</h2>
            <p>
              We use industry-standard safeguards to protect your data. We do not sell your personal
              information to third parties. Payment processing is handled securely through Stripe; PEN2PRO
              does not store your card details.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your personal data at any time by
              contacting support. You can unsubscribe from marketing emails using the link in any email we
              send.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Contact</h2>
            <p>Questions about this policy? Reach out through the Waitlist or Support links on this site.</p>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn-outline px-6 py-3 text-sm font-bold text-center">Back to Home</Link>
          <Link to="/starter" className="btn-gold px-6 py-3 text-sm font-bold text-center">Start Free Roadmap</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
