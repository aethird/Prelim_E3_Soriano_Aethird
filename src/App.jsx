import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import "./theme.css"; // For dark mode styling

export default function App() {
  const [user, setUser] = useState({
    fullName: "Aethird Soriano",
    username: "Aethird",
    bio: "I love my GF",
    email: "aethirdx12@gmail.com",
    location: "Carmona, Cavite",
    joinDate: "March 8, 2025",
    profilePicture: "", // Placeholder used in ProfilePicture.jsx
    settings: {
      darkMode: false,
    },
  });

  return (
    <div className={user.settings.darkMode ? "dark-mode" : ""}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Prelim E3
          </Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
            <Link className="nav-link" to="/settings">
              Settings
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={<Profile user={user} setUser={setUser} />}
          />
          <Route
            path="/settings"
            element={<Settings user={user} setUser={setUser} />}
          />
        </Routes>
      </div>
    </div>
  );
}
