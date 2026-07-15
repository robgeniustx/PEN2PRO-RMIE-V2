import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Using PEN2PRO",
    body: "PEN2PRO gives you AI-generated business roadmaps, strategy tools, and execution support. By creating an account or using the free roadmap tool, you agree to use the platform honestly and not to misuse, resell, or scrape the service without permission.",
  },
  {
    title: "Plans & Billing",
    body: "PEN2PRO offers a free Starter roadmap and paid Pro, Elite, and Founders tiers. Paid plans are billed on the schedule shown at checkout. You can cancel a subscription at any time; access continues through the end of the current billing period.",
  },
  {
    title: "No Guarantee of Results",
    body: "PEN2PRO provides education, strategy, structure, and readiness tools. We do not guarantee income, funding approval, loan approval, credit repair outcomes, or business success. Results depend on your effort, market conditions, and factors outside our control.",
  },
  {
    title: "Your Content",
    body: "You own the business ideas, answers, and content you submit to PEN2PRO. We use that content to generate your roadmap and improve the platform, but we do not claim ownership of your business idea.",
  },
  {
    title: "Acceptable Use",
    body: "Do not use PEN2PRO to submit unlawful content, impersonate others, or attempt to disrupt or reverse-engineer the platform. We reserve the right to suspend accounts that violate these terms.",
  },
  {
    title: "Changes to the Service",
    body: "PEN2PRO is actively evolving. We may add, change, or remove features — including specific tools within Pro, Elite, and Founders tiers — as the platform improves.",
  },
  {
    title: "Limitation of Liability",
    body: "PEN2PRO is provided \"as is.\" To the maximum extent permitted by law, PEN2PRO is not liable for indirect, incidental, or consequential damages arising from your use of the platform.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Last updated July 2026. The ground rules for using PEN2PRO — written in plain language.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl font-bold text-white mb-3">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 rounded-2xl border border-[#1A2235] p-8 text-center sm:flex-row sm:justify-center" style={{ background: "#0F1520" }}>
          <Link to="/disclaimer" className="btn-outline px-6 py-3 text-sm font-bold">
            Read Disclaimer
          </Link>
          <Link to="/pricing" className="btn-gold px-6 py-3 text-sm font-bold">
            View Pricing
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
