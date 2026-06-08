import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { getPipelineSummary, getDueFollowUps, listLeads, createLead, updateLead } from "../api/crmApi";

const STAGE_COLORS = {
  "New Lead":   { border: "#1E88E5", bg: "#1E88E5" },
  "Contacted":  { border: "#FF8A00", bg: "#FF8A00" },
  "Quote Sent": { border: "#7C3AED", bg: "#7C3AED" },
  "Follow-Up":  { border: "#D4A017", bg: "#D4A017" },
  "Won":        { border: "#059669", bg: "#059669" },
  "Closed":     { border: "#64748b", bg: "#64748b" },
};

const STAGES = ["New Lead", "Contacted", "Quote Sent", "Follow-Up", "Won", "Closed"];

function stageColor(stage) {
  return STAGE_COLORS[stage] || { border: "#1A2D50", bg: "#FF8A00" };
}

function AddLeadModal({ onClose, onSave }) {
  const [form, setForm] = useState({ name: "", source: "Direct", stage: "New Lead", value: "", notes: "" });
  const SOURCES = ["Direct", "Google", "Referral", "Facebook", "Instagram", "Website", "Cold Call", "Text-Back"];

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "#0F1520", border: "1px solid #1A2D50", borderRadius: 16, padding: 32, width: "100%", maxWidth: 480 }}>
        <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Add New Lead</h3>
        {[
          { label: "Name *", key: "name", type: "text", placeholder: "Contact full name" },
          { label: "Estimated Value", key: "value", type: "text", placeholder: "$1,200" },
          { label: "Notes", key: "notes", type: "text", placeholder: "Brief note about this lead" },
        ].map(({ label, key, type, placeholder }) => (
          <div key={key} style={{ marginBottom: 16 }}>
            <label style={{ color: "#94A3B8", fontSize: 12, display: "block", marginBottom: 6 }}>{label}</label>
            <input type={type} value={form[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
              placeholder={placeholder}
              style={{ width: "100%", background: "#0A0F1E", border: "1px solid #1A2D50", borderRadius: 8, padding: "10px 12px", color: "#fff", fontSize: 14, boxSizing: "border-box" }} />
          </div>
        ))}
        {[
          { label: "Source", key: "source", options: SOURCES },
          { label: "Stage", key: "stage", options: STAGES },
        ].map(({ label, key, options }) => (
          <div key={key} style={{ marginBottom: 16 }}>
            <label style={{ color: "#94A3B8", fontSize: 12, display: "block", marginBottom: 6 }}>{label}</label>
            <select value={form[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
              style={{ width: "100%", background: "#0A0F1E", border: "1px solid #1A2D50", borderRadius: 8, padding: "10px 12px", color: "#fff", fontSize: 14 }}>
              {options.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
        ))}
        <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
          <button onClick={onClose} style={{ flex: 1, padding: "12px", background: "transparent", border: "1px solid #1A2D50", borderRadius: 8, color: "#94A3B8", cursor: "pointer" }}>Cancel</button>
          <button onClick={() => { if (form.name.trim()) { onSave(form); onClose(); } }}
            style={{ flex: 2, padding: "12px", background: "#1E88E5", border: "none", borderRadius: 8, color: "#fff", fontWeight: 700, cursor: "pointer" }}>
            Save Lead
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CrmPage() {
  const [leads, setLeads] = useState([]);
  const [followUps, setFollowUps] = useState([]);
  const [pipeline, setPipeline] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAddLead, setShowAddLead] = useState(false);
  const [filter, setFilter] = useState("");
  const [stageFilter, setStageFilter] = useState("All");

  useEffect(() => {
    Promise.all([
      listLeads(),
      getDueFollowUps(),
      getPipelineSummary(),
    ]).then(([l, f, p]) => {
      setLeads(Array.isArray(l) ? l : []);
      setFollowUps(Array.isArray(f) ? f : []);
      setPipeline(p);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const handleAddLead = async (form) => {
    const newLead = await createLead(form);
    setLeads(prev => [newLead, ...prev]);
  };

  const handleStageChange = async (leadId, newStage) => {
    await updateLead(leadId, { stage: newStage });
    setLeads(prev => prev.map(l => l.id === leadId || l._id === leadId ? { ...l, stage: newStage } : l));
  };

  const filtered = leads.filter(l => {
    const matchName = filter === "" || (l.name || "").toLowerCase().includes(filter.toLowerCase());
    const matchStage = stageFilter === "All" || l.stage === stageFilter;
    return matchName && matchStage;
  });

  const pipelineStages = STAGES.map(s => ({
    stage: s,
    count: leads.filter(l => l.stage === s).length,
    value: leads.filter(l => l.stage === s).reduce((sum, l) => sum + (parseFloat((l.value || "$0").replace(/[^0-9.]/g, "")) || 0), 0),
  }));

  return (
    <div style={{ minHeight: "100vh", background: "#080D18", color: "#fff" }}>
      <Navbar />
      {showAddLead && <AddLeadModal onClose={() => setShowAddLead(false)} onSave={handleAddLead} />}

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 20px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontSize: 12, color: "#1E88E5", fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>P2P COMMAND CENTER</div>
            <h1 style={{ fontSize: 32, fontWeight: 900, margin: 0 }}>CRM Pipeline</h1>
            <p style={{ color: "#64748B", marginTop: 6, fontSize: 14 }}>Track every lead from contact to close</p>
          </div>
          <button onClick={() => setShowAddLead(true)}
            style={{ padding: "12px 24px", background: "#1E88E5", border: "none", borderRadius: 10, color: "#fff", fontWeight: 700, cursor: "pointer", fontSize: 15 }}>
            + Add Lead
          </button>
        </div>

        {/* Pipeline summary bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, marginBottom: 32 }}>
          {pipelineStages.map(({ stage, count, value }) => (
            <div key={stage} onClick={() => setStageFilter(stage === stageFilter ? "All" : stage)}
              style={{ background: stageFilter === stage ? "#0F1520" : "#0A0F1E", border: `1px solid ${stageFilter === stage ? stageColor(stage).border : "#1A2D50"}`, borderRadius: 12, padding: "14px 16px", cursor: "pointer", transition: "all .2s" }}>
              <div style={{ fontSize: 11, color: "#64748B", fontWeight: 600, marginBottom: 4 }}>{stage.toUpperCase()}</div>
              <div style={{ fontSize: 22, fontWeight: 900, color: stageColor(stage).border }}>{count}</div>
              {value > 0 && <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 2 }}>${value.toLocaleString()}</div>}
            </div>
          ))}
        </div>

        {/* Search / filter */}
        <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
          <input value={filter} onChange={e => setFilter(e.target.value)} placeholder="Search leads..."
            style={{ flex: 1, minWidth: 200, background: "#0A0F1E", border: "1px solid #1A2D50", borderRadius: 8, padding: "10px 14px", color: "#fff", fontSize: 14 }} />
          <select value={stageFilter} onChange={e => setStageFilter(e.target.value)}
            style={{ background: "#0A0F1E", border: "1px solid #1A2D50", borderRadius: 8, padding: "10px 14px", color: "#fff", fontSize: 14 }}>
            <option value="All">All Stages</option>
            {STAGES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {/* Leads table */}
        {loading ? (
          <div style={{ textAlign: "center", padding: 60, color: "#64748B" }}>Loading pipeline...</div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: 60, background: "#0A0F1E", borderRadius: 16, border: "1px dashed #1A2D50" }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>📋</div>
            <div style={{ color: "#94A3B8", fontSize: 16, marginBottom: 8 }}>No leads yet</div>
            <div style={{ color: "#64748B", fontSize: 14 }}>Click "Add Lead" to start building your pipeline</div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {filtered.map(lead => {
              const id = lead.id || lead._id;
              const sc = stageColor(lead.stage);
              return (
                <div key={id} style={{ background: "#0A0F1E", border: "1px solid #1A2D50", borderLeft: `3px solid ${sc.border}`, borderRadius: 12, padding: "16px 20px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                  <div style={{ flex: 1, minWidth: 160 }}>
                    <div style={{ fontWeight: 700, fontSize: 16 }}>{lead.name}</div>
                    <div style={{ color: "#64748B", fontSize: 13, marginTop: 2 }}>{lead.source || "—"} · {lead.time || "just now"}</div>
                  </div>
                  <div style={{ color: "#00C9B1", fontWeight: 700, minWidth: 80 }}>{lead.value || "—"}</div>
                  <select value={lead.stage || "New Lead"} onChange={e => handleStageChange(id, e.target.value)}
                    style={{ background: "#0F1520", border: `1px solid ${sc.border}`, borderRadius: 6, padding: "6px 10px", color: sc.border, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                    {STAGES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <Link to={`/leads/${id}`} style={{ color: "#1E88E5", fontSize: 13, textDecoration: "none" }}>View →</Link>
                </div>
              );
            })}
          </div>
        )}

        {/* Due Follow-Ups */}
        {followUps.length > 0 && (
          <div style={{ marginTop: 40 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>🔔 Due Follow-Ups</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {followUps.map((f, i) => (
                <div key={f.id || i} style={{ background: "#0A0F1E", border: "1px solid #1A2D50", borderLeft: "3px solid #D4A017", borderRadius: 12, padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <div style={{ fontWeight: 700 }}>{f.name}</div>
                    <div style={{ color: "#94A3B8", fontSize: 13, marginTop: 4 }}>{f.message}</div>
                  </div>
                  <span style={{ background: f.urgency === "high" ? "#7F1D1D" : "#1A2D50", color: f.urgency === "high" ? "#FCA5A5" : "#94A3B8", padding: "4px 10px", borderRadius: 6, fontSize: 12, fontWeight: 700 }}>
                    {f.urgency === "high" ? "URGENT" : "Due"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick links */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginTop: 40 }}>
          {[
            { label: "Customers", icon: "👥", to: "/customers" },
            { label: "Follow-Ups", icon: "📞", to: "/follow-ups" },
            { label: "Pipeline", icon: "📊", to: "/pipeline" },
            { label: "Outreach", icon: "✉️", to: "/outreach" },
          ].map(({ label, icon, to }) => (
            <Link key={to} to={to} style={{ background: "#0A0F1E", border: "1px solid #1A2D50", borderRadius: 12, padding: "20px", textAlign: "center", textDecoration: "none", color: "#fff", display: "block" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{label}</div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
