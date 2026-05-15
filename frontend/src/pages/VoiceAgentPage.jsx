import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

// ── Industry data ─────────────────────────────────────────────────────────────
const INDUSTRIES = [
  { name: "Pressure Washing", icon: "💧" },
  { name: "HVAC", icon: "❄️" },
  { name: "Auto Repair", icon: "🔧" },
  { name: "Roofing", icon: "🏠" },
  { name: "Plumbing", icon: "🔩" },
  { name: "Tree Service", icon: "🌳" },
  { name: "Lawn Care", icon: "🌿" },
  { name: "Barber", icon: "✂️" },
  { name: "Beauty Salon", icon: "💄" },
  { name: "Nail Salon", icon: "💅" },
  { name: "Massage Therapy", icon: "🧘" },
  { name: "Cleaning Company", icon: "🧹" },
  { name: "Mobile Detailing", icon: "🚗" },
  { name: "Handyman", icon: "🔨" },
  { name: "Electrician", icon: "⚡" },
  { name: "Pest Control", icon: "🐛" },
  { name: "Moving Company", icon: "📦" },
  { name: "Real Estate", icon: "🏡" },
  { name: "Insurance Agent", icon: "📋" },
  { name: "Coach / Consultant", icon: "🎯" },
];

const SCRIPTS = {
  "pressure washing": {
    greeting:
      "Thanks for calling! I can help with house washing, driveway cleaning, roof soft washing, commercial exterior cleaning, and quote requests. What service are you needing today?",
    questions: [
      "What surface needs cleaning — driveway, house exterior, roof, or commercial property?",
      "Is this residential or commercial?",
      "What city are you located in?",
      "How soon do you need service?",
    ],
  },
  hvac: {
    greeting:
      "Thanks for calling! I can help with AC repair, heating, maintenance, and emergency service requests. What issue are you having today?",
    questions: [
      "Is the unit cooling or heating?",
      "Is this an urgent situation?",
      "What brand or age is the system?",
      "What is the service address?",
    ],
  },
  "auto repair": {
    greeting:
      "Thanks for calling! I can help with repair requests, appointment scheduling, diagnostics, brakes, oil changes, and vehicle service questions. What vehicle are you calling about?",
    questions: [
      "Year, make, and model?",
      "What problem are you experiencing?",
      "Is the vehicle drivable?",
      "When would you like to bring it in?",
    ],
  },
  barber: {
    greeting:
      "Thanks for calling! I can help with booking, availability, services, pricing, and appointment requests. What service are you trying to schedule?",
    questions: [
      "What service do you need?",
      "Preferred day and time?",
      "Is this your first visit?",
      "Do you have a preferred barber?",
    ],
  },
};

function getScript(industry, bizName) {
  const key = industry.toLowerCase().trim();
  if (SCRIPTS[key]) return SCRIPTS[key];
  return {
    greeting: `Thanks for calling${bizName ? " " + bizName : ""}! I can help answer questions, capture your request, and make sure someone follows up quickly. What can I help you with today?`,
    questions: [
      "What service do you need?",
      "What is your name and phone number?",
      "How urgent is this?",
      "What is the best time to follow up?",
    ],
  };
}

// ── Plan config ───────────────────────────────────────────────────────────────
const PLANS = [
  {
    tier: "Tier 01",
    name: "Starter Voice Agent",
    price: "$49",
    period: "/mo",
    desc: "For solo operators who need missed calls captured and summarized — simple, fast, effective.",
    key: "starter",
    featured: false,
    features: [
      "1 AI voice agent",
      "1 business profile",
      "Lead capture & logging",
      "Missed-call response script",
      "Basic call summary",
      "Email notifications",
      "Industry script template",
    ],
  },
  {
    tier: "Tier 02",
    name: "Pro Voice Agent",
    price: "$99",
    period: "/mo",
    desc: "For service businesses that want appointment-ready automation and qualified leads on demand.",
    key: "pro",
    featured: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Appointment intake",
      "Job qualification questions",
      "SMS + email lead summary",
      "Custom FAQ training",
      "Multiple service scripts",
      "Priority lead tagging",
      "Follow-up workflow",
      "Call transcript storage",
    ],
  },
  {
    tier: "Tier 03",
    name: "Elite Voice Agent",
    price: "$249",
    period: "/mo",
    desc: "For serious businesses that want full lead handling, multi-agent routing, and CRM-style follow-up.",
    key: "elite",
    featured: false,
    features: [
      "Everything in Pro",
      "Multiple AI agents",
      "Multi-location support",
      "Advanced lead scoring",
      "CRM-style lead board",
      "Call routing rules",
      "After-hours answering",
      "Quote request workflow",
      "Campaign tracking",
      "PEN2PRO strategist integration",
    ],
  },
];

