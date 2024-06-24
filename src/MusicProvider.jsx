import React, { createContext, useRef, useState, useContext } from 'react';

const MusicContext = createContext();

export const useMusic = () => useContext(MusicContext);

const MusicProvider = ({ children }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <MusicContext.Provider value={{ toggleMusic }}>
            <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/assets/music.mp3`} loop></audio>
            {children}
        </MusicContext.Provider>
    );
};

export default MusicProvider;


