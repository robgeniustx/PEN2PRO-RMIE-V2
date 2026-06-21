import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our platform. These terms apply to all users, including free, Pro, Elite, and Founders tier members.",
  },
  {
    title: "Description of Service",
    body: "PEN2PRO is an AI-powered business development platform (RMIE — Rapid Monetization Intelligence Engine) that provides business roadmaps, strategy tools, credit and funding readiness resources, and business execution guidance. The platform is provided as-is and features may change over time.",
  },
  {
    title: "User Accounts",
    body: "You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate and complete information when creating your account. You may not share your account with others or use another person's account without permission.",
  },
  {
    title: "Acceptable Use",
    body: "You agree to use PEN2PRO only for lawful purposes. You may not use the platform to generate content that is illegal, fraudulent, or harmful. You may not attempt to reverse-engineer, scrape, or extract our AI models, proprietary data, or platform infrastructure.",
  },
  {
    title: "Payment and Subscriptions",
    body: "Paid plans (Pro, Elite) are billed monthly. Founders Lifetime is a one-time payment. All payments are processed securely through Stripe. Refund eligibility is evaluated on a case-by-case basis. Subscriptions may be cancelled at any time; cancellation takes effect at the end of the current billing period.",
  },
  {
    title: "Intellectual Property",
    body: "PEN2PRO retains ownership of all platform software, AI models, design, and brand assets. Business roadmaps and plans generated for your use are provided for your personal or business use. You retain ownership of the business information you input into the platform.",
  },
  {
    title: "No Guarantee of Results",
    body: "PEN2PRO provides educational content, strategy tools, and AI-generated roadmaps. We do not guarantee business success, income, funding approval, credit improvement, or any specific results. Individual outcomes depend on effort, market conditions, and factors outside our control.",
  },
  {
    title: "Limitation of Liability",
    body: "To the maximum extent permitted by law, PEN2PRO shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform. Our total liability shall not exceed the amount you paid to PEN2PRO in the 12 months preceding the claim.",
  },
  {
    title: "Termination",
    body: "We reserve the right to suspend or terminate your account for violations of these Terms. You may also delete your account at any time by contacting support. Upon termination, your access to the platform will cease and your data will be handled per our Privacy Policy.",
  },
  {
    title: "Changes to Terms",
    body: "We may update these Terms of Service from time to time. Material changes will be communicated via email or platform notification. Continued use of PEN2PRO after updates constitutes acceptance of the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-4xl font-black md:text-5xl">Terms of Service</h1>
          <p className="mb-4 text-slate-400">Last updated: June 2026</p>
          <p className="mb-12 text-slate-400 leading-relaxed">
            Please read these Terms of Service carefully before using the PEN2PRO platform. These terms govern your use of our services and form a legal agreement between you and PEN2PRO.
          </p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-3 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-sm leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <h2 className="mb-3 text-lg font-bold text-white">Contact Us</h2>
            <p className="text-sm text-slate-400">
              For questions about these Terms, contact us at{" "}
              <a href="mailto:support@pen2pro.com" className="text-[#FF8A00] hover:underline">support@pen2pro.com</a>.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link to="/privacy" className="text-slate-500 hover:text-white transition">Privacy Policy →</Link>
            <Link to="/disclaimer" className="text-slate-500 hover:text-white transition">Disclaimer →</Link>
            <Link to="/" className="text-slate-500 hover:text-white transition">Back to Home →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
