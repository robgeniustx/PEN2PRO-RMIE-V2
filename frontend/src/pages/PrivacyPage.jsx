import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: [
      "When you use PEN2PRO, we may collect information you provide directly — such as your name, email address, phone number, business idea, and account credentials when you register or join our waitlist.",
      "We also collect usage data automatically — including pages visited, features used, time spent, and device/browser information — to help us improve the platform.",
      "If you connect third-party services or make payments through Stripe, those providers may share relevant information with us subject to their own privacy policies.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "To provide, operate, and improve the PEN2PRO platform and its features.",
      "To generate your business roadmap and personalize your experience based on the idea and goals you submit.",
      "To communicate with you about your account, updates, new features, or relevant business resources.",
      "To process payments through Stripe and manage your subscription tier.",
      "To send waitlist confirmations and platform updates if you have opted in.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    title: "Data Storage and Security",
    body: [
      "Your data is stored on secure servers and we use industry-standard encryption in transit (HTTPS/TLS) and at rest.",
      "We use JWT-based authentication to protect your account. Your password is hashed and never stored in plain text.",
      "While we take security seriously, no system is 100% secure. If you believe your account has been compromised, contact us immediately.",
    ],
  },
  {
    title: "Cookies and Tracking",
    body: [
      "PEN2PRO uses browser localStorage and session storage to keep you logged in and remember your preferences. We do not use invasive third-party tracking cookies.",
      "We may use analytics tools to understand aggregate usage patterns. These tools collect anonymized, non-identifiable data.",
    ],
  },
  {
    title: "Sharing Your Information",
    body: [
      "We do not sell, rent, or share your personal information with marketers or data brokers.",
      "We may share data with trusted service providers (Stripe for payments, OpenAI for AI processing) solely to operate the platform. These providers are contractually required to protect your data.",
      "We may disclose information if required by law, court order, or to protect the rights and safety of PEN2PRO users.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may request access to the personal data we hold about you at any time.",
      "You may request correction or deletion of your account data by contacting us at the email below.",
      "You may opt out of marketing communications at any time by clicking the unsubscribe link in any email we send.",
      "If you are in the EU or California, you may have additional rights under GDPR or CCPA. Contact us for assistance.",
    ],
  },
  {
    title: "Retention",
    body: [
      "We retain your account data for as long as your account is active or as needed to provide services.",
      "If you delete your account, we will remove your personal data within 30 days, except where required by law to retain certain records.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "PEN2PRO is not intended for use by anyone under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has submitted data to us, contact us and we will remove it promptly.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. When we do, we will update the effective date at the top of this page and notify registered users via email if the changes are material.",
      "Continued use of PEN2PRO after changes are posted constitutes your acceptance of the updated policy.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "If you have any questions about this Privacy Policy or your data, contact us at: privacy@pen2pro.com",
      "PEN2PRO — Robert Earl Green Jr., Founder",
    ],
  },
];

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy — PEN2PRO";
  }, []);

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="px-5 py-20 text-center border-b border-[#1A2D50]">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
          <h1 className="font-display text-4xl font-black md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-slate-400">Effective Date: June 15, 2026</p>
          <p className="mt-3 text-sm text-slate-500 leading-relaxed">
            PEN2PRO is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you use our platform.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-3xl px-5 py-16 space-y-12">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="mb-4 text-xl font-black text-white">{s.title}</h2>
            <div className="space-y-3">
              {s.body.map((line) => (
                <p key={line} className="text-sm text-slate-400 leading-relaxed">{line}</p>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="border-t border-[#1A2D50] px-5 py-16 text-center">
        <p className="text-slate-400 mb-6">Have questions about your privacy? We're here to help.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/waitlist" className="btn-gold rounded-xl px-6 py-3 text-sm font-black text-[#080C14]">
            Join the Waitlist
          </Link>
          <Link to="/" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
