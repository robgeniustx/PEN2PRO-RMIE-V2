import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="font-display mb-8 text-3xl font-black text-white md:text-4xl">Privacy Policy</h1>

        <div className="space-y-8 text-sm leading-7 text-slate-400">
          <p>
            PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what information we collect
            when you use the PEN2PRO RMIE platform, how we use it, and the choices you have.
          </p>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Information We Collect</h2>
            <p>
              We collect information you provide directly, such as your name, email, phone number, business idea,
              and roadmap intake responses. We also collect basic usage data (pages visited, features used) to
              improve the platform.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">How We Use Your Information</h2>
            <p>
              We use your information to generate your business roadmap, respond to waitlist and account requests,
              improve PEN2PRO's tools, and communicate updates about Pro, Elite, and Founders access. We do not sell
              your personal information.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Payment Information</h2>
            <p>
              Payments are processed by Stripe. PEN2PRO does not store your full payment card details on its own
              servers.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Your Choices</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information at any time by
              contacting us through the site.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Contact</h2>
            <p>Questions about this policy can be sent through the Waitlist or Sign In contact channels on this site.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
