import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_CARDS = [
  {
    name: "Free Roadmap",
    price: "$0",
    color: "#1E88E5",
    desc: "AI-generated business blueprint — 7-day launch plan, startup checklist, sales scripts, and more.",
  },
  {
    name: "Pro — $249/mo",
    price: "$249",
    color: "#D4A017",
    desc: "Full 90-day execution plan, branding support, credit & funding checklist, PDF export, outreach strategy.",
  },
  {
    name: "Elite — $499/mo",
    price: "$499",
    color: "#00C9B1",
    desc: "Everything in Pro + financial projections, legal checklist, vendor & funding resource center, done-with-you strategy.",
  },
  {
    name: "Founders Lifetime",
    price: "$1,899",
    color: "#d4af37",
    desc: "One payment. Lifetime access. Full platform + Command Center + Voice Agent + Website Builder + 12-month framework.",
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
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <div className="mx-auto max-w-6xl px-5 py-16 grid gap-12 lg:grid-cols-2 lg:items-center">

        {/* ── Left: Side Panel ── */}
        <div className="hidden lg:block">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
            ⚡ PEN2PRO RMIE Platform
          </div>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight text-white">
            Build your business roadmap.
            <br />
            <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Save your blueprint.
            </span>
            <br />
            Upgrade when ready.
          </h2>
          <p className="mt-4 text-slate-400 leading-7">
            Every account starts free. Your roadmap is generated in minutes. Pro, Elite, and Founders tiers unlock advanced strategy and execution tools when you're ready to go deeper.
          </p>

          <div className="mt-8 space-y-3">
            {TIER_CARDS.map((t) => (
              <div key={t.name} className="flex gap-4 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-4">
                <div
                  className="mt-0.5 h-2 w-2 shrink-0 rounded-full"
                  style={{ background: t.color, boxShadow: `0 0 8px ${t.color}80`, marginTop: "6px" }}
                />
                <div>
                  <p className="text-sm font-bold" style={{ color: t.color }}>{t.name}</p>
                  <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-600">
            No credit card required to start.{" "}
            <Link to="/pricing" className="text-[#D4A017] hover:underline">View full pricing →</Link>
          </p>
        </div>

        {/* ── Right: Auth Card ── */}
        <div className="w-full">
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>
              <span className="text-xl font-black text-white">⚡</span>
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

          <div className="rounded-2xl border border-[#1A2235] p-8 bg-[#0F1520]">
            {/* Tabs */}
            <div className="mb-8 flex rounded-xl border border-[#1A2235] p-1 bg-[#080C14]">
              <button
                onClick={() => { setTab("login"); setError(""); }}
                className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                  tab === "login" ? "btn-gold text-[#080C14]" : "text-slate-400 hover:text-white"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => { setTab("register"); setError(""); }}
                className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                  tab === "register" ? "btn-gold text-[#080C14]" : "text-slate-400 hover:text-white"
                }`}
              >
                Create Account
              </button>
            </div>

            {error && (
              <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            {tab === "login" && (
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">Email address</label>
                  <input
                    type="email"
                    required
                    value={loginForm.email}
                    onChange={e => setLoginForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                  />
                </div>
                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-300">Password</label>
                    <Link to="/waitlist" className="text-xs text-slate-500 hover:text-[#D4A017] transition">Forgot password?</Link>
                  </div>
                  <input
                    type="password"
                    required
                    value={loginForm.password}
                    onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
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
                <p className="text-center text-sm text-slate-500">
                  Don't have an account?{" "}
                  <button type="button" onClick={() => { setTab("register"); setError(""); }} className="font-semibold text-[#D4A017] hover:underline">
                    Create one free →
                  </button>
                </p>
              </form>
            )}

            {tab === "register" && (
              <form onSubmit={handleRegister} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">Full name</label>
                  <input
                    type="text"
                    required
                    value={registerForm.name}
                    onChange={e => setRegisterForm(f => ({ ...f, name: e.target.value }))}
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
                    onChange={e => setRegisterForm(f => ({ ...f, email: e.target.value }))}
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
                    onChange={e => setRegisterForm(f => ({ ...f, password: e.target.value }))}
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
                    onChange={e => setRegisterForm(f => ({ ...f, confirm: e.target.value }))}
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
                  <Link to="/terms" className="hover:text-slate-300 underline">Terms</Link>{" "}and{" "}
                  <Link to="/privacy" className="hover:text-slate-300 underline">Privacy Policy</Link>.
                </p>
              </form>
            )}

            <div className="mt-6 text-center text-sm text-slate-500">
              Not ready to sign up yet?{" "}
              <Link to="/waitlist" className="font-semibold text-[#D4A017] hover:underline">
                Join the waitlist instead →
              </Link>
            </div>
          </div>

          {/* Mobile tier hints */}
          <div className="mt-6 grid grid-cols-2 gap-3 lg:hidden">
            {TIER_CARDS.map((t) => (
              <div key={t.name} className="rounded-xl border border-[#1A2235] bg-[#0F1520] p-3">
                <p className="text-xs font-bold" style={{ color: t.color }}>{t.name}</p>
                <p className="mt-1 text-[11px] text-slate-600 leading-relaxed line-clamp-2">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
