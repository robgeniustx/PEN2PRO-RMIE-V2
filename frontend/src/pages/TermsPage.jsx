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
    body: "PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that generates business roadmaps, launch strategies, branding direction, and readiness checklists based on information you provide. Free, Pro, Elite, and Founders plans unlock different levels of access as described on the Pricing page.",
  },
  {
    title: "No Guarantee of Results",
    body: "PEN2PRO provides education, strategy, structure, and readiness tools. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your own effort, market conditions, and factors outside our control.",
  },
  {
    title: "Accounts & Payment",
    body: "Pro, Elite, and Founders plans are billed as described at checkout. You may cancel a recurring plan at any time; access continues through the end of the current billing period. Founders offers may be limited in availability and are non-transferable unless stated otherwise.",
  },
  {
    title: "Acceptable Use",
    body: "You agree not to misuse the platform, attempt to reverse-engineer the AI system, resell PEN2PRO output as your own software product, or use the service for unlawful purposes.",
  },
  {
    title: "Intellectual Property",
    body: "The PEN2PRO name, brand, platform, and underlying technology are the property of PEN2PRO. Your business ideas and the roadmap generated for you remain yours to use.",
  },
  {
    title: "Limitation of Liability",
    body: "PEN2PRO is provided \"as is.\" To the fullest extent permitted by law, PEN2PRO is not liable for indirect, incidental, or consequential damages arising from use of the platform, including business losses or missed opportunities.",
  },
  {
    title: "Changes to These Terms",
    body: "We may update these Terms as the platform evolves. Continued use of PEN2PRO after changes are posted means you accept the updated Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
          <h1 className="mb-4 font-display text-4xl font-black md:text-5xl">Terms of Service</h1>
          <p className="mb-10 text-sm text-slate-500">Last updated: 2026</p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-2 font-display text-lg font-bold text-white">{s.title}</h2>
                <p className="text-sm leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link to="/privacy" className="btn-outline px-6 py-3 text-center text-sm font-bold">
              Read Privacy Policy
            </Link>
            <Link to="/disclaimer" className="btn-outline px-6 py-3 text-center text-sm font-bold">
              Read Disclaimer
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
