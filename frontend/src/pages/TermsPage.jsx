import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service and our Privacy Policy.",
      "If you do not agree to these terms, do not use the platform.",
      "PEN2PRO reserves the right to update these terms at any time. Continued use after changes constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "Description of Service",
    content: [
      "PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that provides business planning tools, roadmap generation, credit and funding readiness guidance, branding direction, and related business development resources.",
      "The platform offers multiple tiers: Free (Starter), Pro, Elite, and Founders Lifetime access.",
      "PEN2PRO is an educational and organizational platform. It does not provide legal advice, financial advice, tax advice, or guaranteed business outcomes.",
    ],
  },
  {
    title: "User Accounts",
    content: [
      "You must be 18 years or older to create an account.",
      "You are responsible for maintaining the security of your account credentials.",
      "You may not share your account access with others or use another person's account.",
      "You are responsible for all activity that occurs under your account.",
      "PEN2PRO reserves the right to suspend or terminate accounts that violate these terms.",
    ],
  },
  {
    title: "Subscription Plans & Payments",
    content: [
      "Pro and Elite plans are billed monthly. Founders Lifetime is a one-time payment.",
      "All payments are processed securely through Stripe. PEN2PRO does not store your full payment information.",
      "Subscriptions auto-renew unless cancelled before the next billing cycle.",
      "To cancel your subscription, contact support@pen2pro.com before your renewal date.",
      "Refunds are handled on a case-by-case basis. Contact us within 7 days of a charge if you believe there is an error.",
      "Pricing is subject to change. Existing subscribers will receive advance notice of any pricing changes.",
    ],
  },
  {
    title: "Acceptable Use",
    content: [
      "You agree to use PEN2PRO only for lawful purposes related to legitimate business development.",
      "You may not use the platform to generate content that is fraudulent, misleading, defamatory, or illegal.",
      "You may not attempt to reverse-engineer, scrape, or replicate the PEN2PRO platform or its AI outputs for competing products.",
      "You may not attempt to gain unauthorized access to any portion of the platform or its infrastructure.",
      "You may not use automated bots or scripts to interact with the platform without prior written permission.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "The PEN2PRO platform, brand, name, logo, RMIE framework, and underlying technology are the intellectual property of PEN2PRO and its founders.",
      "AI-generated roadmaps and blueprints produced on your behalf are provided to you for your personal business use. You may not resell or redistribute them as your own product.",
      "Content you submit to PEN2PRO (business ideas, goals, intake responses) remains yours. You grant PEN2PRO a limited license to process and store that content to deliver the service.",
    ],
  },
  {
    title: "Disclaimers & Limitations",
    content: [
      "PEN2PRO is provided 'as is' without warranties of any kind, express or implied.",
      "We do not guarantee that the platform will be error-free, uninterrupted, or always available.",
      "PEN2PRO does not guarantee business success, revenue generation, credit approval, loan approval, or any specific financial outcome.",
      "AI-generated content is informational only and should not replace qualified legal, financial, or professional advice.",
      "To the maximum extent permitted by law, PEN2PRO's liability is limited to the amount you paid in the last 3 months of service.",
    ],
  },
  {
    title: "Third-Party Links & Services",
    content: [
      "PEN2PRO may include links to third-party services, partners, and affiliate programs.",
      "We are not responsible for the content, practices, or policies of third-party websites or services.",
      "Some affiliate links may result in compensation to PEN2PRO when you click or make a purchase. This does not affect our recommendations.",
    ],
  },
  {
    title: "Termination",
    content: [
      "You may close your account at any time by contacting support@pen2pro.com.",
      "PEN2PRO may suspend or terminate your access if you violate these terms, engage in abusive behavior, or if required by law.",
      "Upon termination, your access to paid features will end at the close of your current billing period.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These Terms of Service are governed by the laws of the United States.",
      "Any disputes arising from these terms will be resolved through binding arbitration rather than court proceedings, to the extent permitted by law.",
    ],
  },
  {
    title: "Contact",
    content: [
      "Questions about these terms? Contact us at: support@pen2pro.com",
      "We aim to respond to all legal inquiries within 5 business days.",
    ],
  },
];

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-4 text-slate-400 text-lg">
            The rules and expectations for using the PEN2PRO platform.
          </p>
          <p className="mt-3 text-sm text-slate-600">Last Updated: June 15, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-5">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8 sm:p-12 space-y-12">
            <p className="text-slate-300 leading-relaxed">
              These Terms of Service ("Terms") govern your use of the PEN2PRO RMIE platform,
              website, and all related services operated by PEN2PRO ("we," "our," or "us").
              Please read these terms carefully before using the platform.
            </p>

            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
                  <span className="w-1 h-5 rounded-full bg-[#1E88E5] inline-block shrink-0" />
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((line, i) => (
                    <li key={i} className="flex gap-3 text-slate-400 leading-relaxed">
                      <span className="text-[#1E88E5] mt-1 shrink-0">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8 text-center">
            <p className="text-slate-400 mb-6">
              Ready to build your business roadmap? Get started for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/starter" className="btn-gold rounded-lg px-6 py-3 text-sm font-black text-[#0A0F1E]">
                Start Free Roadmap
              </Link>
              <Link to="/pricing" className="rounded-lg border border-[#1A2D50] px-6 py-3 text-sm font-bold text-slate-300 hover:border-[#1E88E5] hover:text-[#1E88E5] transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
