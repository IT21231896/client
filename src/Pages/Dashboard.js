import React from 'react';
import './Dashboard.css';
import Sidebar from './SideBar'; // Assuming Sidebar.js is in the same directory

function Dashboard() {
    const containerStyle = {
        padding: '20px',
        lineHeight: '1.6',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
    };

    const sectionTitleStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        margin: '10px 0',
        color: '#0066cc',
    };

    const textStyle = {
        marginBottom: '15px',
        fontSize: '16px',
    };

    const listStyle = {
    };

    return (
        <div className="page-container">
            <div className="header-section">
                {/* Header can be added here */}
            </div>
            <div className="dashboard">
                <Sidebar /> {/* Sidebar component */}
                <div className="dashboard-content">
                    <div className="charts">
                        <h1>Welcome to Client Dashboard</h1>
                        <img
                            src="https://www.intotheminds.com/blog/app/uploads/user-engagement.jpg"
                            className="chart-placeholder"
                            alt="Client Engagement"
                            style={{ width: '100%', borderRadius: '10px' }}
                        />
                        
                    </div>

                    <div style={containerStyle}>
                        {/* Overview Section */}
                        <h2 style={sectionTitleStyle}>Overview</h2>
                        <p style={textStyle}>
                            At Gamage Recruiters, we are passionate about bridging the gap between emerging market talent and global organizational needs. Our mission is to provide tailored local solutions with a global reach, helping companies find the right talent while nurturing leadership potential. We are driven by the values of professionalism, honesty, and integrity in everything we do.
                        </p>

                        {/* Our Mission Section */}
                        <h2 style={sectionTitleStyle}>Our Mission</h2>
                        <p style={textStyle}>
                            Our mission is to showcase emerging market talent globally to provide a genuinely local solution to organizational needs.
                        </p>

                        {/* Our Vision Section */}
                        <h2 style={sectionTitleStyle}>Our Vision</h2>
                        <p style={textStyle}>
                            We aspire to be the premier choice for all human resource and business solutions. By extending our services across borders, we tap into a broad spectrum of talent from emerging countries and industries, providing diversity in the workplace and ensuring companies find the leadership talent they need.
                        </p>

                        {/* Our Services Section */}
                        <h2 style={sectionTitleStyle}>Our Services</h2>
                        
                        <h4 style={textStyle}>Headhunting</h4>
                        <h4 style={textStyle}>Professional Resume Writing</h4>
                        <h4 style={textStyle}>Interview Preparation</h4>
                        <h4 style={textStyle}>HR Consultancy</h4>
                        
                    </div>
                </div>
            </div>
            <div className="footer-section">
                {/* Footer can be added here */}
            </div>
        </div>
    );
}

export default Dashboard;
