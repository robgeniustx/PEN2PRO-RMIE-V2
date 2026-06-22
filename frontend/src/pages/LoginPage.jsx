import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

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

  const TIER_INFO = [
    {
      icon: "🚀",
      name: "Free Roadmap",
      desc: "Get a starter business blueprint, brand name ideas, LLC checklist, and a 7-day action plan — at no cost.",
      color: "#D4A017",
    },
    {
      icon: "📊",
      name: "Pro Strategy Tools",
      desc: "Full RMIE blueprint, 90-day execution plan, outreach scripts, credit readiness, PDF export, and AI refinement.",
      color: "#2d9cff",
    },
    {
      icon: "🧠",
      name: "Elite Execution Support",
      desc: "Advanced strategist guidance, financial projections, vendor resources, CRM, automation, and priority support.",
      color: "#00C9B1",
    },
    {
      icon: "♾️",
      name: "Legacy Founder Access",
      desc: "One-time lifetime investment. Every feature. Every future release. Founder badge. First access. Forever.",
      color: "#D4A017",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12">
        <div className="w-full max-w-5xl">

          {/* Page headline */}
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 inline-flex items-center justify-center gap-2">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl text-base font-black text-[#080C14]"
                style={{ background: "linear-gradient(135deg, #D4A017, #FF8A00)" }}
              >
                P2P
              </div>
              <span className="font-display text-xl font-black tracking-tight">
                <span className="text-white">PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>
            <h1 className="font-display text-2xl font-black text-white md:text-3xl">
              Build your business roadmap.
            </h1>
            <p className="mt-1 text-sm font-semibold text-slate-400">
              Save your blueprint. Upgrade when ready.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid gap-8 lg:grid-cols-2">

            {/* LEFT — Tier info panel */}
            <div className="hidden lg:flex flex-col justify-center space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">What's inside PEN2PRO</p>
              {TIER_INFO.map((tier) => (
                <div
                  key={tier.name}
                  className="flex items-start gap-4 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-5 transition hover:border-[#1A2D50]"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl"
                    style={{ background: `${tier.color}18`, border: `1px solid ${tier.color}30` }}
                  >
                    {tier.icon}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm" style={{ color: tier.color }}>{tier.name}</p>
                    <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">{tier.desc}</p>
                  </div>
                </div>
              ))}
              <div className="pt-2">
                <Link
                  to="/pricing"
                  className="text-xs font-semibold transition hover:opacity-80"
                  style={{ color: "#D4A017" }}
                >
                  Compare all plans →
                </Link>
              </div>
            </div>

            {/* RIGHT — Auth card */}
            <div>
              {/* Tabs */}
              <div className="mb-6 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#0A0F1E" }}>
                <button
                  onClick={() => { setTab("login"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "login"
                      ? "gradient-gold text-[#080C14]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setTab("register"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "register"
                      ? "gradient-gold text-[#080C14]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Create Account
                </button>
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>

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
                        className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                      />
                    </div>
                    <div>
                      <div className="mb-1.5 flex items-center justify-between">
                        <label className="text-sm font-medium text-slate-300">Password</label>
                        <Link
                          to="/waitlist?reason=forgot-password"
                          className="text-xs font-semibold transition hover:opacity-80"
                          style={{ color: "#D4A017" }}
                        >
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
                      className="btn-gold w-full py-3 text-sm font-bold"
                    >
                      {loading ? "Signing in..." : "Sign In"}
                    </button>
                    <p className="text-center text-xs text-slate-600">
                      Don't have an account?{" "}
                      <button
                        type="button"
                        onClick={() => { setTab("register"); setError(""); }}
                        className="font-semibold text-slate-400 hover:text-white transition"
                      >
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
                      By creating an account you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </form>
                )}

                {/* Waitlist link */}
                <div className="mt-6 border-t border-[#1A2235] pt-5 text-center text-sm text-slate-500">
                  Not ready to sign up?{" "}
                  <Link to="/waitlist" className="font-semibold transition hover:opacity-80" style={{ color: "#D4A017" }}>
                    Join the waitlist
                  </Link>
                </div>
              </div>

              {/* Mobile tier summary */}
              <div className="mt-6 grid grid-cols-2 gap-3 lg:hidden">
                {TIER_INFO.map((tier) => (
                  <div key={tier.name} className="rounded-xl border border-[#1A2235] bg-[#0F1520] p-3 text-center">
                    <p className="text-lg">{tier.icon}</p>
                    <p className="mt-1 text-xs font-bold" style={{ color: tier.color }}>{tier.name}</p>
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
