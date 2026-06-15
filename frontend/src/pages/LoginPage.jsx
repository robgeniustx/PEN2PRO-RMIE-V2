import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    name: "Free Roadmap",
    color: "#94a3b8",
    icon: "🗺️",
    features: ["1 AI business roadmap", "Basic strategy output", "Startup checklist", "LLC guidance"],
  },
  {
    name: "Pro — $249/mo",
    color: "#2d9cff",
    icon: "⚡",
    features: ["Full RMIE blueprint", "7/30/90-day action plan", "Sales scripts & outreach", "PDF/email export"],
  },
  {
    name: "Elite — $499/mo",
    color: "#00C9B1",
    icon: "🚀",
    features: ["Everything in Pro", "Financial projections", "Funding resource center", "Done-with-you strategy"],
  },
  {
    name: "Legacy Founder — $1,899",
    color: "#d4af37",
    icon: "🏆",
    features: ["Lifetime access", "AI Voice Agent", "P2P Command Center", "12-month 10M framework"],
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

      <div className="flex min-h-[calc(100vh-80px)]">

        {/* ── LEFT PANEL: Brand + Tier Benefits ── */}
        <div className="hidden lg:flex lg:w-[480px] xl:w-[520px] shrink-0 flex-col justify-between border-r border-[#1A2D50] bg-[#0A0F1E] px-10 py-12">
          {/* Top: Brand + Headline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 20px rgba(30,136,229,0.35)" }}
              >
                <span className="text-lg">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>

            <h2 className="font-display text-3xl font-black text-white leading-tight mb-3">
              Build your business roadmap.
              <br />
              <span style={{ background: "linear-gradient(90deg, #FF8A00, #1E88E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Save your blueprint. Upgrade when ready.
              </span>
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-10">
              PEN2PRO RMIE gives you more than a business plan. It gives you a complete execution engine — roadmap, strategy, credit readiness, and funding tools in one place.
            </p>

            {/* Tier Cards */}
            <div className="space-y-3">
              {TIER_BENEFITS.map((tier) => (
                <div
                  key={tier.name}
                  className="rounded-xl border bg-[#0F1520] p-4"
                  style={{ borderColor: tier.color + "33" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{tier.icon}</span>
                    <p className="text-sm font-black text-white">{tier.name}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {tier.features.map((f) => (
                      <p key={f} className="flex items-center gap-1.5 text-xs text-slate-400">
                        <span style={{ color: tier.color }}>✓</span>
                        {f}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: Trust signals */}
          <div className="mt-8 border-t border-[#1A2D50] pt-6">
            <p className="text-xs text-slate-600 mb-3">Trusted by builders across the country</p>
            <div className="flex gap-4 text-xs text-slate-500">
              <span>🔐 Secure</span>
              <span>•</span>
              <span>🚫 No spam</span>
              <span>•</span>
              <span>✋ Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL: Auth Form ── */}
        <div className="flex flex-1 items-center justify-center px-5 py-16">
          <div className="w-full max-w-md">

            {/* Mobile-only brand header */}
            <div className="lg:hidden text-center mb-8">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
                <span className="text-xl">⚡</span>
              </div>
              <h1 className="font-display text-2xl font-black text-white">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                {tab === "login" ? "Sign in to your account" : "Create your free account"}
              </p>
            </div>

            {/* Desktop form header */}
            <div className="hidden lg:block mb-8">
              <h1 className="font-display text-2xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today — free"}
              </p>
            </div>

            {/* Tab Toggle */}
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <Link to="/waitlist" className="text-xs text-slate-500 hover:text-[#D4A017] transition-colors">
                        Forgot password?
                      </Link>
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
                    className="btn-gold w-full py-3.5 text-sm font-black rounded-xl disabled:opacity-60"
                  >
                    {loading ? "Signing in..." : "Sign In →"}
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => { setTab("register"); setError(""); }}
                      className="font-semibold text-[#D4A017] hover:opacity-80 transition"
                    >
                      Create one free
                    </button>
                  </p>
                </form>
              )}

              {/* Register Form */}
              {tab === "register" && (
                <form onSubmit={handleRegister} className="space-y-4">
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
                    className="btn-gold w-full py-3.5 text-sm font-black rounded-xl disabled:opacity-60"
                  >
                    {loading ? "Creating account..." : "Create Free Account →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}
            </div>

            {/* Bottom links */}
            <div className="mt-5 text-center text-sm text-slate-500">
              Not ready to sign up?{" "}
              <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                Join the waitlist
              </Link>
              {" · "}
              <Link to="/starter" className="font-semibold text-[#FF8A00]">
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
