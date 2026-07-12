import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6">Privacy Policy</h1>
        <p className="text-slate-400 mb-8">
          Last updated: {new Date().getFullYear()}. PEN2PRO ("we," "us," "our") respects your
          privacy. This policy explains what information we collect, how we use it, and the
          choices you have.
        </p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Information We Collect</h2>
            <p>
              We collect information you provide directly, such as your name, email, phone
              number, business idea details, and roadmap intake answers when you use the
              Starter Roadmap, join the waitlist, or create an account. We also collect basic
              usage data (pages visited, features used) to improve the platform.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">How We Use Your Information</h2>
            <p>
              We use your information to generate your business roadmap, respond to inquiries,
              improve PEN2PRO, communicate updates about Pro, Elite, and Founders access, and
              maintain platform security. We do not sell your personal information.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Sharing</h2>
            <p>
              We may share limited data with service providers who help us operate PEN2PRO
              (hosting, email, payment processing, analytics). Affiliate and funding partner
              referrals only occur when you choose to click those links.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your data at any time by
              contacting us. You may unsubscribe from marketing emails using the link in any
              email we send.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Contact</h2>
            <p>Questions about this policy can be sent through the Waitlist or Sign In pages.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
