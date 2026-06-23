import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const VALUE_PROPS = [
  {
    tier: "Free Roadmap",
    color: "#D4A017",
    icon: "🗺️",
    desc: "AI-generated 7/30/90-day plan for your specific idea. LLC checklist, pricing structure, and sales scripts — free, no card required.",
  },
  {
    tier: "Pro — $249/mo",
    color: "#1E88E5",
    icon: "📊",
    desc: "Full RMIE blueprint, branding support, credit & funding readiness checklist, outreach strategy, PDF export, and advanced AI refinement.",
  },
  {
    tier: "Elite — $499/mo",
    color: "#00C9B1",
    icon: "🚀",
    desc: "Financial projections, vendor & funding resource center, done-with-you guidance, company formation, and priority support.",
  },
  {
    tier: "Legacy Founder",
    color: "#FF8A00",
    icon: "⚡",
    desc: "Lifetime access to everything PEN2PRO builds. Limited spots. Full platform access the moment it launches.",
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

      <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">

          {/* ── Left: Value Prop Panel ── */}
          <div className="hidden lg:block">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
              ⚡ PEN2PRO RMIE
            </div>
            <h2 className="font-display text-3xl font-black text-white leading-tight mb-3">
              Build your business roadmap.
              <br />
              <span style={{ background: "linear-gradient(90deg,#D4A017,#FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Save your blueprint.
              </span>
              <br />
              Upgrade when ready.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              PEN2PRO RMIE — Rapid Monetization Intelligence Engine — turns your idea into a real business roadmap. Start free. Unlock execution tools when you're ready to go all in.
            </p>

            <div className="space-y-3">
              {VALUE_PROPS.map((vp) => (
                <div
                  key={vp.tier}
                  className="flex items-start gap-4 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
                    style={{ background: vp.color + "20", border: `1px solid ${vp.color}40` }}
                  >
                    {vp.icon}
                  </div>
                  <div>
                    <p className="text-sm font-black text-white mb-0.5" style={{ color: vp.color }}>{vp.tier}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{vp.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base"
                  style={{ background: "linear-gradient(135deg,#0D47A1,#1E88E5)" }}>
                  ⚡
                </div>
                <div>
                  <p className="text-sm font-black text-white">Robert Earl Green Jr.</p>
                  <p className="text-xs text-slate-500">Founder — PEN2PRO · Veteran · Entrepreneur</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 italic leading-relaxed">
                "I built PEN2PRO because the roadmap I needed didn't exist. This platform is for everyone who has been counted out — and is ready to build their own way in."
              </p>
            </div>
          </div>

          {/* ── Right: Auth Form ── */}
          <div className="w-full">
            {/* Mobile header */}
            <div className="mb-8 text-center lg:hidden">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl gradient-gold text-lg font-black text-[#080C14]">
                P2P
              </div>
              <h1 className="font-display text-2xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                Build your business roadmap. Upgrade when ready.
              </p>
            </div>

            {/* Desktop header */}
            <div className="mb-6 hidden lg:block">
              <h1 className="font-display text-2xl font-bold text-white">
                {tab === "login" ? "Sign in to PEN2PRO" : "Create your free account"}
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                {tab === "login"
                  ? "Access your business roadmap and dashboard."
                  : "Start your free business roadmap — no credit card required."}
              </p>
            </div>

            <div className="rounded-2xl border border-[#1A2235] p-7" style={{ background: "#0F1520" }}>
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <span className="text-xs text-slate-600">Forgot password? Contact support</span>
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
                    className="btn-gold w-full py-3 text-sm font-bold"
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    Don't have an account?{" "}
                    <button type="button" onClick={() => { setTab("register"); setError(""); }} className="font-semibold" style={{ color: "#D4A017" }}>
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
                    className="btn-gold w-full py-3 text-sm font-bold"
                  >
                    {loading ? "Creating account..." : "Create Account — Free"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our terms of service.
                  </p>
                </form>
              )}

              {/* Waitlist link */}
              <div className="mt-6 border-t border-[#1A2235] pt-5 text-center text-sm text-slate-500">
                Not ready to commit?{" "}
                <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                  Join the waitlist →
                </Link>
              </div>
            </div>

            {/* Mobile value props */}
            <div className="mt-8 space-y-3 lg:hidden">
              {VALUE_PROPS.map((vp) => (
                <div key={vp.tier} className="flex items-start gap-3 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base"
                    style={{ background: vp.color + "20" }}>
                    {vp.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold mb-0.5" style={{ color: vp.color }}>{vp.tier}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{vp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
