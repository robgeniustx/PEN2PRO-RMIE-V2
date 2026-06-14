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

  const TIERS = [
    {
      name: "Free Roadmap",
      badge: "Start Here",
      badgeColor: "#1E88E5",
      desc: "Get your first AI business roadmap — 7-day action plan, startup checklist, brand name ideas. No credit card.",
      icon: "🗺️",
    },
    {
      name: "Pro",
      badge: "$249/mo",
      badgeColor: "#D4A017",
      desc: "Full 90-day execution plan, sales scripts, credit readiness checklist, PDF export, and AI refinement.",
      icon: "🚀",
    },
    {
      name: "Elite",
      badge: "$499/mo",
      badgeColor: "#00C9B1",
      desc: "Everything in Pro plus financial projections, funding resources, done-with-you guidance, and white-glove strategy.",
      icon: "💎",
    },
    {
      name: "Legacy Founder",
      badge: "Lifetime Access",
      badgeColor: "#FF8A00",
      desc: "One-time investment. Full platform for life. Founding-member recognition and locked-in pricing forever.",
      icon: "👑",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="flex min-h-[calc(100vh-80px)] items-start justify-center px-4 py-12">
        <div className="w-full max-w-5xl">

          {/* Page headline */}
          <div className="mb-8 text-center">
            <h1 className="font-display text-2xl font-black text-white md:text-3xl">
              Build your business roadmap.{" "}
              <span style={{ color: "#D4A017" }}>Save your blueprint.</span>{" "}
              Upgrade when ready.
            </h1>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">

            {/* ── LEFT: Auth form ── */}
            <div>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold text-xl font-black text-[#080C14]">
                  P2P
                </div>
                <p className="mt-2 text-sm text-slate-400">
                  {tab === "login"
                    ? "Sign in to access your PEN2PRO dashboard"
                    : "Start building your business roadmap today"}
                </p>
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
                {/* Tabs */}
                <div className="mb-8 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
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
                      className="btn-gold w-full py-3 text-sm font-bold"
                    >
                      {loading ? "Signing in..." : "Sign In"}
                    </button>
                    <p className="text-center text-sm text-slate-500">
                      No account?{" "}
                      <button type="button" onClick={() => { setTab("register"); setError(""); }}
                        className="font-semibold hover:opacity-80" style={{ color: "#D4A017" }}>
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
                <div className="mt-6 text-center text-sm text-slate-500">
                  Not ready to sign up yet?{" "}
                  <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                    Join the waitlist
                  </Link>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Value prop panel ── */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">What you get with PEN2PRO</p>
              {TIERS.map((tier) => (
                <div key={tier.name} className="flex items-start gap-4 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-5 hover:border-[#1A2D50] transition-colors">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl"
                    style={{ background: "#0D1528", border: `1px solid ${tier.badgeColor}30` }}>
                    {tier.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-black text-white">{tier.name}</span>
                      <span className="rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-wider"
                        style={{ background: `${tier.badgeColor}20`, color: tier.badgeColor }}>
                        {tier.badge}
                      </span>
                    </div>
                    <p className="text-xs leading-5 text-slate-500">{tier.desc}</p>
                  </div>
                </div>
              ))}
              <div className="mt-2 rounded-2xl border p-4 text-center"
                style={{ borderColor: "rgba(255,138,0,0.25)", background: "#0D1528" }}>
                <p className="text-xs text-slate-500">
                  Questions?{" "}
                  <Link to="/pricing" className="font-semibold hover:opacity-80" style={{ color: "#FF8A00" }}>
                    View full pricing
                  </Link>{" "}
                  or{" "}
                  <Link to="/about" className="font-semibold hover:opacity-80" style={{ color: "#FF8A00" }}>
                    learn our story
                  </Link>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
