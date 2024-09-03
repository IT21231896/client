import React, { useState } from "react";
import "./Common.css";
function SignUp() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [workPhoneNumber, setWorkPhoneNumber] = useState("");
  const [cellPhoneNumber, setCellPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle account creation logic here
  };

  return (
    <div className="sign-up">
      <h2 style={{textAlign: 'center', color: '#008CBA', fontSize: '30px', fontWeight: 'bold'}}>
        CMS
      </h2>
      <h3 className="center-texts">Client Account Creation</h3>
      <form onSubmit={handleSubmit}>
        <select
          style={{ height: '40px', marginBottom: '15px' }}
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
          required
        >
          <option value="">Account Type</option>
          <option value="Business">Business</option>
          <option value="Personal">Personal</option>
        </select>

        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Work Phone Number"
          value={workPhoneNumber}
          onChange={(e) => setWorkPhoneNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Cell Phone Number"
          value={cellPhoneNumber}
          onChange={(e) => setCellPhoneNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Web Site Address"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Create Account</button>
      </form>
      <div className="center-links">
        <a className="forgot-password" href="/forgot-password">Forgot Password</a>
        <a className="back-to-home" href="/">Back to Login</a>
      </div>
    </div>
  );
}

export default SignUp;

