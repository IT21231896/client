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

            </div>
        </div>
    );
}

export default ChangePassword;
