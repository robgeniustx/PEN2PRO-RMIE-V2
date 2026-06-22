import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PRIORITY = {
  high: { label: "High", color: "#EF4444", bg: "#EF444418" },
  medium: { label: "Medium", color: "#D4A017", bg: "#D4A01718" },
  low: { label: "Low", color: "#64748B", bg: "#64748B18" },
};

const DEFAULT_TASKS = [
  { id: "t1", text: "Complete your first AI business blueprint", done: false, priority: "high", category: "Roadmap" },
  { id: "t2", text: "Review your credit readiness checklist", done: false, priority: "high", category: "Funding" },
  { id: "t3", text: "Define your top 3 service or product offers", done: false, priority: "high", category: "Strategy" },
  { id: "t4", text: "Register your LLC or business entity", done: false, priority: "medium", category: "Legal" },
  { id: "t5", text: "Obtain your EIN from IRS.gov", done: false, priority: "medium", category: "Legal" },
  { id: "t6", text: "Open a dedicated business bank account", done: false, priority: "medium", category: "Finance" },
  { id: "t7", text: "Set up your Google Business Profile", done: false, priority: "medium", category: "Marketing" },
  { id: "t8", text: "Identify 50 potential customers or prospects", done: false, priority: "medium", category: "Outreach" },
  { id: "t9", text: "Create your first pricing sheet", done: false, priority: "low", category: "Strategy" },
  { id: "t10", text: "Join the PEN2PRO waitlist for Pro access", done: false, priority: "low", category: "Growth" },
];

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [newText, setNewText] = useState("");
  const [newPriority, setNewPriority] = useState("medium");
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    document.title = "Tasks — PEN2PRO";
    const stored = localStorage.getItem("pen2pro_tasks");
    if (stored) {
      try {
        setTasks(JSON.parse(stored));
      } catch {
        setTasks(DEFAULT_TASKS);
      }
    } else {
      setTasks(DEFAULT_TASKS);
      localStorage.setItem("pen2pro_tasks", JSON.stringify(DEFAULT_TASKS));
    }
  }, []);

  function persist(updated) {
    setTasks(updated);
    localStorage.setItem("pen2pro_tasks", JSON.stringify(updated));
  }

  function toggle(id) {
    persist(tasks.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function remove(id) {
    persist(tasks.filter(t => t.id !== id));
  }

  function addTask(e) {
    e.preventDefault();
    if (!newText.trim()) return;
    const task = {
      id: `t${Date.now()}`,
      text: newText.trim(),
      done: false,
      priority: newPriority,
      category: newCategory.trim() || "Custom",
    };
    persist([task, ...tasks]);
    setNewText("");
    setNewCategory("");
  }

  const doneCount = tasks.filter(t => t.done).length;
  const progress = tasks.length ? Math.round((doneCount / tasks.length) * 100) : 0;

  const visible = tasks.filter(t => {
    if (filter === "active") return !t.done;
    if (filter === "done") return t.done;
    return true;
  });

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-16">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
              📋 Business Launch Checklist
            </div>
            <h1 className="font-display text-3xl font-black text-white">Tasks</h1>
            <p className="mt-1 text-sm text-slate-400">
              {doneCount} of {tasks.length} complete
            </p>
          </div>
          <Link to="/starter" className="btn-gold whitespace-nowrap px-5 py-2.5 text-sm font-bold">
            + New Roadmap
          </Link>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 rounded-2xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="text-slate-400">Business Launch Progress</span>
            <span className="font-bold" style={{ color: "#D4A017" }}>
              {progress}%
            </span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-[#1A2235]">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #D4A017, #FF8A00)",
              }}
            />
          </div>
          {progress === 100 && (
            <p className="mt-3 text-center text-sm font-bold" style={{ color: "#D4A017" }}>
              🚀 All tasks complete — time to launch!
            </p>
          )}
          {progress > 0 && progress < 100 && (
            <p className="mt-2 text-xs text-center text-slate-500">
              {tasks.length - doneCount} task{tasks.length - doneCount !== 1 ? "s" : ""} remaining
            </p>
          )}
        </div>

        {/* Add Task Form */}
        <form onSubmit={addTask} className="mb-6 rounded-2xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Add New Task</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              value={newText}
              onChange={e => setNewText(e.target.value)}
              placeholder="What do you need to do?"
              className="flex-1 rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
            />
            <select
              value={newPriority}
              onChange={e => setNewPriority(e.target.value)}
              className="rounded-xl border border-[#1A2235] bg-[#080C14] px-3 py-3 text-sm text-slate-300 focus:border-[#D4A017] focus:outline-none"
            >
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
          </div>
          <div className="mt-3 flex gap-3">
            <input
              type="text"
              value={newCategory}
              onChange={e => setNewCategory(e.target.value)}
              placeholder="Category (optional)"
              className="flex-1 rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
            />
            <button type="submit" className="btn-gold shrink-0 px-6 py-3 text-sm font-bold">
              Add Task
            </button>
          </div>
        </form>

        {/* Filter Tabs */}
        <div className="mb-5 flex gap-2">
          {[
            { key: "all", label: `All (${tasks.length})` },
            { key: "active", label: `Active (${tasks.filter(t => !t.done).length})` },
            { key: "done", label: `Done (${doneCount})` },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold capitalize transition-all ${
                filter === key
                  ? "text-[#080C14]"
                  : "border border-[#1A2235] text-slate-400 hover:text-white"
              }`}
              style={
                filter === key
                  ? { background: "linear-gradient(90deg, #D4A017, #FF8A00)" }
                  : {}
              }
            >
              {label}
            </button>
          ))}
        </div>

        {/* Task List */}
        <div className="space-y-2">
          {visible.length === 0 && (
            <div
              className="rounded-2xl border border-[#1A2235] py-14 text-center"
              style={{ background: "#0F1520" }}
            >
              <p className="mb-2 text-3xl">
                {filter === "active" ? "🎉" : "📋"}
              </p>
              <p className="text-sm font-semibold text-white">
                {filter === "active" ? "All tasks complete!" : "No tasks yet"}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                {filter === "active"
                  ? "You crushed it. Ready to launch?"
                  : "Add your first task above to get started."}
              </p>
            </div>
          )}

          {visible.map(task => {
            const pri = PRIORITY[task.priority] || PRIORITY.medium;
            return (
              <div
                key={task.id}
                className={`flex items-center gap-3 rounded-2xl border p-4 transition-all ${
                  task.done
                    ? "border-[#1A2235] opacity-50"
                    : "border-[#1A2235] hover:border-[#D4A017]/30"
                }`}
                style={{ background: "#0F1520" }}
              >
                {/* Checkbox */}
                <button
                  onClick={() => toggle(task.id)}
                  aria-label={task.done ? "Mark incomplete" : "Mark complete"}
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                    task.done
                      ? "border-[#D4A017] bg-[#D4A017]"
                      : "border-[#1A2D50] hover:border-[#D4A017]"
                  }`}
                >
                  {task.done && (
                    <span className="text-[9px] font-black text-[#080C14]">✓</span>
                  )}
                </button>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <p
                    className={`text-sm font-medium ${
                      task.done ? "text-slate-500 line-through" : "text-white"
                    }`}
                  >
                    {task.text}
                  </p>
                  <div className="mt-1.5 flex items-center gap-2">
                    <span
                      className="rounded-full px-2 py-0.5 text-xs font-semibold"
                      style={{ background: pri.bg, color: pri.color }}
                    >
                      {pri.label}
                    </span>
                    {task.category && (
                      <span className="text-xs text-slate-600">{task.category}</span>
                    )}
                  </div>
                </div>

                {/* Delete */}
                <button
                  onClick={() => remove(task.id)}
                  aria-label="Delete task"
                  className="shrink-0 text-xl leading-none text-slate-600 transition-colors hover:text-red-400"
                >
                  ×
                </button>
              </div>
            );
          })}
        </div>

        {/* Clear completed */}
        {doneCount > 0 && (
          <div className="mt-5 text-center">
            <button
              onClick={() => persist(tasks.filter(t => !t.done))}
              className="text-sm text-slate-500 transition-colors hover:text-red-400"
            >
              Clear {doneCount} completed task{doneCount !== 1 ? "s" : ""}
            </button>
          </div>
        )}

        {/* Upgrade nudge for free tier */}
        <div className="mt-10 rounded-2xl border border-[#1A2235] p-6 text-center" style={{ background: "#0F1520" }}>
          <p className="mb-1 font-bold text-white">Need a detailed business roadmap?</p>
          <p className="mb-4 text-sm text-slate-400">
            PEN2PRO RMIE builds you a complete 7/30/90-day action plan, sales scripts, and funding checklist.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="btn-gold px-6 py-2.5 text-sm font-bold">
              Start Free Roadmap
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl border border-[#1A2235] px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              View Pro & Elite Plans
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
