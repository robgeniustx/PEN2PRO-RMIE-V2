import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: `By accessing or using the PEN2PRO platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the platform. These terms apply to all users including free accounts, paid subscribers, and visitors.`,
  },
  {
    title: "Platform Description",
    body: `PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that provides business roadmaps, strategy tools, funding readiness guidance, credit education, and related resources. The platform is provided for informational and educational purposes and does not constitute legal, financial, accounting, or investment advice.`,
  },
  {
    title: "Account Registration",
    body: `To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your credentials and for all activity under your account. You agree to provide accurate, current information and to update it as needed. PEN2PRO reserves the right to suspend or terminate accounts that violate these terms.`,
  },
  {
    title: "Subscription Plans & Payments",
    body: `PEN2PRO offers Free, Pro ($249/month), Elite ($499/month), and Founders Lifetime ($1,899 one-time) plans. Paid subscriptions are billed through Stripe. Monthly plans can be cancelled at any time; access continues until the end of the billing period. The Founders Lifetime plan is a one-time purchase with no recurring fees. All sales are final unless otherwise stated.`,
  },
  {
    title: "AI-Generated Content",
    body: `PEN2PRO uses AI models to generate business roadmaps, strategy plans, outreach scripts, and other content. This output is generated algorithmically and should be reviewed for accuracy before acting on it. PEN2PRO does not guarantee the accuracy, completeness, or fitness of AI-generated content for any specific purpose. You are responsible for decisions made based on platform output.`,
  },
  {
    title: "Prohibited Uses",
    body: `You may not use PEN2PRO to violate any law or regulation, infringe intellectual property rights, distribute spam or malware, attempt to access systems you are not authorized to use, resell or sublicense platform access without permission, or engage in fraudulent activity. Violations may result in immediate account termination.`,
  },
  {
    title: "Intellectual Property",
    body: `All platform content, design, code, branding, and AI systems are the intellectual property of PEN2PRO and its licensors. Your account content (business ideas, roadmaps, plans you generate) belongs to you. By using the platform, you grant PEN2PRO a limited license to process your inputs to deliver platform features.`,
  },
  {
    title: "Limitation of Liability",
    body: `To the maximum extent permitted by law, PEN2PRO and its founders, employees, and partners shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the platform. PEN2PRO does not guarantee business success, funding approval, credit improvement, income generation, or any specific outcome from use of the platform.`,
  },
  {
    title: "Modifications",
    body: `PEN2PRO reserves the right to modify these Terms at any time. Changes will be posted on this page. Continued use of the platform after changes constitutes acceptance. We will notify users of material changes by email when possible.`,
  },
  {
    title: "Governing Law",
    body: `These Terms are governed by the laws of the State of Texas, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Harris County, Texas, or through binding arbitration as mutually agreed.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
          <h1 className="mb-3 font-display text-4xl font-black">Terms of Service</h1>
          <p className="mb-10 text-slate-400 text-sm">
            Effective Date: June 1, 2026 · Last Updated: June 25, 2026
          </p>

          <p className="mb-10 text-slate-300 leading-relaxed">
            These Terms of Service ("Terms") govern your access to and use of the PEN2PRO platform operated by PEN2PRO ("we," "us," or "our"). Please read these terms carefully before using the platform.
          </p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-3 font-bold text-white text-lg">{s.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-5 text-sm text-slate-400">
            <p className="font-semibold text-white mb-1">Contact</p>
            <p>For questions about these Terms, email <span className="text-[#FF8A00]">support@pen2pro.com</span>.</p>
          </div>

          <div className="mt-8 flex gap-4 text-sm">
            <Link to="/privacy" className="text-[#2d9cff] hover:underline">Privacy Policy</Link>
            <Link to="/disclaimer" className="text-[#2d9cff] hover:underline">Disclaimer</Link>
            <Link to="/" className="text-slate-500 hover:text-white">← Back to PEN2PRO</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
