import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="font-display text-3xl font-black text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: 2026</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Information We Collect</h2>
            <p>
              When you use PEN2PRO, we collect information you provide directly — such as your name,
              email, phone number, business idea details, and roadmap intake answers — along with
              basic usage data (pages visited, features used, referral source) to improve the product.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">How We Use Your Information</h2>
            <p>
              We use your information to generate your business roadmap, operate your account,
              communicate with you about PEN2PRO plans and updates, and improve our AI roadmap engine.
              We do not sell your personal information to third parties.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Data Storage & Security</h2>
            <p>
              Your data is stored securely and access is limited to what is necessary to operate
              PEN2PRO. No system is 100% secure, and we work to continuously improve our safeguards.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Third-Party Services</h2>
            <p>
              PEN2PRO may link to third-party affiliate partners (LLC formation, banking, funding,
              credit, and marketing tools). Those partners have their own privacy policies, and
              PEN2PRO is not responsible for how they handle your data.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your personal information at
              any time by contacting us through the platform.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Contact</h2>
            <p>Questions about this policy can be directed to the PEN2PRO team through the platform contact channels.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
