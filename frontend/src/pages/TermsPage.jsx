import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree, do not use the platform.",
      "These terms apply to all users including free users, waitlist members, and paid subscribers.",
      "PEN2PRO reserves the right to update these terms at any time. Continued use constitutes acceptance of updated terms.",
    ],
  },
  {
    title: "Description of Service",
    body: [
      "PEN2PRO is an AI-powered business development platform (Rapid Monetization Intelligence Engine — RMIE) that helps users build business roadmaps, strategies, and execution plans.",
      "The platform provides educational content, AI-generated business plans, funding readiness tools, credit strategy guidance, and business development resources.",
      "PEN2PRO does not provide legal advice, accounting services, financial advisory services, or licensed professional services of any kind.",
      "AI-generated roadmaps and strategies are educational tools, not professional business, legal, or financial advice.",
    ],
  },
  {
    title: "Account Registration",
    body: [
      "You must provide accurate, current, and complete information when creating an account.",
      "You are responsible for maintaining the confidentiality of your account credentials.",
      "You must be at least 18 years of age to create an account.",
      "You are responsible for all activity that occurs under your account.",
      "You may not share your account with others or use another person's account without authorization.",
    ],
  },
  {
    title: "Subscription and Payment",
    body: [
      "Paid plans (Pro, Elite, Founders) are billed as described at the time of purchase.",
      "All payments are processed securely through Stripe. PEN2PRO does not store payment card information.",
      "Monthly subscriptions renew automatically unless cancelled before the renewal date.",
      "Founders Lifetime access is a one-time payment with no recurring charges.",
      "Refunds are handled on a case-by-case basis. Contact support@pen2pro.com within 7 days of purchase with any billing concerns.",
      "Prices are subject to change. Existing subscribers will be notified of price changes before they take effect.",
    ],
  },
  {
    title: "Acceptable Use",
    body: [
      "You agree to use PEN2PRO for lawful business purposes only.",
      "You may not use PEN2PRO to generate content that promotes illegal activity, fraud, or harm to others.",
      "You may not attempt to reverse engineer, scrape, or copy PEN2PRO's AI models, proprietary data, or systems.",
      "You may not use PEN2PRO to harass, impersonate, or harm other users.",
      "Violations of acceptable use may result in immediate account termination without refund.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "PEN2PRO owns all rights to the platform, brand, software, AI models, and proprietary content.",
      "Business roadmaps generated using PEN2PRO are provided to you for your personal and business use.",
      "You retain ownership of the business ideas, content, and information you provide to the platform.",
      "The PEN2PRO name, logo, and brand identity are trademarks of PEN2PRO / XLR8 Enterprises. Unauthorized use is prohibited.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    body: [
      "PEN2PRO is provided 'as is' without warranties of any kind, express or implied.",
      "We do not warrant that the platform will be error-free, uninterrupted, or free from security vulnerabilities.",
      "AI-generated content may contain inaccuracies. Always verify important business, legal, and financial information with qualified professionals.",
      "PEN2PRO does not guarantee specific business results, income, funding approval, or credit improvement.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "PEN2PRO shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform.",
      "Our total liability to you for any claims arising from use of PEN2PRO shall not exceed the amount you paid to PEN2PRO in the 12 months preceding the claim.",
      "Some jurisdictions do not allow limitation of liability for certain types of damages; if applicable law restricts this limitation, it shall apply to the maximum extent permitted by law.",
    ],
  },
  {
    title: "Termination",
    body: [
      "You may cancel your account at any time by contacting support@pen2pro.com.",
      "PEN2PRO may suspend or terminate your account for violations of these terms, fraudulent activity, or non-payment.",
      "Upon termination, your access to paid features will end. Your data may be retained for a reasonable period per our Privacy Policy.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These Terms of Service are governed by the laws of the State of Texas, without regard to its conflict of law provisions.",
      "Any disputes shall be resolved through binding arbitration in Harris County, Texas, unless prohibited by applicable law.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about these Terms of Service should be directed to support@pen2pro.com.",
      "PEN2PRO is operated by Robert Green / XLR8 Enterprises, Houston, TX.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</p>
            <h1 className="font-display text-4xl font-black text-white">Terms of Service</h1>
            <p className="mt-3 text-sm text-slate-500">Last updated: June 2026</p>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Please read these Terms of Service carefully before using PEN2PRO. By using the platform,
              you agree to be bound by these terms.
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
            <Link to="/privacy" className="rounded-xl border border-[#1A2235] px-6 py-3 text-center text-sm font-semibold text-slate-400 hover:border-yellow-500 hover:text-yellow-400 transition">
              Privacy Policy →
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
