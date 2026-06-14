import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_HIGHLIGHTS = [
  {
    name: "Free Forever",
    color: "#1E88E5",
    icon: "🗺️",
    desc: "Start your free business roadmap — no credit card, no commitment.",
  },
  {
    name: "Pro — $249/mo",
    color: "#D4A017",
    icon: "⚡",
    desc: "Full roadmap, AI refinement, sales scripts, credit checklist, PDF export.",
  },
  {
    name: "Elite — $499/mo",
    color: "#00C9B1",
    icon: "🏆",
    desc: "Financial projections, funding resources, done-with-you execution support.",
  },
  {
    name: "Founders Lifetime",
    color: "#FF8A00",
    icon: "♾️",
    desc: "One payment. Lifetime access. Every feature forever. Only 200 spots.",
  },
];

export default function LoginPage() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const isSignup  = location.pathname === "/signup";

  const [tab,          setTab]          = useState(isSignup ? "register" : "login");
  const [loading,      setLoading]      = useState(false);
  const [error,        setError]        = useState("");
  const [loginForm,    setLoginForm]    = useState({ email: "", password: "" });
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
      const res  = await fetch(`${API}/api/auth/login`, {
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
    if (registerForm.password.length < 8)                { setError("Password must be at least 8 characters"); return; }
    setLoading(true);
    try {
      const res  = await fetch(`${API}/api/auth/register`, {
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

      {/* ambient bg */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.10) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <div className="flex min-h-[calc(100vh-80px)] items-stretch">
        {/* ── LEFT PANEL — tier explainer ── */}
        <div className="hidden lg:flex flex-col justify-center px-12 py-16 w-[45%] border-r border-[#1A2235] bg-[#0A0F1A]">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2.5 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>
                <span className="text-lg">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight">
                <span className="text-white">PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>
            <h2 className="font-display text-3xl font-black text-white leading-tight mb-3">
              Build your business roadmap.
              <br />
              <span style={{ color: "#D4A017" }}>Save your blueprint.</span>
              <br />
              <span className="text-slate-400 text-2xl font-bold">Upgrade when ready.</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              PEN2PRO gives you a real business plan — not motivation. Start free and upgrade to unlock the full execution engine.
            </p>
          </div>

          <div className="space-y-3">
            {TIER_HIGHLIGHTS.map((tier) => (
              <div key={tier.name} className="flex items-start gap-3.5 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg"
                  style={{ background: `${tier.color}15`, border: `1px solid ${tier.color}30` }}>
                  {tier.icon}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: tier.color }}>{tier.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{tier.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4 text-xs text-slate-600 text-center">
            PEN2PRO is RMIE — Rapid Monetization Intelligence Engine
          </div>
        </div>

        {/* ── RIGHT PANEL — auth form ── */}
        <div className="flex flex-1 items-center justify-center px-5 py-16">
          <div className="w-full max-w-md">
            {/* Mobile logo */}
            <div className="lg:hidden text-center mb-8">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>
                <span className="text-lg font-black text-white">P2</span>
              </div>
              <h1 className="font-display text-2xl font-bold text-white mb-1">
                {tab === "login" ? "Welcome back" : "Build your roadmap"}
              </h1>
              <p className="text-sm text-slate-500">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Create a free account — no credit card required"}
              </p>
            </div>

            {/* Desktop heading */}
            <div className="hidden lg:block mb-8">
              <h1 className="font-display text-3xl font-bold text-white mb-1">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="text-sm text-slate-500">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Free account · No credit card required"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
              {/* Tabs */}
              <div className="mb-7 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
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
                      type="email" required
                      value={loginForm.email}
                      onChange={(e) => setLoginForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-yellow-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <Link to="/waitlist" className="text-xs text-slate-500 hover:text-yellow-400 transition">
                        Forgot password?
                      </Link>
                    </div>
                    <input
                      type="password" required
                      value={loginForm.password}
                      onChange={(e) => setLoginForm((f) => ({ ...f, password: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-yellow-500 focus:outline-none"
                    />
                  </div>
                  <button type="submit" disabled={loading} className="btn-gold w-full py-3 text-sm font-bold">
                    {loading ? "Signing in…" : "Sign In"}
                  </button>
                </form>
              )}

              {/* Register Form */}
              {tab === "register" && (
                <form onSubmit={handleRegister} className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Full name</label>
                    <input
                      type="text" required
                      value={registerForm.name}
                      onChange={(e) => setRegisterForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Robert Green"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-yellow-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Email address</label>
                    <input
                      type="email" required
                      value={registerForm.email}
                      onChange={(e) => setRegisterForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-yellow-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Password</label>
                    <input
                      type="password" required
                      value={registerForm.password}
                      onChange={(e) => setRegisterForm((f) => ({ ...f, password: e.target.value }))}
                      placeholder="Min 8 characters"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-yellow-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Confirm password</label>
                    <input
                      type="password" required
                      value={registerForm.confirm}
                      onChange={(e) => setRegisterForm((f) => ({ ...f, confirm: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-yellow-500 focus:outline-none"
                    />
                  </div>
                  <button type="submit" disabled={loading} className="btn-gold w-full py-3 text-sm font-bold">
                    {loading ? "Creating account…" : "Create Free Account"}
                  </button>
                  <p className="text-center text-xs text-slate-600">
                    By creating an account you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}

              <div className="mt-6 text-center text-sm text-slate-500">
                Not ready yet?{" "}
                <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-slate-600">
              Want to explore first?{" "}
              <Link to="/starter" className="text-slate-400 font-semibold hover:text-yellow-400 transition">
                Try a free roadmap →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
