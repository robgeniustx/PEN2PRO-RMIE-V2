import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.",
  },
  {
    title: "The Service",
    body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that helps users turn ideas, skills, and lived experience into business roadmaps, launch strategies, and funding/credit readiness guidance. Features vary by plan (Free, Pro, Elite, Legacy Founder).",
  },
  {
    title: "Your Account",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. You must provide accurate information when creating a roadmap or account.",
  },
  {
    title: "Subscriptions & Billing",
    body: "Paid plans are billed on a recurring basis until canceled. You may cancel at any time; access continues through the end of the current billing period. Founders/Legacy pricing, where offered, is described on the relevant plan page at time of purchase.",
  },
  {
    title: "Acceptable Use",
    body: "You agree not to misuse PEN2PRO, including attempting to disrupt the service, reverse-engineer the platform, or use AI-generated output for unlawful purposes.",
  },
  {
    title: "No Guarantee of Results",
    body: "As described in our Disclaimer, PEN2PRO does not guarantee income, business success, funding approval, or credit repair results. See the full Disclaimer for details.",
  },
  {
    title: "Changes to the Service",
    body: "We may update, modify, or discontinue features of PEN2PRO at any time as the platform evolves.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-4 font-display text-4xl font-black leading-tight md:text-5xl">Terms of Service</h1>
          <p className="mb-12 text-slate-400 leading-relaxed">
            These terms govern your use of PEN2PRO. Please read them carefully.
          </p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-2 font-bold text-white text-lg">{s.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              View Privacy Policy
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              View Disclaimer
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
