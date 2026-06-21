import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_PANEL = [
  {
    name: "Free Roadmap",
    price: "$0",
    color: "#64748B",
    accentColor: "#94A3B8",
    features: ["1 AI business roadmap", "Brand name suggestions", "LLC setup checklist", "No credit card required"],
  },
  {
    name: "Pro",
    price: "$249/mo",
    color: "#2d9cff",
    accentColor: "#2d9cff",
    features: ["Full RMIE blueprint", "7 / 30 / 90-day action plan", "Credit & funding checklist", "PDF export + outreach strategy"],
  },
  {
    name: "Elite",
    price: "$499/mo",
    color: "#d4af37",
    accentColor: "#d4af37",
    features: ["Everything in Pro", "Financial projections", "Legal foundation checklist", "Vendor & funding resource center"],
  },
  {
    name: "Founders Lifetime",
    price: "$1,899",
    color: "#FF8A00",
    accentColor: "#FF8A00",
    features: ["Lifetime access — one payment", "All features, forever", "P2P Command Center + Voice Agent", "Legacy Founder recognition"],
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

      <div className="flex min-h-[calc(100vh-72px)] flex-col lg:flex-row">

        {/* ── LEFT PANEL: Value Proposition ── */}
        <div
          className="hidden lg:flex lg:w-[52%] xl:w-[55%] flex-col justify-center overflow-y-auto px-10 xl:px-16 py-16 border-r border-[#1A2235]"
          style={{ background: "linear-gradient(160deg, #0A0F1E 0%, #080C14 100%)" }}
        >
          <div className="relative max-w-lg">

            {/* Background orb */}
            <div
              className="pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(30,136,229,0.07) 0%, transparent 65%)", filter: "blur(50px)" }}
            />

            {/* Brand badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#1A2235] bg-[#0F1520] px-3 py-1.5">
              <div
                className="flex h-5 w-5 items-center justify-center rounded-md text-[11px]"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}
              >
                ⚡
              </div>
              <span className="text-sm font-black tracking-tight leading-none">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
              <span className="text-xs text-slate-500">RMIE Platform</span>
            </div>

            {/* Core headline — from CLAUDE.md spec */}
            <h2 className="font-display text-3xl font-black leading-tight text-white mb-3 xl:text-4xl">
              Build your business roadmap.
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #1E88E5, #FF8A00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Save your blueprint.
              </span>
              <br />
              Upgrade when ready.
            </h2>

            <p className="mb-8 text-sm leading-relaxed text-slate-400">
              PEN2PRO RMIE — Rapid Monetization Intelligence Engine — is built for entrepreneurs, veterans,
              returning citizens, and working-class builders who are serious about execution.
            </p>

            {/* Tier cards */}
            <div className="space-y-2.5">
              {TIER_PANEL.map((tier) => (
                <div
                  key={tier.name}
                  className="flex items-start gap-3 rounded-xl border bg-[#0F1520] p-4 transition-colors hover:bg-[#111827]"
                  style={{ borderColor: `${tier.color}22` }}
                >
                  <div
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-xs font-black"
                    style={{ background: `${tier.color}18`, color: tier.accentColor }}
                  >
                    ✓
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-sm font-bold text-white">{tier.name}</span>
                      <span
                        className="rounded-md px-1.5 py-0.5 text-xs font-semibold"
                        style={{ color: tier.accentColor, background: `${tier.color}18` }}
                      >
                        {tier.price}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {tier.features.map((f) => (
                        <span key={f} className="text-xs text-slate-500">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Free roadmap nudge */}
            <p className="mt-6 text-xs text-slate-600">
              Not sure yet?{" "}
              <Link to="/starter" className="font-semibold transition hover:opacity-80" style={{ color: "#D4A017" }}>
                Start free — no account needed →
              </Link>
            </p>
          </div>
        </div>

        {/* ── RIGHT PANEL: Auth Form ── */}
        <div className="flex flex-1 flex-col justify-center px-5 py-16 lg:px-10 xl:px-16">
          <div className="mx-auto w-full max-w-md">

            {/* Mobile-only: brand + compact headline */}
            <div className="mb-8 text-center lg:hidden">
              <div
                className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}
              >
                <span className="text-xl">⚡</span>
              </div>
              <h1 className="font-display text-2xl font-black leading-snug text-white">
                Build your roadmap.{" "}
                <span style={{ color: "#FF8A00" }}>Upgrade when ready.</span>
              </h1>
            </div>

            {/* Desktop-only: contextual header above card */}
            <div className="mb-7 hidden lg:block">
              <h1 className="font-display text-2xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-1.5 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today — free"}
              </p>
            </div>

            {/* Mobile: contextual header */}
            <div className="mb-6 lg:hidden">
              <h2 className="font-display text-xl font-black text-white">
                {tab === "login" ? "Sign in to PEN2PRO" : "Create your account"}
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                {tab === "login"
                  ? "Access your business roadmap dashboard"
                  : "Get your free AI business roadmap today"}
              </p>
            </div>

            {/* Card */}
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
                      onChange={(e) => setLoginForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <Link
                        to="/waitlist"
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
                      onChange={(e) => setLoginForm((f) => ({ ...f, password: e.target.value }))}
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
                      onChange={(e) => setRegisterForm((f) => ({ ...f, name: e.target.value }))}
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
                      onChange={(e) => setRegisterForm((f) => ({ ...f, email: e.target.value }))}
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
                      onChange={(e) => setRegisterForm((f) => ({ ...f, password: e.target.value }))}
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
                      onChange={(e) => setRegisterForm((f) => ({ ...f, confirm: e.target.value }))}
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

              {/* Bottom waitlist link */}
              <div className="mt-6 text-center text-sm text-slate-500">
                Not ready to sign up yet?{" "}
                <Link to="/waitlist" className="font-semibold transition hover:opacity-80" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Below-card quick links */}
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-600">
              <Link to="/pricing" className="transition hover:text-slate-400">View Pricing</Link>
              <span>·</span>
              <Link to="/starter" className="transition hover:text-slate-400">Start Free Roadmap</Link>
              <span>·</span>
              <Link to="/about" className="transition hover:text-slate-400">About</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
