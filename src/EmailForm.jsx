import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './EmailForm.css';

const EmailForm = ({ handleClose }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send('service_02t3b4z', 'template_71895xq', {
            from_name: email,
            message: message,
            reply_to: email,
        }, '_fw2JbHUYOvotBuj9')
            .then((result) => {
                console.log(result.text);
                handleClose();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="email-form-container">
            <form onSubmit={sendEmail}>
                <label>Your Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Your Message:</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Send Email</button>
                <button type="button" onClick={handleClose}>Cancel</button>
            </form>
        </div>
    );
};

export default EmailForm;