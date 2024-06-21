import React from 'react';
import './Projects.css'; // Import the CSS file for styling

const games = [
    { name: 'PokeFootball Demo', description: 'Pokemon Football game still in production', tech: 'React,JS,HTML,CSS', link: 'https://xixoecap.github.io/PokeFootballDemo/' },
    { name: 'Bootcamp Adventure', description: 'Games week game during the bootcamp', tech: 'Java', link: 'https://xixoep.itch.io/bootcamp-adventures' },
    { name: 'GuessThePokemon', description: 'Guess the pokemon Game', tech: 'JS,HTML,CSS', link: 'https://xixoecap.github.io/GuessThePokemon/' },
];

const Games = ({ goBack }) => {
    return (
        <div className="projects-container">
            <h1>Games</h1>
            <ul>
                {games.map((game, index) => (
                    <li key={index} className="project-item">
                        <h2>{game.name}</h2>
                        <p>{game.description}</p>
                        <p><strong>Tech:</strong> {game.tech}</p>
                        <button onClick={() => window.open(game.link, '_blank')} className="project-button">Visit Game</button>
                    </li>
                ))}
            </ul>
            <button onClick={goBack} className="back-button">Exit</button>
        </div>
    );
};

export default Games;
