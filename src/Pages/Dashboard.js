import React from 'react';
import './Dashboard.css';
import Sidebar from './SideBar'; // Assuming Sidebar.js is in the same directory


function Dashboard() {
    return (
        <div className="dashboard">
            <Sidebar />  {/* add sidebar component*/}
            
            <h1>Welcome to Client Dashboard</h1>
            
        </div>
    );
}

export default Dashboard;
