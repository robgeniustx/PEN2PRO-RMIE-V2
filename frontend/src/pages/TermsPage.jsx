import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree, do not use the platform. These terms apply to all users including free, Pro, Elite, and Founders tier members.",
  },
  {
    title: "Description of Service",
    body: "PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that provides business roadmaps, launch strategies, credit readiness guidance, and monetization tools. The platform is for informational and educational purposes. We do not guarantee any specific business outcome, revenue, funding approval, or credit result.",
  },
  {
    title: "Account Responsibilities",
    body: "You are responsible for maintaining the security of your account credentials. You must provide accurate information when registering. You may not share accounts, resell platform access, or use the platform for illegal purposes. PEN2PRO reserves the right to suspend accounts that violate these terms.",
  },
  {
    title: "Subscription Plans & Billing",
    body: "Pro and Elite plans are billed monthly. Founders Lifetime access is a one-time purchase. Billing is processed through Stripe. You may cancel your subscription at any time; cancellation takes effect at the end of the current billing period. Refunds are not provided for partial billing periods except where required by law.",
  },
  {
    title: "Intellectual Property",
    body: "PEN2PRO and the RMIE framework are proprietary to PEN2PRO. The AI-generated output in your roadmaps is yours to use for your own business. You may not resell, license, or redistribute PEN2PRO's platform, tools, or underlying technology.",
  },
  {
    title: "Disclaimer of Warranties",
    body: "PEN2PRO is provided 'as is' without warranties of any kind. We do not guarantee that the platform will be uninterrupted, error-free, or that any business roadmap will result in a specific business outcome. AI-generated content is for informational purposes only and should not replace professional legal, financial, or business advice.",
  },
  {
    title: "Limitation of Liability",
    body: "To the maximum extent permitted by law, PEN2PRO shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability for any claim shall not exceed the amount you paid us in the 12 months preceding the claim.",
  },
  {
    title: "Affiliate Links",
    body: "PEN2PRO's affiliate page contains links to third-party services. We may earn a commission if you purchase through these links. This does not affect the price you pay. We only recommend services we believe provide value.",
  },
  {
    title: "Changes to Terms",
    body: "We reserve the right to update these terms at any time. Continued use of PEN2PRO after changes constitutes acceptance. We will notify users of material changes via email or an in-platform notice.",
  },
  {
    title: "Governing Law",
    body: "These terms are governed by the laws of the State of Texas. Any disputes shall be resolved in the courts of Harris County, Texas.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
          Legal
        </div>
        <h1 className="mb-3 font-display text-4xl font-black">Terms of Service</h1>
        <p className="mb-2 text-sm text-slate-400">Effective date: June 1, 2026</p>
        <p className="mb-12 text-slate-400 leading-relaxed">
          Please read these Terms of Service carefully before using PEN2PRO. These terms govern your use of the platform and all associated services.
        </p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-3 text-xl font-bold text-white">{s.title}</h2>
              <p className="text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
          <p className="text-sm text-slate-400">
            Questions about these terms? Contact us at{" "}
            <a href="mailto:support@pen2pro.com" className="text-[#D4A017] hover:underline">
              support@pen2pro.com
            </a>
          </p>
        </div>

        <div className="mt-8 flex gap-4 text-sm">
          <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/disclaimer" className="text-slate-400 hover:text-white transition-colors">Disclaimer</Link>
          <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
