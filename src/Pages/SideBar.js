import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import NavLink for navigation
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import './Sidebar.css'; // Import the Sidebar CSS

// Import images from assets
import logo from '../assets/logo.png';
import profileImage from '../assets/profile-image.png';

const SideBar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/'); //navigte to login page
    };

  return (
    <div className="sidebar">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="profile-section">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="icon-section">
          <NavLink to="#" className="bi bi-person-circle icon" style={{ marginRight: '14px' }}></NavLink> {/* Profile Icon */}
          <NavLink to="#" className="bi bi-gear icon" style={{ marginRight: '10px' }}></NavLink> {/* Settings Icon */}
          <NavLink to="/" className="bi bi-power icon"></NavLink>{/* Logout Icon */}  
        </div>
      </div>
      <ul className="sidebar-list">
        <li>
          <NavLink to="/dashboard" activeClassName="active-link">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="#" activeClassName="active-link">Tasks</NavLink>
        </li>
        <li>
          <NavLink to="#" activeClassName="active-link">Invoices</NavLink>
        </li>
        <li>
          <NavLink to="#" activeClassName="active-link">Payment</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
        </li>
      </ul>
        <div className="sidebar-footer">
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
    </div>
  );
};

export default SideBar;