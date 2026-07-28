import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    body: [
      "PEN2PRO collects the information you provide directly — such as your name, email, phone number, and business idea details — when you join the waitlist, create an account, or generate a roadmap.",
      "We use this information to deliver the RMIE roadmap experience, communicate with you about your account and plan options, and improve the platform. We do not sell your personal information to third parties.",
      "Payment information for Pro, Elite, and Founders plans is processed securely by Stripe. PEN2PRO does not store your card details.",
      "Affiliate links on this site may earn PEN2PRO a commission at no extra cost to you. See our Disclaimer for details.",
      "You can request access to, correction of, or deletion of your data at any time by contacting the PEN2PRO team.",
    ],
  },
  "/terms": {
    title: "Terms of Service",
    updated: "Last updated: January 2026",
    body: [
      "By using PEN2PRO, you agree to use the platform for lawful purposes and to provide accurate information when creating an account or submitting a business idea.",
      "PEN2PRO provides AI-generated business roadmaps, strategy guidance, and educational content. Roadmaps are informational tools, not professional legal, tax, financial, or investment advice.",
      "Free, Pro, Elite, and Founders plans are described on the Pricing page. Subscription plans renew automatically unless cancelled; Founders access is a one-time purchase as described at checkout.",
      "You are responsible for the business decisions you make using PEN2PRO's output. PEN2PRO is not liable for business outcomes, lost revenue, or missed opportunities resulting from use of the platform.",
      "We may update these Terms from time to time. Continued use of PEN2PRO after changes means you accept the revised Terms.",
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    updated: "Last updated: January 2026",
    body: [
      "PEN2PRO does not guarantee income, business success, credit repair results, funding approval, or loan approval of any kind.",
      "The platform provides education, strategy, organization, and readiness tools built from real founder experience and AI-assisted analysis — not a promise of outcome. Results depend on individual effort, market conditions, and execution.",
      "Credit and funding content on PEN2PRO (including the Funding Readiness and Credit Repair pages) is for educational purposes only and is not a substitute for advice from a licensed credit counselor, attorney, or financial advisor.",
      "Some links on PEN2PRO are affiliate links to third-party services (LLC formation, business banking, funding partners, and similar tools). PEN2PRO may earn a commission if you use these links, at no additional cost to you.",
      "Always do your own due diligence before entering into any business, credit, or funding agreement.",
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = CONTENT[pathname] || CONTENT["/terms"];

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
          <h1 className="mb-2 font-display text-4xl font-black">{page.title}</h1>
          <p className="mb-10 text-sm text-slate-500">{page.updated}</p>
          <div className="space-y-5">
            {page.body.map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed text-slate-400">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3 border-t border-[#1A2D50] pt-8">
            <Link to="/privacy" className="text-sm font-semibold text-slate-400 hover:text-white">Privacy</Link>
            <Link to="/terms" className="text-sm font-semibold text-slate-400 hover:text-white">Terms</Link>
            <Link to="/disclaimer" className="text-sm font-semibold text-slate-400 hover:text-white">Disclaimer</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
