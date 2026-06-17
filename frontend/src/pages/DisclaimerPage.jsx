import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const DISCLAIMERS = [
  {
    icon: "📊",
    title: "No Income Guarantee",
    body: "PEN2PRO does not guarantee that using the platform will result in income, revenue, profit, or business success. Business results depend entirely on individual effort, market conditions, execution quality, timing, resources, and many other factors outside our control. Any income figures, projections, or examples shown on the platform are illustrative only and do not represent typical results.",
  },
  {
    icon: "💳",
    title: "No Credit Repair Guarantee",
    body: "PEN2PRO provides credit education, readiness tools, and organizational resources. We are not a credit repair organization. We do not guarantee credit score improvements, the removal of negative items, or any specific credit outcome. Individual credit results vary based on your history, creditor policies, and the credit bureaus. Always consult a licensed credit professional for specific credit repair advice.",
  },
  {
    icon: "🏦",
    title: "No Funding or Loan Guarantee",
    body: "PEN2PRO provides funding readiness education and organizational tools. We do not guarantee that any lender, investor, grant organization, or financial institution will approve your funding application. Funding approval depends entirely on your financial profile, lender criteria, and factors outside our control. We are not a lender, broker, or financial advisor.",
  },
  {
    icon: "⚖️",
    title: "Not Legal or Financial Advice",
    body: "Nothing on PEN2PRO — including AI-generated roadmaps, checklists, guides, or recommendations — constitutes legal, financial, accounting, tax, or investment advice. The information provided is for general educational purposes only. You should consult qualified legal and financial professionals before forming a business entity, applying for loans, making investment decisions, or taking other significant financial or legal actions.",
  },
  {
    icon: "🤖",
    title: "AI-Generated Content",
    body: "PEN2PRO uses artificial intelligence to generate business roadmaps and strategic recommendations. AI-generated content may contain errors, outdated information, or content that is not applicable to your specific situation. Always verify AI-generated information with qualified professionals and current sources before acting on it.",
  },
  {
    icon: "🔗",
    title: "Affiliate Relationships",
    body: "PEN2PRO may earn referral commissions when you use affiliate links to purchase third-party products or services. This does not increase your cost, but it does mean we have a financial interest in those products. We recommend products and services we believe are useful, but we do not independently verify the claims or quality of all affiliate partners. Do your own due diligence before purchasing from any third-party provider.",
  },
  {
    icon: "🌐",
    title: "Third-Party Services",
    body: "PEN2PRO integrates with and links to third-party services including Stripe, OpenAI, ElevenLabs, Twilio, and various affiliate partners. We are not responsible for the availability, accuracy, security, or practices of any third-party service. Use third-party services at your own risk and review their individual terms and privacy policies.",
  },
  {
    icon: "📱",
    title: "Platform Availability",
    body: "PEN2PRO is provided \"as is\" without warranty of uninterrupted access. We may perform maintenance, updates, or experience technical issues that temporarily affect availability. We are not liable for losses resulting from platform downtime or service interruptions.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <section className="px-5 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black text-white mb-4">Disclaimer</h1>
          <p className="text-slate-400 text-sm">Last updated: June 2026</p>
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-6">
            <p className="text-sm leading-relaxed text-yellow-200">
              <strong className="text-yellow-400">Important:</strong> PEN2PRO is an educational and organizational platform. It does not provide legal, financial, accounting, credit repair, or investment advice. Results are not guaranteed. Please read the full disclaimers below before using the platform.
            </p>
          </div>

          <div className="space-y-8">
            {DISCLAIMERS.map((d) => (
              <div key={d.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-2xl">{d.icon}</span>
                  <h2 className="font-display text-lg font-black text-white">{d.title}</h2>
                </div>
                <p className="text-sm leading-relaxed text-slate-400">{d.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <p className="text-sm leading-relaxed text-slate-400">
              By using PEN2PRO, you acknowledge that you have read and understood this disclaimer. PEN2PRO provides tools, education, and resources to help you organize your business journey — but your success depends on your own effort, decisions, and execution. We believe in you. Now go build.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#1A2D50] px-5 py-12 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-black text-white">Ready to Start Building?</h2>
          <p className="mb-8 text-slate-400 text-sm">Despite all the caveats above — real people use PEN2PRO to build real businesses. Start your free roadmap today.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3 text-sm font-black text-[#080C14] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/privacy" className="rounded-xl border border-[#1A2235] px-6 py-3 text-sm font-semibold text-slate-400 hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="rounded-xl border border-[#1A2235] px-6 py-3 text-sm font-semibold text-slate-400 hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
