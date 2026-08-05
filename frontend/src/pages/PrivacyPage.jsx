import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-8 md:text-4xl">Privacy Policy</h1>

        <div className="space-y-6 text-sm leading-7 text-slate-400">
          <p>
            PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what
            information we collect when you use the platform, how we use it, and the choices
            you have.
          </p>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Information We Collect</h2>
            <p>
              We collect information you provide directly, such as your name, email, phone
              number, business idea details, and waitlist interest level when you join the
              waitlist, create an account, or generate a roadmap. We also collect basic usage
              data (pages visited, features used) to improve the product.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">How We Use Information</h2>
            <p>
              We use your information to generate your business roadmap, respond to inquiries,
              improve PEN2PRO's features, and — if you opt in — send you updates about Pro,
              Elite, Founders access, and platform launch news. We do not sell your personal
              information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Data Storage & Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect your data.
              No system is 100% secure, so we cannot guarantee absolute security of information
              transmitted to PEN2PRO.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Third-Party Links</h2>
            <p>
              PEN2PRO may link to third-party affiliate partners for services like LLC
              formation, business banking, credit, and funding. Those partners have their own
              privacy policies, and PEN2PRO is not responsible for their practices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your personal
              information at any time by contacting us. You may also unsubscribe from marketing
              communications at any time.
            </p>
          </section>

          <p className="text-xs text-slate-600 pt-4">
            This policy may be updated as PEN2PRO evolves. Continued use of the platform after
            changes means you accept the updated policy.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
