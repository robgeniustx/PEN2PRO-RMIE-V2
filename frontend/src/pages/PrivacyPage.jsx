import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Legal</div>
        <h1 className="mb-8 font-display text-4xl font-black">Privacy Policy</h1>
        <div className="space-y-6 text-[1.05rem] leading-[1.85] text-slate-300">
          <p>PEN2PRO ("we," "us," "our") respects your privacy. This page explains what information we collect when you use the platform and how it's used.</p>
          <h2 className="text-xl font-bold text-white pt-4">Information We Collect</h2>
          <p>When you create a roadmap, join the waitlist, or create an account, we collect the information you provide directly — such as your name, email, phone number, and business idea details. We also collect basic usage data (pages visited, features used) to improve the product.</p>
          <h2 className="text-xl font-bold text-white pt-4">How We Use Your Information</h2>
          <p>We use your information to generate your business roadmap, respond to your requests, improve PEN2PRO, and — if you opt in — send updates about new features, plans, or launch availability. We do not sell your personal information to third parties.</p>
          <h2 className="text-xl font-bold text-white pt-4">Third-Party Services</h2>
          <p>PEN2PRO may use trusted third-party services for payments, hosting, analytics, and communication. These providers only receive the information necessary to perform their function.</p>
          <h2 className="text-xl font-bold text-white pt-4">Your Choices</h2>
          <p>You can request access to, correction of, or deletion of your personal data at any time by contacting us. Unsubscribing from emails is available in every message we send.</p>
          <p className="text-sm text-slate-500 pt-6">This policy may be updated as PEN2PRO grows. Continued use of the platform means you accept the current version of this policy.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
