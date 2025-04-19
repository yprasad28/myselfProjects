import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";

function App() {

 return(
  <Router>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/dash" element={<Dashboard  />} />
    </Routes>
  </Router>
 )
}

export default App;
