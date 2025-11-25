import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
        alert("Please login to access the dashboard.");
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Dashboard 🎉</h1>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
