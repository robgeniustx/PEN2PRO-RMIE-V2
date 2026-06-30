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

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="flex min-h-[calc(100vh-80px)]">

        {/* ── Left side panel (desktop only) ── */}
        <div className="hidden lg:flex flex-col justify-center px-12 py-20 border-r border-[#1A2235] shrink-0 w-[44%]" style={{ background: "#0F1520" }}>
          <div className="max-w-sm">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#1A2235] bg-[#080C14] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#D4A017]">
              ⚡ PEN2PRO RMIE
            </div>
            <h2 className="mt-4 font-display text-3xl font-black leading-tight text-white">
              Build your business roadmap. Save your blueprint. Upgrade when ready.
            </h2>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Sign in to access your PEN2PRO workspace and continue building.
            </p>

            <div className="mt-8 space-y-3">
              {/* Free */}
              <div className="rounded-xl border border-[#1A2235] bg-[#080C14] p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Free Forever</p>
                <p className="text-sm font-bold text-white">AI Business Roadmap</p>
                <p className="text-xs text-slate-400 mt-0.5">
                  7/30/90-day plan, offer structure, startup checklist — no credit card.
                </p>
              </div>
              {/* Pro */}
              <div className="rounded-xl border border-[#2d9cff]/40 p-4" style={{ background: "#0c1829" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#2d9cff] mb-1">Pro — $249/mo</p>
                <p className="text-sm font-bold text-white">Full Strategy Tools</p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Full blueprint, branding, outreach, credit readiness, PDF export.
                </p>
              </div>
              {/* Elite */}
              <div className="rounded-xl border border-[#d4af37]/40 p-4" style={{ background: "#130f03" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37] mb-1">Elite — $499/mo</p>
                <p className="text-sm font-bold text-white">Elite Execution Support</p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Financial projections, done-with-you strategy, vendor &amp; funding center.
                </p>
              </div>
              {/* Legacy Founder */}
              <div className="rounded-xl border border-[#d4af37] p-4" style={{ background: "#15120a", boxShadow: "0 0 20px rgba(212,175,55,0.12)" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37] mb-1">Legacy Founders — $1,899 for life</p>
                <p className="text-sm font-bold text-white">Lifetime Platform Access</p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Every feature, forever. 200 spots only — price locked at signup.
                </p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Link to="/starter" className="rounded-lg border border-[#1A2235] px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white hover:border-[#D4A017]/50 transition">
                Free Roadmap →
              </Link>
              <Link to="/pricing" className="rounded-lg border border-[#1A2235] px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white hover:border-[#D4A017]/50 transition">
                View Pricing →
              </Link>
            </div>
          </div>
        </div>

        {/* ── Right: form panel ── */}
        <div className="flex flex-1 items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">
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
        </div>{/* end right panel */}
      </div>{/* end flex row */}
      <Footer />
    </div>
  );
}
