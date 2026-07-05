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
      <main className="mx-auto max-w-3xl px-5 py-24">
        <h1 className="mb-2 font-display text-4xl font-black">Privacy Policy</h1>
        <p className="mb-10 text-sm text-slate-500">Last updated: 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-slate-300">
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">What we collect</h2>
            <p>
              When you use PEN2PRO — creating a roadmap, joining the waitlist, signing up, or
              contacting us — we collect the information you provide directly, such as your name,
              email, phone number, business idea, and account details, along with basic usage data
              (pages visited, features used) to improve the product.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">How we use it</h2>
            <p>
              We use your information to generate your roadmap, operate your account, respond to
              you, improve PEN2PRO, and — if you opt in — send you updates about Pro, Elite, and
              Founders access. We do not sell your personal information.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Third-party services</h2>
            <p>
              PEN2PRO uses trusted third-party services to operate the platform, including payment
              processing (Stripe) and AI processing for roadmap generation. These providers only
              receive the data necessary to perform their function.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Your choices</h2>
            <p>
              You can request a copy of your data, ask us to correct it, or ask us to delete your
              account and associated data at any time by contacting us.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Contact</h2>
            <p>
              Questions about this policy? Reach out through the{" "}
              <Link to="/waitlist" className="text-[#F5C453] hover:underline">waitlist form</Link> or
              your account contact on file.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
