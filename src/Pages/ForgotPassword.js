import React, { useState } from "react";
import "./Common.css";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [cellPhoneNumber, setCellPhoneNumber] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic here
  };

  return (
    <div className="change-password">
      <h2 className="center-texts">Client Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="cellPhoneNumber"
          placeholder="Enter your Phone No"
          value={cellPhoneNumber}
          onChange={(e) => setCellPhoneNumber(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      <div className="center-links">
        <a className="forgot-password" href="/signup">Register</a>
        <a className="back-to-home" href="/">Back to Login</a>
      </div>
    </div>
  );
}

export default ForgotPassword;
