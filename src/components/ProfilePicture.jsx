import React from "react";

export default function ProfilePicture() {
  return (
    <div className="text-center">
      <div
        className="rounded-circle bg-secondary d-flex align-items-center justify-content-center"
        style={{ width: "100px", height: "100px" }}
      >
        <span className="text-white">👤</span>
      </div>
    </div>
  );
}
