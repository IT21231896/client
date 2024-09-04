import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ForgotPassword from './Pages/ForgotPassword';
import ChangePassword from './Pages/ChangePassword';
import Contact from './Pages/Contact';
import EmailContact from './Pages/EmailContact';

import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication routes without the sidebar */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/emailservice' element={<EmailContact/>} />
      </Routes>
    </Router>
  );
}

export default App;
