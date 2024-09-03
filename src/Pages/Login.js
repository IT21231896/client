import React, { useState } from "react";
import "./Common.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login">
      <h2 style={{textAlign: 'center', color: '#008CBA', fontSize: '30px', fontWeight: 'bold'}}>
        CMS
      </h2>
      <h3 className="center-texts">Clients Sign in</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <div className="center-links">
      <a className="forgot-password" href="/forgot-password">Forgot Password</a>
      <a className="create-account" href="/signup">Create New Account</a>
      </div>
    </div>
  );
}

export default Login;
