import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
          <h1 className="mb-6 font-display text-4xl font-black">Privacy Policy</h1>
          <p className="mb-8 text-sm text-slate-500">Last updated: {new Date().getFullYear()}</p>

          <div className="space-y-8 text-slate-300 leading-relaxed">
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Information We Collect</h2>
              <p>
                When you use PEN2PRO — including the Starter roadmap, waitlist, dashboard, or Pro/Elite/Founders
                tools — we collect information you provide directly, such as your name, email, phone number,
                business idea details, and roadmap intake answers. We also collect basic usage data (pages
                visited, features used, referral source) to improve the platform.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">How We Use Your Information</h2>
              <p>
                We use your information to generate your business roadmap, manage your account and tier access,
                respond to waitlist and support requests, send product updates, and improve PEN2PRO's AI-powered
                tools. We do not sell your personal information to third parties.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Affiliate & Third-Party Links</h2>
              <p>
                PEN2PRO's Funding, Credit Repair, and Affiliate pages link to third-party providers (LLC
                formation, banking, credit, funding, and marketing partners). PEN2PRO may earn a commission
                when you use these links. Those third parties have their own privacy policies, and we
                encourage you to review them before providing information.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Data Security</h2>
              <p>
                We take reasonable technical and administrative measures to protect your data. No system is
                completely secure, so we cannot guarantee absolute security of information transmitted through
                the platform.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Your Choices</h2>
              <p>
                You can request access to, correction of, or deletion of your personal information at any time
                by contacting us. You may also unsubscribe from marketing emails using the link provided in
                those emails.
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-white">Contact</h2>
              <p>Questions about this policy can be directed to the PEN2PRO team through the Waitlist or Sign In page.</p>
            </div>
          </div>

          <div className="mt-12 flex gap-3">
            <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
