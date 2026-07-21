import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</p>
        <h1 className="font-display mb-6 text-4xl font-black text-white">Privacy Policy</h1>
        <p className="mb-8 text-sm text-slate-500">Last updated: 2026</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Information We Collect</h2>
            <p>
              PEN2PRO collects information you provide directly, including your name, email address,
              phone number, business idea details, and any content you enter while building a roadmap,
              blueprint, or waitlist submission. We also collect basic usage data such as pages visited
              and features used, to improve the platform.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">How We Use Your Information</h2>
            <p>
              We use your information to generate your business roadmap, manage your account, respond to
              support requests, communicate about your subscription tier (Free, Pro, Elite, or Founders),
              and improve the RMIE (Rapid Monetization Intelligence Engine). We do not sell your personal
              information to third parties.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Affiliate & Partner Links</h2>
            <p>
              PEN2PRO may link to third-party partners for services like LLC formation, business banking,
              business credit, funding, or bookkeeping. PEN2PRO may earn a referral commission from these
              partners. We are not responsible for the privacy practices of third-party sites.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Data Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect your information.
              However, no method of transmission or storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Your Choices</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information at any
              time by contacting us. You may also unsubscribe from marketing emails at any time.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Contact</h2>
            <p>Questions about this policy can be sent through the contact options available on the site.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
