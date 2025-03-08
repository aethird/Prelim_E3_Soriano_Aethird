import React from "react";

export default function Settings({ user, setUser }) {
  const toggleDarkMode = () => {
    setUser((prevUser) => ({
      ...prevUser,
      settings: { darkMode: !prevUser.settings.darkMode },
    }));
  };

  return (
    <div className="card p-4 shadow">
      <h2>Settings</h2>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="darkModeSwitch"
          checked={user.settings.darkMode}
          onChange={toggleDarkMode}
        />
        <label className="form-check-label" htmlFor="darkModeSwitch">
          Dark Mode
        </label>
      </div>
    </div>
  );
}
