import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
const KEY_NAME = "pen2pro_admin_key";

const readKey = () => {
  try { return sessionStorage.getItem(KEY_NAME) || ""; } catch { return ""; }
};

// Verifies the admin key against the API before rendering any admin page.
export default function AdminRoute({ children }) {
  const [key, setKey] = useState(readKey());
  const [input, setInput] = useState("");
  const [status, setStatus] = useState(key ? "checking" : "locked");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!key) return;
    let cancelled = false;
    setStatus("checking");
    fetch(`${API}/api/admin/metrics`, { headers: { "X-Admin-Key": key } })
      .then((res) => {
        if (cancelled) return;
        if (res.ok) { setStatus("ok"); return; }
        try { sessionStorage.removeItem(KEY_NAME); } catch { /* ignore */ }
        setKey("");
        setStatus("locked");
        setError(res.status === 403 ? "That admin key was not accepted." : "Admin API is unavailable. Try again shortly.");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("locked");
        setError("Could not reach the admin API.");
      });
    return () => { cancelled = true; };
  }, [key]);

  const submit = (e) => {
    e.preventDefault();
    setError("");
    try { sessionStorage.setItem(KEY_NAME, input.trim()); } catch { /* ignore */ }
    setKey(input.trim());
  };

  if (status === "ok") return children;

  return (
    <div className="min-h-screen flex items-center justify-center px-5" style={{ background: "#080C14" }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold text-xl font-black text-[#080C14]">P2P</div>
          <h1 className="font-display text-2xl font-bold text-white">PEN2PRO Admin</h1>
          <p className="text-sm text-slate-500 mt-1">
            {status === "checking" ? "Verifying access…" : "Enter your admin access key to continue"}
          </p>
        </div>
        {status === "locked" && (
          <form onSubmit={submit} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
            {error && (
              <div role="alert" className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">{error}</div>
            )}
            <label htmlFor="admin-key" className="sr-only">Admin access key</label>
            <input
              id="admin-key"
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Admin access key"
              autoComplete="off"
              className="mb-4 w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
            />
            <button type="submit" disabled={!input.trim()} className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-50">Access Admin Panel</button>
          </form>
        )}
        <p className="mt-6 text-center text-xs text-slate-600">
          <Link to="/" className="hover:text-slate-400">← Back to PEN2PRO</Link>
        </p>
      </div>
    </div>
  );
}

export const clearAdminKey = () => {
  try { sessionStorage.removeItem(KEY_NAME); } catch { /* ignore */ }
};
