import { useState } from "react";

export default function AdminKeyGate({ children }) {
  const [key, setKey] = useState(sessionStorage.getItem("pen2pro_admin_key") || "");
  const [keyInput, setKeyInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    sessionStorage.setItem("pen2pro_admin_key", keyInput);
    setKey(keyInput);
  }

  if (!key) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 p-4">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold text-xl font-black text-[#080C14]">P2P</div>
            <h1 className="font-display text-2xl font-bold text-white">Admin Access</h1>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
            <input
              type="password"
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
              placeholder="Admin access key"
              className="mb-4 w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
            />
            <button type="submit" className="btn-gold w-full py-3 text-sm font-bold">
              Access Admin Panel
            </button>
          </form>
        </div>
      </div>
    );
  }

  return children;
}
