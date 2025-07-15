import { useState } from "react";

export const Song = ({ song,fn }) => {
    // const [playerFlag,setPlayerFlag] = useState(false);
    const showPlayer=()=>{
        // setPlayerFlag(!playerFlag);
        fn(true,song);
    }

    return (
        <div className="song-card flex flex-col items-center justify-center text-center">
            <div> <img src={song.artworkUrl100} className="w-20 h-20 rounded-lg shadow mb-2 object-cover" alt={song.trackName}/></div>
            <div className="song-art">🎵</div>
            <div className="song-artist font-bold text-indigo-700 text-lg font-sans mb-1">{song.artistName}</div>
            <div className="song-title text-gray-700 font-medium mb-2 font-sans">{song.trackName}</div>
            <div><button onClick={showPlayer} className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-base font-bold rounded-xl shadow-lg hover:from-purple-600 hover:to-indigo-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400">play song</button></div>
        </div>
    );
};