import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { token, logout } = useAuth();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div
      style={{
        marginTop: "60px", // height of navbar
       
        display: "flex",
        
       
        padding: "20px",
        background: "#00be3cff",
      }}
    >
      <h1 style={{ fontSize: "32px", fontWeight: 600, marginBottom: "20px" }}>
        Welcome to Dashboard 🎉
      </h1>
    </div>
  );
};

export default Dashboard;
