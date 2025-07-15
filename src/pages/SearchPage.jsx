import { useEffect, useState } from "react";
import { Search } from "../components/Search";
import { Songs } from "../components/Songs";
import { getSongs } from "../services/api-client";
import { Player } from "../components/Player";

export const SearchPage = () => {
    const [allSongs, setSongs] = useState([]);//initially empty 
    const [loading, setLoading] = useState(false);
    const[song,setPlayerSong] = useState(null);
    //component lifecycle
    
    useEffect(()=>{
        loadSongs();
    },[])
    const[flag,setFlag] = useState(false);
    const loadSongs = async ()=>{
        setSongs(await getSongs('Latest Songs'))
    }
    const togglePlayer=(flag,songarg)=>{
        console.log("togglePlayer called", flag, songarg);
        setPlayerSong(songarg);
        setFlag(flag);
    }
    const getArtistName = async (artistName) => {
        if (!artistName.trim()) return;
        
        setLoading(true);
        try {
            const songs = await getSongs(artistName);
            setSongs(songs);
        } catch (error) {
            console.error('Error fetching songs:', error);
            setSongs([]);
        } finally {
            setLoading(false);
    }
    }
    const jsx = <div className="search-container flex justify-center my-8">
    <Search fn={getArtistName} />
</div>
    return (
        <div className="container max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
            {flag? <Player  fn={togglePlayer} song={song}/>:jsx}
            <h1 className="page-title text-3xl font-extrabold text-center text-indigo-800 mb-6 font-sans">🎵 Music Store</h1>
            {(!flag && allSongs.length > 0 && !loading) && (
              <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4 font-sans">Latest Songs</h2>
            )}
            
            {loading ? (
                <div className="loading flex items-center justify-center text-lg text-gray-500 my-8 animate-pulse">
                  🔍 Searching for songs...
                </div>
            ) : allSongs.length > 0 ? (
                <Songs fn = {togglePlayer} allSongs={allSongs} />
            ) : (
                <div className="no-results text-center text-gray-400 text-xl mt-10">
                    🎤 Search for your favorite artist to discover amazing songs!
                </div>
            )}
    </div>
    );
}