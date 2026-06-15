import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export default function BrandKitPage() {
  const [form, setForm] = useState({ idea: "", industry: "", audience: "" });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generate = async () => {
    if (!form.idea.trim()) { setError("Enter your business idea first."); return; }
    setLoading(true); setError(""); setResult(null);
    try {
      const r = await fetch(`${API}/api/agents/brand/run`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, tier: localStorage.getItem("tier") || "free" }),
      });
      const data = await r.json();
      setResult(data.result?.brand || data.brand || data);
    } catch { setError("Could not connect to PEN2PRO AI. Please try again."); }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#080D18", color: "#fff" }}>
      <Navbar />
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ fontSize: 12, color: "#1E88E5", fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>PEN2PRO AI</div>
        <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Brand Kit Generator</h1>
        <p style={{ color: "#64748B", marginBottom: 32 }}>Enter your business idea and get a complete brand identity — names, colors, voice, taglines, and more.</p>

        <div style={{ background: "#0A0F1E", border: "1px solid #1A2D50", borderRadius: 16, padding: 28, marginBottom: 24 }}>
          {[
            { label: "Business Idea *", key: "idea", placeholder: "e.g. Pressure washing company in Houston" },
            { label: "Industry", key: "industry", placeholder: "e.g. Home Services" },
            { label: "Target Audience", key: "audience", placeholder: "e.g. Homeowners ages 30-55" },
          ].map(({ label, key, placeholder }) => (
            <div key={key} style={{ marginBottom: 16 }}>
              <label style={{ color: "#94A3B8", fontSize: 13, display: "block", marginBottom: 6 }}>{label}</label>
              <input value={form[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                placeholder={placeholder}
                style={{ width: "100%", background: "#0F1520", border: "1px solid #1A2D50", borderRadius: 8, padding: "12px 14px", color: "#fff", fontSize: 14, boxSizing: "border-box" }} />
            </div>
          ))}
          {error && <div style={{ color: "#FCA5A5", fontSize: 13, marginBottom: 12 }}>{error}</div>}
          <button onClick={generate} disabled={loading}
            style={{ width: "100%", padding: "14px", background: loading ? "#1A2D50" : "#1E88E5", border: "none", borderRadius: 10, color: "#fff", fontWeight: 800, fontSize: 16, cursor: loading ? "default" : "pointer" }}>
            {loading ? "⚡ Generating Brand Kit..." : "Generate My Brand Kit"}
          </button>
        </div>

        {result && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {result.business_names && (
              <div style={{ background: "#0A0F1E", border: "1px solid #1A2D50", borderRadius: 14, padding: 24 }}>
                <h3 style={{ color: "#1E88E5", fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 14 }}>BUSINESS NAME IDEAS</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {result.business_names.map((n, i) => (
                    <span key={i} style={{ background: "#0F1520", border: "1px solid #1A2D50", borderRadius: 8, padding: "8px 16px", fontWeight: 700, fontSize: 15 }}>{n}</span>
                  ))}
                </div>
              </div>
            )}
            {result.taglines && (
              <div style={{ background: "#0A0F1E", border: "1px solid #1A2D50", borderRadius: 14, padding: 24 }}>
                <h3 style={{ color: "#1E88E5", fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 14 }}>TAGLINES</h3>
                {result.taglines.map((t, i) => <div key={i} style={{ color: "#E2E8F0", fontStyle: "italic", marginBottom: 8, fontSize: 16 }}>"{t}"</div>)}
              </div>
            )}
            {result.brand_colors && (
              <div style={{ background: "#0A0F1E", border: "1px solid #1A2D50", borderRadius: 14, padding: 24 }}>
                <h3 style={{ color: "#1E88E5", fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 14 }}>BRAND COLORS</h3>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 12 }}>
                  {["primary", "secondary", "accent"].map(k => result.brand_colors[k] && (
                    <div key={k} style={{ textAlign: "center" }}>
                      <div style={{ width: 60, height: 60, borderRadius: 10, background: result.brand_colors[k], marginBottom: 6 }} />
                      <div style={{ fontSize: 11, color: "#64748B" }}>{k.toUpperCase()}</div>
                      <div style={{ fontSize: 12, color: "#94A3B8" }}>{result.brand_colors[k]}</div>
                    </div>
                  ))}
                </div>
                {result.brand_colors.rationale && <div style={{ color: "#94A3B8", fontSize: 13 }}>{result.brand_colors.rationale}</div>}
              </div>
            )}
            {["brand_voice", "target_message", "elevator_pitch", "social_bio"].map(key => result[key] && (
              <div key={key} style={{ background: "#0A0F1E", border: "1px solid #1A2D50", borderRadius: 14, padding: 24 }}>
                <h3 style={{ color: "#1E88E5", fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 10 }}>
                  {key.replace(/_/g, " ").toUpperCase()}
                </h3>
                <p style={{ color: "#E2E8F0", lineHeight: 1.7, margin: 0 }}>{result[key]}</p>
              </div>
            ))}
            {result.domain_suggestions && (
              <div style={{ background: "#0A0F1E", border: "1px solid #1A2D50", borderRadius: 14, padding: 24 }}>
                <h3 style={{ color: "#1E88E5", fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 14 }}>DOMAIN SUGGESTIONS</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {result.domain_suggestions.map((d, i) => (
                    <span key={i} style={{ background: "#0F1520", border: "1px solid #1A2D50", borderRadius: 8, padding: "8px 16px", color: "#00C9B1", fontWeight: 700, fontFamily: "monospace" }}>{d}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
