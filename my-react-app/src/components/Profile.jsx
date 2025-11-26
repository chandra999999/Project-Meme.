import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';

const Profile = () => {
  const { user } = useAuth();
  const [description, setDescription] = useState("");

  if (!user) {
    return <p style={{ textAlign: "center", marginTop: "50px", color: "#ef4444" }}>Please login to view profile.</p>;
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "40px",
        borderRadius: "20px",
        background: "linear-gradient(135deg, #f0f4ff, #e0f7fa)",
        boxShadow: "0 12px 28px rgba(0, 0, 0, 0.15)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#1f2937",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "30px",
          color: "#1e3a8a", // dark blue
        }}
      >
        Profile
      </h2>

      <div style={{ marginBottom: "18px", fontSize: "16px" }}>
        <strong style={{ color: "#2563eb" }}>Name:</strong> {user.name}
      </div>
      <div style={{ marginBottom: "18px", fontSize: "16px" }}>
        <strong style={{ color: "#2563eb" }}>Email:</strong> {user.email}
      </div>
      <div style={{ marginBottom: "18px", fontSize: "16px" }}>
        <strong style={{ color: "#2563eb" }}>Followers:</strong> 0
      </div>

      <div style={{ marginTop: "24px" }}>
        <label style={{ display: "block", fontWeight: "600", color: "#1e3a8a", marginBottom: "10px" }}>
          About Me:
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write something about yourself..."
          style={{
            width: "100%",
            minHeight: "120px",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #3b82f6",
            fontSize: "15px",
            resize: "vertical",
            background: "#ffffff",
            boxShadow: "inset 0 3px 6px rgba(0,0,0,0.05)",
            color: "#1f2937",
          }}
        />
      </div>
    </div>
  );
};

export default Profile;
