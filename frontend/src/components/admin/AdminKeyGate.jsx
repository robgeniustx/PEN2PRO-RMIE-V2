import { useState } from "react";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export default function AdminKeyGate({ children }) {
  const [key, setKey] = useState(sessionStorage.getItem("pen2pro_admin_key") || "");
  const [keyInput, setKeyInput] = useState("");
  const [keyError, setKeyError] = useState("");
  const [checking, setChecking] = useState(false);

  async function handleKeySubmit(e) {
    e.preventDefault();
    setKeyError("");
    setChecking(true);
    try {
      const res = await fetch(`${API}/api/admin/metrics`, {
        headers: { "x-admin-key": keyInput },
      });
      if (res.status === 403) {
        setKeyError("Invalid admin key");
        return;
      }
      if (!res.ok) throw new Error("Unable to verify admin key");
      sessionStorage.setItem("pen2pro_admin_key", keyInput);
      setKey(keyInput);
    } catch (err) {
      setKeyError(err.message);
    } finally {
      setChecking(false);
    }
  }

  if (!key) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#080C14" }}>
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold text-xl font-black text-[#080C14]">
              P2P
            </div>
            <h1 className="font-display text-2xl font-bold text-white">Admin Access</h1>
            <p className="text-sm text-slate-500 mt-1">Enter your admin key to continue</p>
          </div>
          <form onSubmit={handleKeySubmit} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
            {keyError && (
              <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {keyError}
              </div>
            )}
            <input
              type="password"
              value={keyInput}
              onChange={e => setKeyInput(e.target.value)}
              placeholder="Admin access key"
              className="mb-4 w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
            />
            <button type="submit" disabled={checking} className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-60">
              {checking ? "Verifying..." : "Access Admin Panel"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return children;
}
