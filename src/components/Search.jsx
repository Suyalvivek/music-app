import { useRef } from "react";

export const Search = ({ fn }) => {
    const artist = useRef();
    
    const handleSubmit = (e) => {
        e.preventDefault();
            fn(artist.current.value);
    };
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };
    
    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <label className="search-label">Artist Name:</label>
            <input 
                ref={artist}
                type="text" 
                placeholder="Search for your favorite artist..." 
                className="search-input"
                onKeyPress={handleKeyPress}
            />
            <button
                type="submit" 
                className="search-button px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-base font-bold rounded-xl shadow-lg hover:from-purple-600 hover:to-indigo-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                onClick={handleSubmit}
            >
                🔍 Search
            </button>
        </form>
    );
}