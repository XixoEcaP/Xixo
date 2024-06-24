import React, { useState, useEffect } from 'react';
import './SpotifyEmbed.css'; // Import the CSS file for styling

const SpotifyEmbed = ({ goBack }) => {
    const [tracks, setTracks] = useState([]);

    /*
    useEffect(() => {
        const fetchAccessToken = async () => {
            try {
                const response = await fetch('http://localhost:3001/access_token');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setAccessToken(data.access_token);
            } catch (error) {
                console.error('Error fetching access token:', error);
                setTracks(null); // Use null if fetching access token fails
            }
        };

        fetchAccessToken();
    }, []);

    useEffect(() => {
        if (accessToken) {
            const fetchTracks = async () => {
                try {
                    const response = await fetch('https://api.spotify.com/v1/albums/3oQQujaOCNyOu15aLMsIiO/tracks', {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    setTracks(data.items);
                } catch (error) {
                    console.error('Error fetching tracks:', error);
                    setTracks(null); // Use null if fetching tracks fails
                }
            };

            fetchTracks();
        }
    }, [accessToken]);
    */

    return (
        <div className="spotify-embed-container">
            <h1>Music Releases</h1>
            <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/album/3oQQujaOCNyOu15aLMsIiO?utm_source=generator"
                width="100%"
                height="500" // Adjust the iframe height as needed
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







