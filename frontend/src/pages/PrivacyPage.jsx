import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-8 md:text-4xl">Privacy Policy</h1>
        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what information we
            collect when you use the platform, why we collect it, and how it's used.
          </p>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Information We Collect</h2>
            <p>
              We collect information you provide directly — such as your name, email, phone number, and
              business idea details — when you create a roadmap, join the waitlist, sign up for an account,
              or contact us. We also collect basic usage data (pages visited, features used) to improve the
              product.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">How We Use Your Information</h2>
            <p>
              We use your information to generate your roadmap, operate your account, respond to inquiries,
              improve PEN2PRO, and — where you've opted in — send updates about Pro, Elite, and Founders
              access.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Sharing</h2>
            <p>
              We do not sell your personal information. We may share data with service providers (such as
              payment processors or infrastructure providers) strictly to operate the platform.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your data at any time by contacting
              us. Unsubscribing from emails is available in every message we send.
            </p>
          </div>
          <p className="text-sm text-slate-600">Last updated: 2026.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
