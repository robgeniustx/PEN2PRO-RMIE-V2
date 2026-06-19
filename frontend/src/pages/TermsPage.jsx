import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing or using PEN2PRO — including any roadmap generation, business planning tools, AI strategy features, voice agent, website builder, CRM, or dashboard features — you agree to be bound by these Terms of Service.",
      "If you do not agree with these terms, do not use the platform. These terms apply to all visitors, users, waitlist members, and account holders.",
    ],
  },
  {
    title: "Platform Description",
    content: [
      "PEN2PRO is an AI-powered business development platform — a Rapid Monetization Intelligence Engine (RMIE) — designed to help individuals turn ideas, skills, and lived experience into structured business roadmaps, launch strategies, and execution plans.",
      "PEN2PRO is a tool. It provides education, structure, strategy, and organization. It does not provide legal advice, financial advice, accounting services, credit repair services, or guaranteed business outcomes.",
    ],
  },
  {
    title: "Accounts and Eligibility",
    content: [
      "You must be at least 18 years old to create an account and use paid features of PEN2PRO.",
      "You are responsible for maintaining the confidentiality of your account credentials. You are responsible for all activity that occurs under your account.",
      "PEN2PRO reserves the right to suspend or terminate any account that violates these terms, engages in fraud, or attempts to abuse the platform.",
    ],
  },
  {
    title: "Subscription Plans and Billing",
    content: [
      "PEN2PRO offers a free tier and paid subscription tiers: Pro ($249/month), Elite ($499/month), and Founders (lifetime access). Pricing is subject to change with notice.",
      "Paid subscriptions are billed through Stripe. By subscribing, you authorize us to charge your payment method on the agreed billing cycle.",
      "Subscription cancellations take effect at the end of the current billing period. We do not offer automatic refunds for unused subscription time. If you believe you were charged in error, contact us within 30 days.",
      "Founders lifetime access is a one-time purchase. Once purchased, it is non-refundable but transfers all benefits described at the time of purchase for the life of the platform.",
    ],
  },
  {
    title: "AI-Generated Content",
    content: [
      "PEN2PRO uses artificial intelligence to generate business roadmaps, strategies, sales scripts, financial projections, and other business content. This content is generated based on the information you provide and is intended for educational and planning purposes.",
      "AI-generated content is not a guarantee of business success, income, funding approval, or any specific outcome. You should review all AI-generated content critically and consult with licensed professionals (attorneys, accountants, financial advisors) before making significant business decisions.",
      "You retain ownership of the business ideas and input you provide. PEN2PRO retains the right to use aggregated, anonymized data to improve the platform.",
    ],
  },
  {
    title: "Prohibited Conduct",
    content: [
      "You may not use PEN2PRO to: generate content intended to defraud, scam, or harm others; attempt to reverse-engineer or scrape the platform; share your account credentials or sell access to another person; use the platform to violate any applicable law or regulation; upload malicious code, viruses, or harmful content.",
      "Violation of these prohibitions may result in immediate account termination without refund.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "The PEN2PRO brand, platform design, code, AI models, prompts, and all original content created by PEN2PRO are protected by copyright and trademark law. You may not copy, reproduce, or distribute PEN2PRO's proprietary materials without written permission.",
      "You retain ownership of the business ideas and concepts you input into the platform. PEN2PRO does not claim ownership of your business idea.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "PEN2PRO is provided 'as is' without warranties of any kind. We do not guarantee that the platform will be error-free, uninterrupted, or meet your specific business goals.",
      "To the fullest extent permitted by law, PEN2PRO and its founders, employees, and contractors are not liable for any indirect, incidental, special, or consequential damages arising from your use of the platform — including lost profits, lost data, or business interruption.",
      "Our total liability to you for any claim arising from the use of PEN2PRO is limited to the amount you paid to us in the 12 months preceding the claim.",
    ],
  },
  {
    title: "Dispute Resolution",
    content: [
      "These terms are governed by the laws of the State of Texas. Any disputes arising from these terms or your use of PEN2PRO will be resolved through binding arbitration in Houston, Texas, except where prohibited by law.",
      "You waive the right to participate in class action lawsuits related to PEN2PRO.",
    ],
  },
  {
    title: "Changes to Terms",
    content: [
      "We reserve the right to update these terms at any time. We will notify active users via email if changes are material. Continued use of the platform after updated terms are posted constitutes acceptance.",
    ],
  },
  {
    title: "Contact",
    content: [
      "Questions about these terms? Contact us at: support@pen2pro.com",
    ],
  },
];

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service | PEN2PRO";
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#1A2D50] py-16 px-5 text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FF8A00" }}>
          Legal
        </p>
        <h1 className="font-display text-4xl font-black text-white mb-4">
          Terms of Service
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          Last updated: June 2026. These terms govern your use of the PEN2PRO platform. Please read them carefully.
        </p>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-3xl px-5 py-16">
        <div className="rounded-2xl border border-[#1A2D50] p-8 mb-8" style={{ background: "#0F1520" }}>
          <p className="text-slate-300 leading-8">
            PEN2PRO is built to help real people build real businesses. These terms are written to be clear, not to trap you. By using the platform you agree to the following. If something doesn't make sense, reach out before using the service.
          </p>
        </div>

        <div className="space-y-10">
          {SECTIONS.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black shrink-0"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #1E88E5)", color: "#fff" }}
                >
                  {i + 1}
                </span>
                {section.title}
              </h2>
              <div className="space-y-3 pl-11">
                {section.content.map((para, j) => (
                  <p key={j} className="text-slate-400 leading-7">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1A2D50] py-14 px-5 text-center">
        <p className="text-slate-500 text-sm mb-6">Have questions before signing up?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/privacy" className="btn-outline rounded-xl px-6 py-3 text-sm font-bold">
            Privacy Policy
          </Link>
          <Link to="/disclaimer" className="btn-outline rounded-xl px-6 py-3 text-sm font-bold">
            Disclaimer
          </Link>
          <Link to="/starter" className="btn-gold rounded-xl px-6 py-3 text-sm font-black text-[#080C14]">
            Start Free — No Card Required
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
