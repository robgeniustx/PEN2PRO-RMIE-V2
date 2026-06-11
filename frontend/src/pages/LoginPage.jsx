import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_HIGHLIGHTS = [
  {
    icon: "🆓",
    label: "Free Roadmap",
    color: "#1E88E5",
    points: ["Business idea validation", "Brand name ideas", "7-day action plan preview", "Startup checklist"],
  },
  {
    icon: "⚡",
    label: "Pro — $29/mo",
    color: "#FF8A00",
    points: ["Full 90-day roadmap", "Progress tracking", "Branding support", "AI refinement + export"],
  },
  {
    icon: "👑",
    label: "Elite — $79/mo",
    color: "#D4A017",
    points: ["Everything in Pro", "Financial projections", "Legal foundation guide", "Funding readiness center"],
  },
  {
    icon: "🏆",
    label: "Legacy Founder",
    color: "#7C3AED",
    points: ["Lifetime access", "All tiers included", "Founder recognition", "Direct founder access"],
  },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  const [tab, setTab]       = useState(isSignup ? "register" : "login");
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState("");

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
    <div className="min-h-screen bg-[#080C14] text-white overflow-hidden">
      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute bottom-0 -right-40 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A2235]">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl"
            style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 14px rgba(30,136,229,0.35)" }}>
            <span className="text-sm select-none">⚡</span>
          </div>
          <span className="font-display text-lg font-black tracking-tight">
            <span className="text-white">PEN</span>
            <span style={{ color: "#FF8A00" }}>2</span>
            <span style={{ color: "#1E88E5" }}>PRO</span>
          </span>
        </Link>
        <Link to="/" className="text-sm text-slate-500 hover:text-white transition-colors">← Back to Home</Link>
      </div>

      <div className="flex min-h-[calc(100vh-64px)]">

        {/* Left panel — form */}
        <div className="flex flex-1 items-center justify-center px-6 py-16">
          <div className="w-full max-w-md">

            {/* Header */}
            <div className="mb-8">
              <h1 className="font-display text-3xl font-black text-white mb-2">
                {tab === "login" ? "Welcome back." : "Create your account."}
              </h1>
              <p className="text-slate-400 text-sm">
                {tab === "login"
                  ? "Build your business roadmap. Save your blueprint. Upgrade when ready."
                  : "Start with a free roadmap. No credit card required."}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-7">

              {/* Tabs */}
              <div className="mb-7 flex rounded-xl border border-[#1A2235] p-1 bg-[#080C14]">
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
                      onChange={e => setLoginForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <span className="text-xs text-slate-500 cursor-pointer hover:text-[#D4A017] transition-colors">
                        Forgot password?
                      </span>
                    </div>
                    <input
                      type="password" required
                      value={loginForm.password}
                      onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit" disabled={loading}
                    className="btn-gold w-full py-3 text-sm font-bold rounded-xl"
                  >
                    {loading ? "Signing in…" : "Sign In →"}
                  </button>
                  <p className="text-center text-sm text-slate-500">
                    No account?{" "}
                    <button type="button" onClick={() => setTab("register")}
                      className="font-semibold hover:text-white transition-colors" style={{ color: "#D4A017" }}>
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
                      type="text" required
                      value={registerForm.name}
                      onChange={e => setRegisterForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Email address</label>
                    <input
                      type="email" required
                      value={registerForm.email}
                      onChange={e => setRegisterForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Password</label>
                    <input
                      type="password" required
                      value={registerForm.password}
                      onChange={e => setRegisterForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="Min 8 characters"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Confirm password</label>
                    <input
                      type="password" required
                      value={registerForm.confirm}
                      onChange={e => setRegisterForm(f => ({ ...f, confirm: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit" disabled={loading}
                    className="btn-gold w-full py-3 text-sm font-bold rounded-xl"
                  >
                    {loading ? "Creating account…" : "Create Free Account →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <span className="text-slate-400">Terms of Service</span> and{" "}
                    <span className="text-slate-400">Privacy Policy</span>.
                  </p>
                  <p className="text-center text-sm text-slate-500">
                    Already have an account?{" "}
                    <button type="button" onClick={() => setTab("login")}
                      className="font-semibold hover:text-white transition-colors" style={{ color: "#D4A017" }}>
                      Sign in
                    </button>
                  </p>
                </form>
              )}

              {/* Waitlist link */}
              <div className="mt-5 pt-5 border-t border-[#1A2235] text-center text-sm text-slate-500">
                Not ready yet?{" "}
                <Link to="/waitlist" className="font-semibold transition-colors hover:text-white" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel — tier benefits (hidden on mobile) */}
        <div className="hidden lg:flex w-[420px] shrink-0 flex-col justify-center px-10 py-16 border-l border-[#1A2235]"
          style={{ background: "linear-gradient(180deg, #0A0F1E 0%, #080C14 100%)" }}>

          <div className="mb-8">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>
              PEN2PRO RMIE Platform
            </div>
            <h2 className="font-display text-2xl font-black text-white leading-tight">
              Every tier is built to get you closer to launch.
            </h2>
          </div>

          <div className="space-y-4">
            {TIER_HIGHLIGHTS.map((tier) => (
              <div key={tier.label}
                className="rounded-xl border border-[#1A2235] bg-[#0F1520] p-5 hover:border-opacity-60 transition-colors"
                style={{ borderColor: `${tier.color}20` }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl">{tier.icon}</span>
                  <span className="font-bold text-white text-sm">{tier.label}</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {tier.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-1.5 text-xs text-slate-400">
                      <span className="shrink-0" style={{ color: tier.color }}>✓</span>
                      {pt}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-[#1A2235] bg-[#0F1520] p-5">
            <p className="text-xs text-slate-500 leading-relaxed italic">
              "PEN2PRO was built from lived experience — not theory. The same discipline that built real businesses is now inside this platform."
            </p>
            <p className="mt-3 text-xs font-bold text-slate-400">— Robert Earl Green Jr., Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
}
