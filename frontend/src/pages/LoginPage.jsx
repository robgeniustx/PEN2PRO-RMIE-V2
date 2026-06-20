import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const PLAN_BENEFITS = [
  {
    label: "Free Roadmap",
    color: "#64748b",
    icon: "🗺️",
    bullets: ["1 starter business blueprint", "Basic roadmap preview", "Free forever"],
  },
  {
    label: "Pro — $249/mo",
    color: "#2d9cff",
    icon: "⚡",
    bullets: ["Full RMIE blueprint", "7 / 30 / 90-day plan", "Credit & funding checklist", "PDF export"],
  },
  {
    label: "Elite — $499/mo",
    color: "#d4af37",
    icon: "🧠",
    bullets: ["Everything in Pro", "Financial projections", "Legal foundation", "Automation & CRM"],
  },
  {
    label: "Founders — $1,899 lifetime",
    color: "#FF8A00",
    icon: "🏆",
    bullets: ["Lifetime platform access", "All current + future features", "200 spots only", "First-access priority"],
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

      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">

          {/* ── LEFT: Plan Benefits Panel ── */}
          <div className="lg:w-[420px] lg:shrink-0">
            <div className="mb-6">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-3 py-1 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
                ⚡ PEN2PRO RMIE
              </div>
              <h2 className="font-display text-2xl font-black text-white leading-tight">
                Build your business roadmap.
                <br />
                <span style={{ color: "#FF8A00" }}>Save your blueprint.</span>
                <br />
                Upgrade when ready.
              </h2>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Start free. Access the Rapid Monetization Intelligence Engine and turn your idea into a real business plan — no fluff, no generic advice.
              </p>
            </div>

            <div className="space-y-3">
              {PLAN_BENEFITS.map((plan) => (
                <div
                  key={plan.label}
                  className="rounded-xl border bg-[#0F1520] p-4"
                  style={{ borderColor: `${plan.color}30` }}
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-lg">{plan.icon}</span>
                    <span className="text-sm font-bold" style={{ color: plan.color }}>{plan.label}</span>
                  </div>
                  <ul className="space-y-1">
                    {plan.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs text-slate-400">
                        <span style={{ color: plan.color }}>✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-slate-600">
              No credit card required to start.{" "}
              <Link to="/pricing" className="text-[#FF8A00] hover:underline">View all plans →</Link>
            </p>
          </div>

          {/* ── RIGHT: Auth Form ── */}
          <div className="flex-1 lg:max-w-md">
            {/* Tabs */}
            <div className="mb-6 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
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

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
              <div className="mb-6 text-center">
                <h1 className="font-display text-2xl font-bold text-white">
                  {tab === "login" ? "Welcome back" : "Create your account"}
                </h1>
                <p className="mt-1 text-sm text-slate-400">
                  {tab === "login"
                    ? "Sign in to your PEN2PRO dashboard"
                    : "Start building your business roadmap today — free"}
                </p>
              </div>

              {/* Error */}
              {error && (
                <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <Link to="/waitlist" className="text-xs text-slate-500 hover:text-[#FF8A00] transition-colors">
                        Forgot password?
                      </Link>
                    </div>
                    <input
                      type="password"
                      required
                      value={loginForm.password}
                      onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-3.5 text-sm font-bold disabled:opacity-60"
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                  <p className="text-center text-sm text-slate-500">
                    Don't have an account?{" "}
                    <button type="button" onClick={() => setTab("register")} className="font-semibold text-[#FF8A00]">
                      Create one free
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
                      placeholder="Robert Green"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-3.5 text-sm font-bold disabled:opacity-60"
                  >
                    {loading ? "Creating account..." : "Create Account — Free"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <Link to="/terms" className="text-[#FF8A00] hover:underline">Terms</Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-[#FF8A00] hover:underline">Privacy Policy</Link>.
                  </p>
                  <p className="text-center text-sm text-slate-500">
                    Already have an account?{" "}
                    <button type="button" onClick={() => setTab("login")} className="font-semibold text-[#FF8A00]">
                      Sign in
                    </button>
                  </p>
                </form>
              )}
            </div>

            {/* Waitlist fallback */}
            <div className="mt-5 text-center text-sm text-slate-500">
              Not ready to sign up?{" "}
              <Link to="/waitlist" className="font-semibold text-[#FF8A00]">
                Join the waitlist →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
