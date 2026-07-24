import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8 md:text-5xl">Privacy Policy</h1>

        <div className="space-y-8 text-slate-400 leading-7">
          <p>
            PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what information we
            collect when you use the PEN2PRO platform, how we use it, and the choices you have.
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Information We Collect</h2>
            <p>
              We collect information you provide directly — such as your name, email, phone number,
              business idea, and account credentials — when you create a roadmap, join the waitlist,
              create an account, or contact us. We also collect basic usage data (pages visited, features
              used, referral source) to improve the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">How We Use Your Information</h2>
            <p>
              We use your information to generate your business roadmap, operate your account, respond to
              inquiries, send relevant updates about your plan or the waitlist, and improve PEN2PRO. We do
              not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Affiliate &amp; Partner Links</h2>
            <p>
              Some pages (Affiliate, Funding, Credit Repair) link to third-party services for LLC formation,
              banking, credit, funding, and related tools. Those third parties have their own privacy
              practices, and PEN2PRO is not responsible for how they handle your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Data Retention &amp; Security</h2>
            <p>
              We take reasonable steps to protect the information you share with us. You may request
              deletion of your account information at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Contact</h2>
            <p>
              Questions about this policy? Reach out through the contact details provided on our waitlist
              or account pages.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
