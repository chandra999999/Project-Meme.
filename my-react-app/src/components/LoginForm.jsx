// LoginForm.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      setMsg(response.data.message);
      login(response.data.token, response.data.user);
      navigate("/dashboard");
      console.log("Login Success:", response.data);
    } catch (error) {
      console.error("Login failed:", error);
      setMsg("Login failed. Please check your credentials.");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "30px",
        borderRadius: "12px",
        background: "#ffffff",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        maxWidth: "400px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "28px", fontWeight: "600", color: "#1f2937" }}>
        Login
      </h2>

      {msg && (
        <p style={{ color: "red", textAlign: "center", fontSize: "14px", margin: 0 }}>
          {msg}
        </p>
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
          outline: "none",
          fontSize: "14px",
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
          outline: "none",
          fontSize: "14px",
        }}
      />

      <button
        type="submit"
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          background: "#3b82f6",
          color: "white",
          fontWeight: "600",
          cursor: "pointer",
          fontSize: "16px",
          transition: "background 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = "#2563eb")}
        onMouseOut={(e) => (e.currentTarget.style.background = "#3b82f6")}
      >
        Login
      </button>

      <p style={{ textAlign: "center", fontSize: "14px", color: "#6b7280" }}>
        Don't have an account?{" "}
        <Link
          to="/register"
          style={{
            color: "#3b82f6",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
