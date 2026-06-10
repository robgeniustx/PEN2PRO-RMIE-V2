import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_HIGHLIGHTS = [
  {
    tier: "Free Roadmap",
    color: "#1E88E5",
    icon: "🗺️",
    desc: "Get a starter business blueprint — free, no card required.",
  },
  {
    tier: "Pro — $249/mo",
    color: "#2d9cff",
    icon: "⚡",
    desc: "Full roadmap, branding, export, credit readiness, outreach scripts, and Command Center.",
  },
  {
    tier: "Elite — $499/mo",
    color: "#a78bfa",
    icon: "🧠",
    desc: "Advanced strategy, financial projections, company formation, funding resources, and priority support.",
  },
  {
    tier: "Founders Lifetime — $1,899",
    color: "#d4af37",
    icon: "🏅",
    desc: "One-time payment. Every tool, forever. Only 200 spots available.",
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
    if (registerForm.password !== registerForm.confirm) { setError("Passwords do not match"); return; }
    if (registerForm.password.length < 8) { setError("Password must be at least 8 characters"); return; }
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
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <div className="mx-auto flex min-h-[calc(100vh-160px)] max-w-6xl items-center gap-12 px-5 py-16 lg:grid lg:grid-cols-2">

        {/* ── LEFT PANEL — value proposition ── */}
        <div className="hidden lg:block">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">PEN2PRO RMIE</div>
          <h2 className="mb-3 font-display text-3xl font-black leading-tight">
            Build your business roadmap.
            <br />
            <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Save your blueprint.
            </span>
            <br />
            Upgrade when ready.
          </h2>
          <p className="mb-8 text-slate-400 leading-relaxed">
            PEN2PRO turns your idea, skill, or business concept into a real roadmap with monetization strategy, launch steps, credit readiness, and execution tools — all in one place.
          </p>

          <div className="space-y-3">
            {TIER_HIGHLIGHTS.map((t) => (
              <div key={t.tier} className="flex items-start gap-4 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
                  style={{ background: `${t.color}20`, border: `1px solid ${t.color}40` }}
                >
                  {t.icon}
                </div>
                <div>
                  <p className="font-bold text-white text-sm" style={{ color: t.color }}>{t.tier}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-600">
            Not ready to sign up?{" "}
            <Link to="/starter" className="text-slate-400 hover:text-white transition-colors">
              Try the free roadmap — no account needed.
            </Link>
          </p>
        </div>

        {/* ── RIGHT PANEL — auth form ── */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          {/* Mobile brand header */}
          <div className="mb-6 text-center lg:hidden">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
                <span className="text-lg">⚡</span>
              </div>
              <span className="font-display text-xl font-black">
                <span className="text-white">PEN</span>
                <span className="text-[#FF8A00]">2</span>
                <span className="text-[#1E88E5]">PRO</span>
              </span>
            </Link>
            <p className="mt-2 text-sm text-slate-400">Build your roadmap. Save your blueprint.</p>
          </div>

          <div className="rounded-2xl border border-[#1A2235] p-8 bg-[#0F1520]">
            {/* Tabs */}
            <div className="mb-8 flex rounded-xl border border-[#1A2235] p-1 bg-[#080C14]">
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

            {/* Error */}
            {error && (
              <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            {/* Login Form */}
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
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-300">Password</label>
                    <button type="button" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                      Forgot password?
                    </button>
                  </div>
                  <input
                    type="password"
                    required
                    value={loginForm.password}
                    onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-60"
                >
                  {loading ? "Signing in…" : "Sign In"}
                </button>
                <p className="text-center text-sm text-slate-500">
                  No account yet?{" "}
                  <button type="button" onClick={() => setTab("register")} className="font-semibold text-[#D4A017] hover:text-[#f7d675] transition-colors">
                    Create one free →
                  </button>
                </p>
              </form>
            )}

            {/* Register Form */}
            {tab === "register" && (
              <form onSubmit={handleRegister} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">Full name</label>
                  <input
                    type="text"
                    required
                    value={registerForm.name}
                    onChange={e => setRegisterForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
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
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
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
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
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
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-60"
                >
                  {loading ? "Creating account…" : "Create Account — Free"}
                </button>
                <p className="text-center text-xs text-slate-500">
                  By creating an account you agree to our Terms of Service and Privacy Policy.
                </p>
                <p className="text-center text-sm text-slate-500">
                  Already have an account?{" "}
                  <button type="button" onClick={() => setTab("login")} className="font-semibold text-[#D4A017] hover:text-[#f7d675] transition-colors">
                    Sign in →
                  </button>
                </p>
              </form>
            )}

            {/* Bottom links */}
            <div className="mt-6 border-t border-[#1A2235] pt-5 text-center text-sm text-slate-500">
              Not ready to sign up?{" "}
              <Link to="/waitlist" className="font-semibold text-[#D4A017] hover:text-[#f7d675] transition-colors">
                Join the waitlist
              </Link>
              {" · "}
              <Link to="/starter" className="font-semibold text-slate-400 hover:text-white transition-colors">
                Try free roadmap
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
