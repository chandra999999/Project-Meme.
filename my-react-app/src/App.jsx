import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


import Dashboard from "./components/Dashboard.jsx";
import LoginPage from "./components/LoginPage.jsx";
import RegisterPage from './components/RegisterPage.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import Profile from './components/Profile.jsx';
import Navbar from './components/Navbar.jsx';
function App() {
 
  return (
    //this auth provider will provide the data
    //and to use this data or acess this data we have to use th auth function from AuthContext.jsx
    <AuthProvider> 
    <Router>
      <Navbar />
      <Routes>
        {/* Need to conditionally render this home page and redirect to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
    </Router>
    </AuthProvider>
   
  )
}

export default App
