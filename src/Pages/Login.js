import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Common.css";
import logo from '../assets/logo.png';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!email || !password) {
      setErrorMessage("Please fill in all the fields.");
      return;
    }

    // Make API call to login
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        localStorage.setItem('registerId', data.user.registerId); // get the userId and save it to localstorage
        console.log('registerId : ', data.user.registerId );
        
        navigate('/dashboard');
      } else {
        setErrorMessage(data.message); // Use errorMessage state
      }
    })
    .catch(error => {
      console.error('Error:', error);
      setErrorMessage('Login failed. Please try again.');
    });
  };

  return (
    <div className="login">
      <div className="logo-section1">
        <img src={logo} alt="Logo" className="logo1" />
      </div>
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
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="center-links">
        <Link className="forgot-password" to="/forgot-password">Forgot Password</Link>
        <Link className="create-account" to="/signup">Create New Account</Link>
      </div>
    </div>
  );
}

export default Login;
