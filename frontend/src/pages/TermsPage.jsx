import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By accessing or using PEN2PRO — including the website, platform, mobile interfaces, and any related services — you agree to be bound by these Terms of Service. If you do not agree, do not use the platform.",
      "These terms apply to all users, including free-tier visitors, waitlist members, Pro subscribers, Elite subscribers, and Founders Lifetime members.",
    ],
  },
  {
    title: "2. Description of Services",
    body: [
      "PEN2PRO is an AI-powered business development platform — the Rapid Monetization Intelligence Engine (RMIE) — that helps users generate business roadmaps, plans, and strategies.",
      "Services include AI roadmap generation, business planning tools, credit and funding readiness guidance, branding direction, and tiered subscription features (Free, Pro, Elite, Founders).",
      "PEN2PRO does not provide legal, financial, tax, or investment advice. All outputs are educational and informational in nature.",
    ],
  },
  {
    title: "3. User Accounts",
    body: [
      "You must be 18 years or older to create an account. You are responsible for maintaining the confidentiality of your account credentials.",
      "You agree to provide accurate, current, and complete information during registration. You are responsible for all activity that occurs under your account.",
      "We reserve the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or misuse platform features.",
    ],
  },
  {
    title: "4. Subscriptions & Payments",
    body: [
      "Paid subscriptions (Pro, Elite, Founders) are billed in advance on a monthly or one-time basis. All charges are processed through Stripe, our third-party payment provider.",
      "Founders Lifetime memberships are one-time purchases that provide lifetime access to the platform as described at time of purchase. Scope of features may evolve as the platform grows.",
      "You may cancel your monthly subscription at any time. Cancellation takes effect at the end of the current billing period. We do not provide refunds for partial billing periods.",
      "PEN2PRO reserves the right to modify pricing with 30 days' advance notice to active subscribers.",
    ],
  },
  {
    title: "5. Refund Policy",
    body: [
      "Monthly subscriptions are non-refundable after the billing period begins. If you experience a technical issue that prevented you from accessing the platform, contact support@pen2pro.com within 7 days for review.",
      "Founders Lifetime purchases are final and non-refundable unless the platform fails to launch within 12 months of purchase, in which case a full refund will be issued.",
    ],
  },
  {
    title: "6. Intellectual Property",
    body: [
      "The PEN2PRO name, logo, platform design, AI prompts, RMIE framework, and all platform content are the intellectual property of PEN2PRO and Robert Earl Green Jr.",
      "You may not copy, redistribute, resell, or replicate platform outputs for commercial purposes without written permission.",
      "Content you input into PEN2PRO (business ideas, personal information) remains yours. You grant us a limited license to use your inputs to generate your roadmap and improve our AI systems.",
    ],
  },
  {
    title: "7. Prohibited Uses",
    body: [
      "You agree not to use PEN2PRO to engage in fraudulent activity, spam, harassment, or illegal conduct.",
      "You may not attempt to reverse-engineer, scrape, or extract the platform's AI models, prompts, or underlying technology.",
      "You may not use PEN2PRO to generate content that violates applicable laws or that misrepresents business or financial information to lenders, investors, or government agencies.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    body: [
      "PEN2PRO provides its platform \"as-is\" without warranty of any kind. We do not guarantee that AI-generated roadmaps will result in business success, funding approval, credit improvement, or income generation.",
      "To the maximum extent permitted by law, PEN2PRO's liability for any claims arising from use of the platform is limited to the amount you paid for the applicable subscription in the 30 days prior to the claim.",
      "We are not liable for indirect, incidental, special, consequential, or punitive damages.",
    ],
  },
  {
    title: "9. Modifications to the Platform",
    body: [
      "We reserve the right to modify, suspend, or discontinue any part of the platform at any time. We will provide reasonable notice for material changes that affect paid subscribers.",
    ],
  },
  {
    title: "10. Governing Law",
    body: [
      "These terms are governed by the laws of the State of Texas, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Harris County, Texas.",
    ],
  },
  {
    title: "11. Changes to These Terms",
    body: [
      "We may update these Terms of Service from time to time. Continued use of the platform after updates constitutes your acceptance of the revised terms. We will notify active subscribers of material changes via email.",
    ],
  },
  {
    title: "12. Contact",
    body: [
      "Questions about these terms? Contact us at support@pen2pro.com.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <section className="px-5 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-4 font-display text-4xl font-black md:text-5xl">Terms of Service</h1>
          <p className="text-slate-400">Effective Date: June 15, 2026 | Last Updated: June 19, 2026</p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-sm text-slate-400 leading-7">
            Please read these Terms of Service carefully before using PEN2PRO. These terms constitute a legally binding agreement between you and PEN2PRO (operated by Robert Earl Green Jr.). By using the platform, you agree to these terms.
          </div>

          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="mb-4 text-xl font-bold text-white">{s.title}</h2>
                <div className="space-y-3">
                  {s.body.map((p) => (
                    <p key={p} className="text-sm leading-7 text-slate-400">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-3 border-t border-[#1A2D50] pt-10 sm:flex-row sm:justify-center">
            <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Disclaimer
            </Link>
            <Link to="/" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
