import React, { useEffect, useRef } from 'react';
import Game from './Game';
import './App.css';

const App = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'm' || event.key === 'M') {
                if (audioRef.current.paused) {
                    audioRef.current.play();
                } else {
                    audioRef.current.pause();
                }
            }
        };

        const handleUserInteraction = () => {
            if (audioRef.current.paused) {
                audioRef.current.play();
            }
            window.removeEventListener('click', handleUserInteraction);
            window.removeEventListener('keydown', handleUserInteraction);
        };

        window.addEventListener('keydown', handleKeyPress);
        window.addEventListener('click', handleUserInteraction);
        window.addEventListener('keydown', handleUserInteraction);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener('click', handleUserInteraction);
            window.removeEventListener('keydown', handleUserInteraction);
        };
    }, []);

    const toggleMusic = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    return (
        <div id="game-container">
            <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/assets/music.mp3`} autoPlay />
            <Game toggleMusic={toggleMusic} />
        </div>
    );
};

export default App;


