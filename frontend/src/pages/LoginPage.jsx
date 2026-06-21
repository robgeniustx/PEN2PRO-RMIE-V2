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
      label: "Free Roadmap",
      color: "#00C9B1",
      desc: "Start for free. Get a 7-day action plan, brand name ideas, and launch checklist — no card required.",
    },
    {
      label: "Pro — $249/mo",
      color: "#2d9cff",
      desc: "Full 90-day execution plan, sales scripts, PDF export, branding support, and credit readiness.",
    },
    {
      label: "Elite — $499/mo",
      color: "#FF8A00",
      desc: "Advanced strategist guidance, financial projections, vendor & funding resources, automation, and priority support.",
    },
    {
      label: "Founders Lifetime — $1,899",
      color: "#D4A017",
      desc: "One payment. Lifetime access. Command Center, AI Voice Agent, Website Builder, and the 12-month 10M Framework.",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="flex min-h-[calc(100vh-80px)] items-stretch">

        {/* ── Side Panel (hidden on mobile) ── */}
        <div
          className="hidden lg:flex lg:w-[420px] xl:w-[480px] shrink-0 flex-col justify-between px-10 py-16 border-r border-[#1A2235]"
          style={{ background: "#0A0F1E" }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}
              >
                <span className="text-lg leading-none">⚡</span>
              </div>
              <span className="font-display text-2xl font-black">
                <span className="text-white">PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>

            <h2 className="font-display text-2xl font-black text-white leading-snug mb-3">
              Build your business roadmap.<br />
              Save your blueprint.<br />
              Upgrade when ready.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-10">
              PEN2PRO gives you the structure, strategy, and execution tools to turn your idea into real income — whether you're just starting or scaling fast.
            </p>

            {/* Tier breakdown */}
            <div className="space-y-4">
              {TIER_INFO.map((t) => (
                <div key={t.label} className="flex items-start gap-3 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4">
                  <div
                    className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: t.color, boxShadow: `0 0 8px ${t.color}80` }}
                  />
                  <div>
                    <p className="text-sm font-bold text-white mb-0.5">{t.label}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-slate-600 mt-10">
            No guarantees of income or funding results. Results depend on individual effort.
          </p>
        </div>

        {/* ── Auth Form ── */}
        <div className="flex flex-1 items-center justify-center px-4 py-16">
          <div className="w-full max-w-md">

            {/* Mobile brand */}
            <div className="lg:hidden text-center mb-8">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl gradient-gold text-base font-black text-[#080C14]">
                P2P
              </div>
              <h1 className="font-display text-2xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-1.5 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to your PEN2PRO dashboard"
                  : "Build your free business roadmap today"}
              </p>
            </div>

            {/* Desktop heading */}
            <div className="hidden lg:block mb-8">
              <h1 className="font-display text-3xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Get started free"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today"}
              </p>
            </div>

            {/* Tabs */}
            <div className="mb-7 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#0A0F1E" }}>
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

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-7" style={{ background: "#0F1520" }}>

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
                    <label className="mb-1.5 flex items-center justify-between text-sm font-medium text-slate-300">
                      Password
                      <span className="text-xs font-normal text-slate-500">Forgot password? <a href="mailto:support@pen2pro.com" className="hover:text-[#D4A017]">Contact support</a></span>
                    </label>
                    <input
                      type="password"
                      required
                      value={loginForm.password}
                      onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <button type="submit" disabled={loading} className="btn-gold w-full py-3 text-sm font-bold">
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
                  <button type="submit" disabled={loading} className="btn-gold w-full py-3 text-sm font-bold">
                    {loading ? "Creating account..." : "Create Account — Free"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}

              {/* Bottom link */}
              <div className="mt-6 text-center text-sm text-slate-500">
                Not ready to sign up yet?{" "}
                <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                  Join the waitlist
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
