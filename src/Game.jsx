import React, { useEffect, useRef, useState } from 'react';
import Bio from './Bio';
import Projects from './Projects';
import Board from './Board';
import Games from './Games';
import EmailForm from './EmailForm';
import SpotifyEmbed from './SpotifyEmbed';
import { useMusic } from './MusicProvider';
import './App.css';

const tileSize = 32;
const characterSpriteSize = { width: 32, height: 48 };
const directions = { down: 0, left: 1, right: 2, up: 3 };

const walkableMap = [
    [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 2, 0, 1, 1, 1],
    [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const Game = ({ disableControls }) => {
    const canvasRef = useRef(null);
    const { toggleMusic } = useMusic();
    const [character, setCharacter] = useState({ x: 5, y: 5, direction: 'down', frame: 0 });
    const [showContent, setShowContent] = useState(null);
    const [showEmailForm, setShowEmailForm] = useState(false);

    const background = new Image();
    background.src = process.env.PUBLIC_URL + '/assets/background.png';

    const characterSprite = new Image();
    characterSprite.src = process.env.PUBLIC_URL + '/assets/kid.png';

    const specialTile = new Image();
    specialTile.src = process.env.PUBLIC_URL + '/assets/tv.png'; // Replace with actual path

    const tallTile = new Image();
    tallTile.src = process.env.PUBLIC_URL + '/assets/pc3.png'; // Replace with actual path

    const drawBackground = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            context.drawImage(background, 0, 0, canvas.width, canvas.height);
        }
    };

    const drawCharacter = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            const { x, y, direction, frame } = character;
            context.drawImage(
                characterSprite,
                frame * characterSpriteSize.width, directions[direction] * characterSpriteSize.height,
                characterSpriteSize.width, characterSpriteSize.height,
                x * tileSize, y * tileSize,
                characterSpriteSize.width, characterSpriteSize.height
            );
        }
    };

    const drawMap = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');

            // Draw special tile when Games component is active
            if (showContent === 'Games') {
                context.drawImage(specialTile, 2 * tileSize, 3 * tileSize, tileSize, tileSize);
            }

            // Draw tall tile when Projects component is active
            if (showContent === 'Projects') {
                context.drawImage(tallTile, 11 * tileSize, 4 * tileSize - tileSize, tileSize, tileSize * 2);
            }
        }
    };

    const update = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
            drawBackground();
            drawMap();
            drawCharacter();
        }
    };

    const isCollision = (x, y) => {
        return walkableMap[y] && (walkableMap[y][x] === 0 || walkableMap[y][x] === 2 || walkableMap[y][x] === 3 || walkableMap[y][x] === 4 || walkableMap[y][x] === 5);
    };

    const isInteractive = (x, y) => {
        return walkableMap[y] && (walkableMap[y][x] === 2 || walkableMap[y][x] === 3 || walkableMap[y][x] === 4 || walkableMap[y][x] === 5);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const handleKeyDown = (event) => {
            if (disableControls || showEmailForm) return;

            if (showContent && event.key !== 's') return;

            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
                event.preventDefault();
            }

            let newX = character.x;
            let newY = character.y;
            let newDirection = character.direction;
            let newFrame = (character.frame + 1) % 3;

            switch (event.key) {
                case 'ArrowUp':
                    newY -= 1;
                    newDirection = 'up';
                    break;
                case 'ArrowDown':
                    newY += 1;
                    newDirection = 'down';
                    break;
                case 'ArrowLeft':
                    newX -= 1;
                    newDirection = 'left';
                    break;
                case 'ArrowRight':
                    newX += 1;
                    newDirection = 'right';
                    break;
                case 'a':
                    if (
                        isInteractive(character.x, character.y - 1) ||
                        isInteractive(character.x, character.y + 1) ||
                        isInteractive(character.x - 1, character.y) ||
                        isInteractive(character.x + 1, character.y)
                    ) {
                        if (walkableMap[character.y - 1]?.[character.x] === 2 ||
                            walkableMap[character.y + 1]?.[character.x] === 2 ||
                            walkableMap[character.y]?.[character.x - 1] === 2 ||
                            walkableMap[character.y]?.[character.x + 1] === 2) {
                            setShowContent('Projects');
                        }
                        if (walkableMap[character.y - 1]?.[character.x] === 3 ||
                            walkableMap[character.y + 1]?.[character.x] === 3 ||
                            walkableMap[character.y]?.[character.x - 1] === 3 ||
                            walkableMap[character.y]?.[character.x + 1] === 3) {
                            setShowContent('Games');
                        }
                        if (walkableMap[character.y - 1]?.[character.x] === 4 ||
                            walkableMap[character.y + 1]?.[character.x] === 4 ||
                            walkableMap[character.y]?.[character.x - 1] === 4 ||
                            walkableMap[character.y]?.[character.x + 1] === 4) {
                            setShowContent('Board');
                        }
                        if (walkableMap[character.y - 1]?.[character.x] === 5 ||
                            walkableMap[character.y + 1]?.[character.x] === 5 ||
                            walkableMap[character.y]?.[character.x - 1] === 5 ||
                            walkableMap[character.y]?.[character.x + 1] === 5) {
                            setShowContent('SpotifyEmbed');
                        }
                    }
                    break;
                case 's':
                    setShowContent(null);
                    break;
                default:
                    break;
            }

            if (newX !== character.x || newY !== character.y) {
                if (!isCollision(newX, newY)) {
                    if (newX >= 0 && newY >= 0 && newX < canvas.width / tileSize && newY < canvas.height / tileSize) {
                        setCharacter({ x: newX, y: newY, direction: newDirection, frame: newFrame });
                    }
                } else {
                    setCharacter({ ...character, direction: newDirection, frame: newFrame });
                }
            } else {
                setCharacter({ ...character, direction: newDirection, frame: newFrame });
            }

            update();
        };

        document.addEventListener('keydown', handleKeyDown);

        background.onload = () => {
            characterSprite.onload = () => {
                update();
            };
        };

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [character, showContent, disableControls, showEmailForm, background, characterSprite]);

    const moveCharacterToTile = (targetX, targetY, content) => {
        const path = calculatePath(character.x, character.y, targetX, targetY);

        let index = 0;
        const moveStep = () => {
            if (index < path.length) {
                const [newX, newY] = path[index];
                setCharacter(prev => ({
                    ...prev,
                    x: newX,
                    y: newY,
                    direction: getDirection(prev.x, prev.y, newX, newY),
                    frame: (prev.frame + 1) % 3
                }));
                index++;
                setTimeout(moveStep, 200);
            } else {
                setCharacter(prev => ({ ...prev, direction: 'up' }));
                setShowContent(content);
            }
        };
        moveStep();
    };

    const calculatePath = (startX, startY, endX, endY) => {
        const path = [];
        let x = startX;
        let y = startY;
        while (x !== endX || y !== endY) {
            if (x < endX) x++;
            else if (x > endX) x--;
            else if (y < endY) y++;
            else if (y > endY) y--;
            path.push([x, y]);
        }
        return path;
    };

    const getDirection = (oldX, oldY, newX, newY) => {
        if (newX > oldX) return 'right';
        if (newX < oldX) return 'left';
        if (newY > oldY) return 'down';
        if (newY < oldY) return 'up';
        return 'down';
    };

    return (
        <div id="game-container">
            <div>
                <button onClick={toggleMusic} className="music-toggle-button">
                    <img src={`${process.env.PUBLIC_URL}/assets/music.png`} alt="Music Toggle" />
                </button>
                <p className="press">Press "m" to play/pause music</p>
                <p className="press">Press "a" to interact</p>
                <p className="press">Press "s" to exit</p>
                <canvas id="game-canvas" ref={canvasRef} width="512" height="448"></canvas>
                <button onClick={() => moveCharacterToTile(11, 4, 'Projects')} style={{ marginTop: '10px' }}>
                    Go to PC || View my coding projects
                </button>
                <button onClick={() => moveCharacterToTile(6, 1, 'Board')} style={{ marginTop: '10px' }}>
                    Go to Board || See my professional experience and education
                </button>
                <button onClick={() => moveCharacterToTile(3, 6, 'Games')} style={{ marginTop: '10px' }}>
                    Go to PlayStation || Explore my game projects
                </button>
                <button onClick={() => moveCharacterToTile(12, 11, 'SpotifyEmbed')} style={{ marginTop: '10px' }}>
                    Go to Record Player || Listen to my music releases
                </button>
            </div>
            <div id="right-pane">
                {showContent === 'Projects' && <Projects goBack={() => setShowContent(null)} />}
                {showContent === 'Games' && <Games goBack={() => setShowContent(null)} />}
                {showContent === 'Board' && <Board goBack={() => setShowContent(null)} />}
                {showContent === 'SpotifyEmbed' && <SpotifyEmbed goBack={() => setShowContent(null)} />}
                {!showContent && !showEmailForm && <Bio handleEmailClick={() => setShowEmailForm(true)} />}
                {showEmailForm && <EmailForm handleClose={() => setShowEmailForm(false)} />}
            </div>
        </div>
    );
};

export default Game;
