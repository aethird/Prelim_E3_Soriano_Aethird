import React from "react";
import UserInfo from "./UserInfo";
import ProfilePicture from "./ProfilePicture";

export default function Profile({ user, setUser }) {
  const handleNameChange = (e) => {
    setUser((prevUser) => ({ ...prevUser, fullName: e.target.value }));
  };

  return (
    <div className="card p-4 shadow">
      <ProfilePicture />
      <UserInfo user={user} />

      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          value={user.fullName}
          onChange={handleNameChange}
        />
      </div>
    </div>
  );
}
