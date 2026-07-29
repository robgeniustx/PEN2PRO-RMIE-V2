import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "When you use PEN2PRO, we may collect information you provide directly — such as your name, email address, phone number, business idea, and roadmap intake answers — along with usage data like pages visited, features used, and device/browser information collected automatically to improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate your account, communicate with you about your plan or the waitlist, improve PEN2PRO's AI outputs, and — where you've opted in — send updates about new features, pricing, or launch dates.",
  },
  {
    title: "How We Protect Your Information",
    body: "We use industry-standard safeguards to protect your data, including encrypted connections and restricted access to production systems. No online platform can guarantee absolute security, but we work to keep your information safe.",
  },
  {
    title: "Sharing of Information",
    body: "We do not sell your personal information. We may share limited data with service providers who help us operate PEN2PRO (such as hosting, email delivery, and payment processing), and only to the extent needed for them to perform those services.",
  },
  {
    title: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You may also unsubscribe from marketing emails using the link in any message we send.",
  },
  {
    title: "Cookies & Analytics",
    body: "PEN2PRO may use cookies and similar technologies to keep you signed in, remember preferences, and understand how the platform is used so we can improve it.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO evolves. Material changes will be reflected on this page with an updated effective date.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>Legal</p>
        <h1 className="mt-2 font-display text-3xl font-black md:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-500">Effective date: January 1, 2026</p>

        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-black text-white">{s.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-400">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-5">
          <p className="text-sm leading-7 text-slate-400">
            Questions about this policy or your data? Contact us anytime at{" "}
            <a href="mailto:support@pen2pro.com" className="font-semibold hover:opacity-80" style={{ color: "#1E88E5" }}>
              support@pen2pro.com
            </a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
