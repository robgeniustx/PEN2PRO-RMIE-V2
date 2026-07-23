import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | PEN2PRO";
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-8 font-display text-3xl font-black md:text-4xl">Privacy Policy</h1>

          <div className="space-y-5 text-[1.05rem] leading-[1.85] text-slate-300">
            <p>
              PEN2PRO collects the information you provide directly — such as your name, email, phone
              number, business idea, and roadmap answers — to generate your business blueprint, manage
              your account, and communicate with you about your plan, upgrades, and relevant offers.
            </p>
            <p>
              We use your information to operate the platform: generating your AI roadmap, saving your
              progress, processing payments for Pro, Elite, and Founders plans, and improving the
              product. We do not sell your personal information to third parties.
            </p>
            <p>
              Some data may be shared with service providers who help us run PEN2PRO — such as payment
              processing, hosting, analytics, and email delivery — solely to provide the service to you.
            </p>
            <p>
              You can request a copy of your data or ask us to delete your account at any time by
              contacting support. Waitlist and roadmap submissions are stored securely and used only for
              the purposes described above.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
