import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy — PEN2PRO";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: January 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-400">
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">What we collect</h2>
            <p>
              PEN2PRO collects the information you give us directly — name, email, phone number,
              business idea details, and roadmap intake answers — when you use the Starter roadmap
              tool, join the waitlist, create an account, or contact us. We also collect basic usage
              data (pages visited, features used) to improve the platform.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">How we use it</h2>
            <p>
              We use your information to generate your business roadmap, manage your account and
              subscription tier (Free, Pro, Elite, Founders), respond to inquiries, and — if you opt
              in — send updates about PEN2PRO features, launch dates, and offers. We do not sell your
              personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Affiliate & partner links</h2>
            <p>
              Some pages (Funding, Credit Repair, Affiliate) link to third-party partners for LLC
              formation, business banking, credit, and funding services. If you click through and
              engage with a partner, that partner's own privacy policy governs the data you share
              with them, not this one.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Data storage & security</h2>
            <p>
              We take reasonable technical and organizational measures to protect your data. No
              online platform can guarantee absolute security, so please avoid sharing sensitive
              financial account numbers or passwords through roadmap or waitlist forms.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Your choices</h2>
            <p>
              You can request access to, correction of, or deletion of your personal data at any
              time by contacting us. You can also unsubscribe from marketing emails using the link
              in any message we send.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Contact</h2>
            <p>
              Questions about this policy can be directed to the PEN2PRO team through the contact
              options listed on the site.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
