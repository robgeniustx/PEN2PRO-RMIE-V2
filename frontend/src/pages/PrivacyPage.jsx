import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    content: [
      "When you sign up, create an account, or join the waitlist, we collect your name, email address, phone number (optional), and business idea details you voluntarily provide.",
      "When you use the RMIE roadmap engine, we store the inputs and outputs of your business blueprint sessions so you can access them later.",
      "We automatically collect basic usage data including pages visited, features used, session duration, and browser/device type to improve the platform.",
      "If you make a purchase, our payment processor (Stripe) handles all financial data. PEN2PRO never stores credit card numbers or full payment details on our servers.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To deliver and improve the PEN2PRO RMIE platform and its features.",
      "To send you account-related communications, product updates, and platform announcements.",
      "To personalize your roadmap experience and surface relevant tools based on your business type and goals.",
      "To analyze platform usage patterns and improve the quality of AI-generated outputs.",
      "To process payments and fulfill subscription access.",
      "To respond to support requests and questions you send us.",
    ],
  },
  {
    title: "Information Sharing",
    content: [
      "PEN2PRO does not sell, rent, or trade your personal information to third parties for marketing purposes.",
      "We use trusted service providers (including Stripe for payments, OpenAI for AI processing, and cloud infrastructure providers) who access your data only to perform services on our behalf.",
      "We may disclose information if required by law, subpoena, or court order, or if we believe disclosure is necessary to protect the rights, property, or safety of PEN2PRO, our users, or the public.",
      "If PEN2PRO is acquired or merges with another company, your information may be transferred as part of that transaction. We will notify you via email before that happens.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We use industry-standard security measures including encrypted connections (HTTPS/TLS), secure authentication (JWT tokens), and protected database access.",
      "No system is 100% secure. While we take data protection seriously, we cannot guarantee absolute security of information transmitted over the internet.",
      "You are responsible for maintaining the confidentiality of your account credentials. Do not share your password.",
    ],
  },
  {
    title: "Cookies & Tracking",
    content: [
      "PEN2PRO uses cookies and similar technologies to maintain your session, remember your preferences, and understand how the platform is being used.",
      "We do not use third-party advertising cookies or behavioral tracking networks.",
      "You can disable cookies in your browser settings, but some features of the platform may not function properly without them.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You may request access to the personal information we hold about you at any time.",
      "You may request correction of inaccurate personal data.",
      "You may request deletion of your account and associated data by contacting us. Note that some data may be retained for legal or compliance purposes.",
      "You may opt out of non-essential communications at any time by clicking 'Unsubscribe' in any email or contacting us directly.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "PEN2PRO is designed for adults 18 years and older. We do not knowingly collect personal information from individuals under 18.",
      "If you believe a minor has provided us with personal information, please contact us and we will delete it promptly.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy as the platform evolves. When we do, we will update the 'Last Updated' date at the top of this page.",
      "Significant changes will be communicated via email to registered users.",
      "Continued use of PEN2PRO after policy changes constitutes your acceptance of the updated terms.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have questions about this Privacy Policy or how your data is handled, contact us at: support@pen2pro.com",
      "We will respond to privacy-related inquiries within 5 business days.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-5 border-b border-[#1A2D50]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-6">
            Legal
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-slate-400 text-lg">
            How PEN2PRO collects, uses, and protects your information.
          </p>
          <p className="mt-3 text-sm text-slate-600">Last Updated: June 15, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-5">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8 sm:p-12 space-y-12">
            <p className="text-slate-300 leading-relaxed">
              PEN2PRO ("we," "our," or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, share, and safeguard information
              when you use the PEN2PRO RMIE platform, website, and related services.
              By using PEN2PRO, you agree to the practices described in this policy.
            </p>

            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
                  <span className="w-1 h-5 rounded-full bg-[#D4A017] inline-block shrink-0" />
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((line, i) => (
                    <li key={i} className="flex gap-3 text-slate-400 leading-relaxed">
                      <span className="text-[#D4A017] mt-1 shrink-0">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8 text-center">
            <p className="text-slate-400 mb-6">Questions about your privacy or data? We're here to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/waitlist" className="btn-gold rounded-lg px-6 py-3 text-sm font-black text-[#0A0F1E]">
                Join the Waitlist
              </Link>
              <Link to="/about" className="rounded-lg border border-[#1A2D50] px-6 py-3 text-sm font-bold text-slate-300 hover:border-[#D4A017] hover:text-[#D4A017] transition-colors">
                About PEN2PRO
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
