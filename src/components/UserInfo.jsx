import React from "react";

export default function UserInfo({ user }) {
  return (
    <div className="text-center">
      <h2>{user.fullName}</h2>
      <p className="text-muted">@{user.username}</p>
      <p>📍 {user.location}</p>
      <p>📧 {user.email}</p>
      <p>📅 Joined: {user.joinDate}</p>
      <p className="fw-bold">"{user.bio}"</p>
    </div>
  );
}
