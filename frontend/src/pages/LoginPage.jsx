import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    tier: "Free Roadmap",
    icon: "🗺️",
    color: "#4ade80",
    body: "Start your business blueprint for free. Get a roadmap preview with your idea, target market, and first steps.",
  },
  {
    tier: "Pro — $249/mo",
    icon: "⚡",
    color: "#2d9cff",
    body: "Full roadmap, branding direction, outreach strategy, PDF export, AI refinement, and credit & funding checklist.",
  },
  {
    tier: "Elite — $499/mo",
    icon: "🧠",
    color: "#FF8A00",
    body: "Everything in Pro plus financial projections, legal foundation, vendor resources, and done-with-you execution support.",
  },
  {
    tier: "Founders Lifetime",
    icon: "🏅",
    color: "#d4af37",
    body: "One-time $1,899. Lifetime access to every feature, every update, and the 12-month 10M strategist framework. Only 200 spots.",
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
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

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
      localStorage.setItem(
        "pen2pro_user",
        JSON.stringify({ name: data.name, tier: data.tier, email: loginForm.email })
      );
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
        body: JSON.stringify({
          name: registerForm.name,
          email: registerForm.email,
          password: registerForm.password,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Registration failed");
      localStorage.setItem("pen2pro_token", data.access_token);
      localStorage.setItem(
        "pen2pro_user",
        JSON.stringify({ name: data.name, tier: data.tier, email: registerForm.email })
      );
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

      <div className="flex min-h-[calc(100vh-80px)] items-stretch">

        {/* ── LEFT PANEL — Value prop ── */}
        <div
          className="hidden lg:flex lg:w-[45%] flex-col justify-center px-12 py-16"
          style={{
            background: "linear-gradient(160deg, #0A0F1E 0%, #0D1528 100%)",
            borderRight: "1px solid #1A2D50",
          }}
        >
          {/* Logo mark */}
          <div className="mb-8 flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{
                background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)",
                boxShadow: "0 0 20px rgba(30,136,229,0.35)",
              }}
            >
              <span className="text-xl leading-none">⚡</span>
            </div>
            <span className="font-display text-2xl font-black tracking-tight">
              <span style={{ color: "#FFFFFF" }}>PEN</span>
              <span style={{ color: "#FF8A00" }}>2</span>
              <span style={{ color: "#1E88E5" }}>PRO</span>
            </span>
          </div>

          {/* Headline */}
          <h2 className="mb-3 font-display text-3xl font-black leading-tight text-white">
            Build your business roadmap.
            <br />
            <span style={{ color: "#FF8A00" }}>Save your blueprint.</span>
            <br />
            Upgrade when ready.
          </h2>
          <p className="mb-10 text-slate-400 leading-relaxed">
            PEN2PRO gives you an AI-powered Rapid Monetization Intelligence Engine to turn your
            idea into a real business plan. Free to start. Upgrade when you're ready to execute.
          </p>

          {/* Tier benefits */}
          <div className="space-y-4">
            {TIER_BENEFITS.map((item) => (
              <div
                key={item.tier}
                className="flex items-start gap-4 rounded-xl border border-[#1A2D50] bg-[#080C14] p-4"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-bold" style={{ color: item.color }}>
                    {item.tier}
                  </p>
                  <p className="mt-0.5 text-sm text-slate-400 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Founder story teaser */}
          <div className="mt-10 rounded-xl border border-[#1A2D50] bg-[#080C14] p-5">
            <p className="text-sm leading-relaxed text-slate-400 italic">
              "I built PEN2PRO because I needed it and couldn't find it. This platform exists for
              people who have been counted out — but are serious about building something real."
            </p>
            <div className="mt-3 flex items-center gap-3">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}
              >
                ⚡
              </div>
              <div>
                <p className="text-sm font-bold text-white">Robert Earl Green Jr.</p>
                <p className="text-xs text-slate-500">Veteran · Entrepreneur · Founder of PEN2PRO</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL — Auth form ── */}
        <div className="flex flex-1 flex-col items-center justify-center px-5 py-16 lg:px-12">
          <div className="w-full max-w-md">

            {/* Mobile headline */}
            <div className="mb-8 text-center lg:hidden">
              <div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}
              >
                <span className="text-2xl">⚡</span>
              </div>
              <h1 className="font-display text-2xl font-black text-white">
                Build your business roadmap.
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                Save your blueprint. Upgrade when ready.
              </p>
            </div>

            {/* Desktop: simple greeting */}
            <div className="mb-6 hidden lg:block">
              <h1 className="font-display text-2xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your free account"}
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start your business roadmap — free, no credit card required"}
              </p>
            </div>

            {/* Card */}
            <div
              className="rounded-2xl border border-[#1A2235] p-8"
              style={{ background: "#0F1520" }}
            >
              {/* Tabs */}
              <div
                className="mb-8 flex rounded-xl border border-[#1A2235] p-1"
                style={{ background: "#080C14" }}
              >
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
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Email address
                    </label>
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
                        className="text-xs text-slate-500 hover:text-slate-400 transition-colors"
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
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Full name
                    </label>
                    <input
                      type="text"
                      required
                      value={registerForm.name}
                      onChange={(e) => setRegisterForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Email address
                    </label>
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
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Password
                    </label>
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
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">
                      Confirm password
                    </label>
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

              {/* Waitlist link */}
              <div className="mt-6 text-center text-sm text-slate-500">
                Not ready to sign up yet?{" "}
                <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Below card — explore plans */}
            <div className="mt-6 text-center text-sm text-slate-500">
              Explore plans:{" "}
              <Link to="/starter" className="text-[#4ade80] hover:underline">Free</Link>
              {" · "}
              <Link to="/pro" className="text-[#2d9cff] hover:underline">Pro</Link>
              {" · "}
              <Link to="/elite" className="text-[#FF8A00] hover:underline">Elite</Link>
              {" · "}
              <Link to="/founders" className="text-[#d4af37] hover:underline">Founders</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
