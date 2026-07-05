import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>Legal</p>
        <h1 className="mt-2 font-display text-4xl font-black text-white md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-slate-400">Last updated: {new Date().getFullYear()}</p>

        <div className="mt-10 space-y-8 text-slate-300 leading-7">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Information We Collect</h2>
            <p>
              When you use PEN2PRO, we collect information you provide directly — such as your name, email,
              phone number, business idea details, and roadmap intake answers — along with usage data like
              pages visited, features used, and tier selection.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">How We Use Your Information</h2>
            <p>
              We use your information to generate your business roadmap, personalize your dashboard, manage
              your account and subscription tier, communicate with you about your account or waitlist status,
              and improve the PEN2PRO platform.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share data with service providers who help us
              operate the platform (such as payment processing and hosting), and only as required by law.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Data Security</h2>
            <p>
              We use reasonable technical and organizational measures to protect your data. No system is
              perfectly secure, so we cannot guarantee absolute security.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your personal information at any time
              by contacting us through the platform.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
