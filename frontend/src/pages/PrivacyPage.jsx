import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-semibold text-[#1E88E5] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400">Last updated: January 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-16 space-y-10 text-slate-300 leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Information We Collect</h2>
          <p>
            When you use PEN2PRO, we collect information you provide directly — such as your name, email,
            phone number, business idea, and roadmap intake answers — along with basic usage data (pages
            visited, features used, device/browser type) needed to operate and improve the platform.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">How We Use Your Information</h2>
          <p>
            We use your information to generate your business roadmap, manage your account and subscription
            tier, communicate with you about your plan or the waitlist, process payments through our payment
            provider, and improve the accuracy and usefulness of PEN2PRO's AI-generated output.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">How We Protect Your Information</h2>
          <p>
            We use industry-standard safeguards to protect your data, including encrypted connections (HTTPS)
            and access controls on our systems. No system is 100% secure, and we cannot guarantee absolute
            security of information transmitted to or stored by PEN2PRO.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Sharing of Information</h2>
          <p>
            We do not sell your personal information. We may share limited data with service providers who
            help us operate the platform (payment processing, hosting, analytics, email delivery), and with
            affiliate partners only when you choose to engage with an affiliate link or resource.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Your Choices</h2>
          <p>
            You can request access to, correction of, or deletion of your personal information at any time by
            contacting us. You may also unsubscribe from marketing emails using the link in any message we send.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Contact</h2>
          <p>
            Questions about this policy can be sent through the{" "}
            <Link to="/waitlist" className="text-[#1E88E5] underline">contact form</Link>.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
