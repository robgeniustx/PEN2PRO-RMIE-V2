import { useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    body: [
      "PEN2PRO collects the information you provide directly — name, email, phone, business idea details, and waitlist or roadmap intake responses — to generate your roadmap, respond to inquiries, and improve the platform.",
      "We do not sell your personal information. Data may be shared with service providers (payment processing, email, analytics) strictly to operate PEN2PRO.",
      "You can request access to, correction of, or deletion of your data at any time by contacting the PEN2PRO team through the waitlist or support channels listed on this site.",
    ],
  },
  "/terms": {
    title: "Terms of Service",
    body: [
      "By using PEN2PRO, you agree to use the platform's roadmaps, strategy tools, and content for lawful business planning purposes only.",
      "PEN2PRO provides business education, strategy, and organizational tools. Nothing on this platform is legal, tax, credit, or financial advice, and outputs should be validated with a licensed professional before you rely on them for major decisions.",
      "Subscriptions (Pro, Elite, Founders) renew according to the billing terms shown at checkout. You may cancel at any time from your account settings once billing is live.",
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    body: [
      "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on individual effort, market conditions, and factors outside PEN2PRO's control.",
      "The platform provides education, strategy, organization, and readiness tools — not a promise of any specific financial result.",
      "Founder story and testimonials shared on this site reflect real, individual experiences and are not a guarantee that any other user will achieve the same results.",
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
        <h1 className="font-display text-4xl font-black text-white mb-8">{page.title}</h1>
        <div className="space-y-5">
          {page.body.map((paragraph, i) => (
            <p key={i} className="text-slate-400 leading-7">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
