import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using PEN2PRO (pen2pro.com), you agree to be bound by these Terms of Service. If you do not agree, do not use the platform. These terms apply to all visitors, users, and subscribers.",
  },
  {
    title: "Description of Service",
    body: "PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that helps users generate business roadmaps, develop monetization strategies, assess credit and funding readiness, and access business-building resources. PEN2PRO is an education and strategy platform — not a licensed financial advisor, credit repair company, legal firm, or investment advisor.",
  },
  {
    title: "Account Registration",
    body: "To access certain features you must create an account. You are responsible for maintaining the security of your credentials and for all activity under your account. You agree to provide accurate information and update it as needed. PEN2PRO reserves the right to terminate accounts that violate these terms.",
  },
  {
    title: "Subscriptions & Payments",
    body: "Paid plans (Pro, Elite, Founders Lifetime) are billed as described on the Pricing page. Subscriptions auto-renew unless cancelled before the renewal date. The Founders Lifetime plan is a one-time purchase granting lifetime access to the platform as it exists at the time of purchase and as it evolves. Refunds are handled on a case-by-case basis — contact support within 7 days of purchase for assistance.",
  },
  {
    title: "Acceptable Use",
    body: "You agree not to use PEN2PRO to distribute spam, violate any applicable law, reverse-engineer the platform, or access the platform in unauthorized ways. You may not resell or sublicense access to PEN2PRO without written permission. Violations may result in account termination without refund.",
  },
  {
    title: "Intellectual Property",
    body: "All platform content, including the RMIE framework, roadmap templates, AI prompt architecture, branding, and copy, is the property of PEN2PRO and Robert Earl Green Jr. You may not reproduce, distribute, or create derivative works without written permission. Roadmaps generated for you are yours to use for your own business purposes.",
  },
  {
    title: "Disclaimers",
    body: "PEN2PRO provides educational and organizational tools. We do not guarantee business success, income, funding approval, credit score improvement, or any specific outcome. Results depend entirely on the user's effort, market conditions, qualifications, and execution. AI-generated roadmaps are starting points, not guaranteed strategies.",
  },
  {
    title: "Limitation of Liability",
    body: "To the maximum extent permitted by law, PEN2PRO and its founders, team, and affiliates are not liable for indirect, incidental, special, or consequential damages arising from your use of the platform. Our total liability is limited to the amount you paid in the 12 months preceding any claim.",
  },
  {
    title: "Governing Law",
    body: "These terms are governed by the laws of the State of Texas, without regard to conflict of law principles. Any disputes will be resolved in the courts of Harris County, Texas.",
  },
  {
    title: "Changes to Terms",
    body: "We may update these terms at any time. Registered users will be notified of material changes by email. Continued use after changes constitutes acceptance.",
  },
  {
    title: "Contact",
    body: "For questions about these terms, contact us at support@pen2pro.com.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
          <h1 className="font-display text-4xl font-black text-white mb-4">Terms of Service</h1>
          <p className="text-slate-400">Last updated: June 2026</p>
        </div>
        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 text-lg font-bold text-white">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link to="/privacy" className="text-sm font-semibold text-[#FF8A00] hover:opacity-80 transition">Privacy Policy →</Link>
          <Link to="/disclaimer" className="text-sm font-semibold text-[#FF8A00] hover:opacity-80 transition">Disclaimer →</Link>
          <Link to="/" className="text-sm text-slate-500 hover:text-white transition">← Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
