import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-slate-400 leading-7">
          <p>
            This Privacy Policy explains how PEN2PRO ("we," "our," "us") collects, uses, and protects
            information you provide when you use the PEN2PRO RMIE platform, including the free
            roadmap tool, Pro, Elite, and Founders experiences, the waitlist, and related pages.
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Information We Collect</h2>
            <p>
              We collect information you provide directly, such as your name, email address, phone
              number, business idea details, and payment information when applicable. We also collect
              usage data such as pages visited, features used, and referral source (including
              <code className="text-slate-300"> ?ref=</code> parameters).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">How We Use Information</h2>
            <p>
              We use your information to generate your business roadmap, manage your account, process
              upgrades and payments, respond to inquiries, improve the platform, and communicate
              updates about PEN2PRO, including waitlist and launch communications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">How We Protect Information</h2>
            <p>
              We use reasonable administrative and technical safeguards to protect your data. Payment
              information is processed by third-party payment processors and is not stored on our
              servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Third-Party Services</h2>
            <p>
              PEN2PRO may link to third-party affiliate partners for services such as LLC formation,
              business banking, funding, and credit resources. We are not responsible for the privacy
              practices of those third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Your Choices</h2>
            <p>
              You may request access to, correction of, or deletion of your information at any time by
              contacting us. You may also opt out of marketing communications.
            </p>
          </section>

          <p className="text-sm text-slate-600">Last updated: 2026.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
