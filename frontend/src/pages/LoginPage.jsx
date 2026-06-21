import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    icon: "🗺️",
    label: "Free Roadmap",
    desc: "7-day, 30-day, and 90-day business plan built around your specific idea.",
    color: "#FF8A00",
  },
  {
    icon: "⚡",
    label: "Pro Strategy Tools",
    desc: "Full RMIE blueprint, outreach scripts, branding support, and PDF export.",
    color: "#2d9cff",
  },
  {
    icon: "🧠",
    label: "Elite Execution",
    desc: "Financial projections, legal foundation, vendor & funding resource center.",
    color: "#d4af37",
  },
  {
    icon: "♾️",
    label: "Legacy Founders",
    desc: "Lifetime access, every feature, every future update — one payment forever.",
    color: "#d4af37",
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

  const inputCls = "w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none";

  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <div className="mx-auto flex max-w-6xl min-h-[calc(100vh-80px)] items-center gap-0 px-4 py-16 md:py-20">

        {/* ── Left: Benefits Panel ── */}
        <div className="hidden md:flex flex-1 flex-col pr-12 py-8">
          <div className="mb-3 flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
              <span className="text-lg leading-none">⚡</span>
            </div>
            <span className="font-display text-2xl font-black tracking-tight">
              <span className="text-white">PEN</span>
              <span style={{ color: "#FF8A00" }}>2</span>
              <span style={{ color: "#1E88E5" }}>PRO</span>
            </span>
          </div>

          <h2 className="mt-6 font-display text-3xl font-black leading-tight text-white lg:text-4xl">
            Build your business roadmap.<br />
            <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Save your blueprint.
            </span><br />
            Upgrade when ready.
          </h2>

          <p className="mt-4 text-slate-400 leading-relaxed">
            One account unlocks every tier. Start free, upgrade as you grow. Your roadmap saves automatically.
          </p>

          <div className="mt-10 space-y-4">
            {TIER_BENEFITS.map((tier) => (
              <div key={tier.label} className="flex items-start gap-4 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-4">
                <div className="shrink-0 text-2xl">{tier.icon}</div>
                <div>
                  <p className="text-sm font-bold" style={{ color: tier.color }}>{tier.label}</p>
                  <p className="mt-0.5 text-xs text-slate-500 leading-5">{tier.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-slate-600">
            No subscription required to start.{" "}
            <Link to="/starter" className="text-[#FF8A00] hover:underline">Try the free roadmap →</Link>
          </p>
        </div>

        {/* ── Right: Auth Card ── */}
        <div className="w-full max-w-md mx-auto md:mx-0 md:w-[420px] shrink-0">
          {/* Mobile logo */}
          <div className="flex items-center justify-center gap-2.5 mb-8 md:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
              <span className="text-base leading-none">⚡</span>
            </div>
            <span className="font-display text-xl font-black tracking-tight">
              <span className="text-white">PEN</span>
              <span style={{ color: "#FF8A00" }}>2</span>
              <span style={{ color: "#1E88E5" }}>PRO</span>
            </span>
          </div>

          <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
            {/* Tabs */}
            <div className="mb-6 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
              <button
                onClick={() => { setTab("login"); setError(""); }}
                className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${tab === "login" ? "gradient-gold text-[#080C14]" : "text-slate-400 hover:text-white"}`}
              >
                Sign In
              </button>
              <button
                onClick={() => { setTab("register"); setError(""); }}
                className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${tab === "register" ? "gradient-gold text-[#080C14]" : "text-slate-400 hover:text-white"}`}
              >
                Create Account
              </button>
            </div>

            <h1 className="mb-1 font-display text-xl font-black text-white">
              {tab === "login" ? "Welcome back" : "Start building — it's free"}
            </h1>
            <p className="mb-6 text-sm text-slate-500">
              {tab === "login"
                ? "Sign in to access your PEN2PRO dashboard and roadmaps."
                : "Create your account and get your first free business roadmap in minutes."}
            </p>

            {error && (
              <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            {/* Login Form */}
            {tab === "login" && (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Email address</label>
                  <input
                    type="email" required
                    value={loginForm.email}
                    onChange={e => setLoginForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="you@example.com"
                    className={inputCls}
                  />
                </div>
                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wide text-slate-400">Password</label>
                    <button
                      type="button"
                      onClick={() => alert("Password reset: contact support@pen2pro.com")}
                      className="text-xs text-slate-600 hover:text-slate-400 transition"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <input
                    type="password" required
                    value={loginForm.password}
                    onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
                    placeholder="••••••••"
                    className={inputCls}
                  />
                </div>
                <button type="submit" disabled={loading} className="btn-gold w-full py-3 text-sm font-bold">
                  {loading ? "Signing in..." : "Sign In →"}
                </button>
              </form>
            )}

            {/* Register Form */}
            {tab === "register" && (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Full name</label>
                  <input
                    type="text" required
                    value={registerForm.name}
                    onChange={e => setRegisterForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Robert Green"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Email address</label>
                  <input
                    type="email" required
                    value={registerForm.email}
                    onChange={e => setRegisterForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="you@example.com"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Password</label>
                  <input
                    type="password" required
                    value={registerForm.password}
                    onChange={e => setRegisterForm(f => ({ ...f, password: e.target.value }))}
                    placeholder="Min 8 characters"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Confirm password</label>
                  <input
                    type="password" required
                    value={registerForm.confirm}
                    onChange={e => setRegisterForm(f => ({ ...f, confirm: e.target.value }))}
                    placeholder="••••••••"
                    className={inputCls}
                  />
                </div>
                <button type="submit" disabled={loading} className="btn-gold w-full py-3 text-sm font-bold">
                  {loading ? "Creating account..." : "Create Free Account →"}
                </button>
                <p className="text-center text-xs text-slate-600">
                  By creating an account you agree to our{" "}
                  <Link to="/terms" className="hover:text-slate-400 transition">Terms</Link>
                  {" "}and{" "}
                  <Link to="/privacy" className="hover:text-slate-400 transition">Privacy Policy</Link>.
                </p>
              </form>
            )}

            <div className="mt-5 border-t border-[#1A2235] pt-5 text-center text-sm text-slate-500">
              Not ready to sign up?{" "}
              <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                Join the waitlist
              </Link>
              {" "}or{" "}
              <Link to="/starter" className="font-semibold" style={{ color: "#FF8A00" }}>
                try the free roadmap
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
