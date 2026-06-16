import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service and our Privacy Policy.",
      "If you do not agree to these terms, please do not use the platform.",
      "These terms apply to all users, including visitors, free-tier users, paid subscribers, and administrators.",
    ],
  },
  {
    title: "Description of Service",
    body: [
      "PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that helps users create business roadmaps, monetization strategies, and launch plans.",
      "The platform offers Free, Pro, Elite, and Legacy Founder tiers with varying levels of features and support.",
      "PEN2PRO is an educational and organizational tool. It does not provide legal, financial, tax, or investment advice.",
    ],
  },
  {
    title: "User Accounts",
    body: [
      "You are responsible for maintaining the confidentiality of your account credentials.",
      "You must provide accurate, complete information when creating an account.",
      "You may not share your account with others or use another person's account without permission.",
      "We reserve the right to suspend or terminate accounts that violate these terms.",
    ],
  },
  {
    title: "Subscriptions & Payments",
    body: [
      "Paid subscriptions (Pro, Elite, Legacy Founder) are billed as described on the Pricing page at the time of purchase.",
      "All payments are processed securely through Stripe. PEN2PRO does not store payment card information.",
      "Subscriptions automatically renew unless cancelled before the renewal date.",
      "Refund requests are evaluated on a case-by-case basis. Contact support@pen2pro.com within 7 days of billing.",
    ],
  },
  {
    title: "AI-Generated Content",
    body: [
      "PEN2PRO uses artificial intelligence to generate business roadmaps, strategies, and recommendations based on your input.",
      "AI-generated content is for informational and educational purposes only. Results may vary based on your specific situation, market, execution, and many factors outside PEN2PRO's control.",
      "PEN2PRO does not guarantee any specific business outcome, revenue, funding approval, or business success.",
      "You are responsible for evaluating AI-generated recommendations and making your own decisions.",
    ],
  },
  {
    title: "Acceptable Use",
    body: [
      "You agree not to misuse the platform, including but not limited to: using it for illegal purposes, attempting to access other users' data, scraping content, or reverse engineering the platform.",
      "You agree not to upload harmful content, malware, or content that infringes on third-party rights.",
      "Violation of acceptable use policies may result in immediate account termination.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "The PEN2PRO name, logo, brand, platform design, and core software are the intellectual property of PEN2PRO and Robert Earl Green Jr.",
      "AI-generated roadmaps and business plans created using your input are yours to use for your personal or business purposes.",
      "You may not resell, redistribute, or commercially license PEN2PRO content or platform features without written permission.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "PEN2PRO is provided 'as is' without warranties of any kind, express or implied.",
      "To the maximum extent permitted by law, PEN2PRO and its founders, employees, and partners are not liable for any indirect, incidental, consequential, or punitive damages arising from your use of the platform.",
      "Our total liability in any case is limited to the amount you paid for the service in the three months preceding the claim.",
    ],
  },
  {
    title: "Changes to Terms",
    body: [
      "We may update these Terms of Service from time to time. We will notify users of material changes.",
      "Continued use of the platform after updates constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These Terms are governed by the laws of the State of Texas, without regard to conflict of law principles.",
      "Any disputes arising from these terms shall be resolved in the courts of Harris County, Texas.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about these Terms? Contact us at: legal@pen2pro.com",
      "PEN2PRO | Houston, TX",
    ],
  },
];

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service | PEN2PRO";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -right-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Navbar />

      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-4 font-display text-4xl font-black md:text-5xl">Terms of Service</h1>
          <p className="text-slate-400">Effective Date: June 15, 2026</p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-3xl space-y-10">
          <p className="text-slate-400 leading-relaxed">
            Welcome to PEN2PRO. These Terms of Service govern your use of the PEN2PRO platform, website, and all related services. Please read them carefully before using the platform.
          </p>

          {SECTIONS.map((section) => (
            <div key={section.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-4 text-lg font-bold text-white">{section.title}</h2>
              <ul className="space-y-3">
                {section.body.map((line) => (
                  <li key={line} className="text-slate-400 leading-relaxed text-sm flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF8A00]" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center">
            <Link to="/" className="text-sm font-semibold text-[#FF8A00] hover:underline">← Back to Home</Link>
            <span className="hidden sm:inline text-slate-600">|</span>
            <Link to="/privacy" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
            <span className="hidden sm:inline text-slate-600">|</span>
            <Link to="/disclaimer" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
