import React from 'react';
import './Bio.css'; // Import the CSS file for styling

const Bio = () => {
    return (
        <div className="bio-container">
            <h1 id = "title" >Francisco Eça</h1>
            <img src={process.env.PUBLIC_URL + '/assets/profile.png'} alt="Profile" className="profile-photo" />
            <p>
    🎸 By day, I excelled in management and customer support, ensuring smooth operations for a programming bootcamp. As the sun set, I transformed into a dedicated musician, playing bass and performing with my band.
</p>
<p>
    With a background in managing customer support and a knack for problem-solving and communication, I decided to take on a new challenge. After completing a programming bootcamp myself, I am now looking to transition into a career in development.
</p>
<p>
    Equipped with hands-on coding experience and a strong foundation in business acumen, I'm eager to bring my unique skills to the tech world.
</p>
<p>
    Let's create innovative solutions and achieve new successes together – both in the digital realm and beyond!
</p>

            <div className="buttons">
                <button id = "gith" onClick={() => window.open('https://github.com/XixoEcaP', '_blank')}>GitHub</button>
                <button id = "linkd" onClick={() => window.open('https://www.linkedin.com/in/francisco-e%C3%A7a-8740b2209/', '_blank')}>LinkedIn</button>
                <button onClick={() => window.location.href = 'mailto:franciscopinheiro@gmail.com'}>Email Me</button>
            </div>
            <h2>Contact</h2>
            <p><strong>Phone:</strong> +351 91 44 33 135 </p>
            <p><strong>Phone:</strong>  franciscopinheiro@gmail.com</p>
        
        </div>
    );
};

export default Bio;


