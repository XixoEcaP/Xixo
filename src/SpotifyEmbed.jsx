import React from 'react';
import './SpotifyEmbed.css'; // Import the CSS file for styling

const SpotifyEmbed = ({ goBack }) => {
    return (
        <div className="spotify-embed-container">
            <h1>Music Releases</h1>
            <iframe
                title="Spotify Album"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/album/3oQQujaOCNyOu15aLMsIiO?utm_source=generator"
                width="100%"
                height="600" // Adjust the iframe height as needed
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
            <button onClick={goBack} className="back-button">Exit</button>
        </div>
    );
};

export default SpotifyEmbed;









