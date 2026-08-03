import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what
            information we collect when you use the platform, how we use it, and the choices
            you have.
          </p>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">What we collect</h2>
            <p>
              Account details (name, email), roadmap and blueprint intake responses, waitlist
              submissions (name, email, phone, business idea, interest level, referral source),
              and basic usage analytics to improve the product.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">How we use it</h2>
            <p>
              To generate your business roadmap, operate your account and dashboard, respond to
              waitlist and support requests, and improve PEN2PRO's features. We do not sell your
              personal information.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Your choices</h2>
            <p>
              You can request access to, correction of, or deletion of your data at any time by
              contacting support. You may also unsubscribe from marketing emails at any time.
            </p>
          </div>
          <p className="text-sm text-slate-600">
            Questions about this policy can be directed to the PEN2PRO team through the contact
            options on the platform.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
