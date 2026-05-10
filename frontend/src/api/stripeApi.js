const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export async function createCheckoutSession({ tier, customerEmail }) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/stripe/create-checkout-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tier, customer_email: customerEmail || null }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || "Checkout failed");
    return data;
  } catch (error) {
    return { error: "Checkout is not configured yet. Please add Stripe environment variables." };
  }
}

export async function getStripeSession(sessionId) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/stripe/session/${sessionId}`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || "Session lookup failed");
    return data;
  } catch (_error) {
    return { error: "Payment received, but session verification is not available yet. Please check your email or account status." };
  }
}

export const createCheckoutPlaceholder = async (tier) => {
  // TODO: Replace this stub with real Stripe Checkout session creation in a future phase.
  return {
    status: "stub",
    message: "Stripe checkout will be connected in a future phase.",
    tier,
  };
};
// TODO stripeApi
