import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By creating an account or using PEN2PRO, you agree to these Terms of Service. If you don't agree, please don't use the platform.",
  },
  {
    title: "2. What PEN2PRO Provides",
    body: "PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that generates business roadmaps, strategy guidance, and readiness checklists based on the information you provide. It is an educational and planning tool — not legal, financial, tax, or credit repair advice.",
  },
  {
    title: "3. Account Responsibilities",
    body: "You're responsible for the accuracy of the information you submit and for keeping your account credentials secure. You must be at least 18 years old to create an account.",
  },
  {
    title: "4. Subscriptions & Billing",
    body: "Pro, Elite, and Founders plans are billed on the terms shown at checkout. You may cancel a recurring subscription at any time; access continues through the end of the current billing period. Founders/lifetime offers are subject to the availability and terms shown on the Founders page at time of purchase.",
  },
  {
    title: "5. No Guarantee of Results",
    body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair outcomes. Roadmaps and strategies are informational — results depend on your effort, market conditions, and factors outside our control.",
  },
  {
    title: "6. Acceptable Use",
    body: "You agree not to misuse the platform — including attempting to reverse-engineer the AI systems, submit unlawful content, or use PEN2PRO to harm others.",
  },
  {
    title: "7. Limitation of Liability",
    body: "PEN2PRO and its team are not liable for indirect, incidental, or consequential damages arising from your use of the platform, to the fullest extent permitted by law.",
  },
  {
    title: "8. Changes to These Terms",
    body: "We may update these Terms as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-4xl font-black md:text-5xl">Terms of Service</h1>
          <p className="mb-12 text-sm text-slate-500">Effective date: January 1, 2026</p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-sm leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-slate-500">
            See also our{" "}
            <Link to="/privacy" className="text-[#FF8A00] hover:underline">Privacy Policy</Link> and{" "}
            <Link to="/disclaimer" className="text-[#FF8A00] hover:underline">Disclaimer</Link>.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
