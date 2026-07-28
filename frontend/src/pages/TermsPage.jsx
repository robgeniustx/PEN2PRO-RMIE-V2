import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By creating an account, joining the waitlist, or using any part of PEN2PRO (the \"Platform\"), you agree to these Terms of Service. If you do not agree, do not use the Platform.",
  },
  {
    title: "2. What PEN2PRO Provides",
    body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) that generates business roadmaps, launch strategies, branding direction, and funding/credit readiness guidance based on the information you provide. PEN2PRO is a planning, education, and organization tool — it is not a law firm, accounting firm, credit repair organization, or licensed financial advisor.",
  },
  {
    title: "3. Subscription Tiers",
    body: "Starter is free and provides a preview roadmap. Pro, Elite, and Founders are paid tiers billed through Stripe. Founders access is offered on a limited, early-adopter basis. Pricing, features, and availability may change as the Platform develops; current subscribers will be notified of material changes.",
  },
  {
    title: "4. Your Responsibilities",
    body: "You agree to provide accurate information, use the Platform for lawful purposes, and take responsibility for decisions made using PEN2PRO's output. AI-generated strategy is a starting point — you are responsible for verifying legal, tax, licensing, and financial requirements specific to your business and location.",
  },
  {
    title: "5. No Guarantee of Results",
    body: "PEN2PRO does not guarantee income, funding approval, loan approval, credit score improvement, or business success of any kind. Results depend on individual effort, market conditions, execution, and factors outside PEN2PRO's control. See our full Disclaimer for details.",
  },
  {
    title: "6. Payments & Refunds",
    body: "Subscription payments are billed on a recurring basis (Pro, Elite) or as a one-time charge (Founders), processed securely through Stripe. You may cancel a recurring subscription at any time; access continues through the end of the current billing period. Contact support for refund requests, which are reviewed case by case.",
  },
  {
    title: "7. Intellectual Property",
    body: "The PEN2PRO platform, brand, RMIE methodology, and generated templates are the property of PEN2PRO. Your business idea and the specific roadmap generated for you remain yours to use.",
  },
  {
    title: "8. Termination",
    body: "We may suspend or terminate accounts that violate these terms, abuse the Platform, or engage in fraudulent activity. You may close your account at any time.",
  },
  {
    title: "9. Limitation of Liability",
    body: "PEN2PRO is provided \"as is.\" To the fullest extent permitted by law, PEN2PRO is not liable for indirect, incidental, or consequential damages arising from use of the Platform.",
  },
  {
    title: "10. Changes to These Terms",
    body: "We may update these Terms as PEN2PRO evolves. Continued use of the Platform after changes are posted constitutes acceptance of the updated Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-3 md:text-5xl">
          Terms of <span className="gradient-text">Service</span>
        </h1>
        <p className="text-slate-400 mb-12">Effective date: January 1, 2026</p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="font-display text-xl font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-xl border p-6" style={{ borderColor: "#1A2D50", background: "#0D1528" }}>
          <p className="text-sm text-slate-400 mb-4">
            For more on what PEN2PRO does and does not guarantee, read our Disclaimer. For how we handle your data, read our Privacy Policy.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/disclaimer" className="text-sm font-bold text-[#FF8A00] hover:text-[#FFC107]">Disclaimer →</Link>
            <Link to="/privacy" className="text-sm font-bold text-[#FF8A00] hover:text-[#FFC107]">Privacy Policy →</Link>
            <Link to="/pricing" className="text-sm font-bold text-[#FF8A00] hover:text-[#FFC107]">View Pricing →</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
