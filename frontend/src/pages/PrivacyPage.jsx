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
        <p className="text-slate-400 mb-8">
          Last updated: {new Date().getFullYear()}. This policy explains what information PEN2PRO collects
          when you use the platform and how it is used.
        </p>

        <div className="space-y-8 text-slate-300 leading-7">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Information We Collect</h2>
            <p>
              We collect information you provide directly, such as your name, email, phone number,
              business idea, and roadmap intake answers when you create a free roadmap, join the
              waitlist, or create an account. We also collect basic usage data (pages visited, features
              used) to improve the product.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">How We Use Information</h2>
            <p>
              Information is used to generate your business roadmap, communicate with you about your
              account or the waitlist, improve PEN2PRO's tools, and — where you've opted in — share
              relevant updates about Pro, Elite, and Founder access.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share data with service providers who
              help us operate the platform (hosting, email, payment processing) under confidentiality
              obligations, or when required by law.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your personal information at any
              time by contacting us. You can unsubscribe from marketing emails using the link in any
              email we send.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Contact</h2>
            <p>Questions about this policy can be sent through the contact options on our Waitlist page.</p>
          </section>
        </div>

        <div className="mt-12">
          <Link to="/" className="btn-outline px-6 py-3 text-sm font-bold">Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
