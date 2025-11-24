import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";



import LoginPage from './components/LoginForm.jsx';
import RegisterPage from './components/RegisterPage.jsx';
function App() {
 
  return (
    
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
    </Router>
   
  )
}

export default App
