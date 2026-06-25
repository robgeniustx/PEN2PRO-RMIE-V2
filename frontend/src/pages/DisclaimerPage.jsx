import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const DISCLAIMERS = [
  {
    icon: "📊",
    title: "No Income or Business Success Guarantee",
    body: "PEN2PRO provides AI-generated business roadmaps, strategy plans, and educational resources. We do not guarantee that any user will generate income, profit, or achieve business success. Results depend entirely on individual effort, market conditions, business type, execution quality, and many other factors outside of our control.",
  },
  {
    icon: "💳",
    title: "No Credit Repair or Score Guarantee",
    body: "The credit education and guidance provided on PEN2PRO is for informational purposes only. PEN2PRO does not guarantee any improvement to your personal or business credit score. Credit outcomes depend on your individual financial history, creditor policies, and actions taken. We are not a credit repair organization. If you need formal credit repair services, consult a licensed credit professional.",
  },
  {
    icon: "🏦",
    title: "No Funding or Loan Approval Guarantee",
    body: "PEN2PRO's funding readiness tools and resources are educational only. Completing a funding readiness checklist does not guarantee loan approval, grant funding, or investor interest. Lending decisions are made solely by lenders based on their own criteria. PEN2PRO does not provide loans, investments, or financial instruments of any kind.",
  },
  {
    icon: "⚖️",
    title: "Not Legal or Financial Advice",
    body: "Nothing on the PEN2PRO platform constitutes legal, financial, tax, or accounting advice. AI-generated content, roadmaps, and strategy plans are provided for educational and planning purposes. Always consult a qualified attorney, CPA, financial advisor, or other licensed professional before making legal or financial decisions.",
  },
  {
    icon: "🤖",
    title: "AI-Generated Content",
    body: "PEN2PRO uses artificial intelligence to generate business plans, roadmaps, scripts, and strategy content. AI output may contain inaccuracies, outdated information, or content that does not apply to your specific situation. You are responsible for reviewing all AI-generated content and making your own informed decisions before acting on any recommendations.",
  },
  {
    icon: "🔗",
    title: "Affiliate Links",
    body: "PEN2PRO may include affiliate links to third-party services such as LLC formation companies, business banks, credit monitoring tools, and software providers. When you click these links and make a purchase, PEN2PRO may earn a commission. We only recommend products and services we believe may be useful to our users, but we are not responsible for the quality, accuracy, or performance of third-party products or services.",
  },
  {
    icon: "📱",
    title: "Third-Party Services",
    body: "PEN2PRO integrates with third-party services including AI providers, payment processors, voice platforms, and analytics tools. We are not responsible for the availability, accuracy, or performance of these services. Third-party service disruptions may affect PEN2PRO features.",
  },
  {
    icon: "🛡️",
    title: "Platform Availability",
    body: "PEN2PRO is provided 'as is' without warranties of any kind. We do not guarantee uninterrupted access, error-free operation, or that the platform will meet all of your requirements. We reserve the right to modify, suspend, or discontinue any part of the platform at any time.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
          <h1 className="mb-3 font-display text-4xl font-black">Disclaimer</h1>
          <p className="mb-6 text-slate-400 text-sm">
            Effective Date: June 1, 2026 · Last Updated: June 25, 2026
          </p>

          {/* Prominent notice */}
          <div className="mb-10 rounded-2xl border border-[#FF8A00]/30 bg-[#FF8A00]/08 p-6">
            <p className="text-sm font-bold text-[#FF8A00] mb-2">Important Notice</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              PEN2PRO does not guarantee credit repair results, funding approval, loan approval, income generation, or business success. The platform provides education, strategy, organization, and readiness tools. All outcomes depend on individual effort, execution, and circumstances outside PEN2PRO's control.
            </p>
          </div>

          <div className="space-y-6">
            {DISCLAIMERS.map((d) => (
              <div key={d.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-2xl">{d.icon}</span>
                  <h2 className="font-bold text-white text-lg">{d.title}</h2>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-5 text-sm text-slate-400">
            <p className="font-semibold text-white mb-1">Questions?</p>
            <p>Contact us at <span className="text-[#FF8A00]">support@pen2pro.com</span> with any questions about this disclaimer.</p>
          </div>

          <div className="mt-8 flex gap-4 text-sm">
            <Link to="/privacy" className="text-[#2d9cff] hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="text-[#2d9cff] hover:underline">Terms of Service</Link>
            <Link to="/" className="text-slate-500 hover:text-white">← Back to PEN2PRO</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
