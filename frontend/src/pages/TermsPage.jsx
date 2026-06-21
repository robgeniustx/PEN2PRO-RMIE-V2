import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the platform. These terms apply to all users including free, Pro, Elite, and Founders members.",
  },
  {
    title: "Description of Service",
    body: "PEN2PRO is an AI-powered business roadmap platform — the Rapid Monetization Intelligence Engine (RMIE). We provide business strategy tools, roadmap generation, credit readiness guidance, funding readiness frameworks, CRM tools, and related business development resources.",
  },
  {
    title: "No Guarantee of Results",
    body: "PEN2PRO does not guarantee income, revenue, business success, funding approval, credit score improvement, or any specific business outcome. Results depend entirely on the individual user's effort, execution, market conditions, and other factors outside our control. The platform provides education, strategy, structure, and tools only.",
  },
  {
    title: "Account Responsibilities",
    body: "You are responsible for maintaining the security of your account and all activity under it. Do not share your login credentials. You must provide accurate information when creating your account. PEN2PRO reserves the right to terminate accounts for violations of these terms.",
  },
  {
    title: "Payment & Refunds",
    body: "Monthly subscription plans (Pro, Elite) are billed in advance and may be cancelled at any time. Cancellation takes effect at the end of the current billing period. The Founders Lifetime plan is a one-time payment with no recurring charges. Refunds are handled on a case-by-case basis. Contact support@pen2pro.com for refund requests.",
  },
  {
    title: "Intellectual Property",
    body: "All content, AI-generated outputs, features, brand assets, and platform design are the intellectual property of PEN2PRO. You may not copy, reproduce, or distribute platform content without written permission. Roadmaps generated for your specific business idea are yours to use.",
  },
  {
    title: "Limitation of Liability",
    body: "PEN2PRO is not liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability for any claim is limited to the amount you paid in the 30 days prior to the claim.",
  },
  {
    title: "Changes to Terms",
    body: "PEN2PRO reserves the right to update these terms at any time. We will notify users of material changes via email or platform notification. Continued use of the platform after changes constitutes acceptance of the updated terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black">Terms of Service</h1>
          <p className="mt-4 text-slate-400">Last updated: June 2026</p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-2xl space-y-10">
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-sm text-slate-400 leading-relaxed">
            Please read these Terms of Service carefully before using PEN2PRO RMIE. These terms govern your access to and use of the platform.
          </div>

          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-3 text-lg font-bold text-white">{s.title}</h2>
              <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}

          <div className="border-t border-[#1A2D50] pt-8 flex flex-wrap gap-4">
            <Link to="/privacy" className="text-sm text-[#2d9cff] hover:underline">Privacy Policy</Link>
            <Link to="/disclaimer" className="text-sm text-[#2d9cff] hover:underline">Disclaimer</Link>
            <Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
