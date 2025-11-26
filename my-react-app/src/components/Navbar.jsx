import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 25px",
        background: "#1e1e1e",
        color: "white",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: 500 }}>
          Home
        </Link>
        <Link to="/dashboard" style={{ color: "white", textDecoration: "none", fontWeight: 500 }}>
          Dashboard
        </Link>
        <Link to="/profile" style={{ color: "Green", textDecoration: "none", fontWeight: 500 }}>
          Profile
        </Link>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {user ? (
          <>
            <span>👤 Hello, <b>{user.name}</b></span>
            <button
              onClick={handleLogout}
              style={{
                padding: "8px 14px",
                background: "#ff4b4b",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
