import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service and our Privacy Policy.",
      "If you do not agree to these terms, you may not use the platform.",
      "PEN2PRO reserves the right to update these terms at any time. Continued use after changes constitutes acceptance.",
    ],
  },
  {
    title: "Platform Description",
    body: [
      "PEN2PRO is an AI-powered business development platform (RMIE — Rapid Monetization Intelligence Engine) that helps users develop business ideas, roadmaps, strategies, and plans.",
      "The platform provides educational tools, AI-generated content, and business strategy resources.",
      "PEN2PRO is not a licensed financial advisor, attorney, accountant, or credit counselor.",
    ],
  },
  {
    title: "User Accounts",
    body: [
      "You must provide accurate information when creating an account.",
      "You are responsible for maintaining the security of your account credentials.",
      "You must be at least 18 years old to use PEN2PRO.",
      "You may not share your account with others or use another person's account.",
    ],
  },
  {
    title: "Acceptable Use",
    body: [
      "You may use PEN2PRO for lawful business development purposes only.",
      "You may not use the platform to engage in fraud, harassment, or any illegal activity.",
      "You may not attempt to reverse-engineer, scrape, or copy platform content or AI outputs for commercial redistribution.",
      "You may not use automated bots or scripts to access the platform.",
    ],
  },
  {
    title: "Payments & Refunds",
    body: [
      "All paid plans are billed monthly or as a one-time payment depending on the selected tier.",
      "Monthly subscriptions may be cancelled at any time. Cancellation takes effect at the end of the current billing period.",
      "The Founders Lifetime plan is a one-time payment with no recurring charges.",
      "Refunds are considered on a case-by-case basis within 7 days of initial purchase. Contact support@pen2pro.com to request a refund.",
    ],
  },
  {
    title: "AI-Generated Content",
    body: [
      "PEN2PRO uses artificial intelligence to generate business roadmaps, strategies, and recommendations.",
      "AI-generated content is for educational and planning purposes only. It is not guaranteed to be accurate, complete, or applicable to your specific situation.",
      "You are responsible for verifying AI-generated information with qualified professionals before making significant business or financial decisions.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "PEN2PRO is provided 'as is' without warranties of any kind.",
      "PEN2PRO is not liable for business losses, funding rejections, credit decisions, or outcomes resulting from use of the platform.",
      "In no event shall PEN2PRO's total liability to you exceed the amount you paid for the service in the preceding 12 months.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "The PEN2PRO platform, brand, and proprietary content are owned by PEN2PRO and protected by copyright law.",
      "AI-generated roadmaps and documents produced for your account are yours to use for your personal business purposes.",
      "You may not reproduce, sell, or distribute PEN2PRO's brand, platform, or core methodology without written permission.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These terms are governed by the laws of the State of Texas.",
      "Any disputes shall be resolved through binding arbitration in Houston, Texas.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about these Terms of Service can be directed to: support@pen2pro.com",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Legal</div>
          <h1 className="mb-3 font-display text-4xl font-black">Terms of Service</h1>
          <p className="mb-2 text-slate-400">Last updated: June 2026</p>
          <p className="mb-12 text-slate-400 leading-relaxed">
            These Terms of Service govern your use of the PEN2PRO platform. Please read them carefully.
          </p>

          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="mb-4 font-display text-xl font-bold text-white">{s.title}</h2>
                <ul className="space-y-3">
                  {s.body.map((line) => (
                    <li key={line} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                      <span className="mt-1 shrink-0 text-[#1E88E5]">→</span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col gap-3 sm:flex-row">
            <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Privacy Policy →
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Disclaimer →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
