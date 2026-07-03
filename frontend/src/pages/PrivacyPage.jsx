import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-8 md:text-4xl">Privacy Policy</h1>
        <div className="space-y-6 text-sm leading-7 text-slate-400">
          <p>Last updated: {new Date().getFullYear()}</p>
          <p>
            PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what information we
            collect when you use the platform, why we collect it, and how it is used.
          </p>
          <h2 className="text-white font-bold text-lg pt-4">Information We Collect</h2>
          <p>
            We collect information you provide directly, such as your name, email, phone number, business
            idea, and interest level when you complete a roadmap, join the waitlist, or create an account.
            We also collect basic usage data (pages visited, actions taken) to improve the product.
          </p>
          <h2 className="text-white font-bold text-lg pt-4">How We Use Information</h2>
          <p>
            We use your information to generate your business roadmap, communicate with you about your
            account or waitlist status, improve PEN2PRO's tools, and — where you've opted in — send updates
            about Pro, Elite, and Founders access.
          </p>
          <h2 className="text-white font-bold text-lg pt-4">Payment Information</h2>
          <p>
            Paid plans are processed through Stripe. PEN2PRO does not store your full payment card details —
            Stripe handles that data under its own security and privacy practices.
          </p>
          <h2 className="text-white font-bold text-lg pt-4">Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share limited data with service providers
            (such as payment processing or email delivery) strictly to operate the platform.
          </p>
          <h2 className="text-white font-bold text-lg pt-4">Your Choices</h2>
          <p>
            You can request access to, correction of, or deletion of your personal information at any time
            by contacting us through the platform.
          </p>
          <h2 className="text-white font-bold text-lg pt-4">Contact</h2>
          <p>Questions about this policy can be directed to the PEN2PRO team through the contact options on this site.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
