import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="font-display mt-2 text-3xl font-black sm:text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-400">
          <p>
            This Privacy Policy explains what information PEN2PRO collects, how it is used, and
            the choices you have. By using PEN2PRO, you agree to the practices described below.
          </p>

          <div>
            <h2 className="font-display text-lg font-bold text-white">Information We Collect</h2>
            <p className="mt-2">
              We collect information you provide directly, including your name, email address,
              phone number (optional), business idea details, and roadmap intake responses. We
              also collect basic usage data (pages visited, features used, referral source) to
              improve the product.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white">How We Use Your Information</h2>
            <p className="mt-2">
              We use your information to generate your business roadmap, manage your account,
              respond to waitlist and support requests, process payments for Pro/Elite/Founders
              plans, and communicate updates about PEN2PRO. We do not sell your personal
              information to third parties.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white">Payments</h2>
            <p className="mt-2">
              Paid plan checkout is processed through Stripe. PEN2PRO does not store your full
              payment card details — that information is handled directly by Stripe under its
              own privacy and security practices.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white">Affiliate &amp; Third-Party Links</h2>
            <p className="mt-2">
              Pages such as Affiliate, Funding, and Credit Repair may link to third-party
              providers (LLC formation, banking, credit, funding partners, and similar services).
              Those third parties have their own privacy policies, and PEN2PRO is not responsible
              for their data practices.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white">Data Security</h2>
            <p className="mt-2">
              We take reasonable steps to protect your information, but no online platform can
              guarantee absolute security. Please avoid sharing sensitive personal information
              (such as Social Security numbers or full account numbers) through intake forms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-white">Your Choices</h2>
            <p className="mt-2">
              You may request access to, correction of, or deletion of your personal information
              by contacting us. You can also unsubscribe from marketing emails at any time using
              the link in those emails.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link to="/waitlist" className="rounded-lg px-5 py-2.5 text-sm font-bold text-[#0A0F1E] btn-gold">
            Join the Waitlist
          </Link>
          <Link to="/terms" className="rounded-lg border border-[#1A2D50] px-5 py-2.5 text-sm font-bold text-slate-300 hover:border-[#FF8A00] hover:text-[#FF8A00] transition-colors">
            View Terms of Service
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
