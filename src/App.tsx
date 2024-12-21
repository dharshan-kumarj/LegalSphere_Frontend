import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import AuthPage from './pages/AuthPage';
import LoginBox from './components/Auth/LoginBox';
import RegisterBox from './components/Auth/RegisterBox';
import DashboardPage from './pages/DashBoard';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginBox />} />
        <Route path="/register" element={<RegisterBox />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  )
}

export default App
