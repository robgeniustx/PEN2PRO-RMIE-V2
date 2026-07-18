import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "When you use PEN2PRO, we collect information you provide directly — name, email, phone number, business idea details, and answers you give during roadmap intake, waitlist signup, or account creation. We also collect basic usage data (pages visited, features used) to improve the platform.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to generate your business roadmap, save your progress, communicate with you about your account or the PEN2PRO launch, process payments through Stripe, and improve our AI-driven strategy tools. We do not sell your personal information to third parties.",
  },
  {
    title: "3. Payment Information",
    body: "All payment processing is handled by Stripe. PEN2PRO does not store your credit card number or full payment details on our servers. Stripe's own privacy policy governs how your payment data is handled.",
  },
  {
    title: "4. Data Storage & Security",
    body: "Your roadmap data, waitlist submissions, and account information are stored on secured servers. We take reasonable technical and administrative steps to protect your data, but no system is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "5. Affiliate & Third-Party Links",
    body: "PEN2PRO may link to third-party services (LLC formation, business banking, funding partners, credit tools, and similar resources). We are not responsible for the privacy practices of these third-party sites. Review their policies before submitting information to them.",
  },
  {
    title: "6. Your Choices",
    body: "You may request access to, correction of, or deletion of your personal information at any time by contacting support@pen2pro.com. You can unsubscribe from marketing emails at any time using the link in any email we send.",
  },
  {
    title: "7. Children's Privacy",
    body: "PEN2PRO is not intended for use by anyone under the age of 18. We do not knowingly collect information from minors.",
  },
  {
    title: "8. Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated policy.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</p>
          <h1 className="font-display text-4xl font-black text-white mb-4 md:text-5xl">Privacy Policy</h1>
          <p className="text-sm text-slate-500 mb-10">Last updated: January 2026</p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
                <h2 className="font-display text-lg font-black text-white mb-2">{s.title}</h2>
                <p className="text-sm leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-slate-500">
            Questions about this policy? Email{" "}
            <a href="mailto:support@pen2pro.com" className="text-[#D4A017] hover:underline">
              support@pen2pro.com
            </a>
            . See also our{" "}
            <Link to="/terms" className="text-[#D4A017] hover:underline">Terms of Service</Link>
            {" "}and{" "}
            <Link to="/disclaimer" className="text-[#D4A017] hover:underline">Disclaimer</Link>.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
