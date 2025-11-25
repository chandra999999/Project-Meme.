import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


import Dashboard from "./components/Dashboard.jsx";
import LoginPage from "./components/LoginPage.jsx";
import RegisterPage from './components/RegisterPage.jsx';
function App() {
 
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
    </Router>
   
  )
}

export default App
