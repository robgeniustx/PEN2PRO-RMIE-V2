import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using PEN2PRO — including the Starter roadmap, Builder, Accelerator, Pro, Elite, and Founders tiers — you agree to these Terms of Service. If you do not agree, do not use the platform.",
  },
  {
    title: "2. What PEN2PRO Provides",
    body: "PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that generates business roadmaps, strategy plans, branding direction, funding and credit readiness checklists, and related educational content. PEN2PRO is a planning and education tool — it is not a law firm, accounting firm, credit repair organization, or lender.",
  },
  {
    title: "3. Accounts & Access",
    body: "You are responsible for keeping your account credentials confidential and for all activity under your account. Free, Pro, Elite, and Founders tiers unlock different feature sets as described on the Pricing page.",
  },
  {
    title: "4. Payments & Subscriptions",
    body: "Paid tiers (Pro, Elite, Founders) are billed as described at checkout. Founders access is offered on a limited, early-adopter basis. Subscriptions may be cancelled at any time; access continues through the end of the paid period unless otherwise stated.",
  },
  {
    title: "5. No Guarantee of Results",
    body: "PEN2PRO does not guarantee income, business success, credit repair results, funding approval, or loan approval. Outcomes depend on your individual effort, market conditions, and factors outside our control. See our Disclaimer for full details.",
  },
  {
    title: "6. Acceptable Use",
    body: "You agree not to misuse the platform, attempt to interfere with its operation, or use it to submit unlawful, fraudulent, or harmful content.",
  },
  {
    title: "7. Intellectual Property",
    body: "The PEN2PRO name, brand, RMIE methodology, and platform content are owned by PEN2PRO. Roadmaps and content generated for your account are yours to use for your own business purposes.",
  },
  {
    title: "8. Changes to These Terms",
    body: "We may update these Terms as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4">Terms of Service</h1>
        <p className="text-slate-400 mb-10">
          These Terms govern your use of PEN2PRO's website, roadmap tools, and Starter, Pro, Elite, and Founders
          tiers.
        </p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link to="/privacy" className="btn-outline rounded-xl px-6 py-3 text-center text-sm font-bold">
            Read Privacy Policy
          </Link>
          <Link to="/disclaimer" className="btn-outline rounded-xl px-6 py-3 text-center text-sm font-bold">
            Read Disclaimer
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
