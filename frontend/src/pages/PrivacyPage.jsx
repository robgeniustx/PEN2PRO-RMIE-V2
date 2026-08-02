import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8 md:text-5xl">
          Privacy <span className="gradient-text">Policy</span>
        </h1>

        <div className="space-y-8 text-slate-400 leading-7">
          <p>
            PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what
            information we collect when you use the PEN2PRO RMIE platform, how we use it, and
            the choices you have.
          </p>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-2">Information We Collect</h2>
            <p>
              When you build a roadmap, join the waitlist, or create an account, we collect the
              information you provide directly — such as your name, email, phone number, business
              idea, and interest level. We also collect basic usage data (pages visited, features
              used) to improve the platform.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-2">How We Use It</h2>
            <p>
              We use your information to generate your business roadmap, communicate with you
              about your account and upgrade options, improve our AI outputs, and — if you opted
              in — reach out about Pro, Elite, Founders, affiliate, funding, or credit-repair
              resources relevant to your interest level.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-2">Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share limited data with service
              providers who help us operate the platform (payment processing, email delivery,
              hosting) under confidentiality obligations, or when required by law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-white mb-2">Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your personal data at any
              time by contacting us. You can unsubscribe from marketing communications using the
              link in any email we send.
            </p>
          </section>

          <p className="text-sm text-slate-600 pt-4 border-t border-[#1A2D50]">
            Questions about this policy? Reach out through the contact details on our{" "}
            <a href="/about" className="text-[#FF8A00] hover:underline">About page</a>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
