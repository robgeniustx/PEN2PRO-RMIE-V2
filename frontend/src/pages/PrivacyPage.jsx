import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what
            information we collect, how we use it, and the choices you have.
          </p>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Information We Collect</h2>
            <p>
              We collect information you provide directly — name, email, phone, business idea,
              and interest level when you join the waitlist, create an account, or generate a
              roadmap. We also collect basic usage data (pages visited, features used) to improve
              the product.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">How We Use Information</h2>
            <p>
              We use your information to generate your business roadmap, communicate with you
              about your account and plan options, improve PEN2PRO, and — only if you opt in —
              send updates about Pro, Elite, and Founders access.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share data with service providers
              (such as payment processors and hosting infrastructure) strictly to operate the
              platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your data at any time by
              contacting us. Unsubscribing from emails is always available via the link in any
              message we send.
            </p>
          </section>

          <p className="text-sm text-slate-600 pt-4 border-t border-[#1A2D50]">
            Last updated: 2026. Questions about this policy can be sent to our support contact
            listed on the About page.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
