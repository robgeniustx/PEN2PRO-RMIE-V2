import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-slate-400 leading-7">
          <p>
            PEN2PRO ("we", "us", "our") respects your privacy. This policy explains what information we
            collect, how we use it, and the choices you have.
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Information We Collect</h2>
            <p>
              We collect information you provide directly — such as your name, email, phone number, and
              business idea details — when you complete a roadmap intake, join the waitlist, create an
              account, or contact us. We also collect basic usage data (pages visited, features used,
              referral source) to improve the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">How We Use Your Information</h2>
            <p>
              We use your information to generate your business roadmap, operate your account, communicate
              with you about your plan and upgrades, improve PEN2PRO's AI outputs, and, where you've opted
              in, send updates about new features, pricing, or founder access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">How We Protect Your Information</h2>
            <p>
              We use reasonable technical and administrative safeguards to protect your data. Admin access
              to waitlist and account data is restricted and key-protected. We do not sell your personal
              information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Third-Party Services</h2>
            <p>
              PEN2PRO uses trusted third-party providers for payments, hosting, and communications (for
              example, Stripe for checkout). Affiliate links on this site may lead to partner sites with
              their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your personal data at any time by
              contacting us. You may also unsubscribe from marketing emails using the link in any message.
            </p>
          </section>

          <p className="text-sm text-slate-600">
            Questions about this policy? Reach out through the contact options on our{" "}
            <a href="/about" className="text-[#FF8A00] hover:underline">About page</a>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
