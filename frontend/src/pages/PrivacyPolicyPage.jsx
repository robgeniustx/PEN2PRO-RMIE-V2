import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: [
      "Account information: name, email address, and password when you create a PEN2PRO account.",
      "Roadmap and business data: the business ideas, goals, budget, and answers you provide when generating a roadmap, blueprint, or using Builder/Accelerator tools.",
      "Waitlist and contact information: name, email, optional phone number, business idea, and interest level submitted through our waitlist form.",
      "Payment information: when you upgrade to Pro, Elite, or Founders, payment is processed securely by Stripe. PEN2PRO does not store your full card number.",
      "Usage data: pages visited, features used, and general analytics collected to improve the platform.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "To generate your AI-powered business roadmap, blueprint, and strategy recommendations.",
      "To create and manage your account and subscription tier.",
      "To respond to waitlist signups, support requests, and affiliate inquiries.",
      "To send product updates, launch announcements, and account-related emails.",
      "To improve PEN2PRO's features, content, and AI output quality.",
    ],
  },
  {
    title: "3. How We Share Information",
    body: [
      "We do not sell your personal information.",
      "We share payment data with Stripe, our payment processor, solely to process transactions.",
      "We may use third-party AI providers to generate roadmap content; business idea details you submit may be sent to these providers to produce your results.",
      "We may disclose information if required by law or to protect the rights, property, or safety of PEN2PRO, our users, or others.",
    ],
  },
  {
    title: "4. Data Retention & Security",
    body: [
      "We retain account and roadmap data for as long as your account is active, or as needed to provide the service.",
      "We use reasonable technical and organizational measures to protect your data, but no system is 100% secure.",
      "You can request deletion of your account and associated data by contacting support@pen2pro.com.",
    ],
  },
  {
    title: "5. Your Choices",
    body: [
      "You may update or delete your account information at any time by contacting us.",
      "You may unsubscribe from marketing emails using the link in any email or by contacting support.",
      "Waitlist submissions can be removed on request.",
    ],
  },
  {
    title: "6. Contact Us",
    body: [
      "Questions about this Privacy Policy can be sent to support@pen2pro.com.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <section className="px-5 pb-16 pt-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</p>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: June 2026</p>

          <p className="mt-8 text-base leading-7 text-slate-400">
            PEN2PRO ("we," "us," or "our") respects your privacy. This Privacy Policy explains what
            information we collect, how we use it, and the choices you have when you use the PEN2PRO
            platform, including our website, roadmap tools, dashboard, and related services.
          </p>

          <div className="mt-10 space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-xl font-bold text-white mb-3">{section.title}</h2>
                <ul className="space-y-2">
                  {section.body.map((line) => (
                    <li key={line} className="flex gap-3 text-sm leading-6 text-slate-400">
                      <span className="mt-1 shrink-0 text-[#D4A017]">•</span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
            <p className="text-sm text-slate-400">
              Have questions about your data? See our{" "}
              <Link to="/terms" className="font-semibold text-[#D4A017] hover:underline">Terms of Service</Link>{" "}
              and{" "}
              <Link to="/disclaimer" className="font-semibold text-[#D4A017] hover:underline">Disclaimer</Link>,
              or reach out at{" "}
              <a href="mailto:support@pen2pro.com" className="font-semibold text-[#D4A017] hover:underline">support@pen2pro.com</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
