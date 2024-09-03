import React from 'react';
import './Dashboard.css';
import Sidebar from './SideBar'; // Assuming Sidebar.js is in the same directory


function Dashboard() {
    return (
        <div className="dashboard">
            <Sidebar />  {/* add sidebar component*/}
            
            <h1>Welcome to Client Dashboard</h1>
            <div className="dashboard-content">
                {/* Overview Cards */}
                <div className="overview-cards">
                    <div className="card">
                        <h3>Total Clients</h3>
                        <p>150</p>
                    </div>
                    <div className="card">
                        <h3>Pending Tasks</h3>
                        <p>24</p>
                    </div>
                    <div className="card">
                        <h3>Invoices Sent</h3>
                        <p>85</p>
                    </div>
                    <div className="card">
                        <h3>Payments Received</h3>
                        <p>$20,000</p>
                    </div>
                </div>

                {/* Recent Activities */}
                <div className="recent-activities">
                    <h2>Recent Activities</h2>
                    <ul>
                        <li>Client John Doe signed a contract - 2 hours ago</li>
                        <li>Invoice #102 sent to Acme Corp - 4 hours ago</li>
                        <li>Payment of $500 received from XYZ Ltd - Yesterday</li>
                        <li>New task assigned to Sarah Johnson - 2 days ago</li>
                    </ul>
                </div>

                {/* Charts Section */}
                <div className="charts">
                    <h2>Client Engagement</h2>
                    {/* Placeholder for a chart */}
                    <div className="chart-placeholder">[Chart]</div>
                </div>

                {/* Quick Links */}
                <div className="quick-links">
                    <h2>Quick Links</h2>
                    <div className="link-buttons">
                        <button onClick={() => console.log('Navigate to Add Client')}>Add New Client</button>
                        <button onClick={() => console.log('Navigate to Create Invoice')}>Create Invoice</button>
                        <button onClick={() => console.log('Navigate to View Tasks')}>View Tasks</button>
                        <button onClick={() => console.log('Navigate to Payments')}>Manage Payments</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
