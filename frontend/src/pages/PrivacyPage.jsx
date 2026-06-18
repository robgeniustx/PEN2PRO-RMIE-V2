import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: [
      "Account information you provide when registering (name, email address, password).",
      "Business idea intake data you submit when generating a roadmap or blueprint.",
      "Waitlist form submissions including name, email, phone (optional), business idea, and interest level.",
      "Payment information processed securely through Stripe — we do not store card numbers.",
      "Usage data including pages visited, features used, and time spent on the platform.",
      "Device and browser information such as IP address, browser type, and operating system.",
      "Referral source data if you arrive via a tracked affiliate or referral link.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "To create and manage your PEN2PRO account.",
      "To generate your RMIE business roadmap and blueprint results.",
      "To send you account-related emails and updates you have opted into.",
      "To process payments and manage your subscription tier.",
      "To improve our platform, fix bugs, and develop new features.",
      "To analyze usage patterns and understand which features provide the most value.",
      "To communicate with waitlist members about platform availability and launch updates.",
      "To prevent fraud and protect the security of the platform.",
    ],
  },
  {
    title: "3. Information Sharing",
    content: [
      "We do not sell your personal information to third parties.",
      "We do not share your business idea data or roadmap content with other users.",
      "We use trusted service providers (Stripe for payments, MongoDB for data storage, OpenAI for AI generation) who are contractually bound to protect your data.",
      "We may disclose information if required by law or to protect the rights and safety of PEN2PRO and its users.",
      "Aggregate, anonymized usage statistics may be shared publicly (e.g., 'thousands of roadmaps generated').",
    ],
  },
  {
    title: "4. Data Storage and Security",
    content: [
      "Your data is stored on secure cloud infrastructure with encryption at rest and in transit.",
      "Passwords are hashed using industry-standard bcrypt — we cannot see your password.",
      "Payment data is handled exclusively by Stripe and is never stored on PEN2PRO servers.",
      "We implement access controls to limit which team members can access user data.",
      "While we take security seriously, no system is 100% secure. Please use a strong, unique password.",
    ],
  },
  {
    title: "5. Cookies and Tracking",
    content: [
      "We use essential cookies to keep you logged in and remember your preferences.",
      "We may use analytics tools to understand how users interact with the platform.",
      "We do not use advertising tracking cookies or sell your browsing behavior.",
      "You can disable cookies in your browser settings, though some features may not work correctly.",
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      "Access: You can request a copy of the personal data we hold about you.",
      "Correction: You can update your account information at any time from your dashboard.",
      "Deletion: You can request that we delete your account and associated data.",
      "Portability: You can request your roadmap and blueprint data in an exportable format (Pro/Elite/Founders tiers).",
      "Opt-out: You can unsubscribe from marketing emails at any time using the link in any email.",
      "To exercise these rights, email us at: support@pen2pro.com",
    ],
  },
  {
    title: "7. Children's Privacy",
    content: [
      "PEN2PRO is intended for users 18 years of age and older.",
      "We do not knowingly collect information from anyone under 18.",
      "If you believe a minor has provided us information, contact us and we will delete it promptly.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    content: [
      "We may update this Privacy Policy periodically as the platform evolves.",
      "We will notify registered users of material changes via email.",
      "Continued use of PEN2PRO after changes are posted constitutes acceptance of the updated policy.",
      "The 'Last Updated' date at the top of this page reflects the most recent revision.",
    ],
  },
  {
    title: "9. Contact Us",
    content: [
      "If you have questions about this Privacy Policy or how your data is handled, contact us:",
      "Email: support@pen2pro.com",
      "Website: pen2pro.com",
      "We aim to respond to all privacy-related inquiries within 5 business days.",
    ],
  },
];

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | PEN2PRO";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute top-[40%] -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="px-5 py-20 text-center border-b border-[#1A2D50]">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-4 font-display text-4xl font-black md:text-5xl">Privacy Policy</h1>
          <p className="text-slate-400">
            Last updated: June 2026. This policy explains how PEN2PRO collects, uses, and protects your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          {/* Intro */}
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <p className="text-slate-300 leading-relaxed">
              PEN2PRO ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use the PEN2PRO platform, including our website at pen2pro.com and all associated services. By using PEN2PRO, you agree to the practices described in this policy.
            </p>
          </div>

          {SECTIONS.map((section) => (
            <div key={section.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-4 text-lg font-black text-white">{section.title}</h2>
              <ul className="space-y-2.5">
                {section.content.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E88E5]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 border-t border-[#1A2D50]">
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-6 text-slate-400">Have a privacy concern or question?</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-7 py-3 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/about" className="rounded-xl border border-[#1A2D50] px-7 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              About PEN2PRO
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
