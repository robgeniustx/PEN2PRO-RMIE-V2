import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing or using PEN2PRO — including the website, platform, roadmap tools, and any associated services — you agree to these Terms of Service.",
      "If you do not agree, you may not use PEN2PRO.",
      "These terms apply to all users: free, Pro, Elite, Founders, and affiliate partners.",
    ],
  },
  {
    title: "Platform Description",
    body: [
      "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that helps users build business roadmaps, launch strategies, funding readiness plans, and income blueprints.",
      "The platform uses artificial intelligence to generate personalized output based on the information you provide.",
      "PEN2PRO is a planning and education tool. It is not a licensed financial advisor, attorney, accountant, or business consultant.",
    ],
  },
  {
    title: "User Accounts",
    body: [
      "You must provide accurate information when creating an account.",
      "You are responsible for maintaining the confidentiality of your account credentials.",
      "You are responsible for all activity that occurs under your account.",
      "You must be at least 18 years old to use PEN2PRO.",
      "PEN2PRO reserves the right to suspend or terminate accounts that violate these terms.",
    ],
  },
  {
    title: "Subscription Tiers & Billing",
    body: [
      "PEN2PRO offers Free, Pro, Elite, and Founders (lifetime) access tiers.",
      "Paid subscriptions are billed according to the pricing displayed at the time of purchase.",
      "Payments are processed securely through Stripe. PEN2PRO does not store raw payment card data.",
      "Subscription fees are non-refundable except where required by applicable law or as explicitly stated during purchase.",
      "PEN2PRO reserves the right to change pricing with reasonable notice to existing subscribers.",
      "Founders lifetime access terms are locked in at the time of purchase.",
    ],
  },
  {
    title: "Acceptable Use",
    body: [
      "You may not use PEN2PRO to generate content intended for fraud, deception, or illegal activity.",
      "You may not scrape, crawl, or extract content from the platform in bulk without written permission.",
      "You may not share or resell your account access to other users.",
      "You may not attempt to reverse-engineer, decompile, or circumvent platform security.",
      "You may not use the platform to harass, threaten, or harm other individuals.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "PEN2PRO and its underlying technology, branding, and code are owned by PEN2PRO and its founders.",
      "AI-generated roadmap and blueprint output produced for your account is yours to use for your personal and business purposes.",
      "You may not resell or redistribute AI-generated output as your own product or service without written permission.",
      "The PEN2PRO name, logo, and RMIE branding may not be used without written consent.",
    ],
  },
  {
    title: "AI-Generated Content Disclaimer",
    body: [
      "PEN2PRO uses AI models to generate business roadmaps, strategies, scripts, and plans.",
      "AI-generated content is provided for informational and planning purposes only.",
      "PEN2PRO does not guarantee the accuracy, completeness, or fitness of any AI-generated output for your specific situation.",
      "You are responsible for verifying any information before acting on it, especially in legal, financial, or medical contexts.",
      "AI output is not a substitute for licensed professional advice.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "PEN2PRO is provided 'as is' without warranties of any kind.",
      "PEN2PRO is not liable for any business losses, lost revenue, lost profits, or indirect damages arising from use of the platform.",
      "PEN2PRO's total liability to any user shall not exceed the amount paid by that user in the prior 12 months.",
      "Some jurisdictions do not allow certain liability exclusions — these terms apply to the fullest extent permitted by law.",
    ],
  },
  {
    title: "Termination",
    body: [
      "You may cancel your account at any time by contacting support or through your account settings.",
      "PEN2PRO may suspend or terminate your account for violations of these terms, fraudulent activity, or at its sole discretion with reasonable notice.",
      "Upon termination, your access to paid features ends immediately. Data may be retained per our Privacy Policy.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These terms are governed by the laws of the State of Texas, United States.",
      "Any disputes will be resolved through binding arbitration in accordance with the American Arbitration Association rules.",
      "You waive the right to participate in class action lawsuits against PEN2PRO.",
    ],
  },
  {
    title: "Changes to Terms",
    body: [
      "PEN2PRO may update these Terms of Service periodically.",
      "Material changes will be communicated via email or platform notification.",
      "Continued use of the platform after changes constitutes acceptance of the updated terms.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For questions about these terms, contact: legal@pen2pro.com",
      "Last updated: June 2026",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 px-5">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FF8A00" }}>
            Legal
          </p>
          <h1 className="text-4xl font-black tracking-tight mb-4">Terms of Service</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            These terms govern your use of PEN2PRO, including the RMIE platform, all features,
            and all associated services. Please read them carefully.
          </p>
          <p className="mt-3 text-sm text-slate-600">Last updated: June 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-5">
        <div className="mx-auto max-w-3xl space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8">
              <h2 className="text-xl font-black mb-5" style={{ color: "#1E88E5" }}>
                {s.title}
              </h2>
              <ul className="space-y-3">
                {s.body.map((line, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 bg-[#FF8A00]" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div className="rounded-2xl border p-8 text-center" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
            <p className="text-slate-400 text-sm mb-5">
              Ready to build your business roadmap?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/starter"
                className="rounded-xl px-6 py-3 text-sm font-black text-black"
                style={{ background: "linear-gradient(135deg, #FF8A00, #D4A017)" }}
              >
                Start Free Roadmap
              </Link>
              <Link
                to="/pricing"
                className="rounded-xl px-6 py-3 text-sm font-bold text-slate-300 border border-[#1A2D50] hover:border-[#1E88E5] transition-colors"
              >
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
