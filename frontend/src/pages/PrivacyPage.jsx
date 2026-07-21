import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what
            information we collect when you use the PEN2PRO RMIE platform, how we use it, and
            the choices you have.
          </p>

          <section>
            <h2 className="text-white font-bold text-lg mb-2">Information We Collect</h2>
            <p>
              When you create a roadmap, join the waitlist, or create an account, we collect the
              information you provide directly — such as your name, email, phone number, and
              business idea details — along with basic usage data (pages visited, features used)
              to improve the product.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-2">How We Use Your Information</h2>
            <p>
              We use your information to generate your roadmap, operate your account, respond to
              you, improve PEN2PRO, and — if you opt in — send you updates about Pro, Elite, and
              Founders access. We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-2">Data Storage & Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect your data. No
              method of transmission or storage is 100% secure, so we can't guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-2">Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your personal information
              at any time by contacting us. You can also unsubscribe from emails using the link
              in any message we send.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-2">Contact</h2>
            <p>Questions about this policy? Reach out through the Waitlist or Sign In pages.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
