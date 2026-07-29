import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: July 2026</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Information We Collect</h2>
            <p>
              When you use PEN2PRO, we collect information you provide directly — such as your name, email,
              phone number, and business idea details — when you join the waitlist, create an account, or
              generate a roadmap. We also collect basic usage data (pages visited, features used, referral
              source) to understand how the platform is used and to improve it.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">How We Use Your Information</h2>
            <p>
              We use your information to generate your business roadmap, communicate with you about your
              account and PEN2PRO updates, process payments for Pro, Elite, and Founders plans, and improve
              our AI-powered tools. We do not sell your personal information to third parties.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Data Storage &amp; Security</h2>
            <p>
              We take reasonable measures to protect your data, including access controls on administrative
              systems. No method of transmission or storage is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Third-Party Services</h2>
            <p>
              PEN2PRO uses trusted third-party providers for payment processing (Stripe), AI processing, and
              analytics. These providers only receive the information necessary to perform their function and
              are bound by their own privacy and security obligations.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Your Choices</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information at any time
              by contacting us. You may also unsubscribe from marketing communications at any time.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-3">Contact</h2>
            <p>
              Questions about this policy can be directed to the PEN2PRO team through the contact options
              listed on our website.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
