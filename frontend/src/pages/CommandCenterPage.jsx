import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function CommandCenterPage() {
  const navigate = useNavigate()
  const isAuthenticated = useAuth((state) => state.isAuthenticated)
  const [tasks, setTasks] = useState([])
  const [stats, setStats] = useState(null)
  const [newTask, setNewTask] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }
    fetchDashboard()
  }, [isAuthenticated, navigate])

  const fetchDashboard = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem('access_token')
      const res = await fetch('http://localhost:8000/command-center/dashboard', {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()
      setStats(data.stats)
    } catch (error) {
      console.error('Failed to fetch dashboard:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddTask = async (e) => {
    e.preventDefault()
    if (!newTask.trim()) return

    try {
      const token = localStorage.getItem('access_token')
      const res = await fetch('http://localhost:8000/command-center/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: newTask,
          status: 'todo',
        }),
      })

      if (res.ok) {
        const task = await res.json()
        setTasks([task, ...tasks])
        setNewTask('')
      }
    } catch (error) {
      console.error('Failed to add task:', error)
    }
  }

  const handleDeleteTask = async (taskId) => {
    try {
      const token = localStorage.getItem('access_token')
      const res = await fetch(`http://localhost:8000/command-center/tasks/${taskId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })

      if (res.ok) {
        setTasks(tasks.filter((t) => t._id !== taskId))
      }
    } catch (error) {
      console.error('Failed to delete task:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Command Center</h1>

        {/* Stats Grid */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-gray-600 text-sm">Total Blueprints</div>
              <div className="text-3xl font-bold text-gray-900">{stats.total_blueprints}</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-gray-600 text-sm">Active</div>
              <div className="text-3xl font-bold text-primary-500">{stats.active_blueprints}</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-gray-600 text-sm">Total Tasks</div>
              <div className="text-3xl font-bold text-gray-900">{stats.total_tasks}</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-gray-600 text-sm">Pending</div>
              <div className="text-3xl font-bold text-accent-500">{stats.pending_tasks}</div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Task Manager */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tasks</h2>

            {/* Add Task Form */}
            <form onSubmit={handleAddTask} className="flex gap-2 mb-6">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
              />
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-6 rounded-lg transition"
              >
                Add
              </button>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.length === 0 && (
                <p className="text-gray-500 py-8 text-center">No tasks yet</p>
              )}
              {tasks.map((task) => (
                <div key={task._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{task.title}</p>
                    <p className="text-xs text-gray-500">{task.status}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteTask(task._id)}
                    className="text-red-600 hover:text-red-700 text-sm"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>

            <div className="space-y-3">
              <button
                onClick={() => navigate('/blueprints/create')}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                New Blueprint
              </button>
              <button
                onClick={() => navigate('/websites')}
                className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Create Website
              </button>
              <button
                onClick={() => navigate('/email')}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Email Campaign
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
