import React, { createContext, useRef, useState, useContext, useEffect } from 'react';

const MusicContext = createContext();

export const useMusic = () => useContext(MusicContext);

const MusicProvider = ({ children }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const loopEnd = 300; // Set this to the end time (in seconds) for your custom loop

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.2; // Adjust the volume if needed
            audioRef.current.addEventListener('timeupdate', () => {
                if (audioRef.current.currentTime >= loopEnd) {
                    audioRef.current.currentTime = 0;
                    audioRef.current.play();
                }
            });
        }
    }, []);

    return (
        <MusicContext.Provider value={{ toggleMusic }}>
            <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/assets/music.mp3`} loop={false}></audio>
            {children}
        </MusicContext.Provider>
    );
};

export default MusicProvider;


