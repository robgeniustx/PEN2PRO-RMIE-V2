import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-slate-400 leading-7">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Information We Collect</h2>
            <p>
              When you use PEN2PRO, we collect the information you provide directly — your name,
              email, phone number (optional), business idea, and roadmap intake answers — along
              with basic usage data (pages visited, features used) to improve the platform.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">How We Use It</h2>
            <p>
              We use your information to generate your business roadmap, manage your account and
              subscription tier, respond to waitlist and support requests, and improve PEN2PRO's
              AI outputs and product experience. We do not sell your personal information.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Data Storage &amp; Security</h2>
            <p>
              Account and roadmap data is stored on secured servers. Access is limited to what is
              required to operate the platform. No system is 100% secure, and we work to apply
              reasonable safeguards to protect your data.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Third-Party Services</h2>
            <p>
              PEN2PRO may use third-party services for payments (Stripe), analytics, and affiliate
              partners referenced on pages like Funding and Credit Repair. Those services have
              their own privacy policies governing data they process.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Your Choices</h2>
            <p>
              You can request access to, correction of, or deletion of your personal information
              at any time by contacting us. Removing your account will end access to your saved
              roadmaps and dashboard data.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link to="/starter" className="btn-gold px-6 py-3 text-sm font-bold">Start Your Free Roadmap</Link>
          <Link to="/terms" className="btn-outline px-6 py-3 text-sm font-bold">Terms of Service</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
