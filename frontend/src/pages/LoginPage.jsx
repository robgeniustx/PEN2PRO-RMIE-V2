import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    tier: "Free Roadmap",
    color: "#1E88E5",
    icon: "🗺️",
    perks: ["1 AI business blueprint", "Brand name ideas", "LLC setup checklist", "Basic roadmap preview"],
  },
  {
    tier: "Pro — $249/mo",
    color: "#FF8A00",
    icon: "⚡",
    perks: ["Full 90-day execution plan", "Sales scripts & outreach", "Credit readiness", "PDF/email export"],
  },
  {
    tier: "Elite — $499/mo",
    color: "#00C9B1",
    icon: "🚀",
    perks: ["Financial projections", "Funding partner resources", "Done-with-you guidance", "Priority support"],
  },
  {
    tier: "Legacy Founder",
    color: "#D4A017",
    icon: "👑",
    perks: ["Lifetime PEN2PRO access", "12-month 10M framework", "P2P Command Center", "P2P AI Voice Agent"],
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
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <div className="mx-auto flex min-h-[calc(100vh-140px)] max-w-7xl items-stretch gap-0">

        {/* ── LEFT PANEL — Tier Benefits ── */}
        <div className="hidden w-[480px] shrink-0 flex-col justify-between border-r border-[#1A2D50] bg-[#0A0F1E] px-10 py-14 lg:flex">
          {/* Brand mark */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)", boxShadow: "0 0 20px rgba(30,136,229,0.35)" }}>
                <span className="text-lg">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight">
                <span className="text-white">PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>

            <h2 className="mt-8 font-display text-2xl font-black leading-snug text-white">
              Build your business roadmap.<br />
              Save your blueprint.<br />
              <span style={{ color: "#FF8A00" }}>Upgrade when ready.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              PEN2PRO is an AI-powered RMIE platform — Rapid Monetization Intelligence Engine — that helps
              you turn ideas, skills, and lived experience into a real business.
            </p>

            {/* Tier breakdown */}
            <div className="mt-8 space-y-4">
              {TIER_BENEFITS.map((tier) => (
                <div key={tier.tier} className="rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-lg">{tier.icon}</span>
                    <span className="text-sm font-bold" style={{ color: tier.color }}>{tier.tier}</span>
                  </div>
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
                    {tier.perks.map((p) => (
                      <li key={p} className="flex items-start gap-1.5 text-xs text-slate-400">
                        <span style={{ color: tier.color }} className="mt-0.5 shrink-0">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom quote */}
          <div className="mt-8 border-t border-[#1A2D50] pt-6">
            <p className="text-xs italic leading-6 text-slate-500">
              "PEN2PRO didn't give me motivation — it gave me a system."
            </p>
            <p className="mt-1 text-xs font-semibold text-slate-600">— Marcus T., Pressure Washing Owner, Houston TX</p>
          </div>
        </div>

        {/* ── RIGHT PANEL — Auth Form ── */}
        <div className="flex flex-1 items-center justify-center px-5 py-14">
          <div className="w-full max-w-md">

            {/* Mobile brand (visible only on small screens) */}
            <div className="mb-8 text-center lg:hidden">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>
                <span className="text-xl">⚡</span>
              </div>
              <span className="font-display text-2xl font-black">
                <span className="text-white">PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>

            <h1 className="mb-2 font-display text-3xl font-black text-white">
              {tab === "login" ? "Welcome back" : "Create your account"}
            </h1>
            <p className="mb-8 text-sm text-slate-400">
              {tab === "login"
                ? "Sign in to access your PEN2PRO dashboard and roadmap."
                : "Start building your free business roadmap today — no credit card needed."}
            </p>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>

              {/* Tabs */}
              <div className="mb-8 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
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
                      <Link to="/waitlist" className="text-xs text-[#D4A017] hover:text-[#FF8A00] transition-colors">
                        Forgot password?
                      </Link>
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
                    className="btn-gold w-full py-3.5 text-sm font-black disabled:opacity-60"
                  >
                    {loading ? "Signing in…" : "Sign In →"}
                  </button>
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
                    className="btn-gold w-full py-3.5 text-sm font-black disabled:opacity-60"
                  >
                    {loading ? "Creating account…" : "Create Free Account →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}

              {/* Bottom links */}
              <div className="mt-6 border-t border-[#1A2235] pt-5 text-center text-sm text-slate-500">
                Not ready to sign up?{" "}
                <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                  Join the waitlist →
                </Link>
              </div>
            </div>

            {/* Trust bar */}
            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-600">
              <span>🔒 Secure</span>
              <span>✓ Free to start</span>
              <span>✓ No credit card</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
