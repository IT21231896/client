import React from 'react';
import { NavLink, useNavigate  } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {

    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/'); //navigte to login page
    };

    return (
        <aside className="sidebar">
            <div className="logo">CMS</div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/dashboard" activeClassName="active-link">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tasks" activeClassName="active-link">Tasks</NavLink>
                    </li>
                    <li>
                        <NavLink to="/invoices" activeClassName="active-link">Invoices</NavLink>
                    </li>
                    <li>
                        <NavLink to="/payment" activeClassName="active-link">Payment</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/change-password" activeClassName="active-link">Change Password</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="sidebar-footer">
                <div className="profile">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPbPbwHLJsKJj5ojtAW22bbuOzUxSt6C15Q&s" alt="Profile" className="profile-img" />
                    <span>Azar Azee</span>
                </div>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
        </aside>
    );
}

export default Sidebar;
