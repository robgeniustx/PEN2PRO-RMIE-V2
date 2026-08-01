import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    title: "Privacy Policy",
    body: [
      "PEN2PRO collects the information you provide directly — name, email, phone, and business details — when you request a roadmap, join the waitlist, or create an account. We use this information to generate your roadmap, communicate with you about your account, and improve the platform.",
      "We do not sell your personal information. We share data only with the service providers required to operate PEN2PRO (payment processing, hosting, and analytics) and only to the extent needed to deliver the service.",
      "You can request access to, correction of, or deletion of your data at any time by contacting us through the waitlist form or your account settings.",
    ],
  },
  "/terms": {
    title: "Terms of Service",
    body: [
      "By using PEN2PRO, you agree to use the platform for lawful purposes and to provide accurate information when creating an account or requesting a roadmap.",
      "PEN2PRO provides business planning, strategy, and educational tools generated with the help of AI. Roadmaps, financial projections, and strategy output are estimates and starting points — not guarantees of business, funding, or financial outcomes.",
      "Subscription plans (Pro, Elite, Founders) renew according to the billing terms shown at checkout. You may cancel at any time from your account settings; access continues through the end of the current billing period.",
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    body: [
      "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Every roadmap, strategy, and checklist is a planning tool — outcomes depend on your effort, market conditions, and factors outside our control.",
      "PEN2PRO is not a law firm, credit repair organization, financial institution, or registered investment advisor. Content on this platform is for education and planning purposes and should not be treated as legal, tax, credit, or financial advice.",
      "Before making legal, tax, credit, or financial decisions for your business, consult a qualified professional licensed in your state.",
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
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">{page.title}</h1>
        <div className="space-y-5">
          {page.body.map((p, i) => (
            <p key={i} className="text-slate-400 leading-7">{p}</p>
          ))}
        </div>
        <p className="mt-10 text-xs text-slate-600">
          Questions about this policy? Reach out from the{" "}
          <Link to="/waitlist" className="text-[#FF8A00] hover:underline">waitlist page</Link> and we'll follow up.
        </p>
      </div>
      <Footer />
    </div>
  );
}
