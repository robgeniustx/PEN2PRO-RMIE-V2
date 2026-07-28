import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-6">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: July 2026</p>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-2">What We Collect</h2>
            <p>
              When you use PEN2PRO, we may collect information you provide directly — such as your name, email,
              phone number, business idea, and roadmap intake answers — along with basic usage data (pages visited,
              features used) to improve the platform.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-2">How We Use It</h2>
            <p>
              We use your information to generate your roadmap, manage your account, communicate updates about
              PEN2PRO, process payments for Pro, Elite, and Founders access, and improve the RMIE engine. We do not
              sell your personal information to third parties.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-2">Data Storage</h2>
            <p>
              Roadmap, waitlist, and account data is stored to operate the platform and is retained for as long as
              your account is active or as needed to provide the service.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-2">Third-Party Services</h2>
            <p>
              PEN2PRO may use trusted third-party providers for payment processing (Stripe), AI-generated content,
              analytics, and affiliate partner links. Those providers have their own privacy practices governing the
              data they process.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-2">Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your personal information at any time by
              contacting us. You may also unsubscribe from marketing emails at any time.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-white mb-2">Contact</h2>
            <p>
              Questions about this policy? Reach out through the PEN2PRO{" "}
              <Link to="/waitlist" className="text-[#FF8A00] hover:underline">waitlist form</Link> or your account
              contact once you're a member.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
