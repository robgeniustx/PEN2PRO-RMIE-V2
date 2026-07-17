import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-3xl px-5 py-16">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: January 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-14 space-y-10 text-slate-400 leading-7">
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">What We Collect</h2>
          <p>
            When you join the PEN2PRO waitlist, create an account, or generate a business roadmap, we collect
            information you provide directly — including your name, email address, phone number (optional),
            business idea, and interest level. If you arrive through a referral link, we also record the
            referral source.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">How We Use It</h2>
          <p>
            We use your information to generate your roadmap, communicate with you about your account and
            PEN2PRO updates, improve the platform, and — where you've opted in — follow up about Pro, Elite,
            or Founders access. We do not sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Third-Party Services</h2>
          <p>
            PEN2PRO uses trusted third-party providers for payment processing (Stripe), and may link out to
            vetted affiliate partners for services like LLC formation, business banking, and bookkeeping.
            Those partners have their own privacy policies governing any data you share with them directly.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Data Retention & Control</h2>
          <p>
            You can request access to, correction of, or deletion of your personal data at any time by
            contacting us. We retain waitlist and account data only as long as needed to operate the
            platform and comply with legal obligations.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Contact</h2>
          <p>
            Questions about this policy? Reach out through the contact options on our{" "}
            <a href="/about" className="text-[#FF8A00] hover:underline">About page</a>.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
