import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getStripeSession } from "../api/stripeApi";

export default function PaymentSuccessPage() {
  const [sessionData, setSessionData] = useState(null);
  const [error, setError] = useState("");
  const location = useLocation();

  useEffect(() => {
    const sessionId = new URLSearchParams(location.search).get("session_id");
    if (!sessionId) {
      setError("Payment received, but session verification is not available yet. Please check your email or account status.");
      return;
    }
    getStripeSession(sessionId).then((data) => {
      if (data.error) setError(data.error);
      else setSessionData(data);
    });
  }, [location.search]);

  return (
    <div>
      <h1>Payment Success</h1>
      {error ? <p>{error}</p> : null}
      {sessionData ? (
        <div>
          <p>Payment status: {sessionData.payment_status}</p>
          <p>Tier purchased: {sessionData.tier}</p>
          <p>Customer email: {sessionData.customer_email || "Not available"}</p>
        </div>
      ) : null}
      <Link to="/dashboard">Continue to dashboard</Link>
      <br />
      <Link to={`/blueprint/starter?tier=${sessionData?.tier || "free"}`}>View blueprint with purchased tier</Link>
    </div>
  );
}
