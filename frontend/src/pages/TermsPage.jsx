import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing or using PEN2PRO — including the website, platform, API, and any related services — you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the platform.",
      "These Terms apply to all users, including free users, paid subscribers, waitlist members, and any visitors to pen2pro.com.",
    ],
  },
  {
    title: "Description of Services",
    body: [
      "PEN2PRO is an AI-powered business development platform — the Rapid Monetization Intelligence Engine (RMIE) — that helps users create business roadmaps, monetization strategies, credit and funding readiness plans, and business launch guidance.",
      "Services are offered in tiers: Free Roadmap, Pro, Elite, and Founders Lifetime. Features available to you depend on your subscription tier.",
      "PEN2PRO reserves the right to modify, discontinue, or add features at any time with reasonable notice to users.",
    ],
  },
  {
    title: "User Accounts",
    body: [
      "You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your login credentials.",
      "You may not share your account with others or allow unauthorized access. PEN2PRO is not liable for losses resulting from unauthorized account use.",
      "You must be at least 18 years old to create an account and use PEN2PRO.",
      "We reserve the right to suspend or terminate accounts that violate these Terms.",
    ],
  },
  {
    title: "Subscription and Payments",
    body: [
      "Paid plans (Pro, Elite) are billed monthly. Founders Lifetime is a one-time payment. All prices are in USD.",
      "Payments are processed securely through Stripe. PEN2PRO does not store your full payment card details.",
      "Subscriptions auto-renew unless cancelled before the next billing cycle. You may cancel at any time through your account settings.",
      "Refunds are evaluated on a case-by-case basis. We do not offer refunds for partial months of service. Contact us within 7 days of a charge if you believe it was an error.",
    ],
  },
  {
    title: "Acceptable Use",
    body: [
      "You agree to use PEN2PRO only for lawful business purposes. You may not use the platform to generate content for illegal businesses, spam campaigns, or fraudulent purposes.",
      "You may not attempt to reverse-engineer, scrape, copy, or resell any part of the PEN2PRO platform or its AI-generated content without written permission.",
      "You may not use PEN2PRO to harass, defraud, or harm others.",
      "Violations of this policy may result in immediate account suspension without refund.",
    ],
  },
  {
    title: "AI-Generated Content Disclaimer",
    body: [
      "PEN2PRO uses artificial intelligence to generate business roadmaps, strategies, scripts, and recommendations. This content is provided as guidance and education only — not legal, financial, or accounting advice.",
      "AI outputs may not always be accurate, complete, or applicable to your specific situation. Always verify important business decisions with qualified professionals (attorney, CPA, financial advisor).",
      "PEN2PRO is not responsible for decisions made based on AI-generated content.",
    ],
  },
  {
    title: "No Guarantees",
    body: [
      "PEN2PRO does not guarantee any specific business outcome, income level, funding approval, credit score improvement, or financial result.",
      "Results depend entirely on the user's effort, market conditions, execution, and individual circumstances.",
      "Testimonials on the platform represent individual experiences and are not typical results.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "The PEN2PRO platform, brand, design, software, and proprietary content are owned by PEN2PRO / Robert Earl Green Jr. All rights reserved.",
      "AI-generated roadmaps and content produced by the platform for your use are licensed to you for personal business use. You may not resell or redistribute them as your own product.",
      "Your submitted business ideas and data remain your property. By using the platform, you grant PEN2PRO a limited license to process your data to provide the service.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, PEN2PRO and its founder shall not be liable for any indirect, incidental, special, or consequential damages arising from use of the platform.",
      "Our total liability to any user shall not exceed the amount paid by that user in the 3 months preceding the claim.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These Terms are governed by the laws of the State of Texas, without regard to conflict of law principles. Any disputes shall be resolved in the courts located in Harris County, Texas, or through binding arbitration if both parties agree.",
    ],
  },
  {
    title: "Changes to These Terms",
    body: [
      "We may update these Terms from time to time. Material changes will be communicated to registered users via email. Continued use of PEN2PRO after changes are posted constitutes acceptance.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about these Terms of Service? Contact us at: legal@pen2pro.com",
      "PEN2PRO — Robert Earl Green Jr., Founder",
    ],
  },
];

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service — PEN2PRO";
  }, []);

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="px-5 py-20 text-center border-b border-[#1A2D50]">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
          <h1 className="font-display text-4xl font-black md:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-slate-400">Effective Date: June 15, 2026</p>
          <p className="mt-3 text-sm text-slate-500 leading-relaxed">
            Please read these Terms carefully before using PEN2PRO. By using the platform, you agree to be bound by these terms.
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
        <p className="text-slate-400 mb-6">Questions about your account or these terms? We're here.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/signin" className="btn-gold rounded-xl px-6 py-3 text-sm font-black text-[#080C14]">
            Sign In
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
