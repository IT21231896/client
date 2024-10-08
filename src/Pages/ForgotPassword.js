import React, { useState } from "react";
import "./Common.css";

import logo from '../assets/logo.png';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [cell_phone_number, setCellPhoneNumber] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();//for navigation the page

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic here

    //check the new password and conform password match or not
    if(newPassword !== confirmPassword){
      setMessage("Password do not match");
      console.log("Password do not match");
      return;
    }

    //prepare the request body as json object formet
    const data = {
      email,
      cell_phone_number,
      newPassword
    }

    //api request for validate the credentials and reset the password
    axios.post('/reset_password', data)
      .then((res) => {
        setMessage("Password Successfully Updated.");
        console.log("Password Successfully Updated.");
        
        navigate('/'); // navigate to login page
      })
      .catch((err) => {
        setMessage("Something went wrong, check your credentials and please try again.")
        console.log("Something went wrong");
      });
  };

  return (
    <div className="change-password">
      <div className="logo-section1">
        <img src={logo} alt="Logo" className="logo1" />
      </div>
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
          type="cell_phone_number"
          placeholder="Enter your Phone No"
          value={cell_phone_number}
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
      {message && <p className="error-message">{message}</p>}
      <div className="center-links">
        <a className="forgot-password" href="/signup">Register</a>
        <a className="back-to-home" href="/">Back to Login</a>
      </div>
    </div>
  );
}

export default ForgotPassword;
