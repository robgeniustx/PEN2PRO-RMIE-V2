import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "PEN2PRO collects the information you provide directly — such as your name, email, phone number, and business idea details — to generate your roadmap, manage your account, and communicate with you about the platform.",
      "We do not sell your personal information. Data you submit through the Starter roadmap, waitlist, or dashboard is used to power your AI-generated strategy and to improve PEN2PRO's products.",
      "Third-party tools (payment processing, analytics, email delivery) may process limited data on our behalf strictly to operate the platform. You can request account deletion at any time by contacting support.",
    ],
  },
  terms: {
    title: "Terms of Service",
    body: [
      "By using PEN2PRO, you agree to use the platform for lawful business planning purposes. Roadmaps, strategies, and AI-generated content are provided for educational and planning purposes only.",
      "Pro, Elite, and Founders subscriptions renew according to the billing terms shown at checkout. You may cancel at any time; access continues through the end of the paid period.",
      "PEN2PRO reserves the right to update these terms as the platform evolves. Continued use of the platform after changes are posted constitutes acceptance of the updated terms.",
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    body: [
      "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Every roadmap, strategy, and checklist is a planning and education tool — outcomes depend on individual effort, execution, and market conditions.",
      "PEN2PRO is not a law firm, credit repair organization, or licensed financial advisor. Nothing on this platform constitutes legal, tax, credit repair, or financial advice. Consult a qualified professional before making legal, tax, or financial decisions for your business.",
      "Affiliate links to third-party services (LLC formation, banking, funding, credit tools) may earn PEN2PRO a commission at no added cost to you. We only recommend partners we believe add real value to founders.",
    ],
  },
};

export default function LegalPage({ variant = "privacy" }) {
  const page = CONTENT[variant] || CONTENT.privacy;

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">{page.title}</h1>
        <div className="space-y-6">
          {page.body.map((paragraph, i) => (
            <p key={i} className="text-slate-400 leading-7">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link to="/starter" className="btn-gold px-8 py-3 text-center text-sm font-bold">
            Start Free Roadmap
          </Link>
          <Link to="/" className="btn-outline px-8 py-3 text-center text-sm font-bold">
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
