import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './SideBar';
import './Contact.css';

function Contact() {
  const [emailAddresses, setEmailAddresses] = useState('');
  const [message, setMessage] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const [loading, setLoading] = useState(false); // State for loading

  useEffect(() => {
    // Fetch logged-in user's info
    const registerId = localStorage.getItem('registerId');
    axios.get(`/get_user_info?registerId=${registerId}`)
      .then((res) => {
        setUserEmail(res.data.email);
        setUserName(res.data.contact_name || res.data.company_name); // Adjust based on your data
      })
      .catch((err) => console.error('Error fetching user info:', err));
  }, []);

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    try {
      const response = await axios.post('/send_emails', {
        fromEmail: userEmail,
        fromName: userName,
        toEmails: emailAddresses.split(',').map(email => email.trim()), // Ensure emails are trimmed
        message,
      });

      // Set the success message
      const recipientEmails = emailAddresses.split(',').map(email => email.trim()).join(', ');
      setSuccessMessage(`Emails sent successfully to ${recipientEmails}`);
      
      // Clear the input fields
      setEmailAddresses('');
      setMessage('');

      // Hide the success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);

    } catch (err) {
      console.error('Error sending emails:', err);
      alert('Failed to send emails');
    } finally {
      setLoading(false); // Reset loading to false after request completion
    }
  };

  return (
    <div className="page-container">
      <div className="header-section">
        <h1>Contact the Admin</h1>
      </div>
      <div className="contact-container">
        <Sidebar />
        <div className="contact-content">
          <div className="send-message">
            <h2>Send Email</h2>
            <form onSubmit={handleSendEmail}>
              <div>
                <label>To (Multiple Emails): </label>
                <input
                  type="text"
                  placeholder="Enter comma-separated emails"
                  value={emailAddresses}
                  onChange={(e) => setEmailAddresses(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Message: </label>
                <textarea
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" disabled={loading}>
                {loading ? (
                  <span className="spinner"></span> // Spinner for loading
                ) : (
                  'Send Email'
                )}
              </button>
            </form>
            {/* Show success message */}
            {successMessage && <div className="success-message">{successMessage}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
