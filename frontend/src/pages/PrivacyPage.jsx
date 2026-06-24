import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-24">
        <div className="mb-8">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
          <h1 className="font-display text-4xl font-black text-white">Privacy Policy</h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: June 2026</p>
        </div>

        <div className="space-y-8 text-slate-300 leading-[1.8]">
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">1. Information We Collect</h2>
            <p>PEN2PRO collects information you provide directly — including your name, email address, phone number, and business idea — when you sign up, join the waitlist, or use our platform. We also collect usage data to improve the product experience.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">2. How We Use Your Information</h2>
            <p>We use your information to provide and improve our services, send product updates and launch communications, personalize your roadmap experience, and process payments. We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">3. Data Security</h2>
            <p>We use industry-standard security measures to protect your data, including encrypted connections (HTTPS) and secure data storage. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">4. Cookies</h2>
            <p>PEN2PRO uses cookies and similar technologies to maintain session state, remember your preferences, and analyze site usage. You can disable cookies in your browser settings, though some features may not function correctly.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">5. Third-Party Services</h2>
            <p>We use third-party services including Stripe for payment processing, OpenAI for AI features, and SendGrid for email communications. These services have their own privacy policies governing their data handling.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">6. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at <a href="mailto:support@pen2pro.com" className="text-[#FF8A00] hover:underline">support@pen2pro.com</a>.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">7. Contact</h2>
            <p>Questions about this policy? Email us at <a href="mailto:support@pen2pro.com" className="text-[#FF8A00] hover:underline">support@pen2pro.com</a>.</p>
          </section>
        </div>

        <div className="mt-12 flex gap-4">
          <Link to="/terms" className="text-sm text-slate-500 hover:text-white transition-colors">Terms of Service →</Link>
          <Link to="/disclaimer" className="text-sm text-slate-500 hover:text-white transition-colors">Disclaimer →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
