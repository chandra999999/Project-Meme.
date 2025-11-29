import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext.jsx";
import "./Profile.css";
 // Import the external CSS

const API_URL = "http://localhost:5000/api";

const Profile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Fetch profile on mount
  useEffect(() => {
    if (!user) return;

    async function loadProfile() {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_URL}/profile/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
        setDescription(res.data.description || "");
      } catch (err) {
        console.error("Error loading profile:", err);
      }
    }
    loadProfile();
  }, [user]);

  // Update Profile
  const handleUpdate = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `${API_URL}/profile/update`,
        { description },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setProfile(res.data.profile);
      setIsEditing(false);
      
      // Success toast
      showToast("Profile updated successfully! ✨", "success");
    } catch (err) {
      console.error("Update error:", err);
      showToast("Error updating profile. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  // Toast notification helper
  const showToast = (message, type) => {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.className = `toast toast-${type}`;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add("show");
    }, 100);
    
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  };

  if (!user) {
    return (
      <div className="profile-page">
        <div className="profile-container">
          <div className="empty-state">
            <div className="empty-icon">👤</div>
            <h3>Please login to view your profile</h3>
            <p className="empty-subtitle">Sign in to update your personal information</p>
          </div>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="profile-page">
        <div className="profile-container">
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading your profile...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">👨‍💻</div>
            <h1 className="profile-title">{profile.user.name}</h1>
            <p className="profile-subtitle">{profile.user.email}</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">{profile.followers || 0}</span>
              <div className="stat-label">Followers</div>
            </div>
            <div className="stat-card">
              <span className="stat-number">{profile.following || 0}</span>
              <div className="stat-label">Following</div>
            </div>
          </div>

          <div className="about-section">
            <div className="section-title">About Me</div>

            {isEditing ? (
              <form onSubmit={handleUpdate}>
                <div className="textarea-container">
                  <textarea
                    className="profile-textarea"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Tell us about yourself, your passions, and what makes you unique..."
                    disabled={isLoading}
                  />
                </div>
                <div className="button-group">
                  <button 
                    type="submit" 
                    className={`btn btn-primary ${isLoading ? 'btn-loading' : ''}`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="btn-icon">⏳</span>
                        Saving...
                      </>
                    ) : (
                      <>
                        <span className="btn-icon">💾</span>
                        Save Changes
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setIsEditing(false);
                      setDescription(profile.description || "");
                    }}
                    disabled={isLoading}
                  >
                    <span className="btn-icon">↶</span>
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <>
                <div className="preview-text">
                  {description || "Write something about yourself to share with your followers..."}
                </div>
                <div className="button-group">
                  <button 
                    className="btn btn-primary"
                    onClick={() => setIsEditing(true)}
                  >
                    <span className="btn-icon">✏️</span>
                    Edit Profile
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
