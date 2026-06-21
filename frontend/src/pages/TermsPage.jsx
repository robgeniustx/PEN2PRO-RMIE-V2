import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: `By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the platform. These terms apply to all visitors, users, and anyone who accesses or uses PEN2PRO.`,
  },
  {
    title: "Platform Description",
    body: `PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that provides business roadmaps, strategy tools, branding guidance, credit readiness information, funding readiness resources, and related educational content. PEN2PRO is a planning and educational platform — not a licensed financial advisor, attorney, or business consultant.`,
  },
  {
    title: "Account Responsibility",
    body: `You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately at support@pen2pro.com if you suspect unauthorized access to your account.`,
  },
  {
    title: "Subscription Plans",
    body: `PEN2PRO offers Free, Pro, Elite, and Founders tiers. Paid subscriptions are billed monthly or as a one-time payment (Founders Lifetime). Subscriptions may be cancelled at any time. Cancellation takes effect at the end of the current billing period. No refunds are issued for partial billing periods unless required by law.`,
  },
  {
    title: "Acceptable Use",
    body: `You agree not to use PEN2PRO to violate any laws, infringe on intellectual property rights, distribute spam or malicious content, attempt to gain unauthorized access to any system, or use the platform in any way that could harm other users or the platform itself.`,
  },
  {
    title: "AI-Generated Content",
    body: `PEN2PRO uses artificial intelligence to generate business roadmaps, strategies, and recommendations. AI-generated content is provided for educational and planning purposes only. It does not constitute professional legal, financial, or business advice. You are solely responsible for decisions made based on AI-generated content.`,
  },
  {
    title: "Intellectual Property",
    body: `All PEN2PRO platform content, branding, code, and design are the intellectual property of PEN2PRO and Robert Earl Green Jr. You may not reproduce, distribute, or create derivative works without written permission. Roadmaps generated for your specific business idea belong to you.`,
  },
  {
    title: "Limitation of Liability",
    body: `PEN2PRO is provided "as is" without warranty of any kind. To the maximum extent permitted by law, PEN2PRO and its founders are not liable for any indirect, incidental, special, or consequential damages arising from your use of the platform, including but not limited to lost profits, lost business opportunities, or business failure.`,
  },
  {
    title: "Governing Law",
    body: `These Terms of Service are governed by the laws of the State of Texas, United States, without regard to conflict of law principles. Any disputes arising under these terms will be resolved in the courts of Harris County, Texas.`,
  },
  {
    title: "Changes to Terms",
    body: `We reserve the right to update these Terms of Service at any time. Material changes will be communicated via email to registered users. Continued use of PEN2PRO after changes constitutes acceptance of the updated terms.`,
  },
  {
    title: "Contact",
    body: `Questions about these Terms? Contact us at support@pen2pro.com.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
          Legal
        </div>
        <h1 className="mb-3 font-display text-4xl font-black">Terms of Service</h1>
        <p className="mb-2 text-sm text-slate-500">Last updated: June 2026</p>
        <p className="mb-12 text-slate-400 leading-relaxed">
          These Terms of Service govern your use of the PEN2PRO platform. Please read them carefully before
          using PEN2PRO.
        </p>

        <div className="space-y-10">
          {SECTIONS.map((s, i) => (
            <div key={s.title}>
              <h2 className="mb-3 font-display text-xl font-black text-white">
                {i + 1}. {s.title}
              </h2>
              <p className="text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 sm:flex-row">
          <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Privacy Policy →
          </Link>
          <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Disclaimer →
          </Link>
          <Link to="/" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
