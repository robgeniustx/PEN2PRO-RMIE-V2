import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-slate-300">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="font-display text-3xl font-black text-white">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: June 15, 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-400">
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Information We Collect</h2>
            <p>
              When you use PEN2PRO — including the free roadmap intake, waitlist form, Pro/Elite/Founders
              checkout, and dashboard tools — we collect the information you provide directly, such as your
              name, email address, phone number, business idea details, and payment information (processed
              securely by Stripe; PEN2PRO never stores your card details).
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">How We Use Your Information</h2>
            <p>
              We use your information to generate your business roadmap, manage your account, process
              subscription payments, respond to support requests, and — if you opt in — send updates about
              new PEN2PRO features, pricing, and launch milestones.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Data Sharing</h2>
            <p>
              We do not sell your personal information. We share data only with the service providers
              required to operate PEN2PRO (payment processing, hosting, analytics) and only to the extent
              necessary for them to perform those services.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your personal data at any time by
              contacting support. You may unsubscribe from marketing emails using the link in any email we
              send.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Contact</h2>
            <p>Questions about this policy can be directed to the PEN2PRO support team.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
