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

  const TIER_CARDS = [
    {
      name: "Free Roadmap",
      price: "$0",
      color: "#FF8A00",
      features: ["AI business blueprint", "7-day action plan", "Brand name ideas", "LLC setup checklist"],
    },
    {
      name: "Pro",
      price: "$249/mo",
      color: "#2d9cff",
      features: ["Full RMIE roadmap", "Credit & funding checklist", "Outreach strategy + sales scripts", "PDF & email export"],
    },
    {
      name: "Elite",
      price: "$499/mo",
      color: "#d4af37",
      features: ["Everything in Pro", "Financial projections", "Vendor & funding resource center", "Automation workflows"],
    },
    {
      name: "Founders Lifetime",
      price: "$1,899 once",
      color: "#d4af37",
      features: ["Lifetime access — no renewals", "Full platform + Command Center", "AI Voice Agent + Website Builder", "First access to every new feature"],
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="flex min-h-[calc(100vh-80px)] items-start justify-center px-4 py-16">
        <div className="w-full max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-start">

            {/* ── LEFT: Auth Form ── */}
            <div>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold text-xl font-black text-[#080C14]">
                  P2P
                </div>
                <h1 className="font-display text-3xl font-bold text-white">
                  {tab === "login" ? "Welcome back" : "Create your account"}
                </h1>
                <p className="mt-2 text-sm text-slate-400">
                  {tab === "login"
                    ? "Sign in to access your PEN2PRO dashboard"
                    : "Build your business roadmap. Save your blueprint. Upgrade when ready."}
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
                      <label className="mb-1.5 block text-sm font-medium text-slate-300">Password</label>
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
                      By creating an account you agree to our{" "}
                      <Link to="/terms" className="text-slate-400 hover:text-white">Terms</Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-slate-400 hover:text-white">Privacy Policy</Link>.
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

            {/* ── RIGHT: Tier Benefits Panel ── */}
            <div className="hidden lg:block">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-2">What You Get</p>
                <h2 className="font-display text-2xl font-black text-white leading-tight">
                  Build your business roadmap.<br />
                  <span className="text-slate-400 font-semibold text-xl">Save your blueprint. Upgrade when ready.</span>
                </h2>
              </div>

              <div className="space-y-3">
                {TIER_CARDS.map((tier) => (
                  <div
                    key={tier.name}
                    className="rounded-xl border bg-[#0F1520] p-4"
                    style={{ borderColor: tier.color + "30" }}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-sm font-black text-white">{tier.name}</p>
                      <span className="text-xs font-bold" style={{ color: tier.color }}>{tier.price}</span>
                    </div>
                    <ul className="space-y-1">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-slate-400">
                          <span style={{ color: tier.color }} className="shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Founders Closing</p>
                <p className="text-sm font-black text-white">August 1, 2026 — Only 200 spots</p>
                <p className="text-xs text-slate-500 mt-1">$1,899 one-time. Full platform forever.</p>
                <Link
                  to="/founders"
                  className="mt-3 block rounded-lg px-4 py-2 text-center text-xs font-black"
                  style={{ background: "linear-gradient(90deg, #d4af37, #f7d675)", color: "#080C14" }}
                >
                  Claim Founders Lifetime →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
