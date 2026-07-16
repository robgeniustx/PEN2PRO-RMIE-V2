import { useEffect } from "react";
import { Link } from "react-router-dom";
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-8 font-display text-4xl font-black leading-tight md:text-5xl">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-[1.05rem] leading-[1.85] text-slate-300">
            <p>
              PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what information we collect when you use the platform, how it is used, and the choices you have.
            </p>

            <h2 className="text-xl font-bold text-white mt-10">Information We Collect</h2>
            <p>
              When you create a free roadmap, join the waitlist, sign in, or submit a form, we may collect: your name, email address, phone number (optional), business idea details, interest level (Free Roadmap, Pro, Elite, Legacy Founder, Affiliate, Funding, Credit Repair), the page you signed up from, and referral source if your link included a <code className="rounded bg-[#0F1520] px-1.5 py-0.5 text-sm">?ref=</code> parameter.
            </p>

            <h2 className="text-xl font-bold text-white mt-10">How We Use Information</h2>
            <p>
              We use the information you provide to generate your business roadmap, respond to waitlist and support requests, improve the platform, and communicate updates about PEN2PRO tiers, features, and launch timing. We do not sell your personal information to third parties.
            </p>

            <h2 className="text-xl font-bold text-white mt-10">Third-Party Services</h2>
            <p>
              PEN2PRO uses third-party providers for payments (Stripe), hosting, and analytics. These providers process data under their own privacy policies. Affiliate links to partner services (LLC formation, banking, credit, funding, and other business tools) are governed by each partner's own privacy practices once you leave PEN2PRO.
            </p>

            <h2 className="text-xl font-bold text-white mt-10">Data Retention & Security</h2>
            <p>
              We retain roadmap and waitlist data as long as needed to operate the platform and support your account. We use reasonable technical and administrative safeguards to protect your information, but no system is completely secure.
            </p>

            <h2 className="text-xl font-bold text-white mt-10">Your Choices</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information at any time by contacting support. You may unsubscribe from email communications using the link in any email we send.
            </p>

            <h2 className="text-xl font-bold text-white mt-10">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated policy.
            </p>
          </div>

          <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-center text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/waitlist" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
