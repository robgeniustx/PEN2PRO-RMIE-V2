import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export default function SeoPage() {
  const [form, setForm] = useState({ idea: "", industry: "", location: "Houston, TX" });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generate = async () => {
    if (!form.idea.trim()) { setError("Enter your business first."); return; }
    setLoading(true); setError(""); setResult(null);
    try {
      const r = await fetch(`${API}/api/agents/seo/run`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, tier: localStorage.getItem("tier") || "free" }),
      });
      const data = await r.json();
      setResult(data.result?.seo || data.seo || data);
    } catch { setError("Could not reach PEN2PRO AI. Try again."); }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#080D18", color: "#fff" }}>
      <Navbar />
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ fontSize: 12, color: "#1E88E5", fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>PEN2PRO AI</div>
        <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Local SEO Strategy</h1>
        <p style={{ color: "#64748B", marginBottom: 32 }}>Get found on Google. AI-generated local SEO plan built for your specific business and market.</p>

        <div style={{ background: "#0A0F1E", border: "1px solid #1A2D50", borderRadius: 16, padding: 28, marginBottom: 24 }}>
          {[
            { label: "Business *", key: "idea", placeholder: "e.g. Pressure washing company" },
            { label: "Industry", key: "industry", placeholder: "e.g. Home Services" },
            { label: "Location", key: "location", placeholder: "City, State" },
          ].map(({ label, key, placeholder }) => (
            <div key={key} style={{ marginBottom: 16 }}>
              <label style={{ color: "#94A3B8", fontSize: 13, display: "block", marginBottom: 6 }}>{label}</label>
              <input value={form[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} placeholder={placeholder}
                style={{ width: "100%", background: "#0F1520", border: "1px solid #1A2D50", borderRadius: 8, padding: "12px 14px", color: "#fff", fontSize: 14, boxSizing: "border-box" }} />
            </div>
          ))}
          {error && <div style={{ color: "#FCA5A5", fontSize: 13, marginBottom: 12 }}>{error}</div>}
          <button onClick={generate} disabled={loading}
            style={{ width: "100%", padding: "14px", background: loading ? "#1A2D50" : "#1E88E5", border: "none", borderRadius: 10, color: "#fff", fontWeight: 800, fontSize: 16, cursor: loading ? "default" : "pointer" }}>
            {loading ? "⚡ Building SEO Strategy..." : "Generate SEO Strategy"}
          </button>
        </div>

        {result && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {["primary_keywords", "long_tail_keywords", "content_topics", "local_citation_sites"].map(key => result[key] && (
              <div key={key} style={{ background: "#0A0F1E", border: "1px solid #1A2D50", borderRadius: 14, padding: 24 }}>
                <h3 style={{ color: "#1E88E5", fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 14 }}>{key.replace(/_/g, " ").toUpperCase()}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {result[key].map((k, i) => <span key={i} style={{ background: "#0F1520", border: "1px solid #1A2D50", borderRadius: 6, padding: "6px 12px", color: "#E2E8F0", fontSize: 14 }}>{k}</span>)}
                </div>
              </div>
            ))}
            {result.google_business_profile && (
              <div style={{ background: "#0A0F1E", border: "1px solid #1A2D50", borderRadius: 14, padding: 24 }}>
                <h3 style={{ color: "#1E88E5", fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 14 }}>GOOGLE BUSINESS PROFILE</h3>
                {Object.entries(result.google_business_profile).map(([k, v]) => (
                  <div key={k} style={{ marginBottom: 12 }}>
                    <div style={{ color: "#64748B", fontSize: 12, marginBottom: 4 }}>{k.replace(/_/g, " ").toUpperCase()}</div>
                    <div style={{ color: "#E2E8F0" }}>{Array.isArray(v) ? v.join(", ") : v}</div>
                  </div>
                ))}
              </div>
            )}
            {result["30_day_seo_plan"] && (
              <div style={{ background: "#0A0F1E", border: "1px solid #1A2D50", borderRadius: 14, padding: 24 }}>
                <h3 style={{ color: "#1E88E5", fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 14 }}>30-DAY SEO PLAN</h3>
                {result["30_day_seo_plan"].map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                    <span style={{ background: "#1E88E5", borderRadius: "50%", width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, flexShrink: 0 }}>{i + 1}</span>
                    <span style={{ color: "#E2E8F0", fontSize: 14, lineHeight: 1.6 }}>{step}</span>
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
