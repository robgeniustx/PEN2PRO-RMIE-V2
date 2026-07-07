import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | PEN2PRO";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
          <h1 className="mb-8 font-display text-3xl font-black md:text-4xl">Privacy Policy</h1>
          <div className="space-y-6 text-[1.02rem] leading-[1.85] text-slate-300">
            <p>
              PEN2PRO ("we", "us", "our") respects your privacy. This policy explains what information
              we collect when you use the platform, how we use it, and the choices you have.
            </p>
            <p>
              <strong className="text-white">Information we collect:</strong> account details (name, email,
              phone), business roadmap intake responses, and usage data such as pages visited and features
              used. If you join the waitlist, we also collect your interest level and referral source.
            </p>
            <p>
              <strong className="text-white">How we use it:</strong> to generate your roadmap and dashboard,
              to communicate about your account and product updates, to improve PEN2PRO, and to evaluate
              waitlist and upgrade interest.
            </p>
            <p>
              <strong className="text-white">What we don't do:</strong> we don't sell your personal
              information to third parties.
            </p>
            <p>
              <strong className="text-white">Your choices:</strong> you can request access to, correction
              of, or deletion of your data at any time by contacting us.
            </p>
            <p className="text-sm text-slate-500">
              This page is a summary for informational purposes and does not constitute legal advice.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
