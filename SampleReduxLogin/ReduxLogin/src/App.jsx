import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';

import LoginForm from './components/LoginForm/LoginForm';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>im redux</h1>
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard  />} />
      </Routes>
     </Router>
 
    </>
  )
}

export default App
