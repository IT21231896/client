import './EmailContact.css';
import Sidebar from './SideBar';

function EmailContact() {


    return (
        <div className="contact-container">
            <Sidebar />
            <div className='contact-content'>
                <h2>Contact Via G-mail</h2>
                <p>
                    Click the button below to open Gmail:
                </p>
                <a 
                    href="https://mail.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="gmail-button"
                >
                    Open Gmail
                </a>
            </div>
        </div>
    );
}

export default EmailContact;