import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <section className="px-5 pt-16 pb-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</p>
          <h1 className="font-display text-4xl font-black text-white mb-4 md:text-5xl">Privacy Policy</h1>
          <p className="text-sm text-slate-500 mb-10">Last updated: July 2026</p>

          <div className="space-y-8 text-sm leading-7 text-slate-400">
            <p>
              PEN2PRO ("we," "our," or "the platform") respects your privacy. This policy explains what
              information we collect, how we use it, and the choices you have when you use our AI-powered
              RMIE (Rapid Monetization Intelligence Engine) tools, roadmap generator, waitlist, and related
              services.
            </p>

            <div>
              <h2 className="font-display text-xl font-bold text-white mb-3">Information We Collect</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>Account details you provide, such as name, email, and password.</li>
                <li>Business roadmap intake information, including your idea, goals, and answers you submit.</li>
                <li>Waitlist submissions, including name, email, phone (optional), business idea, and interest level.</li>
                <li>Usage data such as pages visited, features used, and referral source.</li>
                <li>Payment information processed securely through our payment provider (we do not store card numbers).</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-white mb-3">How We Use Information</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>To generate your AI business roadmap and personalize your experience.</li>
                <li>To operate, maintain, and improve the PEN2PRO platform.</li>
                <li>To communicate with you about your account, roadmap, or waitlist status.</li>
                <li>To process payments and manage Pro, Elite, or Founders access.</li>
                <li>To understand aggregate usage trends so we can improve features and content.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-white mb-3">Data Sharing</h2>
              <p>
                We do not sell your personal information. We may share limited data with trusted service
                providers (such as payment processing, hosting, and analytics) solely to operate the
                platform, and only under agreements that protect your data.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-white mb-3">Your Choices</h2>
              <p>
                You can request access to, correction of, or deletion of your personal data at any time by
                contacting us. You can unsubscribe from marketing emails using the link in any email we send.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-white mb-3">Contact</h2>
              <p>
                Questions about this policy can be sent to{" "}
                <a href="mailto:support@pen2pro.com" className="text-[#FF8A00] hover:underline">support@pen2pro.com</a>.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link to="/terms" className="btn-outline px-6 py-3 text-sm font-bold text-center">Terms of Service</Link>
            <Link to="/disclaimer" className="btn-outline px-6 py-3 text-sm font-bold text-center">Disclaimer</Link>
            <Link to="/starter" className="btn-gold px-6 py-3 text-sm font-bold text-center">Start Free Roadmap →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
