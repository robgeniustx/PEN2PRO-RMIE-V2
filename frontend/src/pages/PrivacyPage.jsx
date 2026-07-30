import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            PEN2PRO respects the trust you place in us when you share your business idea, contact
            details, and personal story. This policy explains what we collect and how we use it.
          </p>

          <h2 className="font-display text-xl font-bold text-white pt-4">Information We Collect</h2>
          <p>
            When you create an account, generate a roadmap, join the waitlist, or contact support,
            we may collect your name, email, phone number (optional), business idea, and interest
            level (Free Roadmap, Pro, Elite, Founders, Affiliate, Funding, or Credit Repair). If you
            arrive via a referral link, we record the referral source.
          </p>

          <h2 className="font-display text-xl font-bold text-white pt-4">How We Use It</h2>
          <p>
            We use this information to generate your roadmap, manage your account and subscription,
            follow up on waitlist signups, improve the platform, and communicate with you about
            PEN2PRO features and offers. We do not sell your personal information.
          </p>

          <h2 className="font-display text-xl font-bold text-white pt-4">Payments</h2>
          <p>
            Subscription payments for Pro, Elite, and Founders are processed by Stripe. PEN2PRO does
            not store your full card number — Stripe handles payment data under its own security and
            privacy standards.
          </p>

          <h2 className="font-display text-xl font-bold text-white pt-4">Affiliate &amp; Partner Links</h2>
          <p>
            Pages like Affiliate, Funding, and Credit Repair link to third-party partners (LLC
            formation, banking, credit, funding, domains, bookkeeping, payment processing, CRM,
            insurance, and marketing tools). Clicking those links may share limited referral data
            with the partner. Review each partner's own privacy policy before submitting your
            information to them.
          </p>

          <h2 className="font-display text-xl font-bold text-white pt-4">Data Security</h2>
          <p>
            We take reasonable technical and administrative steps to protect your data. No system is
            perfectly secure, so we cannot guarantee absolute security of information transmitted to
            or stored on the platform.
          </p>

          <h2 className="font-display text-xl font-bold text-white pt-4">Your Choices</h2>
          <p>
            You can request access to, correction of, or deletion of your personal information at
            any time by contacting support. You can unsubscribe from marketing emails using the link
            in any message we send.
          </p>

          <h2 className="font-display text-xl font-bold text-white pt-4">Changes to This Policy</h2>
          <p>
            We may update this policy as PEN2PRO adds new features. Material changes will be
            reflected by an updated date on this page.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
