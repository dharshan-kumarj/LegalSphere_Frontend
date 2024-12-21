import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        {/* <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  )
}

export default App
