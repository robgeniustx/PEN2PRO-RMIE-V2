import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: 2026</p>

        <div className="space-y-8 text-sm leading-7 text-slate-400">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Information We Collect</h2>
            <p>
              When you use PEN2PRO, we collect the information you provide directly — such as your name, email,
              phone number, business idea, and roadmap intake answers — along with basic usage data (pages visited,
              features used) to improve the product.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">How We Use Your Information</h2>
            <p>
              We use your information to generate your business roadmap, manage your account, communicate with you
              about your Free, Pro, Elite, or Founders access, and improve PEN2PRO's tools. We do not sell your
              personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Data Storage &amp; Security</h2>
            <p>
              Your data is stored securely and access is limited to systems required to operate PEN2PRO. No system
              is 100% secure, and we work to apply reasonable safeguards to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Third-Party Links</h2>
            <p>
              PEN2PRO may link to affiliate or partner resources (LLC formation, banking, funding, credit tools).
              Those third parties have their own privacy policies, and PEN2PRO is not responsible for their practices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Your Choices</h2>
            <p>
              You can request that we update or delete your information at any time by contacting us. You may also
              unsubscribe from PEN2PRO emails at any time.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link to="/terms" className="btn-outline px-6 py-3 text-sm font-bold text-center">Terms of Service</Link>
          <Link to="/disclaimer" className="btn-outline px-6 py-3 text-sm font-bold text-center">Disclaimer</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
