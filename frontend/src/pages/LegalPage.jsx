import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "PEN2PRO collects only the information you provide directly — such as your name, email, phone number, and business idea details — to generate your roadmap, manage your account, and communicate with you about the platform.",
      "We do not sell your personal information. Data you submit through the waitlist, roadmap builder, or dashboard is used to operate PEN2PRO's services and is stored securely.",
      "Third-party affiliate and funding partner links on this site are provided for your convenience. PEN2PRO is not responsible for the privacy practices of external sites you visit through those links.",
      "For questions about your data or to request deletion of your information, contact the PEN2PRO team through the Waitlist or Sign In page.",
    ],
  },
  terms: {
    title: "Terms of Service",
    body: [
      "By using PEN2PRO, you agree to use the platform for lawful business planning and educational purposes only.",
      "PEN2PRO provides AI-generated roadmaps, strategy guidance, and educational content. It does not provide legal, tax, financial, or credit repair services, and nothing on this platform constitutes professional advice.",
      "Free, Pro, Elite, and Founders tiers are subject to the features and pricing described on their respective plan pages at the time of purchase or signup. Pricing and features may change as the platform evolves.",
      "PEN2PRO reserves the right to update these terms as the platform grows. Continued use of the platform after changes constitutes acceptance of the updated terms.",
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    body: [
      "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results.",
      "The platform provides education, strategy, organization, and readiness tools — not guaranteed outcomes. Your results depend on your own effort, market conditions, execution, and factors outside of PEN2PRO's control.",
      "Any income examples, growth projections, or success stories referenced on this platform are illustrative and not a promise of similar results for every user.",
      "Always consult a qualified attorney, accountant, or financial advisor before making legal, tax, credit, or funding decisions for your business.",
    ],
  },
};

export default function LegalPage({ type }) {
  const page = CONTENT[type] || CONTENT.privacy;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">{page.title}</h1>
        <div className="space-y-5">
          {page.body.map((p, i) => (
            <p key={i} className="text-slate-400 leading-7">{p}</p>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link to="/waitlist" className="btn-gold px-6 py-3 text-sm font-bold">Join the Waitlist</Link>
          <Link to="/" className="btn-outline px-6 py-3 text-sm font-bold">Back Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
