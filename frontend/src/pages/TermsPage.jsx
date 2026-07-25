import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Using PEN2PRO",
    body: "By creating an account, generating a roadmap, joining the waitlist, or subscribing to Pro, Elite, or Founders, you agree to use PEN2PRO for lawful business planning purposes and to provide accurate information. You must be 18 or older to create an account or subscribe to a paid plan.",
  },
  {
    title: "Plans & Subscriptions",
    body: "Free Roadmap access is available at no cost. Pro and Elite are subscription plans billed on a recurring basis; Founders is a limited-availability, early-adopter offer with its own terms communicated at signup. Subscriptions can be canceled at any time — access continues through the remainder of the current billing period. Prices and included features may change as the platform evolves; active subscribers will be notified of material changes.",
  },
  {
    title: "Your Content",
    body: "You own the business ideas, details, and information you submit to PEN2PRO. By submitting it, you grant PEN2PRO permission to process that information (including with AI tools) solely to generate your roadmap, blueprint, and related output. We do not claim ownership of your business idea or brand.",
  },
  {
    title: "Acceptable Use",
    body: "Don't use PEN2PRO to submit unlawful content, attempt to breach platform security, resell or redistribute PEN2PRO's proprietary roadmap logic or AI prompts as a competing product, or misrepresent your identity when accessing admin or account features you are not authorized to use.",
  },
  {
    title: "No Guarantee of Results",
    body: "As described in our Disclaimer, PEN2PRO does not guarantee income, funding approval, credit repair outcomes, or business success. Roadmaps and strategies are informational tools — your results depend on your own execution, market, and circumstances.",
  },
  {
    title: "Limitation of Liability",
    body: "PEN2PRO and its founder are not liable for indirect, incidental, or consequential damages arising from your use of the platform, including business losses, missed opportunities, or decisions made based on AI-generated output. Use professional judgment, and consult licensed professionals for legal, tax, or financial decisions.",
  },
  {
    title: "Changes to These Terms",
    body: "We may update these Terms as PEN2PRO grows. Continued use of the platform after an update means you accept the revised Terms. Material changes affecting paid subscribers will be communicated in advance.",
  },
];

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[10%] -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(13,71,161,0.2) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
      </div>

      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            📄 Terms of Service
          </div>
          <h1 className="mb-4 font-display text-4xl font-black leading-tight md:text-5xl">Terms of Service</h1>
          <p className="mb-12 text-slate-400 leading-relaxed">
            These Terms govern your use of PEN2PRO — the free roadmap, Pro, Elite, Founders, Builder, Accelerator, and every
            feature on the platform. By using PEN2PRO, you agree to the terms below.
          </p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-sm leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs text-slate-600">
            Last updated: 2026. Questions about these terms? Reach out through the{" "}
            <Link to="/about" className="text-[#2d9cff] hover:underline">About</Link> page.
          </p>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link to="/starter" className="rounded-xl px-6 py-3 text-center text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Read Privacy Policy
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Read Disclaimer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
