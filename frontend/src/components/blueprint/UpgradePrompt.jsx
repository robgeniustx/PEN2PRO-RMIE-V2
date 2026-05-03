import { useState } from "react";
import { createCheckoutSession } from "../../api/stripeApi";

export default function UpgradePrompt() {
  const [error, setError] = useState("");

  const handleCheckout = async (tier) => {
    setError("");
    const result = await createCheckoutSession({ tier });
    if (result?.checkout_url) {
      window.location.href = result.checkout_url;
      return;
    }
    setError("Checkout is not configured yet. Please add Stripe environment variables.");
  };

  return (
    <div>
      <h3>Upgrade your Blueprint Access</h3>
      <button onClick={() => handleCheckout("pro")}>Upgrade to Pro</button>
      <button onClick={() => handleCheckout("elite")}>Upgrade to Elite</button>
      <button onClick={() => handleCheckout("founders")}>Get Founders Lifetime</button>
      {error ? <p>{error}</p> : null}
    </div>
  );
}
