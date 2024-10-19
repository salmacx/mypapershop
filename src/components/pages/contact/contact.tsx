import React from 'react';
import './Contact.css'; 

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Welcome to my Paper Shop ⁀➷</h1>
            <div className="video-container">
                <video
                    autoPlay
                    loop
                    muted
                    controls
                >
                    <source src="src/assets/welcome.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Contact;
