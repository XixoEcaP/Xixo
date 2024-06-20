import React from 'react';
import './Projects.css'; // Import the CSS file for styling

const projects = [
    { name: 'Rick and Morty', description: 'Rick and Morty characters', tech: 'React,JS,HTML,CSS', link: 'https://xixoecap.github.io/Rick-Morty/' },
    { name: 'PokemonCards', description: 'Random card generator', tech: 'Vue,Vite,JS,HTML,CSS', link: 'https://xixoecap.github.io/PokemonCards/' },
    { name: 'ReactEx', description: 'Task manager and portfolio page', tech: 'React,JS,HTML,CSS', link: 'https://xixoecap.github.io/ReactEx/' },
    { name: 'JavaScriptEx', description: '4 Projects To-Do-List, Color Generator, Images Carousel and Spot Finder', tech: 'JS,HTML,CSS', link: 'https://xixoecap.github.io/JavaScriptEx/' },
    { name: 'Zen Masters', description: 'Web site during hackathon', tech: 'JS,HTML,CSS', link: 'https://xixoecap.github.io/ZenMasters/' },
    { name: 'Car Crash with Ambulance', description: 'Car crash exercise with a revival ambulance', tech: 'Java', link: 'https://github.com/XixoEcaP/CarCrashXixo' },
    { name: 'Bootcamp Adventure', description: 'Games week game during the bootcamp', tech: 'Java', link: 'https://xixoep.itch.io/bootcamp-adventures' },
    { name: 'GuessThePokemon', description: 'Guess the pokemon Game', tech: 'JS,HTML,CSS', link: 'https://xixoecap.github.io/GuessThePokemon/' },
];


const Projects = ({ goBack }) => {
    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <ul>
                {projects.map((project, index) => (
                    <li key={index} className="project-item">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <p><strong>Tech:</strong> {project.tech}</p>
                        <button onClick={() => window.open(project.link, '_blank')} className="project-button">Visit Project</button>
                    </li>
                ))}
            </ul>
            <button onClick={goBack} className="back-button">Exit</button>
        </div>
    );
};

export default Projects;



