import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-6 md:text-4xl">Privacy Policy</h1>
        <div className="space-y-6 text-sm leading-7 text-slate-400">
          <p>
            PEN2PRO ("we," "us," "our") collects the information you provide directly to us — such as your
            name, email, phone number, and business idea details — when you use the free roadmap tool, join
            the waitlist, create an account, or upgrade to a paid tier.
          </p>
          <p>
            We use this information to generate your business roadmap, respond to your requests, improve the
            platform, and communicate with you about PEN2PRO features, pricing, and launch updates. We do not
            sell your personal information to third parties.
          </p>
          <p>
            We may share limited data with service providers who help us operate the platform (such as hosting,
            email delivery, and payment processing), and only to the extent necessary for them to provide those
            services.
          </p>
          <p>
            You can request access to, correction of, or deletion of your personal data at any time by
            contacting us. We retain roadmap and account data for as long as your account is active or as
            needed to provide the service.
          </p>
          <p>
            This policy may be updated as PEN2PRO grows. Continued use of the platform after changes means you
            accept the updated policy.
          </p>
        </div>
        <div className="mt-10">
          <Link to="/" className="btn-gold inline-block px-6 py-3 text-sm font-bold">Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
