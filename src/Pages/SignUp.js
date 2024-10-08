import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import "./Common.css";

import logo from '../assets/logo.png';

function SignUp() {

  const [values, setValues] = useState({
    email: '',
    contact_name: '',
    website_address: '',
    password: '',
    confirmPassword: '',
    account_type: '',
    company_name: '',
    address: '',
    work_phone_number: '',
    cell_phone_number: ''
  });

  const navigate = useNavigate();

  // State for handling success or error messages for password match
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    // Check if passwords match
    if (values.password !== values.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // Create a copy of values without the confirmPassword field
    const { confirmPassword, ...dataToSubmit } = values;

    axios.post('/add_user', dataToSubmit)
      .then((res) => {
        navigate('/dashboard');
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="sign-up">
      <div className="logo-section1">
        <img src={logo} alt="Logo" className="logo1" />
      </div>
      <h3 className="center-texts">Client Account Creation</h3>
      <form onSubmit={handleSubmit}>
        <select
          style={{ height: '40px', marginBottom: '15px' }}
          onChange={(e) => setValues({ ...values, account_type: e.target.value })}
          required
        >
          <option value="">Account Type</option>
          <option value="Business">Business</option>
          <option value="Personal">Personal</option>
        </select>

        <input
          type="text"
          placeholder="User Name"
          onChange={(e) => setValues({ ...values, contact_name: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Company Name"
          onChange={(e) => setValues({ ...values, company_name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Address"
          onChange={(e) => setValues({ ...values, address: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Work Phone Number"
          onChange={(e) => setValues({ ...values, work_phone_number: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Cell Phone Number"
          onChange={(e) => setValues({ ...values, cell_phone_number: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Web Site Address"
          onChange={(e) => setValues({ ...values, website_address: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="New Password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
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
