import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: [
      "When you create an account or join the PEN2PRO waitlist, we collect your name, email address, and optional phone number.",
      "When you use the RMIE roadmap tool, we collect your business idea, industry, and any other information you voluntarily enter.",
      "We automatically collect basic usage data such as pages visited, time on site, and browser type to improve platform performance.",
      "We do not collect sensitive personal information such as Social Security numbers, bank account numbers, or government-issued ID numbers.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "To generate your personalized business roadmap and deliver the core RMIE platform experience.",
      "To send you updates about your account, platform launches, and relevant resources — only when you have opted in.",
      "To improve the PEN2PRO platform based on how users interact with features.",
      "To process payments securely through our payment processor (Stripe). We do not store payment card data on our servers.",
      "To respond to support requests, feedback, and questions submitted through the platform.",
    ],
  },
  {
    title: "Information Sharing",
    body: [
      "We do not sell, rent, or trade your personal information to third parties.",
      "We may share limited data with trusted service providers (such as payment processors and email delivery services) solely to operate the platform.",
      "We may disclose information if required by law, court order, or government authority.",
      "If PEN2PRO is acquired or merged, user data may transfer to the new entity under the same privacy commitments.",
    ],
  },
  {
    title: "Cookies & Tracking",
    body: [
      "PEN2PRO uses essential cookies to keep you signed in and remember your session preferences.",
      "We may use analytics tools (such as Google Analytics) to understand traffic and usage patterns. These tools use cookies that can be disabled in your browser settings.",
      "We do not use advertising cookies or sell browsing data to ad networks.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We use industry-standard encryption (HTTPS/TLS) to protect data transmitted between your browser and our servers.",
      "Access to user data is restricted to authorized personnel only.",
      "While we take security seriously, no online system is 100% secure. We encourage you to use a strong, unique password for your account.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may request a copy of the personal data we hold about you at any time.",
      "You may request correction of inaccurate information associated with your account.",
      "You may request deletion of your account and associated data by contacting us.",
      "You may opt out of marketing communications at any time using the unsubscribe link in any email we send.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "PEN2PRO is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from minors.",
      "If you believe a minor has submitted information through our platform, please contact us immediately and we will remove it.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. When we do, we will post the updated policy on this page and update the effective date below.",
      "Continued use of the platform after changes are posted constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "If you have questions, concerns, or requests related to your privacy, contact us at: support@pen2pro.com",
      "We will respond to all privacy-related inquiries within 5 business days.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div
          className="absolute -top-48 -left-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
      </div>

      <Navbar />

      <main className="mx-auto max-w-3xl px-5 py-20">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-4 font-display text-4xl font-black md:text-5xl">Privacy Policy</h1>
          <p className="text-sm text-slate-500">Effective date: June 15, 2026 · Last updated: June 21, 2026</p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            PEN2PRO is committed to protecting your privacy. This policy explains what data we collect, how we use it, and what rights you have. By using the PEN2PRO platform, you agree to the practices described here.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {SECTIONS.map((s, i) => (
            <section key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-7">
              <h2 className="mb-5 font-bold text-white text-xl">
                <span className="mr-3 text-[#FF8A00] font-black">{i + 1}.</span>
                {s.title}
              </h2>
              <ul className="space-y-3">
                {s.body.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E88E5]" />
                    {line}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8 text-center">
          <p className="mb-6 text-slate-400">Questions about your privacy? We're here to help.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-7 py-3 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-7 py-3 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
              Read Terms of Service
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
