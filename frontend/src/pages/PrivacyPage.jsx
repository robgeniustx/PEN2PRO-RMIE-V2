import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p>
            PEN2PRO ("we", "us", "our") respects your privacy. This policy explains what
            information we collect when you use the platform, how we use it, and the choices
            you have.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Information We Collect</h2>
          <p>
            We collect information you provide directly, such as your name, email, phone
            number, and business idea details when you join the waitlist, create an account,
            or generate a roadmap. We also collect usage data (pages visited, features used)
            to improve the product.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">How We Use Information</h2>
          <p>
            We use your information to generate your roadmap, communicate with you about
            PEN2PRO updates and offers, improve our AI models and product experience, and
            provide customer support.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share data with service
            providers (such as payment processors and email delivery services) solely to
            operate the platform.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Your Choices</h2>
          <p>
            You may request access to, correction of, or deletion of your personal data at
            any time by contacting support.
          </p>
          <p className="pt-6 text-sm text-slate-600">Last updated: 2026.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
