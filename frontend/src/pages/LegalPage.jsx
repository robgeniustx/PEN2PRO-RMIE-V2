import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    body: [
      "PEN2PRO collects the information you provide directly — name, email, phone, business idea, and roadmap intake answers — to generate your business roadmap, operate your account, and improve the platform.",
      "We do not sell your personal information. Data may be shared with service providers (payment processing, email delivery, analytics, hosting) strictly to operate PEN2PRO, and with affiliate partners only when you explicitly opt in through an affiliate or resource page.",
      "You can request access to, correction of, or deletion of your data at any time by contacting support. We retain account and roadmap data for as long as your account is active, or as needed to comply with legal obligations.",
      "PEN2PRO uses cookies and similar technologies for authentication, analytics, and improving the product experience. You can control cookies through your browser settings.",
    ],
  },
  "/terms": {
    title: "Terms of Service",
    body: [
      "By using PEN2PRO, you agree to use the platform for lawful business planning and development purposes only. Roadmaps, strategies, and AI-generated content are for informational and educational purposes and do not constitute legal, financial, tax, or professional advice.",
      "Free, Pro, Elite, and Founders tiers grant access to specific features as described on their respective pages. PEN2PRO reserves the right to modify features, pricing, and availability as the platform evolves.",
      "You are responsible for the accuracy of the information you submit and for any business, financial, or legal decisions made using PEN2PRO's output. PEN2PRO is a strategy, planning, and readiness tool — it does not guarantee business success, funding approval, or income.",
      "Accounts found abusing the platform, violating applicable law, or attempting to circumvent security may be suspended or terminated at PEN2PRO's discretion.",
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    body: [
      "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, business licensing, trademark approval, or business success of any kind.",
      "The platform provides education, strategy, organization, and readiness tools built from real founder experience and AI-assisted planning. Results depend on individual effort, market conditions, execution, and factors outside PEN2PRO's control.",
      "Affiliate and resource links (LLC formation, business banking, credit, funding, domains, bookkeeping, payment processing, CRM, insurance) are provided for convenience. PEN2PRO may earn a commission from these partners, and you should review each partner's own terms before signing up.",
      "Nothing on PEN2PRO constitutes legal, tax, financial, or credit repair advice. Consult a licensed professional for guidance specific to your situation.",
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = CONTENT[pathname] || CONTENT["/terms"];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8 md:text-5xl">{page.title}</h1>
        <div className="space-y-5">
          {page.body.map((p, i) => (
            <p key={i} className="text-slate-400 leading-7">
              {p}
            </p>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link to="/" className="btn-outline px-6 py-3 text-sm font-bold text-center">
            Back Home
          </Link>
          <Link to="/starter" className="btn-gold px-6 py-3 text-sm font-bold text-center">
            Start Free Roadmap
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
