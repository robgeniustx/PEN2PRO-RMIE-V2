import { useEffect } from "react";
import { Link } from "react-router-dom";
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
          <h1 className="mb-2 font-display text-4xl font-black">Privacy Policy</h1>
          <p className="mb-10 text-sm text-slate-500">Last updated: {new Date().getFullYear()}</p>

          <div className="space-y-8 text-sm leading-7 text-slate-400">
            <p>
              PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what information we
              collect when you use the PEN2PRO RMIE platform, how we use it, and the choices you have.
            </p>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Information We Collect</h2>
              <p>
                We collect information you provide directly, such as your name, email, phone number, business
                idea details, and roadmap intake answers. We also collect basic usage data (pages visited,
                features used) to improve the platform.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">How We Use Your Information</h2>
              <p>
                We use your information to generate your business roadmap, manage your account, communicate
                with you about PEN2PRO updates and offers, process waitlist signups, and improve our AI
                strategy tools. We do not sell your personal information.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Data Sharing</h2>
              <p>
                We may share data with service providers who help us operate the platform (hosting, email,
                payment processing, analytics). These providers are only permitted to use your data to deliver
                services to PEN2PRO.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Your Choices</h2>
              <p>
                You can request access to, correction of, or deletion of your personal information at any
                time by contacting us. You can unsubscribe from marketing emails using the link in any email
                we send.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Contact</h2>
              <p>
                Questions about this policy? Reach out through the{" "}
                <Link to="/waitlist" className="text-[#FF8A00] hover:underline">waitlist form</Link> or your
                account dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
