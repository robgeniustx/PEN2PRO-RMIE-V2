import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 py-20 md:py-28">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8 md:text-5xl">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p>
            PEN2PRO ("we," "us," "our") respects your privacy. This page explains what
            information we collect when you use the platform, why we collect it, and how
            we use it.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">What we collect</h2>
          <p>
            Account information you provide (name, email, phone), roadmap and business
            intake details you submit through Starter, Builder, and Accelerator, waitlist
            signup information, and basic usage data (pages visited, features used) to
            improve the product.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">How we use it</h2>
          <p>
            To generate your roadmap and AI-driven recommendations, to communicate with
            you about your account and upgrade options, to improve PEN2PRO's tools and
            content, and to comply with legal obligations.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">What we don't do</h2>
          <p>
            We do not sell your personal information. We do not share your business
            intake data with third parties except affiliate/funding/credit partners you
            explicitly choose to engage with.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Your choices</h2>
          <p>
            You can request access to, correction of, or deletion of your data at any
            time by contacting support through your account or the waitlist form.
          </p>
          <p className="pt-6 text-sm text-slate-600">Last updated: 2026.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
