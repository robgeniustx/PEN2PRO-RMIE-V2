import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    tier: "Free Roadmap",
    price: "$0",
    accent: "#64748b",
    features: [
      "1 AI Business Roadmap",
      "Brand name suggestions",
      "LLC setup checklist",
      "Basic strategy preview",
    ],
  },
  {
    tier: "Pro",
    price: "$249/mo",
    accent: "#2d9cff",
    features: [
      "Full 90-day execution plan",
      "Sales scripts & outreach",
      "Credit readiness tools",
      "PDF export + AI refinement",
    ],
  },
  {
    tier: "Elite",
    price: "$499/mo",
    accent: "#00C9B1",
    features: [
      "Everything in Pro",
      "Financial projections",
      "Done-with-you strategy",
      "Vendor & funding center",
    ],
  },
  {
    tier: "Legacy Founder",
    price: "$1,899 lifetime",
    accent: "#D4A017",
    features: [
      "Lifetime platform access",
      "P2P Command Center",
      "AI Voice Agent",
      "12-month 10M framework",
    ],
  },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  const [tab, setTab] = useState(isSignup ? "register" : "login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "", confirm: "" });

  useEffect(() => {
    const token = localStorage.getItem("pen2pro_token");
    if (token) navigate("/dashboard");
  }, [navigate]);

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginForm.email, password: loginForm.password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Login failed");
      localStorage.setItem("pen2pro_token", data.access_token);
      localStorage.setItem("pen2pro_user", JSON.stringify({ name: data.name, tier: data.tier, email: loginForm.email }));
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister(e) {
    e.preventDefault();
    setError("");
    if (registerForm.password !== registerForm.confirm) {
      setError("Passwords do not match");
      return;
    }
    if (registerForm.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: registerForm.name, email: registerForm.email, password: registerForm.password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Registration failed");
      localStorage.setItem("pen2pro_token", data.access_token);
      localStorage.setItem("pen2pro_user", JSON.stringify({ name: data.name, tier: data.tier, email: registerForm.email }));
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="flex min-h-[calc(100vh-64px)]">

        {/* ── LEFT: Tier benefits panel (desktop only) ── */}
        <aside
          className="hidden lg:flex flex-col justify-between px-10 py-14 shrink-0 border-r border-[#1A2235]"
          style={{ width: "420px", background: "#0A0F1E" }}
        >
          <div>
            {/* Brand */}
            <div className="flex items-center gap-2.5 mb-8">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 16px rgba(30,136,229,0.3)" }}
              >
                <span className="text-lg leading-none select-none">⚡</span>
              </div>
              <span className="font-display text-xl font-black tracking-tight leading-none">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>

            <h2 className="text-2xl font-black text-white mb-2 leading-snug">
              Build your business roadmap.<br />
              <span style={{ color: "#D4A017" }}>Save your blueprint.</span>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              Upgrade when ready. Start free — no credit card required.
            </p>

            {/* Tier cards */}
            <div className="space-y-3">
              {TIER_BENEFITS.map((t) => (
                <div
                  key={t.tier}
                  className="rounded-xl border p-4 transition-colors"
                  style={{ borderColor: `${t.accent}30`, background: `${t.accent}08` }}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-sm font-black text-white">{t.tier}</span>
                    <span className="text-xs font-bold" style={{ color: t.accent }}>{t.price}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="mt-0.5 font-bold shrink-0" style={{ color: t.accent }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-xs text-slate-600">
            PEN2PRO RMIE — Rapid Monetization Intelligence Engine. Built for entrepreneurs, veterans, returning citizens, and working-class builders.
          </p>
        </aside>

        {/* ── RIGHT: Auth form ── */}
        <div className="flex flex-1 flex-col items-center justify-center px-4 py-16">
          <div className="w-full max-w-md">

            {/* Header */}
            <div className="text-center mb-8">
              <div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl lg:hidden"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}
              >
                <span className="text-xl select-none">⚡</span>
              </div>
              <h1 className="font-display text-3xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today — free"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>

              {/* Tab switcher */}
              <div
                className="mb-8 flex rounded-xl border border-[#1A2235] p-1"
                style={{ background: "#080C14" }}
              >
                <button
                  onClick={() => { setTab("login"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "login" ? "gradient-gold text-[#080C14]" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setTab("register"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "register" ? "gradient-gold text-[#080C14]" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Create Account
                </button>
              </div>

              {/* Error banner */}
              {error && (
                <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              {/* ── LOGIN FORM ── */}
              {tab === "login" && (
                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Email address</label>
                    <input
                      type="email"
                      required
                      value={loginForm.email}
                      onChange={(e) => setLoginForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="block text-sm font-medium text-slate-300">Password</label>
                      <Link
                        to="/waitlist"
                        className="text-xs text-slate-500 transition-colors hover:text-[#D4A017]"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <input
                      type="password"
                      required
                      value={loginForm.password}
                      onChange={(e) => setLoginForm((f) => ({ ...f, password: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-60"
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    No account yet?{" "}
                    <button
                      type="button"
                      onClick={() => { setTab("register"); setError(""); }}
                      className="font-semibold transition-opacity hover:opacity-80"
                      style={{ color: "#D4A017" }}
                    >
                      Create one free
                    </button>
                  </p>
                </form>
              )}

              {/* ── REGISTER FORM ── */}
              {tab === "register" && (
                <form onSubmit={handleRegister} className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Full name</label>
                    <input
                      type="text"
                      required
                      value={registerForm.name}
                      onChange={(e) => setRegisterForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Robert Green"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Email address</label>
                    <input
                      type="email"
                      required
                      value={registerForm.email}
                      onChange={(e) => setRegisterForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Password</label>
                    <input
                      type="password"
                      required
                      value={registerForm.password}
                      onChange={(e) => setRegisterForm((f) => ({ ...f, password: e.target.value }))}
                      placeholder="Min 8 characters"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Confirm password</label>
                    <input
                      type="password"
                      required
                      value={registerForm.confirm}
                      onChange={(e) => setRegisterForm((f) => ({ ...f, confirm: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-60"
                  >
                    {loading ? "Creating account..." : "Create Account — Free"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <Link to="/terms" className="underline hover:text-slate-300">Terms</Link>
                    {" "}&amp;{" "}
                    <Link to="/privacy" className="underline hover:text-slate-300">Privacy Policy</Link>.
                  </p>
                </form>
              )}

              {/* Waitlist link */}
              <div className="mt-6 border-t border-[#1A2235] pt-5 text-center text-sm text-slate-500">
                Not ready to sign up yet?{" "}
                <Link to="/waitlist" className="font-semibold transition-opacity hover:opacity-80" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Mobile tier summary */}
            <div
              className="mt-5 rounded-xl border border-[#1A2235] p-4 lg:hidden"
              style={{ background: "#0F1520" }}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">
                What you get with PEN2PRO
              </p>
              <div className="grid grid-cols-2 gap-2">
                {["Free Roadmap", "Pro Strategy Tools", "Elite Execution", "Founders Lifetime"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="shrink-0 font-bold text-teal-400">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
