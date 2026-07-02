import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <section className="mx-auto max-w-3xl px-5 pt-20 pb-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6 md:text-5xl">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="text-slate-400 mb-10">
          Last updated: 2026. This policy explains what PEN2PRO collects, why, and how it's used.
        </p>

        <div className="space-y-8 text-slate-400 leading-7">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">What we collect</h2>
            <p>
              When you use PEN2PRO — including the free roadmap tool, waitlist form, Builder,
              Accelerator, or account sign-up — we collect the information you provide directly:
              name, email, phone (optional), business idea details, and any answers you submit
              during roadmap intake. We also collect basic usage data (pages visited, features
              used) to improve the product.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">How we use it</h2>
            <p>
              Your information is used to generate your business roadmap, manage your account,
              respond to support requests, send updates about your plan tier or the PEN2PRO
              waitlist, and improve the AI recommendations the platform gives you. We do not sell
              your personal information.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Third-party services</h2>
            <p>
              PEN2PRO uses trusted third parties to operate the platform — for example, payment
              processing (Stripe) for Pro, Elite, and Founders subscriptions, and analytics tools
              to understand how the product is used. Affiliate links on pages like Funding and
              Credit Repair go to outside companies (LLC formation, banking, credit tools, etc.);
              their own privacy policies govern any data you share with them directly.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Your choices</h2>
            <p>
              You can request access to, correction of, or deletion of your PEN2PRO account data
              at any time by contacting support. Waitlist submissions can be removed on request.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Contact</h2>
            <p>
              Questions about this policy? Reach out through the contact options on the{" "}
              <Link to="/about" className="text-[#FF8A00] hover:underline">About page</Link>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
