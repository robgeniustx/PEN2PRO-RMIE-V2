import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-slate-300">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="font-display text-3xl font-black text-white">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-7 text-slate-400">
          <p>
            PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what
            information we collect when you use the RMIE (Rapid Monetization Intelligence
            Engine) platform, waitlist, and roadmap tools, and how that information is used.
          </p>

          <div>
            <h2 className="text-lg font-bold text-white">Information We Collect</h2>
            <p className="mt-2">
              Name, email, phone number (optional), business idea details, and account
              information you submit through the roadmap builder, waitlist, or sign-up forms.
              We also collect basic usage data to improve the platform.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white">How We Use It</h2>
            <p className="mt-2">
              To generate your roadmap and blueprint output, respond to waitlist and account
              requests, improve PEN2PRO's tools, and communicate updates about your plan,
              tier, or the platform.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white">Data Sharing</h2>
            <p className="mt-2">
              We do not sell your personal information. Data may be shared with service
              providers (payment processing, hosting, email delivery) strictly to operate the
              platform.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white">Your Choices</h2>
            <p className="mt-2">
              You can request access to, correction of, or deletion of your data at any time
              by contacting support.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
