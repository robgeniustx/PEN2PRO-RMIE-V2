import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "What We Collect",
        body: "When you use PEN2PRO, we collect information you provide directly — such as your name, email, phone number, business idea, and roadmap intake answers — along with basic usage data (pages visited, features used) to help us improve the platform.",
      },
      {
        heading: "How We Use It",
        body: "We use your information to generate your business roadmap, operate your account, communicate with you about your plan or the waitlist, and improve PEN2PRO's tools. We do not sell your personal information to third parties.",
      },
      {
        heading: "Payment Information",
        body: "If you upgrade to Pro, Elite, or Founders, payment is processed securely through our payment provider (Stripe). PEN2PRO does not store your full card details on its own servers.",
      },
      {
        heading: "Affiliate & Partner Links",
        body: "Some pages (Funding, Credit Repair, Affiliate) link to third-party partners for services like LLC formation, business banking, or credit tools. Those partners have their own privacy policies — review them before submitting information on their sites.",
      },
      {
        heading: "Your Choices",
        body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You may also unsubscribe from email communications at any time.",
      },
      {
        heading: "Contact",
        body: "Questions about this policy? Reach out through the contact options on our waitlist or support pages.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational content through its RMIE (Rapid Monetization Intelligence Engine). By using the platform, you agree to use it for lawful purposes and to provide accurate information during intake.",
      },
      {
        heading: "No Guarantee of Results",
        body: "PEN2PRO is a strategy, planning, and education tool. We do not guarantee income, business success, funding approval, loan approval, or credit repair outcomes. Results depend on your effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Plans & Billing",
        body: "Free, Pro, Elite, and Founders plans are described on our Pricing page. Paid plans are billed on a recurring or one-time basis as described at checkout. You may cancel a recurring plan at any time; cancellation stops future billing but does not refund past charges unless required by law.",
      },
      {
        heading: "Intellectual Property",
        body: "The PEN2PRO platform, brand, and RMIE methodology are owned by PEN2PRO. Roadmaps and content generated for your account are yours to use for your own business.",
      },
      {
        heading: "Third-Party Services",
        body: "PEN2PRO may link to third-party affiliate partners for services such as LLC formation, banking, credit, or funding. We are not responsible for the products, services, or outcomes provided by those third parties.",
      },
      {
        heading: "Changes to These Terms",
        body: "We may update these Terms from time to time. Continued use of PEN2PRO after changes means you accept the updated Terms.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Educational & Strategic Tool",
        body: "PEN2PRO is an AI-powered planning platform. It provides business strategy, roadmap generation, and readiness education — it is not a law firm, accounting firm, credit repair organization, or lender.",
      },
      {
        heading: "No Guaranteed Outcomes",
        body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Every roadmap and recommendation depends on your market, effort, resources, and execution.",
      },
      {
        heading: "Credit & Funding Content",
        body: "Content on our Funding and Credit Repair pages is for educational and organizational purposes only. It is not financial, legal, or credit repair advice. Consult a licensed professional before making financial decisions.",
      },
      {
        heading: "Affiliate Relationships",
        body: "PEN2PRO may earn a commission when you use partner links for services like LLC formation, business banking, funding, or credit tools. These are recommendations, not guarantees of quality or results.",
      },
      {
        heading: "Your Responsibility",
        body: "You are responsible for verifying any legal, tax, financial, or credit information before acting on it, and for complying with applicable laws in your business.",
      },
    ],
  },
};

export default function LegalPage({ type }) {
  const page = CONTENT[type] || CONTENT.terms;

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">{page.title}</h1>
        <p className="mt-2 text-sm text-slate-500">{page.updated}</p>

        <div className="mt-10 space-y-8">
          {page.sections.map((s) => (
            <section key={s.heading} className="rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
              <h2 className="text-lg font-bold text-white">{s.heading}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border p-6 text-sm leading-7 text-slate-400" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
          <strong className="text-slate-300">Disclaimer:</strong> PEN2PRO does not guarantee income, funding approval, loan approval, or credit repair results. Results depend on individual effort, market conditions, and execution. The platform provides education, strategy, organization, and readiness tools — not legal, financial, or credit repair services.
        </div>

        <div className="mt-10 flex flex-wrap gap-4 text-sm">
          <Link to="/privacy" className="text-slate-400 hover:text-[#FF8A00] transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-slate-400 hover:text-[#FF8A00] transition-colors">Terms of Service</Link>
          <Link to="/disclaimer" className="text-slate-400 hover:text-[#FF8A00] transition-colors">Disclaimer</Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
