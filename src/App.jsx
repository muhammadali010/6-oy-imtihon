import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./components/Admin";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin"
          element={token ? <Admin onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
