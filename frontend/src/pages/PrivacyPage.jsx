import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: [
      "When you create an account or join our waitlist, we collect your name, email address, and optionally your phone number and business idea description.",
      "When you use our roadmap generation tools, we collect the information you provide about your business concept, target market, budget, and timeline in order to generate personalized output.",
      "We collect usage data including pages visited, features used, and session information to improve the platform.",
      "If you complete a purchase, payment processing is handled by Stripe. We do not store full credit card numbers or payment details.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "To generate your personalized AI business roadmap and deliver the core product experience.",
      "To send you product updates, onboarding emails, and relevant platform notifications. You can unsubscribe at any time.",
      "To improve our platform, fix bugs, and develop new features based on how users interact with PEN2PRO.",
      "To process payments and manage your account and subscription status.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    title: "Data Storage and Security",
    body: [
      "Your data is stored securely using industry-standard encryption and access controls.",
      "We use MongoDB Atlas for database storage with strict access controls and encryption at rest.",
      "Authentication tokens are stored locally in your browser and expire automatically.",
      "We take data security seriously but cannot guarantee absolute security of information transmitted over the internet.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "OpenAI — We use OpenAI's API to power our AI roadmap generation. Your business intake data is sent to OpenAI for processing per their terms of service.",
      "Stripe — Payment processing. Subject to Stripe's privacy policy.",
      "SendGrid or Mailgun — Email delivery. Your email address is used to send transactional and marketing emails.",
      "Twilio — For optional voice agent features, Twilio processes phone call data.",
      "We only share data with third parties necessary to deliver the PEN2PRO service.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may request access to, correction of, or deletion of your personal data by contacting us at support@pen2pro.com.",
      "You may unsubscribe from marketing emails at any time using the unsubscribe link in any email.",
      "You may delete your account at any time by contacting our support team.",
      "California residents may have additional rights under the California Consumer Privacy Act (CCPA).",
    ],
  },
  {
    title: "Cookies",
    body: [
      "PEN2PRO uses cookies and local storage to maintain your session, remember preferences, and understand how you use the platform.",
      "We use analytics tools that may place cookies to help us understand platform usage.",
      "You can control cookie settings through your browser, but disabling cookies may affect platform functionality.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "PEN2PRO is intended for users 18 years of age and older. We do not knowingly collect personal information from children under 13.",
      "If you believe a child has provided us with personal information, please contact us immediately at support@pen2pro.com.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. We will notify registered users of material changes via email.",
      "Continued use of PEN2PRO after changes are posted constitutes acceptance of the updated policy.",
      "This policy was last updated June 2026.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "For privacy-related questions or requests, contact us at support@pen2pro.com.",
      "PEN2PRO is operated by Robert Green / XLR8 Enterprises, Houston, TX.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</p>
            <h1 className="font-display text-4xl font-black text-white">Privacy Policy</h1>
            <p className="mt-3 text-sm text-slate-500">Last updated: June 2026</p>
            <p className="mt-4 text-base leading-7 text-slate-400">
              PEN2PRO is committed to protecting your privacy. This policy explains what information we collect,
              how we use it, and your rights regarding your personal data.
            </p>
          </div>

          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
                <h2 className="mb-4 text-lg font-black text-white">{section.title}</h2>
                <ul className="space-y-3">
                  {section.body.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-7 text-slate-400">
                      <span className="mt-1 shrink-0 font-bold text-teal-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link to="/terms" className="rounded-xl border border-[#1A2235] px-6 py-3 text-center text-sm font-semibold text-slate-400 hover:border-yellow-500 hover:text-yellow-400 transition">
              Terms of Service →
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2235] px-6 py-3 text-center text-sm font-semibold text-slate-400 hover:border-yellow-500 hover:text-yellow-400 transition">
              Disclaimer →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
