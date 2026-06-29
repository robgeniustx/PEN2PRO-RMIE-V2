import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform. These terms apply to all visitors, users, and subscribers.",
  },
  {
    title: "Platform Description",
    body: "PEN2PRO is an AI-powered business development platform — Rapid Monetization Intelligence Engine (RMIE) — that provides business roadmaps, strategy tools, funding readiness guidance, credit education, and related resources. PEN2PRO is an educational and organizational tool, not a licensed financial advisor, legal firm, or credit repair agency.",
  },
  {
    title: "User Accounts",
    body: "You are responsible for maintaining the confidentiality of your account credentials. You agree not to share your account, use the platform for unauthorized purposes, or attempt to access features outside your subscription tier. PEN2PRO reserves the right to suspend accounts that violate these terms.",
  },
  {
    title: "Subscriptions and Billing",
    body: "Paid subscriptions are billed on the cycle specified at the time of purchase (monthly or lifetime). You may cancel at any time. Refunds are handled on a case-by-case basis — contact support within 7 days of your charge with any billing concerns. Lifetime purchases are non-refundable after 14 days.",
  },
  {
    title: "Acceptable Use",
    body: "You agree to use PEN2PRO only for lawful purposes. You may not use the platform to violate any laws, infringe on intellectual property rights, distribute spam or malicious content, or misrepresent your identity. Violations may result in immediate account termination.",
  },
  {
    title: "AI-Generated Content",
    body: "PEN2PRO uses artificial intelligence to generate roadmaps, business plans, scripts, and strategy content. AI output is for informational and planning purposes only. Results are not guaranteed. You are responsible for verifying any AI-generated content before acting on it.",
  },
  {
    title: "Intellectual Property",
    body: "All platform content, branding, software, and design elements are the property of PEN2PRO and its creators. You may not reproduce, distribute, or create derivative works without explicit written permission.",
  },
  {
    title: "Limitation of Liability",
    body: "PEN2PRO is not liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability for any claim shall not exceed the amount you paid in the 3 months preceding the claim.",
  },
  {
    title: "Changes to Terms",
    body: "We reserve the right to modify these terms at any time. We will notify users of material changes via email. Continued use of PEN2PRO after changes constitutes acceptance.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Legal</p>
            <h1 className="font-display text-4xl font-black text-white">Terms of Service</h1>
            <p className="mt-3 text-sm text-slate-500">Last updated: June 2026</p>
          </div>

          <p className="mb-10 text-base leading-8 text-slate-400">
            These Terms of Service govern your access to and use of the PEN2PRO platform. Please read them carefully
            before using our services.
          </p>

          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
                <h2 className="mb-3 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-sm leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
            <h2 className="mb-3 text-lg font-bold text-white">Questions</h2>
            <p className="text-sm leading-7 text-slate-400">
              For questions about these Terms, contact us at{" "}
              <span className="font-semibold text-white">support@pen2pro.com</span>.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link to="/privacy" className="text-slate-500 hover:text-yellow-400 transition">Privacy Policy →</Link>
            <Link to="/disclaimer" className="text-slate-500 hover:text-yellow-400 transition">Disclaimer →</Link>
            <Link to="/" className="text-slate-500 hover:text-yellow-400 transition">Back to Home →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
