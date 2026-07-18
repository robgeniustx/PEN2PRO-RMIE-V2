import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = {
  "/privacy": {
    title: "Privacy Policy",
    body: [
      "PEN2PRO collects the information you provide directly — name, email, phone, business idea, and roadmap answers — to generate your business roadmap, operate your account, and follow up on waitlist or upgrade requests.",
      "We do not sell your personal information. Data is used to power the RMIE engine, improve the platform, and communicate with you about your roadmap, plan, or account.",
      "You can request that your data be updated or removed at any time by contacting support through the Sign In page or the email associated with your account.",
    ],
  },
  "/terms": {
    title: "Terms of Service",
    body: [
      "By using PEN2PRO, you agree to use the platform's roadmaps, strategy tools, and guidance for lawful business purposes only.",
      "PEN2PRO provides AI-generated business strategy, planning, and readiness tools. It is not a law firm, accounting firm, credit repair organization, or lender, and does not provide legal, tax, or financial advice.",
      "Plans, pricing, and features described on this site may change as the platform develops. Continued use of PEN2PRO after changes constitutes acceptance of the updated terms.",
    ],
  },
  "/disclaimer": {
    title: "Disclaimer",
    body: [
      "PEN2PRO does not guarantee income, business success, credit repair results, funding approval, or loan approval.",
      "The platform provides education, strategy, organization, and readiness tools. Outcomes depend on individual effort, market conditions, financial history, and factors outside PEN2PRO's control.",
      "Always consult a qualified attorney, accountant, or financial professional before making legal, tax, or lending decisions for your business.",
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const section = SECTIONS[pathname] || SECTIONS["/terms"];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</p>
        <h1 className="font-display mb-8 text-4xl font-black text-white">{section.title}</h1>
        <div className="space-y-5">
          {section.body.map((p, i) => (
            <p key={i} className="text-base leading-7 text-slate-400">
              {p}
            </p>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4 border-t border-[#1A2D50] pt-8">
          {Object.entries(SECTIONS).map(([path, s]) => (
            <Link
              key={path}
              to={path}
              className={`text-sm font-semibold transition-colors ${
                path === pathname ? "text-[#FF8A00]" : "text-slate-500 hover:text-white"
              }`}
            >
              {s.title}
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
