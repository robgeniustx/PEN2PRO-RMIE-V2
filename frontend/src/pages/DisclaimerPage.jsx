import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const DISCLAIMERS = [
  {
    icon: "📊",
    title: "No Income Guarantee",
    body: "PEN2PRO does not guarantee any specific level of income, revenue, profit, or financial outcome. Business results vary based on individual effort, market conditions, business model, execution quality, and many other factors beyond our control.",
  },
  {
    icon: "💳",
    title: "No Credit Repair Guarantee",
    body: "PEN2PRO provides educational information, strategy guidance, and readiness checklists related to credit. We are not a credit repair organization. We do not guarantee any improvement to your credit score, removal of negative items, or credit approval. Results depend on individual circumstances and actions.",
  },
  {
    icon: "🏦",
    title: "No Funding Guarantee",
    body: "PEN2PRO provides funding readiness education and preparation guidance. We do not guarantee loan approval, grant awards, investor funding, or any financial assistance. All lending and funding decisions are made by third-party financial institutions.",
  },
  {
    icon: "⚖️",
    title: "Not Legal or Financial Advice",
    body: "Nothing on PEN2PRO constitutes legal, financial, tax, or accounting advice. The platform provides general business education and strategy information. Consult licensed professionals for legal, financial, and tax guidance specific to your situation.",
  },
  {
    icon: "🤖",
    title: "AI-Generated Content",
    body: "PEN2PRO uses artificial intelligence to generate business roadmaps, plans, and recommendations. AI output may contain errors, outdated information, or advice that is not appropriate for your specific situation. Always verify AI-generated recommendations with qualified professionals.",
  },
  {
    icon: "🔗",
    title: "Third-Party Resources",
    body: "PEN2PRO may recommend or link to third-party tools, services, vendors, or resources. We are not responsible for the content, accuracy, or practices of third-party services. Some links may be affiliate links from which we earn a commission at no additional cost to you.",
  },
  {
    icon: "📈",
    title: "Past Results",
    body: "Any testimonials, case studies, or examples of results on PEN2PRO represent individual experiences and are not guarantees of similar results. Past performance does not predict future results.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-10">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
          <h1 className="font-display text-4xl font-black text-white">Disclaimer</h1>
          <p className="mt-3 text-sm text-slate-500">Last updated: June 2026</p>
        </div>

        <div className="mb-10 rounded-2xl border border-[#FF8A00]/30 bg-[#FF8A00]/5 p-6">
          <p className="text-sm text-slate-300 leading-relaxed">
            <strong className="text-white">Important:</strong> PEN2PRO is an educational and business strategy platform. It does not guarantee income, credit improvement, funding approval, or business success. All information provided is for educational purposes only.
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

        <div className="mt-12 flex flex-wrap gap-4 text-sm">
          <Link to="/privacy" className="text-[#FF8A00] hover:underline">Privacy Policy →</Link>
          <Link to="/terms" className="text-[#FF8A00] hover:underline">Terms of Service →</Link>
          <Link to="/" className="text-slate-400 hover:text-white">← Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
