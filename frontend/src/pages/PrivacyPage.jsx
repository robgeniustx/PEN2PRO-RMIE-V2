import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | PEN2PRO";
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 text-slate-300">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: 2026</p>

        <div className="space-y-8 leading-7 text-slate-400">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">What We Collect</h2>
            <p>
              When you use PEN2PRO — including the free roadmap intake, waitlist form, account sign-up, or
              Pro/Elite/Founders checkout — we collect information you provide directly, such as your name,
              email, phone number (optional), business idea, and interest level. If you upgrade to a paid plan,
              payment details are processed securely by Stripe; PEN2PRO never stores your card information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">How We Use Your Information</h2>
            <p>
              We use the information you provide to generate your business roadmap, respond to waitlist and
              affiliate interest, operate your dashboard, improve the RMIE engine, and communicate updates
              about your plan, launch access, and relevant offers. We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Referral &amp; Source Tracking</h2>
            <p>
              If you arrive at PEN2PRO through a referral link (a URL containing <code>?ref=</code>), we store
              that referral source alongside your waitlist or account record so we can track affiliate and
              partner activity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Third-Party Services</h2>
            <p>
              PEN2PRO relies on third-party providers to operate the platform, including Stripe for payment
              processing and infrastructure providers for hosting. These providers process data only as
              necessary to deliver their service to us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Your Choices</h2>
            <p>
              You can request that we delete your waitlist entry, account, or roadmap data at any time by
              contacting us. You may also opt out of non-essential email communication at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Contact</h2>
            <p>
              Questions about this policy can be directed to the PEN2PRO team through the contact options
              listed on the site.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