export default function VoiceAgentPage() {
  // Scroll to top every time this page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [bizName, setBizName] = useState("");
  const [bizEmail, setBizEmail] = useState("");
  const [bizPhone, setBizPhone] = useState("");
  const [industry, setIndustry] = useState("Pressure Washing");
  const [activeIndustry, setActiveIndustry] = useState("");
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [modal, setModal] = useState(null); // { name, price, key }
  const [mName, setMName] = useState("");
  const [mEmail, setMEmail] = useState("");
  const [mPhone, setMPhone] = useState("");
  const [modalError, setModalError] = useState("");
  const [toast, setToast] = useState(null);

  function showToast(title, body) {
    setToast({ title, body });
    setTimeout(() => setToast(null), 4000);
  }

  function handleIndustryChip(ind) {
    setActiveIndustry(ind.name);
    setIndustry(ind.name);
  }

  function generatePreview() {
    setEmailError("");
    if (!bizEmail) {
      setEmailError("Please enter your email address.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setPreview(getScript(industry, bizName));
      setLoading(false);
    }, 800);
  }

  function openModal(plan) {
    setMName(bizName);
    setMEmail(bizEmail);
    setMPhone(bizPhone);
    setModalError("");
    setModal(plan);
  }

  function submitCheckout() {
    if (!mEmail) {
      setModalError("Email is required to proceed.");
      return;
    }
    setModal(null);
    showToast(
      "🚀 Redirecting to Checkout",
      `Activating your ${modal.name}. Your agent will be provisioned after payment.`
    );
  }

  return (
    <div style={{ background: "#0A0F1E", minHeight: "100vh", color: "#F1F5F9" }}>

      {/* ── NAVBAR ── */}
      <Navbar />

      {/* ── HERO ── */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Grid background */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(30,136,229,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,136,229,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }} />
        {/* Glow orbs */}
        <div style={{ position: "absolute", width: 600, height: 400, background: "rgba(13,71,161,0.15)", top: -100, left: "10%", borderRadius: "50%", filter: "blur(90px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 400, height: 300, background: "rgba(255,138,0,0.08)", top: 80, right: "5%", borderRadius: "50%", filter: "blur(90px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "90px 6% 80px", display: "grid", gridTemplateColumns: "1fr 420px", gap: 60, alignItems: "start", position: "relative" }}
          className="voice-hero-grid">
          <style>{`
            @media(max-width:960px){
              .voice-hero-grid{ grid-template-columns:1fr!important; }
              .voice-form-wrap{ order:-1; }
            }
            @keyframes pulse-dot{ 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }
            @keyframes slide-in{ from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
            @keyframes fade-up{ from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
          `}</style>

          {/* Hero copy */}
          <div style={{ animation: "fade-up .7s ease both" }}>
            {/* Eyebrow */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(30,136,229,0.12)",
              border: "1px solid rgba(30,136,229,0.35)",
              color: "#42A5F5", fontSize: "0.72rem", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase",
              padding: "5px 14px", borderRadius: 99, marginBottom: 24,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#42A5F5", display: "inline-block", animation: "pulse-dot 2s infinite" }} />
              AI Voice Agent Studio — Small Business Edition
            </div>

            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(2.4rem,5vw,3.8rem)", lineHeight: 1.07, letterSpacing: "-0.02em", marginBottom: 20 }}>
              Stop losing jobs<br />
              because you're<br />
              <span style={{ color: "#FF8A00" }}>glued to the phone.</span>
            </h1>

            <p style={{ fontSize: "1.05rem", color: "#94A3B8", lineHeight: 1.7, maxWidth: 520, marginBottom: 36 }}>
              Build an AI voice agent that answers calls, qualifies leads, captures job details,
              and follows up — while you keep working. Built for service businesses. Powered by PEN2PRO.
            </p>

            {/* Stats */}
            <div style={{ display: "flex", gap: 36, marginBottom: 40, flexWrap: "wrap" }}>
              {[["78%", "of callers won't leave a voicemail"], ["5x", "faster lead response = more conversions"], ["24/7", "your agent works every hour you don't"]].map(([num, label]) => (
                <div key={num}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2.2rem", color: "#FF8A00", lineHeight: 1, fontWeight: 900 }}>{num}</div>
                  <div style={{ fontSize: "0.78rem", color: "#475569", marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Proof chips */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {["Answer missed calls", "Qualify service leads", "Send call summaries", "Book appointments"].map(label => (
                <div key={label} style={{
                  display: "flex", alignItems: "center", gap: 6,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid #1A2D50",
                  fontSize: "0.78rem", color: "#94A3B8",
                  padding: "6px 14px", borderRadius: 99,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Hero form */}
          <div className="voice-form-wrap" style={{
            background: "#0D1528", border: "1px solid #1A2D50",
            borderRadius: 24, padding: 28,
            boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(30,136,229,0.06)",
            animation: "slide-in .5s ease both",
          }}>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#F1F5F9", marginBottom: 4 }}>
              Preview Your AI Voice Agent
            </h2>
            <p style={{ fontSize: "0.82rem", color: "#64748B", marginBottom: 20 }}>
              Select your business type and see how your agent responds.
            </p>

            {[
              { id: "biz-name", label: "Business Name", type: "text", placeholder: "e.g. XLR8 Pressure Washing", value: bizName, set: setBizName },
              { id: "biz-email", label: "Email Address", type: "email", placeholder: "you@yourbusiness.com", value: bizEmail, set: setBizEmail },
              { id: "biz-phone", label: "Phone Number", type: "tel", placeholder: "(832) 555-0100", value: bizPhone, set: setBizPhone },
            ].map(f => (
              <div key={f.id} style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: "0.73rem", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>{f.label}</label>
                <input
                  type={f.type} placeholder={f.placeholder} value={f.value}
                  onChange={e => f.set(e.target.value)}
                  style={{ width: "100%", background: "#0A0F1E", border: "1px solid #1A2D50", borderRadius: 10, color: "#F1F5F9", fontSize: "0.88rem", padding: "11px 14px", outline: "none", fontFamily: "inherit" }}
                  onFocus={e => { e.target.style.borderColor = "#FF8A00"; e.target.style.boxShadow = "0 0 0 3px rgba(255,138,0,0.15)"; }}
                  onBlur={e => { e.target.style.borderColor = "#1A2D50"; e.target.style.boxShadow = "none"; }}
                />
              </div>
            ))}

            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: "0.73rem", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Business Type</label>
              <div style={{ position: "relative" }}>
                <select
                  value={industry}
                  onChange={e => setIndustry(e.target.value)}
                  style={{ width: "100%", background: "#0A0F1E", border: "1px solid #1A2D50", borderRadius: 10, color: "#F1F5F9", fontSize: "0.88rem", padding: "11px 14px", outline: "none", appearance: "none", fontFamily: "inherit", cursor: "pointer" }}>
                  {INDUSTRIES.map(i => <option key={i.name}>{i.name}</option>)}
                </select>
                <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "#64748B", pointerEvents: "none", fontSize: "0.75rem" }}>▾</span>
              </div>
            </div>

            <button
              onClick={generatePreview}
              disabled={loading}
              style={{
                width: "100%", marginTop: 6,
                background: loading ? "#1A2D50" : "linear-gradient(135deg, #FF8A00, #FFC107)",
                color: loading ? "#64748B" : "#0A0F1E",
                border: "none", cursor: loading ? "not-allowed" : "pointer",
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800,
                fontSize: "0.9rem", letterSpacing: "0.04em",
                padding: 13, borderRadius: 10,
                transition: "all .2s",
              }}>
              {loading ? "Generating..." : "→ Generate My Voice Agent Preview"}
            </button>

            {emailError && <p style={{ color: "#f87171", fontSize: "0.78rem", marginTop: 8 }}>{emailError}</p>}

            {preview && (
              <div style={{ marginTop: 16, background: "#060A14", border: "1px solid rgba(30,136,229,0.35)", borderRadius: 16, padding: 18, animation: "slide-in .3s ease" }}>
                <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#42A5F5", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#42A5F5", display: "inline-block", animation: "pulse-dot 1.5s infinite" }} />
                  Agent Preview — {industry}
                </div>
                <p style={{ fontSize: "0.84rem", color: "#F1F5F9", lineHeight: 1.6, fontStyle: "italic", borderLeft: "2px solid #FF8A00", paddingLeft: 12, marginBottom: 14 }}>
                  "{preview.greeting}"
                </p>
                <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#475569", marginBottom: 8 }}>
                  Lead Qualification Questions
                </div>
                {preview.questions.map((q, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.8rem", color: "#94A3B8", marginBottom: 6 }}>
                    <span style={{ color: "#FF8A00", flexShrink: 0 }}>→</span> {q}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── DIVIDER ── */}
      <hr style={{ border: "none", height: 1, background: "linear-gradient(90deg, transparent, #1A2D50, transparent)", margin: 0 }} />

      {/* ── INDUSTRIES ── */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 6%" }}>
        <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#FF8A00", marginBottom: 12 }}>
          Who It Serves
        </div>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(1.9rem,3.5vw,2.8rem)", lineHeight: 1.12, letterSpacing: "-0.02em", color: "#F1F5F9", marginBottom: 14 }}>
          Built for every service<br />business on your block.
        </h2>
        <p style={{ fontSize: "0.98rem", color: "#94A3B8", maxWidth: 560 }}>
          Every industry below gets a pre-built script, lead questions, and agent greeting — ready to deploy on day one.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 10, marginTop: 36 }}>
          {INDUSTRIES.map(ind => (
            <button
              key={ind.name}
              onClick={() => handleIndustryChip(ind)}
              style={{
                background: activeIndustry === ind.name ? "rgba(255,138,0,0.1)" : "#0D1528",
                border: `1px solid ${activeIndustry === ind.name ? "#FF8A00" : "#1A2D50"}`,
                borderRadius: 10, padding: "12px 14px",
                fontSize: "0.8rem", fontWeight: 500,
                color: activeIndustry === ind.name ? "#FF8A00" : "#94A3B8",
                cursor: "pointer", transition: "all .2s", textAlign: "center",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                fontFamily: "inherit",
              }}>
              {ind.icon} {ind.name}
            </button>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", height: 1, background: "linear-gradient(90deg, transparent, #1A2D50, transparent)", margin: 0 }} />

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: "#060A14", borderTop: "1px solid #1A2D50", borderBottom: "1px solid #1A2D50", padding: "80px 6%" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1E88E5", marginBottom: 12 }}>
            The System
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(1.9rem,3.5vw,2.8rem)", lineHeight: 1.12, color: "#F1F5F9" }}>
            Your AI agent. Your script.<br />Runs without you.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 24, marginTop: 48 }}>
            {[
              { num: "01", icon: "📞", title: "Call Comes In", desc: "A customer calls your business number. Your AI voice agent picks up in under 2 seconds, every time — day or night." },
              { num: "02", icon: "🎯", title: "Agent Qualifies", desc: "The agent uses your industry-specific script to ask the right questions: service type, location, urgency, and contact details." },
              { num: "03", icon: "📋", title: "Lead Captured", desc: "All caller details are logged automatically. You receive a full summary via email or SMS — nothing lost, nothing forgotten." },
              { num: "04", icon: "🚀", title: "You Close the Job", desc: "You return the call with full context — name, service needed, urgency, location. You show up prepared. You close faster." },
            ].map(step => (
              <div key={step.num}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "4.5rem", color: "rgba(255,138,0,0.1)", lineHeight: 1, marginBottom: 8, fontWeight: 900 }}>{step.num}</div>
                <div style={{ width: 44, height: 44, background: "rgba(255,138,0,0.1)", border: "1px solid rgba(255,138,0,0.3)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", marginBottom: 16 }}>{step.icon}</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#F1F5F9", marginBottom: 8 }}>{step.title}</div>
                <p style={{ fontSize: "0.83rem", color: "#64748B", lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ border: "none", height: 1, background: "linear-gradient(90deg, transparent, #1A2D50, transparent)", margin: 0 }} />

      {/* ── PRICING ── */}
      <section id="pricing" style={{ maxWidth: 1280, margin: "0 auto", padding: "90px 6%" }}>
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#FF8A00", display: "inline-block" }}>Pricing</div>
        </div>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(1.9rem,3.5vw,2.8rem)", textAlign: "center", color: "#F1F5F9", marginBottom: 8 }}>
          Choose your agent tier.
        </h2>
        <p style={{ textAlign: "center", color: "#64748B", fontSize: "0.98rem", maxWidth: 560, margin: "0 auto 52px" }}>
          Start with call capture or unlock the full AI lead-handling system inside the PEN2PRO ecosystem.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, alignItems: "start" }}
          className="voice-pricing-grid">
          <style>{`.voice-pricing-grid{ @media(max-width:860px){ grid-template-columns:1fr!important; } }`}</style>

          {PLANS.map(plan => (
            <div key={plan.key} style={{
              background: plan.featured
                ? "linear-gradient(160deg, #0D1A35 0%, #0D1528 100%)"
                : "#0D1528",
              border: plan.featured ? "1px solid #1E88E5" : "1px solid #1A2D50",
              borderRadius: 24, padding: 28,
              transform: plan.featured ? "translateY(-8px)" : "none",
              boxShadow: plan.featured ? "0 0 0 1px #1E88E5, 0 20px 60px rgba(30,136,229,0.15)" : "none",
              position: "relative",
              transition: "transform .2s, box-shadow .2s",
            }}>
              {plan.badge && (
                <div style={{
                  position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)",
                  background: "linear-gradient(135deg, #0D47A1, #1E88E5)",
                  color: "#fff", fontSize: "0.65rem", fontWeight: 800,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  padding: "4px 14px", borderRadius: 99, whiteSpace: "nowrap",
                }}>
                  {plan.badge}
                </div>
              )}
              <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#475569", marginBottom: 10 }}>{plan.tier}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1.3rem", color: "#F1F5F9", marginBottom: 6 }}>{plan.name}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "3.4rem", color: "#F1F5F9", lineHeight: 1, marginBottom: 4, display: "flex", alignItems: "baseline", gap: 4, fontWeight: 900 }}>
                {plan.price}<sub style={{ fontFamily: "inherit", fontSize: "0.85rem", color: "#64748B", fontStyle: "normal" }}>{plan.period}</sub>
              </div>
              <p style={{ fontSize: "0.81rem", color: "#94A3B8", marginBottom: 22, lineHeight: 1.55 }}>{plan.desc}</p>

              <ul style={{ listStyle: "none", padding: 0, marginBottom: 26 }}>
                {plan.features.map((f, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.82rem", color: "#94A3B8", padding: "5px 0", borderBottom: i < plan.features.length - 1 ? "1px solid #1A2D50" : "none" }}>
                    <span style={{ color: "#10b981", flexShrink: 0, fontSize: "0.8rem", marginTop: 1 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openModal(plan)}
                style={{
                  width: "100%", padding: 13, cursor: "pointer", borderRadius: 10,
                  fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "0.88rem",
                  letterSpacing: "0.03em", transition: "all .2s",
                  background: plan.featured ? "linear-gradient(135deg, #0D47A1, #1E88E5)" : "transparent",
                  color: plan.featured ? "#fff" : "#1E88E5",
                  border: plan.featured ? "none" : "1px solid rgba(30,136,229,0.35)",
                }}>
                Activate {plan.name.split(" ")[0]} →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOUNDER STRIP ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto 80px", padding: "0 6%" }}>
        <div style={{
          background: "linear-gradient(130deg, #1a0e00 0%, #120e0a 40%, #0A0F1E 100%)",
          border: "1px solid rgba(255,138,0,0.3)",
          borderRadius: 24, padding: "40px 44px",
          display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center",
          position: "relative", overflow: "hidden",
          boxShadow: "0 0 60px rgba(255,138,0,0.06)",
        }}>
          <div style={{ position: "absolute", top: -60, right: -60, width: 280, height: 280, background: "radial-gradient(circle, rgba(255,138,0,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#FFC107", marginBottom: 10 }}>⭐ Limited — Founder Access</div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "1.7rem", color: "#F1F5F9", marginBottom: 10, lineHeight: 1.15 }}>
              PEN2PRO Founder<br /><span style={{ color: "#FFC107" }}>Lifetime Add-On</span>
            </h2>
            <p style={{ fontSize: "0.87rem", color: "#94A3B8", lineHeight: 1.65, maxWidth: 480 }}>
              One-time investment. Lifetime access to PEN2PRO Founder benefits, early RMIE tools, preferred pricing
              on all AI agent add-ons, and priority platform updates as the ecosystem grows.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 18 }}>
              {["Lifetime Access", "Early RMIE Tools", "Preferred Pricing", "Priority Updates"].map(p => (
                <span key={p} style={{ fontSize: "0.74rem", fontWeight: 600, color: "#FFC107", background: "rgba(255,193,7,0.1)", border: "1px solid rgba(255,193,7,0.2)", padding: "4px 12px", borderRadius: 99 }}>{p}</span>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "center", position: "relative" }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "3.6rem", color: "#FFC107", lineHeight: 1, marginBottom: 4, fontWeight: 900 }}>$0</div>
            <div style={{ fontSize: "0.75rem", color: "#475569", marginBottom: 18 }}>One-time payment. No renewals.</div>
            <button
              onClick={() => openModal({ name: "Founder Lifetime", price: "$0", key: "founder" })}
              style={{
                background: "linear-gradient(135deg, #FF8A00, #FFC107)",
                color: "#0A0F1E", border: "none", cursor: "pointer",
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900,
                fontSize: "0.88rem", padding: "13px 28px", borderRadius: 10,
                transition: "all .2s", whiteSpace: "nowrap",
              }}>
              Secure Founder Access →
            </button>
          </div>
        </div>
      </div>

      {/* ── CTA STRIP ── */}
      <div style={{ background: "#060A14", borderTop: "1px solid #1A2D50", padding: "60px 6%", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#F1F5F9", marginBottom: 12 }}>
          Ready to build your full business roadmap?
        </h2>
        <p style={{ color: "#64748B", fontSize: "0.95rem", marginBottom: 28 }}>
          The Voice Agent is one tool in the PEN2PRO ecosystem. Get your full AI business roadmap, funding readiness, and credit strategy inside.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/starter" style={{ background: "linear-gradient(135deg, #FF8A00, #FFC107)", color: "#0A0F1E", fontWeight: 800, padding: "13px 28px", borderRadius: 12, textDecoration: "none", fontSize: "0.92rem" }}>
            Start Free Roadmap →
          </Link>
          <Link to="/waitlist" style={{ background: "transparent", border: "1.5px solid #1A2D50", color: "#94A3B8", fontWeight: 600, padding: "13px 28px", borderRadius: 12, textDecoration: "none", fontSize: "0.92rem" }}>
            Join Waitlist
          </Link>
        </div>
      </div>

      {/* ── CHECKOUT MODAL ── */}
      {modal && (
        <div
          onClick={e => { if (e.target === e.currentTarget) setModal(null); }}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
          <div style={{ background: "#0D1528", border: "1px solid #1A2D50", borderRadius: 24, padding: 36, width: "100%", maxWidth: 480, position: "relative", animation: "slide-in .3s ease" }}>
            <button onClick={() => setModal(null)} style={{ position: "absolute", top: 18, right: 18, background: "none", border: "none", cursor: "pointer", color: "#64748B", fontSize: "1.3rem", lineHeight: 1 }}>✕</button>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#F1F5F9", marginBottom: 6 }}>Activate {modal.name}</h2>
            <div style={{ display: "inline-block", background: "rgba(30,136,229,0.12)", border: "1px solid rgba(30,136,229,0.35)", color: "#42A5F5", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 99, marginBottom: 20 }}>
              {modal.name} — {modal.price}
            </div>
            <p style={{ fontSize: "0.85rem", color: "#94A3B8", marginBottom: 16 }}>
              Enter your details below to proceed to secure checkout. Your agent will be provisioned after payment.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { placeholder: "Business name", value: mName, set: setMName, type: "text" },
                { placeholder: "Email address", value: mEmail, set: setMEmail, type: "email" },
                { placeholder: "Phone number", value: mPhone, set: setMPhone, type: "tel" },
              ].map((f, i) => (
                <input key={i} type={f.type} placeholder={f.placeholder} value={f.value}
                  onChange={e => f.set(e.target.value)}
                  style={{ width: "100%", background: "#0A0F1E", border: "1px solid #1A2D50", borderRadius: 10, color: "#F1F5F9", fontFamily: "inherit", fontSize: "0.88rem", padding: "11px 14px", outline: "none" }}
                />
              ))}
              <button
                onClick={submitCheckout}
                style={{ width: "100%", padding: 13, background: "linear-gradient(135deg, #FF8A00, #FFC107)", color: "#0A0F1E", border: "none", cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "0.9rem", borderRadius: 10 }}>
                Proceed to Checkout →
              </button>
            </div>
            {modalError && <p style={{ color: "#f87171", fontSize: "0.78rem", marginTop: 8 }}>{modalError}</p>}
          </div>
        </div>
      )}

      {/* ── TOAST ── */}
      {toast && (
        <div style={{
          position: "fixed", bottom: 28, right: 28,
          background: "#0D1528", border: "1px solid rgba(30,136,229,0.35)",
          borderRadius: 16, padding: "16px 20px", maxWidth: 340,
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)", zIndex: 999,
          animation: "slide-in .3s ease", fontSize: "0.84rem",
        }}>
          <div style={{ fontWeight: 700, color: "#F1F5F9", marginBottom: 4 }}>{toast.title}</div>
          <div style={{ color: "#94A3B8" }}>{toast.body}</div>
        </div>
      )}
    </div>
  );
}
