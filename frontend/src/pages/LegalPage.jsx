import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    sections: [
      ["What We Collect", "When you use PEN2PRO, we collect the information you give us directly — name, email, phone number, business idea details, and roadmap intake answers. We also collect basic usage data (pages visited, features used) to improve the platform."],
      ["How We Use It", "We use your information to generate your business roadmap, respond to waitlist and support requests, improve PEN2PRO's tools, and — only if you opt in — send updates about Pro, Elite, and Legacy Founder access."],
      ["How We Protect It", "We limit access to your data to the systems and team members who need it to operate PEN2PRO. We do not sell your personal information."],
      ["Third Parties", "PEN2PRO may share limited data with service providers (payment processing, email delivery, analytics) strictly to operate the platform. Affiliate partners linked from PEN2PRO have their own privacy policies."],
      ["Your Choices", "You can request access to, correction of, or deletion of your data at any time by contacting us through the Waitlist or Sign In support channels."],
    ],
  },
  terms: {
    title: "Terms of Service",
    sections: [
      ["Using PEN2PRO", "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through its RMIE (Rapid Monetization Intelligence Engine). By using the platform, you agree to use it lawfully and not to misuse, resell, or scrape its outputs without permission."],
      ["No Guarantees", "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control."],
      ["Plans & Billing", "Free, Pro, Elite, and Legacy Founder plans are described on our Pricing page. Where billing is active, you authorize recurring charges for paid plans until you cancel. Founders/lifetime offers are limited and subject to availability."],
      ["Intellectual Property", "Roadmaps, templates, and strategy content generated for you are yours to use for your own business. PEN2PRO retains ownership of its platform, brand, and underlying technology."],
      ["Changes", "We may update these Terms as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated Terms."],
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    sections: [
      ["Educational Purpose", "PEN2PRO's roadmaps, strategy plans, funding readiness checklists, and credit-building guidance are for educational and organizational purposes only. They are not legal, tax, financial, or credit repair advice."],
      ["No Guaranteed Results", "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Every business, credit profile, and market is different, and results depend on individual effort, execution, and circumstances outside our control."],
      ["Professional Advice", "Before making legal, financial, or credit-related decisions, consult a qualified attorney, accountant, or licensed credit professional. PEN2PRO is a strategy and readiness tool, not a substitute for professional counsel."],
      ["Affiliate Relationships", "PEN2PRO may earn a commission from affiliate partners (LLC formation, business banking, funding, and similar services) linked from the platform, at no extra cost to you."],
    ],
  },
};

export default function LegalPage({ page }) {
  const data = CONTENT[page];
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">PEN2PRO</p>
        <h1 className="font-display mb-8 text-3xl font-black text-white md:text-4xl">{data.title}</h1>
        <div className="space-y-8">
          {data.sections.map(([heading, body]) => (
            <div key={heading}>
              <h2 className="mb-2 text-lg font-bold text-white">{heading}</h2>
              <p className="text-slate-400 leading-7">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-xs text-slate-600">
          Questions? Reach out through our{" "}
          <Link to="/waitlist" className="text-[#FF8A00] hover:underline">waitlist form</Link>
          {" "}or{" "}
          <Link to="/about" className="text-[#FF8A00] hover:underline">About page</Link>.
        </p>
      </div>
      <Footer />
    </div>
  );
}
