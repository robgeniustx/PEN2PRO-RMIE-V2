import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-8 md:text-4xl">Privacy Policy</h1>
        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what
            information we collect when you use the PEN2PRO RMIE platform, how we use it, and
            the choices you have.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Information We Collect</h2>
          <p>
            We collect information you provide directly — such as your name, email, phone
            number, and business idea details — when you start a free roadmap, join the
            waitlist, or create an account. We also collect basic usage data (pages visited,
            features used) to improve the platform.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">How We Use Information</h2>
          <p>
            We use your information to generate your roadmap, communicate with you about your
            account or waitlist status, improve our AI outputs, and — where you've opted in —
            share relevant partner offers (LLC formation, business banking, funding, and
            similar affiliate resources).
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share limited data with service
            providers who help us operate the platform (hosting, email, payment processing)
            under confidentiality obligations.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Your Choices</h2>
          <p>
            You can request access to, correction of, or deletion of your personal data at any
            time by contacting us. You can also unsubscribe from marketing emails at any time.
          </p>
          <p className="pt-4">
            Questions about this policy? Reach out through the waitlist form or your account
            dashboard and we'll respond directly.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
