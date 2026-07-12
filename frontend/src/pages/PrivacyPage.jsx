import LegalPage from "./LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="2026"
      sections={[
        {
          heading: "What we collect",
          body: [
            "When you use PEN2PRO — the free roadmap tool, Builder, Accelerator, waitlist form, or an account signup — we collect the information you provide directly: name, email, phone (optional), business idea details, and the answers you give in roadmap intake forms.",
            "We also collect basic usage data (pages visited, features used) to improve the product and to power the analytics that help us prioritize what to build next.",
          ],
        },
        {
          heading: "How we use it",
          body: [
            "Your roadmap and intake answers are used to generate your business plan, strategy, and recommendations. Your contact information is used to save your progress, notify you about waitlist status, and communicate about Pro, Elite, or Founders access.",
            "We do not sell your personal information to third parties.",
          ],
        },
        {
          heading: "Third-party tools",
          body: [
            "PEN2PRO may link out to affiliate partners for services like LLC formation, business banking, funding, or credit tools. Those third parties have their own privacy policies — review them before submitting information directly to a partner site.",
          ],
        },
        {
          heading: "Data retention & control",
          body: [
            "You can request that we delete your account data and waitlist submission at any time by reaching out through the waitlist form or your account settings once available.",
          ],
        },
      ]}
    />
  );
}
