import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './LoginForm/LoginForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './SignupForm/SignupForm'
import Dashboard from './Dashboard/Dashboard'

function App() {
  

  return (
    <div>
     <Router>
       <Routes>
        <Route path="/" element={<LoginForm />} />
        {/* <Route path="/signup" element={<SignupForm />}/> */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
     </Router>
    </div>
  )
}

export default App
