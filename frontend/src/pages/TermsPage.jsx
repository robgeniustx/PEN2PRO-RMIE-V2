import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By creating an account or using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.",
  },
  {
    title: "2. What PEN2PRO Provides",
    body: "PEN2PRO's RMIE (Rapid Monetization Intelligence Engine) generates business roadmaps, strategy guidance, and planning tools based on the information you provide. This is educational and strategic guidance — it is not legal, tax, financial, or investment advice.",
  },
  {
    title: "3. Plans & Billing",
    body: "Free, Pro, Elite, and Founders plans are billed as described on the Pricing page. Subscriptions renew automatically until canceled. You can cancel at any time from your dashboard; access continues through the end of the current billing period.",
  },
  {
    title: "4. Your Account",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Notify us immediately if you suspect unauthorized use.",
  },
  {
    title: "5. Acceptable Use",
    body: "You agree not to use PEN2PRO to generate content for illegal activity, misrepresent your business to lenders or partners, or attempt to reverse-engineer, resell, or scrape the platform without permission.",
  },
  {
    title: "6. No Guarantee of Results",
    body: "PEN2PRO provides strategy, structure, and readiness tools. We do not guarantee income, business success, credit approval, or funding approval. Outcomes depend on your effort, market conditions, and factors outside our control.",
  },
  {
    title: "7. Intellectual Property",
    body: "The PEN2PRO platform, brand, and underlying technology are owned by PEN2PRO. Roadmaps and plans generated for your account are yours to use for your own business.",
  },
  {
    title: "8. Termination",
    body: "We may suspend or terminate accounts that violate these terms, engage in abusive behavior, or attempt to defraud the platform or other users.",
  },
  {
    title: "9. Limitation of Liability",
    body: "PEN2PRO is provided \"as is.\" To the fullest extent permitted by law, PEN2PRO is not liable for indirect, incidental, or consequential damages arising from your use of the platform.",
  },
  {
    title: "10. Changes to These Terms",
    body: "We may update these Terms as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4 md:text-5xl">
          Terms of <span className="gradient-text">Service</span>
        </h1>
        <p className="text-slate-400 mb-12">Effective date: January 1, 2026</p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-[#1A2D50] bg-[#0A0F1E] p-6">
          <p className="text-sm text-slate-400">
            Questions about these terms? Contact us at{" "}
            <a href="mailto:support@pen2pro.com" className="text-[#FF8A00] hover:underline">
              support@pen2pro.com
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
