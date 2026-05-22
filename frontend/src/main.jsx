import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import BlueprintPage from './pages/BlueprintPage'
import BlueprintCreatePage from './pages/BlueprintCreatePage'
import BlueprintDetailPage from './pages/BlueprintDetailPage'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/blueprints" element={<BlueprintPage />} />
        <Route path="/blueprints/create" element={<BlueprintCreatePage />} />
        <Route path="/blueprints/:id" element={<BlueprintDetailPage />} />
        <Route path="/dashboard" element={<Navigate to="/blueprints" />} />
        <Route path="/" element={<Navigate to="/blueprints" />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
