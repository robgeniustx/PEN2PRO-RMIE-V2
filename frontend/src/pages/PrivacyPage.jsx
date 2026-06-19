import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
          <h1 className="font-display text-4xl font-black text-white">Privacy Policy</h1>
          <p className="mt-3 text-slate-500">Last updated: June 2026</p>
        </div>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">Information We Collect</h2>
            <p>When you use PEN2PRO, we collect information you provide directly — including your name, email address, business idea, and any intake form responses. We may also collect usage data to improve the platform.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">How We Use Your Information</h2>
            <p>We use your information to generate your business roadmap, communicate platform updates, manage your account, and improve PEN2PRO features. We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">Waitlist &amp; Communications</h2>
            <p>If you join the PEN2PRO waitlist, your email will be used to send launch updates, product announcements, and platform news. You can unsubscribe at any time.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">Data Security</h2>
            <p>We take reasonable steps to protect your data. However, no internet transmission is 100% secure. Use PEN2PRO at your own risk and do not share sensitive financial information through general intake forms.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">Third-Party Services</h2>
            <p>PEN2PRO may integrate with third-party services including Stripe for payments, OpenAI for AI generation, and analytics tools. These services have their own privacy policies.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">Contact</h2>
            <p>For privacy concerns, email us at <span className="text-[#FF8A00]">support@pen2pro.com</span>.</p>
          </section>
        </div>

        <div className="mt-12 flex gap-4">
          <Link to="/terms" className="text-sm text-slate-500 hover:text-white transition">Terms of Service →</Link>
          <Link to="/disclaimer" className="text-sm text-slate-500 hover:text-white transition">Disclaimer →</Link>
          <Link to="/" className="text-sm text-slate-500 hover:text-white transition">Home →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
