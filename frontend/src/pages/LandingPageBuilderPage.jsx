import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export default function LandingPageBuilderPage() {
  const [form, setForm] = useState({ idea: "", industry: "", audience: "" });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generate = async () => {
    if (!form.idea.trim()) { setError("Enter your business idea first."); return; }
    setLoading(true); setError(""); setResult(null);
    try {
      const r = await fetch(`${API}/api/agents/landing_page/run`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, tier: localStorage.getItem("tier") || "free" }),
      });
      const data = await r.json();
      setResult(data.result?.page || data.page || data.result || data);
    } catch { setError("Could not reach PEN2PRO AI. Try again."); }
    setLoading(false);
  };

  const fields = result ? [
    { key: "headline", label: "Headline" },
    { key: "subheadline", label: "Sub-Headline" },
    { key: "cta_primary", label: "Primary CTA Button" },
    { key: "urgency_element", label: "Urgency / Scarcity" },
    { key: "social_proof", label: "Social Proof Section" },
    { key: "footer_trust", label: "Footer Trust Statement" },
  ] : [];

  return (
    <div style={{ minHeight: "100vh", background: "#080D18", color: "#fff" }}>
      <Navbar />
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ fontSize: 12, color: "#1E88E5", fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>PEN2PRO AI</div>
        <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Landing Page Builder</h1>
        <p style={{ color: "#64748B", marginBottom: 32 }}>Generate high-converting landing page copy in seconds — headlines, CTAs, social proof, and more.</p>

        <div style={{ background: "#0A0F1E", border: "1px solid #1A2D50", borderRadius: 16, padding: 28, marginBottom: 24 }}>
          {[
            { label: "Business Idea *", key: "idea", placeholder: "e.g. Pressure washing in Houston" },
            { label: "Industry", key: "industry", placeholder: "e.g. Home Services" },
            { label: "Target Audience", key: "audience", placeholder: "e.g. Homeowners ages 30-55" },
          ].map(({ label, key, placeholder }) => (
            <div key={key} style={{ marginBottom: 16 }}>
              <label style={{ color: "#94A3B8", fontSize: 13, display: "block", marginBottom: 6 }}>{label}</label>
              <input value={form[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} placeholder={placeholder}
                style={{ width: "100%", background: "#0F1520", border: "1px solid #1A2D50", borderRadius: 8, padding: "12px 14px", color: "#fff", fontSize: 14, boxSizing: "border-box" }} />
            </div>
          ))}
          {error && <div style={{ color: "#FCA5A5", marginBottom: 12, fontSize: 13 }}>{error}</div>}
          <button onClick={generate} disabled={loading}
            style={{ width: "100%", padding: "14px", background: loading ? "#1A2D50" : "#1E88E5", border: "none", borderRadius: 10, color: "#fff", fontWeight: 800, fontSize: 16, cursor: loading ? "default" : "pointer" }}>
            {loading ? "⚡ Building Your Page..." : "Generate Landing Page Copy"}
          </button>
        </div>

        {result && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {fields.map(({ key, label }) => result[key] && (
              <div key={key} style={{ background: "#0A0F1E", border: "1px solid #1A2D50", borderRadius: 14, padding: 24 }}>
                <div style={{ color: "#1E88E5", fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 10 }}>{label.toUpperCase()}</div>
                <p style={{ color: "#E2E8F0", fontSize: key === "headline" ? 22 : 15, fontWeight: key === "headline" ? 800 : 400, lineHeight: 1.6, margin: 0 }}>{result[key]}</p>
              </div>
            ))}
            {result.bullet_benefits && (
              <div style={{ background: "#0A0F1E", border: "1px solid #1A2D50", borderRadius: 14, padding: 24 }}>
                <div style={{ color: "#1E88E5", fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 14 }}>KEY BENEFITS</div>
                {result.bullet_benefits.map((b, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, marginBottom: 10 }}>
                    <span style={{ color: "#00C9B1", fontWeight: 800 }}>✓</span>
                    <span style={{ color: "#E2E8F0" }}>{b}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
