import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-6 md:text-4xl">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="text-slate-400 mb-10">Last updated: {new Date().getFullYear()}</p>

        <div className="space-y-8 text-sm leading-7 text-slate-400">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">What we collect</h2>
            <p>
              When you use PEN2PRO — including the free Starter Roadmap, the waitlist form, account
              sign-up, and any Pro, Elite, or Founders tools — we collect information you provide
              directly, such as your name, email, phone number, business idea, and roadmap responses.
              We also collect basic usage data (pages visited, features used, referral source) to
              improve the platform.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">How we use it</h2>
            <p>
              We use your information to generate your business roadmap, manage your account, respond
              to waitlist and support requests, process payments for paid tiers, and communicate
              updates about PEN2PRO. We do not sell your personal information to third parties.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Third-party services</h2>
            <p>
              PEN2PRO uses trusted third-party providers to operate the platform, including payment
              processing (Stripe), AI roadmap generation, and — where you choose to use them —
              affiliate partners for services like LLC formation, business banking, business credit,
              and funding. Reviewing those partners' own privacy policies before signing up is your
              responsibility.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Your choices</h2>
            <p>
              You can request access to, correction of, or deletion of your personal data at any time
              by contacting us. Removing your account does not delete records we are required to keep
              for legal, tax, or security purposes.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Contact</h2>
            <p>
              Questions about this policy can be sent through the{" "}
              <Link to="/waitlist" className="text-[#FF8A00] hover:underline">waitlist form</Link> or
              your account email.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
