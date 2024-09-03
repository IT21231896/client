import React, { useState } from 'react';
import './ChangePassword.css';
import Sidebar from './SideBar'; // Assuming Sidebar.js is in the same directory

function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePasswordChange = (e) => {
        e.preventDefault();
        // Handle password change logic here
        console.log('Password Changed');
    };

    return (
        <div className="change-password-container">
            <Sidebar />
            <div className="change-password-content">
                <h2>Change Password</h2>
                <form onSubmit={handlePasswordChange}>
                    <div className="form-group">
                        <label htmlFor="current-password">Current Password</label>
                        <input
                            type="password"
                            id="current-password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="new-password">New Password</label>
                        <input
                            type="password"
                            id="new-password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="save-button">Save</button>
                </form>
            </div>
        </div>
    );
}

export default ChangePassword;
