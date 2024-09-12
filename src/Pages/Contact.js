import React, { useState } from 'react';
import './Contact.css';
import Sidebar from './SideBar';

function Contact() {
    const [messages, setMessages] = useState([]); // State to store messages
    const [messageText, setMessageText] = useState(''); // State for new message input

    // Function to handle sending a message
    const handleSendMessage = () => {
        if (messageText.trim() !== '') {
            setMessages([...messages, { id: Date.now(), text: messageText }]);
            setMessageText('');
        }
    };

    // Function to handle deleting a message
    const handleDeleteMessage = (id) => {
        setMessages(messages.filter(message => message.id !== id));
    };

    return (
        <div className="page-container">
            <div className="header-section">
                <h1>Contact the Admin</h1>
            </div>
            <div className="contact-container">
                <Sidebar />
                <div className='contact-content'>
                    <div className="send-message">
                        <h2>Send Message to Admin</h2>
                        <textarea
                            placeholder="Type your message here..."
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                        /><br/>
                        <button onClick={handleSendMessage}>Send</button>
                    </div>

                    <div className="received-messages">
                        <h2>Received Messages</h2>
                        {messages.length === 0 ? (
                            <p>No messages received.</p>
                        ) : (
                            <ul>
                                {messages.map((message) => (
                                    <li key={message.id}>
                                        <span>{message.text}</span>
                                        <button onClick={() => handleDeleteMessage(message.id)}>Delete</button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    
                </div>
            </div>
            <div className="footer-section"></div>
        </div>
    );
}

export default Contact;
