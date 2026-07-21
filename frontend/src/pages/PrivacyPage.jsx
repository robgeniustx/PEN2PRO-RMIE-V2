import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: January 2026</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">What we collect</h2>
            <p>
              When you use PEN2PRO — whether that's building a free roadmap, joining the waitlist,
              creating an account, or upgrading to Pro, Elite, or Founders — we collect the
              information you give us directly: your name, email, phone number (if provided),
              business idea details, and account credentials. If you complete a purchase, payment
              processing is handled by Stripe; we do not store your card details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">How we use it</h2>
            <p>
              We use your information to generate your business roadmap, operate your account and
              dashboard, respond to waitlist and support requests, and improve PEN2PRO. If you
              opted into updates, we may email you about your roadmap, new features, or plan
              upgrades. You can opt out of marketing email at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">What we don't do</h2>
            <p>
              We do not sell your personal information to third parties. We do not share your
              business idea or roadmap details outside of PEN2PRO except where required to operate
              the service (for example, our AI processing provider or payment processor) or where
              required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Your choices</h2>
            <p>
              You can request a copy of your data, ask us to delete your account and associated
              data, or update your information at any time by contacting us. Deleting your account
              removes your saved roadmaps and dashboard data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Contact</h2>
            <p>
              Questions about this policy or your data? Reach out through the{" "}
              <a href="/waitlist" className="font-semibold" style={{ color: "#FF8A00" }}>
                waitlist form
              </a>{" "}
              or your account dashboard support link.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
