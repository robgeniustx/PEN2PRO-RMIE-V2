import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the platform.",
  },
  {
    title: "Description of Service",
    body: "PEN2PRO provides an AI-powered business roadmap and monetization intelligence platform. The platform generates business plans, roadmaps, checklists, and strategy recommendations based on information you provide. Results are educational and informational in nature.",
  },
  {
    title: "User Accounts",
    body: "You are responsible for maintaining the security of your account credentials. You must provide accurate information when creating an account. You may not share account access or use the platform on behalf of others without authorization.",
  },
  {
    title: "Subscription and Payments",
    body: "Paid plans are billed monthly or as a one-time payment as described at the time of purchase. Subscriptions renew automatically unless cancelled. Refunds are subject to our refund policy. We reserve the right to modify pricing with notice.",
  },
  {
    title: "Acceptable Use",
    body: "You may not use PEN2PRO to violate any laws, infringe on intellectual property, harass others, distribute malware, or engage in fraudulent activity. We reserve the right to suspend or terminate accounts that violate these terms.",
  },
  {
    title: "Intellectual Property",
    body: "PEN2PRO and all platform content, features, and functionality are owned by PEN2PRO and are protected by applicable intellectual property laws. AI-generated output delivered to you through the platform may be used for your personal business purposes.",
  },
  {
    title: "Disclaimer of Warranties",
    body: "PEN2PRO is provided 'as is' without warranties of any kind. We do not guarantee specific business outcomes, income levels, funding approval, credit improvement, or business success. Results depend entirely on individual effort, market conditions, and execution.",
  },
  {
    title: "Limitation of Liability",
    body: "To the maximum extent permitted by law, PEN2PRO shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform.",
  },
  {
    title: "Modifications",
    body: "We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the updated terms.",
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
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#1E88E5]">Legal</div>
          <h1 className="font-display text-4xl font-black text-white">Terms of Service</h1>
          <p className="mt-3 text-sm text-slate-500">Last updated: June 2026</p>
        </div>

        <p className="mb-10 text-slate-400 leading-relaxed">
          These Terms of Service govern your use of the PEN2PRO platform and services. Please read them carefully.
        </p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 font-bold text-white text-lg">{s.title}</h2>
              <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4 text-sm">
          <Link to="/privacy" className="text-[#FF8A00] hover:underline">Privacy Policy →</Link>
          <Link to="/disclaimer" className="text-[#FF8A00] hover:underline">Disclaimer →</Link>
          <Link to="/" className="text-slate-400 hover:text-white">← Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
