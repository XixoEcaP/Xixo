import React from 'react';
import Game from './Game';
import './App.css';
import MusicProvider from './MusicProvider';

const App = () => {
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

