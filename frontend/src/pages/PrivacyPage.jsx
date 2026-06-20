import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
          <h1 className="font-display text-4xl font-black">Privacy Policy</h1>
          <p className="mt-3 text-slate-400 text-sm">Last updated: June 2026</p>
        </div>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">1. Information We Collect</h2>
            <p>PEN2PRO collects information you provide directly, including your name, email address, phone number, and business information when you create an account, join the waitlist, or use our platform. We also collect usage data such as pages visited, features used, and session information to improve our services.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">2. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>Provide, maintain, and improve the PEN2PRO platform</li>
              <li>Generate your business roadmap and AI-powered recommendations</li>
              <li>Send you product updates, waitlist notifications, and launch announcements</li>
              <li>Process payments and manage your subscription</li>
              <li>Provide customer support and respond to your inquiries</li>
              <li>Analyze usage patterns to improve platform features</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">3. Information Sharing</h2>
            <p>PEN2PRO does not sell your personal information. We may share information with trusted third-party service providers (payment processors, email services, analytics tools) who assist us in operating the platform. These providers are contractually obligated to keep your information confidential and use it only to provide their services to us.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">4. Data Security</h2>
            <p>We implement industry-standard security measures to protect your information. All data is transmitted over encrypted HTTPS connections. Passwords are hashed and never stored in plain text. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">5. Cookies</h2>
            <p>PEN2PRO uses essential cookies to maintain your session and preferences. We do not use tracking cookies for advertising. You may disable cookies in your browser settings, but some features of the platform may not function correctly without them.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data at any time. To make a request, contact us at the email address below. We will respond within 30 days.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">7. Contact</h2>
            <p>For privacy-related questions or data requests, contact PEN2PRO at: <span className="text-[#FF8A00]">support@pen2pro.com</span></p>
          </section>
        </div>

        <div className="mt-12 border-t border-[#1A2D50] pt-8 flex gap-4">
          <Link to="/terms" className="text-sm text-[#FF8A00] hover:underline">Terms of Service</Link>
          <Link to="/disclaimer" className="text-sm text-slate-400 hover:text-white">Disclaimer</Link>
          <Link to="/" className="text-sm text-slate-400 hover:text-white">Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
