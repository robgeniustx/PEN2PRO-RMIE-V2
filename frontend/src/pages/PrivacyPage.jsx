import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: [
      "When you use PEN2PRO, we may collect the following types of information:",
      "• Name and email address — provided when you register, join the waitlist, or generate a roadmap",
      "• Business idea and intake responses — provided during the roadmap generation flow",
      "• Phone number — optionally provided during waitlist signup",
      "• Payment information — processed securely through Stripe; PEN2PRO does not store card numbers",
      "• Usage data — pages visited, features used, and session activity collected through analytics tools",
      "• Referral source — if you arrive through a referral link, we record the referring source",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use the information we collect to:",
      "• Generate your personalized business roadmap using AI",
      "• Create and manage your PEN2PRO account",
      "• Process payments and manage your subscription tier",
      "• Send you product updates, roadmap results, and platform communications",
      "• Improve the platform based on usage patterns and feedback",
      "• Analyze platform performance and user engagement",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "PEN2PRO uses the following third-party services to operate the platform:",
      "• Stripe — payment processing for Pro, Elite, and Founders subscriptions",
      "• OpenAI — AI language model used to generate roadmap content",
      "• ElevenLabs — voice AI services for the P2P Voice Agent feature",
      "• Twilio — phone and SMS communication for the voice agent feature",
      "• PostHog / Google Analytics — usage analytics and platform performance tracking",
      "Each of these services has its own privacy policy governing data use.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "We retain your account information and roadmap data as long as your account is active. If you request account deletion, we will remove your personal data from our systems within 30 days, except where retention is required by law.",
      "Waitlist entries are retained until the waitlist closes or you request removal.",
    ],
  },
  {
    title: "Cookies and Tracking",
    body: [
      "PEN2PRO uses cookies and similar tracking technologies to maintain your session, remember your preferences, and analyze platform usage. You may disable cookies in your browser settings, though some features may not function correctly without them.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You have the right to:",
      "• Access the personal data we hold about you",
      "• Request correction of inaccurate data",
      "• Request deletion of your account and associated data",
      "• Opt out of marketing communications at any time",
      "To exercise these rights, contact us at the email address below.",
    ],
  },
  {
    title: "Security",
    body: [
      "We use industry-standard security measures including encrypted connections (HTTPS), hashed passwords, and access controls to protect your data. However, no system is completely secure and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "PEN2PRO is not intended for users under the age of 18. We do not knowingly collect personal information from minors. If you believe we have collected information from a minor, please contact us immediately.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For privacy-related questions or data requests, contact PEN2PRO at:",
      "Email: support@pen2pro.com",
      "This Privacy Policy was last updated in June 2026.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-16 border-b border-[#1A2D50]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-slate-400">Last updated: June 2026</p>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl space-y-12">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-4 font-display text-xl font-bold text-white">{s.title}</h2>
              <div className="space-y-3">
                {s.body.map((line, i) => (
                  <p key={i} className="text-sm leading-7 text-slate-400">{line}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <p className="text-sm text-slate-400">
              PEN2PRO does not guarantee income, funding approval, credit results, or business success.
              See our <Link to="/disclaimer" className="text-[#FF8A00] hover:underline">Disclaimer</Link> and{" "}
              <Link to="/terms" className="text-[#FF8A00] hover:underline">Terms of Service</Link> for full details.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
