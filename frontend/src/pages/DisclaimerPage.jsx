import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const DISCLAIMERS = [
  {
    title: "No Income Guarantee",
    icon: "💰",
    body: `PEN2PRO does not guarantee any specific level of income, revenue, or business success. Business results depend on the quality of execution, market conditions, individual effort, available resources, and many other factors that are entirely outside our control. Testimonials, examples, and success stories shared on the platform reflect individual results and are not typical.`,
  },
  {
    title: "No Credit Repair Guarantee",
    icon: "💳",
    body: `PEN2PRO provides education, organization, and readiness tools related to credit building. We do not guarantee any specific improvement to your credit score, the removal of any negative items from your credit report, or approval for any financial product. Credit results vary significantly by individual and are determined by credit bureaus and lenders, not by PEN2PRO.`,
  },
  {
    title: "No Funding or Loan Guarantee",
    icon: "🏦",
    body: `PEN2PRO provides funding readiness education and preparation tools. We do not guarantee that you will be approved for any loan, line of credit, grant, or other financing. All funding decisions are made by lenders, grant agencies, or investors — not by PEN2PRO. Funding readiness tools are educational only.`,
  },
  {
    title: "Not Legal or Financial Advice",
    icon: "⚖️",
    body: `Nothing on the PEN2PRO platform constitutes legal advice, financial advice, accounting advice, tax advice, or investment advice. All content is provided for informational and educational purposes only. You should consult a qualified attorney, CPA, or financial advisor before making any significant business, legal, or financial decisions.`,
  },
  {
    title: "AI-Generated Content",
    icon: "🤖",
    body: `Business roadmaps, plans, scripts, and strategies on PEN2PRO are generated with the assistance of artificial intelligence. AI-generated content may contain errors, may not reflect the most current market conditions, and should not be treated as professional advice. You are responsible for reviewing, verifying, and adapting any AI-generated content before acting on it.`,
  },
  {
    title: "Affiliate Links",
    icon: "🔗",
    body: `PEN2PRO may include affiliate links to third-party products and services. If you click an affiliate link and make a purchase, PEN2PRO may receive a commission at no additional cost to you. We only recommend products and services we believe may be useful to our users, but we are not responsible for the performance, accuracy, or reliability of any third-party service.`,
  },
  {
    title: "Third-Party Services",
    icon: "🔌",
    body: `PEN2PRO integrates with third-party services including Stripe for payments, OpenAI for AI features, and others. We are not responsible for the availability, accuracy, or actions of any third-party service. Your use of third-party services is subject to their own terms and policies.`,
  },
  {
    title: "Platform Availability",
    icon: "🖥️",
    body: `PEN2PRO is provided "as is" without warranty of any kind. We do not guarantee that the platform will be available at all times, error-free, or free from interruptions. We may update, modify, or discontinue features at any time without prior notice.`,
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-4xl font-black">Disclaimer</h1>
          <p className="mb-10 text-sm text-slate-500">Last Updated: June 20, 2026</p>

          <div className="mb-10 rounded-2xl border border-[#FF8A00]/30 bg-[#FF8A00]/5 p-6">
            <p className="font-bold text-[#FF8A00] mb-2">Important Notice</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              PEN2PRO is an educational and organizational platform. It does not guarantee business success, income generation, credit improvement, or funding approval. Results depend entirely on your own effort, decisions, and market conditions.
            </p>
          </div>

          <div className="space-y-8">
            {DISCLAIMERS.map((d) => (
              <div key={d.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-2xl">{d.icon}</span>
                  <h2 className="text-lg font-bold text-white">{d.title}</h2>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-sm text-slate-400">
            <p className="mb-2 font-bold text-white">Questions?</p>
            <p>Contact us at <span className="text-[#FF8A00] font-semibold">support@pen2pro.com</span></p>
          </div>

          <div className="mt-8 flex gap-6 text-sm">
            <Link to="/privacy" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
