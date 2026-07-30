import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-sm leading-7 text-slate-400">
          <p>Last updated: {new Date().getFullYear()}</p>
          <p>
            PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what information we
            collect, how we use it, and the choices you have.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">Information We Collect</h2>
          <p>
            We collect information you provide directly, such as your name, email, phone number, business
            idea details, and account credentials when you sign up, join the waitlist, or generate a roadmap.
            We also collect basic usage data (pages visited, features used) to improve the product.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">How We Use Information</h2>
          <p>
            We use your information to create and manage your account, generate your business roadmap,
            communicate with you about your account or plan, process payments, and improve PEN2PRO. We do
            not sell your personal information.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">Sharing</h2>
          <p>
            We share information only with service providers who help us operate PEN2PRO (such as payment
            processing and hosting), or when required by law.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">Your Choices</h2>
          <p>
            You can request access to, correction of, or deletion of your personal information at any time
            by contacting us. You may also unsubscribe from marketing emails using the link in any email.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">Contact</h2>
          <p>Questions about this policy? Reach out through the contact options on our website.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
