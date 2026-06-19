import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing or using PEN2PRO at pen2pro.com, you agree to be bound by these Terms of Service and our Privacy Policy.",
      "If you do not agree to these terms, do not use the platform.",
      "PEN2PRO reserves the right to update these terms at any time. Continued use of the platform after changes constitutes acceptance.",
      "These terms apply to all users, including free users, paid subscribers, and waitlist members.",
    ],
  },
  {
    title: "Description of Services",
    body: [
      "PEN2PRO is an AI-powered business roadmap and strategy platform — the Rapid Monetization Intelligence Engine (RMIE) — designed to help users plan, launch, and grow businesses.",
      "Services include: AI-generated business blueprints, roadmap tools, credit and funding readiness guidance, branding direction, and business strategy resources.",
      "Features and availability vary by subscription tier (Free, Pro, Elite, Legacy Founder).",
      "PEN2PRO is not a licensed financial advisor, credit counselor, attorney, or business consultant. All content is for educational and organizational purposes only.",
    ],
  },
  {
    title: "User Accounts",
    body: [
      "You must provide accurate, current, and complete information when creating your account.",
      "You are responsible for maintaining the confidentiality of your account credentials.",
      "You are responsible for all activity that occurs under your account.",
      "Notify us immediately if you suspect unauthorized access to your account.",
      "PEN2PRO reserves the right to suspend or terminate accounts that violate these terms.",
    ],
  },
  {
    title: "Subscriptions and Payments",
    body: [
      "Paid subscriptions (Pro, Elite) are billed monthly. The Legacy Founder offer is a one-time lifetime payment.",
      "All payments are processed securely through Stripe. PEN2PRO does not store payment credentials.",
      "Subscriptions auto-renew unless cancelled. You may cancel at any time through your account settings.",
      "Refunds are handled on a case-by-case basis. Contact support@pen2pro.com within 7 days of a charge for refund consideration.",
      "Prices are subject to change. Existing subscribers will be notified of price changes before their next billing cycle.",
      "Legacy Founder pricing is locked in at the time of purchase and will not increase.",
    ],
  },
  {
    title: "Acceptable Use",
    body: [
      "You agree to use PEN2PRO only for lawful purposes and in accordance with these terms.",
      "You may not use the platform to generate content that is illegal, fraudulent, defamatory, or harmful.",
      "You may not attempt to reverse-engineer, scrape, or copy the AI output systems or platform infrastructure.",
      "You may not share account credentials, resell access, or circumvent subscription tiers.",
      "Abuse of the platform, including attempting to manipulate AI outputs or bypass usage limits, may result in account termination.",
    ],
  },
  {
    title: "AI-Generated Content",
    body: [
      "PEN2PRO uses AI to generate business roadmaps, strategies, and recommendations based on your inputs.",
      "AI-generated content is for informational and planning purposes only. It does not constitute professional legal, financial, tax, or business advice.",
      "Results will vary based on your inputs, market conditions, and individual effort. PEN2PRO does not guarantee any specific outcome.",
      "You retain ownership of the business ideas and inputs you provide. PEN2PRO retains rights to the platform, AI models, and generated output structures.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "The PEN2PRO name, logo, brand, and platform are the intellectual property of PEN2PRO and its founder.",
      "You may not reproduce, distribute, or commercially use PEN2PRO's branding, platform design, or content without written permission.",
      "Your business ideas and inputs remain your own. You grant PEN2PRO a limited license to use your inputs to generate your roadmap and improve platform quality.",
    ],
  },
  {
    title: "Disclaimers and Limitation of Liability",
    body: [
      "PEN2PRO is provided 'as is' without warranties of any kind, express or implied.",
      "PEN2PRO does not guarantee income, funding approval, loan approval, credit improvement, or business success.",
      "To the maximum extent permitted by law, PEN2PRO and its founder are not liable for indirect, incidental, or consequential damages.",
      "Your use of affiliate links, third-party tools, or external resources recommended by PEN2PRO is at your own risk.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These Terms of Service are governed by the laws of the State of Texas, without regard to conflict of law provisions.",
      "Any disputes arising from these terms or use of the platform shall be resolved in the courts of Harris County, Texas.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about these Terms of Service? Contact us at: support@pen2pro.com",
      "You may also reach us through the waitlist form at pen2pro.com/waitlist.",
    ],
  },
];

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service | PEN2PRO";
    return () => { document.title = "PEN2PRO — Turn Your Idea Into Income"; };
  }, []);

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#1A2D50] px-5 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-3xl font-black md:text-4xl">Terms of Service</h1>
          <p className="text-sm text-slate-500">Last updated: June 2026 · Applies to all PEN2PRO users and subscribers</p>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl space-y-12">
          <p className="text-slate-400 leading-relaxed">
            These Terms of Service ("Terms") govern your access to and use of PEN2PRO ("the platform"), operated by Robert Earl Green Jr. and the PEN2PRO team. Please read these terms carefully before using our services.
          </p>

          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-4 font-display text-xl font-black text-white">{s.title}</h2>
              <ul className="space-y-3">
                {s.body.map((line, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                    <span className="mt-1 shrink-0 text-[#1E88E5]">•</span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom links */}
      <section className="border-t border-[#1A2D50] px-5 py-12 text-center">
        <div className="mx-auto max-w-xl">
          <p className="mb-6 text-sm text-slate-500">
            By using PEN2PRO you agree to these terms. Questions? We're here to help.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-7 py-3 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-7 py-3 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
              Privacy Policy →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
