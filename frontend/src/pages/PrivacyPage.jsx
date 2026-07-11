import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="mt-2 font-display text-4xl font-black">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: January 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-400">
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">What we collect</h2>
            <p>
              PEN2PRO collects the information you provide directly — name, email, phone
              (optional), business idea details, and roadmap intake answers — along with basic
              usage data (pages visited, features used) to improve the platform and RMIE
              recommendations.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">How we use your data</h2>
            <p>
              We use your information to generate your business roadmap, respond to waitlist and
              account requests, send product updates you've opted into, and improve PEN2PRO's AI
              recommendations. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Third-party services</h2>
            <p>
              PEN2PRO may use trusted third-party services for payment processing, hosting,
              analytics, and affiliate partner referrals (LLC formation, business banking, credit,
              and funding partners). Those providers process data under their own privacy
              policies.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Your choices</h2>
            <p>
              You can request a copy of your data, ask us to delete your account information, or
              unsubscribe from communications at any time by contacting support.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Contact</h2>
            <p>
              Questions about this policy? Reach out through the{" "}
              <Link to="/waitlist" className="text-[#FF8A00] hover:underline">
                waitlist form
              </Link>{" "}
              or your account contact channel.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
