import { useState } from "react";
import { Link } from "react-router-dom";

const SAMPLE_TASKS = [
  { id: 1, done: false, label: "Register your LLC", priority: "high", category: "Foundation" },
  { id: 2, done: false, label: "Get your EIN from IRS.gov", priority: "high", category: "Foundation" },
  { id: 3, done: true, label: "Open a business bank account", priority: "high", category: "Foundation" },
  { id: 4, done: false, label: "Create your Google Business Profile", priority: "medium", category: "Marketing" },
  { id: 5, done: false, label: "Build your first offer (entry, core, premium)", priority: "medium", category: "Offer" },
  { id: 6, done: false, label: "Identify 20 target customers", priority: "medium", category: "Outreach" },
  { id: 7, done: true, label: "Complete your PEN2PRO business blueprint", priority: "high", category: "Planning" },
  { id: 8, done: false, label: "Message 10 potential customers", priority: "high", category: "Outreach" },
];

const PRIORITY_COLOR = {
  high: "#FF8A00",
  medium: "#2d9cff",
  low: "#64748B",
};

export default function TasksPage() {
  const [tasks, setTasks] = useState(SAMPLE_TASKS);
  const [newTask, setNewTask] = useState("");

  const toggle = (id) => setTasks((t) => t.map((task) => task.id === id ? { ...task, done: !task.done } : task));

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks((t) => [
      ...t,
      { id: Date.now(), done: false, label: newTask.trim(), priority: "medium", category: "Custom" },
    ]);
    setNewTask("");
  };

  const done = tasks.filter((t) => t.done).length;
  const pct = Math.round((done / tasks.length) * 100);

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <div className="mx-auto max-w-2xl px-4 py-10">
        <div className="mb-8">
          <Link to="/dashboard" className="mb-4 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
            ← Dashboard
          </Link>
          <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Workspace</p>
          <h1 className="mt-1 font-display text-2xl font-black">Task Manager</h1>
          <p className="mt-1 text-sm text-slate-400">Track your business launch checklist and daily actions.</p>
        </div>

        {/* Progress */}
        <div className="mb-6 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-semibold text-slate-300">{done} of {tasks.length} completed</span>
            <span className="font-black text-[#FF8A00]">{pct}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[#1A2235]">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${pct}%`, background: "linear-gradient(90deg, #FF8A00, #D4A017)" }}
            />
          </div>
        </div>

        {/* Add Task */}
        <form onSubmit={addTask} className="mb-6 flex gap-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a task..."
            className="flex-1 rounded-xl border border-[#1A2235] bg-[#0F1520] px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#FF8A00] focus:outline-none transition-colors"
          />
          <button
            type="submit"
            className="rounded-xl px-4 py-2.5 text-sm font-bold text-[#081226] transition hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, #FF8A00, #D4A017)" }}
          >
            Add
          </button>
        </form>

        {/* Task List */}
        <div className="space-y-2">
          {tasks.map((task) => (
            <button
              key={task.id}
              onClick={() => toggle(task.id)}
              className="flex w-full items-center gap-3 rounded-xl border border-[#1A2235] bg-[#0F1520] px-4 py-3 text-left transition hover:border-[#1A2D50]"
            >
              <div
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                  task.done
                    ? "border-[#FF8A00] bg-[#FF8A00]"
                    : "border-[#1A2D50] bg-transparent"
                }`}
              >
                {task.done && <span className="text-[10px] font-black text-[#081226]">✓</span>}
              </div>
              <span className={`flex-1 text-sm ${task.done ? "text-slate-600 line-through" : "text-slate-200"}`}>
                {task.label}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-600">{task.category}</span>
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: PRIORITY_COLOR[task.priority] }}
                />
              </div>
            </button>
          ))}
        </div>

        {/* Upgrade CTA */}
        <div className="mt-8 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5 text-center">
          <p className="mb-1 text-sm font-bold text-slate-300">Want a full AI-generated task list?</p>
          <p className="mb-4 text-xs text-slate-500">Pro and Elite plans generate personalized task lists from your business blueprint — with daily priorities and 90-day milestones.</p>
          <Link
            to="/pro"
            className="inline-block rounded-xl px-5 py-2 text-sm font-bold text-[#081226] transition hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, #2d9cff, #1E88E5)" }}
          >
            Upgrade to Pro
          </Link>
        </div>
      </div>
    </div>
  );
}
