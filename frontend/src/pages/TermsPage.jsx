import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing or using PEN2PRO at pen2pro.com, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
      "If you do not agree with any part of these terms, you may not use the platform.",
      "We reserve the right to update these Terms at any time. Continued use after changes constitutes acceptance.",
    ],
  },
  {
    title: "Description of Services",
    body: [
      "PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that provides business roadmaps, strategy frameworks, monetization guidance, credit and funding readiness information, and related tools.",
      "Services are provided across multiple tiers: Free (Starter), Pro, Elite, and Legacy Founder.",
      "Access to specific features depends on your subscription tier.",
    ],
  },
  {
    title: "User Accounts",
    body: [
      "You must be at least 18 years old to create an account.",
      "You are responsible for maintaining the confidentiality of your account credentials.",
      "You are responsible for all activity that occurs under your account.",
      "You agree to provide accurate, current, and complete information during registration.",
      "We reserve the right to suspend or terminate accounts that violate these Terms.",
    ],
  },
  {
    title: "Acceptable Use",
    body: [
      "You may not use PEN2PRO for any unlawful purpose or in violation of any regulations.",
      "You may not attempt to reverse-engineer, scrape, or copy our AI models, roadmap logic, or platform infrastructure.",
      "You may not share account access with others or resell platform access without written permission.",
      "You may not use our platform to generate content intended to deceive, defraud, or harm others.",
    ],
  },
  {
    title: "Subscriptions & Payments",
    body: [
      "Paid subscriptions are billed on the cycle displayed at the time of purchase (monthly or one-time).",
      "Payments are processed securely by Stripe. By subscribing, you authorize recurring charges per your plan.",
      "Refund requests are handled on a case-by-case basis. Contact support@pen2pro.com within 7 days of a charge.",
      "We reserve the right to change pricing. Existing subscribers will be notified before changes take effect.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "All platform content, design, AI logic, branding, and code are the intellectual property of PEN2PRO and Robert Earl Green Jr.",
      "Your submitted business ideas and personal information remain yours. By submitting content, you grant PEN2PRO a limited license to process that content for the purpose of generating your roadmap and improving AI output.",
      "You may not reproduce, distribute, or create derivative works from any PEN2PRO content without written permission.",
    ],
  },
  {
    title: "Disclaimers",
    body: [
      "PEN2PRO is provided \"as is\" without warranties of any kind, express or implied.",
      "We do not guarantee specific business results, income, funding approval, credit outcomes, or business success.",
      "AI-generated roadmaps and strategies are recommendations only. You are responsible for your own business decisions.",
      "See our full Disclaimer page for details.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, PEN2PRO shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform.",
      "Our total liability to you for any claim shall not exceed the amount you paid to PEN2PRO in the 90 days prior to the claim.",
    ],
  },
  {
    title: "Termination",
    body: [
      "You may cancel your account at any time via account settings or by contacting support.",
      "We may suspend or terminate your access for violations of these Terms, fraudulent activity, or at our discretion with reasonable notice.",
      "Upon termination, your right to access the platform ceases immediately.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These Terms are governed by the laws of the State of Texas, without regard to conflict of law provisions.",
      "Any disputes shall be resolved through binding arbitration in Harris County, Texas, unless prohibited by applicable law.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For questions about these Terms, contact us at: support@pen2pro.com",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* Hero */}
      <section className="px-5 py-20 text-center border-b border-[#1A2D50]">
        <div className="mx-auto max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black md:text-5xl mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-400 text-sm">
            Effective Date: June 15, 2026 &nbsp;·&nbsp; Last Updated: June 15, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-sm text-slate-400 leading-relaxed">
            Please read these Terms of Service carefully before using PEN2PRO. These terms constitute a legally binding agreement between you and PEN2PRO. If you are accessing the platform on behalf of a business, you represent that you have authority to bind that business to these Terms.
          </div>

          <div className="space-y-10">
            {SECTIONS.map((section, i) => (
              <div key={section.title}>
                <h2 className="text-lg font-black text-white mb-4 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg text-xs font-black text-[#0A0F1E]"
                    style={{ background: "linear-gradient(135deg, #1E88E5, #0D47A1)" }}>
                    {i + 1}
                  </span>
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.body.map((line) => (
                    <li key={line} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                      <span className="mt-1 shrink-0 text-[#1E88E5]">›</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-3 sm:flex-row sm:justify-center border-t border-[#1A2D50] pt-10">
            <Link to="/" className="rounded-xl border border-[#1A2D50] px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              ← Back to Home
            </Link>
            <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
