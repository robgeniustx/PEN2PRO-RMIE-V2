import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service and our Privacy Policy.",
      "If you do not agree with any part of these terms, you may not use the platform.",
      "These terms apply to all users including free, Pro, Elite, and Founders tier members.",
      "We reserve the right to update these terms at any time. Continued use constitutes acceptance of updated terms.",
    ],
  },
  {
    title: "2. Description of Service",
    content: [
      "PEN2PRO is an AI-powered business roadmap and strategy platform (RMIE — Rapid Monetization Intelligence Engine).",
      "We provide business planning tools, roadmaps, funding readiness guidance, credit strategy education, and related resources.",
      "The platform is available in Free, Pro, Elite, and Founders (Lifetime) tiers with varying levels of access and features.",
      "AI-generated content is provided for informational and planning purposes only — it is not legal, financial, or professional advice.",
      "Service availability and features may change as the platform evolves.",
    ],
  },
  {
    title: "3. User Accounts",
    content: [
      "You must provide accurate and complete information when creating an account.",
      "You are responsible for maintaining the security of your account credentials.",
      "You may not share your account with others or allow others to access the platform using your credentials.",
      "You must be at least 18 years old to create an account.",
      "We reserve the right to suspend or terminate accounts that violate these terms.",
      "You are responsible for all activity that occurs under your account.",
    ],
  },
  {
    title: "4. Subscription Plans and Payments",
    content: [
      "Free Tier: Access to basic roadmap generation at no cost.",
      "Pro Tier ($249/month): Full roadmap access, export tools, AI refinement, branding support, and more.",
      "Elite Tier ($499/month): Everything in Pro plus advanced strategy, financial projections, priority support, and vendor guidance.",
      "Founders Tier: Lifetime access — one-time purchase, see current pricing on the Founders page.",
      "All payments are processed securely through Stripe. By subscribing, you authorize Stripe to charge your payment method.",
      "Subscriptions renew automatically unless cancelled before the renewal date.",
      "Refund requests are handled case-by-case. Contact support@pen2pro.com within 7 days of a charge.",
      "We reserve the right to change pricing with 30 days' notice to active subscribers.",
    ],
  },
  {
    title: "5. Acceptable Use",
    content: [
      "You may use PEN2PRO only for lawful business planning and related purposes.",
      "You may not use the platform to generate content intended to defraud, mislead, or harm others.",
      "You may not attempt to reverse-engineer, scrape, or extract data from the platform programmatically.",
      "You may not resell, sublicense, or redistribute access to PEN2PRO to third parties without written consent.",
      "You may not use AI-generated roadmaps to make representations to investors without appropriate professional review.",
      "Abuse, harassment, or threats toward our team or other users will result in immediate account termination.",
    ],
  },
  {
    title: "6. Intellectual Property",
    content: [
      "The PEN2PRO platform, brand, software, and design are owned by PEN2PRO and protected by intellectual property laws.",
      "You retain ownership of the business ideas and information you submit to the platform.",
      "AI-generated roadmaps and blueprints created using your input are licensed to you for personal and commercial use.",
      "You may not claim that AI-generated content is entirely your own original creation when presenting it to third parties.",
      "The PEN2PRO name, logo, and brand elements may not be used without written permission.",
    ],
  },
  {
    title: "7. Disclaimers and Limitations",
    content: [
      "PEN2PRO is provided 'as is' without warranties of any kind, express or implied.",
      "We do not guarantee that roadmaps, strategies, or AI-generated content will result in business success, income, or funding approval.",
      "Business outcomes depend entirely on individual effort, market conditions, and factors outside our control.",
      "We are not responsible for decisions you make based on platform-generated content.",
      "Our liability is limited to the amount you paid for the platform in the 12 months preceding any claim.",
      "We are not a law firm, financial advisor, credit repair organization, or lender.",
    ],
  },
  {
    title: "8. Termination",
    content: [
      "You may cancel your account at any time from your account settings or by contacting support.",
      "We may suspend or terminate your account for violations of these terms, with or without notice.",
      "Upon termination, your access to paid features will end at the current billing period's close.",
      "We may retain certain data as required by law or for legitimate business purposes after account deletion.",
    ],
  },
  {
    title: "9. Governing Law",
    content: [
      "These Terms of Service are governed by the laws of the State of Texas, United States.",
      "Any disputes arising from these terms or your use of PEN2PRO will be resolved in the courts of Harris County, Texas.",
      "If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full effect.",
    ],
  },
  {
    title: "10. Contact",
    content: [
      "For questions about these Terms of Service, contact us at: support@pen2pro.com",
      "For account issues, billing disputes, or legal matters, include 'Legal' in your email subject line.",
      "We aim to respond to all inquiries within 5 business days.",
    ],
  },
];

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service | PEN2PRO";
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
          <h1 className="mb-4 font-display text-4xl font-black md:text-5xl">Terms of Service</h1>
          <p className="text-slate-400">
            Last updated: June 2026. These terms govern your use of the PEN2PRO platform and services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          {/* Intro */}
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <p className="text-slate-300 leading-relaxed">
              Welcome to PEN2PRO. These Terms of Service ("Terms") govern your access to and use of the PEN2PRO platform, including our website at pen2pro.com and all related services (collectively, the "Service"). Please read these terms carefully before using the platform. These terms constitute a binding agreement between you and PEN2PRO.
            </p>
          </div>

          {SECTIONS.map((section) => (
            <div key={section.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-4 text-lg font-black text-white">{section.title}</h2>
              <ul className="space-y-2.5">
                {section.content.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF8A00]" />
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
          <p className="mb-2 text-slate-400">Questions about our terms?</p>
          <p className="mb-6 text-sm text-slate-500">Email support@pen2pro.com and we'll get back to you within 5 business days.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-7 py-3 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-7 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
