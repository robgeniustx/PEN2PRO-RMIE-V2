import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By creating an account, joining the waitlist, or using any part of PEN2PRO (the \"Platform\"), you agree to these Terms of Service. If you do not agree, do not use the Platform.",
  },
  {
    title: "What PEN2PRO Provides",
    body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) that generates business roadmaps, strategy guidance, funding and credit readiness checklists, branding direction, and related educational content. Roadmap output is generated based on the information you provide and general business best practices.",
  },
  {
    title: "No Guarantee of Results",
    body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, credit score improvement, or any specific outcome. Results depend on your individual effort, market conditions, execution, and factors outside our control.",
  },
  {
    title: "Not Legal, Financial, or Credit Repair Advice",
    body: "Content on the Platform is for educational and strategic planning purposes only. It is not a substitute for advice from a licensed attorney, accountant, credit counselor, or financial advisor. Consult a qualified professional before making legal, tax, or financial decisions.",
  },
  {
    title: "Subscriptions & Billing",
    body: "Pro, Elite, and Founders plans are billed on a recurring or one-time basis as described on the Pricing page at the time of purchase. Subscriptions can be cancelled at any time; cancellation stops future billing but does not retroactively refund the current billing period unless required by law.",
  },
  {
    title: "Acceptable Use",
    body: "You agree not to misuse the Platform — including attempting to breach security, scraping data, reselling access, or submitting unlawful, fraudulent, or harmful content through the intake forms.",
  },
  {
    title: "Affiliate & Partner Links",
    body: "PEN2PRO may earn commissions from third-party partners linked on the Funding, Credit Repair, and Affiliate pages. We do not control and are not responsible for the products, services, or outcomes provided by third parties.",
  },
  {
    title: "Account Termination",
    body: "We may suspend or terminate accounts that violate these terms, engage in abuse, or attempt to exploit the Platform.",
  },
  {
    title: "Changes to These Terms",
    body: "We may update these Terms as the Platform evolves. Continued use after changes means you accept the updated Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
          <h1 className="mb-4 font-display text-4xl font-black text-white md:text-5xl">Terms of Service</h1>
          <p className="mb-12 text-slate-400">
            Last updated 2026. Please read these terms carefully before using PEN2PRO.
          </p>
          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
