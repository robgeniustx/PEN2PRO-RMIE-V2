import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the platform. PEN2PRO reserves the right to update these terms at any time. Continued use after updates constitutes acceptance.",
  },
  {
    title: "Description of Service",
    body: "PEN2PRO is an AI-powered business development platform — Rapid Monetization Intelligence Engine (RMIE) — that provides business roadmap generation, strategy tools, credit and funding readiness guidance, and related business building resources. The platform is provided for educational and organizational purposes.",
  },
  {
    title: "User Accounts",
    body: "You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account. PEN2PRO is not liable for losses resulting from unauthorized account access due to your failure to maintain the security of your credentials.",
  },
  {
    title: "Subscription and Payment",
    body: "Paid subscriptions (Pro, Elite) are billed monthly and may be cancelled at any time. The Founders Lifetime plan is a one-time payment with no recurring charges. Refund requests are evaluated on a case-by-case basis within 7 days of purchase. All payments are processed securely through Stripe.",
  },
  {
    title: "Acceptable Use",
    body: "You agree not to use PEN2PRO to violate any laws, infringe on intellectual property rights, transmit spam or malicious content, reverse-engineer or copy platform features, or engage in any activity that disrupts or harms the platform or other users. Violations may result in account termination without refund.",
  },
  {
    title: "AI-Generated Content",
    body: "PEN2PRO uses artificial intelligence to generate business roadmaps, strategies, and recommendations. AI-generated content is provided for informational and organizational purposes only. It does not constitute professional legal, financial, accounting, or business advice. You should consult qualified professionals before making significant business decisions.",
  },
  {
    title: "Intellectual Property",
    body: "The PEN2PRO platform, brand, and its original content are owned by PEN2PRO and protected by copyright and trademark law. You retain ownership of the business ideas and content you input into the platform. You grant PEN2PRO a limited license to process your input for the purpose of generating your roadmap and improving the platform.",
  },
  {
    title: "Limitation of Liability",
    body: "PEN2PRO is not liable for any indirect, incidental, special, consequential, or punitive damages — including lost profits or business opportunities — arising from your use of the platform. PEN2PRO's total liability to you for any claim shall not exceed the amount paid by you in the last 3 months.",
  },
  {
    title: "Termination",
    body: "PEN2PRO reserves the right to terminate or suspend your access to the platform at any time for violations of these Terms. You may also terminate your account at any time by contacting support@pen2pro.com.",
  },
  {
    title: "Governing Law",
    body: "These Terms are governed by the laws of the State of Texas, United States, without regard to conflict of law provisions. Any disputes shall be resolved in the courts of Harris County, Texas.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
            <h1 className="font-display text-4xl font-black text-white mb-3">Terms of Service</h1>
            <p className="text-slate-400 text-sm">Last updated: June 2026</p>
            <p className="mt-4 text-slate-400 leading-7">
              Please read these Terms of Service carefully before using PEN2PRO. These terms govern your use of the PEN2PRO platform and all related services.
            </p>
          </div>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
                <h2 className="mb-3 font-bold text-white text-lg">{s.title}</h2>
                <p className="text-sm text-slate-400 leading-7">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
            <h2 className="mb-3 font-bold text-white">Questions About These Terms?</h2>
            <p className="text-sm text-slate-400">
              Contact us at{" "}
              <span className="text-[#FF8A00]">support@pen2pro.com</span> with any questions about these Terms of Service.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-xs text-slate-500">
            <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/disclaimer" className="hover:text-white transition">Disclaimer</Link>
            <Link to="/" className="hover:text-white transition">Back to Home</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
