import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            PEN2PRO collects the information you provide directly — such as your name, email,
            phone number, and business details — to generate your roadmap, manage your account,
            and communicate with you about your plan, upgrades, and platform updates.
          </p>
          <p>
            We do not sell your personal information. Data you submit through the free roadmap
            intake, waitlist, or dashboard is used to deliver the PEN2PRO service and improve the
            platform. Aggregated, non-identifying usage data may be used to improve our AI models
            and product experience.
          </p>
          <p>
            Third-party affiliate and payment partners (such as Stripe) may process limited
            information to complete transactions. Those partners maintain their own privacy and
            security practices.
          </p>
          <p>
            You may request access to, correction of, or deletion of your personal data at any
            time by contacting support. We retain data only as long as needed to provide the
            service or as required by law.
          </p>
          <p className="text-sm text-slate-600">Last updated: 2026.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
