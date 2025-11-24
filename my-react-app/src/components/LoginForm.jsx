// LoginForm.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
   

    try {
      const res = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });

      console.log("Login Success:", res.data);

      alert("Login Successful!");
    } catch (err) {
      setError("Invalid credentials");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <button
        type="submit"
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          background: "#3b82f6",
          color: "white",
          cursor: "pointer",
        }}
      >
        Login
      </button>

   
      <p style={{ textAlign: "center", fontSize: "14px", marginTop: "10px" }}>
        Don't have an account? 
        <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default LoginForm;
