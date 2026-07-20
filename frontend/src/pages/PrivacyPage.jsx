import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="font-display text-3xl font-black">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {new Date().getFullYear()}</p>

        <div className="mt-8 space-y-6 text-sm leading-7 text-slate-400">
          <p>
            PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what
            information we collect through the RMIE platform, how we use it, and the choices
            you have.
          </p>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Information We Collect</h2>
            <p>
              We collect information you provide directly — such as your name, email, phone
              number, and business idea details submitted through the roadmap builder, waitlist,
              or account forms — along with basic usage data (pages visited, features used)
              to improve the product.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">How We Use Information</h2>
            <p>
              We use your information to generate your roadmap, operate your account, respond to
              inquiries, send relevant updates about PEN2PRO plans and features, and improve the
              platform. We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Third-Party Services</h2>
            <p>
              We may use trusted third-party providers for payments, analytics, and
              infrastructure (such as Stripe for billing). Affiliate links on this site may
              direct you to partner services governed by their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your personal data at any
              time by contacting us. You may unsubscribe from marketing emails using the link in
              any message we send.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Contact</h2>
            <p>
              Questions about this policy? Reach out through the{" "}
              <Link to="/waitlist" className="text-[#FF8A00] hover:underline">
                waitlist form
              </Link>{" "}
              or your account contact email.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
