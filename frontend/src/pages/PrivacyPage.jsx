import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: [
      "When you use PEN2PRO, we collect information you provide directly: name, email address, phone number (optional), business idea descriptions, and interest-level selections submitted through intake forms and the waitlist.",
      "We also collect usage data automatically, including pages visited, features accessed, browser type, device type, and approximate geographic location based on IP address. This helps us improve the platform and understand how users engage with PEN2PRO tools.",
      "If you create an account, we store your authentication credentials (email and hashed password), plan tier, and activity within the platform.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use your information to operate and improve the PEN2PRO platform, generate AI-powered business roadmaps and RMIE outputs, send waitlist updates and platform notifications, respond to support requests, and process payments if you subscribe to a paid plan.",
      "We do not sell your personal information to third parties. We do not share your personal information with advertisers. We may share aggregated, non-identifiable data for analytics and research purposes.",
    ],
  },
  {
    title: "AI-Generated Content",
    body: [
      "PEN2PRO uses OpenAI APIs and other AI providers to generate business roadmaps, strategy outputs, and RMIE results. When you submit an intake form or business idea, your input is sent to these AI services to generate your roadmap output.",
      "Please do not include highly sensitive personal information (such as full Social Security numbers, financial account numbers, or medical data) in your business idea submissions.",
    ],
  },
  {
    title: "Data Storage and Security",
    body: [
      "Your data is stored on secured servers hosted on Render.com. We use industry-standard encryption for data in transit (HTTPS/TLS) and at rest. Authentication tokens are stored using JWT with secure secret keys.",
      "While we take reasonable precautions to protect your data, no system is completely secure. We encourage you to use a strong unique password and to contact us immediately if you believe your account has been compromised.",
    ],
  },
  {
    title: "Cookies and Tracking",
    body: [
      "PEN2PRO uses localStorage and session storage to keep you logged in and to save your roadmap progress. We may use analytics tools such as Google Analytics or similar services to understand how users interact with our platform.",
      "You can disable cookies or clear localStorage through your browser settings, but this may affect your ability to use certain features of the platform.",
    ],
  },
  {
    title: "Affiliate Links",
    body: [
      "PEN2PRO's Affiliate and Resource pages contain links to third-party services (LLC formation, business banking, credit tools, domain registrars, etc.). These may be affiliate links, meaning PEN2PRO may earn a commission if you purchase through them. This does not affect our recommendations or your cost.",
      "We only recommend services we believe provide genuine value to entrepreneurs and small business builders.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may request access to the personal data we hold about you, request correction of inaccurate data, or request deletion of your account and associated data by contacting us at the email below.",
      "If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete, and the right to opt out of sale (we do not sell your data).",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "PEN2PRO integrates with the following third-party services: Stripe (payment processing), OpenAI (AI generation), ElevenLabs (voice AI), Twilio (SMS), and Render.com (hosting). Each of these services has its own privacy policy. We encourage you to review them.",
      "We are not responsible for the privacy practices of third-party websites linked from our platform.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "PEN2PRO is intended for users 18 years of age and older. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us and we will delete it promptly.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. When we do, we will update the 'Effective Date' below and, if changes are material, notify users via email or in-platform notice.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "If you have questions about this Privacy Policy or how we handle your data, contact us at: privacy@pen2pro.com",
    ],
  },
];

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | PEN2PRO";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <main className="mx-auto max-w-3xl px-5 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>
            Legal
          </p>
          <h1 className="mb-4 text-4xl font-black text-white">Privacy Policy</h1>
          <p className="text-slate-400">Effective Date: June 23, 2026</p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            PEN2PRO ("we," "us," or "our") is committed to protecting your privacy. This policy
            explains what information we collect, how we use it, and your rights regarding your
            data when you use the PEN2PRO platform.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {SECTIONS.map((section, i) => (
            <section
              key={section.title}
              className="rounded-2xl border p-7"
              style={{ borderColor: "#1A2D50", background: "#0F1520" }}
            >
              <h2 className="mb-4 text-lg font-bold text-white">
                {i + 1}. {section.title}
              </h2>
              <div className="space-y-3">
                {section.body.map((para) => (
                  <p key={para.slice(0, 30)} className="text-sm leading-7 text-slate-400">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Back nav */}
        <div className="mt-14 flex flex-wrap items-center gap-4 border-t pt-8" style={{ borderColor: "#1A2D50" }}>
          <Link to="/" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">
            ← Back to Home
          </Link>
          <Link to="/terms" className="text-sm font-semibold text-slate-400 hover:text-[#FF8A00] transition-colors">
            Terms of Service →
          </Link>
          <Link to="/disclaimer" className="text-sm font-semibold text-slate-400 hover:text-[#FF8A00] transition-colors">
            Disclaimer →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
