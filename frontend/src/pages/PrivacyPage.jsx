import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-3 md:text-5xl">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: January 2026</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">1. What We Collect</h2>
            <p>
              When you use PEN2PRO — including the free Starter roadmap, waitlist form, account sign-up, or any
              paid tier — we collect the information you provide directly: your name, email, phone number
              (optional), business idea details, and any content you enter into the roadmap builder, Builder mode,
              or Accelerator tools. We also collect basic usage data (pages visited, features used, referral
              source) to improve the product.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">2. How We Use It</h2>
            <p>
              We use your information to generate your business roadmap and blueprint output, operate your
              account and dashboard, respond to support requests, send product updates and waitlist
              notifications, and improve PEN2PRO's AI models, prompts, and features. We do not sell your personal
              information to third parties.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">3. Payment Information</h2>
            <p>
              Paid plans (Pro, Elite, Founders) are processed through Stripe. PEN2PRO does not store your credit
              card number — Stripe handles payment processing under its own security and privacy standards.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">4. Affiliate & Third-Party Links</h2>
            <p>
              Pages like Funding, Credit Repair, and Affiliate may link to third-party services (LLC formation,
              business banking, credit, funding partners, and similar tools). Once you leave PEN2PRO, that
              third party's own privacy policy applies. We are not responsible for their data practices.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">5. Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your personal data at any time by
              contacting us. Waitlist and account data is retained only as long as needed to operate the
              platform and respond to your requests.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">6. Contact</h2>
            <p>
              Questions about this policy? Reach out through the contact options on your account dashboard or the
              waitlist confirmation email.
            </p>
          </section>
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <Link to="/terms" className="btn-outline px-6 py-3 text-sm font-bold text-center">Terms of Service</Link>
          <Link to="/disclaimer" className="btn-outline px-6 py-3 text-sm font-bold text-center">Disclaimer</Link>
          <Link to="/" className="btn-gold px-6 py-3 text-sm font-bold text-center">Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
