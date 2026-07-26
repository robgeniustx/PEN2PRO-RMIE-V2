import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide directly — name, email, phone number, business idea details, and account credentials when you create a roadmap, join the waitlist, or sign up for PEN2PRO. We also collect basic usage data (pages visited, features used, referral source) to improve the platform.",
  },
  {
    title: "2. How We Use Your Information",
    body: "Your information is used to generate your business roadmap, communicate launch updates and account activity, provide customer support, improve our AI models and product experience, and — only if you opt in — send you marketing and partner offers relevant to your interests (Pro, Elite, Founders, funding, credit repair, affiliate programs).",
  },
  {
    title: "3. How We Protect Your Information",
    body: "We use industry-standard safeguards including encrypted connections (HTTPS), access-controlled admin systems, and restricted internal access to personal data. No system is 100% secure, and we continually work to strengthen our protections.",
  },
  {
    title: "4. Sharing Your Information",
    body: "We do not sell your personal information. We may share limited data with trusted service providers (payment processing, email delivery, hosting, analytics) strictly to operate PEN2PRO, and with affiliate/funding/credit partners only when you explicitly request an introduction or click through to their services.",
  },
  {
    title: "5. Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You can unsubscribe from marketing emails using the link in any email we send.",
  },
  {
    title: "6. Cookies & Tracking",
    body: "PEN2PRO uses basic cookies and analytics to understand how the platform is used and to improve conversion of free roadmaps into paid plans. You can disable cookies in your browser settings, though some features may not work as intended.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO evolves. Material changes will be reflected here with an updated effective date.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-4xl font-black leading-tight md:text-5xl">Privacy Policy</h1>
          <p className="mb-12 text-sm text-slate-500">Effective Date: January 1, 2026</p>

          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-sm leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <p className="text-sm text-slate-400">
              Questions about your data or this policy? Reach out through our{" "}
              <Link to="/waitlist" className="font-semibold text-[#FF8A00] hover:underline">waitlist form</Link>{" "}
              or your account contact, and we'll respond as quickly as we can.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-xs">
            <Link to="/terms" className="text-slate-500 hover:text-[#FF8A00] transition-colors">Terms of Service →</Link>
            <Link to="/disclaimer" className="text-slate-500 hover:text-[#FF8A00] transition-colors">Disclaimer →</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
