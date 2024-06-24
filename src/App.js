import React, { useEffect, useState } from 'react';
import Game from './Game';
import './App.css';
import MusicProvider, { useMusic } from './MusicProvider';

const App = () => {
    const { toggleMusic } = useMusic();
    const [hasToggledMusic, setHasToggledMusic] = useState(false);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if ((event.key === 'p' || event.key === 'P') && !hasToggledMusic) {
                toggleMusic();
                setHasToggledMusic(true);
            }
        };

        const handleClick = () => {
            if (!hasToggledMusic) {
                toggleMusic();
                setHasToggledMusic(true);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener('click', handleClick);
        };
    }, [toggleMusic, hasToggledMusic]);

    return (
        <div id="game-container">
            <Game />
        </div>
    );
};

const AppWrapper = () => (
    <MusicProvider>
        <App />
    </MusicProvider>
);

export default AppWrapper;
