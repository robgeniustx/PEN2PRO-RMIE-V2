import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: `We collect information you provide directly to us when you create an account, fill out a form, or use our services. This includes your name, email address, phone number (optional), and business information you share during roadmap intake.\n\nWe also automatically collect certain technical data such as your IP address, browser type, device information, and usage patterns within the platform.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use the information we collect to provide, maintain, and improve our services; to generate your AI business roadmap and strategy outputs; to send you transactional emails related to your account; to process payments and subscriptions; to respond to your support requests; and to send you marketing communications if you have opted in.\n\nWe do not sell your personal information to third parties.`,
  },
  {
    title: "Waitlist and Lead Data",
    body: `When you join the PEN2PRO waitlist, we collect your name, email, optional phone number, business idea, and interest level. This data is stored securely and used to notify you when your requested tier or feature becomes available. Referral source data may also be collected if you arrive via a referral link.`,
  },
  {
    title: "Data Sharing",
    body: `We may share your information with third-party service providers who assist us in operating the platform, including payment processors (Stripe), email delivery services, and analytics providers. These parties are contractually obligated to protect your data and use it only for the purposes we specify.\n\nWe may also disclose your information if required by law or to protect the rights, property, or safety of PEN2PRO, our users, or others.`,
  },
  {
    title: "Cookies and Tracking",
    body: `We use cookies and similar tracking technologies to enhance your experience, remember your preferences, and analyze how our platform is used. You can control cookie settings through your browser. Note that disabling cookies may affect the functionality of certain features.`,
  },
  {
    title: "Data Security",
    body: `We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "Your Rights",
    body: `Depending on your location, you may have the right to access, correct, or delete the personal information we hold about you. You may also have the right to opt out of marketing communications at any time by clicking the unsubscribe link in any email we send. To exercise these rights, contact us at the information provided below.`,
  },
  {
    title: "Children's Privacy",
    body: `PEN2PRO is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete it.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page and updating the effective date. Your continued use of PEN2PRO after any changes constitutes your acceptance of the revised policy.`,
  },
  {
    title: "Contact Us",
    body: `If you have any questions about this Privacy Policy, please contact us at: support@pen2pro.com`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            Legal
          </div>
          <h1 className="mb-3 font-display text-4xl font-black">Privacy Policy</h1>
          <p className="text-sm text-slate-500">Effective Date: June 1, 2026 | Last Updated: June 1, 2026</p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            PEN2PRO ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform at pen2pro.com.
          </p>
        </div>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 font-bold text-white text-lg">{s.title}</h2>
              {s.body.split("\n\n").map((para, i) => (
                <p key={i} className="mb-3 text-sm text-slate-400 leading-relaxed last:mb-0">{para}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4 border-t border-[#1A2D50] pt-8">
          <Link to="/terms" className="text-sm text-[#1E88E5] hover:underline">Terms of Service</Link>
          <Link to="/disclaimer" className="text-sm text-[#1E88E5] hover:underline">Disclaimer</Link>
          <Link to="/" className="text-sm text-slate-400 hover:text-white">← Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
