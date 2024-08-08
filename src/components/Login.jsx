import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (data.access_token) {
        onLogin(data.access_token);
        navigate("/admin");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      alert("An error occurred");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <button onClick={() => navigate("/register")}>Register here</button></p>
    </div>
  );
}

export default Login;
