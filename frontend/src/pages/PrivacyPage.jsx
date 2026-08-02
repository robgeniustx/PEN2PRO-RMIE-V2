import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "When you use PEN2PRO, we collect information you provide directly — such as your name, email, phone number, and business idea details submitted through the roadmap builder, waitlist, or account forms. We also collect basic usage data (pages visited, features used) to improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate your account, communicate updates about PEN2PRO, and improve our AI-powered tools. We do not sell your personal information to third parties.",
  },
  {
    title: "Data Storage & Security",
    body: "Your information is stored using industry-standard security practices. While no system is 100% secure, we take reasonable steps to protect your data from unauthorized access, disclosure, or misuse.",
  },
  {
    title: "Third-Party Services",
    body: "PEN2PRO may link to third-party partners for services such as LLC formation, business banking, funding, or credit resources. Those partners have their own privacy policies, and PEN2PRO is not responsible for how they handle your data.",
  },
  {
    title: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You may also unsubscribe from marketing emails using the link in any message we send.",
  },
  {
    title: "Contact",
    body: "Questions about this policy can be sent through the contact options on our waitlist or support pages.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-2 md:text-4xl">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: 2026</p>
        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-7 text-sm">{s.body}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
