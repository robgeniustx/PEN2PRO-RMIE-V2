import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By creating an account, joining the waitlist, or using PEN2PRO's roadmap, Builder, Accelerator, or plan tools (Free, Pro, Elite, Founders), you agree to these Terms of Service. If you do not agree, do not use the platform.",
  },
  {
    title: "2. What PEN2PRO Is",
    body: "PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that generates business roadmaps, strategy plans, branding direction, and funding/credit readiness guidance based on information you provide. PEN2PRO is an educational and planning tool — it is not a law firm, accounting firm, lender, credit repair organization, or investment advisor.",
  },
  {
    title: "3. No Guarantee of Results",
    body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair outcomes. Roadmaps, strategies, and AI-generated recommendations are for educational and planning purposes. Results depend on your individual effort, market conditions, financial history, and factors outside PEN2PRO's control.",
  },
  {
    title: "4. Accounts & Plans",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Free, Pro, Elite, and Founders plans provide different levels of access as described on the Pricing page. Subscription plans are billed on a recurring basis until canceled; Founders offers are limited-availability and priced as described at time of purchase.",
  },
  {
    title: "5. Acceptable Use",
    body: "You agree not to misuse PEN2PRO — including submitting unlawful content, attempting to reverse-engineer the platform, reselling AI outputs as a competing product without permission, or using the platform to harass or defraud others.",
  },
  {
    title: "6. Intellectual Property",
    body: "The PEN2PRO platform, brand, design, and underlying technology are owned by PEN2PRO. Roadmap content generated for your specific business inputs is yours to use for your own business purposes.",
  },
  {
    title: "7. Cancellation & Refunds",
    body: "You may cancel a paid subscription at any time; access continues through the end of the current billing period. Founders/lifetime offers, where applicable, are described at the time of purchase, including any refund window.",
  },
  {
    title: "8. Limitation of Liability",
    body: "PEN2PRO, its founder, and affiliates are not liable for business losses, missed opportunities, funding denials, or credit outcomes resulting from use of the platform. The platform is provided \"as is\" without warranties of any kind.",
  },
  {
    title: "9. Changes to These Terms",
    body: "We may update these Terms as PEN2PRO evolves. Continued use of the platform after changes are posted constitutes acceptance of the updated Terms.",
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Effective date: January 1, 2026. The ground rules for using PEN2PRO, in plain language.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 space-y-10">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-xl font-bold text-white mb-3">{s.title}</h2>
            <p className="text-slate-400 leading-7">{s.body}</p>
          </div>
        ))}

        <div className="rounded-xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400 leading-7">
            See also our <Link to="/privacy" className="text-[#D4A017] hover:underline">Privacy Policy</Link> and{" "}
            <Link to="/disclaimer" className="text-[#D4A017] hover:underline">Disclaimer</Link>.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
