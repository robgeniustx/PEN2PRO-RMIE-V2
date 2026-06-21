import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: [
      "When you use PEN2PRO, we collect information you provide directly — such as your name, email address, phone number, business idea, and interest level when you sign up or complete our waitlist form.",
      "We also collect information about how you use the platform, including pages visited, features accessed, roadmap inputs, and session data. This helps us improve the experience for everyone.",
      "If you complete a payment through Stripe, your payment details are processed directly by Stripe and are not stored on our servers. We receive a confirmation token only.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use your information to provide, operate, and improve the PEN2PRO platform — including generating your business roadmap, sending you platform updates, and responding to support requests.",
      "If you joined our waitlist, we may contact you about product launches, early access opportunities, and relevant updates. You can opt out at any time.",
      "We do not sell your personal data to third parties. We do not share your information with advertisers.",
    ],
  },
  {
    title: "3. Cookies and Tracking",
    content: [
      "PEN2PRO uses cookies and similar technologies to keep you logged in, remember your preferences, and understand how users navigate the platform.",
      "We may use analytics tools (such as Google Analytics or similar) to understand traffic patterns and improve our product. These tools may set their own cookies.",
      "You can disable cookies in your browser settings, but some features of PEN2PRO may not work correctly without them.",
    ],
  },
  {
    title: "4. Data Retention",
    content: [
      "We retain your account data for as long as your account is active or as needed to provide you with services. If you request deletion of your account, we will remove your personal data within 30 days, except where we are required to retain it for legal or tax purposes.",
      "Waitlist submissions are retained until the product launches or until you request removal.",
    ],
  },
  {
    title: "5. Third-Party Services",
    content: [
      "PEN2PRO integrates with third-party services including Stripe (payments), OpenAI (AI roadmap generation), ElevenLabs (voice features), and Twilio (SMS). Each of these providers has their own privacy policy and data practices.",
      "Affiliate links on the platform may track referrals. Clicking an affiliate link may result in a partner receiving information that you visited their site from PEN2PRO.",
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      "You have the right to access, correct, or delete your personal data at any time. To make a request, contact us at the email address below.",
      "If you are located in California, the European Union, or another jurisdiction with specific data privacy laws, you may have additional rights. Contact us to learn more.",
    ],
  },
  {
    title: "7. Security",
    content: [
      "We take reasonable technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction.",
      "No method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.",
    ],
  },
  {
    title: "8. Children",
    content: [
      "PEN2PRO is not intended for users under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has submitted information to our platform, contact us immediately.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. When we do, we will update the effective date at the top of this page. Continued use of PEN2PRO after changes are posted constitutes your acceptance of the updated policy.",
    ],
  },
  {
    title: "10. Contact",
    content: [
      "If you have questions, concerns, or requests related to this Privacy Policy, contact us at: support@pen2pro.com",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-4 font-display text-4xl font-black md:text-5xl">Privacy Policy</h1>
          <p className="text-slate-400">Effective Date: June 15, 2026</p>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto">
            PEN2PRO respects your privacy. This policy explains what information we collect, how we use it, and what choices you have.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-3xl space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-7">
              <h2 className="mb-4 text-lg font-black text-white">{s.title}</h2>
              <div className="space-y-3">
                {s.content.map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed text-slate-400">{para}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-12 text-center">
            <Link to="/" className="text-sm text-[#FF8A00] hover:underline">← Back to PEN2PRO</Link>
            <span className="mx-4 text-slate-700">|</span>
            <Link to="/terms" className="text-sm text-slate-400 hover:text-white">Terms of Service</Link>
            <span className="mx-4 text-slate-700">|</span>
            <Link to="/disclaimer" className="text-sm text-slate-400 hover:text-white">Disclaimer</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
