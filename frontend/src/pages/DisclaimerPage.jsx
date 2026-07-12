import LegalPage from "./LegalPage";

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      updated="July 2026"
      sections={[
        {
          heading: "Not Financial, Legal, or Credit Repair Advice",
          body: [
            "PEN2PRO provides business strategy education, roadmap generation, and organizational tools. Nothing on this platform constitutes financial, legal, tax, or credit repair advice. Consult a licensed professional before making financial, legal, or credit-related decisions.",
          ],
        },
        {
          heading: "No Guaranteed Outcomes",
          body: [
            "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, business licensing, or business success of any kind. Every roadmap, checklist, and strategy is a starting point — execution, market conditions, and individual circumstances determine real-world outcomes.",
          ],
        },
        {
          heading: "Affiliate Relationships",
          body: [
            "PEN2PRO may link to third-party partners for services like LLC formation, business banking, funding, and credit tools, and may earn a commission from those partnerships. These are not endorsements of guaranteed outcomes from those services.",
          ],
        },
        {
          heading: "Your Responsibility",
          body: [
            "You are responsible for verifying information, complying with applicable laws and regulations, and making your own informed decisions about your business, credit, and finances.",
          ],
        },
      ]}
    />
  );
}
