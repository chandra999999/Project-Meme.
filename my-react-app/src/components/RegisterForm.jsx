import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
const handleRegister = async (e) => {
    e.preventDefault();
   

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name: username,
        email,
        password,
      });

      console.log("Register Success:", res.data);
      setMessage(res.data.message);
      alert("Registration Successful!");
    } catch (err) {
      
      console.error(err);
    } finally {
      
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      style={{ display: "flex", flexDirection: "column", gap: "15px" }}
    >
      <h2 style={{ textAlign: "center" }}>Register</h2>
      
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
      />

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
        Register
      </button>

      
      <p style={{ textAlign: "center", fontSize: "14px", marginTop: "10px" }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
